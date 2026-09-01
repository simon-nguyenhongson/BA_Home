"""
CR → BRS Router — sinh / chỉnh sửa / duyệt / golive tài liệu BRS của một Change Request.

Luồng (docs/design/AI-DOC-AUTOMATION-FLOW.md mục 2.1):
  CR approved → [Gen BRS] (AI skill gen_brs, context = CR + Master Doc AS-IS)
  → review/sửa tay hoặc [AI chỉnh sửa] → draft → in_review → approved → golive
  BRS approved → tự tạo task automation test (need_test)
  BRS golive  → mở nút [Merge Master Doc] (router master_docs.py)
"""
from __future__ import annotations

from typing import Optional
from uuid import uuid4

import asyncpg
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field

from app.auth import CurrentUser
from app.database import get_db
from app.services.ai_agent import run_skill
from app.services.audit_service import log_audit

router = APIRouter(tags=["cr-brs"])

# State machine: trạng thái hiện tại → {action: trạng thái mới}
BRS_TRANSITIONS: dict[str, dict[str, str]] = {
    "draft":     {"submit_review": "in_review"},
    "in_review": {"approve": "approved", "reject": "draft"},
    "approved":  {"golive": "golive"},
    "golive":    {},
}


class BrsGenerateRequest(BaseModel):
    skill_code: str = "gen_brs"
    note: str = ""


class BrsReviseRequest(BaseModel):
    instruction: str = Field(..., min_length=3)
    skill_code: str = "gen_brs"


class BrsUpdate(BaseModel):
    title: Optional[str] = Field(None, max_length=300)
    content: Optional[str] = None


class BrsStatusRequest(BaseModel):
    action: str
    note: str = ""


# ── Helpers ──────────────────────────────────────────────────────────────────
async def _get_cr_or_404(db: asyncpg.Connection, cr_id: str) -> asyncpg.Record:
    row = await db.fetchrow(
        """
        SELECT cr.*,
               p.name AS project_name, p.code AS project_code,
               cp.product_name, cp.product_code
        FROM change_requests cr
        LEFT JOIN projects p          ON p.id  = cr.project_id
        LEFT JOIN catalog_products cp ON cp.id = cr.product_id
        WHERE cr.id = $1
        """,
        cr_id,
    )
    if not row:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "CR không tồn tại"})
    return row


async def _get_brs_or_404(db: asyncpg.Connection, brs_id: str) -> asyncpg.Record:
    row = await db.fetchrow("SELECT * FROM cr_brs_documents WHERE id = $1", brs_id)
    if not row:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "BRS không tồn tại"})
    return row


async def _master_doc_context(db: asyncpg.Connection, product_id: Optional[str]) -> str:
    """
    Nội dung Master Doc hiện hành của sản phẩm bị tác động — bối cảnh AS-IS cho AI.

    Raise nếu thiếu, KHÔNG trả chuỗi rỗng. Trước V052 hàm này trả "" khi CR chưa gắn
    sản phẩm hoặc sản phẩm chưa có Master Doc, nên AI vẫn sinh BRS nhưng phần AS-IS là
    suy đoán — tài liệu trông đúng mà nội dung hiện trạng bịa ra. Với ngân hàng đó là
    lỗi nặng hơn hẳn việc báo lỗi và dừng lại.
    """
    if not product_id:
        raise HTTPException(
            409,
            detail={
                "code": "CR_NO_PRODUCT",
                "message": "CR chưa gắn sản phẩm. BRS phải nêu AS-IS → TO-BE, mà AS-IS lấy từ "
                           "Master Doc của sản phẩm — chưa có thì AI sẽ phải suy đoán hiện trạng. "
                           "Mở CR ở màn Requests và chọn sản phẩm bị tác động trước.",
            },
        )
    row = await db.fetchrow(
        """
        SELECT md.title, md.content, md.current_version, cp.product_name
        FROM master_documents md
        LEFT JOIN catalog_products cp ON cp.id = md.product_id
        WHERE md.product_id = $1
        """,
        product_id,
    )
    if not row or not (row["content"] or "").strip():
        product_name = await db.fetchval(
            "SELECT product_name FROM catalog_products WHERE id = $1", product_id
        )
        raise HTTPException(
            409,
            detail={
                "code": "MASTER_DOC_MISSING",
                "message": f"Sản phẩm «{product_name or product_id}» chưa có Master Doc "
                           "(hoặc Master Doc đang rỗng). Vào Tài liệu → Sản phẩm → Master Doc "
                           "để khởi tạo bản v1.0 bằng cách import tài liệu đặc tả sẵn có, "
                           "rồi quay lại sinh BRS.",
            },
        )
    return (
        f"=== MASTER DOC HIỆN HÀNH — {row['product_name'] or ''} "
        f"({row['title']}, {row['current_version']}) ===\n{row['content']}\n"
    )


