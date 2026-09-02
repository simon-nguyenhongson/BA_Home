# BA_Home cố ý lệch upstream ở đâu

Những điểm dưới đây là **quyết định đã chốt của BA_Home**. Làm theo upstream ở các điểm này là
làm SAI. Mọi điểm khác: upstream thắng.

| # | Điểm | Upstream | BA_Home | Ai quyết / vì sao |
|---|---|---|---|---|
| D-1 | Màu tab active | Violet 700 `#6941C6` (bảo tồn xung đột từ Figma) | **Blue 600 `#155EEF`** | PO chốt 2026-09-01 — mọi tab trong app phải cùng một màu active. Badge `primary` vẫn giữ violet `#7F56D9` |
| D-2 | Bộ icon | 233 glyph riêng của DS (`ds/icons/icon-data.js`) | **`lucide-react`** 16px, `strokeWidth 1.5`, `currentColor` | Đã dùng khắp app trước khi vendor DS; đổi bộ icon là refactor riêng. Luật "icon lấy màu từ control, không hardcode màu icon" **vẫn áp dụng** |
| D-3 | Toast | Không tồn tại trong DS | **Giữ `ToastContainer`** của BA_Home | App đã dùng khắp nơi. Style theo bề mặt inverse (`#101828`, radius 8, chữ 14/20) như tooltip DS |
| D-4 | Card | Không tồn tại trong DS (readme phủ định thẳng) | **Giữ `Card`** của BA_Home | Bám đúng công thức card trong `readme.md`: trắng + viền `#EAECF0` + radius 12 + `shadow-sm` + dải header `#F9FAFB` |
| D-5 | Textarea | Không tồn tại trong DS | **Giữ `AppTextarea`** | Đã grep toàn bộ `components/`: không có `textarea`/`multiline`. `data/TextField` là input một dòng |
| D-6 | Select | `forms/ComboboxSingleSelect` (combobox, chỉ single) | **Giữ `AppSelect`** | DS không có Select-multiple; app cần `<select>` thật ở nhiều chỗ |
| D-7 | Font | `tokens/fonts.css` `@import` Google Fonts CDN | **Self-host** `frontend/public/fonts/` | Mạng nội bộ VIB chặn CDN → UI rơi về font hệ thống, sai toàn bộ typography. Upstream CAVEAT 3 cũng khuyến nghị. Sinh bởi `scripts/fetch-fonts.py`, chỉ subset latin/latin-ext/vietnamese |
| D-8 | `figma-variables.css` | 276 biến, giữ nguyên cho đủ độ trung thực | **Không import** | readme gọi là "archaeology" — phần lớn thuộc thư viện kéo vào (AG Grid, SDS, Brand B). Build theo `--ds-*` và `--color-*` |
| D-9 | Chiều cao control nhỏ | Mâu thuẫn: token 28px vs `Button.d.ts` `h24px` | **Theo token: 28/32/40** | Chờ chủ DS chốt — xem `gaps.md` §6 |
| D-10 | Tên class công khai | — | **Giữ nguyên** `.modal-panel`, `.modal-body`, `.process-progress__fill`, `.kpi-card`, `.sidebar`, `.topbar` | Đổi tên sẽ vỡ e2e + unit test đang xanh |

## Token trong app so với upstream

`frontend/src/styles/ds/*.css` là **bản mirror byte-identical** của `design-system/tokens/*.css`
(7 file, khoá bởi `src/__tests__/designSystem.test.tsx`).

**Đừng sửa tay các file đó.** Muốn đổi token: sửa upstream → vendor lại → cập nhật
`design-system/UPSTREAM.md`. Sửa trực tiếp thì test fail và mất đường đối chiếu với Figma.

Biến `--app-*` trong `frontend/src/styles.css` **giữ nguyên tên**, chỉ retoken giá trị theo DS —
vì 1.747 inline style trong 65 file đang ăn theo chúng.
