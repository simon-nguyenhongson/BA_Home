import asyncio
import asyncpg
import json

async def run():
    conn = await asyncpg.connect('postgresql://nguyenhongson@localhost:5432/ecosys_test_db')
    row = await conn.fetchrow('SELECT brs_id FROM brs_sync ORDER BY synced_at DESC LIMIT 1')
    print("Latest BRS ID:", row['brs_id'])
    await conn.close()

asyncio.run(run())
