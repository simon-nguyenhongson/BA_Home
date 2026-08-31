# Code Review toàn bộ source code — 2026-08-31

> Kết quả đọc toàn bộ codebase (~49.000 dòng: backend ~16.000, frontend ~32.700, 35 migrations, infra, scripts, tests).
> Trạng thái: **chưa sửa gì** — chờ chỉ đạo. Nhóm P0 nên xử lý trước khi lên môi trường thật.

---

## 1. Tổng quan kiến trúc

```
Browser (localhost:5173 — React 18 + Vite, KHÔNG phải Next.js như CLAUDE.md ghi)
    ├── /api/ppg  → PPG System    :8001  (Auth provider, ~247 endpoints, 24 routers)
    ├── /api/ba   → BA Workflow   :8002  (~36 endpoints, Gemini AI generator)
    └── /api/test → Test Platform :8003  (~34 endpoints)
                        └── PostgreSQL `devops_hub` (dùng chung, không tách schema)
```

- Backend: FastAPI + asyncpg thuần (raw SQL, không ORM). JWT HS256 do PPG cấp (8h, không refresh token). JSONB codec chỉ đăng ký ở PPG (`backend/ppg/app/database.py`), 2 service kia tự `json.loads`.
- Frontend: React Router 6 + Zustand (1 store `src/stores/auth.ts`), không UI library, chart SVG tự vẽ. Token lưu sessionStorage. Page lớn nhất: `CatalogPage.tsx` (2.402 dòng), `PPGPage.tsx` (1.752 dòng).
- DB: `infra/init.sql` + migrations V017–V045, chạy tay qua `migrate.bat` (không Flyway/Alembic). ~60 bảng.
- Tests: 257 backend test (mock DB), 12 unit FE, 3 e2e Playwright.
- `ecosys-mcpado/`: MCP server Node.js độc lập cho Azure DevOps (8 tools), không hardcode PAT.

---

## 2. P0 — Nghiêm trọng, sửa trước tiên

### 2.1 Bug 500 đang tồn tại
- `backend/ppg/app/routers/project_objects.py` — `_get_object_or_404` khai báo 4 tham số bắt buộc (`user, db, project_id, object_id`) nhưng 5 call site (dòng ~495, 526, 578, 631, 673) chỉ truyền 3 đối số → TypeError → HTTP 500 trên toàn bộ GET/PUT/DELETE `/projects/{id}/objects/{object_id}` và connections. Fix: bỏ `user` khỏi signature helper.

### 2.2 Bảo mật
1. **8 endpoint không auth**: `GET /projects/{id}/objects` (lộ inventory ứng dụng), `GET /reports/annual-plan-summary/{plan_id}`, `GET /projects/domains`, `POST /sync-doc`, `POST /sync-test` (`ppg/routers/sync.py`), `POST /brs`, `POST /brs/{id}/rediff` (test-platform). Mount StaticFiles `/sites` (`ppg/app/main.py:93`) phục vụ tài liệu đã publish không cần đăng nhập.
2. **Không có RBAC**: `catalog_roles.workflow_permissions` không được endpoint nào enforce. Bất kỳ user đăng nhập nào cũng approve document, sign UAT, close plan, xoá PCR/SR.
3. **SSRF**: `POST /{doc_id}/files/copy-from-url` (`ba-workflow/routers/ba_documents_v2.py:680`) — httpx.get URL bất kỳ, không chặn private IP/scheme.
4. **Path traversal khi ghi file**: `ba_documents_v2.py:529` và `test-platform/routers/test_documents.py:162` dùng `file.filename` không sanitize (đối chiếu `requests.py:749` làm đúng với `Path(name).name`).
5. **Secrets hardcode đã vào Git history — cần rotate**: `JWT_SECRET` default `"change-me-in-production"` (3 service), `postgresql://devops:devops123@...` (3 file database.py + nhiều script root), bcrypt hash của `admin123` trong `backend/ppg/test_login.py`.
6. **`find_key.py`** ở root — script quét log IDE tìm Google API key → xoá ngay. `test_gemini.py` và `ai_generator.py` truyền Gemini key qua query string URL (lộ vào log).
7. **Audit log gần như không hoạt động**: chỉ ~5/38 router gọi `log_audit`; không audit login/PCR/hợp đồng/gán role; `ip_address`/`user_agent` luôn NULL (không truyền `request`). Gap so với yêu cầu truy vết NHNN.
8. Không rate-limit login, không lockout, không security headers, CORS hardcode `localhost:5173` cả 3 main.py.
9. **AI compliance**: `ai_generator.py` gửi nội dung requirement nội bộ ra Google Gemini API không masking/log — cần đánh giá PDPL + Luật AI 134/2025 trước khi bật key ở môi trường thật. Không có key → fallback mock âm thầm (user không biết nội dung là fake).

