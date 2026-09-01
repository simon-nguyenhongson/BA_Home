# Chiến lược tái cấu trúc BA_Home theo hướng Product-Centric

- **Mã:** STRATEGY-001 · **Phiên bản:** 4.0 · **Ngày:** 2026-09-01
- **Trạng thái:** chờ PO review — 4 điểm cần xác nhận (Mục 9)
- **Thay thế:** v3.0. Bản v3 viết theo lối "liệt kê lỗi của v2"; bản này viết lại thành **chiến lược đọc liền mạch**, đã chốt sẵn phương án cho 4 câu hỏi treo (PO chỉ cần đồng ý hoặc gạch bỏ). Phần rà soát lỗi v2 chuyển xuống **Phụ lục A**.
- **Mới ở v4:** đối chiếu lại toàn bộ số liệu với DB thật, phát hiện thêm **5 điểm** chưa từng nêu ở v2/v3 — xem Mục 4.2.

---

## 1. Tóm tắt điều hành

**Vấn đề:** BA_Home hiện lấy **Project** làm trục. Dự án ngân hàng sống 6–18 tháng, hệ thống sống 10 năm. Dự án đóng là mọi thay đổi sau đó — vá lỗi vận hành, yêu cầu tuân thủ, tối ưu nhỏ — **không còn chỗ ghi nhận**. Tri thức về hệ thống tan theo dự án.

**Hướng đi:** chuyển trục sang **Product**. Product sở hữu Master Doc và chuỗi CR → BRS → Test → Automation lâu dài. Project trở thành **giai đoạn đầu tư có thời hạn**: sở hữu BRD, nguồn lực, milestone; khai sinh hoặc nâng cấp Product rồi kết thúc.

**Kết quả mong đợi** — bốn câu hỏi hôm nay không trả lời được, sau khi làm sẽ trả lời được trong một màn hình:

| Câu hỏi | Hôm nay | Sau khi làm |
|---|---|---|
| Hệ thống Internet Banking hiện đặc tả thế nào? | Không có nơi nào | Master Doc của Product, phiên bản mới nhất đã duyệt |
| Điều khoản này trong tài liệu đến từ đâu? | Không truy được | Version → BRS → CR → người duyệt |
| Kỳ này dự án X đã làm ra những gì? | Chỉ đếm được milestone | Project + Product + CR + BRS + kết quả test |
| CR này đã test đủ chưa? | Kịch bản test nằm ở file JSON trên máy cá nhân | Test case và kết quả từng lượt chạy trong DB |

**Khối lượng:** 7 migration additive (V051–V057), 6 hạng mục xây mới, **8–10 tuần / 5 giai đoạn**. Dừng ở cuối giai đoạn nào hệ thống vẫn nhất quán, không có trạng thái dở dang.

**Đã làm rồi:** gỡ toàn bộ module Kế hoạch năm (QĐ-15) và sửa xác thực Claude (QĐ-13) — Phụ lục B.

---

## 2. Cơ sở — 16 quyết định của PO

| # | Quyết định | Ảnh hưởng chiến lược |
|---|---|---|
| QĐ-1 | Quản lý CR theo Product | Mục 3.1 — trục chính |
| QĐ-2 | Tài liệu theo domain, mỗi domain có module Product | Mục 5.5 |
| QĐ-3 | Testcase gom **một hệ duy nhất**, đi theo hướng automation | Mục 5.3 |
| QĐ-4 | Automation testcase con quản lý ở DB, không JSON cục bộ | Mục 5.3 |
| QĐ-5 | **Không** làm BRD của Product — BRD thuộc Project | Mục 3.2 |
| QĐ-6 | Quản lý file Prototype (HTML) cho cả project và product | Mục 5.1 |
| QĐ-7 | Quản lý Design System của prototype, cùng cấp với prototype | Mục 5.1 |
| QĐ-8 | View tổng hợp per product | Mục 5.6 — Product Home |
| QĐ-9 | Diagram (workflow / sequence / dataflow) cho project, product, BRS | Mục 5.2 |
| QĐ-10 | Report theo **từng** testcase, export theo skill AI cấu hình được | Mục 5.4 |
| QĐ-11 | Bỏ kế hoạch năm → Báo cáo theo kỳ (project, product, CR) | Mục 5.7 |
| QĐ-12 | Chỉ giữ trục vòng đời, phần rìa cắt được thì cắt | Mục 9 điểm 4 |
| QĐ-13 | Cấu hình API key cứ lưu; báo lỗi nhưng thực tế vẫn call được | Phụ lục B — đã xử lý |
| QĐ-14 | Master Doc v1 có 3 đường: AI sinh từ BRD / import / sửa tay | Mục 3.4 |
| QĐ-15 | Kế hoạch năm — bỏ luôn cả DB và ràng buộc | Phụ lục B — đã xử lý |
| QĐ-16 | **Không đảo trục.** Output của 1 Project là 1 Product; project done là dừng, CR chỉ thuộc Product | Mục 3.1 |

