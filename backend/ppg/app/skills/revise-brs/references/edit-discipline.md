# Ranh giới của việc sửa

## Được phép đụng
- Mục, câu, dòng bảng mà yêu cầu của BA nói tới trực tiếp.
- Mục "Câu hỏi mở" — luôn được thêm câu hỏi phát sinh.
- Mã `FR-xx`/`BR-xx` **mới** phát sinh từ yêu cầu (đánh số tiếp, không chèn giữa).
- Mục "Tiêu chí chấp nhận" khi yêu cầu làm phát sinh hoặc bỏ một yêu cầu chức năng —
  tiêu chí phải luôn khớp với tập `FR/BR` hiện có.

## Không được đụng
- Văn phong, cách dùng từ ở phần không liên quan. Kể cả khi thấy sai chính tả nhẹ.
- Thứ tự mục, tên mục.
- Mã của yêu cầu đang có. Đổi mã sẽ làm đứt tham chiếu từ test case đã sinh.
- Mục "Hiện trạng (AS-IS)" — trừ khi yêu cầu của BA nói thẳng về hiện trạng. AS-IS phản ánh
  Master Doc, không phản ánh mong muốn.

## Ba tình huống hay gặp

**BA yêu cầu "viết lại mục 5 cho rõ hơn".** Được sửa toàn bộ mục 5, giữ nguyên mã và giữ
nguyên số lượng yêu cầu. Không nhập hai yêu cầu thành một, không tách một thành hai — làm vậy
sẽ đổi tập mã và đứt tham chiếu test case.

**BA yêu cầu "bỏ FR-03".** Bỏ dòng `FR-03` khỏi bảng, **không đánh số lại** các mã sau nó,
và bỏ luôn tiêu chí chấp nhận tham chiếu `FR-03`. Ghi vào "Câu hỏi mở" nếu có `BR-xx` chỉ tồn
tại để phục vụ `FR-03`.

**BA yêu cầu một thứ mà BRS đã nói ngược lại.** Thực hiện theo yêu cầu mới, và ghi vào
"Câu hỏi mở": *"Yêu cầu này ngược với nội dung trước đó ở mục X — cần xác nhận bản nào đúng."*
Không tự chọn bản nào đúng.
