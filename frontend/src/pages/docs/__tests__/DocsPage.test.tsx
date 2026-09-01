/**
 * Unit tests cho DocsPage — cây Domain → (Dự án | Sản phẩm) → nội dung tài liệu.
 *
 * Viết lại 2026-09-01: bộ test cũ kiểm tra 3 tab "Tài liệu dự án / BA / Test" đã bị gỡ
 * từ lâu (10/15 test fail vì mô tả giao diện không còn tồn tại). Nay kiểm đúng cấu trúc
 * hiện tại, gồm nhánh Sản phẩm mới thêm theo yêu cầu PO.
 */

import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'

const DOMAINS = [
  { code: 'FS', name: 'Financial Services' },
  { code: 'IT', name: 'Information Technology' },
]
const PROJECTS = [
  { id: 'p1', code: 'PRJ-01', name: 'OMS', status: 'active', domain_code: 'FS',
    start_date: '2026-01-01', end_date: '2026-06-30' },
]
const PRODUCTS = [
  { id: 'pr1', product_code: 'PRD-01', product_name: 'Internet Banking',
    product_type: 'web_app', status: 'active', domain_code: 'FS', tags: [] },
]

vi.mock('../../../api/ppg', () => ({
  getProjectDomains: vi.fn(() => Promise.resolve(DOMAINS)),
  getProjects:       vi.fn(() => Promise.resolve(PROJECTS)),
  getDocsTree:       vi.fn(() => Promise.resolve({
    project_id: 'p1', project_code: 'PRJ-01', domain_code: 'FS', tracks: [],
  })),
  downloadTemplate:  vi.fn(),
  uploadDocFile:     vi.fn(),
  getFolderFiles:    vi.fn(() => Promise.resolve([])),
  downloadDocFile:   vi.fn(),
}))

vi.mock('../../../api/catalog', () => ({
  getProducts: vi.fn(() => Promise.resolve(PRODUCTS)),
}))

// ProductDocsView gọi tiếp nhiều API (Master Doc, CR, sơ đồ) — thay bằng bản giả
// để test này chỉ kiểm điều hướng, không kiểm nội dung tài liệu sản phẩm.
vi.mock('../ProductDocsView', () => ({
  ProductDocsView: ({ product }: { product: { product_name: string } }) =>
    React.createElement('div', { 'data-testid': 'product-docs' }, product.product_name),
}))

vi.mock('../../../stores/auth', () => ({
  useStore: () => ({ addToast: vi.fn() }),
}))

import DocsPage from '../DocsPage'

describe('DocsPage — điều hướng Domain → Dự án | Sản phẩm', () => {
  beforeEach(() => { vi.clearAllMocks() })

  it('hiện danh sách domain lấy từ API', async () => {
    render(React.createElement(DocsPage))
    expect(await screen.findByText('Financial Services')).toBeInTheDocument()
    expect(screen.getByText('Information Technology')).toBeInTheDocument()
  })

  it('mặc định chọn nhánh Dự án và nhắc chọn domain', () => {
    render(React.createElement(DocsPage))
    expect(screen.getByText(/Chọn Domain để xem dự án/)).toBeInTheDocument()
  })

  it('có hai nút chuyển nhánh Dự án và Sản phẩm', async () => {
    render(React.createElement(DocsPage))
    expect(await screen.findByText('Dự án')).toBeInTheDocument()
    expect(screen.getByText('Sản phẩm')).toBeInTheDocument()
  })

  it('chọn domain thì nạp cả dự án và sản phẩm của domain đó', async () => {
    render(React.createElement(DocsPage))
    fireEvent.click(await screen.findByText('Financial Services'))
    expect(await screen.findByText('PRJ-01')).toBeInTheDocument()
  })

  it('chuyển sang nhánh Sản phẩm thì hiện sản phẩm của domain', async () => {
    render(React.createElement(DocsPage))
    fireEvent.click(await screen.findByText('Financial Services'))
    await screen.findByText('PRJ-01')
    fireEvent.click(screen.getByText('Sản phẩm'))
    expect(await screen.findByText('PRD-01')).toBeInTheDocument()
  })

  it('chọn một sản phẩm thì hiện khung tài liệu sản phẩm', async () => {
    render(React.createElement(DocsPage))
    fireEvent.click(await screen.findByText('Financial Services'))
    await screen.findByText('PRJ-01')
    fireEvent.click(screen.getByText('Sản phẩm'))
    fireEvent.click(await screen.findByText('PRD-01'))
    await waitFor(() => {
      expect(screen.getByTestId('product-docs')).toHaveTextContent('Internet Banking')
    })
  })

  it('giải thích rõ tài liệu dự án là file, tài liệu sản phẩm nằm trong hệ', () => {
    render(React.createElement(DocsPage))
    expect(screen.getByText(/nằm trong hệ: Master Doc, BRS theo từng CR/)).toBeInTheDocument()
  })
})
