import asyncio
import httpx

async def main():
    async with httpx.AsyncClient() as client:
        payload = {
            "project_id": "36ff81c8-4676-456b-bcf8-0c46b0dcc10c",
            "doc_type": "MASTER_DOC",
            "title": "Doc Master",
            "content": "Test content",
            "version": "v1.0"
        }
        res = await client.post("http://127.0.0.1:8002/api/v1/documents", json=payload)
        print(res.status_code)
        print(res.text)

asyncio.run(main())
