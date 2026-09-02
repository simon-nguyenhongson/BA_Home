---
name: design-system
description: BẮT BUỘC dùng trước khi sửa hoặc thêm bất kỳ UI nào trong frontend/src/ — component, trang, CSS, inline style, màu, cỡ chữ, khoảng cách, trạng thái hover/focus/disabled. Nạp luật SooBinZHongSon Design System, danh sách 85 component có sẵn, bảng đối chiếu primitive của BA_Home, và những chỗ BA_Home cố ý lệch upstream. Cũng dùng khi được hỏi "component này có trong DS chưa", "màu này lấy ở đâu", "tại sao không được thêm Card".
user-invocable: true
---

# SooBinZHongSon Design System — luật cho BA_Home

Design System được **vendor nguyên repo** tại `design-system/` (gốc repo, không phải submodule),
commit `6a241ae`. Skill này là bản mỏng trỏ vào đó — không nhân đôi 38 MB.

## Bước 0 — Trước khi viết một dòng UI nào

1. **Component đã có trong DS chưa?** Tra bảng "85 component" bên dưới.
   - Có → import từ `@ds/...`, đọc `.prompt.md` và `.d.ts` cạnh nó để biết prop.
   - Không → đọc `references/gaps.md`. **KHÔNG được tự sáng tác component "theo phép loại suy".**
2. **Màu / cỡ / khoảng cách lấy từ token, không hardcode.**
   Tra `design-system/tokens/semantic.css` trước, rồi `palette.css`.
   `npm run lint:ds` sẽ chặn nếu thêm hex mới.
3. **Đọc `references/ba-home-deltas.md`** — BA_Home cố ý lệch upstream ở vài điểm; làm theo upstream
   ở những điểm đó là làm sai.

## Luật không được vi phạm

Trích từ `design-system/readme.md`. Khi cần chi tiết, đọc file đó — đây là bản rút gọn để quyết nhanh.

**Màu.** MỘT màu blue làm mọi việc interactive: Blue 600 `#155EEF`. Gray 200 `#EAECF0` là viền mặc
định. Error 500 `#F04438` là màu cảnh báo duy nhất. Nền phẳng tuyệt đối — không gradient nền, không
texture, không blur, không `backdrop-filter` (scrim modal là bề mặt trong suốt duy nhất). Gradient
brand `#027FFE→#02CCCC→#02E2BD` CHỈ dùng làm thanh 4px ở sidebar / 12px đầu trang / trong logo —
không bao giờ làm nền chữ hay nền nút.

**Chữ.** Inter duy nhất, 4 weight 400/500/600/700. IBM Plex Sans 700 CHỈ cho wordmark. Cỡ làm việc
14/20; bảng 12/18; eyebrow 11px Semibold UPPERCASE tracking `0.06em`; display ≥24px tracking `-0.02em`.
Label 14 Medium. Body 14–16 Regular.

**Khoảng cách & hình.** Bước cơ sở 8px, NHƯNG 6px và 10px là giá trị thật — padding control mặc định
là `10px 12px`, **không được snap về lưới 4/8**. Radius: 6 nav row · **8 mọi control/field/ô bảng** ·
12 card/panel · 16 badge (pill) · tròn hẳn chỉ cho avatar/dot. Ba chiều cao control 28/**32**/40.
Row bảng 40px. Sidebar 264px. Gutter trang 80px. Gap icon–label trong control luôn 8px.

**Trạng thái.**
- Hover = bề mặt tối đi MỘT nấc (trắng→`#F9FAFB`, Blue 600→Blue 700). **Không scale, không lift,
  không sinh shadow khi hover.**
- Pressed/focused = fill tối + halo 4px (`--ds-focus-ring`) + viền chuyển Blue 300. Viền 1px của
  chính nó không bao giờ bị bỏ. **Không bao giờ dùng outline của trình duyệt.**
- Disabled = fill Gray 50 hoặc Blue 200, chữ/icon Gray 400. **Không dùng opacity để giả disabled.**
- Loading = nút primary fill Blue 200 + ring xoay 16px + nhãn "Chờ...". Skeleton là thanh Gray 100
  cao bằng nội dung thật.

**Chuyển động.** Chỉ spinner xoay và caret 150ms. Còn lại swap tức thì. Không bounce, không spring,
không animation khi vào trang.

**Card.** Nền trắng + viền 1px `#EAECF0` + radius 12 + `shadow-sm` + dải header `#F9FAFB` với tiêu
đề 14 Semibold. Dải header đó là dấu hiệu nhận dạng của hệ này.

**Bảng lắp từ Ô, không phải Dòng.** Ô cạnh nhau chồng viền `-1px` để thành lưới liền.
Layout viền theo row sẽ KHÔNG khớp design.

**Icon.** `lucide-react` 16px, `strokeWidth 1.5`, `currentColor` — đây là chỗ BA_Home cố ý lệch
upstream (upstream dùng bộ 233 glyph riêng). **Không bao giờ hardcode màu icon — tô màu cái control.**
Nút chỉ-có-icon **phải** có tooltip khi hover, trừ `✕`. Không icon font, không emoji, không ký tự
Unicode thay icon.

