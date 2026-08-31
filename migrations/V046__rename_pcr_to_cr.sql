-- V046: Rename PCR (Project Change Request) → CR (Change Request)
-- Thống nhất thuật ngữ "CR" trên toàn hệ thống theo quyết định 2026-07-27.
-- Rename giữ nguyên 100% dữ liệu (không DROP/TRUNCATE) — chạy trong môi trường dev/test.
-- Bổ sung product_id: CR gắn với hệ thống (catalog_products) để merge vào MasterDoc,
-- đồng thời vẫn giữ project_id để truy vết CR sinh ra từ dự án nào.

-- ── 1. Rename table ──────────────────────────────────────────────────────────
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.tables
             WHERE table_schema = 'public' AND table_name = 'project_change_requests') THEN
    ALTER TABLE project_change_requests RENAME TO change_requests;
  END IF;
END $$;

-- ── 2. Rename sequence ───────────────────────────────────────────────────────
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM information_schema.sequences
             WHERE sequence_schema = 'public' AND sequence_name = 'pcr_seq') THEN
    ALTER SEQUENCE pcr_seq RENAME TO cr_seq;
  END IF;
END $$;

-- ── 3. Rename indexes ────────────────────────────────────────────────────────
ALTER INDEX IF EXISTS idx_pcr_project_id RENAME TO idx_cr_project_id;
ALTER INDEX IF EXISTS idx_pcr_status     RENAME TO idx_cr_status;
ALTER INDEX IF EXISTS idx_pcr_priority   RENAME TO idx_cr_priority;

-- ── 4. Rename constraints ────────────────────────────────────────────────────
DO $$
DECLARE
  old_name TEXT;
  new_name TEXT;
BEGIN
  FOR old_name, new_name IN
    SELECT conname,
           replace(conname, 'project_change_requests', 'change_requests')
    FROM pg_constraint
    WHERE conrelid = 'change_requests'::regclass
      AND conname LIKE 'project_change_requests%'
  LOOP
    EXECUTE format('ALTER TABLE change_requests RENAME CONSTRAINT %I TO %I', old_name, new_name);
  END LOOP;
END $$;

-- ── 5. Đổi tiền tố mã: PCR-2026-001 → CR-2026-001 ────────────────────────────
UPDATE change_requests
   SET request_code = 'CR-' || substring(request_code from 5)
 WHERE request_code LIKE 'PCR-%';

-- ── 6. request_history.ref_type: 'pcr' → 'cr' ────────────────────────────────
ALTER TABLE request_history DROP CONSTRAINT IF EXISTS request_history_ref_type_check;
UPDATE request_history SET ref_type = 'cr' WHERE ref_type = 'pcr';
ALTER TABLE request_history
  ADD CONSTRAINT request_history_ref_type_check CHECK (ref_type IN ('cr', 'sr'));

-- ── 7. request_attachments.ref_type: 'pcr' → 'cr' ────────────────────────────
ALTER TABLE request_attachments DROP CONSTRAINT IF EXISTS request_attachments_ref_type_check;
UPDATE request_attachments SET ref_type = 'cr' WHERE ref_type = 'pcr';
ALTER TABLE request_attachments
  ADD CONSTRAINT request_attachments_ref_type_check CHECK (ref_type IN ('cr', 'sr'));

-- ── 8. CR → hệ thống (catalog_products) ──────────────────────────────────────
-- Nullable: CR cũ chưa gán hệ thống; chỉ CR có product_id mới merge được vào MasterDoc.
ALTER TABLE change_requests
  ADD COLUMN IF NOT EXISTS product_id UUID REFERENCES catalog_products(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_cr_product_id ON change_requests(product_id);
