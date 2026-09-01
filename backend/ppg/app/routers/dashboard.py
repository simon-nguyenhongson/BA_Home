"""
Portfolio Dashboard Router — tổng quan theo TRỤC VÒNG ĐỜI.

Sau khi gỡ module Kế hoạch năm (V050, quyết định PO 2026-09-01), dashboard không còn
dữ liệu ngân sách / rủi ro / nguồn lực theo kế hoạch. Thay vào đó tổng quan bám đúng
vòng đời PO quan tâm: Project → Product → CR → BRS → Test.
"""
from datetime import date, datetime, timedelta
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query

from app.auth import CurrentUser
from app.database import get_db

router = APIRouter(prefix="/dashboard", tags=["dashboard"])


@router.get("/summary")
async def get_summary(
    user: CurrentUser,
    db=Depends(get_db),
):
    """KPI + phân bố trạng thái theo trục vòng đời."""
    # ── Dự án theo trạng thái ────────────────────────────────────
    status_rows = await db.fetch(
        """
        SELECT status, COUNT(*) AS cnt
        FROM projects
        GROUP BY status
        ORDER BY cnt DESC
        """
    )
    status_dist = [{"status": r["status"], "count": r["cnt"]} for r in status_rows]
    total_projects = sum(r["count"] for r in status_dist)
    active_count = next((r["count"] for r in status_dist if r["status"] == "active"), 0)
    completed_count = next(
        (r["count"] for r in status_dist if r["status"] == "completed"), 0
    )

    # ── Sản phẩm theo loại và theo domain ────────────────────────
    product_type_rows = await db.fetch(
        """
        SELECT product_type, COUNT(*) AS cnt
        FROM catalog_products
        GROUP BY product_type
        ORDER BY cnt DESC
        """
    )
    product_dist = [
        {"product_type": r["product_type"], "count": r["cnt"]} for r in product_type_rows
    ]
    total_products = sum(r["count"] for r in product_dist)

    products_with_master_doc = await db.fetchval(
        "SELECT COUNT(DISTINCT product_id) FROM master_documents"
    )

    # ── CR theo trạng thái ───────────────────────────────────────
    #
    # Tách CR nội bộ (cr_kind='internal', sinh tự động khi sửa tay Master Doc) khỏi
    # phân bố chính: đó là việc bảo trì tài liệu, không phải yêu cầu thay đổi hệ thống.
    # Gộp vào sẽ làm phồng "CR đang mở" bằng những thứ không ai phải xử lý.
    cr_rows = await db.fetch(
        """
        SELECT status, cr_kind, COUNT(*) AS cnt
        FROM change_requests
        GROUP BY status, cr_kind
        """
    )
    dist_map: dict[str, int] = {}
    internal_crs = 0
    for r in cr_rows:
        if r["cr_kind"] == "internal":
            internal_crs += r["cnt"]
            continue
        dist_map[r["status"]] = dist_map.get(r["status"], 0) + r["cnt"]
    cr_dist = sorted(
        ({"status": k, "count": v} for k, v in dist_map.items()),
        key=lambda x: -x["count"],
    )
    total_crs = sum(r["count"] for r in cr_dist)
    open_crs = sum(
        r["count"] for r in cr_dist
        if r["status"] in ("submitted", "reviewing", "approved", "implementing")
    )

    # ── BRS theo trạng thái ──────────────────────────────────────
    brs_rows = await db.fetch(
        """
        SELECT status, COUNT(*) AS cnt
        FROM cr_brs_documents
        GROUP BY status
        ORDER BY cnt DESC
        """
    )
    brs_dist = [{"status": r["status"], "count": r["cnt"]} for r in brs_rows]

    # ── Công việc automation test ────────────────────────────────
    test_rows = await db.fetch(
        """
        SELECT status, COUNT(*) AS cnt
        FROM automation_test_tasks
        GROUP BY status
        ORDER BY cnt DESC
        """
    )
    test_dist = [{"status": r["status"], "count": r["cnt"]} for r in test_rows]
    open_test_tasks = sum(
        r["count"] for r in test_dist if r["status"] != "closed"
    )

    return {
        "kpi": {
            "total_projects":           total_projects,
            "active_projects":          active_count,
            "completed_projects":       completed_count,
            "total_products":           total_products,
            "products_with_master_doc": products_with_master_doc or 0,
            "total_crs":                total_crs,
            "open_crs":                 open_crs,
            "internal_crs":             internal_crs,
            "open_test_tasks":          open_test_tasks,
        },
        "status_dist":  status_dist,
        "product_dist": product_dist,
        "cr_dist":      cr_dist,
        "brs_dist":     brs_dist,
        "test_dist":    test_dist,
    }


