# Chiến lược tái cấu trúc BA_Home theo hướng Product-Centric

- **Mã:** STRATEGY-001 · **Phiên bản:** 5.3 · **Ngày:** 2026-09-01
- **Trạng thái:** đã chốt toàn bộ câu hỏi kiến trúc · **đang triển khai** — P1 và P2 xong
- **Thay thế:** v4.0 (v1–v4 xem Git history)
- **Mới ở v5:** PO trả lời 3 câu chặn + 10 quyết định giao diện; **đảo hướng hạng mục
  Capture Studio** (không viết lại `store.js`); ghi lại phần đã code và kiểm chứng thật.
- **Mới ở v5.1:** rà soát đối chiếu mã nguồn với chiến lược — tìm **8 điểm lệch**, trong đó
  3 phá đúng bất biến kiểm toán và 1 là lỗ hổng bảo mật. Tất cả đã sửa — xem **Mục 7.7**.
- **Mới ở v5.2:** rà soát riêng **AI Agent và skill của từng bước** trong luồng BA — tìm 7 lỗi,
  nặng nhất là phản hồi AI bị cắt vẫn được lưu như tài liệu hoàn chỉnh. Đồng thời chuyển 5 skill
  của luồng BA sang **dạng thư mục chuẩn Claude skill** (SKILL.md + templates/ + references/)
  theo yêu cầu PO — xem **Mục 7.8** và **Mục 7.9**.
- **Mới ở v5.3:** PO hỏi *"tại sao tách riêng phần test và phần automation"* — không có lý do
  thiết kế nào, đó là nợ kỹ thuật do hai thế hệ nằm cạnh nhau và **trái QĐ-3**. Đã gộp thành
  một module — xem **Mục 7.10**. QĐ-3 chuyển từ ⏳ P4 sang ✅.

---

## 1. Tóm tắt điều hành

**Vấn đề:** BA_Home lấy **Project** làm trục. Dự án ngân hàng sống 6–18 tháng, hệ thống sống 10 năm.
Dự án đóng là mọi thay đổi sau đó — vá lỗi vận hành, yêu cầu tuân thủ, tối ưu nhỏ — **không còn chỗ
ghi nhận**. Tri thức về hệ thống tan theo dự án.

**Hướng đi:** chuyển trục sang **Product**. Product sở hữu Master Doc và chuỗi
CR → BRS → Test → Automation lâu dài. Project là **giai đoạn đầu tư có thời hạn**: sở hữu BRD,
nguồn lực, milestone; khai sinh hoặc góp phần vào Product rồi kết thúc.

**Tiến độ:** 4/5 giai đoạn còn lại; **P1 (quyền sở hữu CR) và P2 (sơ đồ + khởi tạo Master Doc)
đã xong và kiểm chứng trên dữ liệu thật** — xem Mục 7.

---

## 2. Cơ sở — 19 quyết định của PO

| # | Quyết định | Trạng thái |
|---|---|---|
| QĐ-1 | Quản lý CR theo Product | ✅ P1 |
| QĐ-2 | Tài liệu theo domain, mỗi domain có module Product | ✅ P2 |
| QĐ-3 | Testcase gom một hệ duy nhất, đi theo hướng automation | ✅ v5.3 — Mục 7.10 |
| QĐ-4 | Automation testcase con quản lý ở DB, không JSON cục bộ | ⚠️ **đã đảo hướng** — Mục 5.3 |
| QĐ-5 | **Không** làm BRD của Product — BRD thuộc Project | ✅ (không xây) |
| QĐ-6 | Quản lý file Prototype (HTML) cho project và product | ⏳ P3 |
| QĐ-7 | Quản lý Design System của prototype, cùng cấp prototype | ⏳ P3 |
| QĐ-8 | View tổng hợp per product | ✅ P2 (trong trang Tài liệu) |
| QĐ-9 | Diagram (workflow / sequence / dataflow) cho project, product, BRS | ✅ P2 |
| QĐ-10 | Report theo **từng** testcase, export theo skill AI cấu hình được | ⏳ P4 |
| QĐ-11 | Bỏ kế hoạch năm → Báo cáo theo kỳ (project, product, CR) | ✅ P2 |
| QĐ-12 | Chỉ giữ trục vòng đời, phần rìa cắt được thì cắt | ✅ một phần — Mục 6 |
| QĐ-13 | Cấu hình API key cứ lưu; báo lỗi nhưng thực tế vẫn call được | ✅ (Phụ lục B) |
| QĐ-14 | Master Doc v1: AI sinh từ BRD / import / sửa tay | ✅ P2 (import + sửa tay) |
| QĐ-15 | Kế hoạch năm — bỏ luôn cả DB và ràng buộc | ✅ V050 |
| QĐ-16 | Không đảo trục; output của 1 Project là 1 Product; CR chỉ thuộc Product | ✅ P1 |
| **QĐ-17** | **Project ↔ Product là 1:1 tùy chọn** — có project thì sinh 1 product; product tiếp nhận sẵn thì không có project | ✅ P1 |
| **QĐ-18** | **Giữ ref project_id trên CR nhưng không bắt buộc** | ✅ P1 |
| **QĐ-19** | **Sửa tay Master Doc phải qua duyệt — bằng CR nội bộ, bỏ qua BRS và test, cập nhật thẳng Master Doc** | ✅ P1 |

---

## 3. Mô hình mục tiêu

### 3.1 Product là trục chính

```
projects (giai đoạn đầu tư, có thời hạn)
├── project_briefs ← BRD (ĐÃ CÓ, 25 cột — hiện 0 dòng)
├── milestones · members · gates · files · diagrams        [MỚI: diagrams]
                        │
                        │ catalog_products.origin_project_id  (1:1 TÙY CHỌN, QĐ-17)
                        ▼
catalog_products (TRỤC CHÍNH — 28 sản phẩm, 7 domain, sống lâu dài)
├── master_documents (1 product = đúng 1 doc, DB đã ràng buộc UNIQUE)
│     └── master_doc_versions → version_crs · internal_cr_id   [MỚI: internal_cr_id]
├── diagrams        [MỚI]  ← QĐ-9, dùng chung project | product | brs
├── prototypes      ⏳ P3
├── design_systems  ⏳ P3
│
└── change_requests
      product_id  BẮT BUỘC   ← quyền sở hữu       (QĐ-16)
      project_id  TÙY CHỌN   ← quy kết nguồn      (QĐ-18)
      cr_kind     standard | internal              (QĐ-19)
        │
        ├── standard → cr_brs_documents → automation_test_tasks → cases → runs
        └── internal → merge thẳng Master Doc (vẫn phải duyệt), KHÔNG qua BRS/test
```

