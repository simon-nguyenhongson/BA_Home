from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)
payload = {
    "project_id": "36ff81c8-4676-456b-bcf8-0c46b0dcc10c",
    "doc_type": "MASTER_DOC",
    "title": "Doc Master",
    "content": "Test content",
    "version": "v1.0"
}
response = client.post("/api/v1/documents", json=payload)
print(response.status_code)
print(response.json())
