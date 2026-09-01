"""
Master Doc Router — tài liệu tổng của một hệ thống, cập nhật bằng AI khi CR golive.

Luồng (docs/design/AI-DOC-AUTOMATION-FLOW.md mục 2.2):
  BRS golive → [Merge Master Doc] → AI skill update_master_doc sinh bản ĐỀ XUẤT (pending)
  → BA xem diff side-by-side → Approve mới thực sự ghi đè Master Doc (tăng version)
  Compare đa chiều: diff 2 version bất kỳ · diff bản đề xuất với bản gốc ·
  truy vết "CR này sửa chỗ nào trong Master Doc".
"""
from __future__ import annotations

import difflib
import re
from datetime import datetime
from typing import Optional
from uuid import uuid4

import asyncpg
from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, Field

from app.auth import CurrentUser
from app.database import get_db
from app.services.ai_agent import run_skill
from app.services.audit_service import log_audit

router = APIRouter(tags=["master-docs"])


class MasterDocCreate(BaseModel):
    product_id: str
    title: str = Field(..., max_length=300)
    content: str = ""


class MasterDocUpdate(BaseModel):
    title: Optional[str] = Field(None, max_length=300)
    content: Optional[str] = None
    # Không có giá trị mặc định: sửa tay Master Doc bắt buộc nêu lý do, lý do đi vào
    # hồ sơ kiểm toán. Trước đây mặc định "Cập nhật thủ công" nên hồ sơ vô nghĩa.
    change_summary: str = ""


class MergeRequest(BaseModel):
    skill_code: str = "update_master_doc"
    note: str = ""


class RejectRequest(BaseModel):
    reason: str = Field(..., min_length=3)


# ── Diff helper ──────────────────────────────────────────────────────────────
def build_diff(left: str, right: str) -> dict:
    """
    So sánh 2 phiên bản tài liệu theo dòng, trả cấu trúc để FE render side-by-side.
    rows[i] = {type: same|add|del|change, left_no, right_no, left, right}
    """
    left_lines = (left or "").splitlines()
    right_lines = (right or "").splitlines()
    matcher = difflib.SequenceMatcher(None, left_lines, right_lines, autojunk=False)

    rows: list[dict] = []
    added = removed = changed = 0

    for tag, i1, i2, j1, j2 in matcher.get_opcodes():
        if tag == "equal":
            for offset in range(i2 - i1):
                rows.append({
                    "type": "same",
                    "left_no": i1 + offset + 1, "right_no": j1 + offset + 1,
                    "left": left_lines[i1 + offset], "right": right_lines[j1 + offset],
                })
        elif tag == "replace":
            span = max(i2 - i1, j2 - j1)
            changed += span
            for offset in range(span):
                li = i1 + offset
                rj = j1 + offset
                rows.append({
                    "type": "change",
                    "left_no": li + 1 if li < i2 else None,
                    "right_no": rj + 1 if rj < j2 else None,
                    "left": left_lines[li] if li < i2 else "",
                    "right": right_lines[rj] if rj < j2 else "",
                })
        elif tag == "delete":
            removed += i2 - i1
            for offset in range(i2 - i1):
                rows.append({
                    "type": "del",
                    "left_no": i1 + offset + 1, "right_no": None,
                    "left": left_lines[i1 + offset], "right": "",
                })
        elif tag == "insert":
            added += j2 - j1
            for offset in range(j2 - j1):
                rows.append({
                    "type": "add",
                    "left_no": None, "right_no": j1 + offset + 1,
                    "left": "", "right": right_lines[j1 + offset],
                })

    return {
        "stats": {"added": added, "removed": removed, "changed": changed,
                  "left_lines": len(left_lines), "right_lines": len(right_lines)},
        "rows": rows,
    }


def _split_ai_merge_output(raw: str) -> tuple[str, str]:
    """Tách <CHANGE_SUMMARY> và <MASTER_DOC> từ đầu ra của skill update_master_doc."""
    summary_match = re.search(r"<CHANGE_SUMMARY>(.*?)</CHANGE_SUMMARY>", raw, re.DOTALL)
    doc_match = re.search(r"<MASTER_DOC>(.*?)</MASTER_DOC>", raw, re.DOTALL)
    if not doc_match:
        raise HTTPException(
            502,
            detail={
                "code": "AI_FORMAT_ERROR",
                "message": "AI không trả về khối <MASTER_DOC>. Kiểm tra lại skill update_master_doc.",
                "raw_preview": raw[:500],
            },
        )
    summary = summary_match.group(1).strip() if summary_match else "Cập nhật từ BRS"
    return summary, doc_match.group(1).strip()


