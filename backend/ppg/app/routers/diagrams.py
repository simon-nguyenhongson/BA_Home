"""
Diagram Router — quản lý / sinh bằng AI / import diagram cho Project, Product, BRS.

Quyết định của PO: QĐ-9 (STRATEGY-001). Bộ quy tắc vẽ hình lấy từ skill `diagram-design`
(repo cathrynlavery/diagram-design, MIT) nhúng tại app/skills/diagram-design — xem
ATTRIBUTION.md ở đó và services/diagram_skill.py để biết cách nạp.

Đầu ra của AI là MỘT file HTML+SVG tự chứa, lưu vào diagrams.content, hiển thị lại qua
iframe sandbox ở frontend. Mọi nội dung đều qua sanitize_diagram_html() trước khi ghi DB:
diagram có <script> hoặc tài nguyên mạng ngoài bị TỪ CHỐI, không phải bị lọc âm thầm.
"""
from __future__ import annotations

import logging
from typing import Optional

import asyncpg
from fastapi import APIRouter, Depends, HTTPException, Query, Request, Response
from fastapi.responses import StreamingResponse   # cần cho annotation trả về của 2 endpoint SSE
from pydantic import BaseModel, Field

from app.auth import CurrentUser
from app.database import get_conn, get_db
from app.services.ai_agent import run_skill
from app.services.ai_sse import sse_response
from app.services.audit_service import log_audit
from app.services.diagram_skill import (
    DIAGRAM_TYPES,
    SKILL_CODE,
    build_cached_prefix,
    check_install,
    extract_source_ir,
    list_types,
    sanitize_diagram_html,
)

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/diagrams", tags=["diagrams"])

OWNER_TABLES = {
    "project": ("projects", "name"),
    "product": ("catalog_products", "product_name"),
    "brs": ("cr_brs_documents", "title"),
}

# V053: mỗi loại chủ sở hữu có một cột khóa ngoại thật. owner_type/owner_id vẫn là hợp đồng
# API, nhưng nguồn sự thật trong DB là 3 cột dưới đây — nhờ đó xóa dự án / sản phẩm / BRS
# sẽ dọn luôn sơ đồ, không để lại dòng mồ côi mà không màn nào hiển thị.
OWNER_FK_COLUMN = {
    "project": "project_id",
    "product": "product_id",
    "brs": "brs_id",
}


# ── Models ───────────────────────────────────────────────────────────────────
class DiagramCreate(BaseModel):
    owner_type: str
    owner_id: str
    diagram_type: str
    name: str = Field(..., min_length=1, max_length=300)
    description: str = ""
    format: str = "html"
    content: str = ""


class DiagramUpdate(BaseModel):
    name: Optional[str] = Field(None, min_length=1, max_length=300)
    description: Optional[str] = None
    content: Optional[str] = None
    status: Optional[str] = None
    change_summary: str = "Cập nhật thủ công"


class GenerateRequest(BaseModel):
    owner_type: str
    owner_id: str
    diagram_type: str
    name: str = Field(..., min_length=1, max_length=300)
    # Mô tả nghiệp vụ do BA nhập. Có thể để trống nếu chọn nạp bối cảnh từ Master Doc/BRS.
    brief: str = ""
    # Nạp thêm bối cảnh từ dữ liệu đang có trong hệ (Master Doc của product / nội dung BRS)
    include_context: bool = True


class RegenerateRequest(BaseModel):
    instruction: str = Field(..., min_length=3)


class ImportRequest(BaseModel):
    owner_type: str
    owner_id: str
    diagram_type: str
    name: str = Field(..., min_length=1, max_length=300)
    source_format: str  # mermaid | drawio
    source_text: str = Field(..., min_length=3)
    # Vẽ lại bằng AI theo Design System (mặc định). Nếu False thì chỉ lưu mã nguồn Mermaid
    # để trình duyệt tự render — nhanh, không tốn hạn mức AI, nhưng không theo DS.
    redraw: bool = True


# ── Helpers ──────────────────────────────────────────────────────────────────
async def _assert_owner(db: asyncpg.Connection, owner_type: str, owner_id: str) -> str:
    """Xác nhận chủ sở hữu tồn tại và trả về tên hiển thị (dùng cho thông báo lỗi và tên gợi ý)."""
    if owner_type not in OWNER_TABLES:
        raise HTTPException(
            400,
            detail={
                "code": "OWNER_TYPE_INVALID",
                "message": f"owner_type phải thuộc {', '.join(OWNER_TABLES)}.",
            },
        )
    table, name_col = OWNER_TABLES[owner_type]
    row = await db.fetchrow(
        f"SELECT {name_col} AS label FROM {table} WHERE id = $1::uuid", owner_id
    )
    if not row:
        raise HTTPException(
            404,
            detail={
                "code": "OWNER_NOT_FOUND",
                "message": f"Không tìm thấy {owner_type} '{owner_id}'.",
            },
        )
    return row["label"]


