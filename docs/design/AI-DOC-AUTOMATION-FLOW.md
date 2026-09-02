# Thiết kế: Luồng tài liệu chuẩn hóa (CR → BRS → Master Doc) + Automation Test

> Phiên bản 1.0 — 2026-08-31. Hợp đồng triển khai cho backend + frontend.
> Yêu cầu gốc từ PO (Senior ITBA) — xem Lessons learned CLAUDE.md 2026-08-31.

## 0. Tổng quan luồng

```
Master Doc (per hệ thống - catalog_products, bảng V047 master_documents)
   ▲                                                        │ (context AS-IS)
   │ [Merge Master Doc] (AI skill update_master_doc,        ▼
   │  tạo VERSION PENDING → phải APPROVE mới ghi đè)   CR (change_requests, có product_id)
   │                                                        │ approve
   └── master_doc_versions + master_doc_version_crs         ▼
        (truy vết CR nào sửa gì — COMPARE đa chiều)   [Gen BRS] (AI skill gen_brs, Claude API key ở Settings)
                                                            ▼
                                                       BRS (cr_brs_documents) — user review/sửa tay
                                                            │  hoặc [AI Revise] (regen theo chỉ dẫn)
                                                            ▼ draft → in_review → approved → golive
                                            approved ─► TỰ TẠO automation_test_tasks (need_test)
                                                            ▼
                                        [Gen testcase] (AI skill gen_test_case) → automation_test_cases
                                                            ▼
                                Map/record script bằng Capture Studio (automation-test/, port 4700)
                                                            ▼
                                Chạy nhiều lần → import kết quả run → [Gen report] (AI skill gen_test_report)
                                                            ▼
                                [Close] task (CR ↔ BRS ↔ Test ref lẫn nhau) → [Export] XLSX
```

## 1. Hạ tầng chung

### 1.1 Settings (menu Cài đặt)

- Bảng `app_settings(key TEXT PK, value TEXT, updated_by, updated_at)`.
- Keys: `anthropic_api_key` (secret — API trả về dạng mask `sk-ant-***abc`), `anthropic_model` (default `claude-opus-5`), `anthropic_max_tokens` (default `32000`).
- API (router `ai_admin.py`, prefix `/settings/ai`): `GET /settings/ai` (key masked), `PUT /settings/ai` (chỉ update field gửi lên; gửi key mới thì ghi đè), `POST /settings/ai/test` (gọi thử 1 request nhỏ xác nhận key hợp lệ).

### 1.2 Kho skill (quản lý bộ skill chuẩn Claude)

- Bảng `ai_skills(id UUID PK, code TEXT UNIQUE, name, description, content TEXT, is_system BOOL, updated_by, created_at, updated_at)`.
- `content` = system instructions của skill (markdown). 4 skill hệ thống seed sẵn (is_system=true, không xóa được, sửa được): `gen_brs`, `update_master_doc`, `gen_test_case`, `gen_test_report`.
- API (router `ai_admin.py`, prefix `/ai-skills`): GET list, GET /{id}, POST, PUT /{id}, DELETE /{id} (chặn nếu is_system).

### 1.3 AI Agent service — `backend/ppg/app/services/ai_agent.py`

Hợp đồng (các router khác code theo đúng chữ ký này):

```python
async def run_skill(
    db: asyncpg.Connection,
    skill_code: str,          # đọc content từ ai_skills
    user_prompt: str,         # context + yêu cầu cụ thể
    extra_system: str = "",   # bổ sung sau skill content nếu cần
) -> str:                     # trả text kết quả; raise HTTPException nếu lỗi
```

- Đọc `anthropic_api_key`/`anthropic_model`/`anthropic_max_tokens` từ `app_settings`. Không có key → HTTPException 400 `{"code":"AI_KEY_MISSING","message":"Chưa cấu hình Claude API key trong Cài đặt"}`.
- Dùng SDK chính thức: `from anthropic import AsyncAnthropic`; gọi `client.messages.stream(...)` + `get_final_message()` (streaming tránh timeout tài liệu dài); model từ settings (default `claude-opus-5`); KHÔNG truyền tham số `thinking` (mặc định adaptive); `system=[{"type":"text","text": skill_content(+extra), "cache_control": {"type":"ephemeral"}}]`.
- Bắt lỗi theo chuỗi: `AuthenticationError`→400 AI_KEY_INVALID, `RateLimitError`→429, `APIStatusError`→502 kèm message, `APIConnectionError`→502 "Không kết nối được Claude API". KHÔNG nuốt lỗi, KHÔNG trả mock.
- Ghi audit: log_audit(entity_type="ai_call", action=skill_code, ...) best-effort.
- `pip install anthropic` — thêm `anthropic>=0.40` vào backend/ppg/requirements.txt.

