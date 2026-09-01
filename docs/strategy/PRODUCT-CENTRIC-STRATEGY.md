# Chiến lược tái cấu trúc BA_Home theo hướng Product-Centric

- **Mã:** STRATEGY-001 · **Phiên bản:** 2.0 · **Ngày:** 2026-09-01
- **Trạng thái:** chờ PO review vòng 2 — **chưa code gì**
- **Thay thế:** v1.0 (2026-09-01 sáng). v2.0 viết lại theo 13 quyết định của PO; v1.0 xem trong Git history.

---

## 1. Tóm tắt điều hành

13 quyết định của PO đã **thu hẹp đáng kể phạm vi** so với v1 và làm rõ trục kiến trúc. Ba thay đổi lớn nhất:

1. **Bỏ BRD của product** (QĐ-5) — BRD chỉ thuộc Project. Loại bỏ hẳn 3 bảng và 1 AI skill khỏi kế hoạch. Đây là phần nặng nhất của v1, nay không làm nữa.
2. **Bỏ module Kế hoạch năm** (QĐ-11) — thay bằng Báo cáo theo khoảng thời gian. Gỡ ~2.500 dòng code, 10 bảng ra khỏi luồng sử dụng.
3. **Đưa automation testcase con vào DB** (QĐ-4) — Capture Studio không còn lưu JSON cục bộ. Đây là **hạng mục kỹ thuật nặng nhất còn lại** và là mắt xích cuối cùng đưa toàn bộ chuỗi truy vết vào một nguồn sự thật.

Bù lại có 2 hạng mục **mới hoàn toàn** chưa có trong v1: quản lý **Diagram** (QĐ-9) và **Design System như một thực thể quản lý được** (QĐ-7).

Cân đối: phạm vi v2 **nhẹ hơn v1 khoảng 25%** dù thêm 2 hạng mục mới, vì bỏ BRD-product và Kế hoạch năm. Ước lượng **5 giai đoạn, 7–10 tuần**.

**Còn 4 câu hỏi cần PO quyết** (Mục 9) — trong đó 1 câu chặn tiến độ.

---

## 2. Quyết định của PO — đã chốt, khóa vào thiết kế

| # | Quyết định | Ảnh hưởng thiết kế |
|---|---|---|
| 1 | CR theo product; **bỏ bắt buộc project_id**. Product và Project **ngang hàng**. Output của project ra 1 product | Đảo ràng buộc: `product_id` bắt buộc (CR mới), `project_id` tùy chọn. Thêm liên kết project → product |
| 2 | Tài liệu: mỗi **domain** có module cho Product thuộc domain đó — master doc, BRS, test | Cây tài liệu đổi thành domain → product → tài liệu |
| 3 | Testcase của BRS **gom chung 1 hệ**, không tách riêng, đi theo hướng automation | Không xây hệ test-management riêng. Một hệ automation duy nhất |
| 4 | Automation testcase con **quản lý ở DB**, không JSON cục bộ | Capture Studio chuyển sang đọc/ghi qua API. DB là nguồn sự thật |
| 5 | **Bỏ BRD của product** — BRD thuộc Project. Product chỉ có CR và BRS | Loại 3 bảng + skill `gen_brd` khỏi kế hoạch. Dùng `project_briefs` đã có |
| 6 | Prototype (HTML) quản lý cho **cả project và product** | Bảng dùng chung 2 loại chủ sở hữu |
| 7 | Design System **cùng cấp với prototype** | DS là thực thể quản lý được, không chỉ là file css |
| 8 | View tổng hợp per product | Product Home — giữ như v1 |
| 9 | **Diagram** cho Project, Product, BRS: Workflow / Sequence / Data flow — có quản lý, xem, import | Hạng mục mới hoàn toàn |
| 10 | Test: report **theo từng testcase**, export theo **skill AI cấu hình được** | Report xuống cấp testcase; skill export nạp từ kho skill |
| 11 | **Bỏ kế hoạch năm** → báo cáo theo năm / from-date to-date, export công việc đã làm (project, product, CR) | Gỡ module; thêm module Báo cáo |
| 12 | Trục là **vòng đời**: Project, Product, BA + AI, Test, Tài liệu, CR. Còn lại có thể xóa | Xác nhận trục kiến trúc + cho phép cắt bỏ phần rìa |
| 13 | API key cứ lưu thoải mái; test báo lỗi nhưng thực tế vẫn gọi được | **Đã xử lý xong** — xem Mục 8 |
| 14 | Master Doc v1: sinh từ BRD của project, **hoặc** import chủ động, **hoặc** sửa trực tiếp trên giao diện | 3 đường khởi tạo — trả lời CH-2 |
| 15 | Kế hoạch năm: **bỏ luôn cả DB và ràng buộc** | V050 — **ĐÃ THỰC HIỆN**, trả lời CH-1 |
| 16 | **Không đảo trục**: output của 1 Project là 1 Product để vận hành và CR lâu dài; project done là dừng, không có CR trên project | Product là trục chính (như v1), Project là giai đoạn sinh ra Product rồi kết thúc. CR **chỉ** thuộc Product |

