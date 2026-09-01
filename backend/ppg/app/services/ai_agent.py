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

from app.services import skill_loader

logger = logging.getLogger(__name__)

DEFAULT_MODEL = "claude-opus-5"
DEFAULT_MAX_TOKENS = 32000


# Anthropic nhận 2 loại thông tin xác thực khác nhau:
#   - API key  (sk-ant-api...) → gửi qua header x-api-key
#   - OAuth token (sk-ant-oat...) → gửi qua Authorization: Bearer + header beta oauth
# Gửi sai kiểu sẽ bị trả 401 dù thông tin hợp lệ.
OAUTH_PREFIX = "sk-ant-oat"
OAUTH_BETA_HEADER = "oauth-2025-04-20"


def is_oauth_token(credential: str) -> bool:
    return credential.strip().startswith(OAUTH_PREFIX)


def build_client(credential: str):
    """Tạo AsyncAnthropic đúng kiểu xác thực theo tiền tố của credential."""
    from anthropic import AsyncAnthropic  # type: ignore[import-not-found]

    credential = credential.strip()
    if is_oauth_token(credential):
        return AsyncAnthropic(
            auth_token=credential,
            default_headers={"anthropic-beta": OAUTH_BETA_HEADER},
        )
    return AsyncAnthropic(api_key=credential)


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


# Skill hợp lệ cho từng BƯỚC của luồng. Không có bảng này thì skill_code do client truyền
# lên là chuỗi tự do: gọi bước "sinh BRS" với skill gen_test_report sẽ ghi một bản báo cáo
# test vào đúng cột nội dung BRS, rồi bản đó đi tiếp qua duyệt → golive → merge Master Doc.
# Lỗi kiểu đó không có dấu hiệu nào ở tầng dưới để chặn.
SKILL_STEP_ALLOWED: dict[str, set[str]] = {
    "gen_brs":           {"gen_brs"},
    "revise_brs":        {"revise_brs", "gen_brs"},   # gen_brs: tương thích ngược
    "update_master_doc": {"update_master_doc"},
    "gen_test_case":     {"gen_test_case"},
    "gen_test_report":   {"gen_test_report"},
    "gen_diagram":       {"gen_diagram"},
}


def assert_skill_for_step(step: str, skill_code: str) -> None:
    """
    Chặn dùng skill của bước khác. PO vẫn được tự tạo skill riêng, nhưng phải đặt mã
    thuộc nhóm của bước đó (ví dụ gen_brs_v2 cho bước sinh BRS) — xem tiền tố bên dưới.
    """
    allowed = SKILL_STEP_ALLOWED.get(step)
    if allowed is None:
        return
    if skill_code in allowed:
        return
    # Cho phép skill tùy biến của PO nếu mã bắt đầu bằng mã skill chuẩn của bước
    if any(skill_code.startswith(base) for base in allowed):
        return
    raise HTTPException(
        400,
        detail={
            "code": "SKILL_WRONG_STEP",
            "message": f"Skill '{skill_code}' không dùng được cho bước này. "
                       f"Bước này nhận: {', '.join(sorted(allowed))} "
                       f"(hoặc skill tùy biến có mã bắt đầu bằng các giá trị đó).",
        },
    )