def _row_to_dict(r: asyncpg.Record, with_content: bool = True) -> dict:
    out = {
        "id": str(r["id"]),
        "owner_type": r["owner_type"],
        "owner_id": str(r["owner_id"]),
        "diagram_type": r["diagram_type"],
        "diagram_type_label": DIAGRAM_TYPES.get(r["diagram_type"], {}).get(
            "label", r["diagram_type"]
        ),
        "name": r["name"],
        "description": r["description"],
        "format": r["format"],
        "storage_path": r["storage_path"],
        "source": r["source"],
        "source_format": r["source_format"],
        "version": r["version"],
        "status": r["status"],
        "created_by": r["created_by"],
        "updated_by": r["updated_by"],
        "created_at": r["created_at"].isoformat() if r["created_at"] else None,
        "updated_at": r["updated_at"].isoformat() if r["updated_at"] else None,
    }
    if with_content:
        out["content"] = r["content"]
        out["source_ref"] = r["source_ref"]
    return out


async def _load_context(
    db: asyncpg.Connection, owner_type: str, owner_id: str
) -> str:
    """
    Nạp bối cảnh sẵn có trong hệ để AI không phải đoán.

    Master Doc bị cắt còn 20 000 ký tự: đủ để nắm hệ thống, tránh đẩy prompt lên quá lớn
    trong khi diagram chỉ cần bức tranh tổng thể.
    """
    if owner_type == "product":
        row = await db.fetchrow(
            """
            SELECT cp.product_name, cp.product_type, cp.domain_code,
                   md.title AS md_title, md.content AS md_content
            FROM catalog_products cp
            LEFT JOIN master_documents md ON md.product_id = cp.id
            WHERE cp.id = $1::uuid
            """,
            owner_id,
        )
        if not row:
            return ""
        parts = [
            f"Sản phẩm: {row['product_name']} "
            f"(loại {row['product_type']}, domain {row['domain_code'] or '—'})"
        ]
        if row["md_content"]:
            parts.append(
                f"Master Doc «{row['md_title']}» (cắt bớt nếu dài):\n"
                + row["md_content"][:20000]
            )
        else:
            parts.append("Sản phẩm này CHƯA có Master Doc.")
        return "\n\n".join(parts)

    if owner_type == "brs":
        row = await db.fetchrow(
            """
            SELECT b.title, b.content, b.status,
                   cr.request_code, cr.title AS cr_title, cr.description AS cr_desc,
                   cp.product_name
            FROM cr_brs_documents b
            JOIN change_requests cr ON cr.id = b.cr_id
            LEFT JOIN catalog_products cp ON cp.id = cr.product_id
            WHERE b.id = $1::uuid
            """,
            owner_id,
        )
        if not row:
            return ""
        return (
            f"CR {row['request_code']}: {row['cr_title']}\n"
            f"Mô tả CR: {row['cr_desc'] or '—'}\n"
            f"Sản phẩm: {row['product_name'] or '—'}\n\n"
            f"BRS «{row['title']}» (trạng thái {row['status']}):\n"
            + (row["content"] or "")[:20000]
        )

    row = await db.fetchrow(
        """
        SELECT p.code, p.name, p.status, p.domain_code, p.description
        FROM projects p WHERE p.id = $1::uuid
        """,
        owner_id,
    )
    if not row:
        return ""
    return (
        f"Dự án {row['code']}: {row['name']}\n"
        f"Trạng thái: {row['status']} · Domain: {row['domain_code'] or '—'}\n"
        f"Mô tả: {row['description'] or '—'}"
    )


async def _save_version(
    db: asyncpg.Connection,
    diagram_id: str,
    version: int,
    content: str,
    change_summary: str,
    source: str,
    actor: str,
) -> None:
    await db.execute(
        """
        INSERT INTO diagram_versions
            (diagram_id, version, content, change_summary, source, created_by)
        VALUES ($1::uuid, $2, $3, $4, $5, $6)
        ON CONFLICT (diagram_id, version) DO NOTHING
        """,
        diagram_id, version, content, change_summary, source, actor,
    )


# ── Metadata ─────────────────────────────────────────────────────────────────
@router.get("/types")
async def get_types(user: CurrentUser) -> dict:
    """LOV loại diagram — sinh từ bản đồ trong services/diagram_skill.py."""
    return {"data": list_types()}