---

## 3. Mô hình mục tiêu

### 3.1 Product là trục chính — Project là giai đoạn sinh ra Product

Theo QĐ-16, **Product là trục xuyên suốt**. Project là khoản đầu tư có thời hạn, bàn giao ra **đúng 1 Product** rồi kết thúc. Khi project done là dừng hẳn — **mọi thay đổi sau đó đều là CR trên Product**, không còn CR trên project.

```
TRỤC DELIVERY (có thời hạn)              TRỤC TRI THỨC (sống lâu dài)
─────────────────────────                ────────────────────────────
projects                                  catalog_products (28 sản phẩm, 7 domain)
├── project_briefs  ← BRD (ĐÃ CÓ)         ├── master_documents (ĐÃ CÓ)
├── milestones, members, gates            │     └── master_doc_versions → version_crs
├── prototypes      [MỚI, dùng chung]     ├── prototypes      [MỚI, dùng chung]
├── design_systems  [MỚI, dùng chung]     ├── design_systems  [MỚI, dùng chung]
├── diagrams        [MỚI, dùng chung]     ├── diagrams        [MỚI, dùng chung]
└──────────┐                              └──────────┐
           │  ĐIỂM NỐI 1                             │
           │  project_product_links [MỚI]            │
           │  "project này bàn giao ra product nào"  │
           └────────────────┬───────────────────────┘
                            │
                     ĐIỂM NỐI 2 — CR
                            │
              change_requests (product_id BẮT BUỘC,
                               project_id TÙY CHỌN)
                            │
                 cr_brs_documents (ĐÃ CÓ)
                            ├── diagrams [MỚI — QĐ-9]
                            │
                 automation_test_tasks (ĐÃ CÓ)
                            ├── automation_test_cases (ĐÃ CÓ)
                            │     └── automation_case_steps [MỚI — QĐ-4]
                            │           kịch bản ghi được, lưu DB
                            └── automation_test_runs (ĐÃ CÓ)
                                  └── automation_case_results [MỚI — QĐ-10]
                                        kết quả + report từng testcase
```

**Vì sao "ngang hàng" quan trọng:** hệ thống ngân hàng sống 10 năm, dự án sống 6 tháng. Buộc CR phải có project (như hiện tại) nghĩa là **không ghi nhận được thay đổi ngoài dự án** — vá lỗi vận hành, yêu cầu tuân thủ, tối ưu nhỏ. Đó chính là phần lớn thay đổi thực tế trên hệ thống đang chạy.

### 3.2 Thuật ngữ chốt (khóa vào ADR-006)