async def load_skill_blocks(db: asyncpg.Connection, skill_code: str) -> list[str]:
    """
    Dựng các khối system của một skill.

    Skill có thư mục trên đĩa (chuẩn Claude skill: SKILL.md + references/ + templates/) thì
    nạp từ đó, và phần `ai_skills.content` trong DB được NỐI THÊM làm "Bổ sung của đơn vị" —
    PO tinh chỉnh được trên UI mà không sửa được hợp đồng đầu ra mà mã nguồn parse theo.

    Skill do PO tự tạo (không có thư mục) thì dùng nguyên nội dung trong DB.
    """
    row = await db.fetchrow(
        "SELECT content FROM ai_skills WHERE code = $1", skill_code
    )
    db_content = (row["content"] or "").strip() if row else ""

    if skill_loader.has_folder(skill_code):
        bundle = skill_loader.load_bundle(skill_code)
        if bundle.missing:
            # Thiếu file khai báo trong frontmatter là lỗi cài đặt, không phải lỗi người dùng.
            # Chạy tiếp với phần còn lại nhưng ghi log để phát hiện khi deploy sai.
            logger.error(
                "Skill %s thiếu file: %s", skill_code, ", ".join(bundle.missing)
            )
        return bundle.system_blocks(org_addendum=db_content)

    if not row:
        raise HTTPException(
            404,
            detail={
                "code": "SKILL_NOT_FOUND",
                "message": f"Không tìm thấy skill '{skill_code}' trong kho skill.",
            },
        )
    if not db_content:
        raise HTTPException(
            400,
            detail={
                "code": "SKILL_EMPTY",
                "message": f"Skill '{skill_code}' chưa có nội dung hướng dẫn.",
            },
        )
    return [db_content]


