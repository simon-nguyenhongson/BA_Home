# BA_Home — CLAUDE.md

# Shared context cho tất cả agents và team members

# Cập nhật sau mỗi decision quan trọng. KHÔNG xóa history — chỉ append.

# Xem: Build_Standard.md — Section 1.4 (Multi-Human Collaboration)

---

## Project Profile

project_id:     ba_home
name:           BA_Home
product_type:   internal_tool
tech_stack:
  frontend:     react_vite    # React 18 + Vite 5 + TypeScript
  backend:      python        # Python 3.11 + FastAPI
  database:     postgres      # PostgreSQL
launch_target:  internal_only
has_ui:         true
has_mobile:     false
compliance:     banking_grade
autonomy_level: 2             # L2 — Partial: AI thực hiện subtask, Human review từng bước
agents_active:  [01, 02, 03, 04, 05, 06, 07, 08, 09]
current_phase:  Phase 0 — Foundation
current_stage:  Stage 0.1 — Discover & Deconstruct

---

## Kiến trúc đã quyết định (ADRs)

- ADR-001: Tech Stack (FastAPI, React, PostgreSQL, JWT) — [docs/adr/ADR-001-tech-stack.md](docs/adr/ADR-001-tech-stack.md)
- ADR-002: Application Registry Schema (4 types, ppg_app_registry table) — [docs/adr/ADR-002-application-registry-schema.md](docs/adr/ADR-002-application-registry-schema.md)
- ADR-003: Authentication — JWT DB-based, PPG là auth provider, upgrade path → SSO — [docs/adr/ADR-003-authentication.md](docs/adr/ADR-003-authentication.md)
- ADR-004: Object Type Schema Strategy — JSONB flexible + Pydantic discriminated union (web_app/mobile_app/api/elt) — [docs/adr/ADR-004-object-type-schema.md](docs/adr/ADR-004-object-type-schema.md)
- ADR-005: Document Storage Strategy — Hybrid (DB text content + local filesystem for binary), upgrade path → MinIO — [docs/adr/ADR-005-document-storage.md](docs/adr/ADR-005-document-storage.md)

---

## Conventions bắt buộc

- Mọi commit message phải chứa BRD reference: `feat(CVF-XXX): ...`
- PR không được merge nếu chưa có test file
- Không DROP/TRUNCATE/ALTER ngoài môi trường dev/test
- Frontend code: TypeScript strict mode, không dùng `any`
- Backend code: Python type hints bắt buộc, Black formatter
- Database: snake_case cho tất cả tên bảng/cột, migrations chỉ additive

---

## Decisions đang chờ (pending)

- [ ] Confirm chi tiết tính năng convert: các format file cần hỗ trợ (waiting: PO)
- [X] Confirm storage strategy cho converted files — RESOLVED bởi ADR-005 (Hybrid: DB text + local filesystem)
- [ ] Confirm authentication method:  SSO OAuth2 hay internal auth (waiting: Tech Lead)
- [ ] Confirm deployment: Docker compose hay Kubernetes (waiting: DevOps)
- [X] REQUEST-ARCH-001: Schema chuẩn Application Registry — RESOLVED bởi ADR-002
- [X] REQUEST-ARCH-002: Cơ chế Basic Authentication — RESOLVED bởi ADR-003
- [ ] REQUEST-BA-QA-001: BRS template chuẩn để auto-gen test case — waiting: QA, deadline: trước Stage 1.4
- [X] OQ-004: Schema chuẩn Web App / Mobile App / API / ELT — RESOLVED bởi ADR-004
- [X] OQ-005: Template export/import Web App / Mobile App / API / ELT — RESOLVED bởi ADR-004 (Excel .xlsx, columns cố định per type)
- [ ] OQ-006: Ngưỡng coverage tối thiểu mặc định (đề xuất 80%) — waiting: PO, deadline: trước Stage 2.2
- [ ] OQ-007: Phân quyền tạo kế hoạch năm — waiting: PO + Tech Lead, deadline: trước Stage 2.1