### 3.2 Quyền sở hữu ≠ quy kết nguồn

Điểm điều chỉnh quan trọng nhất so với v2. QĐ-16 nói *"CR chỉ thuộc Product"*, QĐ-11 nói
*"báo cáo công việc gồm project, product, CR"*. Hai câu chỉ mâu thuẫn nếu coi CR có **một** loại
quan hệ với dự án. Thực tế có hai:

| | **Quyền sở hữu** | **Quy kết nguồn** |
|---|---|---|
| Trả lời | CR sửa tài liệu của hệ thống nào? Ai duyệt? | Công/tiền cho CR đến từ đâu? |
| Thuộc về | **Product** — bắt buộc | **Project** — tùy chọn |
| Khi dự án đóng | Không ảnh hưởng | CR mới ghi trống |

### 3.3 Quan hệ Project ↔ Product (QĐ-17)

Chốt theo PO: **1:1 tùy chọn**, biểu diễn bằng `catalog_products.origin_project_id`
(nullable + UNIQUE partial index). Không cần bảng nhiều-nhiều như v3/v4 đề xuất — đơn giản hơn hẳn.

- Sản phẩm **có thể không có** dự án khai sinh — đúng thực tế 28 sản phẩm hiện tại.
- Một dự án khai sinh **tối đa một** sản phẩm — đúng QĐ-16.

*Hệ quả cần biết:* dự án **nâng cấp** hệ thống có sẵn sẽ không nối được vào sản phẩm nó tác động
(chỉ nối được qua CR mà nó tài trợ). PO đã xác nhận không cần xử lý.

### 3.4 Bất biến kiểm toán

> **Master Doc HEAD = version được duyệt gần nhất.**
> **Mọi** version truy được: `source` · người tạo · người duyệt · thời điểm · **lý do**.

Trả lời câu hỏi *"điều khoản này đến từ đâu"*:

| `source` | Truy về |
|---|---|
| `cr_merge` | BRS → CR → người duyệt CR |
| `manual` | **CR nội bộ** → người sửa + lý do bắt buộc + người duyệt |
| `init_import` / `init_manual` / `init_ai` | nguồn khởi tạo v1 — ghi theo đường người dùng chọn |

**Không còn đường ghi đè trực tiếp.** Đây là lỗ hổng lớn nhất của bản cũ: endpoint sửa tay
tự đánh dấu `approved` — một người vừa sửa vừa tự duyệt tài liệu đặc tả. Đã đóng ở P1 (Mục 7).

---

## 4. Hiện trạng — số liệu đã kiểm chứng

| Hạng mục | Số liệu | Ý nghĩa |
|---|---|---|
| Sản phẩm | **28** (7/12 domain) | Trục chính đã có dữ liệu thật |
| Dự án | **22** | |
| CR | **3**, chưa CR nào gắn sản phẩm | Phải gắn sản phẩm trước khi dùng luồng BA |
| Master Doc | **0** | Chuỗi CR→BRS→Merge chưa chạy trên dữ liệu thật |
| BRD (`project_briefs`) | **0** | Đường "AI sinh Master Doc từ BRD" chưa có đầu vào |
| Skill AI | **5** (thêm `gen_diagram`) | |

**Đọc ra một câu:** phần "sản phẩm" có dữ liệu thật, phần "tri thức về sản phẩm" gần như trống.
Đây vẫn là thời điểm tốt nhất để đổi cấu trúc — gần như không có dữ liệu phải di trú.

---

## 5. Các hạng mục

### 5.1 Diagram (QĐ-9) — ✅ ĐÃ LÀM

Tích hợp skill **diagram-design** (repo `cathrynlavery/diagram-design`, MIT, 39 loại diagram)
nhúng tại `backend/ppg/app/skills/diagram-design/`. Chi tiết vận hành: Mục 7.2.

### 5.2 Prototype + Design System (QĐ-6, QĐ-7) — ⏳ P3

```
prototypes (project_id? · product_id?  ← khóa ngoại thật, CHECK đúng-một
            name, entry_file, status)
  └── prototype_versions (version, storage_path, change_summary, cr_id?, created_by)
design_systems (project_id? · product_id?  ← cùng mẫu, name, status)
  └── design_system_versions (version, tokens_file, css_file, change_summary)
```

⚠️ **Dùng khóa ngoại thật ngay từ đầu, không dùng `(owner_type, owner_id)` đa hình.** Bài học
từ bảng `diagrams`: mẫu đa hình để lại dòng mồ côi mà không màn nào hiển thị nên không ai dọn
(L-3, Mục 7.7), và ràng buộc chống lệch viết dạng ba nhánh `OR` **không chặn được gì** vì logic
ba giá trị của SQL (L-4). Viết CHECK dạng `COALESCE`/`CASE`.

File lưu theo ADR-005 (đĩa + đường dẫn trong DB). Prototype xem qua iframe.
`prototype_versions.cr_id` trả lời *"CR nào đổi màn hình nào"*.

**Điểm nối với test:** prototype có `data-testid` ổn định thì Capture Studio ghi được kịch bản
**trước khi code thật xong** — rút ngắn vòng lặp BA → QA.

### 5.3 Automation — ⚠️ ĐÃ ĐẢO HƯỚNG (thay QĐ-4)

**Quyết định mới của PO (2026-09-01):** *"Chuyển Capture Studio sang DB làm mất tính năng ghi hoặc
ghép test case => nếu vậy thì không cần sửa. nhưng cần nghiên cứu việc lưu lại để có thể tái sử dụng
có nhiều trường hợp retest auto cho toàn bộ hệ thống."*

Quyết định này **đúng và loại bỏ rủi ro cao nhất của cả kế hoạch**. Bản v3/v4 định viết lại
`capture-studio/lib/store.js` để chuyển sang API — hạng mục kỹ thuật nặng nhất, rủi ro cao nhất,
và đổi lấy một thứ không phải mục tiêu thật. Mục tiêu thật là **tái sử dụng và chạy hồi quy**,
không phải "dữ liệu phải nằm trong DB".

#### 5.3.1 Nguyên tắc

**Không sửa một dòng nào trong `store.js`, `recorder.js`, `runner.js`, `codegen.js`.**
Studio vẫn là nơi *soạn* kịch bản, vẫn lưu 1 file JSON mỗi test case, vẫn giữ nguyên
`type: atomic | composite` và mảng `children` — nên tính năng ghi và ghép test case **không thể mất**.

Thêm một lớp **sao lưu và tái dùng** bên ngoài, thuần additive.

#### 5.3.2 Lưu để tái sử dụng

