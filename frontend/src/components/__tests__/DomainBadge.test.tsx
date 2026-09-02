import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { DomainBadge } from '../DomainBadge'

describe('DomainBadge', () => {
  it('hiện tên domain khi có, không thì hiện mã', () => {
    const { rerender } = render(<DomainBadge code="HR" name="Human Resources" />)
    expect(screen.getByText('Human Resources')).toBeTruthy()

    rerender(<DomainBadge code="HR" />)
    expect(screen.getByText('HR')).toBeTruthy()
  })

  it('không có domain thì hiện gạch ngang, không dựng chip rỗng', () => {
    const { container } = render(<DomainBadge code={null} />)
    expect(container.textContent).toBe('—')
  })

  it('nền chip là màu hợp lệ — không nối alpha vào sau var()', () => {
    // Lỗi cũ: background 'var(--app-warning)20' bị trình duyệt bỏ nên chip không có nền
    const { container } = render(<DomainBadge code="HR" />)
    const bg = (container.firstElementChild as HTMLElement).style.background
    expect(bg).not.toBe('')
    expect(bg).not.toMatch(/var\([^)]*\)\d/)
  })

  it('domain lạ vẫn có nền, dùng token trung tính', () => {
    const { container } = render(<DomainBadge code="KHONG_CO_TRONG_THANG" />)
    const el = container.firstElementChild as HTMLElement
    expect(el.style.background).toContain('--app-neutral-100')
    expect(el.style.background).not.toMatch(/var\([^)]*\)\d/)
  })
})
