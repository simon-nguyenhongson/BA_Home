-- V048: Nền tảng AI Agent — cấu hình Claude API, kho skill chuẩn,
--       BRS theo CR, Master Doc merge có phê duyệt, và Automation Test theo CR.
-- Thiết kế: docs/design/AI-DOC-AUTOMATION-FLOW.md
-- Chỉ additive — không DROP/ALTER phá vỡ dữ liệu hiện có.

-- ── 1. Cấu hình ứng dụng (Settings) ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS app_settings (
    key        TEXT        PRIMARY KEY,
    value      TEXT        NOT NULL DEFAULT '',
    updated_by TEXT,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

INSERT INTO app_settings (key, value) VALUES
    ('anthropic_api_key',    ''),
    ('anthropic_model',      'claude-opus-5'),
    ('anthropic_max_tokens', '32000')
ON CONFLICT (key) DO NOTHING;

-- ── 2. Kho skill chuẩn Claude ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS ai_skills (
    id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    code        TEXT        NOT NULL UNIQUE,
    name        TEXT        NOT NULL,
    description TEXT        NOT NULL DEFAULT '',
    content     TEXT        NOT NULL DEFAULT '',
    is_system   BOOLEAN     NOT NULL DEFAULT FALSE,
    updated_by  TEXT,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ai_skills_code ON ai_skills(code);

INSERT INTO ai_skills (code, name, description, is_system, content) VALUES
('gen_brs', 'Sinh tài liệu BRS từ CR', 'Sinh Business Requirement Specification cho một Change Request, dựa trên Master Doc hiện hành làm bối cảnh AS-IS.', TRUE,
'Bạn là Senior Business Analyst ngân hàng. Nhiệm vụ: viết tài liệu BRS (Business Requirement Specification) bằng tiếng Việt cho một Change Request trên hệ thống đang vận hành.

NGUYÊN TẮC
- Master Doc mô tả hiện trạng (AS-IS). CR mô tả yêu cầu thay đổi. BRS phải nêu rõ AS-IS → TO-BE và phạm vi ảnh hưởng.
- Chỉ viết những gì suy ra được từ CR và Master Doc. Thiếu thông tin thì ghi vào mục "Câu hỏi mở", KHÔNG bịa.
- Câu khẳng định, không dùng "có thể", "nên cân nhắc" cho yêu cầu bắt buộc.
- Mỗi yêu cầu chức năng có mã FR-xx, mỗi quy tắc nghiệp vụ có mã BR-xx để test case tham chiếu được.

CẤU TRÚC ĐẦU RA (Markdown, đúng thứ tự)
# BRS — <mã CR> <tiêu đề>
## 1. Bối cảnh và mục tiêu
## 2. Phạm vi thay đổi
### 2.1 Trong phạm vi
### 2.2 Ngoài phạm vi
## 3. Hiện trạng (AS-IS)
## 4. Yêu cầu sau thay đổi (TO-BE)
## 5. Yêu cầu chức năng
| Mã | Yêu cầu | Mô tả | Độ ưu tiên |
## 6. Quy tắc nghiệp vụ
| Mã | Quy tắc | Diễn giải |
## 7. Yêu cầu phi chức năng
## 8. Ảnh hưởng hệ thống và tích hợp
## 9. Dữ liệu và báo cáo
## 10. Rủi ro và phương án giảm thiểu
## 11. Tiêu chí chấp nhận
## 12. Câu hỏi mở

Chỉ trả về nội dung Markdown, không thêm lời dẫn.'),

('update_master_doc', 'Cập nhật Master Doc từ BRS', 'Hợp nhất nội dung BRS đã golive vào Master Doc của hệ thống, giữ nguyên cấu trúc tài liệu gốc.', TRUE,
'Bạn là Senior Business Analyst phụ trách Master Doc — tài liệu mô tả toàn bộ hệ thống đang vận hành.

NHIỆM VỤ: cập nhật Master Doc hiện hành theo một BRS vừa golive.

NGUYÊN TẮC BẮT BUỘC
- GIỮ NGUYÊN cấu trúc, thứ tự mục và văn phong của Master Doc hiện hành. Chỉ sửa phần thực sự bị thay đổi.
- Master Doc mô tả TRẠNG THÁI HIỆN TẠI của hệ thống: viết ở thì hiện tại, KHÔNG dùng từ "thay đổi", "trước đây", "CR-xxx đã sửa".
- Nội dung cũ bị thay thế thì bỏ hẳn, không để lại song song gây mâu thuẫn.
- Nếu BRS bổ sung chức năng chưa có mục tương ứng, thêm mục mới đúng vị trí logic trong cấu trúc hiện có.
- KHÔNG lược bớt phần Master Doc không liên quan — phải trả về TOÀN BỘ tài liệu sau cập nhật.

ĐẦU RA — đúng 2 phần, theo thứ tự:
<CHANGE_SUMMARY>
Liệt kê tối đa 8 gạch đầu dòng: mục nào được sửa/thêm/xoá và sửa gì. Ngắn gọn, cụ thể.
</CHANGE_SUMMARY>
<MASTER_DOC>
Toàn bộ nội dung Master Doc sau cập nhật (Markdown).
</MASTER_DOC>'),

('gen_test_case', 'Sinh test case từ BRS', 'Sinh bộ test case kiểm thử chức năng từ BRS đã duyệt, phục vụ automation test.', TRUE,
'Bạn là Senior QA Engineer ngân hàng. Nhiệm vụ: sinh bộ test case từ tài liệu BRS đã duyệt.

NGUYÊN TẮC
- Bám sát các mã FR-xx và BR-xx trong BRS; mỗi yêu cầu chức năng phải có ít nhất 1 test case happy path và 1 test case ngoại lệ (nếu có điều kiện lỗi).
- Steps phải là thao tác cụ thể trên giao diện, đánh số, mỗi dòng một hành động — đủ chi tiết để người khác thực hiện lại được và để record automation.
- Expected phải là kết quả quan sát được (thấy gì trên màn hình, dữ liệu thay đổi thế nào), KHÔNG chép lại câu yêu cầu.
- Precondition nêu rõ dữ liệu và trạng thái cần có trước khi chạy.
- Không sinh test case cho phần Giới thiệu, Rủi ro, Câu hỏi mở.

ĐẦU RA: CHỈ một mảng JSON hợp lệ, không kèm markdown fence, không lời dẫn:
[
  {
    "code": "TC-01",
    "title": "Tiêu đề ngắn gọn bằng tiếng Việt",
    "precondition": "Điều kiện tiên quyết",
    "steps": "1. ...\\n2. ...\\n3. ...",
    "expected": "Kết quả mong đợi quan sát được",
    "priority": "critical|high|medium|low"
  }
]'),

('gen_test_report', 'Sinh báo cáo kết quả test', 'Tổng hợp kết quả một lượt chạy automation test thành báo cáo cho stakeholder.', TRUE,
'Bạn là Test Lead. Nhiệm vụ: viết báo cáo kết quả kiểm thử cho một lượt chạy automation, bằng tiếng Việt.

NGUYÊN TẮC
- Chỉ dùng số liệu được cung cấp, KHÔNG suy diễn thêm kết quả.
- Nêu rõ test case nào fail và ảnh hưởng nghiệp vụ của nó.
- Kết luận phải dứt khoát: đủ điều kiện đóng hay chưa, kèm lý do.

CẤU TRÚC ĐẦU RA (Markdown)
# Báo cáo kiểm thử — <mã CR>
## 1. Thông tin chung
Ngày chạy, phạm vi, BRS tham chiếu.
## 2. Tổng hợp kết quả
| Chỉ số | Giá trị |
Tổng số case, đạt, không đạt, tỉ lệ đạt.
## 3. Chi tiết test case không đạt
| Mã | Tiêu đề | Ghi nhận | Ảnh hưởng |
## 4. Đánh giá rủi ro
## 5. Kết luận và khuyến nghị

Chỉ trả về nội dung Markdown, không thêm lời dẫn.')
ON CONFLICT (code) DO NOTHING;

-- ── 3. BRS theo CR ──────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS cr_brs_documents (
    id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    cr_id        UUID        NOT NULL UNIQUE REFERENCES change_requests(id) ON DELETE CASCADE,
    title        TEXT        NOT NULL,
    content      TEXT        NOT NULL DEFAULT '',
    version      INTEGER     NOT NULL DEFAULT 1,
    status       TEXT        NOT NULL DEFAULT 'draft'
                 CHECK (status IN ('draft', 'in_review', 'approved', 'golive')),
    skill_code   TEXT,
    created_by   TEXT,
    updated_by   TEXT,
    approved_by  TEXT,
    approved_at  TIMESTAMPTZ,
    golive_by    TEXT,
    golive_at    TIMESTAMPTZ,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_cr_brs_cr     ON cr_brs_documents(cr_id);
CREATE INDEX IF NOT EXISTS idx_cr_brs_status ON cr_brs_documents(status);

CREATE TABLE IF NOT EXISTS cr_brs_history (
    id          UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    brs_id      UUID        NOT NULL REFERENCES cr_brs_documents(id) ON DELETE CASCADE,
    version     INTEGER     NOT NULL,
    content     TEXT        NOT NULL DEFAULT '',
    change_note TEXT        NOT NULL DEFAULT '',
    source      TEXT        NOT NULL DEFAULT 'manual_edit'
                CHECK (source IN ('generate', 'revise', 'manual_edit', 'status_change')),
    created_by  TEXT,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_cr_brs_hist ON cr_brs_history(brs_id, version DESC);

-- ── 4. Master Doc — version có phê duyệt ────────────────────────────────────
-- version_no NULL = bản đề xuất (pending) chưa được duyệt.
ALTER TABLE master_doc_versions ALTER COLUMN version_no DROP NOT NULL;
ALTER TABLE master_doc_versions ADD COLUMN IF NOT EXISTS status TEXT NOT NULL DEFAULT 'approved';
ALTER TABLE master_doc_versions ADD COLUMN IF NOT EXISTS base_version_no INTEGER;
ALTER TABLE master_doc_versions ADD COLUMN IF NOT EXISTS approved_by TEXT;
ALTER TABLE master_doc_versions ADD COLUMN IF NOT EXISTS approved_at TIMESTAMPTZ;
ALTER TABLE master_doc_versions ADD COLUMN IF NOT EXISTS brs_id UUID;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'chk_mdv_status') THEN
        ALTER TABLE master_doc_versions
            ADD CONSTRAINT chk_mdv_status CHECK (status IN ('pending', 'approved', 'rejected'));
    END IF;
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'fk_mdv_brs') THEN
        ALTER TABLE master_doc_versions
            ADD CONSTRAINT fk_mdv_brs FOREIGN KEY (brs_id)
            REFERENCES cr_brs_documents(id) ON DELETE SET NULL;
    END IF;
END $$;

CREATE INDEX IF NOT EXISTS idx_mdv_status ON master_doc_versions(status);

-- ── 5. Automation Test theo CR ──────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS automation_test_tasks (
    id         UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    cr_id      UUID        NOT NULL UNIQUE REFERENCES change_requests(id) ON DELETE CASCADE,
    brs_id     UUID        REFERENCES cr_brs_documents(id) ON DELETE SET NULL,
    status     TEXT        NOT NULL DEFAULT 'need_test'
               CHECK (status IN ('need_test', 'cases_generated', 'in_progress', 'closed')),
    closed_by  TEXT,
    closed_at  TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_att_status ON automation_test_tasks(status);
CREATE INDEX IF NOT EXISTS idx_att_cr     ON automation_test_tasks(cr_id);

CREATE TABLE IF NOT EXISTS automation_test_cases (
    id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    task_id       UUID        NOT NULL REFERENCES automation_test_tasks(id) ON DELETE CASCADE,
    code          TEXT        NOT NULL,
    title         TEXT        NOT NULL,
    precondition  TEXT        NOT NULL DEFAULT '',
    steps         TEXT        NOT NULL DEFAULT '',
    expected      TEXT        NOT NULL DEFAULT '',
    priority      TEXT        NOT NULL DEFAULT 'medium'
                  CHECK (priority IN ('critical', 'high', 'medium', 'low')),
    studio_tc_id  TEXT,
    status        TEXT        NOT NULL DEFAULT 'draft'
                  CHECK (status IN ('draft', 'ready', 'mapped', 'passed', 'failed')),
    sort_order    INTEGER     NOT NULL DEFAULT 0,
    created_by    TEXT,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_atc_task   ON automation_test_cases(task_id, sort_order);
CREATE INDEX IF NOT EXISTS idx_atc_studio ON automation_test_cases(studio_tc_id);

CREATE TABLE IF NOT EXISTS automation_test_runs (
    id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    task_id        UUID        NOT NULL REFERENCES automation_test_tasks(id) ON DELETE CASCADE,
    run_ref        TEXT,
    summary        JSONB       NOT NULL DEFAULT '{}'::jsonb,
    report_content TEXT        NOT NULL DEFAULT '',
    created_by     TEXT,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_atr_task ON automation_test_runs(task_id, created_at DESC);