- **Product** = 1 dòng `catalog_products`. Chủ sở hữu tài sản tri thức: Master Doc, chuỗi CR/BRS/Test, Prototype, DS, Diagram.
- **Project** = khoản đầu tư có thời hạn. Chủ sở hữu **BRD** (`project_briefs`), milestone, nguồn lực, gates. **Bàn giao ra Product.**
- **CR** = đơn vị thay đổi trên **một Product**. Có thể do một Project tài trợ, có thể không.
- **BRS** = đặc tả của một CR. Là cầu nối duy nhất từ CR sang Master Doc và sang Test.
- **Master Doc** = đặc tả AS-IS sống của Product.

**Invariant kiểm toán được** (đã bỏ vế BRD theo QĐ-5):

> `Master Doc HEAD = Master Doc v1 (khởi tạo) + Σ (BRS golive đã merge, theo thứ tự)`

Chuỗi này truy vết 100% trong DB qua `master_doc_versions` + `master_doc_version_crs` (đã có). Trả lời được câu hỏi kiểm toán: *"Điều khoản này trong tài liệu đến từ đâu?"* → version nào → BRS nào → CR nào → ai duyệt, lúc nào.

### 3.3 Master Doc v1 sinh ra từ đâu?

Bỏ BRD-product làm mất nguồn khởi tạo mà v1 dự kiến. Ba cách, đề xuất cách 2:

| Cách | Mô tả | Đánh giá |
|---|---|---|
| 1 | BA soạn tay | Đơn giản nhưng tốn công với 28 sản phẩm |
| 2 | **AI skill `init_master_doc` sinh từ BRD của project bàn giao + metadata catalog** | **Đề xuất** — tận dụng `project_briefs` 25 cột đã có; sản phẩm không có project nguồn thì soạn tay |
| 3 | Sinh từ prototype | Ngược quy trình, không khuyến nghị |

---

## 4. Sáu hạng mục xây mới — thiết kế cụ thể

### 4.1 Prototype + Design System (QĐ-6, QĐ-7)

Hai thực thể **cùng cấu trúc, cùng cấp**, đều gắn được vào project hoặc product:

```
prototypes (owner_type: project|product, owner_id, name, entry_file, status)
  └── prototype_versions (version, storage_path, change_summary, cr_id?, created_by)

design_systems (owner_type: project|product, owner_id, name, status)
  └── design_system_versions (version, tokens_file, css_file, change_summary, created_by)
```

- Lưu file theo ADR-005 (filesystem + đường dẫn trong DB), giống `project_files` đang chạy.
- Prototype HTML xem trực tiếp trong ứng dụng qua iframe (giống cách nhúng Capture Studio).
- Liên kết `prototype_versions.cr_id` cho biết CR nào làm đổi màn hình nào — phục vụ QĐ-8 (view tổng hợp).

**Điểm nối với test:** prototype có `data-testid` ổn định thì Capture Studio ghi được kịch bản **trước khi code thật xong** — rút ngắn vòng lặp BA → QA. Đây là lợi ích lớn nhất của việc quản lý prototype trong hệ.

### 4.2 Diagram (QĐ-9) — hạng mục mới

```
diagrams (owner_type: project|product|brs, owner_id,
          diagram_type: workflow|sequence|dataflow,
          name, format: mermaid|plantuml|drawio|image,
          content TEXT, storage_path, version, status)
```

- **Import**: dán mã Mermaid/PlantUML, hoặc tải file `.drawio`/ảnh.
- **View**: Mermaid render thẳng trong trình duyệt (không cần server). PlantUML/drawio/ảnh hiển thị dạng file.
- Ba loại theo đúng QĐ-9. Gắn được vào BRS nghĩa là **một CR có sơ đồ luồng riêng** — thứ BA ngân hàng cần khi trình duyệt thay đổi.
- Đề xuất bổ sung: AI skill `gen_diagram` sinh Mermaid từ nội dung BRS (BA chỉnh lại). Không bắt buộc ở v1.

### 4.3 Automation testcase con vào DB (QĐ-3, QĐ-4) — hạng mục nặng nhất

**Hiện trạng:** Capture Studio lưu mỗi testcase là 1 file JSON trong `automation-test/capture-studio/data/testcases/`. Hệ thống chỉ giữ `studio_tc_id` dạng chuỗi — mắt xích ra ngoài DB, không sao lưu, không chia sẻ được giữa người dùng.

