import asyncio
import asyncpg

async def main():
    conn = await asyncpg.connect(user='postgres', database='devops_hub', host='/tmp')
    await conn.execute("ALTER TABLE ppg_annual_plans ADD COLUMN IF NOT EXISTS updated_by VARCHAR(255);")
    print("Column updated_by added to ppg_annual_plans")
    await conn.close()

asyncio.run(main())