@router.get("/projects")
async def get_dashboard_projects(
    user: CurrentUser,
    db=Depends(get_db),
):
    """Bảng dự án kèm số thành viên và domain."""
    rows = await db.fetch(
        """
        SELECT
            p.id::text,
            p.code,
            p.name,
            p.status,
            p.owner,
            p.start_date,
            p.end_date,
            p.domain_code,
            pd.name          AS domain_label,
            p.created_at,
            COUNT(pm.id)     AS member_count
        FROM projects p
        LEFT JOIN project_domains pd  ON pd.code = p.domain_code
        LEFT JOIN project_members pm  ON pm.project_id = p.id AND pm.is_active = true
        GROUP BY p.id, pd.name
        ORDER BY p.created_at DESC
        """
    )
    return [
        {
            "id":           r["id"],
            "code":         r["code"],
            "name":         r["name"],
            "status":       r["status"],
            "owner":        r["owner"],
            "start_date":   r["start_date"].isoformat() if r["start_date"] else None,
            "end_date":     r["end_date"].isoformat()   if r["end_date"]   else None,
            "domain_code":  r["domain_code"],
            "domain_label": r["domain_label"],
            "created_at":   r["created_at"].isoformat() if r["created_at"] else None,
            "member_count": r["member_count"],
        }
        for r in rows
    ]


@router.get("/products")
async def get_dashboard_products(
    user: CurrentUser,
    db=Depends(get_db),
):
    """Bảng sản phẩm kèm tình trạng tài liệu và số CR — trục tri thức."""
    rows = await db.fetch(
        """
        SELECT
            cp.id::text,
            cp.product_code,
            cp.product_name,
            cp.product_type,
            cp.status,
            cp.domain_code,
            pd.name                            AS domain_label,
            md.current_version                 AS master_doc_version,
            md.updated_at                      AS master_doc_updated_at,
            COUNT(DISTINCT cr.id)              AS cr_count,
            COUNT(DISTINCT cr.id) FILTER (
                WHERE cr.status IN ('submitted','reviewing','approved','implementing')
            )                                  AS open_cr_count
        FROM catalog_products cp
        LEFT JOIN project_domains pd  ON pd.code = cp.domain_code
        LEFT JOIN master_documents md ON md.product_id = cp.id
        LEFT JOIN change_requests cr  ON cr.product_id = cp.id
        GROUP BY cp.id, pd.name, md.current_version, md.updated_at
        ORDER BY open_cr_count DESC, cp.product_name
        """
    )
    return [
        {
            "id":                    r["id"],
            "product_code":          r["product_code"],
            "product_name":          r["product_name"],
            "product_type":          r["product_type"],
            "status":                r["status"],
            "domain_code":           r["domain_code"],
            "domain_label":          r["domain_label"],
            "master_doc_version":    r["master_doc_version"],
            "master_doc_updated_at": (
                r["master_doc_updated_at"].isoformat()
                if r["master_doc_updated_at"] else None
            ),
            "has_master_doc":        r["master_doc_version"] is not None,
            "cr_count":              r["cr_count"],
            "open_cr_count":         r["open_cr_count"],
        }
        for r in rows
    ]


@router.get("/resources")
async def get_resources(
    user: CurrentUser,
    db=Depends(get_db),
):
    """Nhân sự theo dự án (từ project_members)."""
    member_rows = await db.fetch(
        """
        SELECT
            p.id::text     AS project_id,
            p.code,
            p.name         AS project_name,
            p.status       AS project_status,
            p.domain_code,
            pd.name        AS domain_label,
            COUNT(pm.id)   AS headcount,
            COALESCE(
                json_agg(
                    json_build_object(
                        'name', pm.full_name,
                        'role', pm.role,
                        'email', pm.email
                    ) ORDER BY pm.full_name
                ) FILTER (WHERE pm.id IS NOT NULL),
                '[]'
            ) AS members
        FROM projects p
        LEFT JOIN project_domains pd ON pd.code = p.domain_code
        LEFT JOIN project_members pm ON pm.project_id = p.id AND pm.is_active = true
        GROUP BY p.id, p.code, p.name, p.status, p.domain_code, pd.name
        ORDER BY headcount DESC, p.name
        """
    )
    return {
        "project_headcount": [
            {
                "project_id":     r["project_id"],
                "code":           r["code"],
                "project_name":   r["project_name"],
                "project_status": r["project_status"],
                "domain_code":    r["domain_code"],
                "domain_label":   r["domain_label"],
                "headcount":      r["headcount"],
                "members":        r["members"] if isinstance(r["members"], list) else [],
            }
            for r in member_rows
        ]
    }