@router.get("/skill-check")
async def get_skill_check(user: CurrentUser) -> dict:
    """Chẩn đoán bộ file skill diagram-design còn đủ (dùng sau khi cập nhật từ repo gốc)."""
    return check_install()


# ── CRUD ─────────────────────────────────────────────────────────────────────
@router.get("")
async def list_diagrams(
    user: CurrentUser,
    owner_type: Optional[str] = Query(None),
    owner_id: Optional[str] = Query(None),
    diagram_type: Optional[str] = Query(None),
    status: Optional[str] = Query(None),
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """Danh sách diagram — KHÔNG trả content để tránh kéo hàng trăm KB HTML mỗi lần."""
    clauses: list[str] = []
    params: list = []
    i = 1
    if owner_type:
        clauses.append(f"owner_type = ${i}"); params.append(owner_type); i += 1
    if owner_id:
        clauses.append(f"owner_id = ${i}::uuid"); params.append(owner_id); i += 1
    if diagram_type:
        clauses.append(f"diagram_type = ${i}"); params.append(diagram_type); i += 1
    if status:
        clauses.append(f"status = ${i}"); params.append(status); i += 1

    where = f"WHERE {' AND '.join(clauses)}" if clauses else ""
    rows = await db.fetch(
        f"""
        SELECT id, owner_type, owner_id, diagram_type, name, description, format,
               '' AS content, NULL::text AS source_ref, storage_path, source,
               source_format, version, status, created_by, updated_by,
               created_at, updated_at
        FROM diagrams
        {where}
        ORDER BY created_at DESC
        """,
        *params,
    )
    return {"data": [_row_to_dict(r, with_content=False) for r in rows]}


@router.get("/{diagram_id}")
async def get_diagram(
    diagram_id: str,
    user: CurrentUser,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    row = await db.fetchrow("SELECT * FROM diagrams WHERE id = $1::uuid", diagram_id)
    if not row:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "Không tìm thấy diagram."})
    return {"data": _row_to_dict(row)}


@router.get("/{diagram_id}/versions")
async def get_versions(
    diagram_id: str,
    user: CurrentUser,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    rows = await db.fetch(
        """
        SELECT id, version, change_summary, source, created_by, created_at
        FROM diagram_versions WHERE diagram_id = $1::uuid
        ORDER BY version DESC
        """,
        diagram_id,
    )
    return {
        "data": [
            {
                "id": str(r["id"]),
                "version": r["version"],
                "change_summary": r["change_summary"],
                "source": r["source"],
                "created_by": r["created_by"],
                "created_at": r["created_at"].isoformat() if r["created_at"] else None,
            }
            for r in rows
        ]
    }


@router.get("/{diagram_id}/versions/{version}")
async def get_version_content(
    diagram_id: str,
    version: int,
    user: CurrentUser,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    row = await db.fetchrow(
        """
        SELECT version, content, change_summary, source, created_by, created_at
        FROM diagram_versions WHERE diagram_id = $1::uuid AND version = $2
        """,
        diagram_id, version,
    )
    if not row:
        raise HTTPException(
            404, detail={"code": "NOT_FOUND", "message": f"Không có phiên bản {version}."}
        )
    return {
        "data": {
            "version": row["version"],
            "content": row["content"],
            "change_summary": row["change_summary"],
            "source": row["source"],
            "created_by": row["created_by"],
            "created_at": row["created_at"].isoformat() if row["created_at"] else None,
        }
    }


@router.post("", status_code=201)
async def create_diagram(
    body: DiagramCreate,
    user: CurrentUser,
    request: Request,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """Tạo diagram thủ công (dán mã Mermaid hoặc HTML tự soạn)."""
    await _assert_owner(db, body.owner_type, body.owner_id)
    if body.diagram_type not in DIAGRAM_TYPES:
        raise HTTPException(
            400,
            detail={
                "code": "DIAGRAM_TYPE_INVALID",
                "message": f"Loại diagram không hợp lệ. Hợp lệ: {', '.join(DIAGRAM_TYPES)}",
            },
        )

    content = body.content
    if body.format == "html" and content.strip():
        content, _ = sanitize_diagram_html(content)

    owner_col = OWNER_FK_COLUMN[body.owner_type]
    row = await db.fetchrow(
        """
        INSERT INTO diagrams
            (owner_type, owner_id, {owner_col}, diagram_type, name, description, format,
             content, source, created_by, updated_by)
        VALUES ($1, $2::uuid, $2::uuid, $3, $4, $5, $6, $7, 'manual', $8, $8)
        RETURNING *
        """.format(owner_col=owner_col),
        body.owner_type, body.owner_id, body.diagram_type, body.name,
        body.description, body.format, content, user.sub,
    )
    await _save_version(
        db, str(row["id"]), 1, content, "Tạo thủ công", "manual", user.sub
    )
    await log_audit(
        db, "diagram", str(row["id"]), "CREATE", user.sub,
        new_values={"name": body.name, "diagram_type": body.diagram_type},
        request=request,
    )
    return {"data": _row_to_dict(row)}


@router.put("/{diagram_id}")
async def update_diagram(
    diagram_id: str,
    body: DiagramUpdate,
    user: CurrentUser,
    request: Request,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    current = await db.fetchrow("SELECT * FROM diagrams WHERE id = $1::uuid", diagram_id)
    if not current:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "Không tìm thấy diagram."})

    if body.status and body.status not in ("draft", "approved", "archived"):
        raise HTTPException(
            400,
            detail={"code": "STATUS_INVALID", "message": "Trạng thái phải là draft|approved|archived."},
        )

    content = current["content"]
    version = current["version"]
    content_changed = body.content is not None and body.content != current["content"]
    if content_changed:
        content = body.content or ""
        if current["format"] == "html" and content.strip():
            content, _ = sanitize_diagram_html(content)
        version += 1

    row = await db.fetchrow(
        """
        UPDATE diagrams SET
            name        = COALESCE($2, name),
            description = COALESCE($3, description),
            content     = $4,
            status      = COALESCE($5, status),
            version     = $6,
            updated_by  = $7,
            updated_at  = NOW()
        WHERE id = $1::uuid
        RETURNING *
        """,
        diagram_id, body.name, body.description, content, body.status, version, user.sub,
    )
    if content_changed:
        await _save_version(
            db, diagram_id, version, content, body.change_summary, "manual", user.sub
        )
    await log_audit(
        db, "diagram", diagram_id, "UPDATE", user.sub,
        new_values={"version": version, "status": row["status"]},
        notes=body.change_summary if content_changed else None,
        request=request,
    )
    return {"data": _row_to_dict(row)}


@router.delete("/{diagram_id}", status_code=204, response_class=Response)
async def delete_diagram(
    diagram_id: str,
    user: CurrentUser,
    request: Request,
    db: asyncpg.Connection = Depends(get_db),
):
    row = await db.fetchrow("SELECT name FROM diagrams WHERE id = $1::uuid", diagram_id)
    if not row:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "Không tìm thấy diagram."})
    await db.execute("DELETE FROM diagrams WHERE id = $1::uuid", diagram_id)
    await log_audit(
        db, "diagram", diagram_id, "DELETE", user.sub,
        old_values={"name": row["name"]}, request=request,
    )
    return Response(status_code=204)


