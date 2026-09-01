# Style Guide — profile BA_Home

**Đây là profile đang hoạt động.** Nó THAY THẾ hoàn toàn bảng token trong `style-guide.md`.
Cổng thiết lập lần đầu (§0 của SKILL.md) coi như **đã qua** — không hỏi lại người dùng về thương hiệu.

Nguồn: Design System SooBinZHongSon đang áp cho giao diện BA_Home
(xem `docs/design/DS-ADOPTION-SPEC.md`). Diagram phải trông cùng một hệ với ứng dụng.

---

## Tokens — vai trò ngữ nghĩa

| Vai trò | Sáng (mặc định) | Tối | Ghi chú |
|---|---|---|---|
| `paper` | `#FFFFFF` | `#101828` | Nền trang, nền node mặc định |
| `paper-2` | `#F9FAFB` | `#1D2939` | Nền khung diagram, fill phụ |
| `ink` | `#101828` | `#F9FAFB` | Chữ chính, nét chính |
| `muted` | `#667085` | `#98A2B3` | Chữ phụ, nét mũi tên mặc định |
| `soft` | `#98A2B3` | `#667085` | Nhãn phụ, nhãn biên |
| `rule` | `rgba(16,24,40,0.08)` | `rgba(249,250,251,0.10)` | Đường kẻ mảnh |
| `rule-solid` | `#EAECF0` | `rgba(234,236,240,0.22)` | Viền đậm hơn, đường cơ sở |
| `accent` | `#155EEF` | `#528BFF` | **Tiêu điểm — tối đa 1–2 node mỗi diagram** |
| `accent-tint` | `rgba(21,94,239,0.08)` | `rgba(82,139,255,0.12)` | Fill cho khối viền accent |
| `link` | `#6941C6` | `#B692F6` | Gọi API/HTTP, mũi tên ra ngoài hệ thống |

### Quy tắc đảo màu (sáng → tối)

Mọi `rgba(16,24,40,X)` ở bản sáng thành `rgba(249,250,251,X)` ở bản tối — giữ nguyên độ mờ, đảo RGB.

### Bảng màu chuỗi (chỉ cho loại biểu đồ nhiều chuỗi)

| Token | Sáng | Tối |
|---|---|---|
| `series-1` | `#155EEF` | `#528BFF` |
| `series-2` | `#6941C6` | `#B692F6` |
| `series-3` | `#DC6803` | `#FDB022` |
| `series-4` | `#039855` | `#32D583` |
| `series-5` | `#667085` | `#98A2B3` |

Fill ở độ mờ `0.18` (sáng) / `0.22` (tối); nét dùng màu đầy. **Không dùng bảng này cho các loại
không phải biểu đồ** — architecture, swimlane… vẫn dùng biến thể của `ink`/`muted`.

### Màu trạng thái (dùng cho diagram nghiệp vụ ngân hàng)

Chỉ dùng khi trạng thái là *nội dung* của diagram (ví dụ: sơ đồ trạng thái CR, kết quả test) —
không dùng để trang trí:

| Ý nghĩa | Sáng | Nền nhạt |
|---|---|---|
| Thành công / đã duyệt | `#039855` | `#ECFDF3` |
| Cảnh báo / đang chờ | `#DC6803` | `#FFFAEB` |
| Lỗi / từ chối | `#D92D20` | `#FEF3F2` |
| Trung tính / nháp | `#667085` | `#F2F4F7` |

---

## Typography

**KHÔNG nạp font từ mạng ngoài.** Mạng nội bộ ngân hàng chặn CDN, và diagram được nhúng trong
iframe `sandbox` không có quyền truy cập mạng — thẻ `<link>` trỏ Google Fonts sẽ chỉ làm hình vỡ chữ.

Dùng đúng một ngăn xếp font, khai báo ngay trong CSS nội tuyến:

```css
--font-sans: Inter, "Segoe UI", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
--font-mono: "SF Mono", ui-monospace, "JetBrains Mono", Consolas, "Courier New", monospace;
```

| Vai trò | Font | Cỡ | Đậm | Dùng cho |
|---|---|---|---|---|
| `title` | sans | 20px | 600 | Tiêu đề diagram |
| `node-name` | sans | 12px | 600 | Nhãn node đọc được |
| `sublabel` | mono | 9px | 400 | Cổng, giao thức, kiểu dữ liệu |
| `eyebrow` | mono | 8px | 500, tracking 0.14em, IN HOA | Thẻ loại, nhãn trục |
| `arrow-label` | mono | 8px | 400, tracking 0.06em | Ghi chú trên mũi tên |
| `callout` | sans *nghiêng* | 13px | 400 | Chú giải biên tập |

**Nhãn tiếng Việt:** mọi nhãn node, mũi tên, chú giải viết **tiếng Việt** trừ khi đó là tên riêng
kỹ thuật (`POST /api/v1/transfers`, `Kafka`, `T24`, `SWIFT`). Dấu tiếng Việt phải hiển thị đúng —
đặt `<meta charset="utf-8">` và không dùng entity HTML cho chữ có dấu.

---

## Hình khối và khoảng cách

Kế thừa DS của ứng dụng:

- Bán kính: `8px` cho node/khối điều khiển, `12px` cho khung ngoài. Node tròn hoàn toàn chỉ dùng cho actor.
- Nét: `1px` cho viền thường, `1.5px` cho node tiêu điểm, `1px` cho mũi tên.
- **Không đổ bóng.** DS của BA_Home dùng bóng một tông mực rất nhẹ cho thẻ giao diện; trong diagram thì **không bóng**.
- Khoảng cách: bội số của `4px`. Khoảng hở giữa hai node tối thiểu `24px`.

---

## Ràng buộc bắt buộc khi xuất file

1. **Một file HTML tự chứa.** Toàn bộ CSS nội tuyến trong `<style>`, hình vẽ là `<svg>` nội tuyến.
2. **Không tài nguyên ngoài.** Không `<link>`, không `<script src>`, không `<img src="http…">`,
   không `@import`, không `url()` trỏ ra mạng. Chỉ được dùng `data:` URI nếu thật cần.
3. **Không JavaScript.** Diagram là tĩnh. (Chuyển động chỉ khi được yêu cầu tường minh, và phải
   bằng CSS thuần, tôn trọng `prefers-reduced-motion`.)
4. **Chịu được khung hẹp.** Đặt `viewBox` trên `<svg>` và cho `width: 100%; height: auto` —
   diagram được nhúng trong iframe rộng khoảng 900–1400px.
5. **Không thẻ `<form>`, `<input>`, `<iframe>`, `<object>`, `<embed>`.**

Ba ràng buộc đầu là yêu cầu bảo mật: file được lưu vào DB rồi hiển thị lại qua iframe `sandbox`.