---

## 3. Mô hình mục tiêu

### 3.1 Product là trục chính, Project là giai đoạn đầu tư

```
projects (giai đoạn đầu tư, có thời hạn)
├── project_briefs ← BRD (ĐÃ CÓ, 25 cột — hiện 0 dòng)
├── milestones · members · gates · files
└── project_product_links [MỚI — nhiều-nhiều có vai trò]
      ├── role = 'creates'   → tối đa 1 sản phẩm mới mỗi dự án   (QĐ-16)
      └── role = 'enhances'  → N sản phẩm đang chạy được nâng cấp
                        │
                        ▼
catalog_products (TRỤC CHÍNH — 28 sản phẩm, 7 domain, sống lâu dài)
├── master_documents (ĐÃ CÓ, 1 product = đúng 1 doc)
│     └── master_doc_versions → master_doc_version_crs
├── prototypes      [MỚI] ─┐
├── design_systems  [MỚI] ─┤ dùng chung cho project | product  (QĐ-6, QĐ-7)
├── diagrams        [MỚI] ─┘ gắn được cả BRS                   (QĐ-9)
│
└── change_requests
      product_id         BẮT BUỘC  ← quyền sở hữu     (QĐ-16)
      source_project_id  TÙY CHỌN  ← quy kết nguồn    (QĐ-11)
        │
        └── cr_brs_documents (ĐÃ CÓ)
              └── automation_test_tasks (ĐÃ CÓ)
                    ├── automation_test_cases (ĐÃ CÓ) + case_type atomic|composite
                    │     ├── automation_case_steps    [MỚI] bước của case đơn
                    │     └── automation_case_children [MỚI] case con của case tổng hợp
                    └── automation_test_runs (ĐÃ CÓ)
                          └── automation_case_results [MỚI] kết quả từng case
```

### 3.2 Quyền sở hữu ≠ quy kết nguồn — nút thắt lớn nhất được mở

Đây là chỗ v2 sai và là điều chỉnh quan trọng nhất của bản này. QĐ-16 nói *"CR chỉ thuộc Product"*, QĐ-11 nói *"báo cáo công việc đã làm gồm project, product, CR"*. Hai câu chỉ mâu thuẫn nếu coi CR chỉ có **một** loại quan hệ với dự án. Thực tế có hai:

| | **Quyền sở hữu** (ownership) | **Quy kết nguồn** (attribution) |
|---|---|---|
| Trả lời câu hỏi | CR này sửa tài liệu của hệ thống nào? Ai duyệt? | Công/tiền cho CR này đến từ đâu? |
| Thuộc về | **Product** — bắt buộc, không đổi | **Project** — tùy chọn, được để trống |
| Vòng đời | Sống cùng sản phẩm | Đóng băng khi dự án kết thúc |
| Khi dự án đóng | Không ảnh hưởng | CR mới ghi trống — đúng *"project done là dừng"* |

Nên: `product_id` **bắt buộc**, `source_project_id` **tùy chọn**. Cả QĐ-16 và QĐ-11 đều thỏa.

### 3.3 Thuật ngữ (sẽ khóa vào ADR-006)

