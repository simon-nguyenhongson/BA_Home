import React, { useState } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Building2, FileText, FlaskConical,
  BookOpen, Ticket, CheckSquare, Settings, LogOut, Search, Menu, SlidersHorizontal,
} from 'lucide-react'
import { useStore } from './stores/auth'
import { ToastContainer } from './components/ui'
import LoginPage from './pages/LoginPage'
import WorkspacePage from './pages/workspace/WorkspacePage'
import ProjectDetailPage from './pages/ppg/ProjectDetailPage'
import BAWorkflowPage from './pages/ba-workflow/BAWorkflowPage'
import DocsPage from './pages/docs/DocsPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import RequestsPage from './pages/requests/RequestsPage'
import TodoPage from './pages/todos/TodoPage'
import TestHubPage from './pages/test-hub/TestHubPage'
import SettingsPage from './pages/settings/SettingsPage'
import './styles.css'

/**
 * Thứ tự các mục trên sidebar. EXPORT để test khẳng định trên nguồn thật.
 *
 * Trước đây App.test.tsx giữ một BẢN COPY của mảng này, nên khi đổi menu (PPG → Workspace)
 * test vẫn xanh trong khi khẳng định đã sai — đúng loại "test lạc hậu tạo an toàn giả".
 */
export const APPS = [
  { key: 'dashboard'     as const, icon: LayoutDashboard,   label: 'Dashboard',  sub: 'Tổng quan vòng đời',            path: '/dashboard' },
  { key: 'todos'         as const, icon: CheckSquare,       label: 'To-do',      sub: 'Công việc · Kanban',            path: '/todos' },
  { key: 'workspace'     as const, icon: Building2,         label: 'Workspace',  sub: 'Project · Product',             path: '/workspace' },
  { key: 'ba-workflow'   as const, icon: FileText,          label: 'BA',         sub: 'Chọn CR · AI sinh tài liệu',    path: '/ba-workflow' },
  { key: 'test'          as const, icon: FlaskConical,      label: 'Test',       sub: 'Test case theo CR · Capture Studio', path: '/test' },
  { key: 'docs'          as const, icon: BookOpen,          label: 'Tài liệu',   sub: 'Dự án · Sản phẩm',              path: '/docs' },
  { key: 'requests'      as const, icon: Ticket,            label: 'Requests',   sub: 'Change Request · Service Request', path: '/requests' },
  { key: 'settings'      as const, icon: SlidersHorizontal, label: 'Cài đặt',    sub: 'AI · Skill · Danh mục',     path: '/settings' },
]

