"""
Tường thuật tiến độ cho mọi lượt gọi AI qua SSE.

VÌ SAO CÓ FILE NÀY
Một lượt gọi Claude mất hàng chục giây tới vài phút. Nút mờ đi kèm chữ "Đang sinh…" làm
người dùng tưởng hệ thống treo rồi bấm lại — mỗi lần bấm lại là một lượt gọi nữa, tốn hạn
mức thật và có luồng còn tạo thêm bản ghi trùng.

NGUYÊN TẮC
- Mọi số liệu tường thuật là số ĐO ĐƯỢC (dung lượng skill nạp, số ký tự bối cảnh, số
  ký tự/token mô hình đã sinh, kết quả kiểm chứng). KHÔNG có phần trăm phỏng đoán: độ dài
  tài liệu chưa biết trước nên giao diện dùng thanh chạy vô định.
- Lỗi đi ra bằng SỰ KIỆN, không bằng mã HTTP: thân phản hồi đã bắt đầu chảy nên không đổi
  status được nữa. Giữ nguyên code/message của HTTPException để giao diện nói đúng nguyên
  nhân (AI_RATE_LIMIT, AI_TRUNCATED, AI_MODEL_DOWNGRADED…).
- Connection lấy bằng get_conn() chứ không Depends(get_db): với StreamingResponse, thân
  phản hồi chảy SAU khi hàm endpoint trả về, nên connection do Depends cấp có thể đã được
  trả lại pool giữa lúc đang dùng.
"""
from __future__ import annotations

import asyncio
import json
import logging
from datetime import date, datetime
from decimal import Decimal
from typing import Any, AsyncIterator, Awaitable, Callable, Optional
from uuid import UUID

import asyncpg
from fastapi import HTTPException
from fastapi.responses import StreamingResponse

from app.database import get_conn

logger = logging.getLogger(__name__)

SSE_HEADERS = {
    "Cache-Control": "no-cache, no-transform",
    "Connection": "keep-alive",
    # Tắt đệm của nginx/proxy — nếu proxy gom lại thì sự kiện tới nơi thành một cục và
    # tường thuật trực tiếp mất hết ý nghĩa.
    "X-Accel-Buffering": "no",
}

# Nhịp tim: proxy và load balancer thường ngắt kết nối im lặng sau 30–60s không có dữ liệu,
# mà một lượt sinh tài liệu hoàn toàn có thể lâu hơn thế.
HEARTBEAT_S = 10.0

# Hàm nghiệp vụ: nhận connection + hàm phát sự kiện, trả về payload cuối cho client.
Emit = Callable[[dict], None]
Work = Callable[[asyncpg.Connection, Emit], Awaitable[dict]]


def _json_default(o: Any) -> Any:
    """
    Kiểu của asyncpg mà json.dumps không tự xử lý.

    LỖI ĐÃ SỬA: payload `done` của các luồng BRS / Master Doc / automation là dict(row) thô
    từ asyncpg — chứa UUID và datetime. json.dumps ném TypeError NGAY TRONG generator, nên
    thân phản hồi đứt sau bước cuối: dữ liệu ĐÃ ghi vào DB nhưng client không nhận được
    `done` và báo "mất kết nối giữa lượt chạy". Người dùng bấm lại → thêm một lượt gọi
    Claude nữa và một bản ghi trùng. (Luồng diagram không vỡ vì _row_to_dict đã isoformat
    sẵn — đúng kiểu lỗi chỉ hiện ở nhánh khác.)
    """
    if isinstance(o, (datetime, date)):
        return o.isoformat()
    if isinstance(o, UUID):
        return str(o)
    if isinstance(o, Decimal):
        return float(o)
    if isinstance(o, (bytes, bytearray)):
        return o.decode("utf-8", "replace")
    if isinstance(o, set):
        return list(o)
    return str(o)


def sse_frame(event: dict) -> bytes:
    return f"data: {json.dumps(event, ensure_ascii=False, default=_json_default)}\n\n".encode()


def error_event(exc: BaseException) -> dict:
    if isinstance(exc, HTTPException):
        detail = exc.detail
        if isinstance(detail, dict):
            return {"type": "error", "code": detail.get("code", "ERROR"),
                    "message": detail.get("message", str(detail))}
        return {"type": "error", "code": "ERROR", "message": str(detail)}
    logger.exception("Lỗi không lường trước trong luồng AI có tường thuật")
    return {"type": "error", "code": "UNEXPECTED",
            "message": f"Lỗi không lường trước: {exc}"}


async def pump(steps: list[dict], work: Work) -> AsyncIterator[bytes]:
    """
    Chạy `work` trong task riêng và đẩy sự kiện trong hàng đợi ra client.

    `steps` là danh sách bước THẬT của luồng, phát ngay ở sự kiện `start` để giao diện vẽ
    đủ khung trước khi bước đầu chạy — người dùng thấy toàn bộ đường đi, không phải đoán
    còn bao nhiêu nữa.
    """
    queue: asyncio.Queue = asyncio.Queue()

    def emit(ev: dict) -> None:
        # put_nowait: queue không giới hạn nên không phải chờ, an toàn cả khi task đang bị
        # hủy (await trong task đã hủy sẽ ném CancelledError lần nữa).
        queue.put_nowait(ev)

    yield sse_frame({"type": "start", "steps": steps})

    async def runner() -> None:
        try:
            async with get_conn() as db:
                data = await work(db, emit)
            emit({"type": "done", "data": data})
        except asyncio.CancelledError:
            # Người dùng bấm [Dừng] hoặc đóng tab. ĐÂY KHÔNG PHẢI LỖI: không ghi traceback
            # (nếu ghi thì mỗi lần ai đó bấm Dừng, log server hiện một khối traceback nhiều
            # tầng qua httpcore/anyio trông y như hệ thống vừa sập, làm người vận hành mất
            # phản xạ với traceback thật) và không phát sự kiện error vì client đã ngắt.
            raise
        except BaseException as exc:  # noqa: BLE001 — phải chuyển thành sự kiện error
            emit(error_event(exc))
        finally:
            emit({"type": "__eof__"})

    task = asyncio.create_task(runner())
    try:
        while True:
            try:
                ev = await asyncio.wait_for(queue.get(), timeout=HEARTBEAT_S)
            except asyncio.TimeoutError:
                yield b": keep-alive\n\n"
                continue
            if ev.get("type") == "__eof__":
                break
            yield sse_frame(ev)
    finally:
        if not task.done():
            # Client đóng kết nối — không để lượt gọi Claude tiếp tục chạy vô chủ.
            task.cancel()
        # Chờ task dừng hẳn để connection được trả lại pool trước khi thoát.
        await asyncio.gather(task, return_exceptions=True)


def sse_response(steps: list[dict], work: Work) -> StreamingResponse:
    """Bọc pump() thành phản hồi SSE — dùng trực tiếp trong endpoint."""
    return StreamingResponse(
        pump(steps, work),
        media_type="text/event-stream",
        headers=SSE_HEADERS,
    )


# ── Tiện ích dùng chung cho các bước ─────────────────────────────────────────

def step_done(emit: Emit, step_id: str, detail: Optional[str] = None) -> None:
    emit({"type": "step", "id": step_id, "state": "done",
          **({"detail": detail} if detail else {})})


def step_running(emit: Emit, step_id: str) -> None:
    emit({"type": "step", "id": step_id, "state": "running"})


def vi_num(n: int) -> str:
    """Số kiểu Việt Nam: 12.345 — dùng trong chuỗi tường thuật."""
    return f"{n:,}".replace(",", ".")
