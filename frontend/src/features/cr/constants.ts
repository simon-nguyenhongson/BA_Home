/**
 * Hằng số dùng chung cho màn hình Change Request (CR).
 * Nguồn duy nhất cho label/flow/tab — trước đây bị nhân đôi giữa
 * RequestsPage.tsx và ProjectCRTab.tsx.
 */
import type { CRChangeType, CRStatus, Priority } from '../../api/requests'
import type { TodoType } from '../../api/todos'

export const CR_CHANGE_TYPE_LABELS: Record<CRChangeType, string> = {
  scope: 'Phạm vi', timeline: 'Timeline', resource: 'Nhân lực',
  budget: 'Ngân sách', technical: 'Kỹ thuật', process: 'Quy trình', other: 'Khác',
}

export const CR_STATUS_LABELS: Record<CRStatus, string> = {
  submitted:    'Khởi tạo',
  reviewing:    'Đang review',
  approved:     'Pending',
  rejected:     'Từ chối',
  implementing: 'Đang triển khai',
  implemented:  'Đã triển khai',
  cancelled:    'Hủy',
}

export interface CrStatusTab { label: string; values: CRStatus[] | null }

export const CR_STATUS_TABS: CrStatusTab[] = [
  { label: 'Tất cả',           values: null },
  { label: 'Khởi tạo',         values: ['submitted'] },
  { label: 'Đang review',      values: ['reviewing'] },
  { label: 'Đang triển khai',  values: ['implementing'] },
  { label: 'Đã triển khai',    values: ['implemented'] },
  { label: 'Pending',          values: ['approved'] },
  { label: 'Từ chối',          values: ['rejected'] },
  { label: 'Hủy',              values: ['cancelled'] },
]

export const CR_PRIORITY_LABELS: Record<Priority, string> = {
  critical: 'Khẩn cấp', high: 'Cao', medium: 'Trung bình', low: 'Thấp',
}

// Flow chính của CR trên progress bar (không gồm trạng thái kết thúc)
export const CR_FLOW: CRStatus[] = ['submitted', 'reviewing', 'approved', 'implementing', 'implemented']

export const CR_STATUS_VARIANTS: Record<CRStatus, string> = {
  submitted:    'neutral',
  reviewing:    'warning',
  approved:     'info',
  rejected:     'danger',
  implementing: 'warning',
  implemented:  'success',
  cancelled:    'neutral',
}

export const CR_PRIORITY_VARIANTS: Record<Priority, string> = {
  critical: 'danger', high: 'warning', medium: 'info', low: 'neutral',
}

/** Trạng thái kết thúc — không chuyển tiếp được nữa. */
export const CR_TERMINAL: CRStatus[] = ['implemented', 'rejected', 'cancelled']

/** Chuyển trạng thái bắt buộc có lý do (ghi vào request_history.comment). */
export const CR_REQUIRES_COMMENT: CRStatus[] = ['rejected', 'cancelled']

/**
 * Độ dài lý do tối thiểu — PHẢI khớp MIN_REASON_LEN ở backend
 * (requests.py). Chặn ở đây để người dùng không phải chạm vào lỗi 400.
 */
export const CR_MIN_REASON_LEN = 5

/**
 * Luồng chuyển trạng thái HỢP LỆ của CR.
 *
 * Bảng này PHẢI khớp CR_TRANSITIONS trong backend/ppg/app/routers/requests.py —
 * tầng server mới là chỗ chặn thật, giao diện chỉ dẫn hướng. Bước đi ngoài bảng
 * vẫn được phép (vận hành thật cần cửa thoát) nhưng bắt buộc nêu lý do, và
 * backend ghi bằng action riêng `status_changed_off_flow` để hồ sơ kiểm toán
 * phân biệt được nước đi bất thường — ví dụ Đang review → Đang triển khai, bỏ
 * qua bước duyệt, vốn trước đây xảy ra lặng lẽ.
 */
export const CR_TRANSITIONS: Record<CRStatus, CRStatus[]> = {
  submitted:    ['reviewing', 'cancelled'],
  reviewing:    ['approved', 'rejected', 'cancelled'],
  approved:     ['implementing', 'cancelled'],
  implementing: ['implemented', 'cancelled'],
  implemented:  [],
  rejected:     [],
  cancelled:    [],
}

/** Nhãn hành động trên nút chuyển trạng thái — đọc như việc cần làm, không như tên cột DB. */
export const CR_TRANSITION_ACTION_LABELS: Partial<Record<CRStatus, string>> = {
  reviewing:    'Gửi review',
  approved:     'Duyệt CR',
  rejected:     'Từ chối',
  implementing: 'Bắt đầu triển khai',
  implemented:  'Xác nhận đã triển khai',
  cancelled:    'Hủy CR',
}

export const TODO_TYPE_LABELS: Record<TodoType, string> = {
  feature: 'Tính năng', bug: 'Bug', review: 'Review',
  meeting: 'Họp', documentation: 'Tài liệu', deployment: 'Triển khai', other: 'Khác',
}
