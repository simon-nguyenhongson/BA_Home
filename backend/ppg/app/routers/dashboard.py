"""
Portfolio Dashboard Router — tổng quan theo TRỤC VÒNG ĐỜI.

Sau khi gỡ module Kế hoạch năm (V050, quyết định PO 2026-09-01), dashboard không còn
dữ liệu ngân sách / rủi ro / nguồn lực theo kế hoạch. Thay vào đó tổng quan bám đúng
vòng đời PO quan tâm: Project → Product → CR → BRS → Test.
"""
from fastapi import APIRouter, Depends

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
    cr_rows = await db.fetch(
        """
        SELECT status, COUNT(*) AS cnt
        FROM change_requests
        GROUP BY status
        ORDER BY cnt DESC
        """
    )
    cr_dist = [{"status": r["status"], "count": r["cnt"]} for r in cr_rows]
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