```
automation_studio_cases [MỚI]        ← BẢN SAO, không phải nguồn sự thật
  studio_tc_id  TEXT UNIQUE          (tc_xxxxxxxx do Studio sinh)
  case_type     atomic | composite
  name, description
  payload       JSONB                ← nguyên văn file JSON của Studio
  content_hash  TEXT                 ← chỉ ghi lại khi nội dung thật sự đổi
  synced_at, synced_by
  missing_in_studio BOOLEAN          ← case đã bị xóa ở máy nào đó
```

Hai nút, chạy khi người dùng bấm — **không** hook tự động vào Studio:

| Nút | Việc | Giải quyết |
|---|---|---|
| **Đồng bộ vào hệ** | Đọc `GET {STUDIO}/api/testcases`, upsert theo `content_hash` | Kịch bản của một người không còn chỉ nằm trên máy người đó. Có sao lưu, có lịch sử |
| **Nạp về máy** | Đẩy case trong DB mà máy hiện tại chưa có sang `POST {STUDIO}/api/testcases` | **Đây là "tái sử dụng"** — máy mới clone repo, bấm một nút, có đủ kịch bản để chạy |

`payload` giữ nguyên văn nên nạp lại là khôi phục **đúng** case, kể cả composite với `children`.

#### 5.3.3 Bộ hồi quy toàn hệ thống

Đây là phần trả lời trực tiếp *"nhiều trường hợp retest auto cho toàn bộ hệ thống"*.
Hôm nay task test **gắn với một CR**, nên chỉ test được phần thay đổi. Chạy lại toàn hệ thống
cần một khái niệm khác:

```
automation_suites [MỚI]
  name, description
  scope     global | domain | product
  owner_id  (domain_code hoặc product_id, NULL khi scope=global)

automation_suite_items [MỚI]
  suite_id, studio_tc_id, sort_order

automation_suite_runs [MỚI]
  suite_id, started_at, finished_at, triggered_by, environment
  summary JSONB (passed/failed/skipped)

automation_suite_run_items [MỚI]
  run_id, studio_tc_id, status, duration_ms, error_message, evidence_paths JSONB
```

- **Suite là lớp trên composite, không thay thế nó.** Composite của Studio vẫn dùng được làm một
  phần tử trong suite.
- Ba mức phạm vi phủ đúng nhu cầu: hồi quy **một sản phẩm** sau khi merge Master Doc,
  hồi quy **một domain** trước kỳ release, hồi quy **toàn hệ thống** trước golive lớn.
- `automation_suite_run_items` chính là chỗ để làm **report theo từng testcase** (QĐ-10) —
  không cần bảng riêng như v4 đề xuất.

#### 5.3.4 Việc bỏ khỏi kế hoạch

| v3/v4 định làm | v5 |
|---|---|
| Viết lại `store.js` sang API | **BỎ** — rủi ro cao, không phải mục tiêu |
| `automation_case_steps` (bước trong DB) | **BỎ** — bước vẫn ở Studio |
| `automation_case_children` (case con trong DB) | **BỎ** — `children` vẫn ở Studio |
| `automation_case_results` | Thay bằng `automation_suite_run_items` |

### 5.4 Trang Tài liệu theo domain (QĐ-2) — ✅ ĐÃ LÀM

**Là khung nhìn hợp nhất, không phải cây thư mục vật lý.**

```
{domain}/
├── Dự án  → file trên đĩa: BRD, biên bản họp, tài liệu test (cây thư mục thật)
└── Sản phẩm → trong DB: Master Doc + version · BRS theo từng CR · Sơ đồ · Test
```

### 5.5 Báo cáo theo kỳ (QĐ-11) — ✅ ĐÃ LÀM

Trục tổng hợp theo yêu cầu PO: **CR › Product › Project**. Chi tiết: Mục 7.4.

---

## 6. Phạm vi cắt bỏ (QĐ-12)

| Hạng mục | Trạng thái |
|---|---|
| 15 bảng Kế hoạch năm + 3 router + 22 file frontend | ✅ đã xóa (V050) |
| Trang BA thế hệ 1 (`/ba`, `BAPage.tsx` 759 dòng) | ✅ đã xóa |
| `ProjectObjectsPage` (route `/objects`, không có trong menu) | ✅ đã xóa |
| 4 tab suy diễn của trang BA (Business / Solution / Delivery / Documents) | ✅ đã xóa |
| Menu điều hướng trên cùng (trùng sidebar) | ✅ đã xóa |
| Menu Danh mục (chuyển vào Cài đặt) | ✅ đã chuyển |
| Stage Gate / Health RAG / Stakeholder / Priority scoring | ⏳ chờ rà |
| Danh mục Vai trò & Quyền (chưa enforce ở đâu) | ⏳ giữ tới khi làm phân quyền |

---

## 7. Việc đã thực hiện trong phiên 2026-09-01

### 7.1 P1 — Quyền sở hữu CR và maker-checker Master Doc

**V052** (additive về bảng, có nới ràng buộc và sửa hành vi khóa ngoại):

| Thay đổi | Vì sao |
|---|---|
| `change_requests.project_id` bỏ `NOT NULL` | Trước đó **không thể tạo CR ngoài dự án** — đúng nút thắt QĐ-1 |
| FK `project_id`: `CASCADE` → `SET NULL` | **Lỗi thật:** xóa một dự án đã đóng sẽ xóa sạch mọi CR của nó, mà CR là tri thức của sản phẩm |
| FK `product_id`: `SET NULL` → `RESTRICT` | Không cho xóa sản phẩm còn CR; tránh CR mồ côi trong im lặng |
| `cr_kind` (`standard` \| `internal`) | QĐ-19 |
| `catalog_products.origin_project_id` + UNIQUE partial | QĐ-17 |
| Nới CHECK `master_doc_versions.source` thêm `init_ai` \| `init_import` \| `init_manual` | Trước đó DB **không phân biệt được** 3 đường khởi tạo của QĐ-14 |
| `master_doc_versions.internal_cr_id` | Truy vết bản sửa tay về CR nội bộ |

**Backend:** `product_id` thành bắt buộc khi tạo CR; `project_id` tùy chọn nhưng vẫn kiểm tra tồn tại.
Endpoint chi tiết CR bổ sung join `catalog_products` — trước đó trả `product_name = null` dù đã gắn
sản phẩm (lỗi tìm ra khi chạy thật).

**`PUT /master-docs/{id}` viết lại theo QĐ-19.** Hành vi cũ: ghi đè HEAD ngay, tự đánh dấu
`approved`. Hành vi mới:
1. Bắt buộc nhập lý do ≥ 5 ký tự (trước đây mặc định "Cập nhật thủ công" nên hồ sơ kiểm toán vô nghĩa).
2. Sinh **CR nội bộ** (`cr_kind='internal'`) dùng chung bộ đếm mã CR → có mã tra được.
3. Tạo version `manual` ở trạng thái `pending`. **Master Doc chưa đổi.**
4. Trả về diff + thông báo nêu rõ cần duyệt bản nào.

