import asyncio
import asyncpg
import json

async def main():
    conn = await asyncpg.connect(user='postgres', database='devops_hub', host='/tmp')
    plan_id = "6e878da1-698b-42f1-b0fc-78f505572fa9"
    
    plan = await conn.fetchrow("SELECT * FROM ppg_annual_plans WHERE id = $1", plan_id)
    if not plan:
        print("Plan not found")
        return
        
    projects_rows = await conn.fetch(
        """
        SELECT p.id, p.name, p.status, p.code
        FROM ppg_plan_project_links ppl
        JOIN projects p ON p.id = ppl.project_id
        WHERE ppl.plan_id = $1 AND ppl.unlinked_at IS NULL
        ORDER BY p.name
        """,
        plan_id,
    )
    
    for p in projects_rows:
        total_ms = await conn.fetchval(
            "SELECT COUNT(*) FROM project_milestones WHERE project_id = $1", str(p["id"])
        )
        print("total_ms:", total_ms)
        
        test_row = await conn.fetchrow(
            """
            SELECT COALESCE(coverage, 0) AS coverage_pct FROM test_reports
            WHERE project_id = $1
            ORDER BY executed_at DESC LIMIT 1
            """,
            str(p["id"]),
        )
        print("test_row:", test_row)

    print("Success")
    await conn.close()

asyncio.run(main())
