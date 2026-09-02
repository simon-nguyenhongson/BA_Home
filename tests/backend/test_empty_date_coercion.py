"""
Chuỗi rỗng ở trường ngày tùy chọn phải là "không có ngày", không phải lỗi 422.

LỖI ĐÃ SỬA: <input type="date"> để trống gửi '' chứ không phải null. Field khai
Optional[date] khiến Pydantic trả 422 "Input should be a valid date or datetime,
input is too short" — người dùng chỉ thấy "Tạo task không được".
"""
import os
import sys

import pytest

# Cùng cách nạp như các test backend khác trong thư mục này
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "..", "backend", "ppg"))

from app.routers.todos import TodoCreate, TodoUpdate            # noqa: E402
from app.routers.projects import ProjectCreate as ProjectCreateRouter  # noqa: E402
from app.models.project import ProjectCreate, ProjectUpdate     # noqa: E402


@pytest.mark.parametrize("blank", ["", "   ", "\t"])
def test_todo_create_due_date_blank_is_none(blank):
    assert TodoCreate(title="x", due_date=blank).due_date is None


def test_todo_update_due_date_blank_is_none():
    assert TodoUpdate(due_date="").due_date is None


def test_project_router_dates_blank_are_none():
    p = ProjectCreateRouter(code="X", name="y", start_date="", end_date="")
    assert p.start_date is None and p.end_date is None


def test_project_model_dates_blank_are_none():
    p = ProjectCreate(code="X", name="y", start_date="", end_date="")
    assert p.start_date is None and p.end_date is None
    u = ProjectUpdate(start_date="", end_date="")
    assert u.start_date is None and u.end_date is None


def test_valid_date_still_parsed():
    assert str(TodoCreate(title="x", due_date="2026-12-31").due_date) == "2026-12-31"


def test_malformed_date_still_rejected():
    """Nới lỏng chỉ áp cho chuỗi rỗng — ngày sai định dạng vẫn phải bị chặn."""
    from pydantic import ValidationError
    for bad in ["31/12/2026", "hôm nay", "2026-13-45"]:
        with pytest.raises(ValidationError):
            TodoCreate(title="x", due_date=bad)
