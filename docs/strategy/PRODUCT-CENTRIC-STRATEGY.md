# Chiến lược tái cấu trúc BA_Home theo hướng Product-Centric

| | |
|---|---|
| **Mã tài liệu** | STRATEGY-001 |
| **Ngày** | 2026-09-01 |
| **Trạng thái** | draft — chờ PO review |
| **Người lập** | AI Agent (tổng hợp từ 11 phiên phân tích độc lập, mọi dữ kiện đã kiểm chứng trên code) |
| **Người duyệt** | PO (Senior IT BA) |
| **Phạm vi** | Toàn dự án BA_Home — data model, API, UX/IA, AI agent, tài liệu quản trị |

---

## 1. Tóm tắt điều hành

**Yêu cầu:** chuyển toàn dự án sang trục **Product**. Mỗi Product gồm: (1) BRD của product, (2) Master Doc của product, (3) Prototype HTML, (4) Design System của prototype, (5) chuỗi quản lý CR → BRS của CR → Testcase của BRS → automation testcase con.

**Phát hiện quan trọng nhất:** hệ thống **đã tự dịch chuyển về product-centric ở đúng lớp quan trọng nhất** mà chưa ai tuyên bố điều đó. Master Doc đã gắn 1:1 với product (V047), chuỗi CR→BRS→Automation đã chạy thật (V048), CR đã có cột `product_id` (V046). Cái đang thiếu không phải là làm lại — mà là: **3 mảnh mới hoàn toàn** (BRD product, Prototype, Design System của prototype — cả 3 hiện là con số 0 tuyệt đối trong DB lẫn tài liệu), **1 mắt xích lỏng** (CR gắn product chỉ là tùy chọn), **1 mắt xích ra ngoài DB** (script automation trỏ file JSON trên máy cá nhân), và **1 trang UI trung tâm** (hiện xem 1 product từ A-Z phải đi qua 5 mục sidebar, ~10 click).

**Đề xuất:** chiến lược **"Vòng đời BA + AI làm trục"** — thiết kế từ một ngày làm việc của Senior BA, data model và UI là hệ quả — kết hợp kỷ luật ship của phương án "Tiến hóa tối thiểu". Đây là kết quả thẩm định chéo 3 phương án độc lập bởi 3 giám khảo (chi tiết Mục 11): 2/3 giám khảo chọn phương án này, giám khảo còn lại chọn phương án rẻ hơn nhưng toàn bộ điểm mạnh của nó đã được ghép vào bản cuối.

**Xương sống của chiến lược — 3 bất biến banking-grade:**
1. **Maker–checker**: mọi tài liệu gốc (BRD, Master Doc, Prototype) chỉ đổi khi một bản *pending* được checker approve — nhân bản pattern đã chạy đúng của Master Doc.
2. **Chuỗi truy vết khép kín trong DB**: Product ← BRD ← Master Doc ← BRS ← CR → Testcase → Script snapshot → Run. Trả lời được câu hỏi kiểm toán *"nội dung dòng X trong Master Doc đến từ CR nào, ai duyệt, test bằng script nào, chạy ngày nào"* bằng SQL join thuần.
3. **Append-only**: migration chỉ additive, version bất biến sau approve, mọi thay đổi ghi history + audit log.

**Effort:** 6 phase, ~8–12 tuần với 1 dev + AI agents (nhịp của dự án này từ trước tới nay), mỗi phase ship độc lập — **dừng ở bất kỳ phase nào hệ thống vẫn nhất quán**. Giá trị dùng được hằng ngày có từ cuối Phase 1 (tuần 3–4): trang Product Home.

**Cần anh/chị quyết trước khi code:** 10 câu hỏi ở Mục 10, trong đó 3 câu chặn Phase 0 (OQ-1, OQ-2, OQ-3).

---

## 2. Hiện trạng — kiểm chứng trên code, không phải trên tài liệu

### 2.1 Bảng độ sẵn sàng so với yêu cầu

