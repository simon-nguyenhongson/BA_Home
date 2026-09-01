# Loại test case hay bị bỏ sót — nghiệp vụ ngân hàng

Đối chiếu danh sách này với BRS. Chỉ thêm case khi **BRS có nói tới** điều kiện tương ứng —
không tự thêm yêu cầu mới.

## Hạn mức và số dư
- Giao dịch **đúng bằng** hạn mức (biên trên) — không chỉ trong và ngoài hạn mức.
- Số dư còn đúng bằng số tiền giao dịch (không đủ trả phí).
- Hạn mức ngày cộng dồn qua nhiều giao dịch nhỏ.

## Xác thực và phân quyền
- OTP sai, OTP hết hạn, nhập sai quá số lần cho phép.
- Người duyệt **chính là** người tạo (maker-checker phải chặn).
- Vai trò không có quyền truy cập trực tiếp bằng URL.

## Trạng thái và luồng
- Thao tác trên bản ghi đã ở trạng thái cuối (đã duyệt, đã hủy).
- Hai người sửa cùng một bản ghi (tranh chấp phiên bản).
- Bấm hai lần liên tiếp (giao dịch trùng — kiểm tính idempotent).

## Thời gian
- Giao dịch ngoài giờ làm việc / ngày lễ nếu BRS có phân biệt.
- Giao dịch vắt qua thời điểm cuối ngày (cut-off) nếu BRS có nói.

## Dữ liệu biên
- Trường bắt buộc để trống.
- Độ dài tối đa của trường; ký tự có dấu tiếng Việt; ký tự đặc biệt.
- Số tiền = 0, số âm, số quá lớn.

## Đối soát và lưu vết
- Giao dịch thành công có ghi lưu vết đủ trường theo BRS.
- Số liệu báo cáo khớp với giao dịch vừa tạo, nếu BRS có mục Dữ liệu và báo cáo.
