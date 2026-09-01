# Lược đồ JSON test case

Hệ thống parse trực tiếp mảng này vào bảng `automation_test_cases`. Sai lược đồ là lỗi
`AI_FORMAT_ERROR` và không có case nào được lưu.

```json
[
  {
    "code": "TC-01",
    "title": "Chuyển tiền nội bộ thành công trong hạn mức",
    "precondition": "Tài khoản KH-001 có số dư 5.000.000 VND, hạn mức ngày còn 2.000.000 VND. Đã đăng nhập Internet Banking.",
    "steps": "1. Vào menu Chuyển tiền → Trong hệ thống\n2. Nhập số tài khoản nhận 0900000000\n3. Nhập số tiền 1.000.000\n4. Bấm Tiếp tục\n5. Nhập OTP 000000\n6. Bấm Xác nhận",
    "expected": "Hiện thông báo \"Giao dịch thành công\" kèm mã giao dịch. Số dư KH-001 còn 4.000.000 VND. Hạn mức ngày còn 1.000.000 VND. Giao dịch xuất hiện trong Lịch sử với trạng thái Thành công.",
    "priority": "critical",
    "refs": "FR-01, BR-02"
  }
]
```

## Quy tắc từng trường

| Trường | Bắt buộc | Quy tắc |
|---|---|---|
| `code` | có | `TC-01`, `TC-02`… liên tục, không trùng, tối đa 40 ký tự |
| `title` | có | Tiếng Việt, nêu **kết quả** chứ không nêu hành động. Tối đa 300 ký tự |
| `precondition` | có | Dữ liệu + trạng thái + tài khoản. Không có điều kiện gì thì ghi "Không có" |
| `steps` | có | Đánh số, `\n` giữa các bước, mỗi bước một hành động |
| `expected` | có | Kết quả quan sát được. Nhiều điểm kiểm thì ghi liền mạch trong một chuỗi |
| `priority` | có | `critical` \| `high` \| `medium` \| `low` — theo độ ưu tiên của `FR/BR` tương ứng |
| `refs` | nên có | Danh sách mã `FR-xx`/`BR-xx` mà case này kiểm, cách nhau bằng dấu phẩy |

## Cấm

- Không bọc mảng trong dấu ```.
- Không thêm khoá nào ngoài bảng trên.
- Không trả mảng rỗng. Không tìm được yêu cầu nào để kiểm thì trả một case duy nhất có
  `code: "TC-00"`, `title` nêu rõ *"BRS không có yêu cầu chức năng nào kiểm được"*.
