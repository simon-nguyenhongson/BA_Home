"""
Diagram Skill — nạp skill `diagram-design` (nhúng từ repo cathrynlavery/diagram-design, MIT)
và dựng prompt hệ thống để AI Agent vẽ diagram thành HTML+SVG tự chứa.

Vì sao cần lớp này thay vì nhét thẳng vào bảng ai_skills:
- Skill gốc gồm SKILL.md 40 KB + 54 file reference (585 KB). Nội dung cần nạp KHÁC NHAU
  theo từng loại diagram, nên không thể lưu một chuỗi cố định trong DB.
- Skill gốc chạy trong Claude Code — được đọc file và được HỎI LẠI người dùng. Qua API thì
  cả hai việc đó đều không xảy ra, nên phải viết lại phần dẫn nhập (xem ADAPTER_PREAMBLE).

Xem thêm: skills/diagram-design/ATTRIBUTION.md
"""
from __future__ import annotations

import logging
import re
import subprocess
import sys
import tempfile
from pathlib import Path

from fastapi import HTTPException

logger = logging.getLogger(__name__)

SKILL_DIR = Path(__file__).resolve().parents[1] / "skills" / "diagram-design"
REF_DIR = SKILL_DIR / "references"
SCRIPT_DIR = SKILL_DIR / "scripts"

# Skill code trong bảng ai_skills — nội dung trong DB là phần hướng dẫn nghiệp vụ
# riêng của BA_Home; phần kỹ thuật vẽ hình do loader này nạp từ đĩa.
SKILL_CODE = "gen_diagram"


# ── Bản đồ loại diagram của BA_Home → file reference của skill gốc ──────────────
#
# Ba loại đầu là yêu cầu của PO (QĐ-9). Phần còn lại là các loại thực sự hay dùng
# trong tài liệu BA ngân hàng. Muốn mở thêm loại: thêm một dòng vào đây, không cần
# sửa chỗ nào khác — API /diagrams/types tự sinh danh sách từ bản đồ này.
DIAGRAM_TYPES: dict[str, dict] = {
    "workflow": {
        "label": "Workflow — luồng nghiệp vụ",
        "hint": "Luồng xử lý có nhánh quyết định. Nếu có nhiều bộ phận bàn giao qua lại "
                "thì dùng ngữ pháp swimlane; nếu chỉ một luồng có điều kiện thì dùng flowchart.",
        "refs": ["type-flowchart.md", "type-swimlane.md"],
    },
    "sequence": {
        "label": "Sequence — trình tự trao đổi",
        "hint": "Thông điệp giữa các actor/hệ thống theo trục thời gian.",
        "refs": ["type-sequence.md"],
    },
    "dataflow": {
        "label": "Data flow — luồng dữ liệu",
        "hint": "Dữ liệu đi qua từng chặng, ai làm gì ở mỗi chặng.",
        "refs": ["type-data-flow.md"],
    },
    "architecture": {
        "label": "Architecture — kiến trúc hệ thống",
        "hint": "Thành phần và kết nối. Dùng cho phần kiến trúc của Master Doc.",
        "refs": ["type-architecture.md"],
    },
    "er": {
        "label": "ER — mô hình dữ liệu",
        "hint": "Thực thể, thuộc tính, quan hệ.",
        "refs": ["type-er.md"],
    },
    "state": {
        "label": "State — sơ đồ trạng thái",
        "hint": "Trạng thái và điều kiện chuyển. Dùng cho luồng duyệt CR/BRS/tài liệu.",
        "refs": ["type-state.md"],
    },
    "deployment": {
        "label": "Deployment — sơ đồ triển khai",
        "hint": "Phần mềm chạy ở đâu: vùng mạng, host, cổng, số bản chạy.",
        "refs": ["type-deployment.md"],
    },
    "journey": {
        "label": "User journey — hành trình người dùng",
        "hint": "Khách hàng làm gì qua từng chặng và cảm nhận thế nào.",
        "refs": ["type-journey.md"],
    },
    "layers": {
        "label": "Layer stack — phân tầng",
        "hint": "Các tầng trừu tượng xếp lớp. Hay dùng cho danh mục chốt kiểm soát.",
        "refs": ["type-layers.md"],
    },
    "process": {
        "label": "Process — quy trình nhiều bên",
        "hint": "Quy trình tuần tự nhiều bên tham gia, có bàn giao dữ liệu.",
        "refs": ["type-process.md"],
    },
    "timeline": {
        "label": "Timeline — mốc thời gian",
        "hint": "Sự kiện đặt trên trục thời gian.",
        "refs": ["type-timeline.md"],
    },
    "gantt": {
        "label": "Gantt — tiến độ",
        "hint": "Công việc và giai đoạn trên trục thời gian.",
        "refs": ["type-gantt.md"],
    },
    "org_chart": {
        "label": "Org chart — sơ đồ tổ chức",
        "hint": "Ai sở hữu gì, báo cáo cho ai, đường leo thang xử lý.",
        "refs": ["type-org-chart.md"],
    },
    "dependency": {
        "label": "Dependency — phụ thuộc",
        "hint": "Cái gì phụ thuộc cái gì; biểu diễn được cả vòng lặp mà cây không làm được.",
        "refs": ["type-dependency.md"],
    },
}