- **Product** = 1 dòng `catalog_products`. Sở hữu Master Doc, chuỗi CR/BRS/Test, Prototype, Design System, Diagram.
- **Project** = giai đoạn đầu tư có thời hạn. Sở hữu BRD (`project_briefs`), milestone, nguồn lực, gates. Khai sinh **tối đa 1** sản phẩm, nâng cấp **nhiều** sản phẩm.
- **CR** = đơn vị thay đổi, thuộc **đúng 1 Product**; ghi kèm dự án tài trợ nếu có.
- **BRS** = đặc tả của 1 CR. **Cầu nối duy nhất** từ CR sang Master Doc và sang Test.
- **Master Doc** = đặc tả AS-IS sống của Product. Một sản phẩm đúng một Master Doc (DB đã ràng buộc UNIQUE).

### 3.4 Bất biến kiểm toán

> **Master Doc HEAD = version được duyệt gần nhất.**
> **Mọi** version truy được: `source` · người tạo · người duyệt · thời điểm · **lý do thay đổi**.

Bất biến này thay cho công thức `HEAD = v1 + Σ(BRS golive)` của v2 — công thức đó sai vì QĐ-14 cho phép sửa tay, và code hiện tại đã cho sửa tay ghi đè thẳng (chi tiết ở Phụ lục A, L2). Bất biến mới yếu hơn nhưng **đúng**, và vẫn đủ để trả lời câu hỏi kiểm toán *"điều khoản này đến từ đâu"*:

- `cr_merge` → BRS → CR → người duyệt CR
- `manual` → người sửa + lý do (bắt buộc nhập)
- `init_*` → nguồn khởi tạo (BRD nào / file import nào / ai soạn)

Báo cáo kiểm toán liệt kê **riêng** các version `manual` để giải trình — đó là nhóm rủi ro cao nhất.

### 3.5 Master Doc v1 — ba đường khởi tạo (QĐ-14)

| Cách | `source` mới | Khi nào dùng | Sẵn sàng? |
|---|---|---|---|
| AI sinh từ BRD của dự án khai sinh (skill `init_master_doc`) | `init_ai` | Sản phẩm ra đời từ một dự án | ⚠️ `project_briefs` đang **0 dòng** — chưa có BRD nào để sinh |
| Import tài liệu sẵn có (Markdown / Word) | `init_import` | **Đường phổ biến nhất** — 28 sản phẩm phần lớn đã chạy nhiều năm, tài liệu nằm ngoài hệ | ✅ Chỉ cần màn upload |
| Soạn trực tiếp trên giao diện | `init_manual` | Sản phẩm nhỏ, hoặc chỉnh sau khi sinh/import | ✅ Code đã có |

**Hệ quả thực tế:** đường **import** phải làm trước, không phải đường AI. Không có BRD nào trong hệ thì skill `init_master_doc` chưa có gì để đọc.

---

## 4. Hiện trạng — số liệu đã kiểm chứng

### 4.1 Bảng đối chiếu

| Hạng mục | Số liệu | Ý nghĩa |
|---|---|---|
| Sản phẩm | **28** (7/12 domain) | Trục chính đã có dữ liệu thật |
| Dự án | **22** | Nhiều dự án hơn dự kiến nếu 1:1 |
| CR | **3** — cả 3 **có** `project_id`, **không** CR nào có `product_id` | Sẽ kẹt sau khi siết ràng buộc |
| Master Doc | **0** | Chuỗi CR→BRS→Merge chưa từng chạy trên dữ liệu thật |
| BRS · task test · test case | **0 / 0 / 0** | Cấu trúc lại automation **không phải di trú dữ liệu** — rủi ro thấp hơn v3 nói |
| BRD (`project_briefs`) | **0** | Đường AI sinh Master Doc v1 chưa có đầu vào |
| Skill AI | **4** (`gen_brs`, `update_master_doc`, `gen_test_case`, `gen_test_report`) | Cần thêm **2**: `init_master_doc`, `gen_diagram` |

**Đọc ra một câu:** phần "sản phẩm" đã có dữ liệu thật, phần "tri thức về sản phẩm" **hoàn toàn trống**. Đây là thời điểm tốt nhất để đổi cấu trúc — gần như không có dữ liệu phải di trú.

### 4.2 Năm điểm mới phát hiện ở lần rà này

Cả v2 và v3 đều chưa nêu. Bốn điểm đầu là **lỗi thật trong DB hiện tại**, không phải sai trong tài liệu.

