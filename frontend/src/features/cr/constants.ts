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

export const TODO_TYPE_LABELS: Record<TodoType, string> = {
  feature: 'Tính năng', bug: 'Bug', review: 'Review',
  meeting: 'Họp', documentation: 'Tài liệu', deployment: 'Triển khai', other: 'Khác',
}
