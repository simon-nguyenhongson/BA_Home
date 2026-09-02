import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

vi.mock('../../ppg/PPGPage', () => ({
  default: () => <div data-testid="project-pane">danh sách dự án</div>,
}))
vi.mock('../../catalog/CatalogPage', () => ({
  ProductsTab: ({ domains }: { domains: unknown[] }) => (
    <div data-testid="product-pane">danh mục sản phẩm · {domains.length} domain</div>
  ),
}))
vi.mock('../../../api/catalog', () => ({
  getCatalogDomains: vi.fn(() => Promise.resolve([{ code: 'HR' }, { code: 'RETAIL' }])),
}))

import WorkspacePage from '../WorkspacePage'

function renderAt(path = '/workspace') {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <WorkspacePage />
    </MemoryRouter>,
  )
}

beforeEach(() => vi.clearAllMocks())

describe('WorkspacePage', () => {
  it('có đúng hai tab Project và Product', () => {
    renderAt()
    const tabs = screen.getAllByRole('button')
    expect(tabs.map(t => t.textContent?.trim())).toEqual(['Project', 'Product'])
  })

  it('mặc định mở tab Project', () => {
    renderAt()
    expect(screen.getByTestId('project-pane')).toBeInTheDocument()
    expect(screen.queryByTestId('product-pane')).not.toBeInTheDocument()
  })

  it('?tab=product mở thẳng Danh mục sản phẩm — link chia sẻ được và F5 không mất chỗ', async () => {
    renderAt('/workspace?tab=product')
    expect(await screen.findByTestId('product-pane')).toBeInTheDocument()
    expect(screen.queryByTestId('project-pane')).not.toBeInTheDocument()
  })

  it('?tab= giá trị lạ thì về Project chứ không hiện trang trắng', () => {
    renderAt('/workspace?tab=khong-ton-tai')
    expect(screen.getByTestId('project-pane')).toBeInTheDocument()
  })

  it('bấm Product đổi pane và mô tả dưới tiêu đề', async () => {
    renderAt()
    expect(screen.getByText(/Dự án có thời hạn/)).toBeInTheDocument()

    await userEvent.click(screen.getByRole('button', { name: 'Product' }))
    expect(await screen.findByTestId('product-pane')).toBeInTheDocument()
    expect(screen.getByText(/Sản phẩm sống lâu dài/)).toBeInTheDocument()
  })

  it('truyền danh sách domain xuống Danh mục sản phẩm', async () => {
    renderAt('/workspace?tab=product')
    // Domain nạp bất đồng bộ — chờ đủ 2 domain mới khẳng định
    await waitFor(() =>
      expect(screen.getByTestId('product-pane')).toHaveTextContent('2 domain'))
  })
})