---

## Domain ownership

- `docs/brd/`, `docs/research/` → BA / PO Team
- `docs/arch/`, `docs/adr/`     → Architect
- `frontend/src/`               → Frontend Dev (Agent 05)
- `backend/`                    → Backend Dev (Agent 06)
- `migrations/`                 → DBA (Agent 07)
- `tests/`                      → QA Team (Agent 08)
- `docs/user-guide/`            → Technical writer (Agent 09)
- `automation-test/`            → QA Team (Agent 08) — Capture Studio (record/run/export Playwright)

---

## Artifacts đã complete

<!-- Owner của artifact append sau khi artifact được approve -->

<!-- Format: - {ARTIFACT_ID}: {tên} — approved {YYYY-MM-DD} -->

### BA artifacts

- BRD-001: BA_Home — file: docs/brd/BRD-001-ba-home.md
  status: draft | date: 2026-04-09 | author: BA Team | ready-for: Architect, Dev, QA
  updated: 2026-04-10 | version: 1.1 | change: Thêm Module 1 Annual Plan (FR-019 đến FR-022), mở rộng Module 2 với Web App/Mobile App/API/ELT và cross-project report (FR-023 đến FR-026), làm rõ BA workflow (FR-027 đến FR-029) và Test workflow (FR-030 đến FR-032) gắn với đối tượng cụ thể. Tổng: 32 FR, 7 NFR, 14 BR. 4 Open Questions mới (OQ-004 đến OQ-007) | ready-for: Architect (OQ-004, OQ-005), PO (OQ-006, OQ-007)

### Dev artifacts

- CODE-001: BA_Home scaffold — infra/init.sql, backend/ppg/, backend/ba-workflow/, backend/test-platform/, frontend/src/api/
  status: ready-for-review | date: 2026-04-09 | ready-for: QA
- CODE-002: Module Danh Mục Dữ Liệu (Data Catalog)
  status: ready-for-review | date: 2026-04-10 | ready-for: QA
  updated: 2026-04-12 | version: 2.0 | change: Mở rộng toàn bộ metadata sản phẩm — 6 JSONB sections chung + chi tiết riêng per type
  files:
  migration:  migrations/V021__catalog_module.sql
  migrations/V025__fix_annual_plan_related_systems.sql
  migrations/V026__catalog_product_extended.sql
  models:     backend/ppg/app/models/catalog.py
  routers:    backend/ppg/app/routers/catalog_products.py
  backend/ppg/app/routers/catalog_users.py
  api_client: frontend/src/api/catalog.ts
  ui_page:    frontend/src/pages/catalog/CatalogPage.tsx
  updated:    backend/ppg/app/main.py (v4 routers registered)
  frontend/src/App.tsx (route /catalog + sidebar item)
  scope:

  - Danh mục sản phẩm (org-wide, không gắn project): Web App / Mobile / Job / ETL / API
  - Mỗi sản phẩm: 6 sections chung (Architecture, Deployment, Security, Monitoring, Resource, Business)
    + môi trường (DEV/SIT/UAT/PROD/DR/STAGING) với infra_type + region
    + licence + chi tiết kỹ thuật riêng per type (JSONB)
  - Type-specific fields: WebApp (domain_dns, cdn, browser_support…) | Mobile (platforms, store links…)
    | API (spec_url, endpoints, rate_limit…) | ETL (source/target systems, lineage…) | Job (cron, retry, idempotent…)
  - Danh mục nhân sự: internal / external / contractor / vendor — thông tin cơ bản
  - Danh mục vai trò: role_code, role_category, workflow_permissions (JSONB), product_access_level
  - Gán nhiều vai trò cho user với scope (global / product / team)
  - 8 default roles seeded: BA, DEV, QA, PM, PO, ARCH, DEVOPS, VIEWER
    db_tables: catalog_products (+7 columns), catalog_product_environments (+2 columns),
    catalog_product_licenses, catalog_product_details,
    catalog_users, catalog_roles, catalog_user_roles
    api_prefix: /catalog/products (14 endpoints) | /catalog/users (7) | /catalog/roles (6)
    ui_route: /catalog — 3 tabs: Danh mục sản phẩm / Danh mục nhân sự / Vai trò & Quyền
    ui_detail_tabs: Tổng quan | Kiến trúc | Môi trường | Deployment | Bảo mật | Vận hành | Chi tiết | Licence
    ui_create_tabs: Cơ bản | Kiến trúc | Deployment | Bảo mật | Vận hành

