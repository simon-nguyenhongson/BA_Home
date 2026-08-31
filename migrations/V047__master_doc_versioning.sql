-- V047: MasterDoc của hệ thống + lịch sử phiên bản + truy vết CR đã merge
--
-- Mô hình cây:
--   catalog_products (hệ thống)
--     └── master_documents        (1 MasterDoc / hệ thống — nội dung HEAD hiện tại)
--           └── master_doc_versions      (mỗi lần cập nhật = 1 phiên bản, giữ full snapshot)
--                 └── master_doc_version_crs  (các CR đã merge tạo ra phiên bản đó)
--
-- Nội dung CR được snapshot bất biến tại thời điểm merge (cr_code/cr_title/cr_description...)
-- để lịch sử vẫn đọc được kể cả khi CR gốc bị sửa hoặc xoá — yêu cầu audit banking-grade.

-- ── 1. MasterDoc — 1 tài liệu gốc cho mỗi hệ thống ───────────────────────────
CREATE TABLE IF NOT EXISTS master_documents (
    id                 UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    product_id         UUID        NOT NULL UNIQUE REFERENCES catalog_products(id) ON DELETE CASCADE,
    title              TEXT        NOT NULL,
    content            TEXT        NOT NULL DEFAULT '',
    current_version    TEXT        NOT NULL DEFAULT 'v1.0',
    current_version_no INTEGER     NOT NULL DEFAULT 1,
    status             TEXT        NOT NULL DEFAULT 'active'
                       CHECK (status IN ('draft', 'active', 'archived')),
    created_by         TEXT,
    updated_by         TEXT,
    created_at         TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at         TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_master_docs_product ON master_documents(product_id);
CREATE INDEX IF NOT EXISTS idx_master_docs_status  ON master_documents(status);

-- ── 2. Phiên bản — mỗi node là 1 "folder" trên cây lịch sử ───────────────────
CREATE TABLE IF NOT EXISTS master_doc_versions (
    id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    master_doc_id  UUID        NOT NULL REFERENCES master_documents(id) ON DELETE CASCADE,
    version_no     INTEGER     NOT NULL,
    version        TEXT        NOT NULL,
    content        TEXT        NOT NULL DEFAULT '',
    change_summary TEXT        NOT NULL DEFAULT '',
    source         TEXT        NOT NULL DEFAULT 'manual'
                   CHECK (source IN ('initial', 'cr_merge', 'manual')),
    created_by     TEXT,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (master_doc_id, version_no)
);

CREATE INDEX IF NOT EXISTS idx_mdv_doc     ON master_doc_versions(master_doc_id, version_no DESC);
CREATE INDEX IF NOT EXISTS idx_mdv_source  ON master_doc_versions(source);

-- ── 3. CR đã merge vào từng phiên bản — node lá của cây ──────────────────────
CREATE TABLE IF NOT EXISTS master_doc_version_crs (
    id             UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
    version_id     UUID        NOT NULL REFERENCES master_doc_versions(id) ON DELETE CASCADE,
    master_doc_id  UUID        NOT NULL REFERENCES master_documents(id) ON DELETE CASCADE,
    cr_id          UUID        REFERENCES change_requests(id) ON DELETE SET NULL,

    -- snapshot bất biến của CR tại thời điểm merge
    cr_code        TEXT        NOT NULL,
    cr_title       TEXT        NOT NULL,
    cr_description TEXT        NOT NULL DEFAULT '',
    cr_change_type TEXT,
    cr_priority    TEXT,
    cr_notes       TEXT,

    -- truy vết về dự án đã sinh ra CR
    project_id     UUID        REFERENCES projects(id) ON DELETE SET NULL,
    project_code   TEXT,
    project_name   TEXT,

    merged_by      TEXT,
    merged_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE (version_id, cr_id)
);

CREATE INDEX IF NOT EXISTS idx_mdvc_version ON master_doc_version_crs(version_id);
CREATE INDEX IF NOT EXISTS idx_mdvc_doc     ON master_doc_version_crs(master_doc_id);
CREATE INDEX IF NOT EXISTS idx_mdvc_cr      ON master_doc_version_crs(cr_id);