async def _get_doc_or_404(db: asyncpg.Connection, doc_id: str) -> asyncpg.Record:
    row = await db.fetchrow("SELECT * FROM master_documents WHERE id = $1", doc_id)
    if not row:
        raise HTTPException(
            404, detail={"code": "NOT_FOUND", "message": "Master Doc không tồn tại"}
        )
    return row


async def _version_content(db: asyncpg.Connection, version_id: str) -> asyncpg.Record:
    row = await db.fetchrow("SELECT * FROM master_doc_versions WHERE id = $1", version_id)
    if not row:
        raise HTTPException(
            404, detail={"code": "NOT_FOUND", "message": "Phiên bản không tồn tại"}
        )
    return row


# ── CRUD Master Doc ──────────────────────────────────────────────────────────
@router.get("/master-docs")
async def list_master_docs(
    user: CurrentUser,
    product_id: Optional[str] = None,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    where = "WHERE md.product_id = $1" if product_id else ""
    params = [product_id] if product_id else []
    rows = await db.fetch(
        f"""
        SELECT md.*, cp.product_name, cp.product_code,
               (SELECT COUNT(*) FROM master_doc_versions v
                 WHERE v.master_doc_id = md.id AND v.status = 'pending') AS pending_count
        FROM master_documents md
        LEFT JOIN catalog_products cp ON cp.id = md.product_id
        {where}
        ORDER BY md.updated_at DESC
        """,
        *params,
    )
    return {"data": [dict(r) for r in rows]}


@router.get("/master-docs/{doc_id}")
async def get_master_doc(
    user: CurrentUser,
    doc_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    row = await db.fetchrow(
        """
        SELECT md.*, cp.product_name, cp.product_code
        FROM master_documents md
        LEFT JOIN catalog_products cp ON cp.id = md.product_id
        WHERE md.id = $1
        """,
        doc_id,
    )
    if not row:
        raise HTTPException(
            404, detail={"code": "NOT_FOUND", "message": "Master Doc không tồn tại"}
        )
    return {"data": dict(row)}


@router.post("/master-docs", status_code=201)
async def create_master_doc(
    user: CurrentUser,
    body: MasterDocCreate,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    doc_id = str(uuid4())
    try:
        async with db.transaction():
            row = await db.fetchrow(
                """
                INSERT INTO master_documents
                    (id, product_id, title, content, current_version, current_version_no,
                     status, created_by, updated_by)
                VALUES ($1, $2, $3, $4, 'v1.0', 1, 'active', $5, $5)
                RETURNING *
                """,
                doc_id, body.product_id, body.title, body.content, user.sub,
            )
            await db.execute(
                """
                INSERT INTO master_doc_versions
                    (id, master_doc_id, version_no, version, content, change_summary,
                     source, status, approved_by, approved_at, created_by)
                VALUES ($1, $2, 1, 'v1.0', $3, 'Khởi tạo Master Doc', 'initial',
                        'approved', $4, NOW(), $4)
                """,
                str(uuid4()), doc_id, body.content, user.sub,
            )
    except asyncpg.UniqueViolationError:
        raise HTTPException(
            409,
            detail={"code": "CONFLICT", "message": "Hệ thống này đã có Master Doc."},
        )
    await log_audit(
        db=db, entity_type="master_documents", entity_id=doc_id, action="CREATE",
        changed_by=user.sub, new_values={"product_id": body.product_id, "title": body.title},
    )
    return {"data": dict(row)}


@router.put("/master-docs/{doc_id}")
async def update_master_doc_manual(
    user: CurrentUser,
    doc_id: str,
    body: MasterDocUpdate,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """
    Sửa tay Master Doc — tạo CR NỘI BỘ và bản ĐỀ XUẤT chờ duyệt.

    Quyết định của PO (2026-09-01): "sửa tay masterdoc đều phải qua duyệt. vẫn là CR nhưng
    là CR nội bộ có thể bypass BRS, test case và update thẳng vào masterdoc."

    Trước V052 endpoint này ghi đè Master Doc ngay và tự đánh dấu 'approved' — một người
    vừa sửa vừa tự duyệt tài liệu đặc tả hệ thống, trái maker-checker. Nay:
      1. Sinh CR nội bộ (cr_kind='internal') gắn với sản phẩm của Master Doc — có mã CR
         để truy vết, KHÔNG cần BRS, KHÔNG sinh task test.
      2. Tạo version 'manual' ở trạng thái 'pending', chưa đụng vào nội dung Master Doc.
      3. Nội dung chỉ thay đổi khi ai đó gọi /master-docs/versions/{id}/approve.

    Trả về bản đề xuất, KHÔNG trả Master Doc đã đổi — vì nó chưa đổi.
    """
    doc = await _get_doc_or_404(db, doc_id)

    if body.content is None and body.title is None:
        raise HTTPException(
            400,
            detail={
                "code": "NOTHING_TO_CHANGE",
                "message": "Không có nội dung nào được sửa.",
            },
        )

    reason = (body.change_summary or "").strip()
    if len(reason) < 5:
        raise HTTPException(
            400,
            detail={
                "code": "REASON_REQUIRED",
                "message": "Sửa tay Master Doc phải nêu lý do (ít nhất 5 ký tự) — "
                           "lý do này đi vào hồ sơ kiểm toán của tài liệu.",
            },
        )

    new_content = body.content if body.content is not None else doc["content"]
    if new_content == doc["content"] and (body.title or doc["title"]) == doc["title"]:
        raise HTTPException(
            400,
            detail={
                "code": "NOTHING_TO_CHANGE",
                "message": "Nội dung không khác bản hiện tại.",
            },
        )

    version_id = str(uuid4())
    async with db.transaction():
        # 1. CR nội bộ — dùng cùng bộ đếm mã CR để mã không trùng và tra được cùng một chỗ
        seq = await db.fetchval("SELECT nextval('cr_seq')")
        cr_code = f"CR-{datetime.now().year}-{seq:03d}"
        cr_id = await db.fetchval(
            """
            INSERT INTO change_requests
                (request_code, product_id, cr_kind, title, description, change_type,
                 priority, status, requested_by, notes)
            VALUES ($1, $2, 'internal', $3, $4, 'process', 'medium', 'approved', $5,
                    'CR nội bộ sinh tự động khi sửa tay Master Doc')
            RETURNING id
            """,
            cr_code, doc["product_id"],
            f"Sửa tay Master Doc: {reason[:180]}",
            reason, user.sub,
        )
        await db.execute(
            """
            INSERT INTO request_history
                (ref_type, ref_id, action, actor, from_status, to_status, comment)
            VALUES ('cr', $1, 'created_internal', $2, NULL, 'approved', $3)
            """,
            cr_id, user.sub, reason,
        )

        # 2. Bản đề xuất — version_no để NULL cho tới khi được duyệt (giống luồng merge BRS)
        await db.execute(
            """
            INSERT INTO master_doc_versions
                (id, master_doc_id, version_no, version, content, change_summary,
                 source, status, base_version_no, internal_cr_id, created_by)
            VALUES ($1, $2, NULL, 'pending', $3, $4, 'manual', 'pending', $5, $6, $7)
            """,
            version_id, doc_id, new_content, reason,
            doc["current_version_no"], cr_id, user.sub,
        )

        # Tiêu đề không phải nội dung đặc tả → đổi được ngay, không cần duyệt
        if body.title and body.title != doc["title"]:
            await db.execute(
                "UPDATE master_documents SET title=$2, updated_by=$3, updated_at=NOW() "
                "WHERE id=$1",
                doc_id, body.title, user.sub,
            )

    await log_audit(
        db=db, entity_type="master_documents", entity_id=doc_id, action="UPDATE",
        changed_by=user.sub,
        new_values={"mode": "manual_proposal", "version_id": version_id,
                    "internal_cr": cr_code},
        notes=reason,
    )

    diff = build_diff(doc["content"], new_content)
    return {
        "data": {
            "version_id": version_id,
            "master_doc_id": doc_id,
            "status": "pending",
            "change_summary": reason,
            "internal_cr_id": str(cr_id),
            "internal_cr_code": cr_code,
            "base_version_no": doc["current_version_no"],
        },
        "diff": diff,
        "meta": {
            "message": "Đã tạo bản đề xuất chờ duyệt. Master Doc CHƯA thay đổi — "
                       f"cần duyệt bản này (CR nội bộ {cr_code}) để nội dung có hiệu lực.",
        },
    }


# ── Version & merge ──────────────────────────────────────────────────────────
@router.get("/master-docs/{doc_id}/versions")
async def list_versions(
    user: CurrentUser,
    doc_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """Lịch sử phiên bản kèm danh sách CR đã merge vào từng phiên bản."""
    await _get_doc_or_404(db, doc_id)
    versions = await db.fetch(
        """
        SELECT id, version_no, version, change_summary, source, status,
               base_version_no, brs_id, created_by, created_at, approved_by, approved_at,
               LENGTH(content) AS content_length
        FROM master_doc_versions
        WHERE master_doc_id = $1
        ORDER BY status = 'pending' DESC, version_no DESC NULLS FIRST, created_at DESC
        """,
        doc_id,
    )
    version_ids = [v["id"] for v in versions]
    cr_map: dict[str, list] = {}
    if version_ids:
        cr_rows = await db.fetch(
            """
            SELECT version_id, cr_id, cr_code, cr_title, cr_change_type, cr_priority,
                   project_code, project_name, merged_by, merged_at
            FROM master_doc_version_crs
            WHERE version_id = ANY($1::uuid[])
            ORDER BY merged_at
            """,
            version_ids,
        )
        for r in cr_rows:
            cr_map.setdefault(str(r["version_id"]), []).append(dict(r))

    data = []
    for v in versions:
        d = dict(v)
        d["crs"] = cr_map.get(str(v["id"]), [])
        data.append(d)
    return {"data": data}


@router.get("/master-docs/versions/{version_id}")
async def get_version(
    user: CurrentUser,
    version_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    row = await _version_content(db, version_id)
    crs = await db.fetch(
        "SELECT * FROM master_doc_version_crs WHERE version_id = $1 ORDER BY merged_at",
        version_id,
    )
    return {"data": {**dict(row), "crs": [dict(c) for c in crs]}}


@router.post("/brs/{brs_id}/merge-master-doc", status_code=201)
async def merge_brs_into_master_doc(
    user: CurrentUser,
    brs_id: str,
    body: MergeRequest,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """[Merge Master Doc] — AI sinh bản ĐỀ XUẤT cập nhật Master Doc từ BRS đã golive."""
    brs = await db.fetchrow("SELECT * FROM cr_brs_documents WHERE id = $1", brs_id)
    if not brs:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "BRS không tồn tại"})
    if brs["status"] != "golive":
        raise HTTPException(
            409,
            detail={
                "code": "BRS_NOT_GOLIVE",
                "message": "BRS phải ở trạng thái golive trước khi merge vào Master Doc.",
            },
        )

    cr = await db.fetchrow(
        """
        SELECT cr.*, p.code AS project_code, p.name AS project_name
        FROM change_requests cr
        LEFT JOIN projects p ON p.id = cr.project_id
        WHERE cr.id = $1
        """,
        brs["cr_id"],
    )
    if not cr:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "CR không tồn tại"})
    if not cr["product_id"]:
        raise HTTPException(
            409,
            detail={
                "code": "CR_NO_PRODUCT",
                "message": "CR chưa gắn hệ thống (product). Gán hệ thống cho CR trước khi merge.",
            },
        )

    doc = await db.fetchrow(
        "SELECT * FROM master_documents WHERE product_id = $1", cr["product_id"]
    )
    if not doc:
        raise HTTPException(
            409,
            detail={
                "code": "MASTER_DOC_MISSING",
                "message": "Hệ thống này chưa có Master Doc. Tạo Master Doc trước khi merge.",
            },
        )

    pending = await db.fetchrow(
        "SELECT id FROM master_doc_versions WHERE master_doc_id = $1 AND status = 'pending' AND brs_id = $2",
        doc["id"], brs_id,
    )
    if pending:
        raise HTTPException(
            409,
            detail={
                "code": "MERGE_PENDING",
                "message": "BRS này đã có bản đề xuất đang chờ duyệt.",
                "version_id": str(pending["id"]),
            },
        )

    prompt = (
        f"=== MASTER DOC HIỆN HÀNH ({doc['current_version']}) ===\n{doc['content']}\n\n"
        f"=== CHANGE REQUEST ===\n"
        f"Mã: {cr['request_code']} — {cr['title']}\n"
        f"Mô tả: {cr['description'] or ''}\n\n"
        f"=== BRS ĐÃ GOLIVE (v{brs['version']}) ===\n{brs['content']}\n\n"
        f"{('Ghi chú của BA: ' + body.note) if body.note.strip() else ''}\n"
        "Cập nhật Master Doc theo BRS trên."
    )
    raw = await run_skill(db, body.skill_code, prompt)
    change_summary, new_content = _split_ai_merge_output(raw)

    version_id = str(uuid4())
    async with db.transaction():
        await db.execute(
            """
            INSERT INTO master_doc_versions
                (id, master_doc_id, version_no, version, content, change_summary,
                 source, status, base_version_no, brs_id, created_by)
            VALUES ($1, $2, NULL, $3, $4, $5, 'cr_merge', 'pending', $6, $7, $8)
            """,
            version_id, doc["id"], f"v{doc['current_version_no'] + 1}.0 (đề xuất)",
            new_content, change_summary, doc["current_version_no"], brs_id, user.sub,
        )
        await db.execute(
            """
            INSERT INTO master_doc_version_crs
                (id, version_id, master_doc_id, cr_id, cr_code, cr_title, cr_description,
                 cr_change_type, cr_priority, cr_notes, project_id, project_code,
                 project_name, merged_by)
            VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14)
            """,
            str(uuid4()), version_id, doc["id"], cr["id"], cr["request_code"], cr["title"],
            cr["description"] or "", cr["change_type"], cr["priority"], cr["notes"],
            cr["project_id"], cr["project_code"], cr["project_name"], user.sub,
        )

    await log_audit(
        db=db, entity_type="master_doc_versions", entity_id=version_id, action="CREATE",
        changed_by=user.sub,
        new_values={"master_doc_id": str(doc["id"]), "brs_id": brs_id, "status": "pending"},
    )
    diff = build_diff(doc["content"], new_content)
    return {
        "data": {
            "version_id": version_id,
            "master_doc_id": str(doc["id"]),
            "change_summary": change_summary,
            "status": "pending",
        },
        "diff": diff,
    }


@router.post("/master-docs/versions/{version_id}/approve")
async def approve_version(
    user: CurrentUser,
    version_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """Duyệt bản đề xuất — lúc này Master Doc mới thực sự được cập nhật."""
    version = await _version_content(db, version_id)
    if version["status"] != "pending":
        raise HTTPException(
            409,
            detail={
                "code": "NOT_PENDING",
                "message": f"Phiên bản đang ở trạng thái '{version['status']}', không duyệt được.",
            },
        )
    doc = await _get_doc_or_404(db, str(version["master_doc_id"]))
    if version["base_version_no"] is not None and doc["current_version_no"] != version["base_version_no"]:
        raise HTTPException(
            409,
            detail={
                "code": "STALE_PROPOSAL",
                "message": (
                    f"Master Doc đã đổi sang bản {doc['current_version']} sau khi tạo đề xuất này. "
                    "Cần merge lại để cập nhật theo bản mới nhất."
                ),
            },
        )

    new_no = doc["current_version_no"] + 1
    new_version = f"v{new_no}.0"
    async with db.transaction():
        await db.execute(
            """
            UPDATE master_doc_versions
            SET version_no = $2, version = $3, status = 'approved',
                approved_by = $4, approved_at = NOW()
            WHERE id = $1
            """,
            version_id, new_no, new_version, user.sub,
        )
        row = await db.fetchrow(
            """
            UPDATE master_documents
            SET content = $2, current_version = $3, current_version_no = $4,
                updated_by = $5, updated_at = NOW()
            WHERE id = $1 RETURNING *
            """,
            doc["id"], version["content"], new_version, new_no, user.sub,
        )
    await log_audit(
        db=db, entity_type="master_doc_versions", entity_id=version_id, action="STATUS_CHANGE",
        changed_by=user.sub, old_values={"status": "pending"},
        new_values={"status": "approved", "version": new_version},
    )
    return {"data": dict(row), "meta": {"version": new_version}}


@router.post("/master-docs/versions/{version_id}/reject")
async def reject_version(
    user: CurrentUser,
    version_id: str,
    body: RejectRequest,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    version = await _version_content(db, version_id)
    if version["status"] != "pending":
        raise HTTPException(
            409,
            detail={"code": "NOT_PENDING", "message": "Chỉ từ chối được bản đề xuất đang chờ duyệt."},
        )
    row = await db.fetchrow(
        """
        UPDATE master_doc_versions
        SET status = 'rejected', change_summary = change_summary || E'\n\n[Từ chối] ' || $2,
            approved_by = $3, approved_at = NOW()
        WHERE id = $1 RETURNING *
        """,
        version_id, body.reason, user.sub,
    )
    await log_audit(
        db=db, entity_type="master_doc_versions", entity_id=version_id, action="STATUS_CHANGE",
        changed_by=user.sub, new_values={"status": "rejected"}, notes=body.reason,
    )
    return {"data": dict(row)}


# ── Compare đa chiều ─────────────────────────────────────────────────────────
@router.get("/master-docs/{doc_id}/diff")
async def diff_versions(
    user: CurrentUser,
    doc_id: str,
    from_vid: Optional[str] = None,
    to_vid: Optional[str] = None,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """So sánh 2 phiên bản bất kỳ. Không truyền to_vid thì so với bản hiện hành."""
    doc = await _get_doc_or_404(db, doc_id)

    if from_vid:
        left_row = await _version_content(db, from_vid)
        left_content, left_label = left_row["content"], left_row["version"]
    else:
        prev = await db.fetchrow(
            """
            SELECT content, version FROM master_doc_versions
            WHERE master_doc_id = $1 AND status = 'approved' AND version_no IS NOT NULL
            ORDER BY version_no DESC OFFSET 1 LIMIT 1
            """,
            doc_id,
        )
        left_content = prev["content"] if prev else ""
        left_label = prev["version"] if prev else "(trống)"

    if to_vid:
        right_row = await _version_content(db, to_vid)
        right_content, right_label = right_row["content"], right_row["version"]
    else:
        right_content, right_label = doc["content"], doc["current_version"]

    return {
        "data": {
            "left": {"label": left_label, "version_id": from_vid},
            "right": {"label": right_label, "version_id": to_vid},
            **build_diff(left_content, right_content),
        }
    }


@router.get("/master-docs/versions/{version_id}/diff-base")
async def diff_against_base(
    user: CurrentUser,
    version_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """Diff của một phiên bản (kể cả bản đề xuất pending) với bản gốc nó dựa trên."""
    version = await _version_content(db, version_id)
    base_no = version["base_version_no"]
    base = None
    if base_no is not None:
        base = await db.fetchrow(
            """
            SELECT content, version FROM master_doc_versions
            WHERE master_doc_id = $1 AND version_no = $2 AND status = 'approved'
            """,
            version["master_doc_id"], base_no,
        )
    if base is None:
        doc = await _get_doc_or_404(db, str(version["master_doc_id"]))
        base = {"content": doc["content"], "version": doc["current_version"]}

    return {
        "data": {
            "left": {"label": base["version"]},
            "right": {"label": version["version"], "status": version["status"]},
            "change_summary": version["change_summary"],
            **build_diff(base["content"], version["content"]),
        }
    }


@router.get("/requests/change-requests/{cr_id}/master-doc-impact")
async def cr_master_doc_impact(
    user: CurrentUser,
    cr_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """
    Trả lời câu hỏi "CR này cập nhật chỗ nào trong Master Doc":
    mọi phiên bản Master Doc có CR này, kèm diff so với bản liền trước.
    """
    rows = await db.fetch(
        """
        SELECT v.id AS version_id, v.version, v.version_no, v.status, v.change_summary,
               v.content, v.base_version_no, v.created_at, v.approved_at,
               md.id AS master_doc_id, md.title AS master_doc_title,
               md.current_version, cp.product_name, cp.product_code
        FROM master_doc_version_crs c
        JOIN master_doc_versions v ON v.id = c.version_id
        JOIN master_documents md ON md.id = v.master_doc_id
        LEFT JOIN catalog_products cp ON cp.id = md.product_id
        WHERE c.cr_id = $1
        ORDER BY v.created_at DESC
        """,
        cr_id,
    )

    impacts: list[dict] = []
    for r in rows:
        base_content = ""
        base_label = "(trống)"
        if r["base_version_no"] is not None:
            base = await db.fetchrow(
                """
                SELECT content, version FROM master_doc_versions
                WHERE master_doc_id = $1 AND version_no = $2 AND status = 'approved'
                """,
                r["master_doc_id"], r["base_version_no"],
            )
            if base:
                base_content, base_label = base["content"], base["version"]
        impacts.append({
            "master_doc_id": str(r["master_doc_id"]),
            "master_doc_title": r["master_doc_title"],
            "product_name": r["product_name"],
            "product_code": r["product_code"],
            "version_id": str(r["version_id"]),
            "version": r["version"],
            "status": r["status"],
            "change_summary": r["change_summary"],
            "created_at": r["created_at"],
            "approved_at": r["approved_at"],
            "base_label": base_label,
            **build_diff(base_content, r["content"]),
        })
    return {"data": impacts}
