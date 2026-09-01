# SooBinZHongSon DS — Spec áp dụng cho BA_Home
> Nguồn: repo DesignSystem của user. Đây là tài liệu THAM CHIẾU BẮT BUỘC khi reskin bất kỳ trang nào.
> Token gốc đã copy vào `frontend/src/styles/ds/*.css`. Biến cũ `--app-*` trong styles.css được RETOKEN theo DS (giữ tên).

## Quyết định áp dụng cho BA_Home (policy)
- Interactive/primary: Blue 600 `#155EEF` (var --ds-brand / --app-primary mới). Hover đậm `#0040C1`.
- Tab active (underline): Blue 600 `#155EEF` — PO chốt 2026-09-01 ĐỒNG BỘ BLUE, bỏ xung đột violet #6941C6 của DS nguồn (mọi tab trong app phải cùng một màu active). Badge variant `primary` vẫn giữ violet #7F56D9 (hiện không được dùng ở đâu). Mọi thứ interactive còn lại: Blue 600.
- Toast: nguồn DS không có Toast nhưng BA_Home đã dùng khắp nơi — GIỮ hành vi, style lại theo bề mặt inverse (#101828, radius 8, chữ 14/20) như tooltip của DS.
- Icon: GIỮ lucide-react, size 16, strokeWidth 1.5, currentColor (không migrate sang bộ 233 glyph của DS).
- Font: Inter 400/500/600/700 qua Google Fonts (đã có sẵn trong dự án); khuyến nghị self-host khi lên intranet.
- Không emoji trong UI. Sidebar icon đã đổi từ emoji sang lucide.
- Class công khai GIỮ NGUYÊN TÊN để không vỡ e2e/unit test: `.modal-panel`, `.modal-body`, `.process-progress__fill`, `.kpi-card`, `.sidebar`, `.topbar`.

## Tổng quan triết lý
SooBinZHongSon Design System là hệ UI enterprise đậm đặc dữ liệu (procurement/back-office), tiếng Việt cho mọi copy người dùng, desktop-only (không có breakpoint mobile), trích xuất trực tiếp từ file Figma nguồn (296 component set, ~73.400 node) chứ không phải tái dựng từ trí nhớ.

Triết lý: "một lưới các hộp có viền" — viền làm việc phân tách, shadow chỉ báo hiệu vật thể nổi. Nền phẳng tuyệt đối: trắng cho content, #F9FAFB cho header/panel chìm, #FCFCFD cho zebra row; không gradient nền, không texture, không blur/backdrop-filter (scrim modal là bề mặt trong suốt duy nhất). Gradient duy nhất là brand band #027FFE→#02CCCC→#02E2BD (15.24%/72.81%/89.43%) dùng làm thanh 4px trên sidebar + 12px trên đầu trang và trong logo — không bao giờ làm nền chữ hay button.

Màu chủ đạo: MỘT màu blue làm mọi việc interactive — Blue 600 #155EEF (577 lượt dùng). Gray 200 #EAECF0 là màu được dùng nhiều thứ hai sau trắng (4.513 lượt) — viền mặc định. Error 500 #F04438 là màu cảnh báo duy nhất. Có một xung đột được bảo tồn nguyên trạng từ nguồn: Badge "primary" và Tab active dùng tông violet (#7F56D9 / #6941C6) chứ không phải Blue 600.

Chữ: Inter duy nhất, 4 weight (400/500/600/700); IBM Plex Sans 700 chỉ cho wordmark. Cỡ làm việc là 14/20 (label 14 Medium, body 14–16 Regular); bảng dùng 12/18; eyebrow section 11px Semibold UPPERCASE tracking 0.06em; display ≥24px có tracking −0.02em.

Spacing & shape: bước cơ sở 8px NHƯNG 6px và 10px là giá trị thật (padding control mặc định là 10px 12px — không được snap về lưới 4/8). Radius: 6px nav row, 8px cho MỌI control/field/table cell, 12px card/panel, 16px badge (pill), tròn hoàn toàn chỉ cho avatar/dot. 3 chiều cao control: 28/32(mặc định)/40px. Row bảng 40px (compressed 30px). Sidebar 264px, gutter trang 80px, gap icon-label trong control luôn 8px. Icon 16px, currentColor, 233 glyph.

Trạng thái: hover = bề mặt tối đi một nấc (trắng→#F9FAFB, Blue 600→#0040C1), KHÔNG scale/lift/đổ shadow khi hover. Pressed/focused = fill tối + halo 4px (--ds-focus-ring) + viền chuyển Blue 300, không bao giờ dùng outline trình duyệt. Disabled = fill Gray 50/Blue 200, chữ Gray 400 — không dùng opacity. Loading = nút primary fill Blue 200 + ring xoay 16px + chữ "Chờ...". Animation tối giản: spinner xoay, caret 150ms, còn lại swap tức thì — không bounce/spring/entrance.

Bảng lắp từ Ô, không phải dòng: ô cạnh nhau chồng viền −1px để thành lưới liền — layout viền theo row sẽ KHÔNG khớp design.

## Tokens
Nguồn: tokens/palette.css + semantic.css + typography.css + elevation.css + layout.css. Map vào Tailwind v3 (frontend BA_Home dùng tailwind.config.js) bằng theme.extend — build theo --ds-* và --color-*; BỎ QUA tokens/figma-variables.css (276 biến, phần lớn là thư viện kéo vào: AG Grid, SDS, Brand B — "archaeology").

[MÀU PALETTE — palette.css]
- Base: --color-white #FFFFFF; --color-black #000000; --color-ink #161616
- Blue (primary/interactive): blue-25 #F5F8FF · blue-50 #EFF4FF (focus ring, subtle fill) · blue-100 #D1E0FF (selection, halo pressed) · blue-200 #B2CCFF (loading fill) · blue-300 #84ADFF (focus border) · blue-400 #528BFF · blue-500 #2970FF · blue-600 #155EEF (PRIMARY) · blue-700 #004EEB (link hover); hover đậm của button primary đo được là #0040C1
- Gray (nền tảng trung tính): gray-25 #FCFCFD (zebra) · gray-50 #F9FAFB (header fill) · gray-100 #F2F4F7 (divider, track) · gray-200 #EAECF0 (VIỀN MẶC ĐỊNH) · gray-300 #D0D5DD (viền field) · gray-400 #98A2B3 (placeholder/disabled text) · gray-500 #667085 (secondary text) · gray-600 #475467 (body) · gray-700 #344054 (label) · gray-900 #101828 (PRIMARY TEXT) · gray-blue-300 #D3DAE6
- Error: error-25 #FFFBFA · 50 #FEF3F2 · 100 #FECDCA · 300 #FDA29B · 500 #F04438 (DANGER) · 600 #D92D20 · 700 #B42318
- Violet (xung đột bảo tồn — Badge primary + Tab active): purple-50 #F9F5FF · purple-500 #9747FF · violet-600 #7F56D9 · violet-700 #6941C6
- Gradient brand: #027FFE / #02CCCC / #02E2BD + deep #0251D2 (logo)

[SEMANTIC — semantic.css, ưu tiên dùng các alias này]
Surfaces: --ds-surface-page/card = white; -sunken #FCFCFD; -muted/-header #F9FAFB; -inverse #101828; -selected #EFF4FF; -danger-subtle #FEF3F2
Text: --ds-text-primary #101828; -body #475467; -label #344054; -secondary #667085; -placeholder/-disabled #98A2B3; -on-brand white; -link #155EEF; -link-hover #004EEB; -danger #B42318
Border: --ds-border-default #EAECF0; -field #D0D5DD; -subtle #F2F4F7; -strong #D0D5DD; -brand #D1E0FF; -focus #84ADFF; -danger #FECDCA
Interactive: --ds-brand #155EEF; -brand-hover/-pressed #004EEB; -brand-subtle #EFF4FF; -brand-loading #B2CCFF; --ds-danger #F04438; -danger-hover #D92D20; -danger-subtle #FEF3F2
Focus: --ds-focus-ring: 0 0 0 4px #EFF4FF; --ds-focus-ring-danger: 0 0 0 4px #FEF3F2 (impl button primary pressed dùng halo #D1E0FF — cả hai đều đúng theo nguồn)
--ds-brand-gradient: linear-gradient(90deg,#027FFE 15.24%,#02CCCC 72.81%,#02E2BD 89.43%)

[TYPOGRAPHY — typography.css]
--ds-font-sans: Inter,-apple-system,"Segoe UI",Roboto,sans-serif; --ds-font-logo: "IBM Plex Sans",Inter,sans-serif; --ds-font-mono: ui-monospace,SFMono-Regular,Menlo,monospace
Weights 400/500/600/700. Scale (size/line): xs 12/18 · sm 14/20 (MẶC ĐỊNH) · md 16/24 · lg 18/28 · xl 20/30 · display-xs 24/32 · sm 30/38 · md 36/44 · lg 48/60 · xl 60/72. Tracking: display −0.02em, text 0, eyebrow 0.06em.

[ELEVATION — elevation.css, một tông #101828, không bao giờ đen thuần]
--ds-shadow-xs: 0 1px 2px rgba(16,24,40,.05) (field, button)
--ds-shadow-sm: 0 1px 3px rgba(16,24,40,.10), 0 1px 2px rgba(16,24,40,.06) (card)
--ds-shadow-md: 0 4px 8px -2px rgba(16,24,40,.10), 0 2px 4px -2px rgba(16,24,40,.06) (menu)
--ds-shadow-lg: 0 12px 16px -4px rgba(16,24,40,.08), 0 4px 6px -2px rgba(16,24,40,.03) (popover, calendar)
--ds-shadow-xl: 0 20px 24px -4px rgba(16,24,40,.08), 0 8px 8px -4px rgba(16,24,40,.03) (modal, drawer)

[LAYOUT — layout.css]
Space: 2,4,6,8,10,12,16,20,24,28,32,40,48,56,64,72,80px. Radius: sm 6 · md 8 (button/field/cell) · lg 12 (card) · xl 16 · pill 16 (badge) · full 9999. Control heights: 28/32/40 (--ds-control-h-s/m/l). --ds-icon-size 16px; --ds-row-height 40px; --ds-gap-inline 8px; --ds-sidebar-width 264px; --ds-page-gutter 80px.

Gợi ý Tailwind: extend colors {blue:{25..700}, gray:{25..900}, error:{25..700}, violet:{600,700}}, boxShadow {xs,sm,md,lg,xl,focus:'0 0 0 4px #EFF4FF'}, borderRadius theo trên, fontFamily.sans=Inter stack, spacing thêm 2.5=10px (đã có sẵn ở Tailwind), height {control-s:28px,control-m:32px,control-l:40px,row:40px}.

## Quy tắc nội dung (copywriting)

- Ngôn ngữ: tiếng Việt cho MỌI thứ user đọc (label, button, header bảng, empty state, helper); tiếng Anh cho thứ designer/dev đọc (tên variant, prop). Không dịch tên variant sang tiếng Việt, không để copy user-facing bằng tiếng Anh.
- Sentence case ở mọi nơi: 'Tạo phiếu đối soát', không phải 'Tạo Phiếu Đối Soát'. UPPERCASE duy nhất: wordmark và eyebrow section (11px Semibold, tracking 0.06em).
- Giọng: ngôi thứ hai ngầm định — nói qua động từ ('Chọn chi nhánh'), không 'bạn', không 'chúng tôi', không dấu chấm than.
- Button là ĐỘNG TỪ: 'Xoá', 'Tạo phiếu đối soát', 'Publish now' — không bao giờ 'OK', không 'Submit'. Nút thoát luôn là từ đơn giản nhất: 'Cancel' (secondary gray, không phải link khi đứng cạnh destructive).
- Placeholder mô tả HÀNH ĐỘNG, không lặp tên field: select ghi 'Chọn chi nhánh', không ghi 'Chi nhánh' (label đã mang danh từ).
- Empty state đúng 2 dòng: câu nêu cái đang thiếu + 1 chỉ dẫn. Mẫu: 'Chưa có dữ liệu' / 'Thêm bản ghi đầu tiên để bắt đầu.' — không xin lỗi, không đùa. No-access: 'Không có quyền truy cập' / 'Liên hệ quản trị viên để được cấp quyền.'
- Số kiểu Việt Nam: 123.456 cho hàng nghìn, 0,1 cho thập phân. Tiền căn PHẢI, đơn vị tiền nằm trong addon của input, không nằm trong text nhập.
- KHÔNG emoji: không trong label, empty state, tài liệu. Emoji trong tên layer Figma (.📦Breadcrumb) là quy ước housekeeping nội bộ — không bao giờ render.
- Tone một dòng: trầm lặng và literal — giao diện không ăn mừng, không xin lỗi, không tự giải thích; gọi tên chính xác rồi tránh đường.
- Loading label chuẩn: 'Chờ...' trên nút primary loading.
- Icon-only button bắt buộc tooltip khi hover (nền tối #101828, radius 8, chữ 12/18 trắng, xuất hiện cách trigger 6px) — ngoại lệ duy nhất: nút ✕.

## Spec từng component

### Button

Nguồn: Buttons.dc.html + components/core/Button.prompt.md + _impl/p1.js (đo trực tiếp, đã convert hex). MỘT họ button duy nhất: 3 size × 7 hierarchy × icon layout × destructive × 4 state (240 variant).

KHUNG CHUNG: display inline-flex, align center, justify center, gap 8px (icon↔label luôn 8px), border-radius 8px, font Inter Medium 14/20, icon 16×16 currentColor, transition tức thì (không scale, không đổ shadow khi hover). Render bằng <button>, KHÔNG dùng outline trình duyệt — focus bằng box-shadow halo.

SIZE (chiều cao cố định): S=28px padding 8px (dùng '6px 8px' để đạt 28px với line 20); M=32px padding 10px 12px (MẶC ĐỊNH, dùng chính trong mọi trang); L=40px padding 10px 16px. Icon-only: M=32×32 padding 8 (primary) hoặc 10 (secondary/ghost); L icon-only 40×40.

7 HIERARCHY (giá trị đo từ impl, state=default → hover → pressed(focused) → disabled):
1. primary: bg #155EEF, text trắng, shadow-xs → hover bg #0040C1 → pressed bg #155EEF + inset ring 1px #155EEF + halo 4px #D1E0FF → disabled bg #B2CCFF text trắng.
2. secondary gray (nút thoát/Cancel chuẩn): bg trắng, inset ring 1px #D0D5DD, shadow-xs, text #344054 → hover bg #F9FAFB text #1D2939 → pressed + halo 4px #F2F4F7 → disabled border #EAECF0 text #D0D5DD.
3. secondary color: bg #EFF4FF, KHÔNG viền, text #6941C6 (violet — xung đột nguồn được bảo tồn) → hover bg #D1E0FF text #53389E → disabled bg #F5F8FF text #D6BBFB.
4. ghost gray: trong suốt, text #475467 → hover bg #F9FAFB text #344054 → disabled text #D0D5DD.
5. ghost color: trong suốt, text #004EEB → hover bg #EFF4FF text #0040C1 → disabled text #D0D5DD.
6. link color: chỉ text #155EEF → hover #004EEB → disabled #D0D5DD (không padding nền).
7. link gray: text #344054 → hover #1D2939 → disabled #D0D5DD.

DESTRUCTIVE (cờ, giữ nguyên hierarchy): primary: bg #D92D20 + inset ring cùng màu → hover #B42318 → pressed + halo 4px #FEE4E2 → disabled bg #FECDCA. secondary gray: trắng + ring #FDA29B text #B42318 → hover bg #FEF3F2 text #912018 → pressed + halo #FEE4E2 → disabled ring #FECDCA text #FDA29B. secondary color: bg #FEF3F2 text #B42318 → hover bg #FEE4E2 text #912018. ghost/link: text #B42318/#D92D20 → hover bg #FEF3F2 / text #B42318.

LOADING (vẽ tay, không phải variant): primary → bg #B2CCFF, spinner ring 16px (border 1px #F2F4F7, border-top #155EEF, animation spin .8s linear infinite), label "Chờ..." trắng; secondary gray → spinner top-color #98A2B3, text #98A2B3; secondary color → ring #EFF4FF top #84ADFF.

QUY TẮC BỐ CỤC: hành động chính LUÔN ngoài cùng bên phải, cấp bậc giảm dần sang trái (Primary → Secondary 1 → Secondary 2 → Link). Không bao giờ 2 primary trong 1 bar. Nút thoát cạnh destructive luôn là secondary gray, không phải link. Button bar chân form/bảng: justify-end, gap 8px. Icon button bắt buộc có tooltip khi hover (trừ nút ✕). Filter button = secondary gray icon-only + chấm 6px #155EEF viền trắng 1.5px ở góc trên phải khi có filter áp dụng.

### Badge + BadgeStatus + BadgeDot

Nguồn: Badges.dc.html + core/Badge.prompt.md + _impl/p2.js. Badge KHÔNG phải button: không hover, không click (trừ icon='x close' = tag xoá được).

BADGE: khung: inline-flex, border-radius 16px (pill), padding 2px 8px, font Inter Medium 12/18, mixBlendMode multiply trên fill solid; có dot → padding 2px 8px 2px 6px, gap 4px (dot 6px tròn cùng màu text). Outline = bỏ fill + inset ring 1.5px màu text. 13 màu (bg solid / text — text cũng là màu viền outline):
- gray: bg #F2F4F7 / text #344054 (mặc định; outline #475467)
- primary: #F9F5FF / #7F56D9 (VIOLET, không phải blue — giữ nguyên theo nguồn)
- error: #FEF3F2 / #D92D20 · warning: #FFFAEB / #DC6803 · success: #ECFDF3 / #039855
- blue light: #F0F9FF / #0086C9 · blue: #EFF8FF / #1570EF · indigo: #EEF4FF / #444CE7 · purple: #F4F3FF / #6938EF · pink: #FDF2FA / #DD2590 · rosé: #FFF1F3 / #E31B54 · orange: #FFF4ED / #E62E05 · blue gray: #F8F9FC / #3E4784
Dùng cho BA_Home: success=hoàn thành, warning=chờ xử lý, error=lỗi/quá hạn, blue=đang chạy, gray=nháp.

BADGESTATUS (mặc định cho cột Trạng thái trong bảng): KHÔNG có nền — chỉ dot + text: flex row gap 8px; BadgeDot 6px tròn + label. 5 type→màu dot: success=green #52C41A, error=red #FF4D4F, default=gray #D9D9D9, warning=gold #FAAD14, processing=blue #1890FF (có bản animating). Text impl gốc là Roboto 14/22 rgba(0,0,0,.85) (di sản Ant) — khi viết lại nên chuẩn hoá thành Inter 14/20 #101828.

BADGEDOT: chấm 6px, 16 màu Ant-series: pink #FF85C0, red #FF4D4F, yellow #FADB14, orange #FA8C16, cyan #13C2C2, green #52C41A, blue #1890FF, purple #722ED1, geek blue #2F54EB, magenta #EB2F96, volcano #FA541C, gold #FAAD14, lime #A0D911, gray #D9D9D9, processing(-animating) #1890FF. Dùng kèm text trong cell khi Badge đầy đủ quá nặng.

### Input / Select / Form field (label + helper)

Nguồn: Forms.dc.html + forms/_impl/p1.js (ComboboxSingleSelect 52 variants — đây là khung field chuẩn; component 'Input' 3413:5203 chỉ là editor trong cell bảng 24px, KHÔNG dùng cho form).

KHUNG FIELD (mọi input/select/date/currency dùng chung): height 32px (control M), border-radius 8px, bg trắng, viền inset ring 1px #D0D5DD + shadow-xs, padding 8px 12px, text Inter Regular 14/20. Trạng thái:
- default: viền #D0D5DD, placeholder #98A2B3
- hover: viền #98A2B3
- focused: ring inset 1.5px #155EEF (impl) — doc trang Forms ghi thêm 'ring focus 4px #EFF4FF'; khuyến nghị: border #155EEF 1.5px + halo 0 0 0 4px #EFF4FF
- filled: viền #D0D5DD, text #101828; select filled có nút ✕ xoá nhanh (biến thể 'no x' không cho xoá)
- disabled: bg #F2F4F7, viền #EAECF0, text #667085
- destructive/error: viền #FDA29B (hover #F97066, focused ring 1.5px #D92D20 + halo #FEF3F2) + dòng lỗi 12/18 Regular #F04438 dưới field.

LABEL: trên field, đo trong impl combobox là 12/18 Medium #344054 (README/doc trang Forms ghi 14/20 Medium — hai giá trị cùng tồn tại trong nguồn; khuyến nghị dùng 14/20 Medium #344054 làm chuẩn form, gap label→field 4–6px). Dấu * bắt buộc màu #F04438. HELPER/HINT: 14/20 Regular #475467 (hint) hoặc 12/18 #F04438 (error). 4 bố cục nhãn: default (label trên) / no label / label tooltip (icon ? cạnh label) / icon no label.

PLACEHOLDER là hành động: 'Chọn chi nhánh', không phải 'Chi nhánh'. Select có chevron-down 16px bên phải. Currency: căn PHẢI, đơn vị tiền trong addon bên phải (không nằm trong text), có nút tăng/giảm. Date picker: icon lịch, bản 1 ngày và range; panel lịch nổi shadow-lg radius 8. Toggle: 2 size md 44×24 / sm 36×20, dùng cho thiết lập hiệu lực ngay — không đi kèm nút Lưu.

### Checkbox / Radio

Nguồn: Badges.dc.html + core/_impl/p3.js. Dùng spec CheckboxIcon 16px (blue) cho bảng & form BA_Home — đây là bản blue-theme; bản Checkbox 20px md trong nguồn theo violet-theme (#7F56D9, xung đột nguồn), tránh dùng.

CHECKBOX 16×16, border-radius 4px:
- unchecked default: bg trắng + inset ring 1px #D0D5DD
- unchecked hover: bg #D1E0FF + ring #155EEF
- unchecked focused: ring #84ADFF + halo 2px #D1E0FF + shadow 0 1px 2px rgba(16,24,40,.08)
- checked: bg #EFF4FF + ring 1px #155EEF, dấu check #155EEF (indeterminate: gạch ngang #155EEF)
- checked hover: bg #D1E0FF ring #155EEF; checked focused: ring #155EEF + halo 2px #D1E0FF
- disabled: bg #F2F4F7 ring #D0D5DD (cả checked lẫn unchecked)
CheckboxText: label 14/20 Regular #344054 cách ô 8px, label và ô chung một hit-area; subtext 14/20 #475467.
RADIO: cùng hệ màu, hình tròn, không có indeterminate; 3 size sm/md/lg (16/20/24), chấm giữa #155EEF khi chọn.

### Table (header, row, cell, hover, empty, pagination)

Nguồn: Table.dc.html + data/_impl (CellTitle p2, CellBodyNormal p6). NGUYÊN TẮC: bảng lắp từ Ô — mỗi ô có viền 1px #EAECF0 cả 4 phía, ô cạnh nhau chồng −1px (margin-left:-1px; hàng dưới margin-top:-1px) để viền sập thành lưới. Với HTML table thật dùng border-collapse: collapse tương đương.

HEADER (CellTitle): height 40px, bg #F9FAFB, viền #EAECF0, padding 8px 12px, gap 8px, label 12/18 Medium #475467 (TableTitleText, kèm icon sort/tooltip 16px), có cờ filter (icon phễu), error, editColumn, compressed (32px). 9 kiểu: blank/text/text w tooltip/number/number w tooltip/checkbox/action/load/hz expand. Cột number căn phải.

BODY CELL (CellBodyNormal): height 40px (compressed 30px, padding dọc 6px), bg trắng, viền #EAECF0, padding 0 12px, text 14/20 Regular #101828 (bản phụ 12/18); Money/Number căn phải định dạng VN (123.456 · 0,1); Link màu #155EEF; Status = BadgeStatus; cell có thể nhúng checkbox/select/date/toggle/progress. 3 trạng thái dòng: default / hover / checked — impl Figma không đổi bg, áp quy tắc README: hover bg #F9FAFB, checked/selected bg #EFF4FF (--ds-surface-selected), zebra tùy chọn #FCFCFD. Header sticky, sidebar sticky.

EMPTY STATE (NoData): giữa bảng, illustration 80px (box/cloud/documents, tông primary hoặc gray), title + mô tả: 2 dòng đúng chuẩn — "Chưa có dữ liệu" / "Thêm bản ghi đầu tiên để bắt đầu."; text 14/20 #667085, gap 8/4px, padding dọc 80px. Bản no-access: "Không có quyền truy cập" / "Liên hệ quản trị viên để được cấp quyền."

PAGINATION (PaginationNoCount — chân bảng, full width, thiết kế cho dataset không đếm được): thanh viền #EAECF0 4 phía, padding 16px, text 14/20 Medium #344054, gap 12/8px. Cấu trúc trái→phải: chọn số mục/trang ('50 mục'), chỉ số trang ('Trang 1 / 100'), nút prev/next (chevron 16px, secondary gray 32px), ô 'Đến trang' (input nhảy trang). 3 state: default / load (skeleton) / only one (ẩn điều hướng).

### Modal / Dialog

Nguồn: Navigation.dc.html + navigation/_impl/p1.js (Modal 76:63427, ModalHeader, ModalButton).

SCRIM: rgba(52,64,84,0.1) phủ toàn màn (bề mặt trong suốt duy nhất của hệ; không blur).
HỘP: bg trắng, shadow-xl (0 20px 24px -4px rgba(16,24,40,.08), 0 8px 8px -4px rgba(16,24,40,.03)), căn giữa. 5 khổ: confirm mặc định 400px radius 12px; content 480/640/960/1140px radius 8px.
HEADER: padding 24px, gap 16px; title 18/28 Medium #101828; mô tả 14/20 Regular #475467; nút đóng ✕ 24px (ButtonCloseX — ghost gray, KHÔNG cần tooltip) góc trên phải.
BODY: padding ngang 24px, gap 16px.
FOOTER (ModalButton): padding 0 24px 24px, button bar dồn PHẢI, gap 8px: [Cancel = secondary gray] [hành động chính = primary]; bản destructive: primary destructive (#D92D20), Cancel vẫn secondary gray — không bao giờ là link. 480 confirm là khổ chuẩn cho xác nhận xoá.
DRAWER (panel bên): 400px, 2 chế độ overlay/push, header + footer action tương tự; dùng cho chi tiết bản ghi cạnh danh sách — Modal chỉ khi task phải blocking.

### SideNav (sidebar)

Nguồn: SideNav.dc.html (markup tĩnh đầy đủ, copy được gần nguyên vẹn).

KHUNG: aside position sticky top 0, height 100vh, width 264px, bg #FCFCFD, border-right 1px #EAECF0, flex column, overflow hidden. Trên cùng: thanh brand-gradient cao 4px (linear-gradient(90deg,#027FFE 15.24%,#02CCCC 72.81%,#02E2BD 89.43%)).
BRAND BLOCK: padding 24px 20px 16px, logo 24px + wordmark IBM Plex Sans 700 15px tracking -0.02em màu #475467 (BA_Home thay logo/wordmark riêng), dòng phụ 12/18 #98A2B3.
NAV: padding 0 12px 24px, flex column gap 2px, overflow-y auto.
- GROUP HEADER (row cấp 1): button full-width, radius 6px, padding 8px, flex gap 8px, font 14/20 Semibold; caret chevron 16px #98A2B3 xoay 90° khi mở (transition transform .15s ease — animation dài nhất của hệ); đếm items bằng mono 10px #98A2B3 bên phải. Trạng thái: trang hiện tại → bg #EFF4FF text #155EEF; khác → bg transparent text #344054; hover → bg #F2F4F7.
- SUB ITEMS: khối margin-left 15px + border-left 1px #EAECF0; mỗi item: padding 7px 8px 7px 13px, margin-left -1px, border-left 2px (active #155EEF, còn lại transparent), font 13/18; active → text #155EEF weight 600; thường → #475467 weight 400; hover → bg #F2F4F7 text #155EEF.
FOOTER: padding 12px 20px 16px, border-top #EAECF0, 2 dòng caption 11/16 #98A2B3.
Layout trang: grid 264px + minmax(0,1fr), main có thanh gradient 12px trên đầu, section padding ngang 80px.

### Topbar / HeaderNavigation

Nguồn: navigation/_impl/p3.js (38:36705) + HeaderNavigation.prompt.md. Một header mỗi trang, nằm trên mọi thứ.

KHUNG đo từ impl: height 48px, bg trắng, viền 1px #F2F4F7 (đáy), padding 0 24px, flex row: logo trái → menu items (4–8 mục, gap 40px, mỗi item 14/20 Medium #344054, item active #155EEF, dropdown chevron 16px) → phải: SearchField (input tìm kiếm toàn cục 32px radius 8 viền #D0D5DD, icon search 16px, có clear ✕), icon Notification (NavButton 40×40 ghost), avatar account (NavButton + dropdown Menu).
Dropdown menu (Menu/DropdownNavHeaderMenu): panel trắng radius 8, shadow-md/lg, viền #EAECF0, row 40px padding 8px 12px hover #F9FAFB, group có divider #F2F4F7, hỗ trợ panel 336px 1 cột hoặc 608px 2 cột.
LƯU Ý: BA_Home hiện dùng sidebar là chính — có thể chỉ cần topbar mỏng 48px chứa breadcrumb + search + user; NavMenuButton (hamburger 40×40) có 4 state default/opened/hover/focused theo cùng quy tắc ghost gray.

### Tabs

Nguồn: Navigation.dc.html + navigation/_impl/p2.js (TabButtonBase 63:21372, 240 variants). 2 kiểu:

1. UNDERLINE (chuyển section trong trang): font 14/20 Semibold, padding 1px 4px 11px 4px (có badge: 0 4px 10px), items gap 4px, cả hàng có border-bottom 1px #EAECF0.
- inactive: text #667085, không gạch → hover: text #155EEF + border-bottom 2px #155EEF → focus: như default (thêm halo nếu cần a11y)
- active (current): text #155EEF + border-bottom 2px #155EEF (Blue 600 = --app-primary. Nguồn DS dùng violet 700 #6941C6, nhưng PO chốt 2026-09-01: tab trong BA_Home phải xanh cho đồng nhất — KHÔNG đổi lại tím)
- badge đếm (vd 'Chờ duyệt · 5'): Badge pill 12/18 cạnh label.

2. BUTTON WHITE (segmented, chuyển khoảng dữ liệu Ngày/Tuần/Tháng/Năm): khay ngoài bg #F9FAFB radius 8 padding 4px gap 4px; mỗi tab height 30px (đủ 32 với khay), radius 6px, padding 0 12px, font 14/20 Medium.
- inactive: transparent, text #667085 → hover: bg trắng + shadow-sm, text #344054 → focus: + halo 4px #F2F4F7
- active: bg trắng + shadow-sm (0 1px 3px rgba(16,24,40,.1), 0 1px 2px rgba(16,24,40,.06)), text #344054.

### Callout / Alert

Nguồn: core/Callout.prompt.md + core/_impl/p5.js (766:36723). LƯU Ý: component 'Alert' trong navigation/ thực chất chỉ là ICON tam giác cảnh báo 16px (node 295:36052) — KHÔNG phải message strip; mọi thông báo inline/page-level trong BA_Home dựng bằng Callout. Hệ KHÔNG có Toast — không tự thêm.

CALLOUT: khối flex column, padding 16px, gap 8px, KHÔNG bo góc/không viền trong nguồn (khuyến nghị giữ phẳng hoặc radius 8 thống nhất), width tự do. Hàng đầu: icon 16px (tuỳ chọn, iInCircle/check/cross/warning theo tông) + title 14/20 Semibold; content: mô tả 14/20 Regular + nút hành động (tuỳ chọn, link/ghost cùng tông). 2 size md/sm. 4 tông (bg đo từ impl):
- primary (info): bg #E6F1FA
- success: bg #E6F9F7
- warning: bg #FFF9E8
- danger: bg #F8E9E9
Text/icon dùng màu semantic đậm tương ứng (info #155EEF/#101828, success #039855, warning #DC6803, danger #B42318). Callout = hướng dẫn trong ngữ cảnh; thông điệp cấp trang cũng dùng dải Callout đặt đầu content. Không dấu chấm than, không emoji trong copy.

### Card / KPI

Nguồn: README (chữ ký hệ thống) + pattern lặp trên mọi trang .dc.html + MetricChange.prompt.md. Hệ KHÔNG có Card primitive trong Figma — đây là pattern chuẩn hoá:

CARD: bg trắng, viền 1px #EAECF0, border-radius 12px, shadow-sm, overflow hidden.
HEADER STRIP (chữ ký của hệ): bg #F9FAFB, border-bottom 1px #EAECF0, padding 12px 20px, flex row space-between: title 14/20 Semibold #344054 bên trái + caption mono 11px #667085 bên phải.
BODY: padding 24px (hoặc 28px 24px cho form, 32px 24px cho showcase); section phân cách bằng divider #F2F4F7 hoặc header strip lặp lại.
Card lỗi/cảnh báo: viền #FECDCA, header bg #FEF3F2, title #B42318, nền thân #FFFBFA.

KPI/METRIC TILE: dùng card trên + nội dung: label 14/20 Medium #475467, giá trị display-xs 24/32 Semibold #101828 (số kiểu VN), kèm MetricChange — mũi tên trend up/down + phần trăm: up #039855, down #D92D20, 14/20 Medium. Chip token/mono: padding 4px 10px, radius 6px, bg #F9FAFB, viền #EAECF0, mono 12px #475467.
DESCRIPTION LIST (trang chi tiết bản ghi): 2–4 cột × 2–5 dòng, mỗi ô: label 14/20 #667085 + value 14/20 #101828, kẻ lưới #EAECF0 — chuẩn cho tab 'Tổng quan' chi tiết của BA_Home.

### Icon

Nguồn: components/icons/Icon.jsx + icon-data.js (233 glyph, RUNNABLE — copy dùng được ngay). Glyph vẽ trên lưới 16px, single-stroke, hơi vuông (họ hàng gần IBM Carbon), fill currentColor — KHÔNG BAO GIỜ hard-code màu icon, set màu trên control chứa nó. Size: 16px trong button/field/cell; 20px empty state; 24px+ chỉ ở page header. Bản Filled (IconCheckmarkFilled, IconStarFilled, IconErrorFilled) nghĩa là 'active/selected' chứ không phải nhấn mạnh. API: <Icon name="IconSearch" size={16}/>; import { iconNames } để liệt kê. Không icon font, không emoji, không ký tự Unicode thay icon; thiếu glyph thì yêu cầu bổ sung từ file nguồn, không tự vẽ. LƯU Ý cho BA_Home: frontend đang dùng lucide-react — khi reskin nên chuyển dần sang Icon của DS để đúng ngôn ngữ hình; nếu giữ lucide thì ép stroke 1.5, size 16, currentColor cho tiệm cận.


## Lưu ý nguồn

- Component .jsx CÓ impl thật (không phải wrapper rỗng): mỗi nhóm có _impl/p1..pN.js (400KB/file) là code React materialize từ Figma, các trang .dc.html render được thật. NHƯNG không nên import vào production BA_Home: render bằng <div> thay vì <button>/<input> thật (không a11y, không onClick/onChange), nhiều width cứng (Button width fit-content nhưng Callout width:400, Input width:138, Modal width:1440 khung scrim), state là PROP tĩnh (hover/focused truyền tay, không phải :hover CSS), style inline toàn bộ. → Dùng chúng làm REFERENCE RENDER + nguồn số đo; viết lại component React/Tailwind thật theo componentSpecs.
- Chỉ 62/296 family được extract. CHƯA CÓ: Toast/notification, Select multiple, Accordion, Card primitive, Comment-chat, Transfer, Timeline, Import/Export, Video player, bộ cell Handsontable, panel trong của Color picker — README cấm 'thêm theo suy diễn'; với BA_Home: multi-select và toast phải TỰ THIẾT KẾ theo token hệ (khuyến nghị: multi-select = khung Combobox + Badge 'x close' làm tag; thông báo = Callout, tránh toast bay).
- Xung đột violet được bảo tồn: Badge primary (#7F56D9) và Tab underline active (#6941C6) không khớp Blue 600 #155EEF; Checkbox bản 20px md cũng theo violet trong khi CheckboxIcon 16px theo blue. ĐÃ QUYẾT (PO 2026-09-01): Tab active đồng bộ Blue 600; violet chỉ còn ở Badge primary (không dùng) — không trộn lẫn tuỳ tiện.
- Di sản Ant Design còn sót trong impl: BadgeStatus dùng Roboto 14/22 rgba(0,0,0,.85), Input 3413:5203 là cell-editor 24px radius 3 (KHÔNG phải form input), BadgeDot dùng bảng màu Ant — khi viết lại, chuẩn hoá typography về Inter nhưng giữ màu dot.
- 'Alert' trong navigation/ chỉ là icon tam giác cảnh báo 16px, không phải message strip như prompt mô tả — dùng Callout cho mọi notice.
- CellTitle render chữ 'Title' cố định (built vậy trong Figma, không có prop đổi tên cột) — bảng BA_Home phải tự viết header cell nhận label.
- Hai giá trị focus không đồng nhất trong nguồn: semantic.css định nghĩa --ds-focus-ring = 4px #EFF4FF (blue-50) nhưng impl Button primary pressed dùng halo #D1E0FF (blue-100) và field focus dùng ring inset 1.5px #155EEF; label field doc ghi 14/20 nhưng impl combobox đo 12/18 — chọn một chuẩn (khuyến nghị: halo 4px #EFF4FF cho field, #D1E0FF cho button primary, label 14/20 Medium) và ghi vào guideline dự án.
- HeaderNavigation prompt ghi 72px nhưng impl + trang demo đo 48px — dùng 48px.
- Desktop-only: không có breakpoint mobile (trừ 2 variant HeaderNavigation/NoData) — phù hợp BA_Home (has_mobile: false), không cần responsive dưới ~1280px.
- styles.css gốc import components/*/assets.css trỏ ../../assets/*.png — nếu copy nguyên styles.css sẽ vỡ đường dẫn; tự viết file entry mới chỉ import 7 token css.
- Tailwind của BA_Home là v3.4 (tailwind.config.js) — map token bằng theme.extend tham chiếu CSS var hoặc hex trực tiếp; frontend đang dùng lucide-react, cần quyết định chuyển sang Icon 233-glyph của DS hay giữ lucide (stroke 1.5/size 16/currentColor).
- Sample data trong impl đã được mask (PR•••••6098) — nếu tái extract từ .fig phải mask lại; không dùng các chuỗi này làm dữ liệu demo thật.
- BadgePerfromace giữ nguyên lỗi chính tả của nguồn để khớp lookup Figma — đừng 'sửa' tên khi đối chiếu.