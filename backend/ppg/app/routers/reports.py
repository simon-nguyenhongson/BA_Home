"""
Reports Router — Cross-project Connection Report (FR-026) and
Cross-project connection report.
"""
from __future__ import annotations

from typing import Optional
from uuid import UUID

import asyncpg
from fastapi import APIRouter, Depends, HTTPException, Query

from app.auth import CurrentUser
from app.database import get_db

router = APIRouter(prefix="/reports", tags=["reports"])



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