## 2. Luồng tài liệu

### 2.1 BRS per CR — bảng `cr_brs_documents`

- Cột: id, cr_id FK change_requests, title, content (markdown), version INT default 1, status CHECK (`draft`,`in_review`,`approved`,`golive`), skill_code, created_by/updated_by/approved_by/approved_at/golive_by/golive_at, timestamps. Một CR có thể có nhiều BRS nhưng chỉ 1 bản `active` (mới nhất chưa bị thay thế) — đơn giản: UNIQUE(cr_id) bản hiện hành, regen = ghi đè content + history.
- Bảng `cr_brs_history(id, brs_id FK, version, content, change_note, source CHECK('generate','revise','manual_edit'), created_by, created_at)` — snapshot MỌI thay đổi content.
- Router `cr_brs.py` (prefix `/requests/change-requests/{cr_id}/brs` + `/brs`):
  - `POST .../generate {skill_code?='gen_brs', note?}` — điều kiện: CR status = `approved` (nếu chưa → 409). Context gửi AI: nội dung CR (code/title/description/change_type/notes) + Master Doc hiện hành của `product_id` CR (nếu có). Tạo/ghi đè BRS draft + history(source='generate').
  - `POST /brs/{id}/revise {instruction}` — AI sửa theo chỉ dẫn (context: BRS hiện tại + instruction + master doc), version+1, history(source='revise'). Chỉ khi status in (draft, in_review).
  - `PUT /brs/{id} {title?, content?}` — sửa tay, version+1, history(source='manual_edit'). Chỉ draft/in_review.
  - `POST /brs/{id}/status {action}` — state machine: draft→(submit_review)→in_review→(approve|reject→draft)→approved→(golive)→golive. approve ghi approved_by/at; golive ghi golive_by/at. **Hook approve**: tự tạo `automation_test_tasks` (need_test) cho cr_id nếu chưa có. Ghi request_history của CR (bảng có sẵn) mỗi lần chuyển trạng thái.
  - `GET .../brs` + `GET /brs/{id}` + `GET /brs/{id}/history`.

### 2.2 Master Doc + merge có phê duyệt — router `master_docs.py`

Dùng bảng V047 sẵn có; V048 ALTER thêm vào `master_doc_versions`: `status TEXT NOT NULL DEFAULT 'approved' CHECK (status IN ('pending','approved','rejected'))`, `base_version_no INTEGER`, `approved_by TEXT`, `approved_at TIMESTAMPTZ`, `brs_id UUID` (FK cr_brs_documents, SET NULL). Version pending có `version_no = NULL` (UNIQUE cho phép nhiều NULL), khi approve mới gán version_no = current+1.

- `GET /master-docs?product_id=` — list (kèm current version).
- `POST /master-docs {product_id, title, content}` — tạo Master Doc đầu tiên cho hệ thống + version 1 (source='initial').
- `PUT /master-docs/{id}` — sửa tay: tạo version mới approved luôn (source='manual') + cập nhật HEAD.
- `GET /master-docs/{id}/versions` (kèm CR đã merge từng version), `GET /master-docs/{id}/versions/{vid}`.
- `POST /brs/{brs_id}/merge-master-doc` — điều kiện BRS status='golive' (409 nếu chưa). Lấy master doc theo product_id của CR (chưa có → 409 kèm hướng dẫn tạo). Gọi AI skill `update_master_doc` (context: master doc hiện hành + BRS + CR) → tạo `master_doc_versions` PENDING (content mới, change_summary AI tóm tắt, base_version_no=current, brs_id, source='cr_merge') + `master_doc_version_crs` snapshot CR. KHÔNG đổi HEAD.
- `POST /master-docs/versions/{vid}/approve` — chỉ pending: gán version_no, status approved, cập nhật master_documents.content/current_version/current_version_no. Nếu HEAD đã đổi từ lúc tạo proposal (current_version_no != base_version_no) → 409 yêu cầu regen.
- `POST /master-docs/versions/{vid}/reject {reason}` — status rejected.
- **COMPARE đa chiều**:
  - `GET /master-docs/{id}/diff?from_vid=&to_vid=` (mặc định to = HEAD) — server dùng `difflib.SequenceMatcher` trả `{stats:{added,removed,changed}, rows:[{type:'same'|'add'|'del'|'change', left_no, right_no, left, right}]}` để FE render side-by-side.
  - `GET /change-requests/{cr_id}/master-doc-impact` — trả lời "CR này cập nhật chỗ nào trong master doc": tìm mọi version có CR trong master_doc_version_crs, mỗi version diff với version liền trước (theo base_version_no) → trả list {master_doc, version, status, diff}.
  - `GET /master-docs/versions/{vid}/diff-base` — diff proposal pending với bản base của nó (màn duyệt merge).