### 2.3 Setup cài mới bị hỏng
- `migrate.bat` + README **thiếu V045** (7 bảng code đang dùng: `ba_documents`, `ppg_project_objects`, `audit_log`…).
- Thiếu `infra/migrate_annual_plans_v2.sql` trong quy trình → DB trắng fail ở V023 (FK trỏ `ppg_annual_plans` chưa tồn tại).
- **4 cặp migration trùng version**: V030 (seed_internal_webapps / user_domains), V031 (product_domain_fk / seed_users), V041 (sr_update_statuses / test_documents), V042 (request_attachments / test_documents_updated_by). Cặp V030/V031 phụ thuộc thứ tự nguy hiểm (seed INSERT cột `domain` rồi V031 DROP cột đó).
- 7 migration không idempotent (V021, V028, V029, V030 user_domains, V037, V040, V042 attachments) → không rerun được.
- `start.sh` (macOS) lỗi logic chuỗi `cd` tương đối.

---

## 3. P1 — Chất lượng / dữ liệu

- **Double-encoding JSONB ở PPG**: nhiều router tự `json.dumps()` trước khi truyền vào cột JSONB trong khi codec đã encode → DB lưu JSON string, query `->>'field'` hỏng. Vị trí: `projects.py:191,198,205,359,378`, `project_objects.py:242,462,478,547`, `app_registry.py:53,88,90`, `meetings.py:59`, `milestones.py:161`. (Chính là bug V025 từng sửa, tái diễn.) `catalog_products.py` làm đúng (truyền dict).
- **Sync liên service mất dữ liệu âm thầm**: `sync_service.py` swallow exception chỉ log (docstring hứa `ppg_sync_log` nhưng bảng không tồn tại); phía nhận `sync.py` trả `"received"` kể cả khi INSERT lỗi. Không retry/DLQ.
- **Import XLSX truyền string vào cột DATE** (`project_export.py:547-563`, `:728`) → DataError bị nuốt, endpoint vẫn trả 200.
- **Trùng khái niệm audit**: `audit_log` (V045) vs `ppg_audit_log` (migrate_annual_plans_v2.sql).
- N+1 query: `reports.py:210-246`, `annual_plans_v2.py:169-176`, `project_management.py:396-403`; pool max_size=10, mỗi request giữ 1 connection suốt vòng đời.
- `user.username` không tồn tại trên `TokenPayload` (field là `sub`) → `created_by` luôn NULL ở `todos.py:305,344,414,461,522`, `ppg/test_documents.py:180`.

## 4. P2 — Dead code / duplicate / convention

### Backend
- Dead: router `annual_plans.py` (9 endpoints, không register trong main.py), `state_machine.py` (ba-workflow, không import), `ObjectInfo` discriminated union + 5 model `*Details` trong `models/catalog.py` (khai báo, không dùng), `test_422.py`, `ppg/test_login.py`.
- Duplicate ×3 giữa 3 service: `auth.py`, `database.py`, `audit_service.py`; `_calc_dod_pct` ×2; `type_map` ×3; hai implementation `/api/v1/test-documents` (PPG dùng `review`, test-platform dùng `in_review`, dict transition cấu trúc ngược nhau) cùng ghi bảng `test_documents`.
- 5 state machine document không nhất quán (`review` vs `in_review`).
- Pydantic v1 `@validator(pre=True)` còn sót; `print()` debug ở `files.py:241-243`, `project_docs.py:324`, `ai_generator.py:73`; `__import__("json")` ở `meetings.py:59`; `.replace()` trên SQL string ở `todos.py:281`.
- `openapi.yaml` (backend/api) drift: prefix `/api/v1` không khớp code, chỉ cover ~40/317 endpoints.
- Env var lệch: `UPLOAD_DIR` vs `UPLOADS_DIR`; `requests.py:22` dùng `Path("uploads")` relative CWD; `GNM_TEMPLATE_PATH` default trỏ ra ngoài repo.