| Thành phần yêu cầu | Trạng thái | Bằng chứng |
|---|---|---|
| Master Doc của product | ✅ **Sẵn sàng** — 1 doc/product, version hóa, duyệt pending, diff, truy vết CR per version | `master_documents.product_id UNIQUE NOT NULL` (V047:15); `master_doc_version_crs` snapshot bất biến (V047:50-72) |
| BRS cho CR | ✅ **Sẵn sàng** — 1 BRS/CR, state machine draft→in_review→approved→golive, history đầy đủ, đã chạy thật | `cr_brs_documents.cr_id UNIQUE` (V048:134) |
| Quản lý CR theo product | 🟡 **Nửa vời** — CR bắt buộc gắn **project** (`project_id NOT NULL`), gắn product chỉ tùy chọn. Chính V046 tự ghi chú: *"chỉ CR có product_id mới merge được vào MasterDoc"* — mắt xích product có thể đứt ngay từ đầu chuỗi nếu BA quên gán | V037:13, V046:65-67; API để Optional (requests.py:39-40); FE **chưa hề expose** trường product_id (api/requests.ts) |
| Testcase của BRS | 🟡 **Có nhưng 2 thế hệ song song** — `automation_test_cases` (V048, đang dùng) vs `test_cases` cũ của test-platform (không quan hệ gì, brs_id là VARCHAR loose, nguồn sync đã chết) | V048:208 vs init.sql:256 |
| Automation testcase con | 🟡 **1 cấp, ra ngoài DB** — 1 testcase map 1 script qua `studio_tc_id TEXT` trỏ file JSON local trên máy từng người; mất máy = mất truy vết | V048:218; Capture Studio là tool local 1 người/máy |
| BRD của product | ❌ **Không tồn tại** — `ba_documents` gắn `project_id NOT NULL`, không có cột product | V045:48 |
| Prototype (HTML) | ❌ **Không tồn tại** — 0 bảng, 0 cột, 0 dòng tài liệu (`grep -ri prototype docs/` = 0 kết quả) | — |
| Design System của prototype | ❌ **Không tồn tại** — DS-ADOPTION-SPEC.md là DS cho UI của chính BA_Home, không phải tài sản đóng gói cho prototype | — |
| View tổng hợp per product | ❌ **Không có** — mọi API đi theo `cr_id`; Master Doc là entity duy nhất query được theo product | — |

### 2.2 Điểm nghẽn chiến lược thật sự

Không phải thiếu bảng — mà là **hai trục anchor đang giằng nhau**: ~60 bảng treo dưới `projects` (di sản project-centric, trong đó nhiều bảng rất giá trị cho quản trị delivery) trong khi luồng nghiệp vụ mới nhất (V046–V048) đã treo dưới `catalog_products`/`change_requests`. BRD-001 v1.3 vẫn vẽ sơ đồ chính thức *"Kế hoạch năm → Dự án → mọi thứ"* và vẽ Catalog là nhánh **cô lập** — thậm chí vẫn khai AI sinh tài liệu là *Out of Scope* (OS-05) dù luồng AI đã chạy thật từ 2026-08-31. **Tài liệu quản trị đã lỗi thời so với chính sản phẩm.**

Ngoài ra có 4 danh mục "hệ thống/ứng dụng" chồng nhau với 3 taxonomy khác nhau (`catalog_products` 5 loại, `ppg_app_registry` 4 loại, `ppg_project_objects` 4 loại khác, `project_product_registry`) — và BR-015 trong BRD hiện hành còn **cấm** hợp nhất chúng. Đây là business rule phải thay.

---

## 3. Mô hình mục tiêu

### 3.1 Cây aggregate — Product là gốc

```
catalog_products (AGGREGATE ROOT — thực thể sống lâu dài của tổ chức)
│
├── product_brds (1:1) → product_brd_versions → product_brd_history      [MỚI]
│         │  "giấy khai sinh" — intent gốc, ĐÓNG BĂNG sau approve
│         └──(init, đúng 1 lần/baseline)──▶
├── master_documents (1:1, ĐÃ CÓ) → master_doc_versions → version_crs
│         "living AS-IS" — chỉ đổi qua merge BRS golive + checker approve
│
├── product_prototypes (1:1) → product_prototype_versions                [MỚI]
│         ├── prototype_version_crs  (version nào do CR nào)             [MỚI]
│         └── cr_prototype_screens   (CR đổi màn hình nào, kiểu gì)      [MỚI]
│         Design System = ds.css versioned (file) + quy tắc trong AI skill
│
├── product_project_links ↔ projects (M:N — project là lớp DELIVERY)     [MỚI]
│
└── change_requests (product_id BẮT BUỘC với CR mới; project_id = nguồn tài trợ)
      └── cr_brs_documents (1:1/CR, ĐÃ CÓ) → cr_brs_history
            └── automation_test_tasks (1:1/CR, ĐÃ CÓ)
                  ├── automation_test_cases (testcase NGHIỆP VỤ, ĐÃ CÓ)
                  │     └── automation_case_scripts (testcase CON —      [MỚI]
                  │           N script/case, snapshot JSON vào DB, bất biến)
                  └── automation_test_runs (ĐÃ CÓ)
```

### 3.2 Chuẩn hóa thuật ngữ (sẽ khóa vào ADR-006)

