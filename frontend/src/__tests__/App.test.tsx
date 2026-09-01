/**
 * Unit tests for App.tsx — APPS array structure, routing, authentication guard.
 */

import React from 'react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom'

// ---------------------------------------------------------------------------
// Mock child pages to avoid deep dependency chains
// ---------------------------------------------------------------------------

vi.mock('../pages/LoginPage', () => ({
  default: () => React.createElement('div', { 'data-testid': 'login-page' }, 'LoginPage'),
}))
vi.mock('../pages/dashboard/DashboardPage', () => ({
  default: () => React.createElement('div', { 'data-testid': 'dashboard-page' }, 'DashboardPage'),
}))
vi.mock('../pages/ppg/PPGPage', () => ({
  default: () => React.createElement('div', { 'data-testid': 'ppg-page' }, 'PPGPage'),
}))
vi.mock('../pages/ba-workflow/BAWorkflowPage', () => ({
  default: () => React.createElement('div', { 'data-testid': 'ba-workflow-page' }, 'BAWorkflowPage'),
}))
vi.mock('../pages/test-workflow/TestWorkflowPage', () => ({
  default: () => React.createElement('div', { 'data-testid': 'test-workflow-page' }, 'TestWorkflowPage'),
}))
vi.mock('../pages/docs/DocsPage', () => ({
  default: () => React.createElement('div', { 'data-testid': 'docs-page' }, 'DocsPage'),
}))

