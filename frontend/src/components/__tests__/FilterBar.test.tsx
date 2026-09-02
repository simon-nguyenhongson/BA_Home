import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { FilterBar, applyDateFilter, applyTextFilter } from '../FilterBar'

const STATUS = {
  key: 'status',
  placeholder: 'Tất cả trạng thái',
  label: 'Trạng thái',
  options: [{ value: 'active', label: 'Active' }],
}

describe('FilterBar', () => {
  it('ô tìm kiếm nằm trong dải lọc và bắn onChange', async () => {
    const onChange = vi.fn()
    render(<FilterBar text={{ value: '', onChange, placeholder: 'Tìm tên' }} />)

    const bar = screen.getByRole('group', { name: 'Bộ lọc danh sách' })
    expect(bar).toContainElement(screen.getByPlaceholderText('Tìm tên'))

    await userEvent.type(screen.getByPlaceholderText('Tìm tên'), 'a')
    expect(onChange).toHaveBeenCalledWith('a')
  })

  it('không có bộ lọc nào thì không hiện nút Lọc', () => {
    render(<FilterBar text={{ value: '', onChange: vi.fn() }} />)
    expect(screen.queryByRole('button', { name: /Lọc/ })).toBeNull()
  })

  it('bộ lọc nằm sau nút phễu, mở ra mới thấy field', async () => {
    render(<FilterBar selects={[{ ...STATUS, value: '', onChange: vi.fn() }]} />)

    expect(screen.queryByLabelText('Trạng thái')).toBeNull()
    await userEvent.click(screen.getByRole('button', { name: /Lọc/ }))

    expect(screen.getByRole('dialog', { name: 'Bộ lọc' })).toBeTruthy()
    // Nhãn là TÊN TRƯỜNG, còn 'Tất cả trạng thái' chỉ là một lựa chọn bên trong
    expect(screen.getByLabelText('Trạng thái')).toBeTruthy()
  })

  it('đếm số bộ lọc đang bật lên badge, không đếm từ khoá tìm kiếm', () => {
    render(
      <FilterBar
        text={{ value: 'abc', onChange: vi.fn() }}
        selects={[{ ...STATUS, value: 'active', onChange: vi.fn() }]}
        dateFrom={{ value: '2026-01-01', onChange: vi.fn() }}
        dateTo={{ value: '', onChange: vi.fn() }}
      />,
    )
    expect(screen.getByLabelText('2 bộ lọc đang bật').textContent).toBe('2')
  })

  it('Escape đóng popover', async () => {
    render(<FilterBar selects={[{ ...STATUS, value: '', onChange: vi.fn() }]} />)
    await userEvent.click(screen.getByRole('button', { name: /Lọc/ }))
    await userEvent.keyboard('{Escape}')
    expect(screen.queryByRole('dialog')).toBeNull()
  })

  it('Xoá lọc chỉ bấm được khi đang có lọc', async () => {
    const onClear = vi.fn()
    const { rerender } = render(
      <FilterBar selects={[{ ...STATUS, value: '', onChange: vi.fn() }]} onClear={onClear} />,
    )
    await userEvent.click(screen.getByRole('button', { name: /Lọc/ }))
    expect(screen.getByRole('button', { name: 'Xoá lọc' })).toBeDisabled()

    rerender(
      <FilterBar selects={[{ ...STATUS, value: 'active', onChange: vi.fn() }]} onClear={onClear} />,
    )
    await userEvent.click(screen.getByRole('button', { name: 'Xoá lọc' }))
    expect(onClear).toHaveBeenCalledTimes(1)
  })
})

describe('applyTextFilter / applyDateFilter', () => {
  const rows = [
    { name: 'eKYC', created_at: '2026-03-01T00:00:00Z' },
    { name: 'Core', created_at: null as string | null },
  ]

  it('tìm không phân biệt chữ hoa', () => {
    expect(applyTextFilter(rows, 'EKYC', ['name'])).toHaveLength(1)
  })

  it('dòng không có ngày thì không bị khoảng ngày loại bỏ', () => {
    const kept = applyDateFilter(rows, 'created_at', '2026-01-01', '2026-12-31')
    expect(kept.map(r => r.name)).toEqual(['eKYC', 'Core'])
  })

  it('lọc đúng biên ngày', () => {
    expect(applyDateFilter(rows, 'created_at', '2026-04-01', '')).toHaveLength(1)
  })
})
