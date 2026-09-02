"""
Chuẩn hoá đầu vào từ form HTML trước khi Pydantic kiểm kiểu.

VÌ SAO CẦN
`<input type="date">` để trống trả về CHUỖI RỖNG, không phải null. Với field khai
`Optional[date]`, Pydantic v2 từ chối `''` và trả 422:

    "Input should be a valid date or datetime, input is too short"

Người dùng chỉ thấy "tạo task không được" (form todos) hoặc một câu tiếng Anh về kiểu dữ
liệu (form dự án) — trong khi họ chỉ đơn giản là KHÔNG NHẬP ngày, điều hoàn toàn hợp lệ vì
trường đó tùy chọn.

Sửa ở tầng model thay vì bắt mọi form phải nhớ đổi '' thành undefined: đây là chốt duy
nhất mà mọi client (giao diện, curl, tích hợp) đều đi qua.
"""
from __future__ import annotations

from typing import Any


def empty_str_to_none(v: Any) -> Any:
    """
    Chuỗi rỗng / chỉ khoảng trắng → None. Giá trị khác giữ nguyên để Pydantic kiểm như cũ.

    Dùng với field_validator(..., mode="before") trên các field ngày/giờ tùy chọn.
    """
    if isinstance(v, str) and not v.strip():
        return None
    return v
