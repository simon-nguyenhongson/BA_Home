/**
 * DashboardPage — 5 sheets
 *  Sheet 1 (Dashboard):    KPI cards + Pie chart status + Budget bar chart
 *  Sheet 2 (Project List): Full project table
 *  Sheet 3 (Financial):    Budget vs Actual per plan + quarterly breakdown
 *  Sheet 4 (Risk):         Top risks table with heat-map score
 *  Sheet 5 (Resource):     Headcount per project + plan allocation
 */
import React, { useEffect, useState } from 'react'
import {
  LayoutDashboard, FolderKanban, Wallet, AlertTriangle, Users,
  RefreshCw, Building2, CheckCircle, Flag, TrendingUp, Banknote, Gauge,
  ChevronUp, ChevronDown,
} from 'lucide-react'
import { Badge, StatusBadge } from '../../components/ui'
import {
  getDashboardSummary, getDashboardProjects, getDashboardFinancial,
  getDashboardRisks, getDashboardResources,
  type DashboardSummary, type DashboardProject, type FinancialData,
  type RiskItem, type ResourceData,
} from '../../api/dashboard'

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

function PieChart({ slices, size = 180 }: { slices: PieSlice[]; size?: number }) {
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
        <text x={cx} y={cy + 10} textAnchor="middle" fontSize={10} fill="#667085">projects</text>
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

function BarChart({ groups, height = 180 }: { groups: BarGroup[]; height?: number }) {
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
                <title>Planned: {fmtVND(g.planned)}</title>
              </rect>
              {/* Actual */}
              <rect x={x + barW + gap} y={y0 - aH} width={barW} height={aH} fill="#7F56D9" rx={2}>
                <title>Actual: {fmtVND(g.actual)}</title>
              </rect>
              {/* Label */}
              <text x={x + barW} y={y0 + 14} fontSize={10} fill="#667085" textAnchor="middle">{g.label}</text>
            </g>
          )
        })}
        {/* Legend */}
        <g>
          <rect x={padLeft} y={height - 14} width={10} height={10} fill="#155EEF" rx={2} />
          <text x={padLeft + 13} y={height - 5} fontSize={10} fill="#344054">Planned</text>
          <rect x={padLeft + 70} y={height - 14} width={10} height={10} fill="#7F56D9" rx={2} />
          <text x={padLeft + 83} y={height - 5} fontSize={10} fill="#344054">Actual</text>
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
  { key: 'projects',    label: 'Project List',  icon: <FolderKanban size={16} strokeWidth={1.5} /> },
  { key: 'financial',   label: 'Financial',     icon: <Wallet size={16} strokeWidth={1.5} /> },
  { key: 'risks',       label: 'Risk',          icon: <AlertTriangle size={16} strokeWidth={1.5} /> },
  { key: 'resources',   label: 'Resource',      icon: <Users size={16} strokeWidth={1.5} /> },
]

// ── Sheet 1: Dashboard ─────────────────────────────────────────────────────