# ── Sinh bằng AI ─────────────────────────────────────────────────────────────
@router.post("/generate", status_code=201)
async def generate_diagram(
    body: GenerateRequest,
    user: CurrentUser,
    request: Request,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """
    [Gen diagram] — AI vẽ diagram mới từ mô tả của BA + bối cảnh sẵn có trong hệ.

    Không có mock: thiếu API key hoặc Claude lỗi thì trả lỗi rõ nguyên nhân và
    KHÔNG tạo dòng diagram nào.
    """
    owner_label = await _assert_owner(db, body.owner_type, body.owner_id)
    cached_prefix = build_cached_prefix(body.diagram_type)

    if not body.brief.strip() and not body.include_context:
        raise HTTPException(
            400,
            detail={
                "code": "BRIEF_REQUIRED",
                "message": "Cần mô tả nội dung cần vẽ, hoặc bật nạp bối cảnh từ hệ thống.",
            },
        )

    context = await _load_context(db, body.owner_type, body.owner_id) if body.include_context else ""

    prompt_parts = [
        f"Vẽ diagram loại '{body.diagram_type}' cho {body.owner_type} «{owner_label}».",
        f"Tên diagram: {body.name}",
    ]
    if body.brief.strip():
        prompt_parts.append("Mô tả của BA về nội dung cần vẽ:\n" + body.brief.strip())
    if context:
        prompt_parts.append("Bối cảnh lấy từ dữ liệu đang có trong hệ thống:\n" + context)
    prompt_parts.append(
        "Trả về đúng một file HTML hoàn chỉnh, không kèm bất kỳ lời giải thích nào."
    )

    html = await run_skill(
        db,
        SKILL_CODE,
        "\n\n".join(prompt_parts),
        cached_prefix=cached_prefix,
    )
    html, stripped = sanitize_diagram_html(html)

    owner_col = OWNER_FK_COLUMN[body.owner_type]
    row = await db.fetchrow(
        """
        INSERT INTO diagrams
            (owner_type, owner_id, {owner_col}, diagram_type, name, description, format,
             content, source, created_by, updated_by)
        VALUES ($1, $2::uuid, $2::uuid, $3, $4, $5, 'html', $6, 'ai', $7, $7)
        RETURNING *
        """.format(owner_col=owner_col),
        body.owner_type, body.owner_id, body.diagram_type, body.name,
        body.brief.strip()[:2000], html, user.sub,
    )
    await _save_version(db, str(row["id"]), 1, html, "AI sinh lần đầu", "ai", user.sub)
    await log_audit(
        db, "diagram", str(row["id"]), "CREATE", user.sub,
        new_values={"name": body.name, "diagram_type": body.diagram_type, "source": "ai"},
        request=request,
    )
    out = _row_to_dict(row)
    out["sanitized"] = stripped
    return {"data": out}


@router.post("/{diagram_id}/regenerate")
async def regenerate_diagram(
    diagram_id: str,
    body: RegenerateRequest,
    user: CurrentUser,
    request: Request,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """
    [Sửa bằng AI] — chỉnh diagram hiện có theo yêu cầu bằng lời, tăng version.

    Bản cũ vẫn nằm trong diagram_versions nên xem lại được.
    """
    current = await db.fetchrow("SELECT * FROM diagrams WHERE id = $1::uuid", diagram_id)
    if not current:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "Không tìm thấy diagram."})

    cached_prefix = build_cached_prefix(current["diagram_type"])
    prompt = (
        f"Đây là diagram HTML hiện tại (loại '{current['diagram_type']}', "
        f"tên «{current['name']}»):\n\n{current['content']}\n\n"
        f"Yêu cầu chỉnh sửa: {body.instruction.strip()}\n\n"
        "Trả về đúng một file HTML hoàn chỉnh ĐÃ ÁP DỤNG yêu cầu trên. "
        "Giữ nguyên những phần không được yêu cầu đổi. Không kèm lời giải thích."
    )

    html = await run_skill(db, SKILL_CODE, prompt, cached_prefix=cached_prefix)
    html, stripped = sanitize_diagram_html(html)

    version = current["version"] + 1
    row = await db.fetchrow(
        """
        UPDATE diagrams SET content = $2, version = $3, source = 'ai',
                            -- run_skill của skill này luôn trả về MỘT file HTML hoàn
                            -- chỉnh (sanitize_diagram_html từ chối thứ khác), nên format
                            -- phải theo. Thiếu dòng này thì sơ đồ nhập từ Mermaid sau khi
                            -- vẽ lại vẫn bị hiển thị dưới dạng mã nguồn.
                            format = 'html',
                            updated_by = $4, updated_at = NOW()
        WHERE id = $1::uuid RETURNING *
        """,
        diagram_id, html, version, user.sub,
    )
    await _save_version(
        db, diagram_id, version, html,
        f"AI chỉnh: {body.instruction.strip()[:200]}", "ai", user.sub,
    )
    await log_audit(
        db, "diagram", diagram_id, "UPDATE", user.sub,
        new_values={"version": version, "source": "ai"},
        notes=body.instruction.strip()[:500], request=request,
    )
    out = _row_to_dict(row)
    out["sanitized"] = stripped
    return {"data": out}


