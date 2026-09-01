# Chiến lược tái cấu trúc BA_Home theo hướng Product-Centric

- **Mã:** STRATEGY-001 · **Phiên bản:** 3.0 · **Ngày:** 2026-09-01
- **Trạng thái:** chờ PO quyết 4 câu hỏi kiến trúc (Mục 2) — **2 câu chặn P1**
- **Thay thế:** v2.1. Bản này ra đời từ đợt rà soát phản biện chính v2 — xem Mục 1.

---

## 1. Kết quả rà soát v2 — 8 lỗi logic đã tìm ra

PO phản hồi "còn nhiều chỗ sai và không logic". Tôi rà lại toàn bộ v2 đối chiếu với mã nguồn thật và tìm ra 8 lỗi. Bốn lỗi đầu là **lỗi thiết kế thật**, không phải lỗi chính tả — nếu code theo v2 thì sẽ phải làm lại.

### L1 — Mâu thuẫn trực tiếp giữa QĐ-16 và QĐ-11 ⛔

- QĐ-16: *"CR không bao giờ thuộc Project"* → v2 kết luận bỏ `project_id` khỏi CR.
- QĐ-11: báo cáo theo kỳ phải *"export công việc đã làm: bao gồm project, product, CR"*.

**Không thể đồng thời.** Bỏ hẳn `project_id` thì vĩnh viễn không trả lời được *"dự án X đã làm ra những CR nào"* — mà đó chính là báo cáo QĐ-11 yêu cầu.

**Nguyên nhân sai:** v2 lẫn lộn **quyền sở hữu** với **quy kết nguồn gốc**. Đây là hai chuyện khác nhau:

| | Quyền sở hữu (ownership) | Quy kết nguồn (attribution) |
|---|---|---|
| Trả lời câu hỏi | CR này sửa tài liệu của ai? Ai duyệt? | Ai bỏ tiền/công cho CR này? |
| Thuộc về | **Product** — bắt buộc | **Project** — tùy chọn, có thể trống |
| Khi project đóng | Không đổi | CR mới ghi trống — đúng tinh thần "project done là dừng" |

**Cách sửa:** giữ `project_id` trên CR nhưng **đổi ý nghĩa và đổi tên thành `source_project_id`** — chỉ để quy kết và báo cáo, không mang quyền sở hữu. `product_id` mới là bắt buộc. Như vậy thỏa cả QĐ-16 lẫn QĐ-11.

### L2 — "Invariant kiểm toán" trong v2 là sai ⛔

v2 tuyên bố: `Master Doc HEAD = v1 + Σ(BRS golive đã merge)`.

**Sai, vì hai lý do độc lập:**
1. QĐ-14 cho phép **sửa trực tiếp trên giao diện** — vế phải không cộng vế đó.
2. Code **đang chạy** đã cho sửa tay: `master_docs.py` PUT tạo version `source='manual'`, `status='approved'` **ghi đè Master Doc ngay, không qua duyệt**.

Nói cách khác v2 phát biểu một bất biến mà hệ thống vi phạm ngay từ hôm nay. Trình cho kiểm toán viên mà họ tìm ra một version `manual` là mất uy tín cả tài liệu.

**Cách sửa** — hạ xuống bất biến đúng và bổ sung chốt kiểm soát:

> **Bất biến:** `Master Doc HEAD = version được duyệt gần nhất`, và **mọi** version đều truy được `source ∈ {init, cr_merge, manual}` + người duyệt + thời điểm.

Kèm hai chốt: (a) sửa tay **bắt buộc nhập lý do** (hiện mặc định trống "Cập nhật thủ công" — quá lỏng); (b) sửa tay cũng phải **qua duyệt** như merge từ BRS, thay vì ghi đè thẳng. Báo cáo kiểm toán liệt kê riêng các version `manual` để giải trình.

### L3 — Mô hình "1 Project → 1 Product" không bao phủ đa số thực tế ⛔

v2 chốt `project_product_links` với `UNIQUE(project_id)` — mỗi dự án đẻ đúng 1 sản phẩm.

**Số liệu thực tế phản bác:** DB có **28 sản phẩm / 22 dự án**. Phần lớn sản phẩm (Internet Banking, e-HR, Oracle ERP…) đã chạy nhiều năm, **không sinh ra từ dự án nào trong hệ**. Ngược lại, ở ngân hàng **đa số dự án là nâng cấp hệ thống đang chạy**, không đẻ sản phẩm mới.

