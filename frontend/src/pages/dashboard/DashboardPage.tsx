/**
 * DashboardPage — 5 sheets
 *  Sheet 1 (Dashboard):    KPI cards + Pie chart status + Budget bar chart
 *  Sheet 2 (Project List): Full project table
 *  Sheet 3 (Sản phẩm):     Danh mục sản phẩm + tình trạng Master Doc + số CR
 *  Sheet 5 (Nhân sự):      Headcount theo dự án
 */
import React, { useEffect, useState } from 'react'
import {
  LayoutDashboard, FolderKanban, AlertTriangle, Users,
  RefreshCw, Building2, Flag, Package, FileText, GitPullRequest, FlaskConical,
  ChevronUp, ChevronDown, CalendarRange,
} from 'lucide-react'
import { Badge, StatusBadge } from '../../components/ui'
import {
  getDashboardSummary, getDashboardProjects, getDashboardProducts,
  getDashboardResources,
  type DashboardSummary, type DashboardProject, type DashboardProduct,
  type ResourceData,
} from '../../api/dashboard'
import { PeriodReportTab } from './PeriodReportTab'

// ── Helpers ────────────────────────────────────────────────────────────────

function fmtVND(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`
  if (n >= 1_000_000)     return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)         return `${(n / 1_000).toFixed(0)}K`
  return n.toLocaleString()
}

function fmtDate(d: string | null): string {
  if (!d) return '—'
  return new Date(d).toLocaleDateString('vi-VN')
}

// DS categorical palette — map 1-1 theo thứ tự chuỗi cũ
const PALETTE = ['#155EEF', '#7F56D9', '#039855', '#DC6803', '#0086C9', '#D92D20', '#667085', '#02CCCC']

const STATUS_COLORS: Record<string, string> = {
  active:      '#155EEF',
  completed:   '#7F56D9',
  on_hold:     '#039855',
  archived:    '#DC6803',
  cancelled:   '#D92D20',
  planning:    '#1570EF',
}

function statusColor(s: string): string {
  return STATUS_COLORS[s] ?? '#667085'
}

function riskColor(score: number | null): string {
  if (!score) return '#98A2B3'
  if (score >= 15) return '#D92D20'
  if (score >= 9)  return '#DC6803'
  if (score >= 4)  return '#FAAD14'
  return '#039855'
}

function riskLabel(score: number | null): string {
  if (!score) return '—'
  if (score >= 15) return 'Critical'
  if (score >= 9)  return 'High'
  if (score >= 4)  return 'Medium'
  return 'Low'
}

// ── SVG Pie Chart ──────────────────────────────────────────────────────────

interface PieSlice { label: string; value: number; color: string }

function PieChart({ slices, size = 180, unitLabel = 'mục' }: { slices: PieSlice[]; size?: number; unitLabel?: string }) {
  const total = slices.reduce((s, sl) => s + sl.value, 0)
  if (total === 0) return <p style={{ color: 'var(--app-neutral-400)', fontSize: 14 }}>Chưa có dữ liệu</p>

  const cx = size / 2
  const cy = size / 2
  const r  = size / 2 - 8

  let cumAngle = -Math.PI / 2  // start at top
  const paths: React.ReactNode[] = []

  slices.forEach((sl, i) => {
    if (sl.value === 0) return
    const angle = (sl.value / total) * 2 * Math.PI
    const x1 = cx + r * Math.cos(cumAngle)
    const y1 = cy + r * Math.sin(cumAngle)
    const x2 = cx + r * Math.cos(cumAngle + angle)
    const y2 = cy + r * Math.sin(cumAngle + angle)
    const largeArc = angle > Math.PI ? 1 : 0
    const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`
    paths.push(<path key={i} d={d} fill={sl.color} stroke="#fff" strokeWidth={2} />)
    cumAngle += angle
  })

  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
      <svg width={size} height={size} style={{ flexShrink: 0 }}>
        {paths}
        {/* center hole */}
        <circle cx={cx} cy={cy} r={r * 0.42} fill="#fff" />
        <text x={cx} y={cy - 6} textAnchor="middle" fontSize={13} fontWeight={600} fill="#344054">{total}</text>
        <text x={cx} y={cy + 10} textAnchor="middle" fontSize={10} fill="#667085">{unitLabel}</text>
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {slices.filter(sl => sl.value > 0).map((sl, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12 }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: sl.color, flexShrink: 0 }} />
            <span style={{ color: 'var(--app-neutral-700)' }}>{sl.label}</span>
            <span style={{ fontWeight: 600, color: 'var(--app-neutral-900)', marginLeft: 4 }}>{sl.value}</span>
            <span style={{ color: 'var(--app-neutral-400)', fontSize: 11 }}>
              ({((sl.value / total) * 100).toFixed(0)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── SVG Grouped Bar Chart ──────────────────────────────────────────────────

interface BarGroup { label: string; planned: number; actual: number }

function BarChart({ groups, height = 180, single = false, seriesLabels = ['Planned', 'Actual'] }: { groups: BarGroup[]; height?: number; single?: boolean; seriesLabels?: [string, string] | string[] }) {
  if (groups.length === 0) return <p style={{ color: 'var(--app-neutral-400)', fontSize: 14 }}>Chưa có dữ liệu</p>

  const maxVal = Math.max(...groups.flatMap(g => [g.planned, g.actual]), 1)
  const barW    = 22
  const gap     = 6
  const groupW  = barW * 2 + gap + 16
  const svgW    = Math.max(groups.length * groupW + 60, 200)
  const chartH  = height - 40
  const padLeft = 52

  return (
    <div style={{ overflowX: 'auto' }}>
      <svg width={svgW} height={height} style={{ minWidth: 200 }}>
        {/* Y-axis gridlines */}
        {[0, 0.25, 0.5, 0.75, 1].map(frac => {
          const y = 10 + chartH * (1 - frac)
          return (
            <g key={frac}>
              <line x1={padLeft} y1={y} x2={svgW - 10} y2={y} stroke="#EAECF0" strokeDasharray="3,3" />
              <text x={padLeft - 6} y={y + 4} fontSize={9} fill="#98A2B3" textAnchor="end">
                {fmtVND(maxVal * frac)}
              </text>
            </g>
          )
        })}
        {/* Bars */}
        {groups.map((g, i) => {
          const x   = padLeft + i * groupW
          const pH  = (g.planned / maxVal) * chartH
          const aH  = (g.actual  / maxVal) * chartH
          const y0  = 10 + chartH
          return (
            <g key={i}>
              {/* Planned */}
              <rect x={x} y={y0 - pH} width={barW} height={pH} fill="#155EEF" rx={2}>
                <title>{seriesLabels[0]}: {single ? g.planned : fmtVND(g.planned)}</title>
              </rect>
              {/* Actual — ẩn khi biểu đồ chỉ có 1 chuỗi số liệu */}
              {!single && (
                <rect x={x + barW + gap} y={y0 - aH} width={barW} height={aH} fill="#7F56D9" rx={2}>
                  <title>{seriesLabels[1]}: {fmtVND(g.actual)}</title>
                </rect>
              )}
              {/* Label */}
              <text x={x + barW} y={y0 + 14} fontSize={10} fill="#667085" textAnchor="middle">{g.label}</text>
            </g>
          )
        })}
        {/* Legend */}
        <g>
          <rect x={padLeft} y={height - 14} width={10} height={10} fill="#155EEF" rx={2} />
          <text x={padLeft + 13} y={height - 5} fontSize={10} fill="#344054">{seriesLabels[0]}</text>
          <rect x={padLeft + 70} y={height - 14} width={10} height={10} fill="#7F56D9" rx={2} />
          {!single && <text x={padLeft + 83} y={height - 5} fontSize={10} fill="#344054">{seriesLabels[1]}</text>}
        </g>
      </svg>
    </div>
  )
}

// ── KPI Card ───────────────────────────────────────────────────────────────

function KpiCard({
  label, value, sub, color, icon,
}: { label: string; value: string | number; sub?: string; color?: string; icon?: React.ReactNode }) {
  return (
    <div className="kpi-card" style={{ minWidth: 160, flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <span className="kpi-card__label">{label}</span>
        {icon && (
          <span style={{ display: 'inline-flex', color: color ?? 'var(--app-primary)' }}>{icon}</span>
        )}
      </div>
      <div className="kpi-card__value">{value}</div>
      {sub && <div className="kpi-card__change" style={{ color: 'var(--app-neutral-400)' }}>{sub}</div>}
    </div>
  )
}

// ── Tab Bar ────────────────────────────────────────────────────────────────

const TABS: { key: string; label: string; icon: React.ReactNode }[] = [
  { key: 'dashboard',   label: 'Dashboard',     icon: <LayoutDashboard size={16} strokeWidth={1.5} /> },
  { key: 'period',      label: 'Báo cáo theo kỳ', icon: <CalendarRange size={16} strokeWidth={1.5} /> },
  { key: 'projects',    label: 'Dự án',         icon: <FolderKanban size={16} strokeWidth={1.5} /> },
  { key: 'products',    label: 'Sản phẩm',      icon: <Package size={16} strokeWidth={1.5} /> },
  { key: 'resources',   label: 'Nhân sự',       icon: <Users size={16} strokeWidth={1.5} /> },
]

// ── Sheet 1: Dashboard ─────────────────────────────────────────────────────

function Sheet1({ data }: { data: DashboardSummary }) {
  const { kpi, status_dist, product_dist, cr_dist, test_dist } = data

  const projectSlices = status_dist.map(s => ({
    label: s.status,
    value: s.count,
    color: statusColor(s.status),
  }))

  const productSlices = product_dist.map((p, i) => ({
    label: p.product_type,
    value: p.count,
    color: PALETTE[i % PALETTE.length],
  }))

  const crGroups = cr_dist.map(c => ({
    label: c.status,
    planned: c.count,
    actual: 0,
  }))

  const docCoverage = kpi.total_products > 0
    ? Math.round((kpi.products_with_master_doc / kpi.total_products) * 100)
    : 0

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* KPI theo trục vòng đời */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <KpiCard label="Dự án"            value={kpi.total_projects}
          sub={`Đang chạy: ${kpi.active_projects}`}
          icon={<Building2 size={16} strokeWidth={1.5} />}     color="#155EEF" />
        <KpiCard label="Dự án hoàn thành" value={kpi.completed_projects}
          icon={<Flag size={16} strokeWidth={1.5} />}          color="#444CE7" />
        <KpiCard label="Sản phẩm"         value={kpi.total_products}
          icon={<Package size={16} strokeWidth={1.5} />}       color="#7F56D9" />
        <KpiCard label="Có Master Doc"    value={`${docCoverage}%`}
          sub={`${kpi.products_with_master_doc}/${kpi.total_products} sản phẩm`}
          icon={<FileText size={16} strokeWidth={1.5} />}
          color={docCoverage >= 80 ? '#039855' : docCoverage >= 40 ? '#DC6803' : '#D92D20'} />
        <KpiCard label="Yêu cầu thay đổi" value={kpi.total_crs}
          sub={`Đang mở: ${kpi.open_crs}`}
          icon={<GitPullRequest size={16} strokeWidth={1.5} />} color="#0086C9" />
        <KpiCard label="Việc test đang mở" value={kpi.open_test_tasks}
          icon={<FlaskConical size={16} strokeWidth={1.5} />}
          color={kpi.open_test_tasks > 0 ? '#DC6803' : '#039855'} />
      </div>

      {/* Biểu đồ */}
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        <div className="card" style={{ padding: '16px 20px', flex: '1 1 300px' }}>
          <h3 className="card__title" style={{ margin: '0 0 16px' }}>
            Dự án theo trạng thái
          </h3>
          <PieChart slices={projectSlices} size={200} unitLabel="dự án" />
        </div>

        <div className="card" style={{ padding: '16px 20px', flex: '1 1 300px' }}>
          <h3 className="card__title" style={{ margin: '0 0 16px' }}>
            Sản phẩm theo loại
          </h3>
          <PieChart slices={productSlices} size={200} unitLabel="sản phẩm" />
        </div>

        <div className="card" style={{ padding: '16px 20px', flex: '2 1 420px' }}>
          <h3 className="card__title" style={{ margin: '0 0 16px' }}>
            Yêu cầu thay đổi theo trạng thái
          </h3>
          {crGroups.length > 0
            ? <BarChart groups={crGroups} height={180} single seriesLabels={['Số CR', '']} />
            : <div className="empty-state">
                <div className="empty-state__title">Chưa có yêu cầu thay đổi</div>
                <div className="empty-state__desc">Tạo CR đầu tiên để bắt đầu theo dõi.</div>
              </div>}
        </div>
      </div>

      {/* Tiến độ kiểm thử */}
      {test_dist.length > 0 && (
        <div className="card" style={{ padding: '16px 20px' }}>
          <h3 className="card__title" style={{ margin: '0 0 12px' }}>
            Công việc kiểm thử
          </h3>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
            {test_dist.map(t => (
              <div key={t.status} style={{ minWidth: 140 }}>
                <div style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>{t.status}</div>
                <div style={{ fontSize: 20, fontWeight: 600, color: 'var(--app-neutral-900)' }}>{t.count}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}


// ── Sheet 2: Project List ──────────────────────────────────────────────────

function Sheet2({ projects }: { projects: DashboardProject[] }) {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const statuses = Array.from(new Set(projects.map(p => p.status))).sort()
  const filtered = projects.filter(p => {
    const matchSearch = search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.code.toLowerCase().includes(search.toLowerCase()) ||
      (p.owner ?? '').toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'all' || p.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Filters */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Tìm project, code, owner..."
          className="app-input"
          style={{ width: 220 }}
        />
        <select
          value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
          className="app-input"
          style={{ width: 'auto', cursor: 'pointer' }}
        >
          <option value="all">All Status</option>
          {statuses.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <span style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginLeft: 4 }}>
          {filtered.length} / {projects.length} projects
        </span>
      </div>

      {/* Table */}
      <div className="card" style={{ overflowX: 'auto' }}>
        <table className="ds-table">
          <thead>
            <tr>
              {['Code', 'Project Name', 'Status', 'Domain', 'Owner', 'Start', 'End', 'Members'].map(h => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={8} style={{ padding: '32px', textAlign: 'center', color: 'var(--app-neutral-400)' }}>
                Không tìm thấy project
              </td></tr>
            ) : filtered.map(p => (
              <tr key={p.id}>
                <td style={{ fontWeight: 600, color: 'var(--app-primary)', whiteSpace: 'nowrap' }}>
                  {p.code}
                </td>
                <td style={{ fontWeight: 500, color: 'var(--app-neutral-800)', maxWidth: 260 }}>
                  {p.name}
                </td>
                <td><StatusBadge status={p.status} /></td>
                <td style={{ fontSize: 12 }}>
                  {p.domain_label ?? p.domain_code ?? '—'}
                </td>
                <td>{p.owner ?? '—'}</td>
                <td style={{ color: 'var(--app-neutral-500)', whiteSpace: 'nowrap', fontSize: 12 }}>
                  {fmtDate(p.start_date)}
                </td>
                <td style={{ color: 'var(--app-neutral-500)', whiteSpace: 'nowrap', fontSize: 12 }}>
                  {fmtDate(p.end_date)}
                </td>
                <td style={{ textAlign: 'center' }}>
                  <span style={{
                    display: 'inline-block', minWidth: 24, padding: '2px 8px',
                    background: p.member_count > 0 ? '#EFF8FF' : '#F2F4F7',
                    color: p.member_count > 0 ? '#1570EF' : '#98A2B3',
                    borderRadius: 16, fontWeight: 600, fontSize: 12,
                  }}>{p.member_count}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Sheet 3: Sản phẩm ──────────────────────────────────────────────────────

function Sheet3({ products }: { products: DashboardProduct[] }) {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')

  const types = Array.from(new Set(products.map(p => p.product_type))).sort()
  const filtered = products.filter(p => {
    const matchSearch = search === '' ||
      p.product_name.toLowerCase().includes(search.toLowerCase()) ||
      p.product_code.toLowerCase().includes(search.toLowerCase())
    const matchType = typeFilter === 'all' || p.product_type === typeFilter
    return matchSearch && matchType
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <input
          value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Tìm sản phẩm theo tên hoặc mã"
          className="app-input"
          style={{ maxWidth: 280 }}
        />
        <select className="app-input" style={{ maxWidth: 180 }}
          value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="all">Tất cả loại</option>
          {types.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
        <span style={{ fontSize: 13, color: 'var(--app-neutral-500)' }}>
          {filtered.length} / {products.length} sản phẩm
        </span>
      </div>

      <div className="card" style={{ overflow: 'auto' }}>
        <table className="ds-table">
          <thead>
            <tr>
              <th style={{ width: 120 }}>Mã</th>
              <th>Tên sản phẩm</th>
              <th style={{ width: 110 }}>Loại</th>
              <th style={{ width: 150 }}>Domain</th>
              <th style={{ width: 150 }}>Master Doc</th>
              <th style={{ width: 120 }}>CR</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(p => (
              <tr key={p.id}>
                <td><code style={{ fontSize: 12 }}>{p.product_code}</code></td>
                <td style={{ color: 'var(--app-neutral-900)', fontWeight: 500 }}>{p.product_name}</td>
                <td>{p.product_type}</td>
                <td>{p.domain_label ?? p.domain_code ?? '—'}</td>
                <td>
                  {p.has_master_doc
                    ? <span className="badge badge-success">{p.master_doc_version}</span>
                    : <span className="badge badge-warning">Chưa có</span>}
                </td>
                <td>
                  {p.cr_count === 0 ? '—' : (
                    <>
                      {p.cr_count} CR
                      {p.open_cr_count > 0 && (
                        <span style={{ color: 'var(--app-warning)' }}> · {p.open_cr_count} đang mở</span>
                      )}
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="empty-state">
            <div className="empty-state__title">Không có sản phẩm khớp bộ lọc</div>
            <div className="empty-state__desc">Đổi từ khóa tìm kiếm hoặc chọn loại khác.</div>
          </div>
        )}
      </div>
    </div>
  )
}


// ── Sheet 5: Resource ──────────────────────────────────────────────────────

function Sheet5({ data }: { data: ResourceData }) {
  const { project_headcount } = data
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const maxHC = Math.max(...project_headcount.map(p => p.headcount), 1)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

      {(
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>
            {project_headcount.length} projects · click để xem thành viên
          </div>
          {project_headcount.length === 0 ? (
            <div style={{ padding: 32, textAlign: 'center', color: 'var(--app-neutral-400)', fontSize: 14 }}>
              Chưa có dữ liệu thành viên
            </div>
          ) : project_headcount.map(p => (
            <div key={p.project_id} style={{
              background: '#fff', border: '1px solid var(--app-neutral-200)', borderRadius: 8,
              overflow: 'hidden',
            }}>
              <div
                onClick={() => setExpandedId(expandedId === p.project_id ? null : p.project_id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 16px', cursor: 'pointer',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--app-neutral-100)')}
                onMouseLeave={e => (e.currentTarget.style.background = '')}
              >
                {/* Project info */}
                <span style={{ fontWeight: 600, fontSize: 12, color: 'var(--app-primary)', minWidth: 80 }}>
                  {p.code}
                </span>
                <span style={{ flex: 1, fontWeight: 500, fontSize: 14, color: 'var(--app-neutral-800)' }}>
                  {p.project_name}
                </span>
                <StatusBadge status={p.project_status} />
                {p.domain_label && (
                  <span style={{ fontSize: 11, color: 'var(--app-neutral-400)', minWidth: 80 }}>
                    {p.domain_label}
                  </span>
                )}
                {/* Headcount bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 160 }}>
                  <div style={{ flex: 1, height: 8, background: 'var(--app-neutral-200)', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{
                      height: '100%', borderRadius: 4,
                      width: `${(p.headcount / maxHC) * 100}%`,
                      background: p.headcount === 0 ? 'var(--app-neutral-200)' : 'var(--app-primary)',
                    }} />
                  </div>
                  <span style={{ fontWeight: 600, fontSize: 14, minWidth: 24, color: 'var(--app-neutral-800)' }}>
                    {p.headcount}
                  </span>
                </div>
                <span style={{ display: 'inline-flex', color: 'var(--app-neutral-400)', marginLeft: 4 }}>
                  {expandedId === p.project_id
                    ? <ChevronUp size={16} strokeWidth={1.5} />
                    : <ChevronDown size={16} strokeWidth={1.5} />}
                </span>
              </div>

              {/* Expanded members */}
              {expandedId === p.project_id && p.members.length > 0 && (
                <div style={{
                  borderTop: '1px solid #F2F4F7', padding: '10px 16px 14px',
                  background: 'var(--app-neutral-50)', display: 'flex', flexWrap: 'wrap', gap: 8,
                }}>
                  {p.members.map((m, i) => (
                    <div key={i} style={{
                      background: '#fff', border: '1px solid var(--app-neutral-200)', borderRadius: 6,
                      padding: '6px 12px', fontSize: 12,
                    }}>
                      <span style={{ fontWeight: 600, color: 'var(--app-neutral-800)' }}>{m.name}</span>
                      {m.role && (
                        <span style={{ color: 'var(--app-neutral-500)', marginLeft: 6 }}>· {m.role}</span>
                      )}
                      {m.email && (
                        <span style={{ color: 'var(--app-neutral-400)', marginLeft: 6, fontSize: 11 }}>{m.email}</span>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {expandedId === p.project_id && p.members.length === 0 && (
                <div style={{ borderTop: '1px solid #F2F4F7', padding: '12px 16px', color: 'var(--app-neutral-400)', fontSize: 12 }}>
                  Chưa có thành viên
                </div>
              )}
            </div>
          ))}
        </div>
      )}

          </div>
  )
}

// ── Main DashboardPage ─────────────────────────────────────────────────────

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [summary,   setSummary]   = useState<DashboardSummary | null>(null)
  const [projects,  setProjects]  = useState<DashboardProject[]>([])
  const [products,  setProducts]  = useState<DashboardProduct[]>([])
  const [resources, setResources] = useState<ResourceData | null>(null)
  const [loading,   setLoading]   = useState(false)
  const [error,     setError]     = useState<string | null>(null)

  const fetchTab = async (tab: string) => {
    setLoading(true)
    setError(null)
    try {
      switch (tab) {
        case 'dashboard':
          if (!summary)   setSummary(await getDashboardSummary())
          break
        case 'projects':
          if (!projects.length) setProjects(await getDashboardProjects())
          break
        case 'products':
          if (!products.length) setProducts(await getDashboardProducts())
          break
        case 'resources':
          if (!resources) setResources(await getDashboardResources())
          break
      }
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchTab('dashboard') }, [])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    fetchTab(tab)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, height: '100%' }}>
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 16,
      }}>
        <div>
          <h1 style={{ fontSize: 20, lineHeight: '30px', fontWeight: 600, color: 'var(--app-neutral-900)', margin: 0 }}>
            Portfolio Dashboard
          </h1>
          <p style={{ fontSize: 14, color: 'var(--app-neutral-500)', margin: '4px 0 0' }}>
            Tổng quan theo vòng đời: dự án, sản phẩm, yêu cầu thay đổi và kiểm thử
          </p>
        </div>
        <button
          onClick={() => { setSummary(null); setProjects([]); setProducts([]); setResources(null); fetchTab(activeTab) }}
          className="btn btn-secondary"
        >
          <RefreshCw size={16} strokeWidth={1.5} /> Refresh
        </button>
      </div>

      {/* Tab bar */}
      <div className="ds-tabs" style={{ marginBottom: 16, flexWrap: 'wrap' }}>
        {TABS.map(t => (
          <button key={t.key} onClick={() => handleTabChange(t.key)}
            className={activeTab === t.key ? 'ds-tab active' : 'ds-tab'}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            {t.icon} {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '48px 0', color: 'var(--app-neutral-400)', fontSize: 14 }}>
          Loading...
        </div>
      )}
      {error && (
        <div className="state-banner state-banner-err">
          <AlertTriangle size={16} strokeWidth={1.5} /> {error}
        </div>
      )}
      {!loading && !error && (
        <>
          {activeTab === 'dashboard'  && summary   && <Sheet1 data={summary} />}
          {activeTab === 'period'                  && <PeriodReportTab />}
          {activeTab === 'projects'                && <Sheet2 projects={projects} />}
          {activeTab === 'products'                && <Sheet3 products={products} />}
          {activeTab === 'resources'  && resources  && <Sheet5 data={resources} />}
        </>
      )}
    </div>
  )
}