**N1 — Xóa dự án sẽ xóa luôn CR của sản phẩm.** ⛔
`change_requests.project_id` có khóa ngoại `ON DELETE CASCADE`. Xóa một dự án đã đóng là **xóa sạch mọi CR** của nó — mà CR là tri thức của **sản phẩm**, không phải của dự án. Trái hẳn tinh thần product-centric. V051 phải đổi thành `ON DELETE SET NULL`.

**N2 — Xóa sản phẩm thì CR mồ côi trong im lặng.** ⛔
`change_requests.product_id` đang `ON DELETE SET NULL`. Khi `product_id` thành bắt buộc, quy tắc này tự tạo ra dữ liệu vi phạm chính ràng buộc của nó. Phải đổi thành `ON DELETE RESTRICT` — không cho xóa sản phẩm còn CR.

**N3 — Ba đường khởi tạo của QĐ-14 hiện DB không phân biệt được.** ⛔
`master_doc_versions.source` có CHECK chỉ cho `initial | cr_merge | manual`. Không có chỗ ghi *"v1 này do AI sinh"* hay *"v1 này import từ file"*. Bản v3 còn viết các giá trị `init`, `init_ai` — **DB sẽ từ chối**. V056 phải nới CHECK.

**N4 — `project_id` của CR đang `NOT NULL`.**
Nghĩa là hôm nay **không thể tạo CR ngoài dự án** — đúng cái nút thắt QĐ-1 muốn mở. V051 phải bỏ `NOT NULL`. (v2/v3 nói "đổi tên cột" mà không nêu ràng buộc này.)

**N5 — `master_documents.product_id` đã `UNIQUE NOT NULL`.**
Tin tốt: quan hệ *1 sản phẩm = đúng 1 Master Doc* **đã được DB bảo đảm**, không cần làm gì thêm. Phần Master Doc đã product-centric sẵn.

### 4.3 Quy mô việc đổi tên cột (đã đo)

`project_id` → `source_project_id` ảnh hưởng **14 dòng** trong `backend/ppg/app/routers/requests.py` và **5 file** frontend (`api/requests.ts`, `RequestsPage.tsx`, `ProjectCRTab.tsx`, `RequirementsTab.tsx`, `api/ai.ts`). Nhỏ, gọn trong một PR. Đổi tên là đáng làm: cột tên `project_id` mà mang nghĩa "dự án tài trợ" sẽ bị hiểu sai lại sau 6 tháng.

---

## 5. Bảy hạng mục xây mới

### 5.1 Prototype + Design System (QĐ-6, QĐ-7)

```
prototypes (owner_type: project|product, owner_id, name, entry_file, status)
  └── prototype_versions (version, storage_path, change_summary, cr_id?, created_by)

design_systems (owner_type: project|product, owner_id, name, status)
  └── design_system_versions (version, tokens_file, css_file, change_summary, created_by)
```

File lưu theo ADR-005 (đĩa + đường dẫn trong DB), giống `project_files` đang chạy. Prototype xem trực tiếp qua iframe. `prototype_versions.cr_id` trả lời *"CR nào đổi màn hình nào"*.

**Điểm nối quan trọng với test:** prototype có `data-testid` ổn định thì Capture Studio **ghi được kịch bản trước khi code thật xong** — rút ngắn hẳn vòng lặp BA → QA.

### 5.2 Diagram (QĐ-9)

```
diagrams (owner_type: project|product|brs, owner_id,
          diagram_type: workflow|sequence|dataflow,
          name, format: mermaid|plantuml|drawio|image,
          content TEXT, storage_path, version, status)
```

Mermaid render thẳng trong trình duyệt; PlantUML/drawio/ảnh hiển thị dạng file. Gắn được vào BRS nghĩa là **mỗi CR có sơ đồ luồng riêng** — thứ BA hay phải vẽ lại bằng tay mỗi lần họp. Skill `gen_diagram` sinh Mermaid từ BRS (tùy chọn, làm sau).

### 5.3 Automation testcase vào DB (QĐ-3, QĐ-4)