IMPORT_REFS = {
    "mermaid": "import-mermaid.md",
    "drawio": "import-drawio.md",
}

# 4 ví dụ đầu ra giữ lại từ repo gốc — nạp kèm khi loại diagram tương ứng được chọn,
# giúp mô hình bám đúng cấu trúc file hơn là chỉ đọc đặc tả.
EXAMPLE_FOR_TYPE = {
    "architecture": "example-architecture.html",
    "dataflow": "example-data-flow.html",
    "sequence": "example-sequence.html",
    "workflow": "example-swimlane.html",
}


# ── Phần dẫn nhập thay cho §0 của SKILL.md ─────────────────────────────────────
ADAPTER_PREAMBLE = """\
# Ngữ cảnh chạy — ĐỌC TRƯỚC TIÊN

Bạn đang chạy như một dịch vụ sinh diagram trong hệ thống BA_Home (ngân hàng), gọi qua API
một chiều. Ba điều chỉnh sau ĐÈ LÊN mọi hướng dẫn trái ngược trong tài liệu skill bên dưới:

1. **Không có hệ thống file.** Bạn KHÔNG mở được file nào. Mọi tài liệu cần thiết đã được
   dán nguyên văn vào prompt này. Bất cứ chỗ nào trong skill nói "load `references/…`",
   "open `references/…`" hay dẫn liên kết tới file — bỏ qua; nội dung đó đã có sẵn hoặc
   cố tình không nạp vì không cần cho yêu cầu này.

2. **Không hỏi lại.** Mục "§0 First-time setup — style guide gate" của SKILL.md yêu cầu tạm dừng
   và hỏi người dùng về thương hiệu. **Cổng đó đã đóng lại: profile thương hiệu đã chốt** —
   xem `style-guide-ba-home.md` bên dưới, nó THAY THẾ hoàn toàn `style-guide.md` gốc.
   Không được hỏi, không được đề nghị lựa chọn, không được giải thích rằng bạn cần thêm thông tin.
   Nếu dữ liệu đầu vào thiếu, hãy vẽ với những gì có và ghi phần chưa rõ thành một chú giải
   (callout) ngay trong diagram.

3. **Đầu ra là một file HTML, không có gì khác.** Trả về đúng một tài liệu HTML hoàn chỉnh,
   bắt đầu bằng `<!DOCTYPE html>` và kết thúc bằng `</html>`. KHÔNG bọc trong dấu ``` , KHÔNG
   thêm lời dẫn, KHÔNG thêm lời kết, KHÔNG giải thích lựa chọn thiết kế. Toàn bộ phản hồi của
   bạn sẽ được ghi thẳng vào cột `content` của bảng `diagrams` rồi hiển thị lại trong iframe.

Nhãn trong diagram viết **tiếng Việt** (trừ tên riêng kỹ thuật). Tuân thủ đủ 5 ràng buộc xuất file
ở cuối `style-guide-ba-home.md` — file sẽ bị hệ thống từ chối nếu có tài nguyên ngoài hoặc JavaScript.
"""


class SkillLoadError(RuntimeError):
    """Thiếu file skill trên đĩa — lỗi cài đặt, không phải lỗi người dùng."""


def _read_ref(name: str) -> str:
    path = REF_DIR / name
    if not path.is_file():
        raise SkillLoadError(f"Thiếu file reference của skill diagram-design: {name}")
    return path.read_text(encoding="utf-8")


def _read_skill_md() -> str:
    path = SKILL_DIR / "SKILL.md"
    if not path.is_file():
        raise SkillLoadError("Thiếu SKILL.md của skill diagram-design")
    return path.read_text(encoding="utf-8")


def list_types() -> list[dict]:
    """LOV cho frontend."""
    return [
        {"code": code, "label": meta["label"], "hint": meta["hint"]}
        for code, meta in DIAGRAM_TYPES.items()
    ]


