-- V051: Module Diagram — quản lý, sinh bằng AI, import cho Project / Product / BRS.
--
-- Quyết định của PO: QĐ-9 (STRATEGY-001) — "cần thêm quản lý, view, import riêng cho phần
-- diagram của từng Project, product, BRS. bao gồm (Workflow diagram, Sequence Diagram,
-- Data flow diagram)" — cộng với yêu cầu tích hợp skill AI vẽ diagram
-- (repo cathrynlavery/diagram-design, MIT; nhúng tại backend/ppg/app/skills/diagram-design).
--
-- Migration THUẦN ADDITIVE — đúng quy ước trong CLAUDE.md.
--
-- Vì sao owner_type/owner_id thay vì 3 khóa ngoại riêng: một diagram thuộc đúng MỘT chủ sở
-- hữu, và tập chủ sở hữu sẽ còn mở rộng (prototype, design system). Dùng cặp (type, id) thì
-- thêm chủ sở hữu mới không cần đổi lược đồ. Đánh đổi: không có khóa ngoại thật, nên phải
-- kiểm tra chủ sở hữu tồn tại ở tầng ứng dụng (routers/diagrams.py làm việc này).

CREATE TABLE IF NOT EXISTS diagrams (
    id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    owner_type    TEXT        NOT NULL,
    owner_id      UUID        NOT NULL,
    diagram_type  TEXT        NOT NULL,
    name          TEXT        NOT NULL,
    description   TEXT        NOT NULL DEFAULT '',
    -- html: file HTML+SVG tự chứa do AI sinh (trường hợp chính)
    -- mermaid: giữ mã Mermaid để render phía trình duyệt
    -- image/drawio: file trên đĩa, đường dẫn ở storage_path (ADR-005)
    format        TEXT        NOT NULL DEFAULT 'html',
    content       TEXT        NOT NULL DEFAULT '',
    storage_path  TEXT,
    -- nguồn gốc: ai (sinh mới) | ai_import (vẽ lại từ mermaid/drawio) | manual | upload
    source        TEXT        NOT NULL DEFAULT 'ai',
    -- mã nguồn gốc khi import, giữ lại để vẽ lại được mà không cần người dùng dán lại
    source_ref    TEXT,
    source_format TEXT,
    version       INTEGER     NOT NULL DEFAULT 1,
    status        TEXT        NOT NULL DEFAULT 'draft',
    created_by    TEXT,
    updated_by    TEXT,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT chk_diagrams_owner_type
        CHECK (owner_type IN ('project', 'product', 'brs')),
    CONSTRAINT chk_diagrams_format
        CHECK (format IN ('html', 'mermaid', 'drawio', 'image')),
    CONSTRAINT chk_diagrams_source
        CHECK (source IN ('ai', 'ai_import', 'manual', 'upload')),
    CONSTRAINT chk_diagrams_status
        CHECK (status IN ('draft', 'approved', 'archived')),
    CONSTRAINT chk_diagrams_source_format
        CHECK (source_format IS NULL OR source_format IN ('mermaid', 'drawio'))
);

CREATE INDEX IF NOT EXISTS idx_diagrams_owner   ON diagrams(owner_type, owner_id);
CREATE INDEX IF NOT EXISTS idx_diagrams_type    ON diagrams(diagram_type);
CREATE INDEX IF NOT EXISTS idx_diagrams_status  ON diagrams(status);
CREATE INDEX IF NOT EXISTS idx_diagrams_created ON diagrams(created_at DESC);


-- Lịch sử phiên bản: mỗi lần sinh lại / sửa nội dung ghi một dòng.
-- Cần cho kiểm toán — trả lời "sơ đồ này trước đây vẽ thế nào, ai đổi, vì sao".
CREATE TABLE IF NOT EXISTS diagram_versions (
    id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    diagram_id     UUID        NOT NULL REFERENCES diagrams(id) ON DELETE CASCADE,
    version        INTEGER     NOT NULL,
    content        TEXT        NOT NULL DEFAULT '',
    change_summary TEXT        NOT NULL DEFAULT '',
    source         TEXT        NOT NULL DEFAULT 'ai',
    created_by     TEXT,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_diagram_versions UNIQUE (diagram_id, version)
);