Mô hình 1:1 khiến dự án nâng cấp **không có chỗ nối vào sản phẩm nó tác động** — trong khi đó mới là loại dự án phổ biến nhất.

**Cách sửa:** quan hệ project ↔ product là **nhiều-nhiều có vai trò**:
- `creates` — dự án khai sinh sản phẩm mới. **Tối đa 1 mỗi dự án** (đúng ý QĐ-16 "output của 1 project là 1 product").
- `enhances` — dự án nâng cấp sản phẩm đang chạy. **Nhiều sản phẩm được**.

Vẫn giữ nguyên tinh thần QĐ-16, nhưng bao phủ được thực tế. **Cần PO xác nhận — CH-1.**

### L4 — Hiểu sai "automation testcase con" ⛔

QĐ-4: *"Automation testcase con cũng phải quản lý ở db chứ không json local nữa."*

v2 hiểu "testcase con" = các **bước thao tác**, nên chỉ thiết kế bảng `automation_case_steps`.

**Kiểm chứng mã nguồn Capture Studio cho thấy hiểu sai:**

```
capture-studio/lib/store.js:56   type: data.type === 'composite' ? 'composite' : 'atomic'
capture-studio/lib/store.js:68   tc.children = Array.isArray(data.children) ? ...
capture-studio/lib/store.js:86   Composites whose children reference the given id
capture-studio/lib/runner.js:1   executes a test case (atomic or composite)
```

Studio có sẵn **test case tổng hợp** gồm nhiều **test case con** chạy nối tiếp trong cùng phiên trình duyệt. "Testcase con" trong QĐ-4 chính là cái này. Mô hình chỉ-có-steps của v2 **không biểu diễn được**, nên chuyển sang DB sẽ **mất tính năng ghép test case**.

**Cách sửa:** đưa đúng mô hình của Studio vào DB — 2 quan hệ song song:
- `automation_case_steps` — các bước của test case đơn (atomic)
- `automation_case_children` — thứ tự các test case con của test case tổng hợp (composite)
- thêm cột `case_type ∈ {atomic, composite}` trên `automation_test_cases`

### L5 — Lộ trình sai thứ tự phụ thuộc

v2 xếp **P2** (Product Home 6 tab, gồm tab Prototype+DS và tab Diagram) **trước P3** (mới tạo bảng prototype/DS/diagram). Không thể dựng màn hình cho dữ liệu chưa tồn tại. Đã đảo lại ở Mục 6.

### L6 — Cây tài liệu lẫn lộn hai kiểu lưu trữ

Mục 4.5 của v2 vẽ cây thư mục `{domain}/products/{mã}/master-doc/…` như thể tất cả là file. Thực tế **Master Doc, BRS, testcase nằm trong DB** (cột TEXT), chỉ prototype/diagram/tài liệu đính kèm mới là file trên đĩa. Trang Tài liệu phải nói rõ là **khung nhìn hợp nhất**, không phải cây thư mục vật lý.

### L7 — 3 CR hiện có sẽ kẹt

Kiểm tra DB: **cả 3 CR đều có `project_id`, không CR nào có `product_id`**. Sau khi `product_id` thành bắt buộc, 3 CR này không sinh được BRS, không merge được Master Doc — kẹt vĩnh viễn mà v2 không nói cách xử lý.

**Cách sửa:** khi mở CR cũ chưa gắn sản phẩm, bắt buộc chọn sản phẩm trước khi thao tác tiếp (một lần, ngay trên màn CR).

### L8 — Số liệu và tuyên bố sai rải rác trong v2

| Chỗ | v2 ghi | Thực tế |
|---|---|---|
| Quy mô gỡ Kế hoạch năm | "10 bảng ra khỏi luồng sử dụng" | **15 bảng bị xóa hẳn** + cột `projects.plan_id` + 17 khóa ngoại |
| Số router gỡ | 2 | **3** |
| Mục 4.6 + bảng rủi ro | "không xóa bảng, chỉ gỡ giao diện" | Mâu thuẫn QĐ-15 và **trái với việc đã làm** |
| Mục 5 | "Không migration nào DROP…" | V050 **đã DROP** 15 bảng |
| Mục 9, 11 | CH-1/CH-2 còn chờ PO | PO **đã trả lời** (QĐ-14, QĐ-15) |
| Đầu tài liệu | "13 quyết định", "v2.0" | **16 quyết định**, bản 2.1 |
| Mục 1 | "Loại bỏ 3 bảng BRD" | 3 bảng đó **chưa từng tồn tại** — đúng ra là "không xây" |

