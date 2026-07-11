import asyncio
import asyncpg

async def run():
    conn = await asyncpg.connect('postgresql://devops:devops123@127.0.0.1/devops_hub')
    count = await conn.fetchval('SELECT count(*) FROM test_cases')
    print("Test Cases count:", count)
    
    brs_count = await conn.fetchval('SELECT count(*) FROM brs_sync')
    print("BRS Sync count:", brs_count)
    await conn.close()

asyncio.run(run())
