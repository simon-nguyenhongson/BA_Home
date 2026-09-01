-- V056: Lưu trữ test case thế hệ 1; gộp Test và Automation thành một module (QĐ-3).
--
-- Bối cảnh: hệ thống có HAI thế hệ chức năng test nằm cạnh nhau, không phải do thiết kế mà do
-- nợ kỹ thuật. Rà soát 2026-09-01 (STRATEGY-001 v5.3, Mục 7.10):
--
--   Thế hệ 1 — service test-platform :8003, bảng test_cases + brs_sync
--     · test_cases.brs_id kiểu VARCHAR(100) trỏ bảng brs_sync
--     · luồng BA dùng cr_brs_documents.id kiểu UUID
--     → hai bên VĨNH VIỄN không tham chiếu nhau được mà không đổi lược đồ
--
--   Thế hệ 2 — PPG :8001, automation_test_tasks/_cases/_runs
--     · chuỗi CR → BRS → task → test case → Capture Studio → lượt chạy → báo cáo → đóng
--
-- QĐ-3 của PO: "Testcase gom chung vào 1 hệ không tách riêng, đi theo hướng automation."
--
-- Migration này KHÔNG xóa bảng nào của thế hệ 1 (test_documents vẫn dùng, đã chuyển sang hiển
-- thị ở trang Tài liệu). Chỉ dọn 8 dòng test_cases vì chúng không phải test case:

-- Bằng chứng — tiêu đề thật của các dòng đó:
--   [2. Use Cases] **UC-01**: User Authentication
--   [3. Non-Functional Requirements] **Performance**
-- Đó là MẢNH TIÊU ĐỀ MARKDOWN bị generator thế hệ 1 bóc ra từ tài liệu, không phải test case:
-- không có precondition, không có bước thao tác, expected_result là chính câu yêu cầu, và
-- playwright_script chỉ có phần khung `import { test, expect } from …`. 8 dòng thực chất là
-- 4 dòng nhân đôi.
--
-- Giữ bản lưu trữ thay vì xóa thẳng: đây là bằng chứng cho quyết định bỏ generator thế hệ 1,
-- và nếu sau này cần đối chiếu thì vẫn tra được.

CREATE TABLE IF NOT EXISTS test_cases_legacy_archive (
    id                UUID        NOT NULL,
    brs_id            TEXT,
    brs_sync_id       UUID,
    title             TEXT        NOT NULL,
    module            TEXT,
    steps             JSONB,
    expected_result   TEXT,
    playwright_script TEXT,
    status            TEXT,
    created_at        TIMESTAMPTZ,
    archived_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    archive_reason    TEXT        NOT NULL DEFAULT ''
);

INSERT INTO test_cases_legacy_archive
    (id, brs_id, brs_sync_id, title, module, steps, expected_result,
     playwright_script, status, created_at, archive_reason)
SELECT id, brs_id, brs_sync_id, title, module, steps, expected_result,
       playwright_script, status, created_at,
       'Generator BRS→testcase thế hệ 1 chỉ bóc bullet: tiêu đề là mảnh heading Markdown, '
       'script chỉ có phần khung. Bỏ theo QĐ-3 (gom về một hệ automation).'
  FROM test_cases
 WHERE NOT EXISTS (
        SELECT 1 FROM test_cases_legacy_archive a WHERE a.id = test_cases.id
 );

-- test_defects trỏ test_cases bằng ON DELETE SET NULL nên xóa an toàn, không mất bug report.
DELETE FROM test_cases;

COMMENT ON TABLE test_cases_legacy_archive IS
    'Lưu trữ test case của generator thế hệ 1 (V056). Chỉ để đối chiếu — test case đang dùng '
    'nằm ở automation_test_cases, gắn với BRS qua automation_test_tasks.';

COMMENT ON TABLE test_cases IS
    'THẾ HỆ 1 — không còn được ghi từ giao diện. Test case hiện dùng: automation_test_cases. '
    'Giữ bảng để service test-platform không lỗi khi khởi động; gỡ khi gỡ hẳn service đó.';
