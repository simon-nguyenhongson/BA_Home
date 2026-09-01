import React, { useState } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Building2, FileText, FlaskConical, Bot,
  BookOpen, Ticket, CheckSquare, Settings, LogOut, Search, Menu, SlidersHorizontal,
} from 'lucide-react'
import { useStore } from './stores/auth'
import { ToastContainer } from './components/ui'
import LoginPage from './pages/LoginPage'
import PPGPage from './pages/ppg/PPGPage'
import BAWorkflowPage from './pages/ba-workflow/BAWorkflowPage'
import TestWorkflowPage from './pages/test-workflow/TestWorkflowPage'
import DocsPage from './pages/docs/DocsPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import RequestsPage from './pages/requests/RequestsPage'
import TodoPage from './pages/todos/TodoPage'
import AutomationPage from './pages/automation/AutomationPage'
import SettingsPage from './pages/settings/SettingsPage'
import './styles.css'

const APPS = [
  { key: 'dashboard'     as const, icon: LayoutDashboard,   label: 'Dashboard',  sub: 'Tổng quan vòng đời',            path: '/dashboard' },
  { key: 'ppg'           as const, icon: Building2,         label: 'Project',    sub: 'Quản trị dự án',                path: '/ppg' },
  { key: 'ba-workflow'   as const, icon: FileText,          label: 'BA',         sub: 'Chọn CR · AI sinh tài liệu',    path: '/ba-workflow' },
  { key: 'test-workflow' as const, icon: FlaskConical,      label: 'Test',       sub: 'Chiến lược · Thực thi',         path: '/test-workflow' },
  { key: 'automation'    as const, icon: Bot,               label: 'Automation', sub: 'Capture Studio · Playwright',   path: '/automation' },
  { key: 'docs'          as const, icon: BookOpen,          label: 'Tài liệu',   sub: 'Dự án · Sản phẩm',              path: '/docs' },
  { key: 'requests'      as const, icon: Ticket,            label: 'Requests',   sub: 'Change Request · Service Request', path: '/requests' },
  { key: 'todos'         as const, icon: CheckSquare,       label: 'To-do',      sub: 'Công việc · Kanban',            path: '/todos' },
  { key: 'settings'      as const, icon: SlidersHorizontal, label: 'Cài đặt',    sub: 'AI · Kho skill · Danh mục',     path: '/settings' },
]

function Shell() {
  const { logout, username } = useStore()
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const currentApp = APPS.find(a => location.pathname.startsWith(a.path)) || APPS[0]

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
                <Route path="/ppg"           element={<PPGPage />} />
                <Route path="/ba-workflow"   element={<BAWorkflowPage />} />
                <Route path="/test-workflow" element={<TestWorkflowPage />} />
                <Route path="/automation"    element={<AutomationPage />} />
                <Route path="/settings"      element={<SettingsPage />} />
                <Route path="/docs"          element={<DocsPage />} />
                <Route path="/requests"      element={<RequestsPage />} />
                <Route path="/todos"         element={<TodoPage />} />
                {/* Danh mục đã chuyển vào Cài đặt — giữ chuyển hướng cho link cũ */}
                <Route path="/catalog"       element={<Navigate to="/settings?tab=products" replace />} />
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