**Mô hình đích — một hệ duy nhất theo QĐ-3:**

```
automation_test_cases (ĐÃ CÓ — testcase nghiệp vụ sinh từ BRS)
  └── automation_case_steps [MỚI]
        step_no, action (click|fill|select|check|assert|goto|wait|press),
        selector, value, assert_type, expected, is_secret, frame_path,
        params JSONB, source (recorded|manual|ai)
```

Không tạo bảng "testcase con" riêng biệt — **kịch bản là các bước của chính testcase đó**. Đúng tinh thần QĐ-3 "gom chung 1 hệ, không tách riêng".

**Cách chuyển Capture Studio (3 bước, giữ nguyên tính năng):**

| Bước | Việc | Rủi ro |
|---|---|---|
| 1 | Thêm API `/automation/cases/{id}/steps` (CRUD + bulk replace) | Thấp |
| 2 | `capture-studio/lib/store.js` đổi từ đọc/ghi file sang gọi API PPG (giữ nguyên interface nội bộ để `recorder/runner/codegen` không phải sửa) | **Trung bình** — đây là điểm cần thử kỹ |
| 3 | Studio nhận `caseId` qua URL: mở từ BA_Home là ghi thẳng vào đúng testcase | Thấp |

**Đổi lại:** kịch bản test được sao lưu cùng DB, nhiều người dùng chung, và truy vết đầy đủ CR → BRS → testcase → từng bước thao tác.

### 4.4 Report theo từng testcase + export theo skill (QĐ-10)

```
automation_case_results [MỚI]
  run_id, case_id, status (passed|failed|skipped|blocked),
  duration_ms, error_message, evidence_paths JSONB, note
```

- Mỗi lượt chạy ghi kết quả **từng testcase**, không chỉ tổng hợp như hiện tại.
- Export: người dùng chọn **skill export** trong kho skill (QĐ-10 "dựa theo skill ai xuất file tôi cấu hình"). Hệ thống có sẵn `gen_test_report`; PO nạp thêm skill riêng theo mẫu báo cáo của ngân hàng.
- Xuất được cả **XLSX** (đã có) và **văn bản do AI soạn theo skill**.

### 4.5 Tài liệu theo domain (QĐ-2)

Cây tài liệu hiện tại là `{domain}/{project}/BA|Tester`. Bổ sung nhánh product:

```
{domain}/
├── projects/{mã dự án}/     ← BRD, biên bản họp, tài liệu bàn giao (đã có)
└── products/{mã sản phẩm}/  ← MỚI
      ├── master-doc/        (bản hiện hành + lịch sử version)
      ├── brs/               (BRS theo từng CR)
      ├── test/              (testcase + báo cáo test)
      ├── prototype/
      └── diagram/
```

Dữ liệu đã sẵn sàng: 12 domain, `catalog_products.domain_code` đã có, 28 sản phẩm thuộc 7 domain.

### 4.6 Báo cáo thay Kế hoạch năm (QĐ-11)

**Gỡ:** trang Kế hoạch năm, 2 router, 10 bảng ra khỏi luồng sử dụng.

**Thay bằng** module Báo cáo: chọn khoảng thời gian (theo năm hoặc from-date/to-date) → xuất công việc đã làm gồm **Project** (khởi tạo/hoàn thành trong kỳ), **Product** (thay đổi trong kỳ), **CR** (theo trạng thái, kèm BRS và kết quả test). Xuất XLSX.

**Lưu ý dữ liệu — cần PO xác nhận (CH-1):** hiện có **20 sáng kiến** và **20 dự án đang gắn `plan_id`**. Theo quy ước "migration chỉ additive", tôi **không xóa bảng**, chỉ gỡ khỏi giao diện và luồng. Dữ liệu vẫn nằm trong DB, truy được bằng SQL. Nếu PO muốn giữ tra cứu lịch sử kế hoạch năm thì làm thêm 1 màn hình chỉ-đọc.

