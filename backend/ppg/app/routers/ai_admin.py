"""
AI Admin Router — cấu hình Claude API (Settings) + kho skill chuẩn.
Thiết kế: docs/design/AI-DOC-AUTOMATION-FLOW.md mục 1.
"""
from __future__ import annotations

from typing import Optional
from uuid import uuid4

import asyncpg
from fastapi import APIRouter, Depends, HTTPException, Response
from pydantic import BaseModel, Field

from app.auth import CurrentUser
from app.database import get_db
from app.services.ai_agent import DEFAULT_MODEL, is_oauth_token, mask_key, verify_api_key
from app.services.audit_service import log_audit

router = APIRouter(tags=["ai-admin"])


# ── Models ───────────────────────────────────────────────────────────────────
class AiSettingsUpdate(BaseModel):
    anthropic_api_key: Optional[str] = None
    anthropic_model: Optional[str] = None
    anthropic_max_tokens: Optional[int] = Field(None, ge=1024, le=128000)


class SkillUpsert(BaseModel):
    code: str = Field(..., max_length=60, pattern=r"^[a-z0-9_]+$")
    name: str = Field(..., max_length=200)
    description: str = ""
    content: str = ""


class SkillUpdate(BaseModel):
    name: Optional[str] = Field(None, max_length=200)
    description: Optional[str] = None
    content: Optional[str] = None