async def run_skill(
    db: asyncpg.Connection,
    skill_code: str,
    user_prompt: str,
    extra_system: str = "",
    max_tokens: Optional[int] = None,
    cached_prefix: Optional[list[str]] = None,
) -> str:
    """
    Chạy một skill của kho skill với nội dung yêu cầu cụ thể, trả về text kết quả.

    cached_prefix: các khối system lớn và ổn định nạp TRƯỚC nội dung skill — dùng cho
    skill có tài liệu kỹ thuật nằm trên đĩa thay vì trong DB (hiện tại: gen_diagram nạp
    SKILL.md + reference của skill diagram-design). Mỗi khối được đánh dấu cache riêng.

    Raise HTTPException khi thiếu key / skill không tồn tại / Claude API lỗi.
    """
    try:
        from anthropic import (  # type: ignore[import-not-found]
            APIConnectionError,
            APIStatusError,
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
    skill_blocks = await load_skill_blocks(db, skill_code)

    model = (settings.get("anthropic_model") or "").strip() or DEFAULT_MODEL
    if max_tokens is None:
        try:
            max_tokens = int(settings.get("anthropic_max_tokens") or DEFAULT_MAX_TOKENS)
        except ValueError:
            max_tokens = DEFAULT_MAX_TOKENS

    # Anthropic cho tối đa 4 điểm cắt cache. Ưu tiên: khối kỹ thuật lớn từ cached_prefix
    # (hiện chỉ diagram-design dùng), rồi tới các khối của skill. Khối nào vượt 4 thì vẫn
    # gửi nhưng không đánh dấu cache.
    MAX_CACHE_POINTS = 4
    system_blocks: list[dict] = []
    marked = 0
    for block in list(cached_prefix or []) + skill_blocks:
        if not block.strip():
            continue
        item: dict = {"type": "text", "text": block}
        if marked < MAX_CACHE_POINTS:
            item["cache_control"] = {"type": "ephemeral"}
            marked += 1
        system_blocks.append(item)
    if extra_system.strip():
        system_blocks.append({"type": "text", "text": extra_system})

    client = build_client(api_key)
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
                "message": _auth_error_message(api_key),
            },
        )
    except RateLimitError:
        raise HTTPException(
            429,
            detail={
                "code": "AI_RATE_LIMIT",
                "message": _rate_limit_message(api_key, model),
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

    # Phản hồi bị cắt vì chạm max_tokens — PHẢI từ chối, không được lưu.
    #
    # Đây là lỗi nguy hiểm nhất của luồng tài liệu: mọi skill đều yêu cầu trả về TOÀN BỘ
    # tài liệu (BRS 12 mục, Master Doc đầy đủ, mảng JSON test case). Một phản hồi bị cắt
    # giữa vẫn là văn bản hợp lệ về mặt cú pháp, nên nếu không kiểm ở đây thì nó được lưu
    # như tài liệu hoàn chỉnh: BRS thiếu mục 8–12 vẫn được duyệt rồi merge vào Master Doc,
    # Master Doc mất phần cuối mà không ai biết.
    if message.stop_reason == "max_tokens":
        usage = getattr(message, "usage", None)
        out_tokens = getattr(usage, "output_tokens", None) if usage else None
        raise HTTPException(
            502,
            detail={
                "code": "AI_TRUNCATED",
                "message": (
                    f"Phản hồi của Claude bị cắt vì chạm giới hạn {max_tokens:,} token đầu ra"
                    + (f" (đã sinh {out_tokens:,} token)" if out_tokens else "")
                    + ". Nội dung KHÔNG được lưu vì tài liệu sẽ thiếu phần cuối. "
                    "Tăng 'Giới hạn token đầu ra' trong Cài đặt → AI Agent, hoặc chia nhỏ "
                    "yêu cầu (ví dụ: merge Master Doc theo từng chương)."
                ),
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

    client = build_client(api_key)
    try:
        # max_tokens phải >= ngưỡng tối thiểu của model đời mới (16 bị API từ chối 400
        # dù key hợp lệ → nút Test báo lỗi trong khi luồng sinh tài liệu vẫn chạy).
        message = await client.messages.create(
            model=model,
            max_tokens=1024,
            messages=[{"role": "user", "content": "Trả lời đúng 1 từ: pong"}],
        )
        return {"ok": True, "model": message.model}
    except AuthenticationError:
        raise HTTPException(
            400,
            detail={"code": "AI_KEY_INVALID", "message": _auth_error_message(api_key)},
        )
    except RateLimitError:
        raise HTTPException(
            429,
            detail={"code": "AI_RATE_LIMIT", "message": _rate_limit_message(api_key, model)},
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


def _rate_limit_message(credential: str, model: str = "") -> str:
    """
    Thông báo 429 — nêu rõ nếu đang dùng OAuth token của gói thuê bao.

    Hạn mức của gói thuê bao tính RIÊNG theo từng lớp model: Opus/Sonnet có thể đã cạn
    trong khi Haiku vẫn gọi được. Vì vậy phải nói rõ model nào bị chặn, nếu không người
    dùng thấy Claude Code vẫn chạy bình thường và tưởng hệ thống bị lỗi.
    """
    which = f" cho model {model}" if model else ""
    if is_oauth_token(credential):
        return (
            f"Đã chạm giới hạn sử dụng của gói thuê bao gắn với OAuth token này{which}. "
            "Hạn mức tính riêng theo từng lớp model — thử đổi sang model nhẹ hơn "
            "(Claude Haiku 4.5) trong Cài đặt → AI Agent, chờ hạn mức đặt lại, "
            "hoặc chuyển sang API key trả theo lượt dùng (sk-ant-api...) "
            "lấy từ console.anthropic.com."
        )
    return (
        f"Claude API đang giới hạn tần suất{which}. Thử lại sau ít phút, "
        "hoặc dùng model nhẹ hơn nếu cần chạy liên tục."
    )


def _auth_error_message(credential: str) -> str:
    """Thông báo 401 nêu đúng nguyên nhân theo loại thông tin xác thực."""
    if is_oauth_token(credential):
        return (
            "OAuth token không hợp lệ hoặc đã hết hạn. OAuth token (sk-ant-oat...) "
            "chỉ sống ngắn hạn — nên dùng API key vĩnh viễn (sk-ant-api...) "
            "lấy từ console.anthropic.com để hệ thống chạy ổn định."
        )
    return "Claude API key không hợp lệ. Kiểm tra lại trong Cài đặt → AI."


def mask_key(key: str) -> str:
    """Che API key khi trả về cho frontend."""
    if not key:
        return ""
    if len(key) <= 12:
        return "***"
    return f"{key[:7]}***{key[-4:]}"