---

## 5. Thay đổi mô hình dữ liệu — additive, V050 → V054

| Migration | Nội dung | Ghi chú rủi ro |
|---|---|---|
| **V050** | `change_requests.project_id` bỏ NOT NULL; thêm index `product_id` | Nới lỏng ràng buộc — an toàn. Bắt buộc `product_id` **enforce ở tầng ứng dụng** cho CR mới (không đặt NOT NULL vì 3 CR cũ chưa gắn product) |
| **V051** | `project_product_links` (project ↔ product, kèm vai trò: bàn giao mới / nâng cấp) | Bảng mới |
| **V052** | `prototypes` + `prototype_versions`, `design_systems` + `design_system_versions` | Bảng mới, `owner_type` CHECK (project|product) |
| **V053** | `diagrams` (owner_type project|product|brs, 3 diagram_type) | Bảng mới |
| **V054** | `automation_case_steps`, `automation_case_results` | Bảng mới — nền cho QĐ-4 và QĐ-10 |

Không migration nào DROP hay đổi kiểu cột đang dùng. Tuân thủ quy ước trong CLAUDE.md.

---

## 6. AI skill cần thêm (nạp vào kho skill đã có)

| Skill | Dùng khi | Bắt buộc? |
|---|---|---|
| `init_master_doc` | Khởi tạo Master Doc v1 từ BRD project + metadata catalog | Có — thay vai trò `gen_brd` đã bỏ |
| `gen_diagram` | Sinh Mermaid (workflow/sequence/dataflow) từ BRS | Không — tiện ích |
| `gen_case_report` | Report **từng testcase** theo mẫu PO cấu hình (QĐ-10) | Có |
| `review_brs` | Rà BRS trước khi trình duyệt: thiếu mục, mâu thuẫn Master Doc | Không — nâng chất lượng |

4 skill hệ thống hiện có (`gen_brs`, `update_master_doc`, `gen_test_case`, `gen_test_report`) giữ nguyên, sửa nội dung được trong màn Cài đặt.

---

## 7. Lộ trình 5 giai đoạn — mỗi giai đoạn dùng được ngay

| GĐ | Nội dung | Tuần | Giá trị nhận được |
|---|---|---|---|
| **P1** | V050+V051: CR gắn product (bỏ ép project), liên kết project→product. Sửa màn CR | 1–2 | CR ghi nhận được **thay đổi ngoài dự án** — vá lỗi, tuân thủ |
| **P2** | Product Home 6 tab: Tổng quan · Master Doc · CR/BRS · Test · Prototype+DS · Diagram | 2 | **Một màn hình trả lời mọi câu hỏi về một hệ thống** |
| **P3** | V052+V053: Prototype, Design System, Diagram (quản lý + view + import) | 2 | BA trình bày được thiết kế và sơ đồ ngay trong hệ |
| **P4** | V054 + chuyển Capture Studio sang DB + report từng testcase + skill export | 2–3 | Chuỗi truy vết **khép kín trong một nguồn sự thật** |
| **P5** | Gỡ Kế hoạch năm, thêm module Báo cáo theo kỳ; dọn phần rìa theo QĐ-12 | 1 | Giao diện gọn theo đúng vòng đời PO quan tâm |

**Tổng: 7–10 tuần.** Dừng ở cuối bất kỳ giai đoạn nào hệ thống vẫn nhất quán.

Đề xuất làm P1 trước vì nó gỡ nút thắt lớn nhất (CR bị trói vào project) và là tiền đề cho mọi thứ sau.

---

## 8. Việc đã xử lý xong trong lúc chờ review

**QĐ-13 — "test báo lỗi nhưng thực tế vẫn call được":** đã tìm ra nguyên nhân và sửa.

Thứ PO nhập là **OAuth token** (`sk-ant-oat…`) của gói thuê bao, không phải API key. Anthropic nhận hai kiểu xác thực khác nhau: API key gửi qua header `x-api-key`, OAuth token gửi qua `Authorization: Bearer` kèm header beta. Code cũ luôn gửi kiểu thứ nhất nên token hợp lệ vẫn bị trả 401 "key không hợp lệ".

