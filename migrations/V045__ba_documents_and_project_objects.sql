-- V045: Create missing tables for BA Workflow (ba_documents_v2) and PPG (project_objects)
-- These tables are referenced in code but missing from init.sql and prior migrations.
-- Note: projects.id and project_milestones.id are UUID type.

-- ============================================================================
-- 1. ppg_project_objects — FR-023, FR-024, FR-025 (ADR-004)
-- ============================================================================
CREATE TABLE IF NOT EXISTS ppg_project_objects (
    id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id    UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    object_type   TEXT NOT NULL CHECK (object_type IN ('web_app','mobile_app','api','elt')),
    name          TEXT NOT NULL,
    code          TEXT NOT NULL,
    description   TEXT,
    owner         TEXT,
    status        TEXT NOT NULL DEFAULT 'active',
    standard_info JSONB NOT NULL DEFAULT '{}',
    created_by    TEXT,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(project_id, code)
);

CREATE INDEX IF NOT EXISTS idx_ppg_project_objects_project ON ppg_project_objects(project_id);
CREATE INDEX IF NOT EXISTS idx_ppg_project_objects_type    ON ppg_project_objects(object_type);

-- ============================================================================
-- 2. ppg_object_connections — FR-026 (object relationship graph)
-- ============================================================================
CREATE TABLE IF NOT EXISTS ppg_object_connections (
    id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    source_object_id  UUID NOT NULL REFERENCES ppg_project_objects(id) ON DELETE CASCADE,
    target_object_id  UUID NOT NULL REFERENCES ppg_project_objects(id) ON DELETE CASCADE,
    connection_type   TEXT NOT NULL CHECK (connection_type IN ('api_call','data_feed','event','file_transfer','db_sync','other')),
    protocol          TEXT,
    frequency         TEXT,
    description       TEXT,
    created_by        TEXT,
    created_at        TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(source_object_id, target_object_id, connection_type)
);

-- ============================================================================
-- 3. ba_documents — FR-027, FR-028, FR-029 (BA Document Hub v2)
-- ============================================================================
CREATE TABLE IF NOT EXISTS ba_documents (
    id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    project_id   UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    doc_type     TEXT NOT NULL CHECK (doc_type IN ('BRD','BRS','FSD','API_SPEC','ERD','DATA_DICT','WIREFRAME','PROCESS_FLOW')),
    title        TEXT NOT NULL,
    content      TEXT NOT NULL DEFAULT '',
    version      TEXT NOT NULL DEFAULT 'v1.0',
    status       TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft','in_review','approved','archived')),
    milestone_id UUID REFERENCES project_milestones(id) ON DELETE SET NULL,
    metadata     JSONB NOT NULL DEFAULT '{}',
    approved_by  TEXT,
    reviewed_by  TEXT,
    created_by   TEXT,
    updated_by   TEXT,
    created_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ba_documents_project  ON ba_documents(project_id);
CREATE INDEX IF NOT EXISTS idx_ba_documents_type     ON ba_documents(doc_type);
CREATE INDEX IF NOT EXISTS idx_ba_documents_status   ON ba_documents(status);

-- ============================================================================
-- 4. ba_document_object_links — FR-027 (link docs ↔ objects)
-- ============================================================================
CREATE TABLE IF NOT EXISTS ba_document_object_links (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_id UUID NOT NULL REFERENCES ba_documents(id) ON DELETE CASCADE,
    object_id   UUID NOT NULL REFERENCES ppg_project_objects(id) ON DELETE CASCADE,
    linked_by   TEXT,
    linked_at   TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    UNIQUE(document_id, object_id)
);

-- ============================================================================
-- 5. ba_document_files — ADR-005 (file attachments)
-- ============================================================================
CREATE TABLE IF NOT EXISTS ba_document_files (
    id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    document_id      UUID NOT NULL REFERENCES ba_documents(id) ON DELETE CASCADE,
    file_name        TEXT NOT NULL,
    file_path        TEXT NOT NULL,
    mime_type        TEXT NOT NULL,
    file_size_bytes  BIGINT NOT NULL DEFAULT 0,
    checksum_sha256  TEXT,
    version          INTEGER NOT NULL DEFAULT 1,
    is_current       BOOLEAN NOT NULL DEFAULT TRUE,
    source           TEXT NOT NULL DEFAULT 'upload',
    source_url       TEXT,
    created_by       TEXT,
    created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    deleted_at       TIMESTAMPTZ
);

CREATE INDEX IF NOT EXISTS idx_ba_document_files_doc ON ba_document_files(document_id);

-- ============================================================================
-- 6. ba_document_history — version history snapshots
-- ============================================================================
CREATE TABLE IF NOT EXISTS ba_document_history (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    doc_id      UUID NOT NULL REFERENCES ba_documents(id) ON DELETE CASCADE,
    version     TEXT NOT NULL,
    changed_by  TEXT,
    change_note TEXT DEFAULT '',
    snapshot    JSONB,
    changed_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ba_document_history_doc ON ba_document_history(doc_id);

-- ============================================================================
-- 7. audit_log — used by audit_service across BA and PPG
-- ============================================================================
CREATE TABLE IF NOT EXISTS audit_log (
    id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    entity_type TEXT NOT NULL,
    entity_id   TEXT NOT NULL,
    action      TEXT NOT NULL,
    changed_by  TEXT,
    old_values  JSONB,
    new_values  JSONB,
    notes       TEXT,
    created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_audit_log_entity ON audit_log(entity_type, entity_id);
