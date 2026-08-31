"""
Reports Router — Cross-project Connection Report (FR-026) and
Annual Plan Dashboard Summary (FR-022).
"""
from __future__ import annotations

from typing import Optional
from uuid import UUID

import asyncpg
from fastapi import APIRouter, Depends, HTTPException, Query

from app.auth import CurrentUser
from app.database import get_db

router = APIRouter(prefix="/reports", tags=["reports"])


def _calc_dod_pct(dod_items: list) -> float:
    if not dod_items:
        return 0.0
    total_weight = sum(float(d["weight"]) for d in dod_items)
    if total_weight == 0:
        return 0.0
    achieved_weight = sum(float(d["weight"]) for d in dod_items if d["is_achieved"])
    return round(achieved_weight / total_weight * 100, 1)


@router.get("/connections")
async def cross_project_connections(
    user: CurrentUser,
    object_name: Optional[str] = Query(None, description="Partial match on object name"),
    object_id: Optional[UUID] = Query(None, description="Exact object UUID"),
    project_id: Optional[UUID] = Query(None, description="Limit search to one project"),
    direction: str = Query("both", description="in | out | both"),
    status: Optional[str] = Query(None, description="Filter connection status"),
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """FR-026: Cross-project connection report — find all in/out connections for an object."""
    if not object_name and not object_id:
        raise HTTPException(
            422,
            detail={
                "code": "VALIDATION_ERROR",
                "message": "Either object_name or object_id must be provided",
            },
        )

    # Resolve query object(s)
    if object_id:
        obj_rows = await db.fetch(
            "SELECT po.*, p.name as project_name FROM ppg_project_objects po "
            "JOIN projects p ON p.id = po.project_id WHERE po.id = $1",
            str(object_id),
        )
    else:
        base_q = (
            "SELECT po.*, p.name as project_name FROM ppg_project_objects po "
            "JOIN projects p ON p.id = po.project_id WHERE po.name ILIKE $1"
        )
        params: list = [f"%{object_name}%"]
        if project_id:
            base_q += " AND po.project_id = $2"
            params.append(str(project_id))
        obj_rows = await db.fetch(base_q, *params)

    if not obj_rows:
        raise HTTPException(
            404,
            detail={"code": "NOT_FOUND", "message": "No objects found matching the query"},
        )

    # Batch 2 query cho toàn bộ object khớp tên thay vì 2 query / object (N+1)
    oids = [str(r["id"]) for r in obj_rows]
    out_map: dict[str, list] = {}
    in_map: dict[str, list] = {}
    if direction in ("out", "both"):
        out_rows_all = await db.fetch(
            f"""
            SELECT c.*,
                tgt.name as target_name, tgt.object_type as target_type,
                tgt.project_id as target_project_id,
                tp.name as target_project_name
            FROM ppg_object_connections c
            JOIN ppg_project_objects tgt ON tgt.id = c.target_object_id
            JOIN projects tp ON tp.id = tgt.project_id
            WHERE c.source_object_id = ANY($1::uuid[])
            {"AND c.status = $2" if status else "AND c.status != 'removed'"}
            ORDER BY c.created_at DESC
            """,
            oids, *(([status]) if status else []),
        )
        for r in out_rows_all:
            out_map.setdefault(str(r["source_object_id"]), []).append(r)
    if direction in ("in", "both"):
        in_rows_all = await db.fetch(
            f"""
            SELECT c.*,
                src.name as source_name, src.object_type as source_type,
                src.project_id as source_project_id,
                sp.name as source_project_name
            FROM ppg_object_connections c
            JOIN ppg_project_objects src ON src.id = c.source_object_id
            JOIN projects sp ON sp.id = src.project_id
            WHERE c.target_object_id = ANY($1::uuid[])
            {"AND c.status = $2" if status else "AND c.status != 'removed'"}
            ORDER BY c.created_at DESC
            """,
            oids, *(([status]) if status else []),
        )
        for r in in_rows_all:
            in_map.setdefault(str(r["target_object_id"]), []).append(r)

    results = []
    for obj_row in obj_rows:
        oid = str(obj_row["id"])

        outbound: list[dict] = []
        inbound: list[dict] = []

        if direction in ("out", "both"):
            out_rows = out_map.get(oid, [])
            outbound = [
                {
                    "connection_id": str(r["id"]),
                    "target": {
                        "id": str(r["target_object_id"]),
                        "name": r["target_name"],
                        "object_type": r["target_type"],
                        "project": {
                            "id": str(r["target_project_id"]),
                            "name": r["target_project_name"],
                        },
                    },
                    "connection_type": r["connection_type"],
                    "protocol": r["protocol"],
                    "frequency": r["frequency"],
                    "status": r["status"],
                }
                for r in out_rows
            ]

        if direction in ("in", "both"):
            in_rows = in_map.get(oid, [])
            inbound = [
                {
                    "connection_id": str(r["id"]),
                    "source": {
                        "id": str(r["source_object_id"]),
                        "name": r["source_name"],
                        "object_type": r["source_type"],
                        "project": {
                            "id": str(r["source_project_id"]),
                            "name": r["source_project_name"],
                        },
                    },
                    "connection_type": r["connection_type"],
                    "protocol": r["protocol"],
                    "frequency": r["frequency"],
                    "status": r["status"],
                }
                for r in in_rows
            ]

        results.append(
            {
                "query_object": {
                    "id": oid,
                    "name": obj_row["name"],
                    "object_type": obj_row["object_type"],
                    "project": {
                        "id": str(obj_row["project_id"]),
                        "name": obj_row["project_name"],
                    },
                },
                "outbound_connections": outbound,
                "inbound_connections": inbound,
                "total_outbound": len(outbound),
                "total_inbound": len(inbound),
            }
        )

    # If single object, unwrap
    data = results[0] if len(results) == 1 else results
    return {"data": data}


@router.get("/annual-plan-summary/{plan_id}")
async def annual_plan_summary(
    user: CurrentUser,
    plan_id: str,
    db: asyncpg.Connection = Depends(get_db),
) -> dict:
    """FR-022: Annual plan dashboard summary."""
    plan = await db.fetchrow("SELECT * FROM ppg_annual_plans WHERE id = $1", plan_id)
    if not plan:
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": "Annual plan not found"})

    dod_items = await db.fetch(
        "SELECT weight, is_achieved FROM ppg_annual_plan_dod_items WHERE plan_id = $1", plan_id
    )

    # Projects linked to this plan
    projects_rows = await db.fetch(
        """
        SELECT p.id, p.name, p.status, p.code
        FROM ppg_plan_project_links ppl
        JOIN projects p ON p.id = ppl.project_id
        WHERE ppl.plan_id = $1 AND ppl.unlinked_at IS NULL
        ORDER BY p.name
        """,
        plan_id,
    )

    # Count by status
    projects_by_status: dict[str, int] = {
        "active": 0,
        "on_hold": 0,
        "completed": 0,
        "archived": 0,
    }
    project_details: list[dict] = []

    # Batch 3 query cho toàn bộ dự án của plan thay vì 4 query / dự án (N+1)
    pids = [str(p["id"]) for p in projects_rows]
    ms_map: dict = {}
    ba_map: dict = {}
    cov_map: dict = {}
    if pids:
        ms_rows = await db.fetch(
            """
            SELECT project_id,
                   COUNT(*) AS total_ms,
                   COUNT(*) FILTER (WHERE status = 'completed') AS done_ms
            FROM project_milestones
            WHERE project_id = ANY($1::uuid[])
            GROUP BY project_id
            """,
            pids,
        )
        ms_map = {str(r["project_id"]): r for r in ms_rows}
        # BA docs approved — bảng mới ba_documents + legacy project_documents
        ba_rows = await db.fetch(
            """
            SELECT project_id, COUNT(*) AS cnt FROM (
                SELECT project_id FROM ba_documents
                WHERE project_id = ANY($1::uuid[]) AND status = 'approved'
                UNION ALL
                SELECT project_id FROM project_documents
                WHERE project_id = ANY($1::uuid[]) AND status = 'approved'
            ) combined
            GROUP BY project_id
            """,
            pids,
        )
        ba_map = {str(r["project_id"]): r["cnt"] for r in ba_rows}
        # Test coverage từ báo cáo test mới nhất per project
        cov_rows = await db.fetch(
            """
            SELECT DISTINCT ON (project_id) project_id, COALESCE(coverage, 0) AS coverage_pct
            FROM test_reports
            WHERE project_id = ANY($1::uuid[])
            ORDER BY project_id, executed_at DESC
            """,
            pids,
        )
        cov_map = {str(r["project_id"]): float(r["coverage_pct"]) for r in cov_rows}

    for p in projects_rows:
        pstatus = p["status"]
        if pstatus in projects_by_status:
            projects_by_status[pstatus] += 1

        pid = str(p["id"])
        ms = ms_map.get(pid)
        total_ms = ms["total_ms"] if ms else 0
        done_ms = ms["done_ms"] if ms else 0
        ba_approved = ba_map.get(pid, 0)
        test_coverage = cov_map.get(pid, 0.0)

        project_details.append(
            {
                "id": pid,
                "name": p["name"],
                "status": pstatus,
                "milestone_progress": f"{done_ms or 0}/{total_ms or 0}",
                "ba_docs_approved": ba_approved or 0,
                "test_coverage_pct": test_coverage,
            }
        )

    return {
        "data": {
            "plan": {
                "id": str(plan["id"]),
                "name": plan["name"],
                "year": plan["year"],
                "status": plan["status"],
            },
            "dod_completion_pct": _calc_dod_pct(list(dod_items)),
            "projects_by_status": projects_by_status,
            "projects": project_details,
        }
    }
