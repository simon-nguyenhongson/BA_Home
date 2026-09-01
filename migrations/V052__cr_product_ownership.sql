-- V052: CR thuộc Product; Project liên kết 1:1 tùy chọn; CR nội bộ cho sửa tay Master Doc.
--
-- Ba quyết định của PO (2026-09-01, trả lời STRATEGY-001 v4.0):
--   Q1: "nếu có project thì sẽ sinh thêm product 1:1. Vẫn có thể có 1 product không có project
--        vì từ giờ trở đi khi tôi mới nhận thì đã có sẵn product trước rồi."
--       → liên kết 1:1 TÙY CHỌN, không cần bảng nhiều-nhiều như v4 đề xuất.
--   Q2: "vẫn giữ ref projectid của cr nhưng không required."
--   Q3: "sửa tay masterdoc đều phải qua duyệt. vẫn là CR nhưng là CR nội bộ có thể bypass
--        BRS, test case và update thẳng vào masterdoc."
--
-- Migration THUẦN ADDITIVE về bảng; có NỚI ràng buộc (bỏ NOT NULL) và SỬA hành vi khóa ngoại.
-- Không xóa cột, không xóa dữ liệu.

-- ── 1. project_id của CR: bỏ NOT NULL (Q2) ───────────────────────────────────
--
-- Hôm nay cột này NOT NULL nên KHÔNG THỂ tạo CR ngoài dự án — đúng nút thắt cần mở.
ALTER TABLE change_requests ALTER COLUMN project_id DROP NOT NULL;

COMMENT ON COLUMN change_requests.project_id IS
    'Dự án tài trợ CR — TÙY CHỌN, chỉ để quy kết nguồn và báo cáo theo kỳ. '
    'Quyền sở hữu CR nằm ở product_id. CR phát sinh sau khi dự án đóng thì để trống.';


-- ── 2. Sửa hành vi khóa ngoại (lỗi N1, N2 trong STRATEGY-001 v4.0) ───────────
--
-- N1: FK cũ là ON DELETE CASCADE → xóa một dự án đã đóng sẽ XÓA SẠCH mọi CR của nó.
--     CR là tri thức của SẢN PHẨM, không được mất theo dự án.
ALTER TABLE change_requests DROP CONSTRAINT IF EXISTS change_requests_project_id_fkey;
ALTER TABLE change_requests
    ADD CONSTRAINT change_requests_project_id_fkey
    FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE SET NULL;

-- N2: FK cũ là ON DELETE SET NULL → xóa sản phẩm làm CR mồ côi trong im lặng,
--     trong khi product_id là quyền sở hữu bắt buộc. Chặn xóa sản phẩm còn CR.
ALTER TABLE change_requests DROP CONSTRAINT IF EXISTS change_requests_product_id_fkey;
ALTER TABLE change_requests
    ADD CONSTRAINT change_requests_product_id_fkey
    FOREIGN KEY (product_id) REFERENCES catalog_products(id) ON DELETE RESTRICT;

COMMENT ON COLUMN change_requests.product_id IS
    'Sản phẩm mà CR thay đổi — QUYỀN SỞ HỮU. Bắt buộc ở tầng ứng dụng với CR tạo mới. '
    'Chưa đặt NOT NULL vì CR cũ (trước V052) chưa gắn sản phẩm.';


-- ── 3. CR nội bộ (Q3) ────────────────────────────────────────────────────────
--
-- standard: CR nghiệp vụ đầy đủ — CR → BRS → duyệt → golive → merge Master Doc → test.
-- internal: CR nội bộ để sửa tay Master Doc — ĐƯỢC bỏ qua BRS và test case, nhưng
--           bản Master Doc sinh ra VẪN phải qua duyệt. Không có đường ghi đè trực tiếp.
ALTER TABLE change_requests
    ADD COLUMN IF NOT EXISTS cr_kind TEXT NOT NULL DEFAULT 'standard';