**Frontend:** form tạo CR ở cả hai chỗ (màn Requests và tab CR trong dự án) đổi thành
**chọn Sản phẩm (bắt buộc) + Dự án tài trợ (tùy chọn)**.

### 7.2 P2a — Tích hợp AI vẽ diagram

Nhúng skill **diagram-design** (MIT, 39 loại) tại `backend/ppg/app/skills/diagram-design/`
— `SKILL.md` + 57 file reference + 3 script tách IR. Giấy phép và cách cập nhật:
`ATTRIBUTION.md` trong thư mục đó.

**Vì sao skill nằm ở đĩa của PPG, không ở `.claude/` hay trong DB:**

| Chỗ | Vì sao không |
|---|---|
| `.claude/skills/` | Đó là thư mục của Claude Code chạy trên máy lập trình viên. AI của BA_Home chạy trong tiến trình PPG và không đọc chỗ đó → deploy lên server là mất skill |
| Bảng `ai_skills` (Cài đặt) | Nội dung cần nạp **khác nhau theo từng loại diagram** (585 KB / 57 file), không thể ghép từ một ô `content`. Đây là mã nguồn kèm giấy phép MIT — phải đi theo Git để biết đang dùng bản nào, cập nhật bằng `cp`, được review khi đổi |

Nên tách đôi: **DB giữ phần hướng dẫn nghiệp vụ PO sửa được** (skill `gen_diagram`: quy ước đặt tên
hệ thống ngân hàng, chốt kiểm soát phải hiện thành node, cấm đưa dữ liệu khách hàng thật vào nhãn);
**đĩa giữ phần kỹ thuật dựng hình.**

**Ba điều chỉnh bắt buộc để skill chạy được qua API** (`services/diagram_skill.py`):

1. **Vô hiệu hóa cổng hỏi thương hiệu.** §0 của `SKILL.md` yêu cầu *tạm dừng và hỏi người dùng*
   nếu style guide còn mặc định. Qua API thì việc đó trả về **một câu hỏi thay vì một diagram**.
2. **Thay toàn bộ token bằng Design System BA_Home** (`references/style-guide-ba-home.md`):
   accent `#155EEF`, ink `#101828`, rule `#EAECF0`, link `#6941C6`.
3. **Cấm phụ thuộc mạng ngoài.** Bản gốc nạp font từ Google Fonts CDN — mạng nội bộ ngân hàng chặn
   CDN và iframe `sandbox` không có quyền ra ngoài.

**Bảo mật (V051 + `sanitize_diagram_html`).** Diagram là HTML lưu vào DB rồi render lại, nên có hai
lớp chặn: (a) tầng ghi **gỡ** `<link>` / `<script>` / `@import` và **từ chối** `<iframe>`, `<form>`,
`src="http…"`, `on*=`, `javascript:`; (b) tầng hiển thị dùng `<iframe sandbox="">` rỗng hoàn toàn.
Đã thử 6 payload tấn công — chặn đúng cả 6.

**Ba đường tạo:** AI vẽ từ mô tả + bối cảnh trong hệ · AI chỉnh theo yêu cầu bằng lời (tăng version,
bản cũ vẫn xem lại được) · nhập Mermaid/draw.io (tách IR bằng script của repo gốc rồi AI vẽ lại theo
DS; hoặc lưu mã Mermaid thô, không tốn hạn mức AI).

**Chỗ gắn:** tab *Sơ đồ* trong chi tiết dự án · tab *Sơ đồ* trong tài liệu sản phẩm ·
khối *Sơ đồ của BRS này* trong BrsPanel — đúng ba chủ sở hữu của QĐ-9.

### 7.3 P2b — Tài liệu sản phẩm (QĐ-2, QĐ-8, QĐ-14)

Trang Tài liệu thêm nhánh **Sản phẩm** song song với **Dự án**. Chọn sản phẩm → 4 tab:

| Tab | Nội dung |
|---|---|
| Master Doc | Nội dung HEAD · lịch sử version kèm nguồn / người duyệt / lý do · cảnh báo bản chờ duyệt · **khởi tạo v1 bằng import file `.md`/`.txt` hoặc soạn tay** (QĐ-14) |
| CR & BRS | CR của sản phẩm kèm trạng thái BRS, phân biệt CR nghiệp vụ / nội bộ |
| Sơ đồ | `DiagramsPanel` |
| Test | chờ P4 |

### 7.4 P2c — Dashboard báo cáo theo kỳ (QĐ-11)

Tab **Báo cáo theo kỳ**: chọn từ ngày – đến ngày (kèm mốc nhanh tháng/quý/năm) + lọc domain →

- 8 chỉ số: CR trong kỳ · CR nội bộ · CR đã có BRS · BRS đã golive · CR đã có việc test ·
  sản phẩm chịu tác động · lần cập nhật Master Doc · dự án có mốc trong kỳ
- **CR › Product › Project**: mỗi sản phẩm một khối, trong khối liệt kê dự án tài trợ kèm số CR,
  rồi bảng CR chi tiết
- **CR chưa gắn sản phẩm hiện riêng, không ẩn** — đó là dữ liệu cần xử lý
- Xuất CSV có BOM để Excel Windows đọc đúng dấu tiếng Việt

### 7.5 Giao diện — 6 yêu cầu của PO

| Yêu cầu | Đã làm |
|---|---|
| "PPG System" → "Project" | Nhãn sidebar, breadcrumb, link API |
| Bỏ menu trên cùng | Gỡ thanh `ds-seg`; topbar chỉ còn tìm kiếm + người dùng |
| Trang BA làm lại, bỏ tab + bỏ text giải thích | 5 tab → **không tab**; chỉ còn chọn CR + AI sinh tài liệu |
| BA chỉ chọn CR và AI Gen tài liệu | Danh sách CR (lọc theo sản phẩm/trạng thái/từ khóa) + `BrsPanel`. CR nội bộ ẩn khỏi màn BA vì không cần BRS |
| Tài liệu phải thấy tài liệu Product | Mục 7.3 |
| Danh mục chuyển vào Cài đặt | Cài đặt 3 tab: AI Agent · Kho skill · Danh mục. `/catalog` chuyển hướng, link cũ không chết |

### 7.7 Rà soát đối chiếu chiến lược ↔ mã nguồn

