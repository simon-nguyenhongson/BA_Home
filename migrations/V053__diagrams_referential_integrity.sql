-- V053: Cho bảng diagrams khóa ngoại thật, thay cặp (owner_type, owner_id) đa hình.
--
-- Vì sao phải sửa: V051 dùng (owner_type, owner_id) để dễ mở rộng chủ sở hữu, nhưng đánh đổi
-- mất toàn vẹn tham chiếu. Rà soát 2026-09-01 cho thấy đây KHÔNG phải rủi ro lý thuyết:
--   DELETE /requests/change-requests/{id}
--     → cr_brs_documents CASCADE (BRS bị xóa)
--       → sơ đồ gắn owner_type='brs' còn nguyên, trỏ vào một BRS không còn tồn tại.
--   Sơ đồ mồ côi không hiện ở màn nào (mọi truy vấn đều lọc theo owner) nên KHÔNG AI THẤY
--   để dọn — nó nằm lại trong DB vĩnh viễn và vào cả bản sao lưu.
-- Với tài liệu kiểm toán ngân hàng, dữ liệu không truy được nguồn là dữ liệu không dùng được.
--
-- Cách sửa: 3 cột khóa ngoại nullable + CHECK "đúng một cột khác NULL". Đây là mẫu chuẩn cho
-- quan hệ đa hình khi vẫn muốn giữ toàn vẹn. Mở rộng chủ sở hữu về sau (prototype, design
-- system) chỉ cần thêm một cột + sửa CHECK — vẫn là migration additive.
--
-- Hợp đồng API KHÔNG đổi: router vẫn nhận/trả owner_type + owner_id, tự chuyển đổi.
-- Bảng đang có 0 dòng trên môi trường thật nên đổi lược đồ là an toàn.

-- ── 1. Thêm 3 cột khóa ngoại ─────────────────────────────────────────────────
ALTER TABLE diagrams ADD COLUMN IF NOT EXISTS project_id UUID;
ALTER TABLE diagrams ADD COLUMN IF NOT EXISTS product_id UUID;
ALTER TABLE diagrams ADD COLUMN IF NOT EXISTS brs_id     UUID;

-- ── 2. Chuyển dữ liệu cũ (nếu có) ────────────────────────────────────────────
UPDATE diagrams SET project_id = owner_id WHERE owner_type = 'project' AND project_id IS NULL;
UPDATE diagrams SET product_id = owner_id WHERE owner_type = 'product' AND product_id IS NULL;
UPDATE diagrams SET brs_id     = owner_id WHERE owner_type = 'brs'     AND brs_id     IS NULL;

-- Dòng trỏ vào chủ sở hữu đã biến mất thì không thêm được khóa ngoại — xóa và ghi lại số lượng.
DO $$
DECLARE orphans INTEGER;
BEGIN
    DELETE FROM diagrams d
     WHERE (d.project_id IS NOT NULL AND NOT EXISTS (SELECT 1 FROM projects p WHERE p.id = d.project_id))
        OR (d.product_id IS NOT NULL AND NOT EXISTS (SELECT 1 FROM catalog_products c WHERE c.id = d.product_id))
        OR (d.brs_id     IS NOT NULL AND NOT EXISTS (SELECT 1 FROM cr_brs_documents b WHERE b.id = d.brs_id));
    GET DIAGNOSTICS orphans = ROW_COUNT;
    IF orphans > 0 THEN
        RAISE NOTICE 'V053: đã xóa % sơ đồ mồ côi (chủ sở hữu không còn tồn tại)', orphans;
    END IF;
END $$;

-- ── 3. Khóa ngoại + CHECK đúng-một ───────────────────────────────────────────
ALTER TABLE diagrams DROP CONSTRAINT IF EXISTS fk_diagrams_project;
ALTER TABLE diagrams
    ADD CONSTRAINT fk_diagrams_project
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE;

ALTER TABLE diagrams DROP CONSTRAINT IF EXISTS fk_diagrams_product;
ALTER TABLE diagrams
    ADD CONSTRAINT fk_diagrams_product
    FOREIGN KEY (product_id) REFERENCES catalog_products(id) ON DELETE CASCADE;

ALTER TABLE diagrams DROP CONSTRAINT IF EXISTS fk_diagrams_brs;
ALTER TABLE diagrams
    ADD CONSTRAINT fk_diagrams_brs
    FOREIGN KEY (brs_id) REFERENCES cr_brs_documents(id) ON DELETE CASCADE;

ALTER TABLE diagrams DROP CONSTRAINT IF EXISTS chk_diagrams_exactly_one_owner;
ALTER TABLE diagrams
    ADD CONSTRAINT chk_diagrams_exactly_one_owner
    CHECK (
        (project_id IS NOT NULL)::int
      + (product_id IS NOT NULL)::int
      + (brs_id     IS NOT NULL)::int = 1
    );

-- ── 4. owner_type/owner_id trở thành cột dẫn xuất ────────────────────────────
--
-- Giữ lại để không phải sửa mọi truy vấn và index sẵn có, nhưng buộc phải khớp với 3 khóa
-- ngoại — không còn cách nào để hai bên lệch nhau.
--
-- ⚠️ Viết dạng COALESCE/CASE chứ KHÔNG viết ba nhánh "(owner_type='x' AND owner_id=x_id) OR …".
-- Dạng ba nhánh trông đúng nhưng KHÔNG chặn được gì, vì logic ba giá trị của SQL:
-- với owner_type='project', product_id=<uuid>, project_id=NULL thì nhánh đầu là
-- `owner_id = NULL` → NULL, hai nhánh sau false, và `NULL OR false` = NULL — CHECK coi như
-- ĐẠT. Đã kiểm chứng: bản đầu của migration này để lọt đúng trường hợp đó.
ALTER TABLE diagrams ALTER COLUMN owner_id SET NOT NULL;
ALTER TABLE diagrams DROP CONSTRAINT IF EXISTS chk_diagrams_owner_type;
ALTER TABLE diagrams DROP CONSTRAINT IF EXISTS chk_diagrams_owner_consistent;
ALTER TABLE diagrams
    ADD CONSTRAINT chk_diagrams_owner_consistent
    CHECK (
        owner_id = COALESCE(project_id, product_id, brs_id)
        AND owner_type = CASE
            WHEN project_id IS NOT NULL THEN 'project'
            WHEN product_id IS NOT NULL THEN 'product'
            ELSE 'brs'
        END
    );

CREATE INDEX IF NOT EXISTS idx_diagrams_project ON diagrams(project_id) WHERE project_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_diagrams_product ON diagrams(product_id) WHERE product_id IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_diagrams_brs     ON diagrams(brs_id)     WHERE brs_id     IS NOT NULL;

COMMENT ON COLUMN diagrams.owner_type IS
    'project | product | brs — phải khớp với cột khóa ngoại tương ứng (CHECK chk_diagrams_owner_consistent). '
    'Giữ lại cho hợp đồng API; nguồn sự thật là project_id / product_id / brs_id.';
