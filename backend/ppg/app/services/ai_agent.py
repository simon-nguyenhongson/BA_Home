"""
AI Agent Service — gọi Claude API bằng skill lấy từ kho skill chuẩn (bảng ai_skills).

Nguyên tắc (docs/design/AI-DOC-AUTOMATION-FLOW.md):
- API key + model đọc từ bảng app_settings (cấu hình trong menu Cài đặt).
- KHÔNG fallback mock, KHÔNG nuốt lỗi: thiếu key hoặc Claude lỗi thì trả HTTPException rõ ràng.
- Dùng SDK chính thức `anthropic` (AsyncAnthropic) + streaming để tránh timeout với tài liệu dài.
"""
from __future__ import annotations

import logging
from typing import Optional

import asyncpg
from fastapi import HTTPException

logger = logging.getLogger(__name__)

DEFAULT_MODEL = "claude-opus-5"
DEFAULT_MAX_TOKENS = 32000


async def get_ai_settings(db: asyncpg.Connection) -> dict[str, str]:
    """Đọc toàn bộ cấu hình AI từ app_settings."""
    rows = await db.fetch(
        "SELECT key, value FROM app_settings WHERE key LIKE 'anthropic_%'"
    )
    return {r["key"]: r["value"] for r in rows}


async def get_api_key(db: asyncpg.Connection) -> str:
    settings = await get_ai_settings(db)
    key = (settings.get("anthropic_api_key") or "").strip()
    if not key:
        raise HTTPException(
            400,
            detail={
                "code": "AI_KEY_MISSING",
                "message": "Chưa cấu hình Claude API key. Vào Cài đặt → AI để nhập key.",
            },
        )
    return key


async def get_skill_content(db: asyncpg.Connection, skill_code: str) -> str:
    """Lấy nội dung skill từ kho skill chuẩn."""
    row = await db.fetchrow(
        "SELECT content FROM ai_skills WHERE code = $1", skill_code
    )
    if not row:
        raise HTTPException(
            404,
            detail={
                "code": "SKILL_NOT_FOUND",
                "message": f"Không tìm thấy skill '{skill_code}' trong kho skill.",
            },
        )
    content = (row["content"] or "").strip()
    if not content:
        raise HTTPException(
            400,
            detail={
                "code": "SKILL_EMPTY",
                "message": f"Skill '{skill_code}' chưa có nội dung hướng dẫn.",
            },
        )
    return content


async def run_skill(
    db: asyncpg.Connection,
    skill_code: str,
    user_prompt: str,
    extra_system: str = "",
    max_tokens: Optional[int] = None,
) -> str:
    """
    Chạy một skill của kho skill với nội dung yêu cầu cụ thể, trả về text kết quả.

    Raise HTTPException khi thiếu key / skill không tồn tại / Claude API lỗi.
    """
    try:
        from anthropic import (  # type: ignore[import-not-found]
            APIConnectionError,
            APIStatusError,
            AsyncAnthropic,
            AuthenticationError,
            RateLimitError,
        )
    except ImportError:
        raise HTTPException(
            500,
            detail={
                "code": "AI_SDK_MISSING",
                "message": "Chưa cài SDK anthropic. Chạy: pip install -r requirements.txt",
            },
        )

    api_key = await get_api_key(db)
    settings = await get_ai_settings(db)
    skill_content = await get_skill_content(db, skill_code)

    model = (settings.get("anthropic_model") or "").strip() or DEFAULT_MODEL
    if max_tokens is None:
        try:
            max_tokens = int(settings.get("anthropic_max_tokens") or DEFAULT_MAX_TOKENS)
        except ValueError:
            max_tokens = DEFAULT_MAX_TOKENS

    system_blocks: list[dict] = [
        {
            "type": "text",
            "text": skill_content,
            # Skill là phần ổn định → cache để giảm chi phí khi gọi lặp lại
            "cache_control": {"type": "ephemeral"},
        }
    ]
    if extra_system.strip():
        system_blocks.append({"type": "text", "text": extra_system})

    client = AsyncAnthropic(api_key=api_key)
    try:
        async with client.messages.stream(
            model=model,
            max_tokens=max_tokens,
            system=system_blocks,
            messages=[{"role": "user", "content": user_prompt}],
        ) as stream:
            message = await stream.get_final_message()
    except AuthenticationError:
        raise HTTPException(
            400,
            detail={
                "code": "AI_KEY_INVALID",
                "message": "Claude API key không hợp lệ. Kiểm tra lại trong Cài đặt → AI.",
            },
        )
    except RateLimitError:
        raise HTTPException(
            429,
            detail={
                "code": "AI_RATE_LIMIT",
                "message": "Claude API đang giới hạn tần suất. Thử lại sau ít phút.",
            },
        )
    except APIStatusError as exc:
        logger.error("Claude API error %s: %s", exc.status_code, exc.message)
        raise HTTPException(
            502,
            detail={
                "code": "AI_API_ERROR",
                "message": f"Claude API lỗi {exc.status_code}: {exc.message}",
            },
        )
    except APIConnectionError:
        raise HTTPException(
            502,
            detail={
                "code": "AI_CONNECTION_ERROR",
                "message": "Không kết nối được tới Claude API. Kiểm tra mạng/proxy.",
            },
        )
    finally:
        await client.close()

    if message.stop_reason == "refusal":
        raise HTTPException(
            502,
            detail={
                "code": "AI_REFUSED",
                "message": "Claude từ chối thực hiện yêu cầu này. Xem lại nội dung đầu vào.",
            },
        )

    text = "".join(
        block.text for block in message.content if getattr(block, "type", "") == "text"
    ).strip()
    if not text:
        raise HTTPException(
            502,
            detail={
                "code": "AI_EMPTY_RESPONSE",
                "message": "Claude trả về nội dung rỗng. Thử lại hoặc chỉnh lại skill.",
            },
        )
    return text


async def verify_api_key(api_key: str, model: str = DEFAULT_MODEL) -> dict:
    """Gọi thử một request rất nhỏ để xác nhận key dùng được."""
    try:
        from anthropic import (  # type: ignore[import-not-found]
            APIConnectionError,
            APIStatusError,
            AsyncAnthropic,
            AuthenticationError,
        )
    except ImportError:
        raise HTTPException(
            500,
            detail={
                "code": "AI_SDK_MISSING",
                "message": "Chưa cài SDK anthropic. Chạy: pip install -r requirements.txt",
            },
        )

    client = AsyncAnthropic(api_key=api_key)
    try:
        message = await client.messages.create(
            model=model,
            max_tokens=16,
            messages=[{"role": "user", "content": "ping"}],
        )
        return {"ok": True, "model": message.model}
    except AuthenticationError:
        raise HTTPException(
            400,
            detail={"code": "AI_KEY_INVALID", "message": "Claude API key không hợp lệ."},
        )
    except APIStatusError as exc:
        raise HTTPException(
            502,
            detail={
                "code": "AI_API_ERROR",
                "message": f"Claude API lỗi {exc.status_code}: {exc.message}",
            },
        )
    except APIConnectionError:
        raise HTTPException(
            502,
            detail={
                "code": "AI_CONNECTION_ERROR",
                "message": "Không kết nối được tới Claude API.",
            },
        )
    finally:
        await client.close()


def mask_key(key: str) -> str:
    """Che API key khi trả về cho frontend."""
    if not key:
        return ""
    if len(key) <= 12:
        return "***"
    return f"{key[:7]}***{key[-4:]}"
