import React, { useState } from 'react'
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, CalendarRange, Building2, FileText, FlaskConical, Bot,
  BookOpen, Layers, Ticket, CheckSquare, Settings, LogOut, Search, Menu, SlidersHorizontal,
} from 'lucide-react'
import { useStore } from './stores/auth'
import { ToastContainer } from './components/ui'
import LoginPage from './pages/LoginPage'
import PPGPage from './pages/ppg/PPGPage'
import BAPage from './pages/ba/BAPage'
import AnnualPlansPage from './pages/annual-plans/AnnualPlansPage'
import ProjectObjectsPage from './pages/projects/ProjectObjectsPage'
import BAWorkflowPage from './pages/ba-workflow/BAWorkflowPage'
import TestWorkflowPage from './pages/test-workflow/TestWorkflowPage'
import DocsPage from './pages/docs/DocsPage'
import CatalogPage from './pages/catalog/CatalogPage'
import DashboardPage from './pages/dashboard/DashboardPage'
import RequestsPage from './pages/requests/RequestsPage'
import TodoPage from './pages/todos/TodoPage'
import AutomationPage from './pages/automation/AutomationPage'
import SettingsPage from './pages/settings/SettingsPage'
import './styles.css'

const APPS = [
  { key: 'dashboard'     as const, icon: LayoutDashboard, label: 'Dashboard',    sub: 'Portfolio Overview',            path: '/dashboard',      desc: '' },
  { key: 'annual-plans'  as const, icon: CalendarRange,   label: 'Kế hoạch năm', sub: 'Annual Plan Management',        path: '/annual-plans',   desc: 'Quản lý mục tiêu, Definition of Done và danh mục dự án theo năm' },
  { key: 'ppg'           as const, icon: Building2,       label: 'PPG System',   sub: 'Project Governance',            path: '/ppg',            desc: 'Single Source of Truth · IT Project Portfolio' },
  { key: 'ba-workflow'   as const, icon: FileText,        label: 'BA',           sub: 'BA Document Hub',               path: '/ba-workflow',    desc: 'Transform Raw Requirements → BRD / BRS / ERD / API Spec' },
  { key: 'test-workflow' as const, icon: FlaskConical,    label: 'Test',         sub: 'Test Dashboard',                path: '/test-workflow',  desc: 'Strategy · Execution · Control · Tài liệu' },
  { key: 'automation'    as const, icon: Bot,             label: 'Automation',   sub: 'Capture Studio · Playwright',   path: '/automation',     desc: 'Ghi thao tác thành test case, chạy kèm evidence, xuất Playwright spec' },
  { key: 'docs'          as const, icon: BookOpen,        label: 'Tài liệu',     sub: 'Dự án / BA / Test',             path: '/docs',           desc: '' },
  { key: 'catalog'       as const, icon: Layers,          label: 'Danh mục',     sub: 'Product & User Catalog',        path: '/catalog',        desc: 'Sản phẩm · Nhân sự · Vai trò & Phân quyền' },
  { key: 'requests'      as const, icon: Ticket,          label: 'Requests',     sub: 'Change Request · Service Request', path: '/requests',    desc: 'Quản lý yêu cầu thay đổi dự án và yêu cầu dịch vụ vận hành' },
  { key: 'todos'         as const, icon: CheckSquare,     label: 'To-do',         sub: 'Task Tracking · Kanban · Workload', path: '/todos',      desc: '' },
  { key: 'settings'      as const, icon: SlidersHorizontal, label: 'Cài đặt',      sub: 'AI Agent · Kho skill',          path: '/settings',       desc: 'Cấu hình Claude API và bộ skill chuẩn dùng cho sinh tài liệu, test case, báo cáo' },
]

function Shell() {
  const { logout, username } = useStore()
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const currentApp = APPS.find(a => location.pathname.startsWith(a.path)) || APPS[0]

  return (
    <div className="shell">
      {/* Sidebar */}
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
            <span className="sidebar-item__label">API — PPG</span>
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
        {/* Topbar */}
        <header className="topbar">
          <div className="topbar__search-wrap">
            <span className="topbar__search-icon"><Search size={14} strokeWidth={1.5} /></span>
            <input className="topbar__search" type="text" placeholder="Tìm project, document, test case" />
          </div>
          <div className="topbar__spacer" />
          <div className="topbar__actions">
            <div className="ds-seg">
              {APPS.map(a => (
                <button key={a.key}
                  className={`ds-seg__item${currentApp.key === a.key ? ' active' : ''}`}
                  onClick={() => navigate(a.path)}
                >{a.label}</button>
              ))}
            </div>
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
              {currentApp.desc && (
                <>
                  <span className="sep">·</span>
                  <span className="desc">{currentApp.desc}</span>
                </>
              )}
            </div>
            <main className="main-content">
              <Routes>
                <Route path="/dashboard"     element={<DashboardPage />} />
                <Route path="/annual-plans"  element={<AnnualPlansPage />} />
                <Route path="/ppg"           element={<PPGPage />} />
                <Route path="/catalog"       element={<CatalogPage />} />
                <Route path="/ba-workflow"   element={<BAWorkflowPage />} />
                <Route path="/test-workflow" element={<TestWorkflowPage />} />
                <Route path="/automation"    element={<AutomationPage />} />
                <Route path="/settings"      element={<SettingsPage />} />
                <Route path="/docs"          element={<DocsPage />} />
                <Route path="/requests"     element={<RequestsPage />} />
                <Route path="/todos"        element={<TodoPage />} />
                {/* legacy routes — still accessible, not in nav */}
                <Route path="/ba"            element={<BAPage />} />
                <Route path="/objects"       element={<ProjectObjectsPage />} />
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
