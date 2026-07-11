import httpx
import asyncio

async def test():
    payload = {
        "project_id": "36ff81c8-4676-456b-bcf8-0c46b0dcc10c",
        "doc_type": "MASTER_DOC",
        "title": "Doc Master",
        "content": "Lần 20: Admin -> Data Dictionary...",
        "version": "v1.0"
    }
    # But wait, we need a token for 422! If we don't have a token, we get 401/403.
    # To get a 422, the user is authenticated. We need to print the FastAPI ValidationError from the server side.
