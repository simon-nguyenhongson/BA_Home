# Xuất xứ — SooBinZHongSon Design System (vendored)

Thư mục này là bản **vendor nguyên repo** của Design System, KHÔNG phải submodule.
Mọi thay đổi UI của BA_Home phải đối chiếu với nội dung ở đây.

## Bản đang dùng

| | |
|---|---|
| Upstream | `https://github.com/simon-nguyenhongson/DesignSystem` |
| Branch | `main` |
| Commit | `6a241ae4811edaa588233298101cae3ac51514a1` |
| Commit date | 2026-08-06 17:32:22 +0700 |
| Commit message | `Split bundles into importable parts` |
| Vendor date | 2026-09-02 |
| Số commit upstream tại thời điểm vendor | 1 |

`.git/` đã được bỏ để không tạo repo lồng nhau. Nội dung file **không bị sửa** so với upstream —
xem "Kiểm chứng" bên dưới.

## Cập nhật khi upstream đổi

```bash
git clone https://github.com/simon-nguyenhongson/DesignSystem.git /tmp/ds-new
diff -rq /tmp/ds-new design-system --exclude=.git --exclude=UPSTREAM.md
```

Sau khi cập nhật, sửa commit hash ở bảng trên và chạy lại `npm run lint:ds` ở `frontend/`.

## Kiểm chứng tính toàn vẹn

7 file token mà `frontend/src/styles/ds/*.css` đang dùng là **byte-identical** với
`design-system/tokens/*.css` (kiểm bằng `diff` ngày 2026-09-02):
`base.css`, `elevation.css`, `fonts.css`, `layout.css`, `palette.css`, `semantic.css`, `typography.css`.

`tokens/figma-variables.css` (20 KB, 276 biến) **không** được nạp vào app — readme upstream gọi phần
này là "archaeology" (thư viện kéo vào: AG Grid, SDS, Brand B). Giữ lại để tra cứu, không import.

## Cấu trúc

| Đường dẫn | Vai trò | App có dùng? |
|---|---|---|
| `SKILL.md` | Frontmatter skill `soobinzhongson-design` | Qua `.claude/skills/` |
| `readme.md` | Toàn bộ luật brand/design (nguồn của `docs/design/DS-ADOPTION-SPEC.md`) | Đọc khi sửa UI |
| `tokens/*.css` | 8 file token | 7/8 đã copy sang `frontend/src/styles/ds/` |
| `components/{core,forms,navigation,data,icons}/` | **85 component**: `.jsx` + `.d.ts` + `.prompt.md` | Import qua alias `@ds` |
| `components/*/_impl/p1..p5.js` | Implementation thật, chia phần <400 KB | Bị `.jsx` import |
| `components/*/assets.css` | Class background cho bitmap, trỏ `../../assets/` | Cần nếu dùng component có ảnh |
| `guidelines/*.html` | 20 trang đặc tả (color, type, spacing, elevation, focus-ring, brand) | Tra cứu |
| `*.dc.html` | 7 trang doc component (Buttons, Badges, Forms, Navigation, SideNav, Table) | Tra cứu |
| `ds/icons/icon-data.js` | Bộ icon nguồn (255 KB) | Chưa dùng — app dùng `lucide-react` |
| `assets/` | 6 bitmap được `components/*/assets.css` trỏ tới | Cần nếu dùng component có ảnh |
| `ds/`, `ds/*/bundle/` | Bundle dựng sẵn cho các trang `.dc.html` | **Không** — build artifact |
| `push-missing/` | Bản `_impl.js` monolithic **trước khi** chia phần | **Không** — dư thừa |
| `uploads/` | Ảnh chụp màn hình khi soạn repo | **Không** |
| `support.js` | Script cho trang doc | **Không** |

## Ghi chú kỹ thuật

- 85 component là ESM hợp lệ, **phụ thuộc duy nhất là `react`** — không kéo thêm thư viện.
- `push-missing/` (13 MB) và `ds/` + `ds/*/bundle/` (11 MB) là build artifact của các trang doc,
  chiếm 24/45 MB của repo. Giữ vì quyết định là vendor nguyên repo; có thể bỏ nếu cần giảm dung lượng
  mà không ảnh hưởng app (xem cột "App có dùng?").
- Repo **không ship file font nào**. `tokens/fonts.css` `@import` Google Fonts CDN.
  BA_Home self-host Inter tại `frontend/public/fonts/` — xem `frontend/src/styles/fonts.css`.

## Mâu thuẫn đã biết trong upstream

1. **Chiều cao control nhỏ: 28px hay 24px?**
   `tokens/layout.css` khai `--ds-control-h-s: 28px`, nhưng `components/core/Button.d.ts` khai
   `size?: "h24px" | "h32px" | "h40px"`. Chỉ Button lệch; không component nào khác khai `h24px`.
   BA_Home đi theo **token (28/32/40)**. **Chờ chủ DS chốt.**

2. **Violet vs Blue cho tab active** — upstream bảo tồn nguyên trạng xung đột từ Figma
   (Badge primary + Tab active dùng violet `#7F56D9`/`#6941C6` thay vì Blue 600).
   BA_Home đã chốt **đồng bộ Blue 600** cho mọi tab active (PO quyết 2026-09-01),
   giữ violet cho Badge `primary`. Đây là **cố ý lệch upstream** — xem `docs/design/DS-ADOPTION-SPEC.md`.
