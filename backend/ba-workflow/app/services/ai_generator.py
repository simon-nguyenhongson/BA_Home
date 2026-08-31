import os
import asyncio
import logging
from typing import Dict, Any

logger = logging.getLogger(__name__)

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
I will provide you with the AS-IS System documentation (Master Document) and a set of requested changes (CRs/Requirements).
Your task is to analyze the gap between the AS-IS system and the new requirements, and generate a professional Business Requirement Specification (BRS) representing the TO-BE state.

CRITICAL INSTRUCTIONS:
1. Compare the current AS-IS system capabilities with the new changes requested.
2. Provide a detailed Impact Analysis section covering changes required for: Business Logic, API, Database, and ETL/Data Pipeline.
3. Structure the BRS clearly with: Introduction, AS-IS vs TO-BE Summary, Impact Analysis, Detailed Use Cases, and Non-Functional Requirements.
4. Do not include conversational filler. Output pure Markdown.
5. LƯU Ý QUAN TRỌNG: BẮT BUỘC PHẢI TRẢ LỜI 100% BẰNG TIẾNG VIỆT (VIETNAMESE).

AS-IS System Master Document:
{master_doc_text or "No existing AS-IS documentation provided."}

Requested Changes (CRs/Raw Requirements):
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
        url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent"
        payload = {
            "contents": [{"parts": [{"text": prompt}]}]
        }
        
        async with httpx.AsyncClient() as client:
            resp = await client.post(
                url, json=payload, timeout=120.0,
                headers={"x-goog-api-key": api_key},
            )
            if resp.status_code != 200:
                logger.error("Gemini API error %s: %s", resp.status_code, resp.text)
                return f"Error calling Gemini API: {resp.status_code}\n\n{resp.text}"
            
            data = resp.json()
            try:
                return data["candidates"][0]["content"]["parts"][0]["text"]
            except (KeyError, IndexError):
                return f"Error parsing Gemini API response:\n{data}"

    @staticmethod
    async def merge_crs_into_master_doc(
        current_content: str,
        crs: list,
        product_name: str = "Hệ thống",
    ) -> str:
        """
        Hợp nhất nội dung các CR đã hoàn thành vào MasterDoc, trả về bản MasterDoc mới.
        Kết quả LUÔN cần human review trước khi commit thành version (xem master_docs router).
        Fallback sang bản merge giả lập khi chưa cấu hình GEMINI_API_KEY.
        """
        cr_block = "\n\n".join(
            f"### [{c.get('request_code', '')}] {c.get('title', '')}\n"
            f"- Loại thay đổi: {c.get('change_type') or 'n/a'}\n"
            f"- Mức ưu tiên: {c.get('priority') or 'n/a'}\n"
            f"- Phạm vi ảnh hưởng: {c.get('impact_scope') or 'n/a'}\n"
            f"- Mô tả: {c.get('description') or ''}\n"
            f"- Ghi chú: {c.get('notes') or ''}"
            for c in crs
        )

        api_key = os.getenv("GEMINI_API_KEY")
        if not api_key:
            return AIGeneratorService._merge_mock(current_content, crs, product_name, cr_block)

        prompt = f"""
Bạn là Senior IT Business Analyst phụ trách tài liệu hệ thống (MasterDoc) của "{product_name}".

NHIỆM VỤ: Cập nhật MasterDoc hiện tại bằng cách hợp nhất các Change Request (CR) đã hoàn thành dưới đây.

QUY TẮC BẮT BUỘC:
1. Giữ nguyên cấu trúc, thứ tự chương mục và văn phong của MasterDoc hiện tại.
2. CHỈ sửa đúng những phần bị CR tác động. Không viết lại, không tóm tắt, không lược bỏ nội dung không liên quan.
3. MasterDoc mô tả trạng thái HIỆN TẠI (AS-IS) của hệ thống sau khi CR đã triển khai — viết ở thì hiện tại,
   KHÔNG viết kiểu "sẽ thay đổi theo CR-xxx".
4. Nếu CR bổ sung tính năng/luồng/bảng dữ liệu mới, đưa vào đúng chương mục phù hợp;
   chỉ tạo mục mới khi thực sự chưa có chỗ để đặt.
5. Không thêm phần changelog hay lịch sử phiên bản — hệ thống tự quản lý riêng.
6. Đầu ra là Markdown thuần, không kèm lời dẫn hay giải thích.
7. BẮT BUỘC TRẢ LỜI 100% BẰNG TIẾNG VIỆT.

=== MASTERDOC HIỆN TẠI ===
{current_content or "(Chưa có nội dung — hãy soạn MasterDoc đầu tiên từ các CR bên dưới.)"}

=== CÁC CR CẦN HỢP NHẤT ===
{cr_block}
"""

        import httpx

        url = (
            "https://generativelanguage.googleapis.com/v1beta/models/"
            "gemini-2.5-flash:generateContent"
        )
        async with httpx.AsyncClient() as client:
            resp = await client.post(
                url, json={"contents": [{"parts": [{"text": prompt}]}]}, timeout=180.0,
                headers={"x-goog-api-key": api_key},
            )
            if resp.status_code != 200:
                raise RuntimeError(f"Gemini API lỗi {resp.status_code}: {resp.text[:300]}")
            data = resp.json()
            try:
                return data["candidates"][0]["content"]["parts"][0]["text"]
            except (KeyError, IndexError) as exc:
                raise RuntimeError(f"Không đọc được phản hồi Gemini: {data}") from exc

    @staticmethod
    def _merge_mock(current_content: str, crs: list, product_name: str, cr_block: str) -> str:
        """Bản merge giả lập khi chưa có GEMINI_API_KEY — nối CR vào cuối MasterDoc."""
        codes = ", ".join(c.get("request_code", "") for c in crs)
        base = current_content or f"# MasterDoc — {product_name}\n\n## 1. Tổng quan hệ thống\n\n(Chưa có nội dung.)\n"
        return (
            f"{base}\n\n"
            f"## Thay đổi hợp nhất từ {codes}\n\n"
            f"> Nội dung dưới đây do bản merge giả lập sinh ra (chưa cấu hình GEMINI_API_KEY).\n"
            f"> Vui lòng biên tập lại trước khi commit thành phiên bản chính thức.\n\n"
            f"{cr_block}\n"
        )

    @staticmethod
    async def _generate_mock(raw_text: str, doc_type: str, project_name: str, master_doc_text: str = "") -> str:
        await asyncio.sleep(1) # Simulate processing time
        
        if doc_type == "BRD":
            return f"""# Business Requirements Document (BRD)\n\n## 1. Executive Summary\nThis document outlines the business requirements for {project_name}.\n\n## 2. Business Objectives\n- Automate manual processes.\n- Enhance user experience.\n\n## 3. Scope\nBased on raw input:\n> {raw_text}\n\n## 4. Functional Requirements\n1. The system shall allow users to register and login.\n2. The system shall support secure data transmission.\n"""
        
        elif doc_type == "BRS":
            return f"""# Business Requirement Specification (BRS)\n\n## 1. Introduction\nTO-BE specifications derived from CRs and AS-IS comparison.\n\n## 2. AS-IS vs TO-BE Summary\n- **AS-IS**: {master_doc_text[:50]}...\n- **TO-BE**: Updated via {raw_text[:50]}...\n\n## 3. Impact Analysis\n- **Logic**: Updated validation rules.\n- **Database**: Add `status` column to `users`.\n- **API**: Change `POST /users` payload.\n- **ETL**: Update daily sync job.\n\n## 4. Use Cases\n- **UC-01**: Enhanced Login\n\n## 5. Non-Functional Requirements\n- **Performance**: 99.9% uptime.\n"""
        
        elif doc_type == "ERD":
            return f"""# Entity Relationship Diagram (ERD)\n\nBased on the requirements, here is the proposed database structure:\n\n```mermaid\nerDiagram\n    USER ||--o{{ POST : creates\n    USER {{\n        string id PK\n        string email\n        string password_hash\n    }}\n    POST {{\n        string id PK\n        string user_id FK\n        string content\n        date created_at\n    }}\n```\n"""
            
        elif doc_type == "API_SPEC":
            return f"""# API Specification\n\n## 1. Overview\nRESTful API design for the requirements.\n\n## 2. Endpoints\n\n### `POST /api/v1/auth/login`\n- **Description**: Authenticates a user.\n- **Request**:\n  ```json\n  {{\n    "email": "user@example.com",\n    "password": "secret"\n  }}\n  ```\n- **Response (200 OK)**:\n  ```json\n  {{\n    "token": "jwt_token_here"\n  }}\n  ```\n"""
            
        elif doc_type == "MASTER_DOC":
            return f"""# AS-IS System Master Document\n\n## 1. System Overview\nCore features for {project_name}.\n\n## 2. Features Logic\n- Logic 1\n- Logic 2\n\n## 3. Database & API\n- Tables: ...\n- Endpoints: ...\n"""
            
        else:
            return f"# Generated Document\n\nType: {doc_type}\n\n## Raw Input\n{raw_text}"
