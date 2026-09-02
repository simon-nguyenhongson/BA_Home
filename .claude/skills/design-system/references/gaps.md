# Khoảng trống của DS và cách xử lý bắt buộc

Số liệu trong file này **đo được từ `design-system/` commit `6a241ae`**, không phải phỏng đoán.
Khoá lại bằng `frontend/src/__tests__/dsComposability.test.tsx`.

## 1. Giới hạn lớn nhất: component DS gần như không lắp ghép được

| Đo được | Số |
|---|---|
| Component nhận `children` | **1 / 85** (chỉ `core/Anchor`) |
| Component có prop `text1..textN` (ô nội dung cố định trích từ Figma) | 56 / 85 |
| Component **không** có cả `children` lẫn prop text — nội dung đóng hoàn toàn | 29 / 85 |

Đây không phải thư viện component lắp ghép. Đây là **bản render tĩnh vật chất hoá từ Figma**:
nhận prop variant để đổi hình dạng, một số nhận vài chuỗi qua `text1..textN`, nhưng **không nhận
nội dung tuỳ ý của ứng dụng**.

Hai ví dụ đã kiểm chứng bằng test:

```tsx
// ModalProps = { className, style, type, size, destructive } — KHÔNG có children.
<Modal><p>Nội dung của tôi</p></Modal>   // → nội dung bị bỏ, không xuất hiện trong DOM

// AlertProps = { className, style } — không message, không variant, không children.
<Alert />                                 // → dựng DOM nhưng textContent rỗng
```

**Hệ quả:** không thể dựng UI thật của BA_Home bằng các component này. `Modal` không bọc được form,
`Menu` không nhận được danh sách mục, `Steps` không nhận được các bước, `Alert` không nhận được
thông điệp.

## 1b. KẾT LUẬN: KHÔNG import component DS vào mã app

Đo tiếp trên `components/*/_impl/p*.js` — đây là lý do quyết định, mạnh hơn cả chuyện `children`:

| Đo được | Kết quả |
|---|---|
| Số lượt màu `rgb()` hardcode trong implementation | **9.931** |
| Số màu khác nhau | **143** (palette DS chỉ có ~38 bước) |
| Số lượt dùng `var(--ds-*)` | **0** |

**Component DS không hề dùng token.** Chúng là ảnh chụp pixel: màu và kích thước nướng cứng vào
inline style. Ba ví dụ đã render thật và kiểm chứng:

- `core/Divider` → inline `width: 259px` cứng, màu `rgba(0,0,0,0.06)` — **không phải** token viền `#EAECF0`
- `navigation/SpinnerStatic` → `12px` (DS spec nói 16px), màu `#0077CC` — **không có trong bất kỳ file
  token nào**, trái luật "một blue #155EEF làm mọi việc interactive" — và **không có animation**
- `navigation/Illustration` → `#EAECF0` + `#F2F4F7`, đây là cái duy nhất khớp token

Ngoài ra 4 leaf trông có vẻ dùng được thì đều hỏng ở hợp đồng:
`Toggle` và `Checkbox` **không có `onChange`** (không tương tác được);
`Avatar` có `text?: boolean` chứ không phải string (không đặt được chữ viết tắt);
`ProgressBar` chỉ nhận 11 bước chuỗi `"0%"…"100%"` (giá trị 37% không biểu diễn được).
Cả bốn khai `state?: 'default'|'hover'|'focused'|'disabled'` — trạng thái là **prop**, không phải CSS
state thật.

**QUY TẮC BẮT BUỘC: không `import` từ `@ds/components/**` vào `frontend/src/`.**
Làm vậy là tiêm 9.931 màu hardcode vào app — đúng ngược lại cái `npm run lint:ds` đang bảo vệ.

**Thứ đáng tin trong `design-system/` là:**
1. `tokens/*.css` — token thật, đã mirror vào `frontend/src/styles/ds/`
2. `readme.md` — luật thiết kế
3. `components/*/*.d.ts` và `*.prompt.md` — **hợp đồng và luật dùng** để đối chiếu khi tự viết
4. `guidelines/*.html` + `*.dc.html` — đặc tả trực quan