**Hiện trạng:** Capture Studio lưu mỗi test case thành 1 file JSON trên máy; BA_Home chỉ giữ `studio_tc_id` dạng chuỗi. Mắt xích nằm ngoài DB: không sao lưu, không chia sẻ, người khác máy không mở được.

**Mô hình đích — bám đúng mô hình sẵn có của Studio:**

```
automation_test_cases (ĐÃ CÓ) + case_type: atomic | composite   [MỚI]
  ├── automation_case_steps    [MỚI]  ← chỉ với case atomic
  │     step_no, action (click|fill|select|check|assert|goto|wait|press),
  │     selector, value, assert_type, expected, is_secret, frame_path,
  │     params JSONB, source (recorded|manual|ai)
  └── automation_case_children [MỚI]  ← chỉ với case composite
        parent_case_id, child_case_id, sort_order
```

Hai quan hệ song song, **không phải một**. Studio có test case **tổng hợp** gồm nhiều test case con chạy nối tiếp trong cùng phiên trình duyệt (`store.js:56,68` — `type: composite|atomic`, mảng `children`). Mô hình chỉ-có-steps của v2 sẽ **làm mất tính năng ghép test case** khi chuyển sang DB. Đây là lỗi L4 ở Phụ lục A.

Một hệ duy nhất theo QĐ-3: test case nghiệp vụ sinh từ BRS **chính là** test case chạy được — không tách hai hệ.

**Cách chuyển Studio (giữ nguyên mọi tính năng):**

| Bước | Việc | Rủi ro |
|---|---|---|
| 1 | API `/automation/cases/{id}/steps` và `/children` — CRUD + thay cả lô | Thấp |
| 2 | `capture-studio/lib/store.js` đổi từ đọc/ghi file sang gọi API, **giữ nguyên chữ ký hàm** để `recorder`/`runner`/`codegen` không phải sửa | **Trung bình–cao** — điểm phải thử kỹ nhất cả dự án |
| 3 | Studio nhận `caseId` qua URL: mở từ BA_Home là ghi thẳng vào đúng test case | Thấp |

Ràng buộc phải giữ: Studio hiện **chặn xóa** test case đang được case tổng hợp tham chiếu (`store.js:86`). API mới phải giữ đúng ràng buộc này, nếu không sẽ có case tổng hợp trỏ vào hư không.

### 5.4 Report theo từng testcase + export theo skill (QĐ-10)

```
automation_case_results [MỚI]
  run_id, case_id, status (passed|failed|skipped|blocked),
  duration_ms, error_message, evidence_paths JSONB, note
```

Mỗi lượt chạy ghi kết quả **từng** test case, thay vì chỉ con số tổng hợp như hiện nay. Export chọn **skill** trong kho skill — PO nạp mẫu báo cáo riêng của ngân hàng, không phải sửa code. Xuất được XLSX (đã có) và văn bản do AI soạn.

### 5.5 Trang Tài liệu theo domain (QĐ-2)

**Là khung nhìn hợp nhất, không phải cây thư mục vật lý** — điểm này v2 vẽ gây hiểu sai. Nguồn dữ liệu từng nhánh:

```
{domain}/
├── projects/{mã dự án}/     BRD (DB) · biên bản họp (DB) · file đính kèm (đĩa)
└── products/{mã sản phẩm}/
      ├── master-doc/        DB — master_documents + versions
      ├── brs/               DB — cr_brs_documents theo từng CR
      ├── test/              DB — testcase + kết quả từng lượt chạy
      ├── prototype/         đĩa — prototype_versions.storage_path
      └── diagram/           DB (mermaid) hoặc đĩa (drawio/ảnh)
```

Sẵn sàng: 12 domain trong LOV, `catalog_products.domain_code` đã có, 28 sản phẩm thuộc 7 domain — 5 domain còn lại hiển thị rỗng.

### 5.6 Product Home — 6 tab (QĐ-8)

Một địa chỉ `/products/:id` trả lời mọi câu hỏi về một hệ thống:

| Tab | Nội dung | Nguồn |
|---|---|---|
| Tổng quan | Metadata, môi trường, licence, dự án liên quan (cả `creates` và `enhances`) | `catalog_products` (đã có) + `project_product_links` |
| Master Doc | Nội dung HEAD, lịch sử version, diff nhiều chiều, bản đề xuất chờ duyệt | `master_documents` (đã có) |
| CR / BRS | Danh sách CR của sản phẩm, trạng thái BRS từng CR | `change_requests` + `cr_brs_documents` (đã có) |
| Test | Task test theo CR, test case, kết quả từng lượt chạy | Automation (5.3, 5.4) |
| Prototype + DS | Xem prototype qua iframe, phiên bản, DS kèm theo | 5.1 |
| Diagram | Workflow / sequence / dataflow của sản phẩm và của từng BRS | 5.2 |

### 5.7 Module Báo cáo theo kỳ (QĐ-11)

Chọn năm hoặc khoảng từ ngày – đến ngày → xuất công việc đã làm:

- **Project** — khởi tạo / hoàn thành trong kỳ
- **Product** — có thay đổi Master Doc trong kỳ (đếm version đã duyệt)
- **CR** — theo trạng thái, kèm BRS và kết quả test, **nhóm theo dự án tài trợ**

Nhánh cuối chỉ chạy được nếu giữ `source_project_id` (Mục 9 điểm 2). Xuất XLSX.

---

## 6. Thay đổi mô hình dữ liệu

| Migration | Nội dung | Ghi chú |
|---|---|---|
| ~~V050~~ | ~~Gỡ 15 bảng Kế hoạch năm + `projects.plan_id` + 17 khóa ngoại~~ | **ĐÃ THỰC HIỆN.** Migration **phá hủy** — ngoại lệ có chủ đích với quy ước additive, đã sao lưu DB trước |
| **V051** | **CR — quyền sở hữu:** `project_id` → `source_project_id`, bỏ `NOT NULL` (N4), FK đổi `CASCADE` → `SET NULL` (N1); `product_id` FK đổi `SET NULL` → `RESTRICT` (N2) | `product_id` bắt buộc **ở tầng ứng dụng**, chưa đặt `NOT NULL` vì 3 CR cũ chưa gắn sản phẩm |
| **V052** | `project_product_links` (project, product, role `creates`\|`enhances`) — UNIQUE **một** `creates` mỗi dự án | Bao phủ dự án nâng cấp hệ thống có sẵn |
| **V053** | `prototypes` + `prototype_versions`; `design_systems` + `design_system_versions` | `owner_type` CHECK (project\|product) |
| **V054** | `diagrams` | `owner_type` project\|product\|brs |
| **V055** | `automation_test_cases.case_type`; `automation_case_steps`; `automation_case_children`; `automation_case_results` | **0 dòng dữ liệu hiện có** → không có di trú |
| **V056** | Master Doc: nới CHECK `source` thêm `init_ai`\|`init_import`\|`init_manual` (N3); `change_summary` bắt buộc khác rỗng với version `manual`; version `manual` mặc định `status='pending'` | Phần `status='pending'` chỉ áp dụng nếu PO chốt Mục 9 điểm 3 |
| **V057** | Seed 2 skill mới: `init_master_doc`, `gen_diagram` | Thuần dữ liệu |

Trừ V051 (đổi tên cột + siết khóa ngoại), toàn bộ còn lại **thuần additive** — đúng quy ước trong CLAUDE.md.

---

## 7. Lộ trình

Nguyên tắc xếp thứ tự: **dữ liệu trước, màn hình sau**. Không dựng giao diện cho bảng chưa tồn tại.

| GĐ | Nội dung | Tuần | Giá trị nhận được |
|---|---|---|---|
| **P1** | V051 + V052: CR gắn Product bắt buộc, giữ quy kết dự án, siết khóa ngoại; liên kết project↔product 2 vai trò; xử lý 3 CR cũ; sửa màn CR | 1–2 | CR ghi nhận được thay đổi **ngoài dự án** — nút thắt lớn nhất được mở. Nền cho mọi phần sau |
| **P2** | V053 + V054 + V056 + V057: Prototype, Design System, Diagram, đường **import** Master Doc — bảng + API + màn quản lý/xem/import | 2 | Sản phẩm bắt đầu **có tài liệu thật**; BA trình bày thiết kế và sơ đồ ngay trong hệ |
| **P3** | Product Home 6 tab | 2 | **Một màn hình trả lời mọi câu hỏi về một hệ thống** |
| **P4** | V055 + chuyển Capture Studio sang DB (gồm case tổng hợp) + report từng testcase + skill export | 2–3 | Chuỗi truy vết khép kín trong một nguồn sự thật |
| **P5** | Module Báo cáo theo kỳ; dọn phần rìa | 1 | Xuất công việc đã làm theo năm / khoảng ngày |