ALTER TABLE change_requests DROP CONSTRAINT IF EXISTS chk_cr_kind;
ALTER TABLE change_requests
    ADD CONSTRAINT chk_cr_kind CHECK (cr_kind IN ('standard', 'internal'));

CREATE INDEX IF NOT EXISTS idx_cr_kind ON change_requests(cr_kind);

COMMENT ON COLUMN change_requests.cr_kind IS
    'standard = CR nghiệp vụ, phải đi qua BRS và test. '
    'internal = CR nội bộ sửa tay Master Doc, bỏ qua BRS/test nhưng vẫn phải duyệt bản tài liệu.';


-- ── 4. Liên kết Project → Product 1:1 tùy chọn (Q1) ──────────────────────────
--
-- Đặt cột trên catalog_products (bên "nhiều-nhất-là-một") chứ không tạo bảng trung gian:
-- quan hệ 1:1 thì UNIQUE trên một cột nullable là cách biểu diễn gọn và đúng nhất.
--   - Sản phẩm có thể KHÔNG có dự án khai sinh (đa số 28 sản phẩm hiện tại).
--   - Một dự án khai sinh TỐI ĐA một sản phẩm (UNIQUE).
ALTER TABLE catalog_products
    ADD COLUMN IF NOT EXISTS origin_project_id UUID;

ALTER TABLE catalog_products DROP CONSTRAINT IF EXISTS catalog_products_origin_project_fkey;
ALTER TABLE catalog_products
    ADD CONSTRAINT catalog_products_origin_project_fkey
    FOREIGN KEY (origin_project_id) REFERENCES projects(id) ON DELETE SET NULL;

-- UNIQUE trên cột nullable: Postgres cho nhiều NULL, nên vẫn đúng "tối đa 1 sản phẩm/dự án"
-- mà không buộc mọi sản phẩm phải có dự án.
CREATE UNIQUE INDEX IF NOT EXISTS uq_catalog_products_origin_project
    ON catalog_products(origin_project_id)
    WHERE origin_project_id IS NOT NULL;

COMMENT ON COLUMN catalog_products.origin_project_id IS
    'Dự án đã khai sinh sản phẩm này — TÙY CHỌN, tối đa 1 sản phẩm mỗi dự án. '
    'Sản phẩm tiếp nhận từ trước (không sinh từ dự án nào trong hệ) để trống.';


-- ── 5. Nới CHECK source của Master Doc version (lỗi N3) ──────────────────────
--
-- CHECK cũ chỉ cho initial|cr_merge|manual nên KHÔNG phân biệt được 3 đường khởi tạo
-- Master Doc v1 (QĐ-14): AI sinh từ BRD / import file / soạn tay.
ALTER TABLE master_doc_versions DROP CONSTRAINT IF EXISTS master_doc_versions_source_check;
ALTER TABLE master_doc_versions
    ADD CONSTRAINT master_doc_versions_source_check
    CHECK (source IN (
        'initial',       -- giữ lại cho dữ liệu cũ
        'init_ai',       -- AI sinh từ BRD của dự án khai sinh
        'init_import',   -- import tài liệu sẵn có
        'init_manual',   -- soạn trực tiếp trên giao diện
        'cr_merge',      -- merge từ BRS đã golive
        'manual'         -- sửa tay qua CR nội bộ
    ));

-- Liên kết bản Master Doc với CR nội bộ đã sinh ra nó (Q3) — cho phép truy vết
-- "bản này do ai sửa tay, theo CR nội bộ nào, vì sao".
ALTER TABLE master_doc_versions
    ADD COLUMN IF NOT EXISTS internal_cr_id UUID;

ALTER TABLE master_doc_versions DROP CONSTRAINT IF EXISTS fk_mdv_internal_cr;
ALTER TABLE master_doc_versions
    ADD CONSTRAINT fk_mdv_internal_cr
    FOREIGN KEY (internal_cr_id) REFERENCES change_requests(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_mdv_internal_cr ON master_doc_versions(internal_cr_id);
