"""
Sync endpoints — receive data from BA Workflow and Test Platform
Internal endpoints — no user auth required
"""
from fastapi import APIRouter, Depends
import asyncpg
import json
import logging

from app.database import get_db

router = APIRouter(tags=["sync"])
logger = logging.getLogger(__name__)


@router.post("/sync-doc", status_code=200)
async def sync_doc(payload: dict, db: asyncpg.Connection = Depends(get_db)):
    """Receive approved document from BA Workflow"""
    try:
        # Try to sync to project_documents table
        doc_id = payload.get("doc_id") or payload.get("id")
        project_id = payload.get("project_id")
        if doc_id and project_id:
            # 1. Update legacy project_documents
            await db.execute("""
                INSERT INTO project_documents (project_id, doc_ref_id, doc_type, version, title, status)
                VALUES ($1,$2,$3,$4,$5,$6)
                ON CONFLICT (doc_ref_id) DO UPDATE SET
                    status=EXCLUDED.status, version=EXCLUDED.version
            """, project_id, str(doc_id),
                payload.get("doc_type"), payload.get("version"),
                payload.get("title"), payload.get("status", "approved"))

            # 2. Insert into project_files to show up in "Tài liệu" BA tab
            doc_type = payload.get("doc_type", "")
            mapping = {
                "BRD": "ba_brd",
                "BRS": "ba_frs",
                "ERD": "ba_analysis",
                "API": "ba_frs",
                "MASTER_DOC": "ba_closure"
            }
            target_ms_type = mapping.get(doc_type, "ba_brd")
            
            # Find the best matching milestone
            ms = await db.fetchrow("SELECT id FROM project_milestones WHERE project_id=$1 AND milestone_type=$2 LIMIT 1", project_id, target_ms_type)
            if not ms:
                ms = await db.fetchrow("SELECT id FROM project_milestones WHERE project_id=$1 AND track='ba' LIMIT 1", project_id)
            
            ms_id = ms["id"] if ms else None
            from uuid import uuid4
            file_name = f"{payload.get('title', 'BA_Document')}.md"
            file_version = payload.get("version", "v1.0")
            file_status = payload.get("status", "approved")
            
            # Check if file already exists in project_files
            existing_file = await db.fetchrow("SELECT id FROM project_files WHERE project_id=$1 AND name=$2", project_id, file_name)
            if existing_file:
                await db.execute("UPDATE project_files SET current_version=$1, status=$2, updated_at=NOW() WHERE id=$3",
                                 file_version, file_status, existing_file["id"])
            else:
                await db.execute("""
                    INSERT INTO project_files (id, project_id, milestone_id, name, file_type, doc_category, current_version, storage_path, status)
                    VALUES ($1,$2,$3,$4,'document',$5,$6,$7,$8)
                """, str(uuid4()), project_id, ms_id, file_name, doc_type, file_version, f"ba_synced/{doc_id}", file_status)
    except Exception as e:
        logger.warning(f"sync-doc insert warning: {e}")
    return {"status": "received"}


@router.post("/sync-test", status_code=200)
async def sync_test(payload: dict, db: asyncpg.Connection = Depends(get_db)):
    """Receive test metrics from Test Platform"""
    try:
        project_id = payload.get("project_id")
        if project_id:
            await db.execute("""
                INSERT INTO test_results
                    (project_id, report_ref, total_cases, passed, failed, coverage, executed_at)
                VALUES ($1,$2,$3,$4,$5,$6,NOW())
            """, project_id,
                str(payload.get("report_id", "")),
                payload.get("total", 0), payload.get("passed", 0),
                payload.get("failed", 0), payload.get("coverage", 0))
    except Exception as e:
        logger.warning(f"sync-test insert warning: {e}")
    return {"status": "received"}