def _cr_block(cr: asyncpg.Record) -> str:
    # Sản phẩm là chủ sở hữu CR nên phải đứng trước; dự án chỉ là nguồn tài trợ và có thể trống
    project = (
        f"{cr['project_code'] or ''} — {cr['project_name'] or ''}".strip(" —")
        or "không thuộc dự án nào"
    )
    return (
        f"=== CHANGE REQUEST ===\n"
        f"Mã CR: {cr['request_code']}\n"
        f"Tiêu đề: {cr['title']}\n"
        f"Sản phẩm bị tác động: {cr.get('product_name') or ''}\n"
        f"Loại thay đổi: {cr.get('change_type') or ''}\n"
        f"Độ ưu tiên: {cr.get('priority') or ''}\n"
        f"Dự án tài trợ: {project}\n"
        f"Mô tả:\n{cr.get('description') or ''}\n"
        f"Ghi chú: {cr.get('notes') or ''}\n"
    )


async def _save_history(
    db: asyncpg.Connection,
    brs_id: str,
    version: int,
    content: str,
    source: str,
    note: str,
    actor: str,
) -> None:
    await db.execute(
        """
        INSERT INTO cr_brs_history (id, brs_id, version, content, change_note, source, created_by)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        """,
        str(uuid4()), brs_id, version, content, note, source, actor,
    )


async def _log_cr_history(
    db: asyncpg.Connection,
    cr_id: str,
    action: str,
    note: str,
    actor: str,
    from_status: Optional[str] = None,
    to_status: Optional[str] = None,
) -> None:
    """Ghi vào request_history của CR để timeline CR thấy được hoạt động BRS."""
    await db.execute(
        """
        INSERT INTO request_history
            (ref_type, ref_id, action, actor, from_status, to_status, comment)
        VALUES ('cr', $1::uuid, $2, $3, $4, $5, $6)
        """,
        cr_id, action, actor, from_status, to_status, note,
    )


