"""
Skill Loader — nạp skill dạng THƯ MỤC theo chuẩn Claude skill, thay cho một khối văn bản trong DB.

Vì sao đổi (câu hỏi của PO 2026-09-01: *"tại sao skill lại chỉ có dạng MD, nó phải có dạng
chuẩn của claude chứ dạng folder cơ mà, có ref, có template đồ này nọ chứ"*):

Một khối văn bản trong `ai_skills.content` thiếu đúng ba thứ mà dạng thư mục cho:

1. **Reference nạp theo nhu cầu.** Danh sách mẫu test case hay bỏ sót của nghiệp vụ ngân hàng,
   bộ tự kiểm chất lượng BRS… là tài liệu dài. Nhồi hết vào một prompt thì mỗi lần gọi đều
   tốn, mà bỏ ra thì mất chất lượng. Dạng thư mục cho phép khai báo reference và nạp đúng cái
   cần cho từng bước.
2. **Template tách khỏi hướng dẫn.** Cấu trúc 12 mục của BRS, lược đồ JSON test case, hai khối
   thẻ của Master Doc — đó là *hợp đồng đầu ra* mà mã nguồn parse theo. Để lẫn trong văn bản
   hướng dẫn thì sửa hướng dẫn dễ vô tình làm hỏng hợp đồng.
3. **Phiên bản đi theo Git.** Skill là thứ quyết định nội dung tài liệu đặc tả của ngân hàng.
   Nằm trong Git thì biết ai đổi, đổi gì, khi nào, và review được. Nằm trong DB thì mỗi môi
   trường một bản khác nhau mà không ai biết.

Mô hình lai — mỗi thứ đặt đúng chỗ:

| Thành phần | Ở đâu | Ai sửa |
|---|---|---|
| `SKILL.md` + `references/` + `templates/` | Đĩa, theo Git | Dev/BA qua pull request |
| Phần bổ sung riêng của đơn vị (`ai_skills.content`) | DB | PO sửa trực tiếp trên UI |

Nội dung DB **không thay** phần trên đĩa mà được **nối thêm** vào cuối, dưới tiêu đề
"Bổ sung của đơn vị". Nhờ vậy PO tinh chỉnh được ngay mà không sửa được sai hợp đồng đầu ra.
"""
from __future__ import annotations

import logging
import re
from dataclasses import dataclass, field
from pathlib import Path

from fastapi import HTTPException

logger = logging.getLogger(__name__)

SKILLS_ROOT = Path(__file__).resolve().parents[1] / "skills"

# skill_code trong DB → tên thư mục trên đĩa.
# Mã dùng gạch dưới (khớp bước trong mã nguồn), thư mục dùng gạch nối (chuẩn Claude skill).
SKILL_DIRS: dict[str, str] = {
    "gen_brs":           "gen-brs",
    "revise_brs":        "revise-brs",
    "update_master_doc": "update-master-doc",
    "gen_test_case":     "gen-test-case",
    "gen_test_report":   "gen-test-report",
    "gen_diagram":       "diagram-design",
}

# Skill có thư mục nhưng phần nạp do module riêng lo (diagram-design nạp reference theo
# TỪNG LOẠI diagram, không nạp cả 57 file). Loader chung phải bỏ qua để không nạp SKILL.md
# hai lần — 39 KB trùng lặp mỗi lần gọi.
LOADED_ELSEWHERE: set[str] = {"gen_diagram"}

_FRONTMATTER_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n(.*)$", re.DOTALL)