- **Product** = 1 dòng `catalog_products`, taxonomy duy nhất 5 loại (web_app/mobile/job/etl/api). **Anchor duy nhất cho tài sản tri thức** (BRD, Master Doc, Prototype, chuỗi CR/BRS/test).
- **Project** = khoản đầu tư có thời hạn, sở hữu milestone/nguồn lực/gates/health/checklist/họp. **Không sở hữu đặc tả sản phẩm.**
- **CR** = đơn vị thay đổi trên **một** Product, có thể do một Project tài trợ — khớp nối duy nhất giữa trục delivery và trục tri thức.
- **Object / App Registry** = loại bỏ khỏi ngôn ngữ nghiệp vụ. 3 bảng legacy (`ppg_app_registry`, `ppg_project_objects`, `project_product_registry`) đóng băng read-only.
- Business rule thay BR-015: **"Catalog là nguồn sự thật duy nhất về Product; mọi danh mục hệ thống khác là legacy read-only."**
- Tài liệu phân đôi: **tài liệu Product** (BRD, Master Doc, BRS, prototype — bất biến sau approve, sửa qua CR) vs **tài liệu Project** (charter, biên bản họp, báo cáo tiến độ — hết dự án thì đóng).

### 3.3 BRD vs Master Doc — phân định bản thể (điểm các phương án khác bỏ ngỏ)

| | **BRD của product** | **Master Doc** |
|---|---|---|
| Bản chất | Intent gốc: WHY + WHAT tại thời điểm khai sinh | Đặc tả AS-IS sống: WHAT hiện tại của hệ thống đang chạy |
| Vòng đời | draft → in_review → **approved → đóng băng**. Sửa lớn = re-baseline thành BRD v2 (hiếm, cần checker) | Tiến hóa liên tục: mỗi BRS golive merge thành version pending → approve → HEAD mới |
| Ai sinh | AI skill `gen_brd` từ scope BA nhập + tài liệu nguồn | AI skill `init_master_doc` sinh v1 **từ BRD approved**; sau đó `update_master_doc` (đã có) merge từng BRS |
| Quan hệ | BRD ──(init, đúng 1 lần/baseline)──▶ Master Doc v1. Sau đó **phân kỳ vĩnh viễn, không sync ngược** | Ghi `source_brd_version_id` để truy vết baseline |
| Vai trò với AI | Bối cảnh "ý định gốc" khi gen BRS/prototype (chống drift) | Bối cảnh AS-IS chính khi gen BRS (đã chạy) |

**Invariant kiểm toán được (câu trả lời cho audit SBV):**

> `Master Doc HEAD = init(BRD baseline) + Σ(BRS golive đã merge, theo thứ tự)`

Chuỗi này truy vết 100% trong DB qua cột mới `master_doc_versions.source_brd_version_id` + bảng `master_doc_version_crs` sẵn có. Nếu không phân định rạch ròi BRD vs Master Doc ngay từ đầu, BA sẽ không biết cập nhật tài liệu nào — tái hiện đúng thảm họa "2 thế hệ tài liệu song song" hiện tại.

---

## 4. Vòng đời chuẩn — từng bước: ai làm, AI skill nào, audit gì, truy vết đâu

### Giai đoạn 0 — Khai sinh Product (một lần / mỗi baseline)

| # | Bước | Người | AI skill | Truy vết ghi vào |
|---|---|---|---|---|
| 0.1 | Tạo product trong Catalog | BA/PO | — | ppg_audit_log |
| 0.2 | **[Gen BRD]** — BA nhập scope + dán tài liệu nguồn | BA (maker) | `gen_brd` [mới] | product_brd_versions v1 + history |
| 0.3 | Chỉnh BRD (AI revise theo chỉ dẫn hoặc sửa tay) | BA | `revise_brd` [mới] | mỗi lần 1 dòng history |
| 0.4 | Duyệt BRD | Checker | — | history + audit (actor, from→to) |
| 0.5 | **[Init Master Doc]** từ BRD approved | BA bấm, checker duyệt | `init_master_doc` [mới] | `source_brd_version_id` |
| 0.6 | **[Gen Prototype]** từ BRD + DS rules | BA bấm, preview iframe, checker duyệt | `gen_prototype` [mới] | prototype v1, ds_version |

### Giai đoạn 1 — Vòng CR (lặp lại — trái tim của workflow hằng ngày)

