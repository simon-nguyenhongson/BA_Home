import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Globe } from 'lucide-react'
import React from 'react'
import { SegmentGroup } from '../SegmentGroup'

const ITEMS = [
  { key: 'all' as const, label: 'Tất cả' },
  { key: 'web' as const, label: 'Web App', icon: Globe },
]

describe('SegmentGroup', () => {
  it('dùng class ds-seg của hệ, không tự dựng vỏ pill riêng', () => {
    const { container } = render(
      <SegmentGroup value="all" onChange={vi.fn()} items={ITEMS} ariaLabel="Lọc theo loại" />,
    )
    expect(container.querySelector('.ds-seg')).toBeTruthy()
    expect(container.querySelectorAll('.ds-seg__item')).toHaveLength(2)
  })

  it('mục đang chọn có aria-pressed và class active', () => {
    render(<SegmentGroup value="web" onChange={vi.fn()} items={ITEMS} ariaLabel="Lọc theo loại" />)

    const on = screen.getByRole('button', { name: 'Web App' })
    expect(on).toHaveAttribute('aria-pressed', 'true')
    expect(on.className).toContain('active')
    expect(screen.getByRole('button', { name: 'Tất cả' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('bấm mục khác gọi onChange với key của mục đó', async () => {
    const onChange = vi.fn()
    render(<SegmentGroup value="all" onChange={onChange} items={ITEMS} ariaLabel="Lọc theo loại" />)

    await userEvent.click(screen.getByRole('button', { name: 'Web App' }))
    expect(onChange).toHaveBeenCalledWith('web')
  })

  it('nhóm có nhãn truy cập được', () => {
    render(<SegmentGroup value="all" onChange={vi.fn()} items={ITEMS} ariaLabel="Lọc theo loại" />)
    expect(screen.getByRole('group', { name: 'Lọc theo loại' })).toBeTruthy()
  })
})
