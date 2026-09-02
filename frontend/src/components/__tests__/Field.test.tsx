import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Field, AppInput, AppTextarea, AppSelect } from '../ui'

/**
 * Canh đúng DS-ADOPTION-SPEC mục Input/LABEL:
 *   - Dấu * bắt buộc màu #F04438
 *   - error: viền #FDA29B + dòng lỗi 12/18 #F04438 dưới field
 *
 * LỖI ĐÃ SỬA: `.app-input.has-error` có trong CSS nhưng 0 chỗ dùng — Field in dòng chữ đỏ
 * mà không truyền trạng thái lỗi xuống ô nhập, nên viền đỏ chưa bao giờ xuất hiện.
 */

describe('Field — dấu bắt buộc', () => {
  it('có dấu * khi required, không có khi không required', () => {
    const { container, rerender } = render(
      <Field label="Tiêu đề" required><AppInput /></Field>,
    )
    const req = container.querySelector('.app-label .req')
    expect(req).toBeTruthy()
    expect(req!.textContent).toContain('*')

    rerender(<Field label="Ghi chú"><AppInput /></Field>)
    expect(container.querySelector('.app-label .req')).toBeNull()
  })

  it('dấu * kèm chữ "(bắt buộc)" cho trình đọc màn hình', () => {
    // Dấu * đơn lẻ không nói được gì với người dùng bàn phím / đọc màn hình
    render(<Field label="Tiêu đề" required><AppInput /></Field>)
    expect(screen.getByText('(bắt buộc)')).toBeInTheDocument()
  })
})

describe('Field — trạng thái lỗi truyền xuống ô nhập', () => {
  it('AppInput nhận has-error + aria-invalid khi Field có error', () => {
    const { container } = render(
      <Field label="Tiêu đề" required error="Nhập tiêu đề task"><AppInput /></Field>,
    )
    const input = container.querySelector('input')!
    expect(input.className).toContain('has-error')
    expect(input.getAttribute('aria-invalid')).toBe('true')
  })

  it('không có error thì KHÔNG gắn has-error', () => {
    const { container } = render(<Field label="Tiêu đề" required><AppInput /></Field>)
    const input = container.querySelector('input')!
    expect(input.className).not.toContain('has-error')
    expect(input.getAttribute('aria-invalid')).toBeNull()
  })

  it('áp cho cả textarea và select', () => {
    const { container: c1 } = render(
      <Field label="Mô tả" error="thiếu"><AppTextarea /></Field>)
    expect(c1.querySelector('textarea')!.className).toContain('has-error')

    const { container: c2 } = render(
      <Field label="Loại" error="thiếu"><AppSelect><option>a</option></AppSelect></Field>)
    expect(c2.querySelector('select')!.className).toContain('has-error')
  })

  it('dòng lỗi có role=alert và được nối bằng aria-describedby', () => {
    const { container } = render(
      <Field label="Tiêu đề" error="Nhập tiêu đề task"><AppInput /></Field>)
    const err = container.querySelector('.app-error')!
    expect(err.getAttribute('role')).toBe('alert')
    expect(err.textContent).toBe('Nhập tiêu đề task')
    expect(container.querySelector('input')!.getAttribute('aria-describedby')).toBe(err.id)
  })

  it('hint hiện khi không lỗi, bị error thay thế khi có lỗi', () => {
    const { container, rerender } = render(
      <Field label="Due date" hint="Không bắt buộc"><AppInput /></Field>)
    expect(container.querySelector('.app-hint')!.textContent).toBe('Không bắt buộc')

    rerender(<Field label="Due date" hint="Không bắt buộc" error="Ngày sai"><AppInput /></Field>)
    expect(container.querySelector('.app-hint')).toBeNull()
    expect(container.querySelector('.app-error')!.textContent).toBe('Ngày sai')
  })
})

describe('AppInput — invalid dùng trực tiếp', () => {
  it('prop invalid tự gắn class và aria', () => {
    const { container } = render(<AppInput invalid />)
    const el = container.querySelector('input')!
    expect(el.className).toContain('has-error')
    expect(el.getAttribute('aria-invalid')).toBe('true')
  })

  it('không đẩy prop invalid ra DOM', () => {
    // React sẽ cảnh báo unknown prop nếu `invalid` lọt xuống thẻ input
    const { container } = render(<AppInput invalid />)
    expect(container.querySelector('input')!.getAttribute('invalid')).toBeNull()
  })
})
