"""
Xác thực nội bộ giữa các service — dùng cho endpoint service-to-service (/sync-doc, /sync-test).

Vì sao cần: hai endpoint đó nhận dữ liệu tài liệu dự án từ BA Workflow và Test Platform, và
trước đây KHÔNG có xác thực gì với lý do "internal endpoint". Trong mạng nội bộ ngân hàng,
"không xác thực" nghĩa là bất kỳ máy nào chạm được cổng 8001 đều ghi được tài liệu vào hồ sơ
dự án — không có cách nào biết dữ liệu đến từ đâu. Với tài liệu chịu kiểm toán thì đó là lỗi.

Cơ chế: chia sẻ một bí mật qua biến môi trường INTERNAL_SYNC_TOKEN.
- Đặt biến  → bắt buộc header X-Internal-Token khớp (so sánh chống rò rỉ thời gian).
- Chưa đặt → CHẶN, kèm thông báo nêu rõ phải đặt biến gì. Fail-closed có chủ đích: mở sẵn
  khi thiếu cấu hình chính là cái lỗ đang phải bịt.
"""
from __future__ import annotations

import hmac
import logging
import os

from fastapi import Header, HTTPException

logger = logging.getLogger(__name__)

ENV_VAR = "INTERNAL_SYNC_TOKEN"
HEADER = "X-Internal-Token"


async def require_internal_token(
    x_internal_token: str | None = Header(None, alias=HEADER),
) -> None:
    expected = (os.getenv(ENV_VAR) or "").strip()
    if not expected:
        logger.error(
            "%s chưa được cấu hình — từ chối mọi request sync để không mở cửa không kiểm soát.",
            ENV_VAR,
        )
        raise HTTPException(
            503,
            detail={
                "code": "INTERNAL_TOKEN_NOT_CONFIGURED",
                "message": f"Chưa cấu hình {ENV_VAR} trên PPG. Đặt cùng một giá trị cho cả "
                           "PPG, BA Workflow và Test Platform rồi khởi động lại.",
            },
        )
    if not x_internal_token or not hmac.compare_digest(x_internal_token.strip(), expected):
        raise HTTPException(
            401,
            detail={
                "code": "INTERNAL_TOKEN_INVALID",
                "message": f"Thiếu hoặc sai header {HEADER}.",
            },
        )