| # | Bước | Người | AI skill | Ghi chú |
|---|---|---|---|---|
| 1.1 | CR intake tại /requests — **bắt buộc chọn product**; project = nguồn tài trợ | BA | — | state machine + request_history đã có |
| 1.2 | **[Gen BRS]** — context = Master Doc HEAD (AS-IS) **+ BRD (intent gốc — bổ sung mới)** + nội dung CR | BA | `gen_brs` (đã có, nâng prompt) | đã chạy thật |
| 1.3 | Revise BRS (AI hoặc sửa tay) | BA | flow đã có | history mỗi lần |
| 1.4 | Duyệt BRS | Checker | — | 409 nếu sai luồng — đã có |
| 1.5 | Auto tạo task automation + **[Gen testcase]** từ BRS | Hệ thống + QA | `gen_test_case` (đã có) | đã chạy thật |
| 1.6 | **[Update Prototype]** theo BRS → bản pending, preview diff, checker duyệt | BA + Checker | `update_prototype` [mới] | guard STALE nếu base ≠ current; ghi `cr_prototype_screens` — "CR này đổi màn hình nào" |
| 1.7 | QA **record script trên prototype** bằng Capture Studio (hoặc trên app thật) | QA | — | `automation_case_scripts`: snapshot JSON vào DB + recorded_on + base_url |
| 1.8 | BRS **golive** khi CR deploy | Checker | — | mở khóa merge |
| 1.9 | **[Merge Master Doc]** — AI merge → pending → checker duyệt → HEAD mới | BA + Checker | `update_master_doc` (đã có) | STALE_PROPOSAL guard đã có |
| 1.10 | Run test → import → **[Gen report]** → close (bắt buộc ≥1 run) → export XLSX | QA | `gen_test_report` (đã có) | đã chạy thật |
| 1.11 | Product 360 tự cập nhật đủ mọi chiều | — | — | endpoint lifecycle [mới] |

**Điểm thiết kế đắt giá nhất (bước 1.6–1.7) — prototype-first testing:** skill gen/update prototype **bắt buộc** gắn `data-testid` ổn định cho mọi element tương tác, mà Capture Studio ưu tiên selector `data-testid` trước mọi selector khác (đã kiểm chứng: `capture-studio/lib/page-recorder.js:64`). Hệ quả: **script record trên prototype sống sót khi app thật thay thế prototype — chỉ đổi baseUrl**. QA viết automation được TRƯỚC khi dev code xong. Prototype không chỉ là "mock để xem" mà là nền test sớm.

---

## 5. Ba mảnh mới — thiết kế cụ thể

### 5.1 BRD của product

Bảng mới `product_brds` / `product_brd_versions` / `product_brd_history` — clone nguyên pattern V047/V048 đã chạy thật (state machine, version pending/approved, history). **Chọn bảng mới thay vì thêm cột vào `ba_documents`** vì ba_documents gắn cứng project và mang nợ 2 thế hệ; bảng mới sạch, đúng một việc. `ba_documents` giữ nguyên cho tài liệu dự án.

### 5.2 Prototype HTML

- Mỗi product 1 prototype hiện hành (UNIQUE — nhất quán Master Doc), nhiều version bất biến. Bundle file lưu filesystem `/data/app-docstore/prototypes/{product_id}/v{n}/` theo đúng ADR-005, có checksum.
- Sinh bằng AI (`gen_prototype` từ BRD, `update_prototype` từ BRS) **hoặc** upload ZIP thủ công — cả hai đều tạo version **pending**, checker duyệt mới thành bản hiện hành.
- Truy vết 2 bảng: `prototype_version_crs` (version nào do CR nào — clone khuôn master_doc_version_crs) và `cr_prototype_screens` với `change_type added/modified/removed` (trả lời "CR này đổi màn hình nào, kiểu gì" — đồng thời là chỉ điểm cho QA biết record màn nào).
- **Serve có auth — tuyệt đối không lặp lại nợ `/sites`** (hiện mount StaticFiles không auth tại ppg main.py:102): route FastAPI kiểm **signed token TTL 15 phút** trên query (iframe không gửi được header Authorization) + cookie scoped path cho sub-resources (CSS/ảnh) + iframe `sandbox="allow-scripts"` (không allow-same-origin) + CSP chặt — chống stored-XSS từ HTML upload/AI-gen. Trả nợ auth cho `/sites` cùng phase.
- **Quy tắc PDPL bắt buộc (đề xuất thành Business Rule):** cấm tuyệt đối dữ liệu khách hàng thật trong prototype; chỉ dữ liệu giả định theo chuẩn. Quy tắc nhúng thẳng vào skill để AI không thể gen ra dữ liệu thật.

### 5.3 Design System của prototype — tách 2 nửa, không cần bảng DB ở v1

- **Nửa runtime:** đóng gói 7 file token DS (`frontend/src/styles/ds/` — đã chứng minh chạy standalone trong `capture-studio/public/ds/`) + lớp component tối thiểu thành **`ds.css` versioned**, serve tại `/prototypes/_assets/ds/{version}/ds.css`. Mọi prototype chỉ `<link>` tới — output AI ngắn, giao diện đồng nhất tuyệt đối, nâng DS không phá version cũ (mỗi prototype version ghi `ds_version` nó dùng).
- **Nửa quy tắc:** nằm trong content của skill `gen_prototype`/`update_prototype` (rút gọn từ DS-ADOPTION-SPEC, rẻ nhờ prompt caching) — quản lý ngay trong trang Cài đặt → Kho skill hiện có, không cần màn hình mới.