---

## 2. Bốn câu hỏi kiến trúc cần PO quyết

**Chặn P1:**

1. **CH-1 — Quan hệ Project ↔ Product (L3):** xác nhận cho phép hai vai trò `creates` (tối đa 1/dự án) và `enhances` (nhiều)? Nếu PO muốn giữ đúng 1:1 tuyệt đối thì **dự án nâng cấp hệ thống có sẵn sẽ không nối được vào sản phẩm** — cần PO xác nhận chấp nhận hạn chế này.

2. **CH-2 — Giữ quy kết dự án trên CR (L1):** xác nhận giữ trường `source_project_id` (tùy chọn, chỉ để báo cáo)? Nếu bỏ hẳn thì **báo cáo QĐ-11 không làm được phần "công việc theo project"**.

**Không chặn:**

3. **CH-3 — Sửa tay Master Doc (L2):** có bắt buộc sửa tay cũng phải qua duyệt như merge từ BRS không? Đề xuất: **có**, vì maker-checker của ngân hàng; hiện tại sửa tay ghi đè thẳng.

4. **CH-4 — Phạm vi cắt bỏ phần rìa (QĐ-12):** xác nhận cắt phần nào — trang BA cũ `/ba`, Stage Gate / Health RAG / Stakeholder / Priority scoring, danh mục Vai trò & Quyền (chưa enforce), 3 bảng registry legacy.

---

## 3. Mô hình mục tiêu (đã sửa theo L1, L3, L4)

### 3.1 Product là trục chính, Project quy kết nguồn

```
projects (giai đoạn đầu tư, có thời hạn)
├── project_briefs ← BRD (ĐÃ CÓ)
├── milestones, members, gates
└── project_product_links [MỚI, M:N có vai trò]
      ├── role='creates'  → tối đa 1 sản phẩm mới mỗi dự án   (QĐ-16)
      └── role='enhances' → N sản phẩm đang chạy được nâng cấp (L3)
                    │
                    ▼
catalog_products (TRỤC CHÍNH — 28 sản phẩm, 7 domain, sống lâu dài)
├── master_documents (ĐÃ CÓ) → master_doc_versions → version_crs
├── prototypes      [MỚI]  ─┐ đều dùng chung cho project|product
├── design_systems  [MỚI]  ─┤ (QĐ-6, QĐ-7)
├── diagrams        [MỚI]  ─┘ (QĐ-9, gắn được cả BRS)
│
└── change_requests
      product_id       BẮT BUỘC  ← quyền sở hữu (QĐ-16)
      source_project_id TÙY CHỌN ← quy kết nguồn, phục vụ báo cáo (QĐ-11)
        │
        └── cr_brs_documents (ĐÃ CÓ)
              └── automation_test_tasks (ĐÃ CÓ)
                    ├── automation_test_cases (ĐÃ CÓ) + case_type atomic|composite
                    │     ├── automation_case_steps    [MỚI] bước của case đơn
                    │     └── automation_case_children [MỚI] case con của case tổng hợp
                    └── automation_test_runs (ĐÃ CÓ)
                          └── automation_case_results [MỚI] kết quả từng case
```

**Vì sao Product là trục chính:** hệ thống ngân hàng sống 10 năm, dự án sống 6 tháng. CR bám project thì khi dự án đóng, mọi thay đổi sau đó — vá lỗi vận hành, yêu cầu tuân thủ, tối ưu nhỏ — không còn chỗ ghi nhận. Gắn CR vào Product thì tri thức tích lũy liên tục.

**Vì sao vẫn giữ quy kết dự án:** để trả lời được *"kỳ này dự án X đã làm ra gì"* mà không phá quyền sở hữu. Trường này trống với CR phát sinh ngoài dự án — đúng tinh thần "project done là dừng".

### 3.2 Thuật ngữ (khóa vào ADR-006)