Sau khi code, rà lại từng tuyên bố "đã làm" ở Mục 2 và từng bất biến ở Mục 3.4 xem mã nguồn
có thật sự làm đúng không. Tìm ra **8 điểm lệch**. Bốn điểm đầu là lỗi thật, không phải chuyện
tài liệu ghi thiếu.

**L-1 — Ba đường khởi tạo Master Doc vẫn không phân biệt được.** ⛔ *bất biến kiểm toán*
V052 nới CHECK cho `init_ai | init_import | init_manual`, nhưng mã nguồn **chưa bao giờ dùng** —
vẫn ghi `source='initial'` cho mọi bản v1. Nghĩa là Mục 3.4 tuyên bố "truy được nguồn khởi tạo"
mà hệ thống không làm được. Sửa: thêm `init_method` vào API tạo, ghi `init_import`/`init_manual`
đúng đường người dùng đã chọn, hiện luôn trên màn khởi tạo để người dùng biết mình đang ghi gì
vào hồ sơ. Kiểm chứng: import → `init_import`.

**L-2 — Truy vết CR nội bộ sang Master Doc trả về RỖNG.** ⛔ *bất biến kiểm toán*
Endpoint `/change-requests/{id}/master-doc-impact` — chỗ trả lời câu hỏi *"CR này sửa chỗ nào
trong Master Doc"* — **chỉ** join bảng `master_doc_version_crs`. Luồng merge từ BRS có ghi vào
bảng đó, nhưng luồng sửa tay (CR nội bộ, QĐ-19) thì không: tôi chỉ đặt `internal_cr_id` trên
version. Kết quả: hỏi về CR nội bộ thì trả danh sách trống — đúng nhóm rủi ro cao nhất mà Mục 3.4
nói phải liệt kê riêng để giải trình. Sửa: luồng sửa tay ghi thêm một dòng `master_doc_version_crs`.
Kiểm chứng: 1 version truy được, kèm lý do.

**L-3 — Bảng `diagrams` không có toàn vẹn tham chiếu.** ⛔
V051 dùng cặp `(owner_type, owner_id)` đa hình cho gọn, đánh đổi mất khóa ngoại. Rà soát cho thấy
đây **không phải rủi ro lý thuyết**: `DELETE` một CR sẽ cascade xóa BRS, và sơ đồ gắn vào BRS đó
còn lại, trỏ vào một BRS không tồn tại. Mọi truy vấn đều lọc theo chủ sở hữu nên **không màn nào
hiển thị dòng mồ côi** → không ai thấy để dọn, nó nằm lại trong DB và vào cả bản sao lưu.
Sửa (V053): 3 cột khóa ngoại nullable + CHECK "đúng một chủ sở hữu", `owner_type/owner_id` giữ
làm hợp đồng API nhưng bị CHECK buộc khớp. Hợp đồng API không đổi. Kiểm chứng: xóa CR → BRS và
sơ đồ mất theo.

**L-4 — Ràng buộc chống lệch dữ liệu KHÔNG chặn được gì.** ⛔ *tìm ra khi kiểm chứng L-3*
Bản đầu của V053 viết CHECK dạng ba nhánh:
`(owner_type='project' AND owner_id=project_id) OR (…product…) OR (…brs…)`.
Trông đúng nhưng vô dụng vì logic ba giá trị của SQL: với `owner_type='project'`,
`product_id=<uuid>`, `project_id=NULL` thì nhánh đầu là `owner_id = NULL` → **NULL**, hai nhánh sau
`false`, và `NULL OR false` = `NULL` — Postgres coi CHECK là **ĐẠT**. Nếu không thử trực tiếp thì
ràng buộc này sẽ nằm đó suốt, tạo cảm giác an toàn giả. Sửa: viết dạng `COALESCE` + `CASE`, không
có nhánh nào so sánh với NULL. Kiểm chứng: cả hai kiểu dữ liệu lệch đều bị chặn đúng tên ràng buộc.

**L-5 — `/sync-doc` và `/sync-test` không có xác thực.** ⛔ *bảo mật*
Hai endpoint nhận tài liệu dự án từ BA Workflow và Test Platform, mở hoàn toàn với lý do
"internal endpoint — no user auth required" ghi ngay trong docstring. Trong mạng nội bộ ngân hàng
điều đó nghĩa là **bất kỳ máy nào chạm được cổng 8001 đều ghi được tài liệu vào hồ sơ dự án**, và
không có cách nào biết dữ liệu đến từ đâu. Sửa: bí mật chia sẻ `INTERNAL_SYNC_TOKEN` qua header
`X-Internal-Token`, so sánh chống rò rỉ thời gian, **fail-closed** khi chưa cấu hình (mở sẵn khi
thiếu cấu hình chính là cái lỗ đang phải bịt); thêm header ở cả hai bên gọi; `start.sh`/`start.bat`
sinh giá trị tạm cho phiên chạy nếu chưa đặt. Kiểm chứng: không token → 401, token sai → 401,
token đúng → 200.

**L-6 — CR PATCH không kiểm tra tham chiếu và không cho gắn dự án.** Đặt `product_id` sai UUID sẽ
vi phạm khóa ngoại và trả **500 thô**. Ngoài ra `CRPatch` thiếu `project_id` nên CR tạo ngoài dự án
không thể quy kết về dự án sau — trái QĐ-18. Sửa cả hai; `cr_kind` vẫn **không** cho sửa (đổi CR
nghiệp vụ thành nội bộ sẽ làm mất bắt buộc BRS/test của một thay đổi đã ghi nhận).

**L-7 — Dashboard gộp CR nội bộ vào tổng CR.** CR nội bộ sinh tự động mỗi lần sửa tay Master Doc.
Gộp vào `total_crs`/`open_crs` sẽ làm phồng "CR đang mở" bằng việc bảo trì tài liệu mà không ai
phải xử lý. Sửa: tách thành chỉ số riêng, phân bố trạng thái chỉ đếm CR nghiệp vụ.

**L-8 — 4 component mã chết.** `components/projects/{ConnectionMap, ExportImportPanel,
ProjectObjectTable, ObjectTypeForm}` không còn chỗ nào dùng sau khi gỡ `ProjectObjectsPage`, kèm
25 test đang kiểm mã không ai gọi tới. Đã xóa. Giữ `lib/api/project-objects.ts` vì trang Test còn dùng.

**Ghi nhận sự cố trong lúc kiểm chứng:** một lệnh thử cascade đã **xóa mất CR-2026-003** thật
(alias `psql` không hoạt động trong zsh nên các lệnh truy vấn lỗi trong khi lệnh `DELETE` qua API
vẫn chạy). Đã phục hồi đúng `id`, mã, tiêu đề, người yêu cầu và thời điểm tạo gốc lấy từ
`request_history`, và chuyển sang dùng CR dùng-một-lần cho các phép thử phá hủy.

