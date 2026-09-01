# Nguồn gốc — skill diagram-design

Thư mục này là **bản nhúng (vendored)** của skill `diagram-design`.

| | |
|---|---|
| Repo gốc | https://github.com/cathrynlavery/diagram-design |
| Tác giả | Cathryn Lavery |
| Giấy phép | MIT — xem [LICENSE](LICENSE) |
| Commit nhúng | `b52a33b` (2026-08-29), phiên bản skill 2.6 |
| Ngày nhúng | 2026-09-01 |

## Đã nhúng những gì

| Đường dẫn | Nội dung |
|---|---|
| `SKILL.md` | Hướng dẫn gốc — triết lý, bảng chọn loại diagram, quy tắc dựng hình |
| `references/type-*.md` | Ngữ pháp layout riêng cho từng loại diagram (39 loại) |
| `references/style-guide.md` | Bảng token gốc của tác giả (**không dùng** — xem bên dưới) |
| `references/output-spec.md` | Đặc tả file HTML đầu ra |
| `references/semantic-patterns.md` | Mẫu ngữ nghĩa (hàng đợi, biên tin cậy, vết chính sách…) |
| `references/import-mermaid.md`, `import-drawio.md` | Quy tắc vẽ lại từ nguồn Mermaid / draw.io |
| `references/example-*.html` | 4 ví dụ đầu ra để AI tham chiếu định dạng |
| `scripts/*.py` | Bộ tách IR từ Mermaid / draw.io và kiểm tra hình học nhãn — **thuần thư viện chuẩn Python**, không cần cài thêm gói |

**Không nhúng:** thư mục `assets/` (155 file HTML mẫu, ~15 MB) và `docs/screenshots/`. Chỉ giữ 4 ví dụ đại diện trong `references/`.

## Đã điều chỉnh những gì cho BA_Home

Skill gốc thiết kế để chạy **tương tác** trong Claude Code — có quyền đọc file và được phép hỏi lại người dùng. Trong BA_Home nó chạy **một chiều qua API**, nên có ba điều chỉnh, đặt trong [`references/style-guide-ba-home.md`](references/style-guide-ba-home.md) và trong phần dẫn nhập do `services/diagram_skill.py` sinh ra:

1. **Vô hiệu hóa cổng hỏi thương hiệu (§0 của SKILL.md).** Bản gốc yêu cầu *tạm dừng và hỏi người dùng* nếu style guide còn là token mặc định. Qua API thì việc "hỏi lại" sẽ trả về một câu hỏi thay vì một diagram. Phần dẫn nhập tuyên bố profile đã chốt sẵn nên cổng này coi như đã qua.

2. **Thay toàn bộ token bằng Design System của BA_Home.** Bản gốc dùng bảng màu editorial (white-smoke / atomic-tangerine). Diagram trong BA_Home phải trông cùng một hệ với giao diện, nên token trỏ về SooBinZHongSon DS — xem `style-guide-ba-home.md`.

3. **Bỏ phụ thuộc mạng ngoài.** Bản gốc nạp font từ Google Fonts CDN. Mạng nội bộ ngân hàng thường chặn CDN, và diagram được nhúng trong iframe `sandbox` không có quyền ra ngoài — nên chuyển sang font hệ thống/Inter và **cấm mọi thẻ trỏ ra ngoài**.

Ngoài ba điểm trên, **không sửa file gốc nào** — để lần sau cập nhật từ repo gốc chỉ cần copy đè `SKILL.md`, `references/type-*.md`, `scripts/`.

## Cách cập nhật khi repo gốc ra bản mới

```bash
git clone --depth 1 https://github.com/cathrynlavery/diagram-design.git /tmp/dd
D=backend/ppg/app/skills/diagram-design
cp /tmp/dd/skills/diagram-design/SKILL.md $D/
cp -R /tmp/dd/skills/diagram-design/references/type-*.md $D/references/
cp -R /tmp/dd/skills/diagram-design/scripts $D/
# GIỮ NGUYÊN: references/style-guide-ba-home.md (profile riêng của BA_Home)
```

Sau khi cập nhật, chạy lại `GET /diagrams/skill-check` để xác nhận loader vẫn đọc đủ file.