### Frontend
- Dead code ~5.600 dòng không được import: `ProjectDetailPage.tsx` (3.457 dòng — file lớn nhất repo), `TestPage.tsx` (1.260), `TestMetricsPage.tsx` (749), `ProjectsPage.tsx` (384), `Sidebar/TaskBoard/Confirm/EmptyState/StatusBadge/KpiCard/ProgressBar/Modal/Toast.tsx`.
- 10 bản `authHeaders()`/`request()` copy-paste lệch hành vi (xử lý 401 không `return`, todos stringify detail…); 2 lớp API song song `src/api/` vs `src/lib/api/`; `getAnnualPlans` 2 bản khác signature; type `AnnualPlan` 2 định nghĩa lệch field.
- ~1.500 dòng logic PCR nhân đôi (`RequestsPage.tsx` vs `ProjectPCRTab.tsx`); `ComboSelect` ×2; component trùng tên `Modal/KpiCard/ProgressBar/EmptyState/Confirm` giữa `ui.tsx` và `components/*`.
- Vi phạm "không dùng any": `FilterBar.tsx:168`, `ProjectsPage.tsx:333-334`, `DocumentsTab.tsx:158`.
- Auth store: `isAuthenticated` đánh giá 1 lần lúc module init; `username` không persist → sau F5 mọi field `created_by` từ FE rỗng. `ToastContainer` leak timer.
- Test mục: `App.test.tsx` assert giá trị cũ (5 apps vs 9 thật, redirect sai) → fail; e2e Playwright selector placeholder sai (`"Tên đăng nhập"` vs thật `"admin"`) → fail ngay login; `test-1.spec.ts` rỗng; coverage config loại toàn bộ `src/pages/**` (67% codebase).
- ESLint: không extends preset, disable rule `react-hooks/exhaustive-deps` không tồn tại, `@typescript-eslint/parser` thiếu trong devDependencies → `npm run lint` crash.
- Sót `'use client'` (di sản Next.js) 3 file; `vite.config.ts` tồn tại 2 bản (root + frontend); 36 chỗ dùng `window.confirm/alert` thay component có sẵn; sidebar hardcode `window.open('http://localhost:800x/docs')`.
- CLAUDE.md + `project-profile.yaml` ghi stack Next.js — thực tế Vite + React; project-profile còn mang tên "convert file System" (template chưa sửa).

### Tests backend
- `tests/backend/conftest.py` là code chết (không ai import `_make_token`/`make_fake_db`), import dotted `backend.ppg.app...` không tương thích (backend không có `__init__.py`).
- `test_workflow_docs.py` sys.path.insert cả 3 service cùng tên module `app.main` → fragile theo thứ tự chạy.
- `pytest.ini` testpaths giới hạn `tests/backend`, nhưng 9 file `test_*.py` ở root khớp pattern — chạy `pytest .` sẽ thực thi script debug (in JWT, ghi DB thật, chạy DDL).

---

## 5. Quy trình chạy đúng (đến khi fix docs)

1. Tạo user/DB: `devops`/`devops123` + `devops_hub`
2. `infra/init.sql`
3. `infra/migrate_annual_plans_v2.sql` ← **thiếu trong README/migrate.bat**
4. Migrations V017→V044 theo thứ tự trong `migrate.bat`
5. `migrations/V045__ba_documents_and_project_objects.sql` ← **thiếu trong README/migrate.bat**
6. Chạy 3 backend (uvicorn :8001/:8002/:8003) + frontend (`npm run dev` :5173)
7. Login `admin`/`admin123`