## 3. Automation Test — router `automation.py` (prefix `/automation`)

Bảng V048:

- `automation_test_tasks(id, cr_id UNIQUE FK, brs_id FK, status CHECK('need_test','cases_generated','in_progress','closed'), closed_by, closed_at, created_at, updated_at)`.
- `automation_test_cases(id, task_id FK CASCADE, code TEXT, title, precondition, steps, expected, priority CHECK('critical','high','medium','low') DEFAULT 'medium', studio_tc_id TEXT, status CHECK('draft','ready','mapped','passed','failed') DEFAULT 'draft', sort_order INT, created_by, timestamps)`.
- `automation_test_runs(id, task_id FK CASCADE, run_ref TEXT, summary JSONB DEFAULT '{}', report_content TEXT DEFAULT '', created_by, created_at)`.

API:

- `GET /automation/tasks?status=` — list kèm cr_code/cr_title/brs status (JOIN); `GET /automation/tasks/{id}` kèm cases + runs.
- `POST /automation/tasks/{id}/generate-cases {skill_code?='gen_test_case'}` — gọi AI với BRS content approved; AI trả JSON array [{code,title,precondition,steps,expected,priority}] (skill yêu cầu trả JSON; parse chặt chẽ, lỗi parse → 502 kèm raw đầu ra); insert cases, task → cases_generated.
- CRUD cases: `POST /automation/tasks/{id}/cases`, `PUT /automation/cases/{id}` (kể cả gán `studio_tc_id` → status mapped), `DELETE /automation/cases/{id}`.
- `POST /automation/tasks/{id}/runs {run_ref?, summary}` — FE import kết quả chạy từ Capture Studio (summary = {total,passed,failed,duration_ms,cases:[{studio_tc_id,name,status}]}); cập nhật status cases mapped theo kết quả (passed/failed); task → in_progress.
- `POST /automation/runs/{id}/generate-report` — AI skill gen_test_report (context: cases + summary run) → lưu report_content.
- `POST /automation/tasks/{id}/close` — yêu cầu có ≥1 run; set closed + ghi request_history CR "Automation test closed".
- `GET /automation/tasks/{id}/export` — XLSX (openpyxl, StreamingResponse như project_export.py): sheet TestCases, sheet Runs, sheet Report (report_content), header có CR code/title + BRS version.

## 4. Capture Studio

- Thêm CORS cho origin frontend (env `STUDIO_ALLOW_ORIGIN`, default `http://localhost:5173`) vào automation-test/capture-studio/server.js để FE đọc `/api/testcases`, `/api/runs` khi map case và import kết quả run.

## 5. Frontend (làm SAU khi reskin xong — theo DS spec)

- Trang **Cài đặt** `/settings`: API key (masked, nút Lưu + Kiểm tra kết nối), model, kho skill (bảng + editor markdown, badge Hệ thống).
- CR detail (RequestsPage + ProjectCRTab): khi CR approved → nút **[Gen BRS]**; tab/khối BRS: xem markdown, sửa, [AI chỉnh sửa] (nhập instruction), luồng nút theo status (Gửi duyệt/Approve/Reject/Golive), sau golive → **[Merge Master Doc]**; link "Xem tác động Master Doc" (impact diff).
- Màn **Master Doc** (trong Catalog product detail hoặc trang riêng): nội dung HEAD, lịch sử version + CR per version, màn duyệt proposal pending (side-by-side diff, Approve/Reject), so sánh 2 version bất kỳ.
- Trang **Automation** mở rộng: tab "Task theo CR" (list task, Gen testcase, bảng cases, map studio tc — dropdown đọc từ studio API, import run, Gen report, Close, Export) + tab nhúng studio (đã có).

## 6. Nguyên tắc

- Mọi lỗi AI hiện rõ cho user — KHÔNG mock, KHÔNG nuốt. Mọi thao tác AI ghi history/audit. State machine enforce đúng chiều, 409 khi sai. Migrations chỉ additive. Python type hints đầy đủ; TS không dùng `any`.