### 7.6 Kiểm chứng

**Chạy thật đầu-cuối trên DB thật** (dữ liệu thử đã dọn, DB trả về trạng thái ban đầu):

| Bước | Kết quả |
|---|---|
| Gắn sản phẩm vào CR-2026-003 | ✅ — và phát hiện lỗi `product_name = null` ở endpoint chi tiết, đã sửa |
| Tạo Master Doc v1.0 | ✅ |
| Sửa tay **không nêu lý do** | ✅ chặn `REASON_REQUIRED` |
| Sửa tay có lý do | ✅ tạo bản `pending` + CR nội bộ `CR-2026-004`; **Master Doc vẫn v1.0, chưa có FR-03** |
| Duyệt bản đề xuất | ✅ lên v2.0, nội dung mới có hiệu lực, lịch sử ghi `manual / approved / admin` |
| Gen BRS khi CR chưa duyệt | ✅ chặn `CR_NOT_APPROVED` |
| Gen BRS / Gen diagram | ⚠️ `AI_RATE_LIMIT` — nêu đúng nguyên nhân (hết hạn mức gói thuê bao của OAuth token), **không tạo dòng rác nào** |
| Nhập Mermaid không dùng AI | ✅ lưu được, `format=mermaid` |
| Tạo diagram có `<img src="https://…">` | ✅ từ chối `DIAGRAM_UNSAFE` |
| Diagram HTML hợp lệ + sửa nội dung | ✅ tăng version, lịch sử v1/v2 đầy đủ |

**Chất lượng mã:** `tsc` sạch · `vite build` sạch · backend **13 fail = đúng baseline** (không hồi quy) ·
frontend **21 → 0 fail** (113/113 pass; sửa bộ test `DocsPage` đã lạc hậu 10 test, và 6 test khẳng định
sai về DOM) · Playwright chạy 9 trang + luồng sản phẩm: **0 lỗi console**.

---

### 7.8 Rà soát AI Agent và skill từng bước của luồng BA

Soi 8 điểm gọi AI (sinh BRS · chỉnh BRS · merge Master Doc · sinh test case · sinh báo cáo ·
vẽ diagram ×3) cùng nội dung 5 skill. Tìm **7 lỗi**, đã sửa hết.

**A-1 — Phản hồi AI bị cắt vẫn được lưu như tài liệu hoàn chỉnh.** ⛔ *nghiêm trọng nhất*
`run_skill` kiểm `stop_reason == "refusal"` và kiểm text rỗng, nhưng **không kiểm
`max_tokens`**. Mọi skill của luồng đều yêu cầu trả về *toàn bộ* tài liệu — BRS 12 mục,
Master Doc đầy đủ, mảng JSON test case. Một phản hồi bị cắt giữa vẫn là văn bản hợp lệ về cú
pháp, nên nó được lưu như tài liệu hoàn chỉnh: **BRS thiếu mục 8–12 vẫn duyệt được rồi merge
vào Master Doc**; Master Doc mất phần cuối mà không ai biết. Sửa: trả `AI_TRUNCATED` kèm số
token đã sinh và chỉ dẫn tăng giới hạn hoặc chia nhỏ; **không lưu gì**.

*Ghi chú:* riêng bước merge Master Doc có một chốt tình cờ — parser đòi thẻ đóng
`</MASTER_DOC>` nên phản hồi cắt giữa sẽ trượt ở đó. Bốn bước còn lại thì không có gì chặn.

**A-2 — Bước "AI chỉnh sửa BRS" dùng skill SINH MỚI.** ⛔
`BrsReviseRequest.skill_code` mặc định là `gen_brs`. Nội dung skill đó là *"Nhiệm vụ: viết tài
liệu BRS"* kèm cấu trúc 12 mục bắt buộc. Dùng nó để sửa thì mô hình nhận hai chỉ dẫn xung đột —
skill bảo "viết theo cấu trúc này", prompt bảo "giữ nguyên phần không liên quan" — và thường
nghiêng về viết lại, **xoá mất phần BA đã sửa tay**. Sửa: thêm skill `revise_brs` chuyên dụng
với reference `edit-discipline.md` nêu rõ chỗ nào được đụng, chỗ nào không (đổi mã `FR-xx` sẽ
làm đứt tham chiếu từ test case đã sinh).

**A-3 — `skill_code` là chuỗi tự do, chạy được skill của bước khác.** ⛔
Client gọi bước sinh BRS với `skill_code=gen_test_report` thì hệ thống ghi **một bản báo cáo
test vào đúng cột nội dung BRS**, và bản đó đi tiếp qua duyệt → golive → merge Master Doc.
Không có tầng nào bên dưới chặn được. Sửa: `assert_skill_for_step()` — mỗi bước chỉ nhận skill
của nó, vẫn cho PO dùng skill tùy biến nếu mã bắt đầu bằng mã chuẩn của bước (`gen_brs_v2`).

**A-4 — Skill báo cáo test yêu cầu dữ liệu mà prompt không cung cấp.** ⛔
Skill vừa nói *"Chỉ dùng số liệu được cung cấp, KHÔNG suy diễn"*, vừa đòi bảng *"Chi tiết test
case không đạt | Ghi nhận | Ảnh hưởng"*. Hệ thống chỉ truyền **trạng thái mới nhất** của test
case, không truyền ghi nhận lỗi → mô hình **buộc phải bịa** phần ghi nhận và ảnh hưởng. Trong
báo cáo kiểm thử của ngân hàng, một nguyên nhân lỗi bịa ra là lỗi nghề nghiệp.
Thêm một lỗi thứ hai cùng chỗ: `automation_test_cases.status` là kết quả của **lượt chạy gần
nhất**, nên sinh báo cáo cho lượt cũ sau khi đã chạy lại sẽ ra số liệu của lượt mới.
Sửa: lấy kết quả từ `summary.cases` của **chính lượt chạy đó** kèm ghi nhận lỗi; case không có
trong lượt chạy được đánh dấu **"KHÔNG CÓ TRONG LƯỢT CHẠY NÀY"** và skill được viết lại để đếm
riêng nhóm chưa chạy, không tính vào tỉ lệ đạt, không kết luận đủ điều kiện đóng khi còn case
chưa chạy.

**A-5 — Chỉnh BRS khi đang review không đưa về nháp.** Nội dung đổi mà trạng thái vẫn
`in_review` thì người duyệt có thể bấm Duyệt trên một nội dung **khác hẳn cái họ đã đọc** —
maker-checker chỉ còn hình thức. Sửa: đưa về `draft`, ghi vào lịch sử CR, và báo trên giao diện.