### 5.4 Automation testcase con — test asset 2 cấp + snapshot bất biến

Bảng mới `automation_case_scripts`: 1 testcase nghiệp vụ ↔ N script con. Mỗi script: `studio_tc_id` + **snapshot toàn bộ JSON script vào DB** (tại thời điểm map VÀ trước mỗi lần run — append-only, không UPDATE đè) + checksum + `recorded_on (prototype/real_app)` + `prototype_version_id` + `base_url`. Đóng vĩnh viễn điểm đứt "script nằm trên máy cá nhân": kể cả mất máy, DB vẫn giữ đúng bản script đã chạy của từng run — chuẩn audit banking-grade.

---

## 6. Thay đổi data model — 100% additive (V050 → V055)

| Migration | Nội dung | Phase |
|---|---|---|
| **V050** | `product_project_links` (M:N product↔project, backfill từ CR sẵn có) + `plan_product_links` (Kế hoạch năm↔product, thay dần related_systems JSONB tên tự do) + backfill `change_requests.product_id` cho CR cũ (chỉ khi match chắc chắn) + `CHECK (product_id IS NOT NULL) NOT VALID` (khóa dữ liệu mới, không đụng dữ liệu cũ) + gỡ code query bảng ma `test_case_object_links` (endpoint coverage hiện 500 → trả 410, coverage tính theo product) | P0 |
| **V051** | `product_brds` + `product_brd_versions` + `product_brd_history` + cột `master_doc_versions.source_brd_version_id` | P2 |
| **V052** | `product_prototypes` + `product_prototype_versions` (kèm `source_brs_id`, `ds_version`, checksum) + `prototype_version_crs` + `cr_prototype_screens` | P3 |
| **V053** | `automation_case_scripts` (snapshot bất biến, không UNIQUE để append theo run) | P4 |
| **V054** | Cầu nối legacy (tùy chọn): `ba_documents.product_id`, `test_defects.automation_case_id/product_id`, `catalog_product_id` nullable cho 3 registry cũ (biến chúng thành "deployment view" tra cứu được) | P5 |
| **V055** | View `v_product_lifecycle` — KPI Product 360 truy vấn được bằng SQL thuần, phục vụ báo cáo/audit ngoài API | P1 |

**Chuẩn hóa audit ngay từ P0:** mọi hành động trên tài sản product ghi về **một** bảng `ppg_audit_log` (đã fix V049) với entity_type thống nhất (`product_brd` / `master_doc` / `prototype` / `brs` / `automation`); bảng `audit_log` (V045) đóng băng. Một nguồn trả lời duy nhất cho câu hỏi kiểm toán.

**Enforce `product_id` trên CR nằm ở API layer** (DB giữ nullable cho dữ liệu cũ): `POST /requests/change-requests` bắt buộc product_id (422), `POST /brs/generate` chặn sớm 409 CR_NO_PRODUCT (thay vì lộ muộn ở bước merge như hiện tại). **Dropdown chọn product trên form tạo CR phải ship cùng commit với validate backend** — lệch nhịp là user không tạo được CR.

---

## 7. Thay đổi API và AI skill

**Router mới (PPG :8001 — mọi luồng mới tiếp tục ở PPG):**
- `product_brd.py` (~8 endpoint): generate / revise / sửa tay / state machine / versions / history / init-master-doc.
- `prototypes.py` (~10 endpoint): generate từ BRD / update từ BRS / upload ZIP (enforce MIME + size limit theo ADR-005 — lần đầu được enforce thật) / versions / approve-reject (guard STALE) / screens theo CR / preview-token / serve có signed token.
- `GET /catalog/products/{id}/lifecycle` — **Product 360**: 1 call trả BRD status + Master Doc HEAD/pending + prototype + CR theo trạng thái + BRS pipeline + coverage. Nguồn của tab Tổng quan.

**Nâng cấp router hiện có:** requests.py (bắt buộc product_id), cr_brs.py (filter `?product_id=`, thêm BRD vào context gen BRS), automation.py (filter product, map script → tạo snapshot).

**5 AI skill mới** thêm vào kho `ai_skills` sẵn có — chạy qua `run_skill()` hiện tại, **không sửa engine**: `gen_brd`, `revise_brd`, `init_master_doc` (tái dùng parser `<MASTER_DOC>`/`<CHANGE_SUMMARY>` sẵn có), `gen_prototype`, `update_prototype` (output multi-file qua tag `<FILE path="...">`, parser mới ~40 dòng; quy tắc cứng trong prompt: chỉ dùng biến `--ds-*`, không inline CSS, bắt buộc `data-testid`, cấm dữ liệu KH thật).