# ── Import từ Mermaid / draw.io ───────────────────────────────────────────────
@router.post("/import", status_code=201)
async def import_diagram(
    body: ImportRequest,
    user: CurrentUser,
    request: Request,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """
    Nhập diagram có sẵn từ Mermaid (.mmd) hoặc draw.io.

    redraw=True (mặc định): tách nội dung bằng script của skill gốc rồi để AI vẽ lại
    theo Design System — mã nguồn gốc vẫn được giữ ở source_ref để vẽ lại lần sau.
    redraw=False: chỉ lưu mã Mermaid, trình duyệt tự render (không theo DS, không tốn AI).
    """
    await _assert_owner(db, body.owner_type, body.owner_id)
    if body.diagram_type not in DIAGRAM_TYPES:
        raise HTTPException(
            400,
            detail={
                "code": "DIAGRAM_TYPE_INVALID",
                "message": f"Loại diagram không hợp lệ. Hợp lệ: {', '.join(DIAGRAM_TYPES)}",
            },
        )

    owner_col = OWNER_FK_COLUMN[body.owner_type]

    if not body.redraw:
        if body.source_format != "mermaid":
            raise HTTPException(
                400,
                detail={
                    "code": "REDRAW_REQUIRED",
                    "message": "Chỉ nguồn Mermaid mới hiển thị được trực tiếp. "
                               "Nguồn draw.io bắt buộc vẽ lại bằng AI.",
                },
            )
        row = await db.fetchrow(
            """
            INSERT INTO diagrams
                (owner_type, owner_id, {owner_col}, diagram_type, name, format, content,
                 source, source_ref, source_format, created_by, updated_by)
            VALUES ($1, $2::uuid, $2::uuid, $3, $4, 'mermaid', $5, 'upload', $5, 'mermaid', $6, $6)
            RETURNING *
            """.format(owner_col=owner_col),
            body.owner_type, body.owner_id, body.diagram_type, body.name,
            body.source_text, user.sub,
        )
        await _save_version(
            db, str(row["id"]), 1, body.source_text,
            "Nhập mã Mermaid", "manual", user.sub,
        )
        await log_audit(
            db, "diagram", str(row["id"]), "CREATE", user.sub,
            new_values={"name": body.name, "source": "upload"}, request=request,
        )
        return {"data": _row_to_dict(row)}

    # Tách IR bằng script nhúng — mô hình vẽ lại từ IR chuẩn hóa, không tự đoán cú pháp
    digest = extract_source_ir(body.source_text, body.source_format)
    cached_prefix = build_cached_prefix(body.diagram_type, import_format=body.source_format)

    prompt = (
        f"Vẽ lại diagram loại '{body.diagram_type}' tên «{body.name}» "
        f"từ nguồn {body.source_format} dưới đây.\n\n"
        f"Nội dung đã được tách và chuẩn hóa:\n{digest}\n\n"
        "Giữ nguyên toàn bộ node, nhãn và quan hệ của nguồn — KHÔNG thêm, KHÔNG bớt. "
        "Chỉ vẽ lại theo Design System và quy tắc dựng hình. "
        "Trả về đúng một file HTML hoàn chỉnh, không kèm lời giải thích."
    )
    html = await run_skill(db, SKILL_CODE, prompt, cached_prefix=cached_prefix)
    html, stripped = sanitize_diagram_html(html)

    row = await db.fetchrow(
        """
        INSERT INTO diagrams
            (owner_type, owner_id, {owner_col}, diagram_type, name, format, content,
             source, source_ref, source_format, created_by, updated_by)
        VALUES ($1, $2::uuid, $2::uuid, $3, $4, 'html', $5, 'ai_import', $6, $7, $8, $8)
        RETURNING *
        """.format(owner_col=owner_col),
        body.owner_type, body.owner_id, body.diagram_type, body.name,
        html, body.source_text, body.source_format, user.sub,
    )
    await _save_version(
        db, str(row["id"]), 1, html,
        f"Vẽ lại từ nguồn {body.source_format}", "ai", user.sub,
    )
    await log_audit(
        db, "diagram", str(row["id"]), "CREATE", user.sub,
        new_values={"name": body.name, "source": "ai_import",
                    "source_format": body.source_format},
        request=request,
    )
    out = _row_to_dict(row)
    out["sanitized"] = stripped
    return {"data": out}


# ── Vẽ bằng AI, có tường thuật tiến độ (SSE) ─────────────────────────────────
#
# Vì sao cần: một lượt vẽ mất hàng chục giây tới vài phút. Bản chỉ-có-nút-mờ
# ("Đang vẽ…") làm người dùng tưởng hệ thống treo và bấm lại — mỗi lần bấm lại là một
# lượt gọi Claude nữa, tốn hạn mức thật.
#
# Nguyên tắc: mọi số liệu tường thuật đều là số ĐO ĐƯỢC (dung lượng bộ quy tắc nạp từ
# đĩa, số ký tự bối cảnh, số ký tự/token mô hình đã sinh, danh sách thành phần bị chặn
# khi kiểm an toàn). KHÔNG có phần trăm phỏng đoán: độ dài tài liệu chưa biết trước, nên
# giao diện dùng thanh chạy vô định thay vì bịa ra con số.
#
# Vì sao POST + fetch chứ không EventSource: EventSource chỉ gửi được GET và KHÔNG gắn
# được header Authorization, mà các endpoint này cần token như mọi endpoint khác.

# Các bước THẬT của một lượt vẽ, khớp đúng thứ tự mã chạy bên dưới.
GENERATE_STEPS = [
    {"id": "owner",   "label": "Xác minh đối tượng gắn sơ đồ"},
    {"id": "skill",   "label": "Nạp bộ quy tắc dựng hình"},
    {"id": "context", "label": "Nạp bối cảnh từ hệ thống"},
    {"id": "ai",      "label": "Claude vẽ sơ đồ"},
    {"id": "safety",  "label": "Kiểm chứng an toàn HTML"},
    {"id": "save",    "label": "Lưu sơ đồ và phiên bản"},
]
REGENERATE_STEPS = [
    {"id": "load",    "label": "Đọc bản hiện tại"},
    {"id": "skill",   "label": "Nạp bộ quy tắc dựng hình"},
    {"id": "ai",      "label": "Claude chỉnh sơ đồ"},
    {"id": "safety",  "label": "Kiểm chứng an toàn HTML"},
    {"id": "save",    "label": "Lưu phiên bản mới"},
]


def _error_event(exc: BaseException) -> dict:
    """
    Đổi lỗi thành sự kiện `error`.

    Thân phản hồi SSE đã bắt đầu chảy nên KHÔNG đổi được mã HTTP nữa. Vì vậy lỗi phải đi
    ra dưới dạng sự kiện, giữ nguyên code/message như endpoint thường để giao diện hiển
    thị đúng nguyên nhân (AI_RATE_LIMIT, AI_TRUNCATED, AI_MODEL_DOWNGRADED…).
    """
    if isinstance(exc, HTTPException):
        detail = exc.detail
        if isinstance(detail, dict):
            return {"type": "error", "code": detail.get("code", "ERROR"),
                    "message": detail.get("message", str(detail))}
        return {"type": "error", "code": "ERROR", "message": str(detail)}
    logger.exception("Lỗi không lường trước trong luồng vẽ diagram")
    return {"type": "error", "code": "UNEXPECTED",
            "message": f"Lỗi không lường trước: {exc}"}


def _skill_bundle_stats(prefix: list[str]) -> dict:
    """Số đo thật của bộ quy tắc nạp từ đĩa — để tường thuật, không phải ước lượng."""
    total = sum(len(b) for b in prefix)
    return {"blocks": len(prefix), "chars": total, "kb": round(total / 1024, 1)}


def _make_generate_work(body: GenerateRequest, actor: str, request: Request):
    async def work(db: asyncpg.Connection, emit) -> dict:
        async def hook(ev: dict) -> None:
            emit(ev)

        owner_label = await _assert_owner(db, body.owner_type, body.owner_id)
        emit({"type": "step", "id": "owner", "state": "done",
                         "detail": owner_label})

        emit({"type": "step", "id": "skill", "state": "running"})
        cached_prefix = build_cached_prefix(body.diagram_type)
        stats = _skill_bundle_stats(cached_prefix)
        emit({"type": "step", "id": "skill", "state": "done",
                         "detail": f"{stats['blocks']} khối · {stats['kb']} KB "
                                   f"(dùng lại từ cache nếu đã nạp)"})

        if not body.brief.strip() and not body.include_context:
            raise HTTPException(400, detail={
                "code": "BRIEF_REQUIRED",
                "message": "Cần mô tả nội dung cần vẽ, hoặc bật nạp bối cảnh từ hệ thống.",
            })

        emit({"type": "step", "id": "context", "state": "running"})
        context = ""
        if body.include_context:
            context = await _load_context(db, body.owner_type, body.owner_id)
        emit({
            "type": "step", "id": "context", "state": "done",
            "detail": (f"{len(context):,} ký tự bối cảnh".replace(",", ".")
                       if context else "không nạp bối cảnh — chỉ dùng mô tả của BA"),
        })

        prompt_parts = [
            f"Vẽ diagram loại '{body.diagram_type}' cho {body.owner_type} «{owner_label}».",
            f"Tên diagram: {body.name}",
        ]
        if body.brief.strip():
            prompt_parts.append("Mô tả của BA về nội dung cần vẽ:\n" + body.brief.strip())
        if context:
            prompt_parts.append("Bối cảnh lấy từ dữ liệu đang có trong hệ thống:\n" + context)
        prompt_parts.append(
            "Trả về đúng một file HTML hoàn chỉnh, không kèm bất kỳ lời giải thích nào."
        )

        emit({"type": "step", "id": "ai", "state": "running"})
        html = await run_skill(
            db, SKILL_CODE, "\n\n".join(prompt_parts),
            cached_prefix=cached_prefix, on_event=hook,
        )
        emit({"type": "step", "id": "ai", "state": "done"})

        emit({"type": "step", "id": "safety", "state": "running"})
        html, stripped = sanitize_diagram_html(html)
        emit({"type": "step", "id": "safety", "state": "done",
                         "detail": (f"đã gỡ: {', '.join(stripped)}" if stripped
                                    else "không có thành phần nào phải gỡ")})

        emit({"type": "step", "id": "save", "state": "running"})
        owner_col = OWNER_FK_COLUMN[body.owner_type]
        row = await db.fetchrow(
            """
            INSERT INTO diagrams
                (owner_type, owner_id, {owner_col}, diagram_type, name, description, format,
                 content, source, created_by, updated_by)
            VALUES ($1, $2::uuid, $2::uuid, $3, $4, $5, 'html', $6, 'ai', $7, $7)
            RETURNING *
            """.format(owner_col=owner_col),
            body.owner_type, body.owner_id, body.diagram_type, body.name,
            body.brief.strip()[:2000], html, actor,
        )
        await _save_version(db, str(row["id"]), 1, html, "AI sinh lần đầu", "ai", actor)
        await log_audit(
            db, "diagram", str(row["id"]), "CREATE", actor,
            new_values={"name": body.name, "diagram_type": body.diagram_type,
                        "source": "ai"},
            request=request,
        )
        emit({"type": "step", "id": "save", "state": "done",
                         "detail": f"v1 · {len(html):,} ký tự".replace(",", ".")})

        out = _row_to_dict(row)
        out["sanitized"] = stripped
        return out

    return work


def _make_regenerate_work(diagram_id: str, instruction: str, actor: str, request: Request):
    async def work(db: asyncpg.Connection, emit) -> dict:
        async def hook(ev: dict) -> None:
            emit(ev)

        current = await db.fetchrow(
            "SELECT * FROM diagrams WHERE id = $1::uuid", diagram_id
        )
        if not current:
            raise HTTPException(404, detail={
                "code": "NOT_FOUND", "message": "Không tìm thấy diagram."})
        emit({"type": "step", "id": "load", "state": "done",
                         "detail": f"«{current['name']}» v{current['version']}"})

        emit({"type": "step", "id": "skill", "state": "running"})
        cached_prefix = build_cached_prefix(current["diagram_type"])
        stats = _skill_bundle_stats(cached_prefix)
        emit({"type": "step", "id": "skill", "state": "done",
                         "detail": f"{stats['blocks']} khối · {stats['kb']} KB"})

        prompt = (
            f"Đây là diagram HTML hiện tại (loại '{current['diagram_type']}', "
            f"tên «{current['name']}»):\n\n{current['content']}\n\n"
            f"Yêu cầu chỉnh sửa: {instruction}\n\n"
            "Trả về đúng một file HTML hoàn chỉnh ĐÃ ÁP DỤNG yêu cầu trên. "
            "Giữ nguyên những phần không được yêu cầu đổi. Không kèm lời giải thích."
        )

        emit({"type": "step", "id": "ai", "state": "running"})
        html = await run_skill(
            db, SKILL_CODE, prompt, cached_prefix=cached_prefix, on_event=hook,
        )
        emit({"type": "step", "id": "ai", "state": "done"})

        emit({"type": "step", "id": "safety", "state": "running"})
        html, stripped = sanitize_diagram_html(html)
        emit({"type": "step", "id": "safety", "state": "done",
                         "detail": (f"đã gỡ: {', '.join(stripped)}" if stripped
                                    else "không có thành phần nào phải gỡ")})

        emit({"type": "step", "id": "save", "state": "running"})
        version = current["version"] + 1
        row = await db.fetchrow(
            """
            UPDATE diagrams SET content = $2, version = $3, source = 'ai',
                                format = 'html',   -- xem ghi chú ở regenerate_diagram
                                updated_by = $4, updated_at = NOW()
            WHERE id = $1::uuid RETURNING *
            """,
            diagram_id, html, version, actor,
        )
        await _save_version(
            db, diagram_id, version, html,
            f"AI chỉnh: {instruction[:200]}", "ai", actor,
        )
        await log_audit(
            db, "diagram", diagram_id, "UPDATE", actor,
            new_values={"version": version, "source": "ai"},
            notes=instruction[:500], request=request,
        )
        emit({"type": "step", "id": "save", "state": "done",
                         "detail": f"v{version} · {len(html):,} ký tự".replace(",", ".")})

        out = _row_to_dict(row)
        out["sanitized"] = stripped
        return out

    return work


@router.post("/generate/stream")
async def generate_diagram_stream(
    body: GenerateRequest,
    user: CurrentUser,
    request: Request,
) -> StreamingResponse:
    """[Vẽ bằng AI] có tường thuật — cùng kết quả với POST /diagrams/generate."""
    return sse_response(GENERATE_STEPS, _make_generate_work(body, user.sub, request))


@router.post("/{diagram_id}/regenerate/stream")
async def regenerate_diagram_stream(
    diagram_id: str,
    body: RegenerateRequest,
    user: CurrentUser,
    request: Request,
) -> StreamingResponse:
    """[Sửa bằng AI] có tường thuật — cùng kết quả với POST /diagrams/{id}/regenerate."""
    return sse_response(
        REGENERATE_STEPS,
        _make_regenerate_work(diagram_id, body.instruction.strip(), user.sub, request),
    )