**A-6 — Sinh lại test case xoá im lặng bản QA đã sửa tay.** Sinh lại xoá mọi case chưa map
script rồi chèn bộ mới. Case đã map thì được giữ, nhưng case chưa map mà QA đã sửa nội dung thì
mất không dấu vết. Sửa: đếm và báo số case bị thay ngay trên giao diện.

**A-7 — Để trống nội dung skill hệ thống làm đứng cả bước.** Không có đường hoàn tác trên UI.
Sửa: chặn lưu nội dung rỗng kèm chỉ dẫn cách ngừng dùng đúng cách.

### 7.9 Skill chuyển sang dạng thư mục chuẩn Claude skill

**Câu hỏi của PO:** *"tại sao skill lại chỉ có dạng MD, nó phải có dạng chuẩn của claude chứ
dạng folder cơ mà, có ref, có template đồ này nọ chứ"* — đúng. Một khối văn bản trong
`ai_skills.content` thiếu ba thứ mà dạng thư mục cho:

| | Vì sao cần |
|---|---|
| `references/` nạp theo nhu cầu | Bộ mẫu test case hay bỏ sót của nghiệp vụ ngân hàng, bộ tự kiểm BRS là tài liệu dài. Nhồi hết vào một prompt thì mỗi lần gọi đều tốn; bỏ ra thì mất chất lượng |
| `templates/` tách khỏi hướng dẫn | Cấu trúc 12 mục BRS, lược đồ JSON test case, hai khối thẻ Master Doc là **hợp đồng đầu ra mà mã nguồn parse theo**. Để lẫn trong văn bản hướng dẫn thì sửa hướng dẫn dễ vô tình làm hỏng hợp đồng |
| Phiên bản theo Git | Skill quyết định nội dung tài liệu đặc tả của ngân hàng. Trong Git thì biết ai đổi, đổi gì, review được. Trong DB thì mỗi môi trường một bản khác nhau mà không ai biết |

**Mô hình lai — mỗi thứ đặt đúng chỗ:**

| Thành phần | Ở đâu | Ai sửa |
|---|---|---|
| `SKILL.md` + `references/` + `templates/` | Đĩa, theo Git | Dev/BA qua pull request |
| Bổ sung riêng của đơn vị (`ai_skills.content`) | DB | PO sửa trực tiếp trên UI |

Nội dung DB **không thay** phần trên đĩa mà **nối thêm** vào cuối, dưới tiêu đề "Bổ sung của
đơn vị". PO tinh chỉnh được ngay (*"mọi BRS phải nêu số hiệu Thông tư liên quan"*) mà không sửa
được sai hợp đồng đầu ra. Ba khối được tách riêng cho prompt caching: hướng dẫn+template · các
reference · bổ sung của đơn vị — sửa phần PO hay đổi nhất không làm mất hiệu lực cache hai phần
kia.

**Bộ skill sau khi chuyển** (`backend/ppg/app/skills/`):

```
gen-brs/            SKILL.md · templates/brs-structure.md
                    references/quality-checklist.md · references/banking-domain.md
revise-brs/         SKILL.md · references/edit-discipline.md
update-master-doc/  SKILL.md · templates/output-format.md
gen-test-case/      SKILL.md · templates/case-schema.md
                    references/banking-test-patterns.md
gen-test-report/    SKILL.md · templates/report-structure.md
diagram-design/     nhúng từ repo MIT — 57 reference, nạp theo TỪNG loại diagram
```

`diagram-design` được loại khỏi loader chung (`LOADED_ELSEWHERE`) vì nó nạp reference theo loại
diagram; nếu để loader chung nạp thì `SKILL.md` 39 KB bị gửi hai lần mỗi lần gọi.

Trên giao diện Cài đặt → Skill: mỗi skill hiện thư mục, phiên bản, số template/reference; bấm
tên file để **xem chỉ-đọc** (đường dẫn được kiểm sau khi resolve nên không đọc ra ngoài thư mục
skill được); ô sửa được đổi nhãn thành "Bổ sung của đơn vị".

### 7.10 Gộp Test và Automation thành một module (QĐ-3)

**Câu hỏi của PO:** *"Tại sao tách riêng phần test và phần automation"* — không có lý do thiết
kế nào. Đó là **hai thế hệ nằm cạnh nhau**, và việc tách trái đúng QĐ-3 mà chính PO đã chốt:
*"Testcase gom chung vào 1 hệ không tách riêng, đi theo hướng automation."*

| | **Test** (`/test-workflow`) | **Automation** (`/automation`) |
|---|---|---|
| Service | test-platform `:8003` | PPG `:8001` |
| Bảng | `test_documents` · `test_cases` · `test_results` · `test_defects` · `test_reports` · `test_tasks` | `automation_test_tasks` · `_cases` · `_runs` |
| Nguồn BRS | `brs_sync`, `brs_id` kiểu **VARCHAR(100)** | `cr_brs_documents.id` kiểu **UUID** |
| Dữ liệu | 6 tài liệu, 8 test case | 0 / 0 / 0 |

**Hai cột `brs_id` khác kiểu và trỏ hai bảng khác nhau**, nên test case thế hệ 1 vĩnh viễn không
tham chiếu được BRS của luồng BA mà không đổi lược đồ. Đây không phải chuyện thiếu thời gian nối.

**8 test case thế hệ 1 chứng minh generator cũ không dùng được.** Tiêu đề thật trong DB:

```
[2. Use Cases] **UC-01**: User Authentication
[3. Non-Functional Requirements] **Performance**
```

Đó là **mảnh tiêu đề Markdown** bị bóc ra từ tài liệu — không precondition, không bước thao tác,
`expected_result` là chính câu yêu cầu, `playwright_script` chỉ có phần khung `import { test,
expect } from …`. Và 8 dòng thực chất là 4 dòng nhân đôi.

**Phân biệt đáng giữ không phải "test vs automation"** mà là **test case** (cái gì phải đúng —
thuộc BRS) và **script chạy được** (chạy thế nào — thuộc Capture Studio). Cả hai nằm trong cùng
một module, hai tab. Còn **tài liệu test** (Test Plan, Bug Report, UAT Sign-off) là loài khác:
đó là tài liệu, chỗ của nó là trang Tài liệu.

**Đã làm:**