# ── Settings ─────────────────────────────────────────────────────────────────
@router.get("/settings/ai")
async def get_ai_settings_masked(
    user: CurrentUser,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """Cấu hình AI hiện tại — API key luôn trả về dạng che."""
    rows = await db.fetch(
        "SELECT key, value, updated_by, updated_at FROM app_settings WHERE key LIKE 'anthropic_%'"
    )
    data = {r["key"]: r["value"] for r in rows}
    updated = next((r for r in rows if r["key"] == "anthropic_api_key"), None)
    credential = (data.get("anthropic_api_key") or "").strip()
    return {
        "data": {
            "anthropic_api_key_masked": mask_key(credential),
            "has_api_key": bool(credential),
            "credential_type": (
                "oauth" if credential and is_oauth_token(credential)
                else "api_key" if credential else "none"
            ),
            "anthropic_model": data.get("anthropic_model") or DEFAULT_MODEL,
            "anthropic_max_tokens": int(data.get("anthropic_max_tokens") or 32000),
            "updated_by": updated["updated_by"] if updated else None,
            "updated_at": updated["updated_at"] if updated else None,
        }
    }


@router.put("/settings/ai")
async def update_ai_settings(
    user: CurrentUser,
    body: AiSettingsUpdate,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """Cập nhật cấu hình AI. Chỉ ghi đè field được gửi lên."""
    updates: dict[str, str] = {}
    if body.anthropic_api_key is not None:
        updates["anthropic_api_key"] = body.anthropic_api_key.strip()
    if body.anthropic_model is not None:
        updates["anthropic_model"] = body.anthropic_model.strip() or DEFAULT_MODEL
    if body.anthropic_max_tokens is not None:
        updates["anthropic_max_tokens"] = str(body.anthropic_max_tokens)

    if not updates:
        raise HTTPException(
            400, detail={"code": "VALIDATION_ERROR", "message": "Không có thay đổi nào"}
        )

    for key, value in updates.items():
        await db.execute(
            """
            INSERT INTO app_settings (key, value, updated_by, updated_at)
            VALUES ($1, $2, $3, NOW())
            ON CONFLICT (key) DO UPDATE
                SET value = EXCLUDED.value,
                    updated_by = EXCLUDED.updated_by,
                    updated_at = NOW()
            """,
            key, value, user.sub,
        )

    await log_audit(
        db=db,
        entity_type="app_settings",
        entity_id="anthropic",
        action="UPDATE",
        changed_by=user.sub,
        new_values={k: ("***" if k == "anthropic_api_key" else v) for k, v in updates.items()},
    )
    return await get_ai_settings_masked(user, db)


@router.post("/settings/ai/test")
async def test_ai_key(
    user: CurrentUser,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """Gọi thử Claude API bằng key đang lưu để xác nhận hoạt động."""
    row = await db.fetchrow("SELECT value FROM app_settings WHERE key = 'anthropic_api_key'")
    key = (row["value"] if row else "").strip()
    if not key:
        raise HTTPException(
            400,
            detail={"code": "AI_KEY_MISSING", "message": "Chưa cấu hình Claude API key."},
        )
    model_row = await db.fetchrow("SELECT value FROM app_settings WHERE key = 'anthropic_model'")
    model = (model_row["value"] if model_row else "") or DEFAULT_MODEL
    result = await verify_api_key(key, model)
    return {"data": result}


# ── Kho skill ────────────────────────────────────────────────────────────────
@router.get("/ai-skills")
async def list_skills(
    user: CurrentUser,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    rows = await db.fetch(
        """
        SELECT id, code, name, description, is_system, updated_by, created_at, updated_at,
               LENGTH(content) AS content_length
        FROM ai_skills ORDER BY is_system DESC, code
        """
    )
    return {"data": [dict(r) for r in rows]}


@router.get("/ai-skills/{skill_id}")
async def get_skill(
    user: CurrentUser,
    skill_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    row = await db.fetchrow("SELECT * FROM ai_skills WHERE id = $1", skill_id)
    if not row:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "Skill không tồn tại"})
    return {"data": dict(row)}


@router.post("/ai-skills", status_code=201)
async def create_skill(
    user: CurrentUser,
    body: SkillUpsert,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    skill_id = str(uuid4())
    try:
        row = await db.fetchrow(
            """
            INSERT INTO ai_skills (id, code, name, description, content, is_system, updated_by)
            VALUES ($1, $2, $3, $4, $5, FALSE, $6) RETURNING *
            """,
            skill_id, body.code, body.name, body.description, body.content, user.sub,
        )
    except asyncpg.UniqueViolationError:
        raise HTTPException(
            409,
            detail={"code": "CONFLICT", "message": f"Skill code '{body.code}' đã tồn tại"},
        )
    await log_audit(
        db=db, entity_type="ai_skills", entity_id=skill_id, action="CREATE",
        changed_by=user.sub, new_values={"code": body.code, "name": body.name},
    )
    return {"data": dict(row)}


@router.put("/ai-skills/{skill_id}")
async def update_skill(
    user: CurrentUser,
    skill_id: str,
    body: SkillUpdate,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    existing = await db.fetchrow("SELECT * FROM ai_skills WHERE id = $1", skill_id)
    if not existing:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "Skill không tồn tại"})

    updates = body.model_dump(exclude_none=True)
    if not updates:
        raise HTTPException(
            400, detail={"code": "VALIDATION_ERROR", "message": "Không có thay đổi nào"}
        )
    set_parts = [f"{k} = ${i + 3}" for i, k in enumerate(updates.keys())]
    row = await db.fetchrow(
        f"UPDATE ai_skills SET {', '.join(set_parts)}, updated_by = $2, updated_at = NOW() "
        f"WHERE id = $1 RETURNING *",
        skill_id, user.sub, *updates.values(),
    )
    await log_audit(
        db=db, entity_type="ai_skills", entity_id=skill_id, action="UPDATE",
        changed_by=user.sub, new_values={k: "..." if k == "content" else v for k, v in updates.items()},
    )
    return {"data": dict(row)}


@router.delete("/ai-skills/{skill_id}", status_code=204, response_class=Response)
async def delete_skill(
    user: CurrentUser,
    skill_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> Response:
    row = await db.fetchrow("SELECT code, is_system FROM ai_skills WHERE id = $1", skill_id)
    if not row:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "Skill không tồn tại"})
    if row["is_system"]:
        raise HTTPException(
            409,
            detail={
                "code": "SYSTEM_SKILL",
                "message": "Không xoá được skill hệ thống. Có thể sửa nội dung thay vì xoá.",
            },
        )
    await db.execute("DELETE FROM ai_skills WHERE id = $1", skill_id)
    await log_audit(
        db=db, entity_type="ai_skills", entity_id=skill_id, action="DELETE",
        changed_by=user.sub, old_values={"code": row["code"]},
    )
    return Response(status_code=204)
