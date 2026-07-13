import os
import asyncio
from typing import Dict, Any

# You can configure API keys via environment variables
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

class AIGeneratorService:
    @staticmethod
    async def generate_document(raw_text: str, doc_type: str, project_name: str = "Project", master_doc_text: str = "") -> str:
        """
        Generates a document from raw requirements and AS-IS system logic.
        Falls back to a mock generation if no API key is present.
        """
        import os
        api_key = os.getenv("GEMINI_API_KEY")
        if api_key:
            return await AIGeneratorService._generate_with_gemini(raw_text, doc_type, master_doc_text)
        else:
            return await AIGeneratorService._generate_mock(raw_text, doc_type, project_name, master_doc_text)

    @staticmethod
    async def _generate_with_gemini(raw_text: str, doc_type: str, master_doc_text: str = "") -> str:
        import httpx
        
        if doc_type == "BRS":
            prompt = f"""
You are an expert Senior IT Business Analyst.
I will provide you with the AS-IS System documentation (Master Document) and a set of requested changes (PCRs/Requirements).
Your task is to analyze the gap between the AS-IS system and the new requirements, and generate a professional Business Requirement Specification (BRS) representing the TO-BE state.

CRITICAL INSTRUCTIONS:
1. Compare the current AS-IS system capabilities with the new changes requested.
2. Provide a detailed Impact Analysis section covering changes required for: Business Logic, API, Database, and ETL/Data Pipeline.
3. Structure the BRS clearly with: Introduction, AS-IS vs TO-BE Summary, Impact Analysis, Detailed Use Cases, and Non-Functional Requirements.
4. Do not include conversational filler. Output pure Markdown.
5. LƯU Ý QUAN TRỌNG: BẮT BUỘC PHẢI TRẢ LỜI 100% BẰNG TIẾNG VIỆT (VIETNAMESE).

AS-IS System Master Document:
{master_doc_text or "No existing AS-IS documentation provided."}

Requested Changes (PCRs/Raw Requirements):
{raw_text}
"""
        else:
            prompt = f"""
You are an expert Business Analyst. I will provide you with raw requirements from a client.
Your task is to generate a professional {doc_type} document based on these requirements.

Document Type Guidelines:
- BRD (Business Requirements Document): Include Executive Summary, Business Objectives, Scope, and Functional Requirements.
- ERD (Entity Relationship Diagram): Generate ONLY a mermaid.js erDiagram block showing the database structure. Use standard markdown codeblock with 'mermaid' tag.
- API_SPEC (API Specification): Generate a RESTful API design in markdown format with Endpoints, Methods, Request/Response payloads.
- MASTER_DOC (System AS-IS): Describe the overall system architecture, core features, logic, and database schemas based on the inputs.

Raw Requirements:
{raw_text}

Output the document in pure Markdown format. Do not include any conversational filler.
LƯU Ý QUAN TRỌNG: BẮT BUỘC PHẢI TRẢ LỜI 100% BẰNG TIẾNG VIỆT (VIETNAMESE).
"""
        
        import os
        api_key = os.getenv("GEMINI_API_KEY")
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key={api_key}"
        payload = {
            "contents": [{"parts": [{"text": prompt}]}]
        }
        
        async with httpx.AsyncClient() as client:
            resp = await client.post(url, json=payload, timeout=120.0)
            if resp.status_code != 200:
                print(f"Gemini API Error: {resp.text}")
                return f"Error calling Gemini API: {resp.status_code}\n\n{resp.text}"
            
            data = resp.json()
            try:
                return data["candidates"][0]["content"]["parts"][0]["text"]
            except (KeyError, IndexError):
                return f"Error parsing Gemini API response:\n{data}"

    @staticmethod
    async def _generate_mock(raw_text: str, doc_type: str, project_name: str, master_doc_text: str = "") -> str:
        await asyncio.sleep(1) # Simulate processing time
        
        if doc_type == "BRD":
            return f"""# Business Requirements Document (BRD)\n\n## 1. Executive Summary\nThis document outlines the business requirements for {project_name}.\n\n## 2. Business Objectives\n- Automate manual processes.\n- Enhance user experience.\n\n## 3. Scope\nBased on raw input:\n> {raw_text}\n\n## 4. Functional Requirements\n1. The system shall allow users to register and login.\n2. The system shall support secure data transmission.\n"""
        
        elif doc_type == "BRS":
            return f"""# Business Requirement Specification (BRS)\n\n## 1. Introduction\nTO-BE specifications derived from PCRs and AS-IS comparison.\n\n## 2. AS-IS vs TO-BE Summary\n- **AS-IS**: {master_doc_text[:50]}...\n- **TO-BE**: Updated via {raw_text[:50]}...\n\n## 3. Impact Analysis\n- **Logic**: Updated validation rules.\n- **Database**: Add `status` column to `users`.\n- **API**: Change `POST /users` payload.\n- **ETL**: Update daily sync job.\n\n## 4. Use Cases\n- **UC-01**: Enhanced Login\n\n## 5. Non-Functional Requirements\n- **Performance**: 99.9% uptime.\n"""
        
        elif doc_type == "ERD":
            return f"""# Entity Relationship Diagram (ERD)\n\nBased on the requirements, here is the proposed database structure:\n\n```mermaid\nerDiagram\n    USER ||--o{{ POST : creates\n    USER {{\n        string id PK\n        string email\n        string password_hash\n    }}\n    POST {{\n        string id PK\n        string user_id FK\n        string content\n        date created_at\n    }}\n```\n"""
            
        elif doc_type == "API_SPEC":
            return f"""# API Specification\n\n## 1. Overview\nRESTful API design for the requirements.\n\n## 2. Endpoints\n\n### `POST /api/v1/auth/login`\n- **Description**: Authenticates a user.\n- **Request**:\n  ```json\n  {{\n    "email": "user@example.com",\n    "password": "secret"\n  }}\n  ```\n- **Response (200 OK)**:\n  ```json\n  {{\n    "token": "jwt_token_here"\n  }}\n  ```\n"""
            
        elif doc_type == "MASTER_DOC":
            return f"""# AS-IS System Master Document\n\n## 1. System Overview\nCore features for {project_name}.\n\n## 2. Features Logic\n- Logic 1\n- Logic 2\n\n## 3. Database & API\n- Tables: ...\n- Endpoints: ...\n"""
            
        else:
            return f"# Generated Document\n\nType: {doc_type}\n\n## Raw Input\n{raw_text}"