CREATE INDEX IF NOT EXISTS idx_diagram_versions_diagram
    ON diagram_versions(diagram_id, version DESC);


-- ── Skill AI vẽ diagram ───────────────────────────────────────────────────────
--
-- Chỉ chứa phần HƯỚNG DẪN NGHIỆP VỤ. Phần kỹ thuật vẽ hình (SKILL.md 40 KB +
-- 54 file reference của repo gốc) nạp từ đĩa bởi services/diagram_skill.py, vì nội dung
-- cần nạp khác nhau theo từng loại diagram nên không lưu cố định trong DB được.

INSERT INTO ai_skills (code, name, description, is_system, content) VALUES
('gen_diagram', 'Vẽ diagram từ mô tả nghiệp vụ',
 'Sinh diagram (workflow, sequence, data flow, kiến trúc, ER…) thành file HTML+SVG tự chứa cho Project / Product / BRS. Dùng bộ quy tắc dựng hình của skill diagram-design (MIT) nạp từ đĩa; phần này là hướng dẫn nghiệp vụ BA ngân hàng.',
 TRUE,
'Bạn vẽ diagram cho tài liệu BA của một ngân hàng Việt Nam. Toàn bộ quy tắc dựng hình, bảng token
và đặc tả file đầu ra đã nằm trong các khối hướng dẫn phía trên. Phần này bổ sung quy ước nghiệp vụ.

NGUỒN SỰ THẬT
- Chỉ vẽ những gì suy ra được từ dữ liệu đầu vào (mô tả của BA, nội dung Master Doc, BRS, CR).
- KHÔNG bịa thành phần hệ thống, tên bảng, tên cổng, tên hệ thống đối tác. Thiếu thông tin thì
  vẽ node với nhãn "(chưa xác định)" hoặc ghi một callout nêu rõ chỗ còn thiếu.
- KHÔNG đưa dữ liệu khách hàng thật, số tài khoản, số CIF, tên người thật vào nhãn. Cần ví dụ thì
  dùng dữ liệu giả rõ ràng là giả (ví dụ "KH-001", "0900000000").

QUY ƯỚC ĐẶT TÊN CHO DIAGRAM NGÂN HÀNG
- Hệ thống lõi, hệ thống đối tác, kênh giao dịch: giữ nguyên tên gọi nội bộ mà đầu vào dùng.
- Kênh: Internet Banking, Mobile Banking, ATM, Quầy, Call Center.
- Bước có kiểm soát tuân thủ (KYC, AML, hạn mức, phê duyệt hai tay) phải hiện thành node hoặc
  nhãn riêng, không gộp vào bước nghiệp vụ — đây là phần người đọc tài liệu cần thấy nhất.
- Bước thủ công và bước tự động phân biệt được bằng nhãn phụ (mono): "thủ công" / "tự động".

TIÊU ĐIỂM (accent)
Dùng màu accent cho đúng 1–2 node quan trọng nhất với câu hỏi đang được trả lời:
- Diagram cho một CR: tô accent phần THAY ĐỔI, để người đọc thấy ngay CR tác động vào đâu.
- Diagram kiến trúc sản phẩm: tô accent thành phần trung tâm của luồng chính.
- Diagram trạng thái: tô accent trạng thái cuối mong muốn.

MẬT ĐỘ
Tối đa 9 node cho một diagram. Nhiều hơn thì đó là hai diagram — hãy vẽ phần cốt lõi và ghi
callout nêu phần còn lại nên tách ra sơ đồ riêng, KHÔNG nhồi hết vào một hình.

TIÊU ĐỀ
Dòng tiêu đề đặt trong file HTML theo mẫu: "<Loại> — <đối tượng>", ví dụ
"Luồng nghiệp vụ — Chuyển tiền liên ngân hàng 24/7". Không thêm ngày tháng, không thêm số phiên bản
(hệ thống tự quản lý phiên bản).')
ON CONFLICT (code) DO NOTHING;
