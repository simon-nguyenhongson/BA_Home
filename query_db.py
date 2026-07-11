import asyncio
import asyncpg

async def main():
    conn = await asyncpg.connect(user='postgres', database='devops_hub', host='/tmp')
    rows = await conn.fetch("SELECT * FROM file_versions ORDER BY uploaded_at DESC LIMIT 5")
    for r in rows:
        print(r['file_id'], r['version'], r['storage_path'])
    await conn.close()

asyncio.run(main())