- **Product** = 1 dòng `catalog_products`. Sở hữu Master Doc, chuỗi CR/BRS/Test, Prototype, DS, Diagram.
- **Project** = giai đoạn đầu tư có thời hạn. Sở hữu BRD (`project_briefs`), milestone, nguồn lực, gates. Khai sinh tối đa 1 sản phẩm, nâng cấp nhiều sản phẩm.
- **CR** = đơn vị thay đổi, **thuộc đúng 1 Product**; ghi kèm dự án tài trợ nếu có.
- **BRS** = đặc tả của 1 CR — cầu nối duy nhất từ CR sang Master Doc và sang Test.
- **Master Doc** = đặc tả AS-IS sống của Product.

### 3.3 Bất biến kiểm toán (đã sửa theo L2)

> **Master Doc HEAD = version được duyệt gần nhất.**
> **Mọi** version truy được: `source ∈ {init, cr_merge, manual}` · người tạo · người duyệt · thời điểm · lý do thay đổi.

Trả lời câu hỏi kiểm toán *"điều khoản này đến từ đâu"*: version → nếu `cr_merge` thì ra BRS → CR → người duyệt; nếu `manual` thì ra người sửa + lý do bắt buộc nhập; nếu `init` thì ra nguồn khởi tạo.

**Chốt kiểm soát cần bổ sung** (CH-3): sửa tay bắt buộc nhập lý do và đi qua duyệt như merge, thay vì ghi đè thẳng như hiện nay.

### 3.4 Master Doc v1 — ba đường khởi tạo (QĐ-14)

| Cách | `source` | Khi nào dùng |
|---|---|---|
| AI sinh từ BRD của dự án khai sinh (skill `init_master_doc`) | `init_ai` | Sản phẩm ra đời từ dự án — dùng `project_briefs` 25 cột đã có |
| Import tài liệu sẵn có (Markdown/Word) | `init_import` | **Trường hợp phổ biến nhất** — 28 sản phẩm hiện tại phần lớn đã chạy nhiều năm |
| Soạn trực tiếp trên giao diện | `init_manual` | Sản phẩm nhỏ, hoặc chỉnh sau khi sinh/import |

---

## 4. Sáu hạng mục xây mới

### 4.1 Prototype + Design System (QĐ-6, QĐ-7)

```
prototypes (owner_type: project|product, owner_id, name, entry_file, status)
  └── prototype_versions (version, storage_path, change_summary, cr_id?, created_by)

design_systems (owner_type: project|product, owner_id, name, status)
  └── design_system_versions (version, tokens_file, css_file, change_summary, created_by)
```

Lưu file theo ADR-005 (đĩa + đường dẫn trong DB) giống `project_files` đang chạy. Prototype xem trực tiếp qua iframe. `prototype_versions.cr_id` cho biết CR nào đổi màn hình nào.

**Điểm nối với test:** prototype có `data-testid` ổn định thì Capture Studio ghi được kịch bản **trước khi code thật xong** — rút ngắn vòng lặp BA → QA.

### 4.2 Diagram (QĐ-9)

```
diagrams (owner_type: project|product|brs, owner_id,
          diagram_type: workflow|sequence|dataflow,
          name, format: mermaid|plantuml|drawio|image,
          content TEXT, storage_path, version, status)
```

Mermaid render thẳng trong trình duyệt; PlantUML/drawio/ảnh hiển thị dạng file. Gắn được vào BRS nghĩa là mỗi CR có sơ đồ luồng riêng. Tùy chọn: skill `gen_diagram` sinh Mermaid từ BRS.

### 4.3 Automation testcase vào DB (QĐ-3, QĐ-4) — đã sửa theo L4

**Hiện trạng:** Capture Studio lưu mỗi test case là 1 file JSON; hệ thống chỉ giữ `studio_tc_id` dạng chuỗi — mắt xích ngoài DB, không sao lưu, không chia sẻ được.

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

Một hệ duy nhất theo QĐ-3: test case nghiệp vụ sinh từ BRS **chính là** test case chạy được, không tách hai hệ.

**Cách chuyển Studio (giữ nguyên tính năng, gồm cả ghép test case):**

