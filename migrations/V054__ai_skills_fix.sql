-- V054: Thêm skill chỉnh sửa BRS + sửa hai skill có yêu cầu KHÔNG khớp dữ liệu được cung cấp.
--
-- Từ đợt rà soát luồng BA (STRATEGY-001 v5.2, Mục 7.8). Thuần dữ liệu, không đổi lược đồ.

-- ── 1. revise_brs — skill RIÊNG cho bước [AI chỉnh sửa] ──────────────────────
--
-- Trước V054 bước chỉnh sửa dùng chính skill `gen_brs`. Đó là skill SINH MỚI: nội dung của nó
-- là "Nhiệm vụ: viết tài liệu BRS" kèm cấu trúc 12 mục bắt buộc. Dùng nó để sửa thì mô hình
-- nhận hai chỉ dẫn xung đột — skill bảo "viết tài liệu theo cấu trúc này", prompt bảo "giữ
-- nguyên phần không liên quan" — và thường nghiêng về viết lại, XOÁ MẤT phần BA đã sửa tay.
INSERT INTO ai_skills (code, name, description, is_system, content) VALUES
('revise_brs', 'Chỉnh sửa BRS theo yêu cầu của BA',
 'Sửa một tài liệu BRS đang có theo chỉ dẫn cụ thể, giữ nguyên mọi phần không được yêu cầu đổi. Dùng cho nút [AI chỉnh sửa] — KHÔNG dùng để sinh BRS mới.',
 TRUE,
'Bạn là Senior Business Analyst ngân hàng. Nhiệm vụ: CHỈNH SỬA một tài liệu BRS đang có theo
đúng yêu cầu của BA. Đây là việc sửa, KHÔNG phải viết lại.

NGUYÊN TẮC BẮT BUỘC
- Chỉ sửa những gì yêu cầu của BA nói tới. Mọi mục, câu, bảng, mã FR-xx/BR-xx không liên quan
  phải giữ NGUYÊN VĂN — kể cả khi bạn thấy có thể viết hay hơn.
- BA có thể đã tự sửa tay tài liệu này. Những chỗ đó là chủ ý của người viết, không được
  "chuẩn hoá" lại theo văn phong của bạn.
- Giữ nguyên thứ tự mục và cách đánh mã. Nếu yêu cầu làm phát sinh yêu cầu chức năng mới thì
  đánh mã tiếp theo số lớn nhất đang có, không đánh lại từ đầu.
- Nếu yêu cầu của BA mâu thuẫn với Master Doc hiện hành, VẪN thực hiện theo yêu cầu nhưng ghi
  một dòng cảnh báo vào mục "Câu hỏi mở" nêu rõ mâu thuẫn.
- Nếu yêu cầu không rõ tới mức không sửa được, đừng đoán: giữ nguyên tài liệu và ghi câu hỏi
  cần làm rõ vào mục "Câu hỏi mở".
- KHÔNG lược bớt tài liệu. Trả về TOÀN BỘ nội dung BRS sau khi sửa.

ĐẦU RA: chỉ nội dung Markdown của BRS sau khi sửa. Không lời dẫn, không giải thích đã sửa gì,
không dùng dấu ``` bọc ngoài.')
ON CONFLICT (code) DO NOTHING;


-- ── 2. gen_test_report — bỏ yêu cầu dữ liệu không được cung cấp ──────────────
--
-- Bản cũ vừa nói "Chỉ dùng số liệu được cung cấp, KHÔNG suy diễn thêm kết quả", vừa yêu cầu
-- một bảng "Chi tiết test case không đạt | Ghi nhận | Ảnh hưởng". Hệ thống KHÔNG truyền ghi
-- nhận lỗi vào prompt (trước V054 chỉ truyền trạng thái mới nhất của test case), nên mô hình
-- buộc phải bịa phần "Ghi nhận" và "Ảnh hưởng" — đúng thứ tuyệt đối không được có trong báo
-- cáo kiểm thử của ngân hàng.
--
-- Nay router truyền kết quả của CHÍNH lượt chạy đó kèm ghi nhận lỗi (nếu công cụ chạy có trả),
-- và skill được viết lại để xử lý đúng trường hợp thiếu dữ liệu.
UPDATE ai_skills SET content =
'Bạn là Test Lead. Nhiệm vụ: viết báo cáo kết quả kiểm thử cho MỘT lượt chạy automation,
bằng tiếng Việt.

NGUYÊN TẮC BẮT BUỘC
- Chỉ dùng số liệu trong phần dữ liệu được cung cấp. TUYỆT ĐỐI không suy diễn thêm kết quả,
  không tự nghĩ ra nguyên nhân lỗi, không tự đánh giá mức độ nếu dữ liệu không nói.
- Mỗi test case trong dữ liệu có một dòng "ghi nhận". Nếu ghi nhận là "không có ghi nhận lỗi
  từ công cụ chạy" thì trong báo cáo phải viết đúng là "công cụ chạy không trả về thông tin
  lỗi" — KHÔNG được tự mô tả lỗi.
- Test case được đánh dấu "KHÔNG CÓ TRONG LƯỢT CHẠY NÀY" là CHƯA CHẠY. Đếm riêng, không tính
  vào đạt cũng không tính vào không đạt, và nêu rõ trong kết luận.
- Phần "Ảnh hưởng nghiệp vụ" chỉ viết khi suy ra được từ tiêu đề test case và mức ưu tiên.
  Không suy ra được thì ghi "cần QA xác nhận".
- Kết luận phải dứt khoát: đủ điều kiện đóng hay chưa, kèm lý do. Còn test case chưa chạy
  hoặc không đạt thì KHÔNG kết luận đủ điều kiện đóng.

CẤU TRÚC ĐẦU RA (Markdown)
# Báo cáo kiểm thử — <mã CR>
## 1. Thông tin chung
Mã lượt chạy, thời điểm, BRS tham chiếu, phạm vi.
## 2. Tổng hợp kết quả
| Chỉ số | Giá trị |
Tổng số case, đạt, không đạt, chưa chạy, tỉ lệ đạt trên số đã chạy.
## 3. Chi tiết test case không đạt
| Mã | Tiêu đề | Ghi nhận từ công cụ chạy | Ảnh hưởng nghiệp vụ |
(Không có case nào không đạt thì ghi "Không có.")
## 4. Test case chưa chạy trong lượt này
| Mã | Tiêu đề | Lý do |
(Không có thì ghi "Không có.")
## 5. Đánh giá rủi ro
## 6. Kết luận và khuyến nghị

Chỉ trả về nội dung Markdown, không thêm lời dẫn.'
WHERE code = 'gen_test_report';


-- ── 3. gen_brs — nói rõ giới hạn khi Master Doc chưa đầy đủ ─────────────────
--
-- Master Doc khởi tạo bằng đường import thường chỉ có phần khung. Bản skill cũ nói "Chỉ viết
-- những gì suy ra được từ CR và Master Doc" nhưng không nói phải làm gì khi Master Doc không
-- mô tả tới phần CR đang sửa — chỗ dễ khiến mô hình tự dựng nên một hiện trạng nghe hợp lý.
UPDATE ai_skills SET content = replace(content,
'- Chỉ viết những gì suy ra được từ CR và Master Doc. Thiếu thông tin thì ghi vào mục "Câu hỏi mở", KHÔNG bịa.',
'- Chỉ viết những gì suy ra được từ CR và Master Doc. Thiếu thông tin thì ghi vào mục "Câu hỏi mở", KHÔNG bịa.
- Nếu Master Doc KHÔNG mô tả tới phần mà CR định sửa, mục "Hiện trạng (AS-IS)" phải ghi thẳng
  "Master Doc hiện hành chưa mô tả phần này" và đưa câu hỏi cần làm rõ vào mục "Câu hỏi mở".
  Tuyệt đối không dựng nên một hiện trạng nghe hợp lý để tài liệu trông đầy đủ.')
WHERE code = 'gen_brs';