*Giới hạn thừa nhận:* `run_skill` là single-turn — đủ cho gen tài liệu + bundle HTML theo lô màn hình; chưa đủ cho agent tự sửa nhiều file lặp nhiều vòng. Nếu cần, nâng lên tool-use là bước riêng ngoài lộ trình này.

---

## 8. IA/UX — Product Home

**Nguyên tắc chuyển tiếp: không gỡ lối đi cũ trước khi lối đi mới được dùng thật.**
- **Giai đoạn đầu (P1):** chỉ **thêm** mục sidebar "Sản phẩm" (`/products`, `/products/:id/:tab`) — mọi màn hình cũ giữ nguyên. Thêm deep-link "Xử lý" từ tab CR trong /ppg và từ /requests trỏ sang `/products/:id?cr=...` — giữ lối vào cũ nhưng dồn hành vi xử lý sâu về một nơi.
- **Giai đoạn cuối (P5, sau khi Product Home có usage thật):** gom sidebar 12 → 8 mục (Dashboard / Sản phẩm / Kế hoạch năm / Dự án / Requests / To-do / Danh mục / Cài đặt). BA, Test, Automation, Tài liệu trở thành tab trong Product Home.

**Product Home — 8 tab theo trình tự vòng đời (trái → phải):**

| Tab | Nội dung | Tái dùng (đã kiểm chứng) |
|---|---|---|
| 1. Tổng quan | KPI lifecycle + link projects | endpoint lifecycle mới |
| 2. BRD | viewer + versions + [Gen BRD]/[Duyệt]/[Init Master Doc] | pattern BrsPanel |
| 3. Master Doc | **trang UI đầu tiên cho Master Doc** — HEAD, versions, duyệt pending, diff | API client `getMasterDocs` đang mồ côi (api/ai.ts:233 — có sẵn, chưa màn hình nào gọi) + DiffView nguyên trạng |
| 4. Prototype | iframe sandbox + dropdown version + màn hình đổi theo CR + [Gen]/[Update]/[Duyệt] | pattern iframe AutomationPage |
| 5. CR & BRS | master-detail CR của product, kèm BrsPanel nguyên trạng; pipeline BRS là filter view trong tab này (không tách tab riêng — tránh trùng lắp) | BrsPanel tự trị sẵn (props chỉ crId/crStatus/crCode) |
| 6. Test & Automation | task theo CR: testcase → script con → run → report; nút mở Capture Studio | AutomationTasksTab + prop filter |
| 7. Hồ sơ kỹ thuật | 8 tab metadata catalog cũ gom lại | sections của ProductDetailModal |
| 8. Vận hành (SR) | SR của product (product_id sẵn có từ V037) | SRTab filter |

CatalogPage giữ vai trò "danh bạ" (list + CRUD + nút "Mở Product Home"). Kỷ luật bắt buộc: tách file theo tab trong `features/product/` ngay từ đầu — không để Product Home phình thành CatalogPage 2.4k dòng thứ hai.

---

## 9. Xử lý legacy + lộ trình

### 9.1 Legacy — đóng băng, không đập

| Khối | Số phận |
|---|---|
| Kế hoạch năm (ppg_annual_plans + vệ tinh) | **Giữ** — lớp portfolio trên cùng; nối vào trục mới bằng `plan_product_links` |
| Project + ~38 bảng vệ tinh | **Giữ nguyên** — trục delivery hợp lệ (milestone/gates/health/checklist/họp/XLSX); chỉ thêm link chéo sang Product Home |
| 3 registry (ppg_app_registry, ppg_project_objects, project_product_registry) | **Đóng băng read-only** — ADR-006 supersede ADR-002 + phần anchor ADR-004 |
| BA workflow thế hệ 1 (:8002 — documents, ai_generator mock, sync) | **Khai tử** — 5 blocker đã kết luận trong research 2026-08-31; gỡ luôn `/sync-doc` `/sync-test` không auth |
| Test thế hệ 1 (:8003 — brs_sync, test_cases, generator TODO-stub) | **Khai tử** — V048 + Capture Studio đã thay thế de facto |
| ba_documents v2, test_documents v2 | **Giữ tạm** theo project; dài hạn gom về PPG |
| 2 service :8002/:8003 | **ADR-010 riêng, có điều kiện** — chỉ kích hoạt sau khi: (a) diff hành vi 2 router trùng prefix `/api/v1/test-documents` (tồn tại ở cả 2 service), (b) xác nhận không có luồng nào ngoài FE gọi trực tiếp 2 service |

### 9.2 Lộ trình 6 phase — mỗi phase ship độc lập, dừng ở đâu cũng nhất quán