| Bước | Việc | Rủi ro |
|---|---|---|
| 1 | API `/automation/cases/{id}/steps` và `/children` (CRUD + thay cả lô) | Thấp |
| 2 | `capture-studio/lib/store.js` đổi từ đọc/ghi file sang gọi API, **giữ nguyên chữ ký hàm** để `recorder`/`runner`/`codegen` không phải sửa | **Trung bình–cao** — điểm phải thử kỹ |
| 3 | Studio nhận `caseId` qua URL: mở từ BA_Home ghi thẳng vào đúng test case | Thấp |

Ràng buộc phải giữ: Studio hiện **chặn xóa** test case đang được case tổng hợp tham chiếu (`store.js:86`) — API mới phải giữ đúng ràng buộc này.

### 4.4 Report theo từng testcase + export theo skill (QĐ-10)

```
automation_case_results [MỚI]
  run_id, case_id, status (passed|failed|skipped|blocked),
  duration_ms, error_message, evidence_paths JSONB, note
```

Mỗi lượt chạy ghi kết quả từng test case thay vì chỉ tổng hợp. Export chọn **skill** trong kho skill — PO nạp mẫu báo cáo riêng của ngân hàng. Xuất được XLSX (đã có) và văn bản do AI soạn.

### 4.5 Trang Tài liệu theo domain (QĐ-2) — đã sửa theo L6

**Là khung nhìn hợp nhất, không phải cây thư mục vật lý.** Nguồn dữ liệu từng nhánh:

```
{domain}/
├── projects/{mã dự án}/     BRD (DB) · biên bản họp (DB) · file đính kèm (đĩa)
└── products/{mã sản phẩm}/
      ├── master-doc/        DB — master_documents + versions
      ├── brs/               DB — cr_brs_documents theo từng CR
      ├── test/              DB — testcase + kết quả chạy
      ├── prototype/         đĩa — prototype_versions.storage_path
      └── diagram/           DB (mermaid) hoặc đĩa (drawio/ảnh)
```

Sẵn sàng: 12 domain, `catalog_products.domain_code` đã có, 28 sản phẩm thuộc 7 domain (5 domain chưa có sản phẩm — hiển thị rỗng).

### 4.6 Module Báo cáo theo kỳ (QĐ-11)

Chọn năm hoặc khoảng ngày → xuất công việc đã làm:
- **Project**: khởi tạo / hoàn thành trong kỳ
- **Product**: có thay đổi Master Doc trong kỳ
- **CR**: theo trạng thái, kèm BRS và kết quả test, **nhóm theo dự án tài trợ** — phần này chỉ chạy được nếu giữ `source_project_id` (CH-2)

Xuất XLSX. *(Phần gỡ Kế hoạch năm đã thực hiện — xem Mục 7.)*

---

## 5. Thay đổi mô hình dữ liệu

| Migration | Nội dung | Ghi chú |
|---|---|---|
| ~~V050~~ | ~~Gỡ 15 bảng Kế hoạch năm + `projects.plan_id` + 17 khóa ngoại~~ | **ĐÃ THỰC HIỆN.** Migration **phá hủy** — ngoại lệ có chủ đích với quy ước additive, có sao lưu DB trước |
| **V051** | CR: đổi `project_id` → `source_project_id` (giữ dữ liệu, bỏ NOT NULL); index `product_id` | `product_id` bắt buộc **ở tầng ứng dụng** cho CR mới — không đặt NOT NULL vì 3 CR cũ chưa gắn (L7) |
| **V052** | `project_product_links` (project, product, role: creates\|enhances) — UNIQUE một `creates` mỗi dự án | Theo L3 |
| **V053** | `prototypes` + versions, `design_systems` + versions | `owner_type` CHECK (project\|product) |
| **V054** | `diagrams` | owner_type project\|product\|brs |
| **V055** | `automation_test_cases.case_type`; `automation_case_steps`; `automation_case_children`; `automation_case_results` | Theo L4 |
| **V056** | Master Doc: `change_summary` bắt buộc khác rỗng cho version `manual` | Chỉ khi PO chốt CH-3 |

V051 đổi tên cột — dữ liệu giữ nguyên, nhưng **cần sửa đồng bộ** `requests.py` và màn CR. Các migration còn lại thuần additive.

---

## 6. Lộ trình — đã sửa thứ tự theo L5