function Sheet1({ data }: { data: DashboardSummary }) {
  const { kpi, status_distribution, budget_chart, budget_by_type } = data

  const pieSlices = status_distribution.map(s => ({
    label: s.status,
    value: s.count,
    color: statusColor(s.status),
  }))

  const barGroups = budget_chart.map(b => ({
    label:   b.quarter,
    planned: b.planned,
    actual:  b.actual,
  }))

  const typeBarGroups = budget_by_type.map(b => ({
    label:   b.budget_type.toUpperCase(),
    planned: b.planned,
    actual:  b.actual,
  }))

  const utilColor = kpi.budget_utilization_pct > 100 ? '#D92D20'
    : kpi.budget_utilization_pct > 80 ? '#DC6803' : '#039855'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* KPI Cards */}
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <KpiCard label="Total Projects"     value={kpi.total_projects}
          icon={<Building2 size={16} strokeWidth={1.5} />}     color="#155EEF" />
        <KpiCard label="Active"             value={kpi.active_projects}
          icon={<CheckCircle size={16} strokeWidth={1.5} />}   color="#039855" />
        <KpiCard label="Completed"          value={kpi.completed_projects}
          icon={<Flag size={16} strokeWidth={1.5} />}          color="#444CE7" />
        <KpiCard label="Open Risks"         value={kpi.open_risks}
          sub={`Avg score: ${kpi.avg_risk_score}`}
          icon={<AlertTriangle size={16} strokeWidth={1.5} />} color="#D92D20" />
        <KpiCard label="Budget Planned"     value={fmtVND(kpi.total_budget_planned)}
          sub="VND"
          icon={<TrendingUp size={16} strokeWidth={1.5} />}    color="#7F56D9" />
        <KpiCard label="Budget Actual"      value={fmtVND(kpi.total_budget_actual)}
          sub="VND"
          icon={<Banknote size={16} strokeWidth={1.5} />}      color="#DC6803" />
        <KpiCard label="Budget Utilization" value={`${kpi.budget_utilization_pct}%`}
          sub="Actual / Planned"
          icon={<Gauge size={16} strokeWidth={1.5} />}         color={utilColor} />
      </div>

      {/* Charts row */}
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {/* Pie chart */}
        <div className="card" style={{ padding: '16px 20px', flex: '1 1 300px' }}>
          <h3 className="card__title" style={{ margin: '0 0 16px' }}>
            Project Status Distribution
          </h3>
          <PieChart slices={pieSlices} size={200} />
        </div>

        {/* Budget by quarter bar chart */}
        <div className="card" style={{ padding: '16px 20px', flex: '1 1 380px' }}>
          <h3 className="card__title" style={{ margin: '0 0 16px' }}>
            Budget vs Actual — by Quarter (VND)
          </h3>
          {barGroups.length > 0
            ? <BarChart groups={barGroups} height={200} />
            : <p style={{ color: 'var(--app-neutral-400)', fontSize: 14 }}>Chưa có dữ liệu ngân sách</p>
          }
        </div>

        {/* Budget by type */}
        {typeBarGroups.length > 0 && (
          <div className="card" style={{ padding: '16px 20px', flex: '1 1 240px' }}>
            <h3 className="card__title" style={{ margin: '0 0 16px' }}>
              Capex vs Opex (VND)
            </h3>
            <BarChart groups={typeBarGroups} height={200} />
          </div>
        )}
      </div>
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

// ── Sheet 3: Financial ─────────────────────────────────────────────────────