# ── Báo cáo theo kỳ (QĐ-11) ──────────────────────────────────────
#
# Yêu cầu PO 2026-09-01: "Dashboard cần sửa lại để có thể report theo from to thời gian.
# tổng hợp theo CR > Product > project."
#
# Trục tổng hợp: CR là đơn vị công việc → gom theo Product (chủ sở hữu) → trong mỗi
# product tách theo Project tài trợ. Product không có CR trong kỳ vẫn xuất hiện nếu
# Master Doc của nó có bản được duyệt trong kỳ.

def _parse_range(from_date: Optional[str], to_date: Optional[str]) -> tuple[date, date]:
    """Mặc định: 90 ngày gần nhất. Trả về (from, to) đã kiểm tra thứ tự."""
    today = date.today()
    try:
        d_from = date.fromisoformat(from_date) if from_date else today - timedelta(days=90)
        d_to = date.fromisoformat(to_date) if to_date else today
    except ValueError:
        raise HTTPException(
            400,
            detail={
                "code": "DATE_INVALID",
                "message": "from_date / to_date phải theo định dạng YYYY-MM-DD.",
            },
        )
    if d_from > d_to:
        raise HTTPException(
            400,
            detail={"code": "DATE_RANGE_INVALID", "message": "from_date phải trước to_date."},
        )
    return d_from, d_to