def check_install() -> dict:
    """Kiểm tra bộ file skill còn đủ — dùng cho endpoint chẩn đoán sau khi cập nhật."""
    missing: list[str] = []
    if not (SKILL_DIR / "SKILL.md").is_file():
        missing.append("SKILL.md")
    for name in ["style-guide-ba-home.md", "output-spec.md", "semantic-patterns.md"]:
        if not (REF_DIR / name).is_file():
            missing.append(f"references/{name}")
    for meta in DIAGRAM_TYPES.values():
        for ref in meta["refs"]:
            if not (REF_DIR / ref).is_file():
                missing.append(f"references/{ref}")
    for name in IMPORT_REFS.values():
        if not (REF_DIR / name).is_file():
            missing.append(f"references/{name}")
    for name in ["mermaid_extract.py", "drawio_extract.py"]:
        if not (SCRIPT_DIR / name).is_file():
            missing.append(f"scripts/{name}")
    return {
        "ok": not missing,
        "skill_dir": str(SKILL_DIR),
        "types": len(DIAGRAM_TYPES),
        "missing": missing,
    }


def build_cached_prefix(diagram_type: str, import_format: str | None = None) -> list[str]:
    """
    Dựng các khối system được cache (theo thứ tự ổn định để prompt caching ăn được).

    Khối 1 — dẫn nhập + SKILL.md + profile thương hiệu + đặc tả đầu ra: giống nhau mọi lần gọi.
    Khối 2 — reference riêng của loại diagram: đổi theo loại.
    """
    if diagram_type not in DIAGRAM_TYPES:
        raise HTTPException(
            400,
            detail={
                "code": "DIAGRAM_TYPE_INVALID",
                "message": f"Loại diagram '{diagram_type}' không hỗ trợ. "
                           f"Các loại hợp lệ: {', '.join(DIAGRAM_TYPES)}",
            },
        )

    meta = DIAGRAM_TYPES[diagram_type]

    try:
        base = "\n\n---\n\n".join([
            ADAPTER_PREAMBLE,
            "# SKILL.md (nguyên văn từ repo gốc)\n\n" + _read_skill_md(),
            "# style-guide-ba-home.md — PROFILE ĐANG DÙNG\n\n"
            + _read_ref("style-guide-ba-home.md"),
            "# output-spec.md\n\n" + _read_ref("output-spec.md"),
            "# semantic-patterns.md\n\n" + _read_ref("semantic-patterns.md"),
        ])

        type_parts = [
            f"# Ngữ pháp layout cho loại '{diagram_type}' — {meta['label']}\n\n"
            f"Gợi ý chọn: {meta['hint']}"
        ]
        for ref in meta["refs"]:
            type_parts.append(f"## {ref}\n\n" + _read_ref(ref))

        example = EXAMPLE_FOR_TYPE.get(diagram_type)
        if example and (REF_DIR / example).is_file():
            type_parts.append(
                f"## Ví dụ đầu ra ({example}) — tham chiếu CẤU TRÚC file, "
                "không phải nội dung; bảng màu trong ví dụ là bảng cũ, "
                "dùng token của profile BA_Home\n\n```html\n"
                + _read_ref(example)
                + "\n```"
            )

        if import_format and import_format in IMPORT_REFS:
            type_parts.append(
                f"## Quy tắc vẽ lại từ nguồn {import_format}\n\n"
                + _read_ref(IMPORT_REFS[import_format])
            )
    except SkillLoadError as exc:
        raise HTTPException(
            500,
            detail={"code": "DIAGRAM_SKILL_BROKEN", "message": str(exc)},
        )

    return [base, "\n\n---\n\n".join(type_parts)]


# ── Kiểm duyệt HTML do AI trả về ───────────────────────────────────────────────
#
# File này được lưu vào DB rồi render lại trong iframe. Dù iframe đã đặt sandbox,
# vẫn phải chặn ở tầng ghi: một diagram có <script> hay tài nguyên ngoài là lỗi
# tuân thủ, không phải chuyện thẩm mỹ.

_STRIP_PATTERNS = [
    # Thẻ nạp font/CSS ngoài — mô hình hay thêm theo quán tính từ skill gốc
    (re.compile(r"<link\b[^>]*>", re.I), "<link>"),
    (re.compile(r"<script\b.*?</script\s*>", re.I | re.S), "<script>"),
    (re.compile(r"<script\b[^>]*/?>", re.I), "<script>"),
    (re.compile(r"@import\s+[^;]+;", re.I), "@import"),
]

_REJECT_PATTERNS = [
    (re.compile(r"<(iframe|object|embed|form|input|textarea|button)\b", re.I),
     "thẻ tương tác/nhúng không được phép"),
    (re.compile(r"""(?:src|href)\s*=\s*["']?\s*(?:https?:)?//""", re.I),
     "tham chiếu tài nguyên ngoài mạng"),
    (re.compile(r"url\(\s*['\"]?\s*(?:https?:)?//", re.I),
     "url() trỏ ra mạng ngoài"),
    (re.compile(r"\bon(?:load|click|error|mouseover|focus)\s*=", re.I),
     "thuộc tính xử lý sự kiện"),
    (re.compile(r"javascript\s*:", re.I), "URI javascript:"),
]

