/**
 * MÀU PHÂN LOẠI — EXTENSION CỦA BA_HOME, KHÔNG CÓ TRONG DESIGN SYSTEM.
 *
 * VÌ SAO TỒN TẠI
 * design-system/readme.md quy định: "One blue does all the interactive work
 * (Blue 600 #155EEF). Error 500 #F04438 is the only alarm colour." DS **không có
 * thang màu phân loại** (qualitative palette) vì file Figma nguồn không định nghĩa.
 * Nhưng BA_Home cần phân biệt bằng màu ở 4 chỗ có nghĩa nghiệp vụ thật: loại tài liệu,
 * domain, độ nghiêm trọng lỗi, track. Gộp hết về một token DS sẽ XOÁ MẤT phân biệt đó.
 *
 * readme.md cấm "thêm component bằng phép loại suy" — không cấm mở rộng thang màu cho
 * dữ liệu phân loại. Nhưng để không lẫn với token DS, mọi màu như vậy PHẢI khai ở đây,
 * không rải rác trong .tsx.
 *
 * QUY TẮC
 *  1. Màu ở file này CHỈ dùng để phân biệt hạng mục dữ liệu — nhãn, chip, chấm, sơ đồ.
 *     KHÔNG dùng cho bất cứ thứ gì tương tác (nút, link, focus, viền field) — chỗ đó
 *     luôn là Blue 600 theo DS.
 *  2. Trạng thái (đạt/chờ/lỗi/thông tin) KHÔNG thuộc file này — dùng
 *     var(--app-success | --app-warning | --app-danger | --app-info).
 *  3. Thêm màu mới thì thêm vào đây, kèm lý do. File này nằm trong danh sách miễn của
 *     scripts/check-ds-tokens.mjs nên hex ở đây không bị guard chặn.
 *
 * NGUỒN GIÁ TRỊ: giữ đúng màu đang chạy để không đổi giao diện khi tách ra. Phần lớn là
 * bước 600/700 của palette Tailwind — chấp nhận vì DS không có thang thay thế.
 */

/** Loại tài liệu BA — dùng ở BADocumentList. */
export const DOC_TYPE_COLORS = {
  BRD: 'var(--app-primary)',
  BRS: 'var(--app-success)',
  FSD: '#6B21A8',
  API_SPEC: 'var(--app-warning)',
  ERD: '#0F766E',
  DATA_DICT: '#7C3AED',
  WIREFRAME: '#DB2777',
  PROCESS_FLOW: '#EA580C',
  MASTER_DOC: '#4285F4',
} as const;

/** Độ nghiêm trọng của lỗi — thang nóng→nguội, có thứ tự nên không dùng màu trạng thái. */
export const SEVERITY_COLORS = {
  critical: '#DC2626',
  high: '#EA580C',
  medium: '#D97706',
  low: '#65A30D',
} as const;

/** Track tài liệu (project / ba / test) — chữ và nền tương ứng. */
export const TRACK_COLOR = {
  project: 'var(--app-primary)',
  ba: '#7C3AED',
  test: '#0891B2',
} as const;

export const TRACK_BG = {
  project: 'var(--ds-brand-subtle)',
  ba: '#F5F3FF',
  test: '#ECFEFF',
} as const;

/**
 * Palette gán cho domain theo vòng (index % length).
 * 8 màu cách nhau đủ xa về tông để phân biệt được cả khi in đen trắng.
 */
export const DOMAIN_COLORS = [
  '#2563EB', '#7C3AED', '#0891B2', '#059669',
  '#D97706', '#DC2626', '#DB2777', '#4F46E5',
] as const;

/**
 * Domain nghiệp vụ — 13 đơn vị, mỗi đơn vị PHẢI một màu riêng.
 *
 * CẢNH BÁO ĐÃ HỌC: khi map hàng loạt hex → token semantic, hai cặp bị gộp mất phân biệt
 * (BOS #F97316 và SME #D97706 cùng thành --app-warning; DIGITAL #10B981 và ESD #059669
 * cùng thành --app-success). Giữ hex nguyên bản ở đây chính là để chuyện đó không lặp lại.
 * Đừng thay các giá trị này bằng token trạng thái.
 */
export const DOMAIN_BADGE_COLORS: Record<string, string> = {
  HR: '#8B5CF6',
  FS: '#0EA5E9',
  RETAIL: '#F59E0B',
  CARDS: '#EF4444',
  RISK: '#DC2626',
  COMPLIANCE: '#6366F1',
  IT: '#0284C7',
  DIGITAL: '#10B981',
  BOS: '#F97316',
  DATA: '#6B7280',
  SME: '#D97706',
  TREASURY: '#7C3AED',
  ESD: '#059669',
};

/** Loại nhân sự trong danh mục. */
export const USER_TYPE_COLORS: Record<string, string> = {
  system: '#6366F1',
  business: '#F59E0B',
  technical: '#0EA5E9',
  management: '#10B981',
};

/**
 * Độ ưu tiên CR — thang có THỨ TỰ nên bốn bước phải phân biệt được.
 * `high` và `medium` từng bị gộp về --app-warning; giữ hai bước riêng.
 */
/* Không annotate Record<string,string>: để TS suy ra đúng 4 khoá, khớp Record<Priority,string> ở call site. */
export const PRIORITY_COLORS = {
  critical: '#EF4444',
  high: '#F97316',
  medium: '#EAB308',
  low: '#9CA3AF',
};

/**
 * Palette biểu đồ ở Dashboard — 8 series.
 * KHÔNG dùng token trạng thái ở đây: đỏ "danger" cho một series dữ liệu bình thường
 * làm người đọc hiểu sai là cảnh báo.
 */
export const CHART_PALETTE = [
  '#155EEF', '#7F56D9', '#039855', '#DC6803',
  '#0086C9', '#D92D20', '#667085', '#02CCCC',
] as const;

/**
 * Vai trò trong dự án.
 * Ghi chú: 'Dev Lead'/'Developer' và 'QA Lead'/'QA' cố tình DÙNG CHUNG màu — chúng là
 * cùng một chức năng ở hai cấp, màu phân biệt theo chức năng chứ không theo cấp.
 */
export const ROLE_COLORS: Record<string, string> = {
  PM: 'var(--app-primary)',
  BA: 'var(--app-success)',
  'Dev Lead': '#6B21A8',
  Developer: '#6B21A8',
  'QA Lead': 'var(--app-warning)',
  QA: 'var(--app-warning)',
  PO: 'var(--app-primary)',
  Stakeholder: 'var(--app-neutral-500)',
};

/** 5 domain của checklist quản trị. */
export const GOVERNANCE_DOMAIN_COLORS = {
  business_requirements: 'var(--app-primary)',
  architecture_code: '#7C3AED',
  infrastructure: 'var(--app-info)',
  security_iam: 'var(--ds-text-danger)',
  compliance_governance: 'var(--app-warning)',
} as const;

/** Lấy màu domain ổn định theo tên — cùng tên luôn ra cùng màu. */
export function domainColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i += 1) hash = (hash * 31 + name.charCodeAt(i)) | 0;
  return DOMAIN_COLORS[Math.abs(hash) % DOMAIN_COLORS.length];
}