| GĐ | Nội dung | Tuần | Giá trị nhận được |
|---|---|---|---|
| **P1** | V051+V052: CR gắn Product bắt buộc, giữ quy kết dự án; liên kết project↔product 2 vai trò; xử lý 3 CR cũ; sửa màn CR | 1–2 | CR ghi nhận được thay đổi **ngoài dự án**; nền cho mọi phần sau |
| **P2** | V053+V054: Prototype, Design System, Diagram — bảng + API + màn quản lý/xem/import | 2 | BA trình bày thiết kế và sơ đồ ngay trong hệ |
| **P3** | Product Home 6 tab (Tổng quan · Master Doc · CR/BRS · Test · Prototype+DS · Diagram) | 2 | **Một màn hình trả lời mọi câu hỏi về một hệ thống** |
| **P4** | V055 + chuyển Capture Studio sang DB (gồm case tổng hợp) + report từng testcase + skill export | 2–3 | Chuỗi truy vết khép kín trong một nguồn sự thật |
| **P5** | Module Báo cáo theo kỳ; dọn phần rìa theo CH-4 | 1 | Xuất công việc đã làm theo năm / khoảng ngày |

**Tổng 8–10 tuần.** Dừng ở cuối giai đoạn nào hệ thống vẫn nhất quán.

Thứ tự đã đảo so với v2: **dữ liệu trước, màn hình sau** — P3 (Product Home) chỉ dựng được khi P2 đã có bảng prototype/DS/diagram.

---

## 7. Việc đã thực hiện

**QĐ-15 — Gỡ Kế hoạch năm (2026-09-01):** xóa 15 bảng + cột `projects.plan_id` + 17 khóa ngoại (V050, có sao lưu trước); gỡ 3 router backend và 22 file frontend; **viết lại Dashboard theo trục vòng đời** (KPI dự án/sản phẩm/độ phủ Master Doc/CR đang mở/việc test; thay tab Financial-Risk bằng tab Sản phẩm). 22 dự án không bị ảnh hưởng.

**QĐ-13 — Xác thực Claude:** thứ PO nhập là **OAuth token** (`sk-ant-oat…`) của gói thuê bao, không phải API key; hai loại này gửi qua hai cơ chế khác nhau nên token hợp lệ vẫn bị trả 401. Đã sửa để nhận diện đúng cả hai loại, hiển thị loại đang dùng trong Cài đặt, thông báo lỗi nêu đúng nguyên nhân. **Hiện vướng 429 hết hạn mức gói thuê bao** — khuyến nghị dùng API key trả theo lượt dùng để chạy ổn định.

---

## 8. Rủi ro chính

| Rủi ro | Mức | Cách xử lý |
|---|---|---|
| Chuyển Capture Studio sang DB làm mất tính năng ghi hoặc ghép test case | **Cao** | Giữ nguyên chữ ký `store.js`, chuyển đúng cả mô hình composite (L4), thử kỹ trước khi bỏ đường cũ |
| Đổi tên `project_id` → `source_project_id` sót chỗ dùng | Trung bình | Rà toàn bộ `requests.py` + màn CR; đổi trong một migration + một PR |
| 28 sản phẩm chưa có Master Doc → chuỗi CR→BRS→Merge chưa chạy được | Trung bình | Đường import (Mục 3.4) là lối vào nhanh nhất; ưu tiên sản phẩm có CR trước |
| Sửa tay Master Doc ghi đè thẳng, không qua duyệt | Trung bình | CH-3 — nếu PO đồng ý thì V056 + đưa sửa tay vào luồng duyệt |
| Chưa có phân quyền → chuỗi phê duyệt là hình thức | Trung bình | Chưa nằm trong 16 quyết định; đề xuất xử lý sau P5 |
| Hạn mức AI chặn luồng sinh tài liệu | Trung bình | Dùng API key trả theo lượt dùng |

---

## 9. Việc cần PO làm tiếp

1. Đọc **Mục 1** — xác nhận 4 lỗi thiết kế (L1–L4) tôi tìm ra là đúng với ý anh/chị.
2. Trả lời **CH-1** và **CH-2** — hai câu này chặn P1.
3. CH-3, CH-4 trả lời sau cũng được.
4. Cân nhắc API key trả theo lượt dùng để chạy thật luồng AI.

Sau khi PO chốt CH-1 và CH-2, tôi bắt đầu P1.