// Mock UI components
vi.mock('../components/ui', () => ({
  ToastContainer: () => null,
  Badge: ({ children }: { children: React.ReactNode }) => React.createElement('span', null, children),
  StatusBadge: ({ status }: { status: string }) => React.createElement('span', null, status),
  Btn: ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) =>
    React.createElement('button', { onClick }, children),
  KpiCard: ({ label, value }: { label: string; value: number }) =>
    React.createElement('div', null, `${label}: ${value}`),
  Modal: () => null,
  Field: ({ children }: { children: React.ReactNode }) => React.createElement('div', null, children),
  AppInput: (props: React.InputHTMLAttributes<HTMLInputElement>) => React.createElement('input', props),
  AppSelect: ({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { children: React.ReactNode }) =>
    React.createElement('select', props, children),
  AppTextarea: (props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => React.createElement('textarea', props),
  EmptyState: ({ title }: { title: string }) => React.createElement('div', null, title),
  Confirm: () => null,
}))

// Mock the auth store — authenticated user by default
const mockLogout = vi.fn()
vi.mock('../stores/auth', () => ({
  useStore: () => ({
    username: 'testuser',
    isAuthenticated: true,
    logout: mockLogout,
    projects: [],
    setProjects: vi.fn(),
    selectedProject: null,
    setSelectedProject: vi.fn(),
    addToast: vi.fn(),
  }),
}))

// Import the component under test AFTER all mocks are set up
import App from '../App'

// ---------------------------------------------------------------------------
// APPS constant — mirrored from App.tsx for pure unit testing
// ---------------------------------------------------------------------------

const APPS = [
  { key: 'dashboard'     as const, label: 'Dashboard',   path: '/dashboard' },
  { key: 'ppg'           as const, label: 'Project',     path: '/ppg' },
  { key: 'ba-workflow'   as const, label: 'BA',          path: '/ba-workflow' },
  { key: 'test-workflow' as const, label: 'Test',        path: '/test-workflow' },
  { key: 'automation'    as const, label: 'Automation',  path: '/automation' },
  { key: 'docs'          as const, label: 'Tài liệu',    path: '/docs' },
  { key: 'requests'      as const, label: 'Requests',    path: '/requests' },
  { key: 'todos'         as const, label: 'To-do',       path: '/todos' },
  { key: 'settings'      as const, label: 'Cài đặt',     path: '/settings' },
]

// ---------------------------------------------------------------------------
// APPS array structure tests
// ---------------------------------------------------------------------------

describe('App — APPS array structure', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('has exactly 9 items — Danh mục đã chuyển vào Cài đặt', () => {
    expect(APPS.length).toBe(9)
  })

  it('first item is "Dashboard" with path /dashboard', () => {
    expect(APPS[0].label).toBe('Dashboard')
    expect(APPS[0].path).toBe('/dashboard')
    expect(APPS[0].key).toBe('dashboard')
  })

  it('second item (index 1) is "Project" (đổi tên từ PPG System)', () => {
    expect(APPS[1].label).toBe('Project')
    expect(APPS[1].key).toBe('ppg')
    expect(APPS[1].path).toBe('/ppg')
  })

  it('third item (index 2) is "BA"', () => {
    expect(APPS[2].label).toBe('BA')
    expect(APPS[2].key).toBe('ba-workflow')
  })

  it('fourth item (index 3) is "Test"', () => {
    expect(APPS[3].label).toBe('Test')
    expect(APPS[3].key).toBe('test-workflow')
  })

  it('has "Tài liệu" → /docs', () => {
    const docs = APPS.find(a => a.key === 'docs')
    expect(docs?.label).toBe('Tài liệu')
    expect(docs?.path).toBe('/docs')
  })

  it('all items have required fields: key, label, path', () => {
    APPS.forEach(app => {
      expect(app.key).toBeTruthy()
      // icon giờ là component lucide, không phải string — kiểm tra các field text
      expect(app.label).toBeTruthy()
      expect(app.path).toMatch(/^\//)
    })
  })

  it('all paths start with forward slash', () => {
    APPS.forEach(app => {
      expect(app.path.startsWith('/')).toBe(true)
    })
  })

  it('all keys are unique', () => {
    const keys = APPS.map(a => a.key)
    const uniqueKeys = new Set(keys)
    expect(uniqueKeys.size).toBe(APPS.length)
  })

  it('all paths are unique', () => {
    const paths = APPS.map(a => a.path)
    const uniquePaths = new Set(paths)
    expect(uniquePaths.size).toBe(APPS.length)
  })
})

// ---------------------------------------------------------------------------
// Routing tests — using MemoryRouter to avoid BrowserRouter context issues
// ---------------------------------------------------------------------------

describe('App — routing (authenticated)', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders PPGPage at /ppg', () => {
    render(
      React.createElement(MemoryRouter, { initialEntries: ['/ppg'] },
        React.createElement(App)
      )
    )
    expect(screen.getByTestId('ppg-page')).toBeInTheDocument()
  })

  it('renders DocsPage at /docs', () => {
    render(
      React.createElement(MemoryRouter, { initialEntries: ['/docs'] },
        React.createElement(App)
      )
    )
    expect(screen.getByTestId('docs-page')).toBeInTheDocument()
  })

  it('renders BAWorkflowPage at /ba-workflow', () => {
    render(
      React.createElement(MemoryRouter, { initialEntries: ['/ba-workflow'] },
        React.createElement(App)
      )
    )
    expect(screen.getByTestId('ba-workflow-page')).toBeInTheDocument()
  })

  it('renders TestWorkflowPage at /test-workflow', () => {
    render(
      React.createElement(MemoryRouter, { initialEntries: ['/test-workflow'] },
        React.createElement(App)
      )
    )
    expect(screen.getByTestId('test-workflow-page')).toBeInTheDocument()
  })

  it('redirects from unknown path to /dashboard (default redirect)', () => {
    render(
      React.createElement(MemoryRouter, { initialEntries: ['/unknown-route'] },
        React.createElement(App)
      )
    )
    expect(screen.getByTestId('dashboard-page')).toBeInTheDocument()
  })

  it('shows login page at /login path', () => {
    render(
      React.createElement(MemoryRouter, { initialEntries: ['/login'] },
        React.createElement(App)
      )
    )
    expect(screen.getByTestId('login-page')).toBeInTheDocument()
  })
})

// ---------------------------------------------------------------------------
// Sidebar structure test — sidebar là thanh điều hướng duy nhất
// ---------------------------------------------------------------------------

describe('App — Shell sidebar', () => {
  it('renders sidebar with BA_HOME brand', () => {
    render(
      React.createElement(MemoryRouter, { initialEntries: ['/ppg'] },
        React.createElement(App)
      )
    )
    expect(screen.getByText('BA_HOME')).toBeInTheDocument()
  })

  it('renders app labels in the sidebar navigation', () => {
    render(
      React.createElement(MemoryRouter, { initialEntries: ['/ppg'] },
        React.createElement(App)
      )
    )
    // Menu trên đã bỏ — nhãn app chỉ còn ở sidebar
    expect(screen.getAllByText('Project').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('BA').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Test').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Tài liệu').length).toBeGreaterThanOrEqual(1)
  })
})
