-- V049: Sửa audit log — NFR-007 banking-grade compliance.
--
-- Vấn đề phát hiện khi chạy thật (2026-08-31):
--   1. Cả 3 service ghi audit vào bảng `ppg_audit_log`, nhưng bảng này chỉ được tạo trong
--      infra/migrate_annual_plans_v2.sql — file không nằm trong migrate.bat trước bản vá,
--      nên nhiều DB không hề có bảng → MỌI bản ghi audit bị mất im lặng
--      (audit_service nuốt lỗi theo thiết kế để không chặn nghiệp vụ).
--   2. Ngay cả khi có bảng, định nghĩa gốc thiếu 3 cột mà code INSERT vào:
--      ip_address, user_agent, notes → INSERT luôn lỗi.
--
-- Migration này tạo bảng nếu chưa có và bổ sung đủ cột. Chỉ additive.

CREATE TABLE IF NOT EXISTS ppg_audit_log (
    id          UUID         PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type VARCHAR(100) NOT NULL,
    entity_id   VARCHAR(255) NOT NULL,
    action      VARCHAR(50)  NOT NULL,
    changed_by  VARCHAR(255) NOT NULL,
    old_values  JSONB,
    new_values  JSONB,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

-- Các cột audit_service ghi vào nhưng định nghĩa gốc thiếu
ALTER TABLE ppg_audit_log ADD COLUMN IF NOT EXISTS ip_address TEXT;
ALTER TABLE ppg_audit_log ADD COLUMN IF NOT EXISTS user_agent TEXT;
ALTER TABLE ppg_audit_log ADD COLUMN IF NOT EXISTS notes      TEXT;

-- changed_by có thể trống với thao tác hệ thống (sync liên service)
ALTER TABLE ppg_audit_log ALTER COLUMN changed_by DROP NOT NULL;

CREATE INDEX IF NOT EXISTS idx_ppg_audit_entity  ON ppg_audit_log(entity_type, entity_id);
CREATE INDEX IF NOT EXISTS idx_ppg_audit_created ON ppg_audit_log(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ppg_audit_actor   ON ppg_audit_log(changed_by, created_at DESC);
