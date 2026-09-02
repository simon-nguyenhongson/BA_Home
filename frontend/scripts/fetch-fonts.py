#!/usr/bin/env python3
"""Tải font về self-host và sinh src/styles/fonts.css.

VÌ SAO CẦN: design-system/readme.md CAVEAT 3 — repo DS không ship binary font nào,
tokens/fonts.css chỉ @import Google Fonts CDN. Mạng nội bộ chặn CDN thì UI rơi về font
hệ thống và sai toàn bộ typography của DS (Inter 14/20 là cỡ làm việc của cả hệ).

Chạy lại khi cần cập nhật font:
    cd frontend && python3 scripts/fetch-fonts.py

Giấy phép: Inter và IBM Plex Sans đều OFL 1.1 — được self-host và dùng thương mại.
"""
from __future__ import annotations

import pathlib
import re
import sys
import urllib.request

# Chỉ 3 subset: app là tiếng Việt. Bỏ cyrillic/greek/*-ext của chúng tiết kiệm 16/28 file Inter.
KEEP_SUBSETS = {"latin", "latin-ext", "vietnamese"}

# (tên hiển thị, query Google Fonts, tiền tố file, danh sách weight)
FAMILIES = [
    ("Inter", "Inter:wght@400;500;600;700", "inter", ["400", "500", "600", "700"]),
    # Chỉ weight 700, và chỉ dùng cho wordmark ở .sidebar__brand (styles.css).
    ("IBM Plex Sans", "IBM+Plex+Sans:wght@700", "ibm-plex-sans", ["700"]),
]

UA = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 "
    "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)

OUT_DIR = pathlib.Path("public/fonts")
OUT_CSS = pathlib.Path("src/styles/fonts.css")

HEADER = """/* Font self-host — SINH TỰ ĐỘNG bởi scripts/fetch-fonts.py, ĐỪNG SỬA TAY.
 *
 * Chỉ lấy subset latin / latin-ext / vietnamese (app tiếng Việt).
 * Lý do self-host thay vì @import Google Fonts: mạng nội bộ chặn CDN thì UI rơi về
 * font hệ thống và sai toàn bộ typography của Design System.
 * Xem design-system/readme.md CAVEAT 3.
 *
 * Inter, IBM Plex Sans — OFL 1.1.
 */
"""


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8")


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    faces: list[tuple[str, str, str, str, str]] = []
    downloaded: set[str] = set()

    for display, query, prefix, weights in FAMILIES:
        css = fetch(f"https://fonts.googleapis.com/css2?family={query}&display=swap")
        # Mỗi @font-face của Google Fonts đứng ngay sau một comment /* subset */
        blocks = re.findall(r"/\*\s*([a-z-]+)\s*\*/\s*(@font-face\s*\{.*?\})", css, re.S)
        if not blocks:
            print(f"LỖI: không tách được @font-face nào cho {display}", file=sys.stderr)
            return 1

        for subset, block in blocks:
            if subset not in KEEP_SUBSETS:
                continue
            m_weight = re.search(r"font-weight:\s*(\d+)", block)
            m_url = re.search(r"url\((https://[^)]+\.woff2)\)", block)
            m_range = re.search(r"unicode-range:\s*([^;]+);", block)
            if not (m_weight and m_url and m_range):
                continue
            weight = m_weight.group(1)
            if weight not in weights:
                continue

            name = f"{prefix}-{weight}-{subset}.woff2"
            if name not in downloaded:
                urllib.request.urlretrieve(m_url.group(1), OUT_DIR / name)
                downloaded.add(name)
            faces.append((display, weight, subset, name, m_range.group(1).strip()))

    if not faces:
        print("LỖI: không tải được font nào", file=sys.stderr)
        return 1

    lines = [HEADER]
    for display, weight, _subset, name, urange in sorted(faces, key=lambda f: (f[0], f[1], f[2])):
        lines.append(
            "@font-face {\n"
            f"  font-family: '{display}';\n"
            "  font-style: normal;\n"
            f"  font-weight: {weight};\n"
            "  font-display: swap;\n"
            f"  src: url('/fonts/{name}') format('woff2');\n"
            f"  unicode-range: {urange};\n"
            "}\n"
        )
    OUT_CSS.write_text("\n".join(lines), encoding="utf-8")

    total_kb = sum(f.stat().st_size for f in OUT_DIR.glob("*.woff2")) // 1024
    print(f"OK — {len(downloaded)} file woff2 ({total_kb} KB), {len(faces)} @font-face → {OUT_CSS}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