### Arch artifacts

- ADR-001: Tech Stack & System Architecture — file: docs/adr/ADR-001-tech-stack.md
  status: accepted | date: 2026-04-09 | ready-for: Dev
- ADR-002: Application Registry Schema — file: docs/adr/ADR-002-application-registry-schema.md
  status: accepted | date: 2026-04-09 | ready-for: Dev (resolves REQUEST-ARCH-001)
- ADR-003: Authentication Mechanism (JWT DB-based) — file: docs/adr/ADR-003-authentication.md
  status: accepted | date: 2026-04-09 | ready-for: Dev (resolves REQUEST-ARCH-002)
- ADR-004: Object Type Schema Strategy (JSONB + Pydantic discriminated union) — file: docs/adr/ADR-004-object-type-schema.md
  status: accepted | date: 2026-04-10 | ready-for: Dev (resolves OQ-004, OQ-005) | blocks: FR-023, FR-024, FR-025
- ADR-005: Document Storage Strategy (Hybrid DB+filesystem, upgrade path MinIO) — file: docs/adr/ADR-005-document-storage.md
  status: accepted | date: 2026-04-10 | ready-for: Dev (resolves storage pending) | blocks: FR-027, FR-029, FR-030, FR-032
- ARCH-001: System Architecture v2.0 — file: docs/arch/architecture-001-ba-home.md
  status: ready-for-dev | date: 2026-04-10 | change: Updated to v2.0 — added 4 new modules, new system diagram, updated implementation phases
- SCHEMA-DRAFT-V2: DB Schema Draft v2 (V002–V016 migrations) — file: docs/arch/schema-draft-v2.md
  status: ready-for-dba | date: 2026-04-10 | target: Agent 07 (DBA)
- API-DRAFT-V2: API Contract Draft v2 — file: docs/arch/api-contract-draft-v2.md
  status: ready-for-dev | date: 2026-04-10 | target: Agent 06 (Backend Dev)

---

## Highlight Log (recent — đọc trước khi làm việc)

<!-- Agent 01 tự động inject 10 entries gần nhất từ .highlight-log.yaml -->

_Xem .highlight-log.yaml để xem full log._

---

## Lessons learned (append only)

<!-- Format: - {YYYY-MM-DD}: {insight} -->