**Tổng 8–10 tuần.** Dừng ở cuối giai đoạn nào hệ thống vẫn nhất quán.

**Vì sao đường import Master Doc nằm ở P2 chứ không P4:** Mục 4.1 cho thấy **0 Master Doc / 0 BRD**. Không có tài liệu thì P3 (Product Home) chỉ là màn hình rỗng và P4 (test theo BRS) không có gì để sinh test. Import là việc rẻ nhất mở khóa nhiều nhất.

---

## 8. Rủi ro chính

| Rủi ro | Mức | Cách xử lý |
|---|---|---|
| Chuyển Capture Studio sang DB làm mất tính năng ghi hoặc **ghép** test case | **Cao** | Giữ nguyên chữ ký `store.js`; chuyển đúng cả mô hình composite; giữ ràng buộc chặn-xóa; thử kỹ trước khi bỏ đường cũ |
| 0/28 sản phẩm có Master Doc → toàn bộ chuỗi CR→BRS→Merge chưa chạy trên dữ liệu thật | **Cao** | Đường import ở P2; ưu tiên trước các sản phẩm đang có CR |
| Đổi tên `project_id` sót chỗ dùng | Trung bình | Đã đo phạm vi: 14 dòng backend + 5 file frontend. Làm trong một migration + một PR |
| Sửa tay Master Doc ghi đè thẳng, không qua duyệt | Trung bình | Mục 9 điểm 3 — nếu PO đồng ý thì V056 đưa sửa tay vào luồng duyệt |
| **Chưa có phân quyền** → chuỗi phê duyệt hiện chỉ là hình thức: bất kỳ ai đăng nhập đều duyệt được Master Doc | **Cao** | Nằm ngoài 16 quyết định nhưng là điểm yếu tuân thủ rõ nhất với maker-checker của ngân hàng. Đề xuất bổ sung một giai đoạn P6 sau P5 |
| Hạn mức AI chặn luồng sinh tài liệu | Trung bình | Dùng API key trả theo lượt dùng thay OAuth token gói thuê bao |

---

## 9. Bốn điểm cần PO xác nhận

Đã chốt sẵn phương án đề xuất — PO **đồng ý** hoặc **gạch bỏ**, không cần soạn câu trả lời.

**1. Quan hệ Project ↔ Product** — *đề xuất: hai vai trò `creates` (tối đa 1/dự án) và `enhances` (nhiều).*
Lý do: DB có **28 sản phẩm / 22 dự án**, phần lớn sản phẩm đã chạy nhiều năm và không sinh ra từ dự án nào trong hệ; ngược lại đa số dự án ngân hàng là **nâng cấp hệ thống đang chạy**. Nếu giữ đúng 1:1 tuyệt đối thì loại dự án phổ biến nhất **không có chỗ nối** vào sản phẩm nó tác động. Vai trò `creates` giữ nguyên tinh thần QĐ-16.

**2. Giữ `source_project_id` trên CR** — *đề xuất: giữ, tùy chọn.*
Không giữ thì phần *"công việc theo dự án"* của báo cáo QĐ-11 không làm được. Trường này **không** mang quyền sở hữu, nên không phá QĐ-16.

**3. Sửa tay Master Doc có phải qua duyệt?** — *đề xuất: có.*
Hiện sửa tay ghi đè HEAD ngay, tự đánh dấu `approved` mà không ai duyệt. Với maker-checker của ngân hàng thì đây là lỗ hổng: một người vừa sửa vừa tự duyệt tài liệu đặc tả hệ thống. Nếu PO thấy quá nặng cho việc sửa lỗi chính tả, phương án nhẹ hơn: **bắt buộc nhập lý do**, giữ ghi đè thẳng, và báo cáo kiểm toán liệt kê riêng nhóm `manual`.

