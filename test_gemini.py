import asyncio, os
import httpx
from dotenv import load_dotenv

load_dotenv("backend/ba-workflow/.env")
api_key = os.getenv("GEMINI_API_KEY")

async def test():
    # Let's test gemini-2.5-pro and gemini-1.5-pro-latest and gemini-pro-latest
    for model in ["gemini-2.5-pro", "gemini-pro-latest", "gemini-3-pro-preview"]:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={api_key}"
        payload = {"contents": [{"parts": [{"text": "Hello"}]}]}
        async with httpx.AsyncClient() as client:
            resp = await client.post(url, json=payload)
            print(f"{model}:", resp.status_code)
            if resp.status_code != 200:
                print(resp.json())

asyncio.run(test())