```
P0 ──▶ P1 ──▶ P2 ──▶ P3 ──▶ P4 ──▶ P5
nền    Home   BRD    Proto  Test2c dọn dẹp
(P2 có thể chạy song song P1)
```

| Phase | Nội dung chính | Thời lượng | Gate nghiệm thu (đo được) |
|---|---|---|---|
| **P0 — Nền** | V050 + V055; enforce product_id (BE+FE cùng commit); filter product; hết 500 bảng ma; ADR-006→009 **draft song song code, không chặn** | 1–1.5 tuần | 100% CR mới có product_id; 0 endpoint 500 |
| **P1 — Product Home MVP** | Route /products/:id/:tab; 6 tab tái dùng (Tổng quan, Master Doc — UI đầu tiên, CR&BRS, Test&Automation, Hồ sơ, SR); sidebar **thêm 1 mục**; deep-link từ màn cũ | 2–3 tuần | BA xem 1 product từ A-Z trong 1 URL thay vì 5 mục sidebar + 10 click |
| **P2 — BRD + AI** | V051; router BRD; 3 skill; tab BRD; gen BRS thêm BRD context | 1.5–2 tuần | BRD gen→duyệt→init Master Doc chạy thật, audit đủ |
| **P3 — Prototype + DS** | Quyết auth static TRƯỚC khi code; V052; ds.css versioned; 2 skill + parser; upload ZIP có control; tab Prototype; trả nợ /sites | 3–4 tuần (phase rủi ro cao nhất) | Gen prototype từ BRD, preview trong Product Home, Capture Studio record được trên prototype |
| **P4 — Test 2 cấp** | V053; snapshot flow trong automation.py; coverage per product | 1–1.5 tuần | Chuỗi product→CR→BRS→testcase→script→run truy vết trọn trong DB |
| **P5 — Hợp thức + dọn** | BRD-002 final; ADR final; sidebar gom 8 mục; V054; xóa dead code; cân nhắc ADR-010 | 1–2 tuần rải | Tài liệu quản trị khớp 100% sản phẩm thật |

**Tổng: ~8–12 tuần** với 1 dev + AI agents (nhịp thực tế của dự án). Giá trị dùng hằng ngày có từ cuối P1.

---

## 10. Câu hỏi cần anh/chị quyết (kèm đề xuất)

**Chặn Phase 0:**
1. **OQ-1 — Cutoff enforce product_id trên CR:** áp cho CR tạo mới từ khi deploy P0; CR cũ không backfill được thì gắn nhãn legacy, không merge Master Doc (giữ hành vi hiện tại). *Đề xuất: đồng ý như trên.*
2. **OQ-2 — Backfill CR cũ:** script chỉ backfill khi match chắc chắn; phần còn lại BA gán tay dần qua UI hay chấp nhận nằm ngoài trục product vĩnh viễn? *Đề xuất: BA gán tay dần, không ép.*
3. **OQ-3 — Bảng ma test_case_object_links:** gỡ code + 410 (coverage theo product) — endpoint hiện đang 500 nên đây là thay đổi giảm rủi ro. *Đề xuất: gỡ dứt khoát.*

**Chặn Phase 2–3:**
4. **OQ-4 — Chính sách re-baseline BRD:** khi nào được lập BRD v2, ai approve? *Đề xuất: chỉ khi major revamp, checker là PO.*
5. **OQ-5 — 1 hay N prototype/product:** *Đề xuất: 1 (UNIQUE như Master Doc), mở rộng sau bằng bảng mới nếu cần — lưu ý convention additive không cho drop UNIQUE, nên cần chốt trước khi tạo bảng.*
6. **OQ-6 — DS org-wide hay per-product:** *Đề xuất v1: một bộ ds.css org-wide versioned.*
7. **OQ-7 — Quy tắc dữ liệu mẫu prototype (PDPL):** xác nhận thành Business Rule bắt buộc: cấm dữ liệu KH thật, chuẩn dữ liệu giả định. *Đề xuất: xác nhận.*

**Chặn Phase 4–5:**
8. **OQ-8 — Maker-checker/RBAC theo product:** v1 chấp nhận "mọi user đăng nhập đều duyệt được" (như Master Doc hiện tại) hay chặn ngay bằng RBAC? Nền có sẵn (`catalog_roles.product_access_level` + scope product) nhưng chưa enforce — đây là khoảng trống SoD đã ghi nhận từ review. *Đề xuất: v1 chấp nhận, ADR-009 + enforce ở phase riêng ngay sau P5 — nhưng cần anh/chị xác nhận mức chấp nhận rủi ro.*
9. **OQ-9 — Capture Studio:** chấp nhận mô hình "snapshot vào DB là nguồn sự thật, file local là bản nháp" hay đầu tư nâng studio thành service tập trung multi-user? *Đề xuất: chấp nhận snapshot, đánh giá lại sau 2 tháng dùng.*
10. **OQ-10 — Trong yêu cầu, danh sách của anh/chị kết thúc bằng "quản lý," còn dở** — còn hạng mục nào định liệt kê thêm không (ví dụ: quản lý release/golive, quản lý defect theo product)?