# ── Sinh BRS bằng AI ─────────────────────────────────────────────────────────
@router.post("/requests/change-requests/{cr_id}/brs/generate", status_code=201)
async def generate_brs(
    user: CurrentUser,
    cr_id: str,
    body: BrsGenerateRequest,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """[Gen BRS] — AI sinh BRS từ CR đã duyệt, dùng Master Doc làm bối cảnh AS-IS."""
    cr = await _get_cr_or_404(db, cr_id)
    if cr["status"] not in ("approved", "implementing", "implemented"):
        raise HTTPException(
            409,
            detail={
                "code": "CR_NOT_APPROVED",
                "message": "CR phải được duyệt trước khi sinh BRS.",
            },
        )

    existing = await db.fetchrow("SELECT * FROM cr_brs_documents WHERE cr_id = $1", cr_id)
    if existing and existing["status"] in ("approved", "golive"):
        raise HTTPException(
            409,
            detail={
                "code": "BRS_LOCKED",
                "message": "BRS đã duyệt/golive — không sinh lại được. Tạo CR mới nếu cần thay đổi.",
            },
        )

    master_ctx = await _master_doc_context(db, cr.get("product_id"))
    prompt = (
        f"{master_ctx}\n{_cr_block(cr)}\n"
        f"{('Yêu cầu bổ sung từ BA: ' + body.note) if body.note.strip() else ''}\n\n"
        "Viết tài liệu BRS cho Change Request trên."
    )
    content = await run_skill(db, body.skill_code, prompt)
    title = f"BRS — {cr['request_code']} {cr['title']}"

    if existing:
        new_version = existing["version"] + 1
        row = await db.fetchrow(
            """
            UPDATE cr_brs_documents
            SET title = $2, content = $3, version = $4, status = 'draft',
                skill_code = $5, updated_by = $6, updated_at = NOW()
            WHERE id = $1 RETURNING *
            """,
            existing["id"], title, content, new_version, body.skill_code, user.sub,
        )
        brs_id = str(existing["id"])
    else:
        brs_id = str(uuid4())
        new_version = 1
        row = await db.fetchrow(
            """
            INSERT INTO cr_brs_documents
                (id, cr_id, title, content, version, status, skill_code, created_by, updated_by)
            VALUES ($1, $2, $3, $4, 1, 'draft', $5, $6, $6)
            RETURNING *
            """,
            brs_id, cr_id, title, content, body.skill_code, user.sub,
        )

    await _save_history(db, brs_id, new_version, content, "generate", body.note, user.sub)
    await _log_cr_history(db, cr_id, "BRS_GENERATED", f"AI sinh BRS v{new_version}", user.sub)
    await log_audit(
        db=db, entity_type="cr_brs_documents", entity_id=brs_id, action="CREATE",
        changed_by=user.sub, new_values={"cr_id": cr_id, "version": new_version, "skill": body.skill_code},
    )
    return {"data": dict(row)}


@router.post("/brs/{brs_id}/revise")
async def revise_brs(
    user: CurrentUser,
    brs_id: str,
    body: BrsReviseRequest,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """[AI chỉnh sửa] — AI sửa BRS hiện tại theo chỉ dẫn của BA."""
    brs = await _get_brs_or_404(db, brs_id)
    if brs["status"] not in ("draft", "in_review"):
        raise HTTPException(
            409,
            detail={
                "code": "BRS_LOCKED",
                "message": "Chỉ chỉnh sửa được BRS ở trạng thái nháp hoặc đang review.",
            },
        )
    cr = await _get_cr_or_404(db, str(brs["cr_id"]))
    master_ctx = await _master_doc_context(db, cr.get("product_id"))

    prompt = (
        f"{master_ctx}\n{_cr_block(cr)}\n"
        f"=== BRS HIỆN TẠI ===\n{brs['content']}\n\n"
        f"=== YÊU CẦU CHỈNH SỬA CỦA BA ===\n{body.instruction}\n\n"
        "Trả về TOÀN BỘ tài liệu BRS sau khi đã chỉnh sửa theo yêu cầu trên, "
        "giữ nguyên cấu trúc và các phần không liên quan."
    )
    content = await run_skill(db, body.skill_code, prompt)
    new_version = brs["version"] + 1
    row = await db.fetchrow(
        """
        UPDATE cr_brs_documents
        SET content = $2, version = $3, updated_by = $4, updated_at = NOW()
        WHERE id = $1 RETURNING *
        """,
        brs_id, content, new_version, user.sub,
    )
    await _save_history(db, brs_id, new_version, content, "revise", body.instruction, user.sub)
    await log_audit(
        db=db, entity_type="cr_brs_documents", entity_id=brs_id, action="UPDATE",
        changed_by=user.sub, new_values={"version": new_version, "mode": "ai_revise"},
    )
    return {"data": dict(row)}


@router.put("/brs/{brs_id}")
async def update_brs(
    user: CurrentUser,
    brs_id: str,
    body: BrsUpdate,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """BA sửa tay nội dung BRS."""
    brs = await _get_brs_or_404(db, brs_id)
    if brs["status"] not in ("draft", "in_review"):
        raise HTTPException(
            409,
            detail={
                "code": "BRS_LOCKED",
                "message": "Chỉ sửa được BRS ở trạng thái nháp hoặc đang review.",
            },
        )
    updates = body.model_dump(exclude_none=True)
    if not updates:
        raise HTTPException(
            400, detail={"code": "VALIDATION_ERROR", "message": "Không có thay đổi nào"}
        )
    new_version = brs["version"] + 1
    set_parts = [f"{k} = ${i + 4}" for i, k in enumerate(updates.keys())]
    row = await db.fetchrow(
        f"UPDATE cr_brs_documents SET {', '.join(set_parts)}, version = $2, "
        f"updated_by = $3, updated_at = NOW() WHERE id = $1 RETURNING *",
        brs_id, new_version, user.sub, *updates.values(),
    )
    await _save_history(
        db, brs_id, new_version, row["content"], "manual_edit", "BA chỉnh sửa tay", user.sub
    )
    await log_audit(
        db=db, entity_type="cr_brs_documents", entity_id=brs_id, action="UPDATE",
        changed_by=user.sub, new_values={"version": new_version, "mode": "manual"},
    )
    return {"data": dict(row)}


@router.post("/brs/{brs_id}/status")
async def change_brs_status(
    user: CurrentUser,
    brs_id: str,
    body: BrsStatusRequest,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """State machine BRS: draft → in_review → approved → golive (reject quay lại draft)."""
    brs = await _get_brs_or_404(db, brs_id)
    current = brs["status"]
    allowed = BRS_TRANSITIONS.get(current, {})
    if body.action not in allowed:
        raise HTTPException(
            409,
            detail={
                "code": "INVALID_TRANSITION",
                "message": f"Không thể '{body.action}' khi BRS đang ở trạng thái '{current}'.",
                "allowed": list(allowed.keys()),
            },
        )
    if body.action == "reject" and not body.note.strip():
        raise HTTPException(
            400,
            detail={"code": "NOTE_REQUIRED", "message": "Phải nhập lý do khi từ chối BRS."},
        )

    new_status = allowed[body.action]
    sets = ["status = $2", "updated_by = $3", "updated_at = NOW()"]
    if body.action == "approve":
        sets += ["approved_by = $3", "approved_at = NOW()"]
    elif body.action == "golive":
        sets += ["golive_by = $3", "golive_at = NOW()"]

    row = await db.fetchrow(
        f"UPDATE cr_brs_documents SET {', '.join(sets)} WHERE id = $1 RETURNING *",
        brs_id, new_status, user.sub,
    )

    # BRS approved → tự tạo task automation test cho CR (need_test)
    task_created = False
    if new_status == "approved":
        existing_task = await db.fetchrow(
            "SELECT id FROM automation_test_tasks WHERE cr_id = $1", brs["cr_id"]
        )
        if not existing_task:
            await db.execute(
                """
                INSERT INTO automation_test_tasks (id, cr_id, brs_id, status)
                VALUES ($1, $2, $3, 'need_test')
                """,
                str(uuid4()), brs["cr_id"], brs_id,
            )
            task_created = True
        else:
            await db.execute(
                "UPDATE automation_test_tasks SET brs_id = $2, updated_at = NOW() WHERE id = $1",
                existing_task["id"], brs_id,
            )

    await _save_history(
        db, brs_id, brs["version"], brs["content"], "status_change",
        f"{current} → {new_status}. {body.note}".strip(), user.sub,
    )
    await _log_cr_history(
        db, str(brs["cr_id"]), f"BRS_{body.action.upper()}",
        f"BRS {current} → {new_status}. {body.note}".strip(), user.sub,
        from_status=current, to_status=new_status,
    )
    await log_audit(
        db=db, entity_type="cr_brs_documents", entity_id=brs_id, action="STATUS_CHANGE",
        changed_by=user.sub, old_values={"status": current}, new_values={"status": new_status},
        notes=body.note,
    )
    return {"data": dict(row), "meta": {"automation_task_created": task_created}}


# ── Đọc ──────────────────────────────────────────────────────────────────────
@router.get("/requests/change-requests/{cr_id}/brs")
async def get_brs_of_cr(
    user: CurrentUser,
    cr_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    row = await db.fetchrow("SELECT * FROM cr_brs_documents WHERE cr_id = $1", cr_id)
    return {"data": dict(row) if row else None}


@router.get("/brs/{brs_id}")
async def get_brs(
    user: CurrentUser,
    brs_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    brs = await _get_brs_or_404(db, brs_id)
    return {"data": dict(brs)}


@router.get("/brs/{brs_id}/history")
async def get_brs_history(
    user: CurrentUser,
    brs_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    await _get_brs_or_404(db, brs_id)
    rows = await db.fetch(
        """
        SELECT id, version, change_note, source, created_by, created_at,
               LENGTH(content) AS content_length
        FROM cr_brs_history WHERE brs_id = $1 ORDER BY version DESC, created_at DESC
        """,
        brs_id,
    )
    return {"data": [dict(r) for r in rows]}


@router.get("/brs/{brs_id}/history/{history_id}")
async def get_brs_history_content(
    user: CurrentUser,
    brs_id: str,
    history_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    row = await db.fetchrow(
        "SELECT * FROM cr_brs_history WHERE id = $1 AND brs_id = $2", history_id, brs_id
    )
    if not row:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "Phiên bản không tồn tại"})
    return {"data": dict(row)}


@router.get("/brs")
async def list_brs(
    user: CurrentUser,
    status: Optional[str] = None,
    project_id: Optional[str] = None,
    product_id: Optional[str] = None,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    conditions: list[str] = []
    params: list = []
    if status:
        params.append(status)
        conditions.append(f"b.status = ${len(params)}")
    if project_id:
        params.append(project_id)
        conditions.append(f"cr.project_id = ${len(params)}")
    if product_id:
        params.append(product_id)
        conditions.append(f"cr.product_id = ${len(params)}")
    where = f"WHERE {' AND '.join(conditions)}" if conditions else ""
    rows = await db.fetch(
        f"""
        SELECT b.id, b.cr_id, b.title, b.version, b.status, b.updated_at,
               cr.request_code, cr.title AS cr_title, cr.project_id, cr.product_id,
               p.code AS project_code, p.name AS project_name
        FROM cr_brs_documents b
        JOIN change_requests cr ON cr.id = b.cr_id
        LEFT JOIN projects p ON p.id = cr.project_id
        {where}
        ORDER BY b.updated_at DESC
        """,
        *params,
    )
    return {"data": [dict(r) for r in rows]}