@dataclass
class SkillBundle:
    """Một skill đã nạp xong, sẵn sàng đưa vào prompt hệ thống."""
    code: str
    name: str
    description: str
    version: str
    directory: Path
    body: str                                   # SKILL.md sau khi bỏ frontmatter
    templates: list[tuple[str, str]] = field(default_factory=list)   # (tên file, nội dung)
    references: list[tuple[str, str]] = field(default_factory=list)
    missing: list[str] = field(default_factory=list)  # file khai báo nhưng không có trên đĩa

    def system_blocks(self, org_addendum: str = "") -> list[str]:
        """
        Dựng các khối system theo thứ tự ổn định để prompt caching ăn được.

        Khối 1: hướng dẫn + template (hợp đồng đầu ra) — đổi rất ít.
        Khối 2: reference — dài, cũng ít đổi.
        Khối 3: bổ sung của đơn vị lấy từ DB — PO sửa thường xuyên nên để riêng, tránh làm
                vô hiệu cache của hai khối trên.
        """
        parts: list[str] = [f"# Skill: {self.name} (v{self.version})\n\n{self.body}"]
        for fname, content in self.templates:
            parts.append(f"# Template — {fname}\n\n{content}")
        blocks = ["\n\n---\n\n".join(parts)]

        if self.references:
            ref_parts = [
                f"# Reference — {fname}\n\n{content}" for fname, content in self.references
            ]
            blocks.append("\n\n---\n\n".join(ref_parts))

        if org_addendum.strip():
            blocks.append(
                "# Bổ sung của đơn vị\n\n"
                "Phần dưới đây do đơn vị cấu hình trong Cài đặt → Skill. Nó BỔ SUNG cho hướng "
                "dẫn phía trên, KHÔNG thay thế. Khi có xung đột về định dạng đầu ra, "
                "template phía trên thắng.\n\n"
                + org_addendum.strip()
            )
        return blocks


def _parse_frontmatter(text: str, path: Path) -> tuple[dict, str]:
    """
    Đọc frontmatter YAML tối giản: chỉ hỗ trợ khóa phẳng, khóa lồng một cấp và danh sách gạch đầu dòng.
    Không dùng thư viện YAML để tránh thêm phụ thuộc cho một định dạng đã biết trước.
    """
    match = _FRONTMATTER_RE.match(text)
    if not match:
        raise HTTPException(
            500,
            detail={
                "code": "SKILL_MALFORMED",
                "message": f"{path.name} thiếu khối frontmatter --- ở đầu file.",
            },
        )
    raw, body = match.group(1), match.group(2)

    meta: dict = {}
    current_list: list | None = None
    parent_key: str | None = None
    for line in raw.splitlines():
        if not line.strip() or line.lstrip().startswith("#"):
            continue
        stripped = line.strip()
        if stripped.startswith("- "):
            # phần tử danh sách — bỏ chú thích sau dấu #
            value = stripped[2:].split("#", 1)[0].strip()
            if current_list is not None and value:
                current_list.append(value)
            continue
        if ":" not in stripped:
            continue
        key, _, value = stripped.partition(":")
        key, value = key.strip(), value.split("#", 1)[0].strip().strip('"').strip("'")
        indented = line[0] in " \t"
        if indented and parent_key:
            # Khóa cha mở ra danh sách hay khối lồng chỉ biết được ở dòng con đầu tiên.
            # Dòng con dạng "key: value" → khối lồng; nếu trước đó đã tạm coi là danh sách
            # rỗng thì đổi sang dict tại đây.
            if not isinstance(meta.get(parent_key), dict):
                if meta.get(parent_key):      # đã có phần tử danh sách → giữ nguyên là danh sách
                    continue
                meta[parent_key] = {}
            meta[parent_key][key] = value
            current_list = None
            continue
        if value:
            meta[key] = value
            current_list = None
            parent_key = None
        else:
            # khóa không có giá trị → mở danh sách hoặc khối lồng
            current_list = []
            meta[key] = current_list
            parent_key = key
    return meta, body.strip()


def _read_listed(directory: Path, entries: list, bundle_missing: list[str]) -> list[tuple[str, str]]:
    out: list[tuple[str, str]] = []
    for rel in entries:
        path = directory / rel
        if not path.is_file():
            bundle_missing.append(rel)
            logger.warning("Skill %s khai báo %s nhưng file không tồn tại", directory.name, rel)
            continue
        out.append((rel, path.read_text(encoding="utf-8")))
    return out


def has_folder(skill_code: str) -> bool:
    """Loader chung có nạp skill này từ đĩa hay không."""
    if skill_code in LOADED_ELSEWHERE:
        return False
    d = SKILL_DIRS.get(skill_code)
    return bool(d) and (SKILLS_ROOT / d / "SKILL.md").is_file()


