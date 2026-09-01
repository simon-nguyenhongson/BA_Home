# Cấu trúc BRS bắt buộc

Giữ đúng thứ tự và tên mục. Mục không có nội dung thì ghi "Không áp dụng" kèm một câu lý do —
không được bỏ mục.

```markdown
# BRS — <mã CR> <tiêu đề CR>

## 1. Bối cảnh và mục tiêu
<Vì sao có CR này. Vấn đề nghiệp vụ đang gặp. Kết quả mong đợi sau thay đổi.>

## 2. Phạm vi thay đổi
### 2.1 Trong phạm vi
### 2.2 Ngoài phạm vi
<Ghi rõ những thứ dễ bị hiểu là trong phạm vi nhưng không phải.>

## 3. Hiện trạng (AS-IS)
<Trích từ Master Doc. Nếu Master Doc chưa mô tả: ghi rõ và đưa câu hỏi vào mục 12.>

## 4. Yêu cầu sau thay đổi (TO-BE)

## 5. Yêu cầu chức năng
| Mã | Yêu cầu | Mô tả | Độ ưu tiên |
|---|---|---|---|
| FR-01 | | | Bắt buộc / Nên có / Tùy chọn |

## 6. Quy tắc nghiệp vụ
| Mã | Quy tắc | Diễn giải |
|---|---|---|
| BR-01 | | |

## 7. Yêu cầu phi chức năng
<Hiệu năng, khả dụng, bảo mật, lưu vết. Nêu con số khi CR có nói.>

## 8. Ảnh hưởng hệ thống và tích hợp
<Hệ thống nào bị tác động, giao diện nào phải sửa, hệ thống đối tác nào cần thông báo.>

## 9. Dữ liệu và báo cáo
<Trường dữ liệu thêm/đổi, ảnh hưởng tới báo cáo và đối soát.>

## 10. Rủi ro và phương án giảm thiểu
| Rủi ro | Mức | Giảm thiểu |

## 11. Tiêu chí chấp nhận
<Điều kiện quan sát được để nghiệm thu. Mỗi tiêu chí tham chiếu FR-xx hoặc BR-xx.>

## 12. Câu hỏi mở
<Chỗ nào thiếu thông tin, cần ai trả lời.>
```
