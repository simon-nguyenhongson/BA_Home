import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import type { ChangeRequest, RequestHistoryEntry } from '../../../api/requests'

vi.mock('../../../api/requests', async () => {
  const actual = await vi.importActual<Record<string, unknown>>('../../../api/requests')
  return {
    ...actual,
    crApi: {
      get:              vi.fn(),
      update:           vi.fn(),
      delete:           vi.fn(),
      history:          vi.fn(),
      listAttachments:  vi.fn(),
      uploadAttachment: vi.fn(),
    },
  }
})

// BrsPanel gọi API AI khi mount — không thuộc phạm vi test panel
vi.mock('../BrsPanel', () => ({ BrsPanel: () => <div>brs-panel</div> }))
// CrEditModal nạp LOV sản phẩm/dự án — chỉ cần biết nó được mở
vi.mock('../CrEditModal', () => ({
  CrEditModal: ({ cr }: { cr: ChangeRequest }) => <div>edit-modal:{cr.request_code}</div>,
}))

import { crApi } from '../../../api/requests'
import { CrDetailPanel } from '../CrDetailPanel'

const BASE_CR: ChangeRequest = {
  id:           'cr-1',
  request_code: 'CR-2026-003',
  product_id:   'prod-1',
  product_name: 'Core Banking',
  product_code: 'CBS',
  project_id:   'prj-1',
  project_name: 'OMS',
  project_code: 'OMS',
  cr_kind:      'standard',
  title:        'Admin thêm quyền',
  change_type:  'other',
  priority:     'medium',
  status:       'implementing',
  requested_by: 'Hoàng Thị Hòa',
  created_at:   '2026-07-09T22:00:42',
  updated_at:   '2026-09-01T23:08:29',
}

/** Lịch sử thật của CR-2026-003: submitted → reviewing → implementing, BỎ QUA bước duyệt */
const HISTORY_SKIPPED_APPROVAL: RequestHistoryEntry[] = [
  { id: 'h1', ref_type: 'cr', ref_id: 'cr-1', action: 'created', actor: 'Hoàng Thị Hòa',
    from_status: null, to_status: 'submitted', comment: null, created_at: '2026-07-09T22:00:42' },
  { id: 'h2', ref_type: 'cr', ref_id: 'cr-1', action: 'status_changed', actor: 'admin',
    from_status: 'submitted', to_status: 'reviewing', comment: null, created_at: '2026-09-01T23:08:25' },
  { id: 'h3', ref_type: 'cr', ref_id: 'cr-1', action: 'status_changed', actor: 'admin',
    from_status: 'reviewing', to_status: 'implementing', comment: null, created_at: '2026-09-01T23:08:29' },
]

function renderPanel(cr: Partial<ChangeRequest> = {}, props: Record<string, unknown> = {}) {
  return render(
    <CrDetailPanel
      cr={{ ...BASE_CR, ...cr }}
      onClose={vi.fn()}
      onChanged={vi.fn()}
      onDeleted={vi.fn()}
      {...props}
    />,
  )
}

beforeEach(() => {
  vi.clearAllMocks()
  vi.mocked(crApi.history).mockResolvedValue(HISTORY_SKIPPED_APPROVAL)
  vi.mocked(crApi.listAttachments).mockResolvedValue([])
})

describe('CrDetailPanel — thanh trạng thái', () => {
  it('đánh dấu bước duyệt bị BỎ QUA thay vì hiện như đã hoàn thành', async () => {
    renderPanel()
    // Chờ lịch sử về — tập bước đã đi qua lấy từ đó, không suy ra từ thứ tự
    await waitFor(() => expect(crApi.history).toHaveBeenCalledWith('cr-1'))

    const skipped = await screen.findByTitle('Bước "Pending" đã bị bỏ qua')
    expect(skipped).toBeInTheDocument()
    expect(await screen.findByText(/Bỏ qua “Pending”/)).toBeInTheDocument()

    // Bước thật sự đã đi qua thì không bị gắn cờ
    expect(screen.getByTitle('Đã đi qua "Khởi tạo"')).toBeInTheDocument()
    expect(screen.getByTitle('Đã đi qua "Đang review"')).toBeInTheDocument()
    expect(screen.getByTitle('Trạng thái hiện tại')).toHaveTextContent('Đang triển khai')
  })

  it('không gắn cờ bỏ qua khi CR đi đủ luồng', async () => {
    vi.mocked(crApi.history).mockResolvedValue([
      ...HISTORY_SKIPPED_APPROVAL.slice(0, 2),
      { id: 'h3', ref_type: 'cr', ref_id: 'cr-1', action: 'status_changed', actor: 'admin',
        from_status: 'reviewing', to_status: 'approved', comment: null, created_at: '2026-09-01T23:08:26' },
      { id: 'h4', ref_type: 'cr', ref_id: 'cr-1', action: 'status_changed', actor: 'admin',
        from_status: 'approved', to_status: 'implementing', comment: null, created_at: '2026-09-01T23:08:29' },
    ])
    renderPanel()
    await waitFor(() => expect(crApi.history).toHaveBeenCalled())
    await screen.findByTitle('Đã đi qua "Pending"')
    expect(screen.queryByText(/Bỏ qua/)).not.toBeInTheDocument()
  })
})