Đã sửa: hệ thống tự nhận diện loại credential và gửi đúng kiểu; màn Cài đặt hiện rõ đang dùng loại nào; thông báo lỗi nêu đúng nguyên nhân. Xác thực đã thông — hiện còn vướng **429 hết hạn mức của gói thuê bao**, nên chưa chạy được luồng sinh tài liệu thật. **Khuyến nghị: dùng API key trả theo lượt dùng** (`sk-ant-api…`) từ console.anthropic.com để hệ thống chạy ổn định, không tranh hạn mức với Claude Code.

---

## 9. Câu hỏi cần PO quyết

**Chặn tiến độ:**

1. **CH-1 — Dữ liệu Kế hoạch năm (QĐ-11):** hiện có 20 sáng kiến và 20 dự án đang gắn `plan_id`. Đề xuất: **giữ bảng, gỡ khỏi giao diện**, dữ liệu vẫn tra được bằng SQL. PO có cần màn hình chỉ-đọc để tra lịch sử không, hay bỏ hẳn khỏi tầm nhìn người dùng?

**Không chặn, quyết trước khi tới giai đoạn tương ứng:**

2. **CH-2 — Master Doc v1 sinh từ đâu (Mục 3.3):** đề xuất AI sinh từ BRD của project bàn giao. Với 28 sản phẩm hiện có mà phần lớn không có project nguồn, PO muốn: BA soạn tay dần, hay sinh từ metadata catalog rồi BA chỉnh?

3. **CH-3 — Phạm vi "xóa phần rìa" (QĐ-12):** ngoài Kế hoạch năm, các phần sau đang ít giá trị theo trục vòng đời — PO xác nhận cắt phần nào: trang BA cũ `/ba` (thế hệ tài liệu cũ), Stage Gate / Health RAG / Stakeholder / Priority scoring trong PPG, danh mục Vai trò & Quyền (chưa enforce), 3 bảng registry legacy.

4. **CH-4 — Phân quyền:** hiện **mọi người đăng nhập đều duyệt được** BRS và Master Doc. Với quy trình maker-checker của ngân hàng đây là khoảng trống thật. PO chấp nhận ở v1 (làm sau P5), hay cần chặn ngay từ P1?

---

## 10. Rủi ro chính

| Rủi ro | Mức | Cách xử lý |
|---|---|---|
| Chuyển Capture Studio sang DB làm hỏng tính năng ghi | **Cao** | Giữ nguyên interface `store.js`, chỉ đổi phần lưu trữ; thử kỹ luồng ghi trước khi bỏ đường cũ |
| Gỡ Kế hoạch năm khi 20 dự án đang gắn | Trung bình | Không xóa bảng, chỉ gỡ giao diện (CH-1) |
| Chưa có phân quyền → chuỗi phê duyệt chỉ là hình thức | Trung bình | CH-4 — cần PO chốt mức chấp nhận rủi ro |
| Hạn mức AI của gói thuê bao chặn luồng sinh tài liệu | Trung bình | Chuyển sang API key trả theo lượt dùng |
| 28 sản phẩm chưa có Master Doc → chuỗi CR→BRS→Merge chưa chạy được | Trung bình | CH-2 — chốt cách khởi tạo trước P2 |

---

## 11. Việc cần PO làm tiếp

1. Đọc Mục 2 xác nhận tôi hiểu đúng 13 quyết định.
2. Trả lời **CH-1** (chặn P5) và xác nhận thứ tự giai đoạn — đề xuất bắt đầu từ P1.
3. CH-2, CH-3, CH-4 trả lời sau cũng được, nhưng nên có trước khi tới giai đoạn tương ứng.
4. Cân nhắc tạo API key trả theo lượt dùng để chạy thật luồng AI.

Sau khi PO duyệt, tôi bắt đầu P1 và không đụng tới các phần ngoài phạm vi đã chốt.