Nghĩa là: đọc `.d.ts`/`.prompt.md` để biết component *phải* có variant/state/prop nào, rồi **tự dựng
bằng token DS**. Đừng import file `.jsx`.

Alias `@ds` vẫn giữ để tra cứu và để `src/__tests__/designSystem.test.tsx` khoá token không drift.

## 2. Bốn thứ BA_Home đang dùng mà DS không có

`design-system/readme.md` nói thẳng:

> There is no Toast, no Select-multiple, no Card primitive, no Accordion in this system, because the
> source does not define them — **do not add them by analogy.**

| BA_Home dùng | DS có? | Xử lý |
|---|---|---|
| `Card` (`ui.tsx`) | ❌ readme phủ định thẳng | Giữ của BA_Home. Bám đúng công thức card ghi trong `readme.md`: trắng + viền 1px `#EAECF0` + radius 12 + `shadow-sm` + dải header `#F9FAFB` tiêu đề 14 Semibold |
| `ToastContainer` (`ui.tsx`) | ❌ không có Toast | Giữ của BA_Home. `navigation/Alert` **không** thay được: không prop message, render rỗng chữ. Style theo bề mặt inverse (`#101828`, radius 8, chữ 14/20) như tooltip DS |
| `AppTextarea` (`ui.tsx`) | ❌ đã grep toàn bộ `components/`: không có `textarea`/`multiline` | Giữ của BA_Home. `data/TextField` là input MỘT DÒNG cho sửa trong ô bảng, không thay được |
| `AppSelect` (`ui.tsx`) | ⚠️ `forms/ComboboxSingleSelect` — chỉ single, và là combobox chứ không phải `<select>` | Giữ `AppSelect`. Không có Select-multiple trong DS |

**Không được** thêm 4 thứ này vào `design-system/` — đó là bản vendor của upstream, sửa vào là mất
đường đối chiếu. Chúng thuộc `frontend/src/components/`, đánh dấu là extension của BA_Home.

## 3. Ô tiêu đề bảng có chữ cố định

`readme.md` CAVEAT 4, đã xác minh trong `components/data/CellTitle.d.ts`:

```ts
interface CellTitleProps {
  className, style,
  type?: 'blank' | 'number' | 'number w tooltip' | 'checkbox' | 'text' | 'text w tooltip'
       | 'load' | 'action' | 'hz expand',
  compressed, error, filter, editColumn, checkbox,
  icon1, icon2, icon3
}
```

Không có prop nào đặt được tên cột. Muốn dùng `CellTitle` cho bảng thật thì phải bọc lại hoặc sửa ở
file Figma nguồn. `ds-table` hiện tại của BA_Home vẫn là đường đúng — nhưng phải giữ luật
**"bảng lắp từ Ô, chồng viền −1px"**, không viền theo dòng.

## 4. Chỉ 62/296 họ component được trích xuất

`readme.md` CAVEAT 1. Chưa có: toàn bộ `Comment-chat`, `Carousel`, `Transfer`, `Timeline`,
`Video player`, `Import/Export`, bộ ô `Handsontable`, ruột panel `Color picker`, và các frame sản
phẩm `TravelDesk`.

Cần một trong số đó thì **hỏi chủ DS trích thêm từ `Design System.fig`** — đừng tự vẽ lại.

## 5. Không có text style trong file Figma nguồn

`readme.md` CAVEAT 5: `.fig` không định nghĩa TEXT/EFFECT style nào (`fig-typography.css` trả về
rỗng). Thang chữ trong `tokens/typography.css` được **đo từ các node text thật**, không đọc từ style
có tên. Nên thang chữ là quan sát, không phải hợp đồng — gặp cỡ chữ lạ trong Figma thì đối chiếu
token trước khi thêm bước mới.

## 6. Mâu thuẫn upstream chưa được chốt

**Chiều cao control nhỏ: 28px hay 24px?**
`tokens/layout.css` → `--ds-control-h-s: 28px`. `components/core/Button.d.ts` →
`size?: 'h24px' | 'h32px' | 'h40px'`. Chỉ Button lệch; không component nào khác khai `h24px`.

BA_Home đi theo **token (28/32/40)**. **Chờ chủ DS chốt** — ghi trong `design-system/UPSTREAM.md`.