**4. Phạm vi cắt phần rìa (QĐ-12)** — *đề xuất cắt:* trang BA cũ `/ba` (thế hệ 1, trùng chức năng với ba_documents v2) · Stage Gate / Health RAG / Stakeholder / Priority scoring · danh mục Vai trò & Quyền (chưa enforce ở đâu) · 3 bảng registry thế hệ đầu.
Xin PO gạch tên nào **muốn giữ**.

---

## Phụ lục A — Rà soát v2: tám lỗi đã sửa

Giữ lại để truy vết vì sao mô hình đổi. Bốn lỗi đầu là **lỗi thiết kế**: code theo v2 thì phải làm lại.

| # | Lỗi | Bằng chứng | Đã sửa ở |
|---|---|---|---|
| **L1** | QĐ-16 (bỏ `project_id`) **mâu thuẫn trực tiếp** QĐ-11 (báo cáo theo dự án). Nguyên nhân: v2 lẫn quyền sở hữu với quy kết nguồn | Hai quyết định của chính PO | Mục 3.2 |
| **L2** | Bất biến `HEAD = v1 + Σ BRS` **sai**: QĐ-14 cho sửa tay, và `master_docs.py:259` đã ghi `source='manual', status='approved'` **đè thẳng, không qua duyệt** | Mã nguồn đang chạy | Mục 3.4 |
| **L3** | Mô hình 1 dự án → 1 sản phẩm **không bao phủ dự án nâng cấp** | 28 sản phẩm / 22 dự án; đa số sản phẩm không sinh từ dự án nào | Mục 3.1, Mục 9 điểm 1 |
| **L4** | **Hiểu sai "automation testcase con"** — v2 tưởng là các *bước*, thực ra là *test case con của case tổng hợp*. Model chỉ-có-steps sẽ **làm mất tính năng ghép test case** | `store.js:56` `type: composite\|atomic`; `store.js:68` `children`; `store.js:86` chặn xóa; `runner.js:1` "atomic or composite" | Mục 5.3 |
| L5 | Lộ trình sai thứ tự: Product Home xếp **trước** khi có bảng prototype/diagram | — | Mục 7 (đã đảo) |
| L6 | Cây tài liệu vẽ như thư mục vật lý, trong khi Master Doc/BRS/testcase nằm **trong DB** | — | Mục 5.5 |
| L7 | 3 CR hiện có đều thiếu `product_id` → kẹt sau khi siết ràng buộc, v2 không nói cách xử lý | Truy vấn DB | Mục 4.1 + P1 |
| L8 | Số liệu sai rải rác: "10 bảng" (thật: **15**), "2 router" (thật: **3**), "không migration nào DROP" ngay khi V050 vừa DROP 15 bảng, "13 quyết định" (thật: **16**) | — | Toàn bộ v4 đã kiểm chứng lại |

---

## Phụ lục B — Việc đã thực hiện

**QĐ-15 — Gỡ Kế hoạch năm (2026-09-01).** Xóa **15 bảng** + cột `projects.plan_id` + **17 khóa ngoại** (V050, có sao lưu DB trước); gỡ **3 router** backend và **22 file** frontend; **viết lại Dashboard theo trục vòng đời** — KPI dự án / sản phẩm / độ phủ Master Doc / CR đang mở / việc test; thay tab Financial-Risk bằng tab Sản phẩm. 22 dự án không bị ảnh hưởng.

**QĐ-13 — Xác thực Claude.** Thứ PO nhập là **OAuth token** (`sk-ant-oat…`) của gói thuê bao, không phải API key. Hai loại gửi qua hai cơ chế khác nhau, nên token hợp lệ vẫn bị trả 401 — đúng như PO nhận xét *"báo lỗi nhưng thực tế vẫn call được"*. Đã sửa để nhận diện đúng cả hai loại, hiển thị loại credential đang dùng trong Cài đặt, thông báo lỗi nêu đúng nguyên nhân. **Hiện vướng 429 hết hạn mức gói thuê bao** — khuyến nghị dùng API key trả theo lượt dùng để chạy ổn định.