function Shell() {
  const { logout, username } = useStore()
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  // /projects/:id là trang con của Workspace (quản trị mở rộng dự án) — không có mục
  // sidebar riêng, nên phải quy về Workspace để breadcrumb và mục đang chọn không nhảy
  // về Dashboard.
  const path = location.pathname.startsWith('/projects') ? '/workspace' : location.pathname
  const currentApp = APPS.find(a => path.startsWith(a.path)) || APPS[0]

  return (
    <div className="shell">
      {/* Sidebar — thanh điều hướng duy nhất của hệ thống */}
      <nav className={`sidebar ${sidebarExpanded ? 'expanded' : ''}`}>
        <div className="sidebar__header">
          <button className="sidebar__toggle" onClick={() => setSidebarExpanded(e => !e)} aria-label="Toggle navigation">
            <Menu size={16} strokeWidth={1.5} />
          </button>
          <span className="sidebar__brand">BA_HOME</span>
        </div>
        <div className="sidebar-nav">
          {APPS.map(app => (
            <div key={app.key}
              className={`sidebar-item${currentApp.key === app.key ? ' active' : ''}`}
              onClick={() => navigate(app.path)}>
              <div className="sidebar-item__icon"><app.icon size={16} strokeWidth={1.5} /></div>
              <span className="sidebar-item__label">{app.label}</span>
            </div>
          ))}
          <div className="sidebar-divider" />
          <div className="sidebar-item" onClick={() => window.open('http://localhost:8001/docs', '_blank')}>
            <div className="sidebar-item__icon"><Settings size={16} strokeWidth={1.5} /></div>
            <span className="sidebar-item__label">API — Project</span>
          </div>
          <div className="sidebar-item" onClick={() => window.open('http://localhost:8002/docs', '_blank')}>
            <div className="sidebar-item__icon"><Settings size={16} strokeWidth={1.5} /></div>
            <span className="sidebar-item__label">API — BA</span>
          </div>
          <div className="sidebar-item" onClick={() => window.open('http://localhost:8003/docs', '_blank')}>
            <div className="sidebar-item__icon"><Settings size={16} strokeWidth={1.5} /></div>
            <span className="sidebar-item__label">API — Test</span>
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="sidebar-item" onClick={logout}>
            <div className="sidebar-item__icon"><LogOut size={16} strokeWidth={1.5} /></div>
            <span className="sidebar-item__label">Đăng xuất</span>
          </div>
        </div>
      </nav>

      {/* Right Panel */}
      <div className="right-panel">
        {/* Topbar — chỉ tìm kiếm và người dùng; điều hướng nằm hết ở sidebar */}
        <header className="topbar">
          <div className="topbar__search-wrap">
            <span className="topbar__search-icon"><Search size={14} strokeWidth={1.5} /></span>
            <input className="topbar__search" type="text" placeholder="Tìm kiếm" />
          </div>
          <div className="topbar__spacer" />
          <div className="topbar__actions">
            <div className="topbar__avatar">{(username || 'U').slice(0, 2).toUpperCase()}</div>
            <span className="topbar__user-name">{username || 'User'}</span>
          </div>
        </header>

        {/* Body */}
        <div className="body-area">
          <div className="main-wrap">
            <div className="breadcrumb-bar">
              <span>BA_Home</span>
              <span className="sep">›</span>
              <span>{currentApp.label}</span>
              <span className="sep">›</span>
              <span className="active">{currentApp.sub}</span>
            </div>
            <main className="main-content">
              <Routes>
                <Route path="/dashboard"     element={<DashboardPage />} />
                <Route path="/workspace"     element={<WorkspacePage />} />
                {/* Quản trị mở rộng của một dự án: brief, stage gate, health score,
                    stakeholder, WSJF, licence, hợp đồng + điều khoản + thanh toán,
                    handover, integration link, app/job standard.
                    Trang này đã tồn tại đầy đủ (2.3k dòng, 65 hàm API) nhưng KHÔNG route
                    nào trỏ tới — 17 nhóm tính năng có backend sống mà không ai vào được.
                    Vào từ nút [Quản trị mở rộng] trong chi tiết dự án. */}
                <Route path="/projects/:id"  element={<ProjectDetailPage />} />
                <Route path="/ba-workflow"   element={<BAWorkflowPage />} />
                <Route path="/test"          element={<TestHubPage />} />
                <Route path="/settings"      element={<SettingsPage />} />
                <Route path="/docs"          element={<DocsPage />} />
                <Route path="/requests"      element={<RequestsPage />} />
                <Route path="/todos"         element={<TodoPage />} />
                {/* Danh mục đã chuyển vào Cài đặt; Test và Automation đã gộp thành /test.
                    Giữ chuyển hướng cho link cũ và bookmark. */}
                <Route path="/ppg"           element={<Navigate to="/workspace" replace />} />
                <Route path="/catalog"       element={<Navigate to="/workspace?tab=product" replace />} />
                <Route path="/automation"    element={<Navigate to="/test" replace />} />
                <Route path="/test-workflow" element={<Navigate to="/test" replace />} />
                <Route path="*"              element={<Navigate to="/dashboard" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  )
}

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useStore()
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return <>{children}</>
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/*" element={
        <RequireAuth>
          <Shell />
        </RequireAuth>
      } />
    </Routes>
  )
}