@router.get("/period-report")
async def get_period_report(
    user: CurrentUser,
    from_date: Optional[str] = Query(None, description="YYYY-MM-DD, mặc định 90 ngày trước"),
    to_date: Optional[str] = Query(None, description="YYYY-MM-DD, mặc định hôm nay"),
    domain: Optional[str] = Query(None, description="Lọc theo domain_code của sản phẩm"),
    db=Depends(get_db),
):
    """Công việc đã làm trong kỳ, tổng hợp CR › Product › Project."""
    d_from, d_to = _parse_range(from_date, to_date)
    # Cột created_at là timestamptz — cộng 1 ngày vào mốc cuối để bao trọn ngày to_date
    d_to_excl = d_to + timedelta(days=1)

    # ── CR trong kỳ, kèm BRS và tình trạng test ──────────────────
    cr_params: list = [d_from, d_to_excl]
    domain_clause = ""
    if domain:
        cr_params.append(domain)
        domain_clause = f"AND cp.domain_code = ${len(cr_params)}"

    cr_rows = await db.fetch(
        f"""
        SELECT
            cr.id::text            AS cr_id,
            cr.request_code,
            cr.title,
            cr.status,
            cr.priority,
            cr.change_type,
            cr.cr_kind,
            cr.created_at,
            cr.approved_at,
            cr.product_id::text    AS product_id,
            cp.product_code,
            cp.product_name,
            cp.product_type,
            cp.domain_code,
            cr.project_id::text    AS project_id,
            p.code                 AS project_code,
            p.name                 AS project_name,
            b.status               AS brs_status,
            t.status               AS test_status,
            (SELECT COUNT(*) FROM automation_test_cases atc WHERE atc.task_id = t.id)
                                   AS test_case_count
        FROM change_requests cr
        LEFT JOIN catalog_products cp     ON cp.id = cr.product_id
        LEFT JOIN projects p              ON p.id  = cr.project_id
        LEFT JOIN cr_brs_documents b      ON b.cr_id = cr.id
        LEFT JOIN automation_test_tasks t  ON t.cr_id = cr.id
        WHERE cr.created_at >= $1 AND cr.created_at < $2
        {domain_clause}
        ORDER BY cp.product_name NULLS LAST, cr.created_at DESC
        """,
        *cr_params,
    )

    # ── Bản Master Doc được duyệt trong kỳ, đếm theo sản phẩm ─────
    md_rows = await db.fetch(
        """
        SELECT md.product_id::text AS product_id,
               COUNT(*)            AS approved_versions,
               MAX(v.approved_at)  AS last_approved_at
        FROM master_doc_versions v
        JOIN master_documents md ON md.id = v.master_doc_id
        WHERE v.status = 'approved'
          AND v.approved_at >= $1 AND v.approved_at < $2
        GROUP BY md.product_id
        """,
        d_from, d_to_excl,
    )
    md_map = {
        r["product_id"]: {
            "approved_versions": r["approved_versions"],
            "last_approved_at": r["last_approved_at"].isoformat() if r["last_approved_at"] else None,
        }
        for r in md_rows
    }

    # ── Gom CR theo sản phẩm, trong mỗi sản phẩm gom theo dự án ───
    products: dict[str, dict] = {}
    unassigned: list[dict] = []   # CR chưa gắn sản phẩm — phải hiện ra, không được ẩn

    for r in cr_rows:
        cr = {
            "cr_id":           r["cr_id"],
            "request_code":    r["request_code"],
            "title":           r["title"],
            "status":          r["status"],
            "priority":        r["priority"],
            "change_type":     r["change_type"],
            "cr_kind":         r["cr_kind"],
            "created_at":      r["created_at"].isoformat() if r["created_at"] else None,
            "brs_status":      r["brs_status"],
            "test_status":     r["test_status"],
            "test_case_count": r["test_case_count"] or 0,
            "project_id":      r["project_id"],
            "project_code":    r["project_code"],
            "project_name":    r["project_name"],
        }
        pid = r["product_id"]
        if not pid:
            unassigned.append(cr)
            continue
        bucket = products.setdefault(pid, {
            "product_id":    pid,
            "product_code":  r["product_code"],
            "product_name":  r["product_name"],
            "product_type":  r["product_type"],
            "domain_code":   r["domain_code"],
            "crs":           [],
            "projects":      {},
            "master_doc":    md_map.get(pid),
        })
        bucket["crs"].append(cr)
        key = r["project_id"] or "__none__"
        proj = bucket["projects"].setdefault(key, {
            "project_id":   r["project_id"],
            "project_code": r["project_code"],
            "project_name": r["project_name"] or "Không thuộc dự án nào",
            "cr_count":     0,
        })
        proj["cr_count"] += 1

    # Sản phẩm không có CR trong kỳ nhưng Master Doc có bản được duyệt → vẫn là công việc đã làm
    missing_pids = [pid for pid in md_map if pid not in products]
    if missing_pids:
        extra = await db.fetch(
            """
            SELECT id::text, product_code, product_name, product_type, domain_code
            FROM catalog_products WHERE id = ANY($1::uuid[])
            """,
            missing_pids,
        )
        for r in extra:
            if domain and r["domain_code"] != domain:
                continue
            products[r["id"]] = {
                "product_id":   r["id"],
                "product_code": r["product_code"],
                "product_name": r["product_name"],
                "product_type": r["product_type"],
                "domain_code":  r["domain_code"],
                "crs":          [],
                "projects":     {},
                "master_doc":   md_map.get(r["id"]),
            }

    product_list = sorted(
        (
            {**v, "projects": sorted(v["projects"].values(), key=lambda x: -x["cr_count"])}
            for v in products.values()
        ),
        key=lambda x: (-len(x["crs"]), x["product_name"] or ""),
    )

    # ── Dự án có mốc trong kỳ ────────────────────────────────────
    project_rows = await db.fetch(
        """
        SELECT p.id::text, p.code, p.name, p.status, p.domain_code,
               p.start_date, p.end_date, p.created_at,
               (SELECT COUNT(*) FROM change_requests cr
                 WHERE cr.project_id = p.id
                   AND cr.created_at >= $1 AND cr.created_at < $2) AS cr_count
        FROM projects p
        WHERE (p.created_at >= $1 AND p.created_at < $2)
           OR (p.start_date IS NOT NULL AND p.start_date >= $3 AND p.start_date <= $4)
           OR (p.end_date   IS NOT NULL AND p.end_date   >= $3 AND p.end_date   <= $4)
        ORDER BY p.created_at DESC
        """,
        d_from, d_to_excl, d_from, d_to,
    )
    projects_in_period = [
        {
            "id":          r["id"],
            "code":        r["code"],
            "name":        r["name"],
            "status":      r["status"],
            "domain_code": r["domain_code"],
            "start_date":  r["start_date"].isoformat() if r["start_date"] else None,
            "end_date":    r["end_date"].isoformat() if r["end_date"] else None,
            "started_in_period":  bool(r["start_date"] and d_from <= r["start_date"] <= d_to),
            "ended_in_period":    bool(r["end_date"] and d_from <= r["end_date"] <= d_to),
            "cr_count":    r["cr_count"],
        }
        for r in project_rows
    ]

    all_crs = [cr for p in product_list for cr in p["crs"]] + unassigned
    return {
        "range": {"from_date": d_from.isoformat(), "to_date": d_to.isoformat(), "domain": domain},
        "kpi": {
            "total_crs":          len(all_crs),
            "internal_crs":       sum(1 for c in all_crs if c["cr_kind"] == "internal"),
            "crs_with_brs":       sum(1 for c in all_crs if c["brs_status"]),
            "brs_golive":         sum(1 for c in all_crs if c["brs_status"] == "golive"),
            "crs_with_test":      sum(1 for c in all_crs if c["test_status"]),
            "products_touched":   len(product_list),
            "master_doc_updates": sum(
                (p["master_doc"] or {}).get("approved_versions", 0) for p in product_list
            ),
            "projects_in_period": len(projects_in_period),
            "crs_unassigned":     len(unassigned),
        },
        "products":    product_list,
        "unassigned":  unassigned,
        "projects":    projects_in_period,
    }
