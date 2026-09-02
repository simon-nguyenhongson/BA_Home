import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AiRunStage, type StageStep } from '../AiRunStage'

const STEPS: StageStep[] = [
  { id: 'owner',   label: 'Xác minh đối tượng gắn sơ đồ', state: 'done', detail: 'eKYC Verification Service' },
  { id: 'skill',   label: 'Nạp bộ quy tắc dựng hình',     state: 'done', detail: '2 khối · 78.7 KB' },
  { id: 'context', label: 'Nạp bối cảnh từ hệ thống',     state: 'done', detail: '96 ký tự bối cảnh' },
  { id: 'ai',      label: 'Claude vẽ sơ đồ',              state: 'running', detail: 'đã sinh 4.264 ký tự' },
  { id: 'safety',  label: 'Kiểm chứng an toàn HTML',      state: 'pending' },
  { id: 'save',    label: 'Lưu sơ đồ và phiên bản',       state: 'pending' },
]

describe('AiRunStage — đang chạy', () => {
  it('nói rõ đang ở bước nào trên tổng bao nhiêu bước', () => {
    render(
      <AiRunStage title="Claude đang vẽ «X»" steps={STEPS} stats={{}}
        elapsedFrom={performance.now()} />,
    )
    expect(screen.getByText(/3\/6 bước/)).toBeInTheDocument()
    expect(screen.getByText(/claude vẽ sơ đồ/)).toBeInTheDocument()
  })

  it('hiện chi tiết ĐO ĐƯỢC của từng bước, không phải chữ chung chung', () => {
    render(
      <AiRunStage title="t" steps={STEPS} stats={{}} elapsedFrom={performance.now()} />,
    )
    expect(screen.getByText('2 khối · 78.7 KB')).toBeInTheDocument()
    expect(screen.getByText('96 ký tự bối cảnh')).toBeInTheDocument()
    expect(screen.getByText('đã sinh 4.264 ký tự')).toBeInTheDocument()
  })

  it('hiện số liệu thật của lượt gọi và KHÔNG có phần trăm nào', () => {
    const { container } = render(
      <AiRunStage title="t" steps={STEPS}
        stats={{ model: 'claude-haiku-4-5', chars: 8350, outputTokens: 3358, maxTokens: 64000, cacheRead: 26813 }}
        elapsedFrom={performance.now()} />,
    )
    expect(screen.getByText('claude-haiku-4-5')).toBeInTheDocument()
    expect(screen.getByText(/8\.350 ký tự/)).toBeInTheDocument()
    expect(screen.getByText(/3\.358 \/ 64\.000/)).toBeInTheDocument()
    expect(screen.getByText(/26\.813 token/)).toBeInTheDocument()
    // Độ dài tài liệu không biết trước nên mọi phần trăm sẽ là bịa — không được có
    expect(container.textContent).not.toMatch(/\d+\s*%/)
  })

  it('có thanh chạy vô định và nút dừng, kèm cảnh báo đóng là dừng', async () => {
    const onCancel = vi.fn()
    const { container } = render(
      <AiRunStage title="t" steps={STEPS} stats={{}} elapsedFrom={performance.now()}
        onCancel={onCancel} />,
    )
    expect(container.querySelector('.ai-rail__sweep')).toBeTruthy()
    expect(screen.getByText(/Đóng hộp thoại này sẽ DỪNG lượt sinh/)).toBeInTheDocument()
    await userEvent.click(screen.getByRole('button', { name: /Dừng lượt sinh/ }))
    expect(onCancel).toHaveBeenCalled()
  })
})

describe('AiRunStage — lỗi', () => {
  const withError = (
    <AiRunStage
      title="Claude đang vẽ «X»"
      steps={STEPS.map(s => (s.state === 'running' ? { ...s, state: 'pending' as const } : s))}
      stats={{}}
      error={{ code: 'AI_RATE_LIMIT', message: 'Hết hạn mức của gói thuê bao.' }}
      elapsedFrom={performance.now()}
      onRetry={vi.fn()}
      onClose={vi.fn()}
    />
  )

  it('nêu mã lỗi + câu giải thích, KHÔNG còn thanh chạy', () => {
    const { container } = render(withError)
    expect(screen.getByText('Không sinh được')).toBeInTheDocument()
    expect(screen.getByText(/Mã lỗi AI_RATE_LIMIT/)).toBeInTheDocument()
    expect(screen.getByText('Hết hạn mức của gói thuê bao.')).toBeInTheDocument()
    expect(container.querySelector('.ai-rail__sweep')).toBeNull()
  })

  it('giữ lại các bước ĐÃ QUA để biết dừng ở đâu', () => {
    render(withError)
    // 3 bước đầu vẫn hiện chi tiết đã đo được trước khi lỗi
    expect(screen.getByText('eKYC Verification Service')).toBeInTheDocument()
    expect(screen.getByText('2 khối · 78.7 KB')).toBeInTheDocument()
    expect(screen.getByText('96 ký tự bối cảnh')).toBeInTheDocument()
  })

  it('cho sửa lại yêu cầu thay vì bắt nhập lại từ đầu', () => {
    render(withError)
    expect(screen.getByRole('button', { name: 'Sửa lại yêu cầu' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: /Dừng lượt sinh/ })).not.toBeInTheDocument()
  })
})

describe('AiRunStage — dùng chung cho mọi luồng AI', () => {
  it('verb đổi nhãn hành động theo luồng (vẽ / chỉnh / hợp nhất)', () => {
    const { rerender } = render(
      <AiRunStage title="t" steps={STEPS} stats={{}} elapsedFrom={performance.now()}
        verb="vẽ" onCancel={vi.fn()} />,
    )
    expect(screen.getByRole('button', { name: /Dừng lượt vẽ/ })).toBeInTheDocument()

    rerender(
      <AiRunStage title="t" steps={STEPS} stats={{}} elapsedFrom={performance.now()}
        verb="hợp nhất" onCancel={vi.fn()} />,
    )
    expect(screen.getByRole('button', { name: /Dừng lượt hợp nhất/ })).toBeInTheDocument()
  })

  it('verb cũng đổi câu báo lỗi', () => {
    render(
      <AiRunStage title="t" steps={STEPS} stats={{}} elapsedFrom={performance.now()}
        verb="chỉnh" error={{ code: 'AI_TRUNCATED', message: 'Bị cắt.' }} />,
    )
    expect(screen.getByText('Không chỉnh được')).toBeInTheDocument()
  })
})
