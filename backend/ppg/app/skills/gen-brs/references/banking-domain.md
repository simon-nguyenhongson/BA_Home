# Bối cảnh nghiệp vụ ngân hàng — dùng khi viết BRS

Chỉ áp dụng phần liên quan tới CR đang xét. Không thêm yêu cầu mà CR không nói.

## Đặt tên cho đúng
- **Kênh**: Internet Banking, Mobile Banking, ATM, Quầy, Call Center, Đối tác qua API.
- **Hệ thống lõi** giữ nguyên tên nội bộ mà CR/Master Doc dùng, không dịch, không viết tắt mới.
- **Vai trò trong luồng duyệt**: người tạo (maker), người duyệt (checker), người phê duyệt
  ngoại lệ. Không gọi chung là "user".

## Chốt kiểm soát phải nêu thành yêu cầu riêng
Những thứ sau, nếu CR có đụng tới, phải xuất hiện thành `FR-xx` hoặc `BR-xx` **riêng** — không
gộp vào yêu cầu nghiệp vụ, vì đây là phần người duyệt tài liệu và kiểm toán đọc trước:

- **Hạn mức**: theo giao dịch, theo ngày, theo kênh, theo nhóm khách hàng.
- **Xác thực**: OTP, sinh trắc, chữ ký số — nêu rõ áp dụng ở bước nào.
- **Maker-checker**: người tạo không được là người duyệt.
- **KYC/AML**: điều kiện chặn, danh sách cảnh báo, ngưỡng báo cáo.
- **Lưu vết**: giao dịch nào ghi vết, ghi những trường gì, giữ bao lâu.
- **Đối soát**: đối soát với hệ thống nào, tần suất, xử lý lệch.

## Yêu cầu phi chức năng — chỉ ghi khi có số
Nếu CR không cho con số thì **đưa câu hỏi vào mục 12**, đừng đặt ngưỡng thay khách hàng.
Các nhóm hay cần: thời gian phản hồi, số giao dịch mỗi giây, thời gian dừng cho phép,
mục tiêu phục hồi (RTO/RPO), thời hạn lưu dữ liệu.

## Tuân thủ
Nếu CR xuất phát từ một văn bản pháp lý (Thông tư, Quyết định của NHNN, yêu cầu của cơ quan
quản lý), ghi **số hiệu văn bản** vào mục 1 và ràng buộc tương ứng vào mục 6. Không tự suy ra
văn bản nào nếu CR không nêu — ghi câu hỏi vào mục 12.

## Cấm tuyệt đối trong tài liệu
Số tài khoản, số CIF, số thẻ, số CMND/CCCD, tên và số điện thoại khách hàng thật.
Cần ví dụ thì dùng dữ liệu rõ ràng là giả: `KH-001`, `0900000000`, `1900000000001`.