def load_bundle(skill_code: str) -> SkillBundle:
    """Nạp skill dạng thư mục. Raise nếu không có — gọi has_folder() trước nếu cần fallback."""
    dirname = SKILL_DIRS.get(skill_code)
    if not dirname:
        raise HTTPException(
            404,
            detail={
                "code": "SKILL_DIR_UNKNOWN",
                "message": f"Skill '{skill_code}' không có thư mục tương ứng trên đĩa.",
            },
        )
    directory = SKILLS_ROOT / dirname
    skill_md = directory / "SKILL.md"
    if not skill_md.is_file():
        raise HTTPException(
            500,
            detail={
                "code": "SKILL_DIR_MISSING",
                "message": f"Thiếu {dirname}/SKILL.md. Kiểm tra lại bộ skill trên máy chủ.",
            },
        )

    meta, body = _parse_frontmatter(skill_md.read_text(encoding="utf-8"), skill_md)
    metadata = meta.get("metadata") if isinstance(meta.get("metadata"), dict) else {}
    missing: list[str] = []

    return SkillBundle(
        code=skill_code,
        name=str(meta.get("name") or dirname),
        description=str(meta.get("description") or ""),
        version=str((metadata or {}).get("version") or "1.0"),
        directory=directory,
        body=body,
        templates=_read_listed(directory, list(meta.get("templates") or []), missing),
        references=_read_listed(directory, list(meta.get("references") or []), missing),
        missing=missing,
    )


def describe(skill_code: str) -> dict:
    """Thông tin để hiển thị trên UI Cài đặt → Skill (chỉ đọc)."""
    dirname = SKILL_DIRS.get(skill_code)
    if not dirname or not (SKILLS_ROOT / dirname / "SKILL.md").is_file():
        return {"folder": None}
    bundle = load_bundle(skill_code)
    return {
        "folder": bundle.directory.name,
        "loaded_elsewhere": skill_code in LOADED_ELSEWHERE,
        "name": bundle.name,
        "description": bundle.description,
        "version": bundle.version,
        "templates": [t[0] for t in bundle.templates],
        "references": [r[0] for r in bundle.references],
        "missing": bundle.missing,
        "sizes": {
            "skill_md": len(bundle.body),
            "templates": sum(len(t[1]) for t in bundle.templates),
            "references": sum(len(r[1]) for r in bundle.references),
        },
    }


def read_file(skill_code: str, rel_path: str) -> str:
    """
    Đọc một file của skill để xem trên UI.

    Chặn đi ra ngoài thư mục skill: rel_path do client truyền lên nên phải kiểm tra đường dẫn
    thật sau khi resolve, không tin vào việc lọc chuỗi ".." .
    """
    bundle_dir = SKILLS_ROOT / (SKILL_DIRS.get(skill_code) or "")
    if not bundle_dir.is_dir():
        raise HTTPException(404, detail={"code": "SKILL_DIR_MISSING", "message": "Không có thư mục skill."})
    target = (bundle_dir / rel_path).resolve()
    try:
        target.relative_to(bundle_dir.resolve())
    except ValueError:
        raise HTTPException(
            400,
            detail={"code": "PATH_OUTSIDE_SKILL", "message": "Đường dẫn nằm ngoài thư mục skill."},
        )
    if not target.is_file():
        raise HTTPException(404, detail={"code": "NOT_FOUND", "message": f"Không có file {rel_path}."})
    if target.stat().st_size > 512_000:
        raise HTTPException(
            413,
            detail={"code": "FILE_TOO_LARGE", "message": "File quá lớn để xem trên giao diện."},
        )
    return target.read_text(encoding="utf-8", errors="replace")


def check_all() -> dict:
    """Chẩn đoán toàn bộ bộ skill — dùng sau khi cập nhật hoặc deploy."""
    result = {}
    for code in SKILL_DIRS:
        try:
            result[code] = describe(code)
        except HTTPException as exc:
            result[code] = {"folder": SKILL_DIRS[code], "error": exc.detail}
    ok = all("error" not in v and not v.get("missing") for v in result.values())
    return {"ok": ok, "skills_root": str(SKILLS_ROOT), "skills": result}
