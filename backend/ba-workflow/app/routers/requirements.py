"""
Requirements Router — requirements table
CRUD for raw requirements before documents
"""
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from pydantic import BaseModel, Field
from uuid import uuid4
import asyncpg

from app.auth import CurrentUser
from app.database import get_db

router = APIRouter(prefix="/requirements", tags=["requirements"])


class RequirementCreate(BaseModel):
    project_id: str
    title: str = Field(..., max_length=255)
    raw_text: Optional[str] = None
    created_by: Optional[str] = None


class RequirementUpdate(BaseModel):
    title: Optional[str] = None
    raw_text: Optional[str] = None
    status: Optional[str] = None


@router.get("")
async def list_requirements(
    project_id: Optional[str] = Query(None),
    user: CurrentUser = None,
    db: asyncpg.Connection = Depends(get_db),
):
    if project_id:
        rows = await db.fetch(
            "SELECT * FROM requirements WHERE project_id=$1 ORDER BY created_at DESC",
            project_id
        )
    else:
        rows = await db.fetch("SELECT * FROM requirements ORDER BY created_at DESC")
    return [dict(r) for r in rows]


@router.post("", status_code=201)
async def create_requirement(
    body: RequirementCreate,
    user: CurrentUser = None,
    db: asyncpg.Connection = Depends(get_db),
):
    row = await db.fetchrow("""
        INSERT INTO requirements (id, project_id, title, raw_text, status, created_by)
        VALUES ($1,$2,$3,$4,'draft',$5) RETURNING *
    """, str(uuid4()), body.project_id, body.title, body.raw_text,
        body.created_by or (user.sub if user else "system"))
    return dict(row)


@router.get("/{req_id}")
async def get_requirement(
    req_id: str,
    user: CurrentUser = None,
    db: asyncpg.Connection = Depends(get_db),
):
    row = await db.fetchrow("SELECT * FROM requirements WHERE id=$1", req_id)
    if not row:
        raise HTTPException(404, "Requirement not found")
    return dict(row)


@router.put("/{req_id}")
async def update_requirement(
    req_id: str,
    body: RequirementUpdate,
    user: CurrentUser = None,
    db: asyncpg.Connection = Depends(get_db),
):
    updates = body.model_dump(exclude_none=True)
    if not updates:
        raise HTTPException(400, "No fields to update")
    set_parts = [f"{k}=${i+2}" for i, k in enumerate(updates.keys())]
    row = await db.fetchrow(
        f"UPDATE requirements SET {', '.join(set_parts)}, updated_at=NOW() "
        f"WHERE id=$1 RETURNING *",
        req_id, *updates.values()
    )
    if not row:
        raise HTTPException(404, "Requirement not found")
    return dict(row)


@router.delete("/{req_id}", status_code=204)
async def delete_requirement(
    req_id: str,
    user: CurrentUser = None,
    db: asyncpg.Connection = Depends(get_db),
):
    await db.execute("DELETE FROM requirements WHERE id=$1", req_id)


class GenerateDocRequest(BaseModel):
    doc_type: str = Field(..., description="E.g. BRD, BRS, ERD, API_SPEC")


@router.post("/{req_id}/generate-doc")
async def generate_document(
    req_id: str,
    body: GenerateDocRequest,
    user: CurrentUser = None,
    db: asyncpg.Connection = Depends(get_db),
):
    from app.services.ai_generator import AIGeneratorService

    row = await db.fetchrow("SELECT * FROM requirements WHERE id=$1", req_id)
    if not row:
        raise HTTPException(404, "Requirement not found")
        
    project_row = await db.fetchrow("SELECT name FROM projects WHERE id=$1", row["project_id"])
    project_name = project_row["name"] if project_row else "Project"

    # Fetch AS-IS Master Document
    master_doc_row = await db.fetchrow(
        "SELECT content FROM documents WHERE project_id=$1 AND doc_type='MASTER_DOC' AND status='approved' ORDER BY created_at DESC LIMIT 1",
        row["project_id"]
    )
    master_doc_text = ""
    if master_doc_row and master_doc_row["content"]:
        import json
        try:
            if isinstance(master_doc_row["content"], dict):
                master_doc_text = json.dumps(master_doc_row["content"])
            else:
                master_doc_text = str(master_doc_row["content"])
        except Exception:
            pass

    generated_content = await AIGeneratorService.generate_document(
        raw_text=row["raw_text"] or "",
        doc_type=body.doc_type,
        project_name=project_name,
        master_doc_text=master_doc_text
    )

    doc_id = str(uuid4())
    title = f"[{body.doc_type}] Generated from: {row['title']}"
    
    return {"id": doc_id, "doc_type": body.doc_type, "title": title, "content": generated_content}