**Nội dung (tiếng Việt).** Sentence case — "Tạo phiếu đối soát", không phải "Tạo Phiếu Đối Soát".
Nút là ĐỘNG TỪ — "Xoá", "Tạo phiếu"; không bao giờ "OK"/"Submit". Nút thoát luôn là từ mộc mạc nhất:
"Cancel". Placeholder mô tả hành động chứ không phải tên trường — "Chọn chi nhánh", không phải
"Chi nhánh". Empty state đúng hai dòng: thiếu gì, rồi một chỉ dẫn. Không xin lỗi, không nói vui.
Không "bạn", không "chúng tôi", không dấu chấm than. Số kiểu Việt: `123.456` nghìn, `0,1` thập phân;
tiền căn phải, đơn vị nằm trong addon chứ không trong text của input.

## 85 component — DÙNG LÀM HỢP ĐỒNG THAM CHIẾU, KHÔNG IMPORT

> **KHÔNG `import` từ `@ds/components/**` vào `frontend/src/`.**
> Đã đo: implementation của chúng chứa **9.931 lượt màu hardcode / 143 màu khác nhau / 0 lượt dùng
> `var(--ds-*)`**. Đó là ảnh chụp pixel từ Figma, không phải component gắn token. Ngoài ra chỉ
> **1/85** nhận `children`, và `Toggle`/`Checkbox` **không có `onChange`**.
> Chi tiết + bằng chứng: `references/gaps.md` §1 và §1b.
>
> **Cách dùng đúng:** đọc `<Tên>.d.ts` (hợp đồng prop: có variant/state/size nào) và
> `<Tên>.prompt.md` (luật dùng), rồi **tự dựng bằng token DS** trong `frontend/src/`.

Đường dẫn tra cứu: `design-system/components/<nhóm>/<Tên>.{d.ts,prompt.md}`

**core (21)** — Anchor · Avatar · AvatarLabelGroup · Badge · BadgeDot · BadgePerfromace *(giữ nguyên
lỗi chính tả của upstream để tra khớp Figma)* · BadgeRanking · BadgeStatus · BreadcrumbItem ·
Breadcrumbs · BreadcrumbsNormal · Button · ButtonCloseX · ButtonGroup · ButtonGroupItems · Callout ·
CheckGroup · Checkbox · CheckboxIcon · CheckboxText · Divider

**forms (18)** — ColorPicker · ComboboxSingleSelect · ComponentsRadioButtonSolid · Currency ·
DateCalendarDropdown · DateDatePicker · DateDayItem · DateItem · DateMonthYearItem ·
DatePickerdateItem · DateTimeSelect · Input · InputAddonLabel · InputAddonLeft · InputAddonRight ·
ProgressBar · ScrollBar · Toggle

**navigation (33)** — Alert · AnchorLink · CarouselSlick · Catetree · Collapse · Cursor · Drawer ·
DropdownNavHeaderMenu · HeaderNavigation · HelpIcon · Illustration · LayoutBlocksBase · Menu · Modal ·
ModalButton · ModalHeader · NavButton · NavDropdownSubMenu · NavItemMenu2 · NavMenuButton · NoData ·
PopOver · SearchField · SkeletonTitle · SpinnerStatic · StepBase · StepIndicator · StepItems · Steps ·
TabButtonBase · Title · Tooltip · TreeViewItem

**data (12)** — CellBodyNormal · CellTitle · Color · Description · InputField · InputTextToLabel ·
MetricChange · NumberInput · PaginationNoCount · Processbar · TableTitleText · TextField

**icons (1)** — Icon *(BA_Home dùng `lucide-react` thay — xem deltas)*

## Cái KHÔNG có trong hệ này

`readme.md` upstream nói thẳng: **không có Toast, không có Select-multiple, không có Card primitive,
không có Accordion** — vì file Figma nguồn không định nghĩa chúng. **Đừng thêm bằng phép loại suy.**

Nhưng BA_Home đang dùng cả 4 thứ đó. Cách xử lý bắt buộc: đọc `references/gaps.md`.

## Tra cứu ở đâu

| Cần gì | Đọc file |
|---|---|
| Luật đầy đủ + CAVEATS | `design-system/readme.md` |
| Token màu (kèm số lượt dùng đo được) | `design-system/tokens/palette.css` |
| Alias `--ds-*` (ưu tiên dùng cái này) | `design-system/tokens/semantic.css` |
| Cỡ chữ, shadow, spacing/radius/chiều cao | `design-system/tokens/typography.css`, `elevation.css`, `layout.css` |
| Hợp đồng prop của 1 component | `design-system/components/<nhóm>/<Tên>.d.ts` |
| Luật dùng 1 component | `design-system/components/<nhóm>/<Tên>.prompt.md` |
| Đặc tả trực quan (20 trang) | `design-system/guidelines/*.html` |
| Trang doc theo nhóm (7 trang) | `design-system/*.dc.html` |
| Xuất xứ, mâu thuẫn upstream đã biết | `design-system/UPSTREAM.md` |
| Quyết định áp dụng riêng cho BA_Home | `docs/design/DS-ADOPTION-SPEC.md` |

## Kiểm chứng trước khi báo xong

```bash
cd frontend
npm run lint:ds                                   # chặn hex hardcode mới
npx vitest run src/__tests__/designSystem.test.tsx # token không drift + component render được
npx tsc -b && npm run build
```
