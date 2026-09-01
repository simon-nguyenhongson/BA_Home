-- V055: Skill hệ thống chuyển sang dạng THƯ MỤC; cột content trong DB đổi vai trò.
--
-- Câu hỏi của PO (2026-09-01): *"tại sao skill lại chỉ có dạng MD, nó phải có dạng chuẩn của
-- claude chứ dạng folder cơ mà, có ref, có template đồ này nọ chứ"* — đúng. Từ V055, 5 skill
-- của luồng BA nằm ở backend/ppg/app/skills/<tên>/ theo chuẩn Claude skill:
--
--   gen-brs/            SKILL.md · templates/brs-structure.md
--                       references/quality-checklist.md · references/banking-domain.md
--   revise-brs/         SKILL.md · references/edit-discipline.md
--   update-master-doc/  SKILL.md · templates/output-format.md
--   gen-test-case/      SKILL.md · templates/case-schema.md
--                       references/banking-test-patterns.md
--   gen-test-report/    SKILL.md · templates/report-structure.md
--   diagram-design/     (đã có từ V051 — nhúng từ repo MIT)
--
-- ĐỔI VAI TRÒ CỘT `ai_skills.content`:
--   trước V055 = toàn bộ hướng dẫn
--   từ  V055  = PHẦN BỔ SUNG của đơn vị, được NỐI THÊM vào sau hướng dẫn trên đĩa
--
-- Vì sao không xóa cột: PO vẫn cần chỗ tinh chỉnh ngay trên giao diện mà không chờ deploy
-- (ví dụ "mọi BRS phải nêu số hiệu Thông tư liên quan"). Đặt phần đó ở khối system riêng nên
-- sửa nó không làm mất hiệu lực prompt cache của hướng dẫn và reference.
--
-- Hướng dẫn cũ trong DB được DỌN vì đã có bản đầy đủ hơn trên đĩa — để lại sẽ thành hướng dẫn
-- trùng lặp, hai nguồn nói cùng một việc bằng hai cách.

-- Lưu bản cũ lại để đối chiếu nếu cần, rồi mới dọn.
CREATE TABLE IF NOT EXISTS ai_skills_legacy_content (
    skill_code   TEXT        NOT NULL,
    content      TEXT        NOT NULL,
    archived_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    note         TEXT        NOT NULL DEFAULT ''
);

INSERT INTO ai_skills_legacy_content (skill_code, content, note)
SELECT code, content,
       'Hướng dẫn dạng một khối văn bản trước V055; đã chuyển sang thư mục skill trên đĩa'
  FROM ai_skills
 WHERE is_system = TRUE
   AND code IN ('gen_brs', 'revise_brs', 'update_master_doc',
                'gen_test_case', 'gen_test_report', 'gen_diagram')
   AND LENGTH(TRIM(content)) > 0
   AND NOT EXISTS (
        SELECT 1 FROM ai_skills_legacy_content l WHERE l.skill_code = ai_skills.code
   );

-- Dọn hướng dẫn cũ khỏi 5 skill có thư mục. gen_diagram GIỮ NGUYÊN nội dung DB vì với skill đó
-- phần trên đĩa là quy tắc dựng hình (nhúng từ repo ngoài), còn phần trong DB là quy ước nghiệp
-- vụ ngân hàng do BA_Home tự viết — hai phần khác nhau, không trùng.
UPDATE ai_skills
   SET content = '',
       description = description,
       updated_at = NOW()
 WHERE code IN ('gen_brs', 'revise_brs', 'update_master_doc',
                'gen_test_case', 'gen_test_report');

-- Đổi mô tả cho khớp cách dùng mới
UPDATE ai_skills SET name = 'Sinh tài liệu BRS từ CR',
    description = 'Thư mục gen-brs/ — SKILL.md + template cấu trúc 12 mục + reference bối cảnh ngân hàng và bộ tự kiểm. Phần nội dung dưới đây là bổ sung của đơn vị (tùy chọn).'
 WHERE code = 'gen_brs';
UPDATE ai_skills SET
    description = 'Thư mục revise-brs/ — SKILL.md + reference ranh giới sửa vs viết lại. Phần nội dung dưới đây là bổ sung của đơn vị (tùy chọn).'
 WHERE code = 'revise_brs';
UPDATE ai_skills SET
    description = 'Thư mục update-master-doc/ — SKILL.md + template hai khối thẻ đầu ra. Phần nội dung dưới đây là bổ sung của đơn vị (tùy chọn).'
 WHERE code = 'update_master_doc';
UPDATE ai_skills SET
    description = 'Thư mục gen-test-case/ — SKILL.md + template lược đồ JSON + reference mẫu case hay bỏ sót. Phần nội dung dưới đây là bổ sung của đơn vị (tùy chọn).'
 WHERE code = 'gen_test_case';
UPDATE ai_skills SET
    description = 'Thư mục gen-test-report/ — SKILL.md + template cấu trúc báo cáo. Phần nội dung dưới đây là bổ sung của đơn vị (tùy chọn).'
 WHERE code = 'gen_test_report';

COMMENT ON COLUMN ai_skills.content IS
    'Với skill có thư mục trên đĩa: PHẦN BỔ SUNG của đơn vị, nối thêm sau hướng dẫn trên đĩa. '
    'Với skill do người dùng tự tạo: toàn bộ hướng dẫn. Xem services/skill_loader.py.';