_FENCE_RE = re.compile(r"^\s*```(?:html)?\s*|\s*```\s*$", re.I)


def sanitize_diagram_html(raw: str) -> tuple[str, list[str]]:
    """
    Làm sạch và kiểm duyệt HTML diagram.

    Trả về (html, danh sách những gì đã bị gỡ).
    Raise HTTPException nếu còn thành phần không thể gỡ an toàn.
    """
    html = _FENCE_RE.sub("", raw.strip()).strip()

    # Cắt phần lời dẫn/lời kết nếu mô hình vẫn thêm dù đã bị cấm
    lower = html.lower()
    start = lower.find("<!doctype html")
    if start < 0:
        start = lower.find("<html")
    if start > 0:
        html = html[start:]
        lower = html.lower()
    end = lower.rfind("</html>")
    if end >= 0:
        html = html[: end + len("</html>")]

    if "<svg" not in html.lower():
        raise HTTPException(
            502,
            detail={
                "code": "DIAGRAM_NO_SVG",
                "message": "AI trả về HTML nhưng không có <svg> — không phải diagram. "
                           "Thử lại hoặc chỉnh lại mô tả đầu vào.",
            },
        )

    stripped: list[str] = []
    for pattern, label in _STRIP_PATTERNS:
        html, n = pattern.subn("", html)
        if n:
            stripped.append(f"{label} ×{n}")

    for pattern, label in _REJECT_PATTERNS:
        match = pattern.search(html)
        if match:
            raise HTTPException(
                502,
                detail={
                    "code": "DIAGRAM_UNSAFE",
                    "message": f"Nội dung diagram chứa {label} "
                               f"(đoạn: {match.group(0)[:60]!r}) — đã từ chối lưu. "
                               "Diagram phải là file HTML+SVG tự chứa, không tài nguyên ngoài "
                               "và không JavaScript. Nếu do AI sinh và lỗi lặp lại, "
                               "bổ sung ràng buộc vào skill gen_diagram.",
                },
            )

    return html.strip(), stripped


# ── Tách IR từ nguồn Mermaid / draw.io bằng script nhúng ───────────────────────

_EXTRACT_TIMEOUT = 20


def extract_source_ir(source_text: str, import_format: str) -> str:
    """
    Chạy script tách IR của skill gốc trên nguồn Mermaid/draw.io.

    Trả về bản mô tả đã chuẩn hóa (Markdown digest) để nạp vào prompt — mô hình vẽ lại
    từ IR chứ không tự đoán cú pháp. Script thuần thư viện chuẩn, chỉ đọc file, không
    render và không gọi mạng (xem docstring của script).
    """
    if import_format not in IMPORT_REFS:
        raise HTTPException(
            400,
            detail={
                "code": "IMPORT_FORMAT_INVALID",
                "message": f"Định dạng nhập '{import_format}' không hỗ trợ "
                           f"(hợp lệ: {', '.join(IMPORT_REFS)}).",
            },
        )

    script = SCRIPT_DIR / (
        "mermaid_extract.py" if import_format == "mermaid" else "drawio_extract.py"
    )
    if not script.is_file():
        raise HTTPException(
            500,
            detail={
                "code": "DIAGRAM_SKILL_BROKEN",
                "message": f"Thiếu script {script.name} của skill diagram-design.",
            },
        )

    suffix = ".mmd" if import_format == "mermaid" else ".drawio"
    with tempfile.NamedTemporaryFile(
        "w", suffix=suffix, encoding="utf-8", delete=False
    ) as fh:
        fh.write(source_text)
        tmp_path = fh.name

    try:
        proc = subprocess.run(
            [sys.executable, str(script), tmp_path],
            capture_output=True,
            text=True,
            timeout=_EXTRACT_TIMEOUT,
        )
    except subprocess.TimeoutExpired:
        raise HTTPException(
            502,
            detail={
                "code": "IMPORT_TIMEOUT",
                "message": f"Tách nội dung {import_format} quá {_EXTRACT_TIMEOUT}s — "
                           "nguồn quá lớn hoặc sai cú pháp.",
            },
        )
    finally:
        Path(tmp_path).unlink(missing_ok=True)

    if proc.returncode != 0:
        detail = (proc.stderr or proc.stdout or "").strip()[:400]
        raise HTTPException(
            400,
            detail={
                "code": "IMPORT_PARSE_FAILED",
                "message": f"Không đọc được nguồn {import_format}: {detail or 'không rõ nguyên nhân'}",
            },
        )

    digest = (proc.stdout or "").strip()
    if not digest:
        raise HTTPException(
            400,
            detail={
                "code": "IMPORT_EMPTY",
                "message": f"Nguồn {import_format} không chứa diagram nào đọc được.",
            },
        )
    return digest
