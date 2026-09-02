import React, { useState } from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ViewToggle, type ViewMode } from '../ViewToggle'

/**
 * Test canh đúng LỖI ĐÃ SỬA: bốn bản copy của khối này render chuỗi rỗng, để lại hai nút
 * 20×8px trong suốt. Ràng buộc "phải có icon nhìn thấy được" nên được kiểm bằng test, vì
 * đây là kiểu lỗi mà tsc và mắt thường trên bản build đều không bắt.
 */
describe('ViewToggle', () => {
  it('mỗi nút có icon nhìn thấy được, KHÔNG rỗng', () => {
    const { container } = render(<ViewToggle value="list" onChange={vi.fn()} />)
    const btns = container.querySelectorAll('button')
    expect(btns.length).toBe(2)
    btns.forEach(b => {
      expect(b.querySelector('svg')).toBeTruthy()
      expect(b.getAttribute('aria-label')).toBeTruthy()
    })
  })

  it('có nhãn truy cập được, không chỉ tooltip', () => {
    render(<ViewToggle value="list" onChange={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Dạng thẻ' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Dạng bảng' })).toBeInTheDocument()
    expect(screen.getByRole('group', { name: 'Cách hiển thị danh sách' })).toBeInTheDocument()
  })

  it('aria-pressed nói đúng chế độ đang bật', () => {
    render(<ViewToggle value="grid" onChange={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Dạng thẻ' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'Dạng bảng' })).toHaveAttribute('aria-pressed', 'false')
  })

  it('bấm thì đổi chế độ', async () => {
    function Host() {
      const [m, setM] = useState<ViewMode>('list')
      return <><ViewToggle value={m} onChange={setM} /><span data-testid="mode">{m}</span></>
    }
    render(<Host />)
    expect(screen.getByTestId('mode')).toHaveTextContent('list')
    await userEvent.click(screen.getByRole('button', { name: 'Dạng thẻ' }))
    expect(screen.getByTestId('mode')).toHaveTextContent('grid')
  })
})