- 2026-04-09: Project khởi tạo. File system được tạo theo Build_Standard.md v7.0.
- 2026-04-09: BA session — BRD-001 drafted (18 FR, 7 NFR, 8 BR). 3 open questions gửi Architect + QA.
- 2026-04-09: Architect session — ADR-001/002/003 accepted. ARCH-001 ready-for-dev. REQUEST-ARCH-001/002 resolved.
- 2026-04-09: Dev session — Phase 1+2 scaffold complete: init.sql (tất cả tables), auth middleware, PPG/BA/Test core routers, frontend API clients. Human Dev cần implement business logic phức tạp và Phase 3-4 features.
- 2026-04-10: BA session — BRD-001 updated to v1.1 (32 FR, 14 BR, 7 OQ). Thêm 4 module rõ ràng: Annual Plan, Project (mở rộng object types), BA workflow, Test workflow. 4 Open Questions mới gửi Architect + PO (OQ-004 đến OQ-007). ADR-002 cần mở rộng để cover schema Web App/Mobile App/API/ELT.
- 2026-04-10: Architect session — ADR-004/005 accepted. ARCH-001 updated to v2.0. SCHEMA-DRAFT-V2 và API-DRAFT-V2 ready-for-dev. OQ-004/005 resolved. Còn 2 pending: OQ-006 (PO — coverage threshold), OQ-007 (PO+Tech Lead — annual plan access control).
- 2026-04-10: Dev session — CODE-002 complete: Module Danh Mục Dữ Liệu (V021 migration, 7 tables, 27 API endpoints, UI 3 tabs). Catalog là org-wide (không scoped theo project) — khác với project_product_registry (V019) vốn gắn với project cụ thể. Chi tiết kỹ thuật per-type lưu dạng JSONB trong catalog_product_details. Roles seeded sẵn 8 defaults. Pattern: JSONB details + Python type hints + asyncpg + React hooks.
- 2026-04-12: Dev session — CODE-002 v2.0: Mở rộng catalog module với đầy đủ metadata cấu trúc cho 5 loại sản phẩm. V026 migration thêm 7 columns (domain + 6 JSONB sections) vào catalog_products, thêm infra_type + region vào environments. Pydantic sub-models typed cho 6 sections chung + 5 type-specific detail models. UI rewrite: 8-tab detail modal + 5-section create form + structured forms per product type. Fix asyncpg double-serialization bug (V025 migration + router rewrite). Key pattern: asyncpg JSONB codec handles encoding — never call json.dumps() before passing to asyncpg parameters.
- 2026-08-31: Rebrand — Đổi tên dự án thành BA_Home (CLAUDE.md, project-profile.yaml, README, frontend title/brand/login, package.json). Sanitize toàn bộ định danh tổ chức nội bộ khỏi repo: mcp-ado (.env.example, README, index.js, CLAUDE.md, package.json — ADO org/project/email thay bằng placeholder generic), logo login đổi thành "B". Lưu ý: giá trị cũ vẫn còn trong Git history.
- 2026-08-31: Review session — Đọc toàn bộ codebase (~49k dòng), lưu báo cáo đầy đủ tại docs/review/CODE-REVIEW-2026-08-31.md. P0 nổi bật: bug 500 project_objects (_get_object_or_404 sai arity ×5), 8 endpoint không auth (+/sites StaticFiles), không RBAC, SSRF copy-from-url, secrets hardcode (JWT_SECRET default, devops123, find_key.py), audit log gần như không hoạt động, migrate.bat thiếu V045 + migrate_annual_plans_v2.sql, 4 cặp migration trùng version. Chưa sửa — chờ chỉ đạo. Lưu ý: stack thực tế là Vite + React (không phải Next.js như header CLAUDE.md ghi).
- 2026-08-31: Gỡ bỏ tích hợp MCP ADO — xóa thư mục mcp-ado/ và section "Hướng dẫn làm việc với Azure DevOps (ADO) qua MCP" khỏi CLAUDE.md theo yêu cầu. Repo không còn phụ thuộc Azure DevOps.
- 2026-08-31: Scrub "ecosys/ecosystem" — thay toàn bộ tham chiếu bằng BA_Home/ba_home trên 36 files (domain seed → example.local, test DB → ba_home_test_db, branding UI/scripts/docs). Rename files: BRD-001-ba-home.md, architecture-001-ba-home.md, Brd_ba_home.md, gnm_ba_home_*.xlsx. Xóa file temp Office ~$gnm. Lưu ý: giá trị cũ vẫn còn trong Git history; DB local nếu đã seed từ migration cũ vẫn chứa domain cũ.
- 2026-08-31: Optimize session — Chạy workflow 14 agents (5 đọc hiểu + 9 kiểm chứng) rồi áp dụng 20+ fix đã verify: (1) Correctness: fix bug 500 _get_object_or_404 arity, gỡ double-encoding JSONB toàn PPG (projects/project_objects/app_registry/meetings/milestones — kèm read-side compensation cho data legacy), user.username→user.sub, parse date cell XLSX import. (2) Perf: gỡ 5 điểm N+1 (reports ×2, annual_plans_v2, project_management) bằng batch ANY($1::uuid[]), executemany cho create plan, pool size cấu hình qua DB_POOL_MIN_SIZE/DB_POOL_MAX_SIZE (default 20). (3) Security: sanitize filename upload (ba-workflow + test-platform), SSRF guard copy-from-url (chặn scheme lạ + private IP), Gemini key chuyển từ query string sang header x-goog-api-key, thêm auth cho GET /projects/{id}/objects, /reports/annual-plan-summary, /projects/domains. (4) Sync: /sync-doc /sync-test trả status thật (500 khi lỗi thay vì nuốt), sync_service log response body. (5) FE: hợp nhất 10 bản authHeaders/request → src/lib/http.ts, tách hằng số CR → src/features/cr/constants.ts, xóa dead exports annual-plan trong api/ppg.ts, bỏ 'use client'. (6) Setup: migrate.bat + README bổ sung migrate_annual_plans_v2.sql + V045-V047 + ghi chú thứ tự cặp trùng version, fix start.sh, fix ESLint config + devDeps, conftest.py chặn pytest collect script root, chuẩn hóa UPLOADS_DIR, GNM_TEMPLATE_PATH default đúng. Test: backend 18 fail → 13 fail (chữa 5, không hỏng mới — 13 còn lại là fail sẵn có), FE 21 fail giữ nguyên (stale từ trước), tsc + vite build sạch. Tài liệu giải thích codebase cho BA: docs/CODEBASE-GUIDE.md. CHƯA XÓA được dead files (bị permission chặn) — danh sách chờ duyệt trong báo cáo phiên. Chưa làm: RBAC, rate-limit login, refresh token, audit log đầy đủ, hợp nhất CR UI (bước 3 risky), 13+21 test fail sẵn có.
- 2026-08-31: Research session — Nghiên cứu sâu BA Workflow + Auto Test theo yêu cầu user, báo cáo đầy đủ: docs/review/BA-WORKFLOW-AUTOTEST-RESEARCH-2026-08-31.md. Kết luận chính: BA Workflow tồn tại 2 thế hệ song song (documents cũ + ba_documents v2), 5 blocker (MASTER_DOC bị CHECK constraint chặn → 500, nút Xóa gọi endpoint không tồn tại → 405, AI generator trả mock/chuỗi lỗi âm thầm, sync sang PPG luôn fail vì UUID/datetime không JSON-serialize, truy vết CR→doc→test case đứt mọi mắt xích). Auto Test: generator BRS→test case chỉ là parser bullet 15 dòng (steps=expected=nguyên văn 1 câu, script Playwright chỉ có TODO), UI test case là dead code không được route, không có execution thật, bảng test_case_object_links không tồn tại → coverage 500. Đề xuất: bỏ generator, chuyển nguồn test case sang Capture Studio.
- 2026-08-31: Automation Test — Tích hợp Capture Studio (repo Automation-Test của user) vào automation-test/: npm ci + Playwright chromium đã cài, hardening (bind 127.0.0.1, ws scheme động), dọn data demo, smoke test pass. FE: route /automation + sidebar item mới (iframe studio + fallback hướng dẫn khi studio chưa chạy, VITE_STUDIO_URL config). start.sh/start.bat/install.bat đã gắn studio (port 4700). Chạy: cd automation-test && npm run studio. Studio là local tool 1 người dùng/máy — ghi test case cần Chromium headed.
- 2026-08-31: Design System — Áp dụng SooBinZHongSon DS cho toàn bộ UI. Token gốc copy vào frontend/src/styles/ds/, retoken styles.css GIỮ NGUYÊN tên biến --app-* (≈700 inline style tự ăn theo): primary #155EEF, viền #EAECF0, chữ #101828, Inter 14/20, radius 8/12, shadow một tông ink. Component chuẩn: btn 3 size/7 hierarchy + focus halo, app-input boxed 32px, badge pill, ds-table, ds-tabs (active violet #6941C6 theo nguồn), ds-seg, callout. Shell: sidebar sáng + brand gradient 4px, topbar 48px, bỏ emoji → lucide 16px/1.5. tailwind.config thêm palette ds.*. Spec bắt buộc khi sửa UI: docs/design/DS-ADOPTION-SPEC.md.
- 2026-08-31: AI Agent flow — Triển khai luồng CR→BRS→Master Doc và Automation Test theo yêu cầu PO (thiết kế: docs/design/AI-DOC-AUTOMATION-FLOW.md). V048: app_settings (Claude key/model), ai_skills (kho skill, seed 4 skill hệ thống), cr_brs_documents + history, master_doc_versions thêm pending/approved/rejected + base_version_no, automation_test_tasks/cases/runs. Backend 32 endpoint mới: services/ai_agent.py (SDK anthropic, streaming, prompt caching, KHÔNG mock/nuốt lỗi), routers ai_admin/cr_brs/master_docs/automation. Frontend: trang Cài đặt (API key masked + kho skill), BrsPanel gắn trong CR detail ([Gen BRS] → AI chỉnh sửa → duyệt → golive → [Merge Master Doc] có duyệt bản đề xuất), DiffView side-by-side, tab Automation "Công việc theo CR" ([Gen testcase] → map script studio → import run → [Gen report] → [Close] → [Export] XLSX). Quy tắc: Master Doc CHỈ đổi khi bản đề xuất được approve; mọi thay đổi BRS ghi history; CR↔BRS↔Test ref lẫn nhau.
- 2026-08-31: Chạy thật lần đầu — Khởi động đủ 5 service (PPG 8001, BA 8002, Test 8003, FE 5173, Capture Studio 4700), chạy V048+V049, kiểm chứng luồng đầu-cuối bằng API + Playwright. Bug phát hiện và ĐÃ SỬA khi chạy: (1) GET /requests/change-requests lỗi 500 — query dùng cp.name nhưng cột thật là product_name (toàn bộ màn Requests không load được); (2) audit log mất trắng — bảng ppg_audit_log chưa từng được tạo trên DB này (nằm trong infra/migrate_annual_plans_v2.sql, file bị thiếu trong migrate.bat cũ) VÀ định nghĩa gốc thiếu 3 cột code ghi vào (ip_address/user_agent/notes) → V049 tạo bảng + bổ sung cột; (3) request_history trong cr_brs.py/automation.py dùng sai schema (request_type/request_id/notes/changed_by) và sai ref_type ('CR' vs check constraint 'cr') → sửa dùng đúng ref_type/ref_id/actor/from_status/to_status/comment, bỏ try-except nuốt lỗi; (4) username không persist sau F5 → lưu sessionStorage; (5) ô tìm kiếm topbar bị bóp hẹp do ds-seg 11 mục → cố định 260px + cho ds-seg cuộn ngang. Đã kiểm chứng chạy đúng: state machine BRS (draft→in_review→approved→golive, sai luồng trả 409), BRS approved TỰ TẠO task automation, guard AI_KEY_MISSING báo lỗi rõ và KHÔNG đụng Master Doc, audit ghi được, lịch sử CR ghi được. Dữ liệu thử đã dọn sạch, DB trả về trạng thái ban đầu.
- 2026-09-01: Strategy session — PO yêu cầu tái cấu trúc toàn dự án theo hướng PRODUCT-CENTRIC (Product = BRD + Master Doc + Prototype HTML + Design System của prototype + chuỗi CR→BRS→Testcase→Automation testcase con). Chạy workflow 11 agents (5 khảo sát + 3 thiết kế độc lập + 3 giám khảo chấm chéo). Báo cáo chiến lược: docs/strategy/PRODUCT-CENTRIC-STRATEGY.md (STRATEGY-001, status: draft — CHỜ PO REVIEW, chưa code gì). Kết luận chính: hệ thống đã product-centric một nửa (master_documents anchor product V047, CR có product_id V046, chuỗi BRS/Automation V048); thiếu 3 mảnh mới hoàn toàn (BRD product, Prototype, DS prototype — 0 bảng/0 tài liệu); CR gắn product chỉ optional (mắt xích lỏng); script automation trỏ file local (studio_tc_id TEXT — mắt xích ra ngoài DB). Phương án chọn: "Vòng đời BA + AI làm trục" (2/3 giám khảo) + kỷ luật ship của "Tiến hóa tối thiểu": 6 phase ~8-12 tuần, additive V050-V055, Product Home 8 tab tại /products/:id, 5 AI skill mới, prototype-first testing (data-testid + Capture Studio), invariant audit "Master Doc HEAD = init(BRD) + Σ BRS golive". 10 OQ chờ PO quyết (3 câu chặn P0). KHÔNG triển khai gì cho tới khi PO duyệt chiến lược.
- 2026-09-01: Strategy v2.0 — PO phản hồi 13 quyết định cho STRATEGY-001; viết lại docs/strategy/PRODUCT-CENTRIC-STRATEGY.md (v1.0 xem Git history). Chốt: (1) Project và Product NGANG HÀNG, CR bắt buộc product_id còn project_id tùy chọn — gỡ nút thắt CR không ghi nhận được thay đổi ngoài dự án; (2) BỎ BRD của product (BRD thuộc project, dùng project_briefs 25 cột đã có) → loại 3 bảng + skill gen_brd khỏi kế hoạch; (3) BỎ module Kế hoạch năm → thay bằng Báo cáo theo kỳ (giữ bảng, chỉ gỡ giao diện — 20 sáng kiến + 20 project đang gắn plan_id); (4) Testcase gom chung 1 hệ automation, kịch bản ghi được lưu DB (automation_case_steps) thay JSON cục bộ của Capture Studio — hạng mục kỹ thuật nặng nhất; (5) Prototype + Design System + Diagram (workflow/sequence/dataflow) dùng chung cho project|product, diagram gắn được cả BRS; (6) Report theo TỪNG testcase + export theo skill AI cấu hình được. Invariant mới (bỏ vế BRD): Master Doc HEAD = v1 khởi tạo + Σ BRS golive. Lộ trình 5 phase 7–10 tuần, migration additive V050–V054. 4 câu hỏi chờ PO (CH-1 chặn P5: xử lý dữ liệu kế hoạch năm cũ). CHƯA CODE — chờ PO duyệt v2.
- 2026-09-01: Fix xác thực Claude — Key PO nhập là OAuth token (sk-ant-oat…, 108 ký tự) chứ không phải API key, nhưng ai_agent.py gửi qua header x-api-key → API trả 401 "key không hợp lệ" dù token đúng. Sửa: thêm build_client() tự nhận diện tiền tố — OAuth dùng auth_token= + header anthropic-beta: oauth-2025-04-20, API key dùng api_key= như cũ. Bổ sung _auth_error_message()/_rate_limit_message() nêu đúng nguyên nhân theo loại credential; verify_api_key bắt riêng RateLimitError (trước rơi vào APIStatusError nên báo lỗi khó hiểu). API GET /settings/ai trả thêm credential_type (oauth|api_key|none); màn Cài đặt hiện badge loại credential + cảnh báo OAuth token ngắn hạn, dùng chung hạn mức gói thuê bao. TRẠNG THÁI: xác thực đã thông (401 → hết), nhưng tài khoản đang bị 429 rate limit nên CHƯA kiểm chứng được luồng sinh tài liệu thật — cần API key trả theo lượt dùng hoặc chờ hạn mức reset.
- 2026-04-13: Dev session — CODE-003: 3 features shipped. (1) Export/Import XLSX project info (4 sheets: Overview/Timeline/Nguồn lực/To-do list) — backend StreamingResponse + openpyxl, frontend blob download + file upload. (2) Domain field cho project — V028 migration (project_domains LOV 12 entries + FK projects.domain_code), folder tree thay đổi thành {domain}/{project}/BA/ và {domain}/{project}/Tester/, GET /projects/domains LOV endpoint. (3) 5-domain governance checklist — V029 migration (project_activity_tasks), 38 tasks auto-generated per project, new router activity_tasks.py, ChecklistTab UI với progress bar + per-domain sections + click-to-cycle status.