describe('CrDetailPanel — chuyển trạng thái theo luồng', () => {
  it('chỉ hiện bước hợp lệ của trạng thái hiện tại', async () => {
    renderPanel()   // implementing → implemented | cancelled
    expect(await screen.findByRole('button', { name: 'Xác nhận đã triển khai' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Hủy CR' })).toBeInTheDocument()
    // Không được có nút quay lại bước đã qua
    expect(screen.queryByRole('button', { name: 'Duyệt CR' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Gửi review' })).not.toBeInTheDocument()
  })

  it('chuyển bước hợp lệ không đòi lý do', async () => {
    vi.mocked(crApi.update).mockResolvedValue({ ok: true })
    vi.mocked(crApi.get).mockResolvedValue({ ...BASE_CR, status: 'implemented' })
    const onChanged = vi.fn()
    renderPanel({}, { onChanged })

    await userEvent.click(await screen.findByRole('button', { name: 'Xác nhận đã triển khai' }))
    await waitFor(() =>
      expect(crApi.update).toHaveBeenCalledWith('cr-1', { status: 'implemented' }))
    await waitFor(() => expect(onChanged).toHaveBeenCalled())
  })

  it('Hủy CR bắt buộc nhập lý do trước khi gọi API', async () => {
    vi.mocked(crApi.update).mockResolvedValue({ ok: true })
    vi.mocked(crApi.get).mockResolvedValue({ ...BASE_CR, status: 'cancelled' })
    renderPanel()

    await userEvent.click(await screen.findByRole('button', { name: 'Hủy CR' }))
    // Hộp lý do đã mở nhưng chưa gọi API
    expect(crApi.update).not.toHaveBeenCalled()
    expect(screen.getByRole('button', { name: 'Xác nhận hủy CR' })).toBeDisabled()

    await userEvent.type(screen.getByPlaceholderText(/Nhập lý do/), 'Trùng với CR-2026-001')
    await userEvent.click(screen.getByRole('button', { name: 'Xác nhận hủy CR' }))
    await waitFor(() =>
      expect(crApi.update).toHaveBeenCalledWith('cr-1', {
        status: 'cancelled', comment: 'Trùng với CR-2026-001',
      }))
  })

  it('chuyển ngoài luồng phải nhập lý do — lý do vào lịch sử', async () => {
    vi.mocked(crApi.update).mockResolvedValue({ ok: true })
    vi.mocked(crApi.get).mockResolvedValue({ ...BASE_CR, status: 'reviewing' })
    renderPanel()

    await userEvent.click(await screen.findByRole('button', { name: 'Chuyển ngoài luồng' }))
    const select = screen.getByRole('combobox')
    // Bước hợp lệ không xuất hiện ở nhánh ngoài luồng
    expect(within(select).queryByRole('option', { name: 'Đã triển khai' })).not.toBeInTheDocument()
    await userEvent.selectOptions(select, 'reviewing')
    await userEvent.click(screen.getByRole('button', { name: 'Chuyển' }))

    expect(crApi.update).not.toHaveBeenCalled()
    await userEvent.type(screen.getByPlaceholderText(/Nhập lý do/), 'Phát hiện thiếu đánh giá rủi ro')
    await userEvent.click(screen.getByRole('button', { name: 'Xác nhận chuyển trạng thái' }))
    await waitFor(() =>
      expect(crApi.update).toHaveBeenCalledWith('cr-1', {
        status: 'reviewing', comment: 'Phát hiện thiếu đánh giá rủi ro',
      }))
  })

  it('lý do quá ngắn bị chặn ở giao diện, không để backend trả 400', async () => {
    renderPanel()
    await userEvent.click(await screen.findByRole('button', { name: 'Hủy CR' }))
    await userEvent.type(screen.getByPlaceholderText(/Nhập lý do/), 'ok')  // 2 < 5
    expect(screen.getByRole('button', { name: 'Xác nhận hủy CR' })).toBeDisabled()
    expect(screen.getByText(/Cần ít nhất 5 ký tự/)).toBeInTheDocument()

    await userEvent.type(screen.getByPlaceholderText(/Nhập lý do/), 'e nữa')
    expect(screen.getByRole('button', { name: 'Xác nhận hủy CR' })).toBeEnabled()
  })

  it('trạng thái kết thúc không còn bước tiếp theo', async () => {
    renderPanel({ status: 'implemented' })
    expect(await screen.findByText(/không còn bước tiếp theo/)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Mở lại (ngoài luồng)' })).toBeInTheDocument()
  })
})

describe('CrDetailPanel — lịch sử', () => {
  it('nước đi ngoài luồng hiện nhãn riêng, không phải mã thô của DB', async () => {
    vi.mocked(crApi.history).mockResolvedValue([
      ...HISTORY_SKIPPED_APPROVAL.slice(0, 2),
      { id: 'h9', ref_type: 'cr', ref_id: 'cr-1', action: 'status_changed_off_flow',
        actor: 'admin', from_status: 'reviewing', to_status: 'implementing',
        comment: 'Hotfix P1 đã lên PROD, hợp thức hoá sau', created_at: '2026-09-01T23:08:29' },
    ])
    renderPanel()
    await userEvent.click(await screen.findByRole('button', { name: /^Lịch sử/ }))
    expect(await screen.findByText('Chuyển NGOÀI LUỒNG')).toBeInTheDocument()
    expect(screen.queryByText('status_changed_off_flow')).not.toBeInTheDocument()
    expect(screen.getByText(/Hotfix P1 đã lên PROD/)).toBeInTheDocument()
  })
})

describe('CrDetailPanel — sửa và xoá', () => {
  it('có nút Sửa mở form sửa thông tin', async () => {
    renderPanel()
    await userEvent.click(await screen.findByRole('button', { name: /Sửa/ }))
    expect(screen.getByText('edit-modal:CR-2026-003')).toBeInTheDocument()
  })

  it('Xoá phải xác nhận, và cảnh báo mất dữ liệu', async () => {
    vi.mocked(crApi.delete).mockResolvedValue(undefined)
    const onDeleted = vi.fn()
    renderPanel({}, { onDeleted })

    await userEvent.click(await screen.findByRole('button', { name: 'Xoá CR' }))
    expect(crApi.delete).not.toHaveBeenCalled()
    expect(screen.getByText(/không phục hồi được/)).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Xoá vĩnh viễn' }))
    await waitFor(() => expect(crApi.delete).toHaveBeenCalledWith('cr-1'))
    await waitFor(() => expect(onDeleted).toHaveBeenCalled())
  })

  it('nút đóng panel có nhãn truy cập được (bản cũ là nút rỗng không thấy)', async () => {
    const onClose = vi.fn()
    renderPanel({}, { onClose })
    await userEvent.click(screen.getByRole('button', { name: 'Đóng chi tiết CR' }))
    expect(onClose).toHaveBeenCalled()
  })
})

describe('CrDetailPanel — cảnh báo nghiệp vụ', () => {
  it('CR chưa gắn sản phẩm hiện cảnh báo chặn sinh BRS', async () => {
    renderPanel({ product_id: undefined, product_name: undefined, product_code: undefined })
    expect(await screen.findByText(/không sinh được BRS/)).toBeInTheDocument()
  })

  it('CR nội bộ không có tab BRS', async () => {
    renderPanel({ cr_kind: 'internal' })
    expect(await screen.findByText('CR nội bộ')).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'BRS' })).not.toBeInTheDocument()
  })

  it('CR nghiệp vụ có tab BRS', async () => {
    renderPanel()
    expect(await screen.findByRole('button', { name: 'BRS' })).toBeInTheDocument()
  })
})
