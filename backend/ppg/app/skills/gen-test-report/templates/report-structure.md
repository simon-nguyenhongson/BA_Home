# Cấu trúc báo cáo kiểm thử

```markdown
# Báo cáo kiểm thử — <mã CR>

## 1. Thông tin chung
| | |
|---|---|
| Mã lượt chạy | |
| Thời điểm chạy | |
| BRS tham chiếu | |
| Phạm vi | <số case trong task, số case được chạy trong lượt này> |

## 2. Tổng hợp kết quả
| Chỉ số | Giá trị |
|---|---|
| Tổng số test case | |
| Đạt | |
| Không đạt | |
| Chưa chạy trong lượt này | |
| Tỉ lệ đạt (trên số đã chạy) | |

## 3. Chi tiết test case không đạt
| Mã | Tiêu đề | Ghi nhận từ công cụ chạy | Ảnh hưởng nghiệp vụ |
|---|---|---|---|

<Không có case nào không đạt thì ghi "Không có.">

## 4. Test case chưa chạy trong lượt này
| Mã | Tiêu đề | Lý do |
|---|---|---|

<Lý do chỉ ghi khi dữ liệu nói rõ, ví dụ "chưa map script". Không rõ thì ghi
"không có trong kết quả lượt chạy". Không có case nào thì ghi "Không có.">

## 5. Đánh giá rủi ro
<Rủi ro suy ra từ case không đạt và case chưa chạy. Không có gì thì nói không có.>

## 6. Kết luận và khuyến nghị
<Đủ điều kiện đóng hay chưa. Nếu chưa: cần làm gì để đóng được.>
```

## Cách tính tỉ lệ đạt

`Tỉ lệ đạt = Đạt / (Đạt + Không đạt)` — **mẫu số không gồm case chưa chạy**. Ghi kèm số case
chưa chạy ngay cạnh tỉ lệ, ví dụ: `92% (11/12 case đã chạy; còn 3 case chưa chạy)`. Tính tỉ lệ
trên tổng số case sẽ làm con số trông xấu hơn thực tế và che mất việc còn case chưa chạy.