| Việc | Chi tiết |
|---|---|
| Một menu **Test** duy nhất tại `/test` | Tab *Test case theo CR* + tab *Capture Studio — ghi script* |
| Link cũ không chết | `/automation` và `/test-workflow` chuyển hướng sang `/test`; có test kiểm |
| Tài liệu test về trang Tài liệu | Section *Tài liệu test* trong nhánh Dự án, **chỉ xem** — đổi trạng thái là việc của luồng test, không phải của trang tra cứu. Dữ liệu vẫn ở `test_documents`, **không di trú DB** |
| Lưu trữ 8 test case rác (V056) | Copy sang `test_cases_legacy_archive` kèm lý do rồi xóa khỏi `test_cases`. `test_defects` trỏ bằng `ON DELETE SET NULL` nên **80 bug report không mất** |
| Xóa mã chết | `TestWorkflowPage` · `TestPage` · `TestMetricsPage` (hai file sau **chưa từng được route**) · `TestDocumentForm` · `lib/api/project-objects.ts` · `lib/types/project-object.ts` |

**Chưa làm, có chủ đích:** service test-platform `:8003` **vẫn chạy** và các bảng `test_*` vẫn
còn. Giao diện không còn gọi tới `test_cases`, nhưng `test_documents` thì vẫn đọc từ service đó.
Gỡ hẳn service là bước riêng, làm sau khi chắc chắn không mất gì — không gộp vào lần này để
việc gộp module có thể quay lại được nếu cần.

## 8. Lộ trình còn lại

| GĐ | Nội dung | Tuần |
|---|---|---|
| ~~P1~~ | ~~Quyền sở hữu CR · maker-checker Master Doc~~ | ✅ xong |
| ~~P2~~ | ~~Diagram · tài liệu sản phẩm · báo cáo theo kỳ · dọn giao diện~~ | ✅ xong |
| **P3** | Prototype + Design System (V054): bảng + API + màn quản lý/xem/import | 2 |
| **P4** | Automation theo hướng mới (V055): sao lưu/nạp lại Studio · bộ hồi quy 3 mức phạm vi · report theo từng testcase · export theo skill | 2 |
| **P5** | Dọn phần rìa còn lại · đường "AI sinh Master Doc v1 từ BRD" khi có BRD đầu tiên | 1 |
| **P6** | **Phân quyền** — xem Mục 9 | 1–2 |

**Còn 6–8 tuần.** Dừng ở cuối giai đoạn nào hệ thống vẫn nhất quán.

---

## 9. Rủi ro chính

| Rủi ro | Mức | Cách xử lý |
|---|---|---|
| **Chưa có phân quyền** — bất kỳ ai đăng nhập đều duyệt được Master Doc | **Cao** | Maker-checker vừa dựng ở P1 chỉ có ý nghĩa khi có phân quyền: người tạo bản đề xuất không được là người duyệt. Đề xuất P6, nằm ngoài 19 quyết định nhưng là điểm yếu tuân thủ rõ nhất |
| 0/28 sản phẩm có Master Doc | **Cao** | Đường import đã có ở P2; ưu tiên sản phẩm đang có CR |
| Hạn mức AI chặn luồng sinh tài liệu | Trung bình | Dùng API key trả theo lượt dùng (`sk-ant-api…`) thay OAuth token gói thuê bao |
| 3 CR cũ chưa gắn sản phẩm | Thấp | Màn BA và báo cáo đều hiện cảnh báo kèm chỉ dẫn; gắn một lần là xong |
| Diagram do AI sinh sai nội dung nghiệp vụ | Trung bình | Có trạng thái `draft` → `approved`; skill cấm bịa thành phần, thiếu thông tin phải ghi callout |
| ~~Chuyển Capture Studio sang DB làm mất tính năng ghép test case~~ | ~~Cao~~ | **Đã loại bỏ** — không sửa Studio nữa (Mục 5.3) |

---

## Phụ lục A — Rà soát v2: tám lỗi đã sửa

Giữ để truy vết vì sao mô hình đổi. Bốn lỗi đầu là lỗi thiết kế.

| # | Lỗi | Bằng chứng | Sửa ở |
|---|---|---|---|
| **L1** | QĐ-16 (bỏ `project_id`) mâu thuẫn QĐ-11 (báo cáo theo dự án); v2 lẫn quyền sở hữu với quy kết nguồn | Hai quyết định của PO | Mục 3.2, QĐ-18 |
| **L2** | Bất biến `HEAD = v1 + Σ BRS` **sai**: `master_docs.py` ghi `manual/approved` đè thẳng | Mã đang chạy | Mục 3.4, QĐ-19 |
| **L3** | Mô hình 1 dự án → 1 sản phẩm không bao phủ dự án nâng cấp | 28 sản phẩm / 22 dự án | QĐ-17 (PO chấp nhận hạn chế) |
| **L4** | Hiểu sai "automation testcase con" — là *case con của composite*, không phải *bước* | `store.js:56,68,86` | Mục 5.3 — nay bỏ hẳn việc sửa Studio |
| L5 | Lộ trình xếp màn hình trước khi có bảng | — | Mục 8 (đã đảo) |
| L6 | Cây tài liệu vẽ như thư mục vật lý | — | Mục 5.4 |
| L7 | 3 CR thiếu `product_id` sẽ kẹt | Truy vấn DB | Mục 7.1 |
| L8 | Số liệu sai rải rác (10 vs 15 bảng, 2 vs 3 router…) | — | đã kiểm chứng lại từ v4 |

## Phụ lục B — Năm phát hiện ở v4 (đều đã xử lý ở P1)

| # | Phát hiện | Xử lý |
|---|---|---|
| N1 | FK `project_id` là `ON DELETE CASCADE` → xóa dự án xóa sạch CR | ✅ V052 → `SET NULL` |
| N2 | FK `product_id` là `ON DELETE SET NULL` trái ràng buộc bắt buộc | ✅ V052 → `RESTRICT` |
| N3 | CHECK `source` không phân biệt 3 đường khởi tạo QĐ-14 | ✅ V052 nới CHECK |
| N4 | `project_id` đang `NOT NULL` → không tạo được CR ngoài dự án | ✅ V052 |
| N5 | `master_documents.product_id` đã `UNIQUE NOT NULL` | ✅ không cần làm gì |

## Phụ lục C — Việc đã làm ở phiên trước

**QĐ-15 — Gỡ Kế hoạch năm.** Xóa 15 bảng + `projects.plan_id` + 17 khóa ngoại (V050, có sao lưu);
gỡ 3 router và 22 file frontend; viết lại Dashboard theo trục vòng đời.

**QĐ-13 — Xác thực Claude.** Thứ PO nhập là **OAuth token** (`sk-ant-oat…`) của gói thuê bao,
không phải API key; hai loại gửi qua hai cơ chế khác nhau nên token hợp lệ vẫn bị trả 401 —
đúng như PO nhận xét *"báo lỗi nhưng thực tế vẫn call được"*. Đã nhận diện đúng cả hai loại.
**Hiện vướng 429 hết hạn mức** — khuyến nghị API key trả theo lượt dùng.
