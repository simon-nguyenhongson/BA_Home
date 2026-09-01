# Định dạng đầu ra bắt buộc

Trả về **đúng hai khối**, theo đúng thứ tự, mỗi khối có thẻ mở và thẻ đóng:

```
<CHANGE_SUMMARY>
- Mục 3.2 "Hạn mức giao dịch": sửa hạn mức ngày từ 500 triệu lên 1 tỷ
- Thêm mục 4.5 "Xác thực sinh trắc học" — mô tả luồng và điều kiện áp dụng
- Mục 7.1: bỏ đoạn nói về kênh SMS OTP vì đã dừng
</CHANGE_SUMMARY>
<MASTER_DOC>
# <tiêu đề Master Doc giữ nguyên>

## 1. …
（toàn bộ nội dung Master Doc sau cập nhật, Markdown）
</MASTER_DOC>
```

## Yêu cầu với `<CHANGE_SUMMARY>`

- Tối đa 8 gạch đầu dòng.
- Mỗi dòng nêu **mục nào** và **sửa gì**. Không viết chung chung kiểu "cập nhật theo BRS".
- Đây là nội dung BA đọc để quyết định duyệt hay không, và là nội dung đi vào hồ sơ kiểm toán
  của phiên bản tài liệu. Viết để người không đọc BRS vẫn hiểu được thay đổi.

## Yêu cầu với `<MASTER_DOC>`

- **Toàn bộ** tài liệu, không phải phần thay đổi.
- Thẻ đóng `</MASTER_DOC>` là bắt buộc — hệ thống dùng nó để phát hiện phản hồi bị cắt giữa.
  Nếu bạn thấy tài liệu quá dài để trả hết, **đừng cắt bớt**: trả lỗi bằng cách ghi trong
  `<CHANGE_SUMMARY>` rằng tài liệu vượt khả năng trả về một lần và cần merge theo từng chương.
