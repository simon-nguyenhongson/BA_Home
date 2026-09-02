import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Markdown, slugify, extractHeadings } from '../Markdown'

describe('slugify — khớp neo mục lục kiểu GitHub', () => {
  it('giữ chữ có dấu, bỏ dấu câu, khoảng trắng thành gạch', () => {
    expect(slugify('1. TỔNG QUAN')).toBe('1-tổng-quan')
    expect(slugify('2. Menu & Chức năng')).toBe('2-menu-chức-năng')
    expect(slugify('Câu hỏi chưa giải đáp?')).toBe('câu-hỏi-chưa-giải-đáp')
  })
})

describe('extractHeadings', () => {
  it('bỏ qua dòng trong code fence — `# comment` không phải heading', () => {
    const md = '# Thật\n\n```bash\n# đây là comment shell\n```\n\n## Cũng thật'
    expect(extractHeadings(md).map(h => h.text)).toEqual(['Thật', 'Cũng thật'])
  })
})

describe('Markdown — khối', () => {
  it('bảng GFM ra <table> thật, không phải ASCII pipe', () => {
    const { container } = render(<Markdown source={'| A | B |\n|---|---|\n| 1 | 2 |'} />)
    expect(container.querySelector('table')).toBeTruthy()
    expect(container.querySelectorAll('th')).toHaveLength(2)
    expect(container.querySelectorAll('td')).toHaveLength(2)
    expect(container.textContent).not.toContain('|---|')
  })

  it('ô thiếu so với header vẫn ra ô trống — bảng AI sinh hay lệch cột', () => {
    const { container } = render(<Markdown source={'| A | B | C |\n|---|---|---|\n| 1 |'} />)
    expect(container.querySelectorAll('tbody td')).toHaveLength(3)
  })

  it('heading có id để mục lục nhảy tới', () => {
    const { container } = render(<Markdown source={'## 1. Tổng quan'} />)
    // Selector CSS không được bắt đầu bằng chữ số → tra bằng attribute
    expect(container.querySelector('[id="1-tổng-quan"]')).toBeTruthy()
  })

  it('heading trùng tên ra id khác nhau', () => {
    const { container } = render(<Markdown source={'## Ghi chú\n\n## Ghi chú'} />)
    expect(container.querySelector('#ghi-chú')).toBeTruthy()
    expect(container.querySelector('#ghi-chú-1')).toBeTruthy()
  })

  it('danh sách lồng nhau giữ quan hệ cha–con VÀ có dấu đầu dòng', () => {
    const { container } = render(<Markdown source={'- Cha\n  - Con\n- Cha 2'} />)
    const outer = container.querySelector('ul')!
    expect(outer.querySelector('ul')).toBeTruthy()
    // Tailwind preflight đặt list-style:none — phải khai báo lại, kẻo mất dấu đầu dòng
    expect(outer.getAttribute('style')).toContain('list-style-type: disc')
  })

  it('code fence giữ nguyên nội dung, không parse markdown bên trong', () => {
    const { container } = render(<Markdown source={'```json\n{"a": **1**}\n```'} />)
    expect(container.querySelector('pre code')?.textContent).toBe('{"a": **1**}')
    expect(container.querySelector('strong')).toBeNull()
  })

  it('blockquote và đường kẻ', () => {
    const { container } = render(<Markdown source={'> Ràng buộc pháp lý\n\n---'} />)
    expect(container.querySelector('blockquote')).toBeTruthy()
    expect(container.querySelector('hr')).toBeTruthy()
  })
})

describe('Markdown — inline', () => {
  it('đậm, nghiêng, mã', () => {
    const { container } = render(<Markdown source={'Có **đậm**, *nghiêng* và `mã`.'} />)
    expect(container.querySelector('strong')?.textContent).toBe('đậm')
    expect(container.querySelector('em')?.textContent).toBe('nghiêng')
    expect(container.querySelector('code')?.textContent).toBe('mã')
  })

  it('link http mở tab mới có noopener', () => {
    const { container } = render(<Markdown source={'[API](https://example.local/x)'} />)
    const a = container.querySelector('a')!
    expect(a.getAttribute('href')).toBe('https://example.local/x')
    expect(a.getAttribute('rel')).toContain('noopener')
  })
})

describe('Markdown — an toàn với nội dung do AI sinh', () => {
  it('HTML nhúng hiện thành CHỮ, không thành thẻ', () => {
    const { container } = render(
      <Markdown source={'Trước <script>alert(1)</script> và <img src=x onerror=alert(1)> sau'} />,
    )
    expect(container.querySelector('script')).toBeNull()
    expect(container.querySelector('img')).toBeNull()
    expect(container.textContent).toContain('<script>alert(1)</script>')
  })

  it('link javascript: và data: KHÔNG bấm được — hiện nguyên văn', () => {
    const { container } = render(
      <Markdown source={'[bấm](javascript:alert(1)) và [tải](data:text/html,<script>1</script>)'} />,
    )
    expect(container.querySelectorAll('a')).toHaveLength(0)
    expect(container.textContent).toContain('javascript:alert(1)')
  })

  // Ghi chú: không quét mã nguồn tìm dangerouslySetInnerHTML nữa — hai test hành vi trên
  // đã là chốt hồi quy đúng nghĩa. Ai thêm dangerouslySetInnerHTML vào renderer thì
  // <script> sẽ thành thẻ thật và test "HTML nhúng hiện thành CHỮ" đỏ ngay.
})

describe('Markdown — tài liệu thật', () => {
  it('render được Master Doc có đủ heading/bảng/list/code mà không vỡ', () => {
    const md = [
      '# HỆ THỐNG eKYC', '', '## MỤC LỤC', '1. [Tổng quan](#1-tổng-quan)', '', '---', '',
      '## 1. Tổng quan', 'Dùng **OCR** và `token`.', '', '> Lưu 90 ngày theo PDPL.', '',
      '### 1.1 Thành phần', '- Cổng ảnh', '  - ≤ 5 MB', '- Bộ OCR', '',
      '| Bước | Kết quả |', '|------|---------|', '| 1 | Ảnh |', '',
      '```json', '{"code": "OK"}', '```',
    ].join('\n')
    render(<Markdown source={md} />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('HỆ THỐNG eKYC')
    expect(screen.getAllByRole('heading', { level: 2 }).length).toBe(2)
    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('OCR').tagName).toBe('STRONG')
  })
})