function Sheet3({ data }: { data: FinancialData }) {
  const { plan_summary, quarterly_detail } = data
  const [activeTab, setActiveTab] = useState<'plan' | 'quarterly'>('plan')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="ds-seg" style={{ alignSelf: 'flex-start' }}>
        <button className={activeTab === 'plan' ? 'ds-seg__item active' : 'ds-seg__item'}
          onClick={() => setActiveTab('plan')}>Per Plan</button>
        <button className={activeTab === 'quarterly' ? 'ds-seg__item active' : 'ds-seg__item'}
          onClick={() => setActiveTab('quarterly')}>Quarterly Detail</button>
      </div>

      {activeTab === 'plan' && (
        <div className="card" style={{ overflowX: 'auto' }}>
          <table className="ds-table">
            <thead>
              <tr>
                {['Plan', 'Year', 'Status', 'Planned (VND)', 'Actual (VND)', 'Variance', 'Utilization', 'Lines'].map(h => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plan_summary.length === 0 ? (
                <tr><td colSpan={8} style={{ padding: '32px', textAlign: 'center', color: 'var(--app-neutral-400)' }}>
                  Chưa có dữ liệu ngân sách
                </td></tr>
              ) : plan_summary.map(p => (
                <tr key={p.plan_id}>
                  <td style={{ fontWeight: 600, color: 'var(--app-neutral-800)' }}>{p.plan_name}</td>
                  <td>{p.year}</td>
                  <td><StatusBadge status={p.plan_status} /></td>
                  <td style={{ fontFamily: 'monospace', textAlign: 'right' }}>{fmtVND(p.total_planned)}</td>
                  <td style={{ fontFamily: 'monospace', textAlign: 'right' }}>{fmtVND(p.total_actual)}</td>
                  <td style={{
                    fontFamily: 'monospace', textAlign: 'right',
                    color: p.variance > 0 ? 'var(--app-danger)' : 'var(--app-success)',
                  }}>
                    {p.variance > 0 ? '+' : ''}{fmtVND(p.variance)}
                  </td>
                  <td style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ flex: 1, height: 6, background: 'var(--app-neutral-200)', borderRadius: 3, overflow: 'hidden', minWidth: 60 }}>
                        <div style={{
                          height: '100%', borderRadius: 3,
                          width: `${Math.min(p.utilization_pct, 100)}%`,
                          background: p.utilization_pct > 100 ? 'var(--app-danger)' : p.utilization_pct > 80 ? 'var(--app-warning)' : 'var(--app-success)',
                        }} />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 600, minWidth: 36, color: 'var(--app-neutral-700)' }}>
                        {p.utilization_pct}%
                      </span>
                    </div>
                  </td>
                  <td style={{ textAlign: 'center', color: 'var(--app-neutral-500)' }}>{p.line_count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'quarterly' && (
        <div className="card" style={{ overflowX: 'auto' }}>
          <table className="ds-table">
            <thead>
              <tr>
                {['Plan', 'Year', 'Quarter', 'Type', 'Planned', 'Actual', 'Variance', 'Currency'].map(h => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {quarterly_detail.length === 0 ? (
                <tr><td colSpan={8} style={{ padding: '32px', textAlign: 'center', color: 'var(--app-neutral-400)' }}>
                  Chưa có dữ liệu chi tiết
                </td></tr>
              ) : quarterly_detail.map((q, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500, color: 'var(--app-neutral-700)' }}>{q.plan_name}</td>
                  <td style={{ color: 'var(--app-neutral-500)' }}>{q.year}</td>
                  <td>
                    <Badge variant="info">{q.quarter}</Badge>
                  </td>
                  <td>
                    <Badge variant={q.budget_type === 'capex' ? 'primary' : 'warning'}>
                      {q.budget_type.toUpperCase()}
                    </Badge>
                  </td>
                  <td style={{ fontFamily: 'monospace', textAlign: 'right' }}>{fmtVND(q.planned)}</td>
                  <td style={{ fontFamily: 'monospace', textAlign: 'right' }}>{fmtVND(q.actual)}</td>
                  <td style={{
                    fontFamily: 'monospace', textAlign: 'right',
                    color: q.variance > 0 ? 'var(--app-danger)' : 'var(--app-success)',
                  }}>
                    {q.variance > 0 ? '+' : ''}{fmtVND(q.variance)}
                  </td>
                  <td style={{ color: 'var(--app-neutral-500)', fontSize: 11 }}>{q.currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

// ── Sheet 4: Risk ──────────────────────────────────────────────────────────

function Sheet4({ risks }: { risks: RiskItem[] }) {
  const [catFilter, setCatFilter] = useState('all')
  const [statusFilter, setStatusFilter] = useState('open')

  const categories = Array.from(new Set(risks.map(r => r.category).filter(Boolean))).sort() as string[]
  const filtered = risks.filter(r => {
    const matchCat    = catFilter    === 'all' || r.category === catFilter
    const matchStatus = statusFilter === 'all' || r.status   === statusFilter
    return matchCat && matchStatus
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Filters */}
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <select value={catFilter} onChange={e => setCatFilter(e.target.value)}
          className="app-input" style={{ width: 'auto', cursor: 'pointer' }}>
          <option value="all">All Categories</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
          className="app-input" style={{ width: 'auto', cursor: 'pointer' }}>
          <option value="all">All Status</option>
          <option value="open">Open</option>
          <option value="mitigated">Mitigated</option>
          <option value="closed">Closed</option>
          <option value="occurred">Occurred</option>
        </select>
        <span style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>{filtered.length} risks</span>
      </div>

      {/* Table */}
      <div className="card" style={{ overflowX: 'auto' }}>
        <table className="ds-table">
          <thead>
            <tr>
              {['Score', 'Title', 'Category', 'P', 'I', 'Level', 'Owner', 'Status', 'Plan', 'Quarter'].map(h => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr><td colSpan={10} style={{ padding: '32px', textAlign: 'center', color: 'var(--app-neutral-400)' }}>
                Không có risks
              </td></tr>
            ) : filtered.map(r => (
              <tr key={r.id}>
                <td>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                    width: 32, height: 32, borderRadius: 8,
                    background: riskColor(r.risk_score),
                    color: '#fff', fontWeight: 700, fontSize: 14,
                  }}>{r.risk_score ?? '—'}</span>
                </td>
                <td style={{ fontWeight: 500, color: 'var(--app-neutral-800)', maxWidth: 260 }}>
                  <div>{r.title}</div>
                  {r.mitigation && (
                    <div style={{ fontSize: 11, color: 'var(--app-neutral-400)', marginTop: 2 }}>
                      Mitigation: {r.mitigation.slice(0, 80)}{r.mitigation.length > 80 ? '…' : ''}
                    </div>
                  )}
                </td>
                <td>
                  {r.category
                    ? <Badge variant="neutral">{r.category}</Badge>
                    : <span style={{ color: 'var(--app-neutral-300)' }}>—</span>}
                </td>
                <td style={{ textAlign: 'center', fontWeight: 600 }}>{r.probability ?? '—'}</td>
                <td style={{ textAlign: 'center', fontWeight: 600 }}>{r.impact ?? '—'}</td>
                <td>
                  <span style={{
                    padding: '2px 10px', borderRadius: 16, fontSize: 12, fontWeight: 500,
                    background: riskColor(r.risk_score) + '22',
                    color: riskColor(r.risk_score),
                  }}>{riskLabel(r.risk_score)}</span>
                </td>
                <td>{r.owner ?? '—'}</td>
                <td><StatusBadge status={r.status} /></td>
                <td style={{ color: 'var(--app-neutral-500)', fontSize: 12 }}>
                  {r.plan_name} ({r.plan_year})
                </td>
                <td>
                  {r.quarter ? <Badge variant="info">{r.quarter}</Badge> : '—'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Sheet 5: Resource ──────────────────────────────────────────────────────

function Sheet5({ data }: { data: ResourceData }) {
  const { project_headcount, plan_resources } = data
  const [activeTab, setActiveTab] = useState<'project' | 'plan'>('project')
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const maxHC = Math.max(...project_headcount.map(p => p.headcount), 1)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div className="ds-seg" style={{ alignSelf: 'flex-start' }}>
        <button className={activeTab === 'project' ? 'ds-seg__item active' : 'ds-seg__item'}
          onClick={() => setActiveTab('project')}>
          Headcount per Project
        </button>
        <button className={activeTab === 'plan' ? 'ds-seg__item active' : 'ds-seg__item'}
          onClick={() => setActiveTab('plan')}>
          Plan Resource Allocation
        </button>
      </div>

      {activeTab === 'project' && (
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

      {activeTab === 'plan' && (
        <div className="card" style={{ overflowX: 'auto' }}>
          <table className="ds-table">
            <thead>
              <tr>
                {['Plan', 'Year', 'Quarter', 'Team', 'Role', 'Members', 'Avg Allocation'].map(h => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {plan_resources.length === 0 ? (
                <tr><td colSpan={7} style={{ padding: '32px', textAlign: 'center', color: 'var(--app-neutral-400)' }}>
                  Chưa có dữ liệu phân bổ nguồn lực
                </td></tr>
              ) : plan_resources.map((r, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{r.plan_name}</td>
                  <td style={{ color: 'var(--app-neutral-500)' }}>{r.year}</td>
                  <td>
                    <Badge variant="info">{r.quarter}</Badge>
                  </td>
                  <td style={{ color: 'var(--app-neutral-700)' }}>{r.team ?? '—'}</td>
                  <td>{r.role ?? '—'}</td>
                  <td style={{ textAlign: 'center', fontWeight: 600 }}>{r.unique_members}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ flex: 1, height: 6, background: 'var(--app-neutral-200)', borderRadius: 3, overflow: 'hidden', minWidth: 60 }}>
                        <div style={{
                          height: '100%', borderRadius: 3,
                          width: `${r.avg_allocation_pct}%`,
                          background: r.avg_allocation_pct >= 80 ? 'var(--app-danger)' : r.avg_allocation_pct >= 60 ? 'var(--app-warning)' : 'var(--app-success)',
                        }} />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 600, minWidth: 36 }}>{r.avg_allocation_pct}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
  const [financial, setFinancial] = useState<FinancialData | null>(null)
  const [risks,     setRisks]     = useState<RiskItem[]>([])
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
        case 'financial':
          if (!financial) setFinancial(await getDashboardFinancial())
          break
        case 'risks':
          if (!risks.length) setRisks(await getDashboardRisks())
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
            Tổng quan dự án, ngân sách, rủi ro và nguồn lực
          </p>
        </div>
        <button
          onClick={() => { setSummary(null); setProjects([]); setFinancial(null); setRisks([]); setResources(null); fetchTab(activeTab) }}
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
          {activeTab === 'projects'                && <Sheet2 projects={projects} />}
          {activeTab === 'financial'  && financial  && <Sheet3 data={financial} />}
          {activeTab === 'risks'                   && <Sheet4 risks={risks} />}
          {activeTab === 'resources'  && resources  && <Sheet5 data={resources} />}
        </>
      )}
    </div>
  )
}