---

## 11. Các phương án đã cân nhắc và lý do chọn

3 phương án được thiết kế độc lập, 3 giám khảo chấm chéo theo 5 tiêu chí (đáp ứng yêu cầu / rủi ro migration / effort / trải nghiệm BA / bền vững kiến trúc):

| Phương án | Điểm mạnh | Vì sao không chọn nguyên bản | Điểm |
|---|---|---|---|
| **A — Tiến hóa tối thiểu** | Rẻ nhất (7–8 tuần/1 dev), rủi ro thấp nhất, mỗi phase ship độc lập | Nông đúng chỗ BA cần sâu: không phân định BRD vs Master Doc (nguy cơ tái hiện "2 thế hệ tài liệu"), snapshot script thiết kế mutable (vi phạm append-only), governance dồn cuối dễ rớt | 39–42/50 (1 giám khảo chọn) |
| **B — Product-First triệt để** | IA đích sạch nhất, chuẩn hóa thuật ngữ quyết liệt nhất, hợp nhất audit | Ôm 2 canh bạc rủi ro cao không phục vụ trực tiếp yêu cầu: port 27 endpoint + khai tử 2 service, và cắt 5 mục sidebar trước khi bản thay thế tồn tại | 38–41/50 (0 giám khảo chọn) |
| **C — Vòng đời BA + AI làm trục** ✅ | Duy nhất có invariant kiểm toán SQL-kiểm chứng được; phân định BRD/Master Doc; test asset 2 cấp bất biến; prototype-first testing; quy tắc PDPL | Nguyên bản hơi nặng (11–16 tuần/2–2.5 người) và P0 chặn bởi 4 ADR — **đã khắc phục bằng cách ghép kỷ luật ship của A** (ADR draft song song, không gỡ nav sớm, nhịp 8–12 tuần) | 42–44/50 (2 giám khảo chọn) |

**Bản đề xuất trong tài liệu này = kiến trúc của C + kỷ luật ship của A + 6 ý tốt nhất của B** (plan_product_links sớm, hợp nhất audit, câu thay BR-015, view v_product_lifecycle, deep-link, điều kiện tiên quyết ADR-010).

---

## 12. Rủi ro chính phải quản trị

1. **Stored-XSS / lộ dữ liệu qua prototype HTML** — bắt buộc quyết signed-token + CSP + iframe sandbox **trước khi code P3**; upload ZIP enforce MIME/size; trả nợ /sites cùng phase. Prototype là mock màn hình nghiệp vụ ngân hàng — không được serve trần.
2. **Backfill product_id có thể map sai** → nhiễu truy vết Master Doc. Chỉ backfill khi match chắc chắn, còn lại legacy.
3. **RBAC chưa enforce** — chuỗi phê duyệt hiện là hình thức nếu mọi user đều approve được (OQ-8). Phải chốt mức chấp nhận rủi ro trước khi mở rộng người dùng.
4. **AI single-turn + max_tokens** — gen prototype nhiều màn hình phải chia lô; ds.css tách ngoài giảm 80% output.
5. **Dual-entry giai đoạn chuyển tiếp** (BRD trong ba_documents cũ vs product_brds mới) — kiểm soát bằng quy ước ADR-006 + UI dẫn hướng + deep-link, không phải bằng "thông điệp".
6. **Schema phình** (~95 → ~110 bảng) — chấp nhận được với điều kiện CODEBASE-GUIDE + deprecation notes cập nhật theo từng phase.

---

## Phụ lục — Phương pháp

Báo cáo tổng hợp từ 11 phiên phân tích AI độc lập (2026-09-01): 5 phiên khảo sát hiện trạng (data model ~95 bảng, backend 3 service, frontend IA, tài liệu quản trị BRD/ADR, hạ tầng prototype & DS), 3 phiên thiết kế chiến lược độc lập, 3 phiên thẩm định chéo (lăng kính nghiệp vụ BA / kỹ thuật & migration / lộ trình & giá trị). Mọi dữ kiện hiện trạng đều kèm tham chiếu file:line và được kiểm chứng chéo ít nhất 2 lần trên code thật; các claim tái dùng component (BrsPanel, DiffView, AutomationTasksTab, getMasterDocs mồ côi, data-testid trong Capture Studio, /sites không auth) đã được xác minh trực tiếp.
