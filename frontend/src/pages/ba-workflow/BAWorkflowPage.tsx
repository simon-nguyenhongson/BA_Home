/**
 * BAWorkflowPage — 3-tab BA Dashboard
 * Tab 1 Business  : project list + business value / stakeholder / priority
 * Tab 2 Solution  : requirement status / data mapping / API integration / complexity
 * Tab 3 Delivery  : sprint progress / BA workload / defect count / change request trend
 */

import React, { useEffect, useState, useCallback, useRef } from 'react'
import {
  RefreshCw, ClipboardList, FileText, Briefcase, Wrench, Rocket, User, PenLine, Bug,
} from 'lucide-react'
import { Btn } from '../../components/ui'
import {
  getProjects, getProjectDomains, getMilestones, getMembers, getActivityTasks,
  type Project, type ProjectDomain, type Milestone, type Member, type ActivityTask,
} from '../../api/ppg'
import {
  getBADocuments, getTestDocuments,
} from '../../lib/api/workflow-docs'
import type { BADocument } from '../../lib/types/workflow-doc'
import type { TestDocument } from '../../lib/types/workflow-doc'
import { useStore } from '../../stores/auth'

// ─── types ────────────────────────────────────────────────────────
type BaTab = 'business' | 'solution' | 'delivery'

// ─── domain → business value mapping ─────────────────────────────
const DOMAIN_BV: Record<string, 'High' | 'Medium' | 'Low'> = {
  FS: 'High', IT: 'High', BOS: 'High',
  ESD: 'Medium', HR: 'Medium', RETAIL: 'Medium',
  DATA: 'Low', COMPLIANCE: 'Low',
}
const BV_COLOR: Record<string, string> = {
  High:   '#D92D20',
  Medium: '#DC6803',
  Low:    '#039855',
}
const BV_BG: Record<string, string> = {
  High:   '#FEF3F2',
  Medium: '#FFFAEB',
  Low:    '#ECFDF3',
}

// ─── milestone status priority ────────────────────────────────────
function projectPriority(milestones: Milestone[]): 'Critical' | 'High' | 'Normal' {
  const today = new Date('2026-04-14')
  const hasDelayed = milestones.some(
    m => m.status === 'delayed' || (m.status === 'in_progress' && m.end_date && new Date(m.end_date) < today)
  )
  if (hasDelayed) return 'Critical'
  const hasInProgress = milestones.some(m => m.status === 'in_progress')
  if (hasInProgress) return 'High'
  return 'Normal'
}
const PRIO_COLOR: Record<string, string> = {
  Critical: '#D92D20', High: '#DC6803', Normal: '#667085',
}

// ─── complexity score (heuristic) ────────────────────────────────
function complexityScore(docs: BADocument[], milestones: Milestone[]): number {
  const docScore = Math.min(docs.length * 5, 40)
  const msScore  = Math.min(milestones.length * 3, 30)
  const apiScore = docs.filter(d => d.doc_type === 'API_SPEC').length * 5
  return Math.min(docScore + msScore + apiScore, 100)
}
function complexityLabel(score: number): string {
  if (score >= 70) return 'High'
  if (score >= 40) return 'Medium'
  return 'Low'
}

// ─── small helpers ────────────────────────────────────────────────
function ProgressBar({ pct, color = 'var(--app-primary)' }: { pct: number; color?: string }) {
  return (
    <div style={{ height: 6, background: 'var(--app-neutral-200)', borderRadius: 3, overflow: 'hidden', minWidth: 80 }}>
      <div style={{ height: '100%', width: `${Math.min(pct, 100)}%`, background: color, borderRadius: 3, transition: 'width 0.3s' }} />
    </div>
  )
}

function Pill({ label, color, bg }: { label: string; color: string; bg: string }) {
  return (
    <span style={{ fontSize: 12, lineHeight: '18px', fontWeight: 500, color, background: bg, padding: '2px 8px', borderRadius: 16, whiteSpace: 'nowrap' }}>
      {label}
    </span>
  )
}

function DocStatusDots({ docs, types }: { docs: BADocument[]; types: string[] }) {
  const filtered = docs.filter(d => types.includes(d.doc_type))
  if (!filtered.length) return <span style={{ fontSize: 11, color: 'var(--app-neutral-300)' }}>—</span>
  const counts: Record<string, number> = {}
  filtered.forEach(d => { counts[d.status] = (counts[d.status] ?? 0) + 1 })
  const statusColor: Record<string, string> = {
    draft: '#98A2B3', review: '#DC6803', approved: '#039855', archived: '#667085',
  }
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
      {Object.entries(counts).map(([st, n]) => (
        <span key={st} style={{
          fontSize: 11, fontWeight: 600, padding: '1px 8px', borderRadius: 16,
          background: statusColor[st] + '20', color: statusColor[st], border: `1px solid ${statusColor[st]}40`,
        }}>
          {st} ×{n}
        </span>
      ))}
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// TAB 1 — BUSINESS
// ══════════════════════════════════════════════════════════════════
function BusinessTab({ projects, domains, loading }: {
  projects: Project[]
  domains: ProjectDomain[]
  loading: boolean
}) {
  const { addToast } = useStore()
  const [membersMap, setMembersMap] = useState<Record<string, Member[]>>({})
  const [loadingMembers, setLoadingMembers] = useState(false)
  const [domainFilter, setDomainFilter] = useState('')
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current || projects.length === 0) return
    loaded.current = true
    setLoadingMembers(true)
    Promise.all(projects.map(p =>
      getMembers(p.id)
        .then(ms => [p.id, ms] as [string, Member[]])
        .catch(() => [p.id, []] as [string, Member[]])
    )).then(pairs => {
      setMembersMap(Object.fromEntries(pairs))
    }).catch(() => addToast('Lỗi tải thành viên', 'error'))
      .finally(() => setLoadingMembers(false))
  }, [projects.length])

  const displayed = domainFilter
    ? projects.filter(p => p.domain_code === domainFilter)
    : projects

  const highBv   = projects.filter(p => DOMAIN_BV[p.domain_code ?? ''] === 'High').length
  const activePr = projects.filter(p => p.status === 'active').length
  const domainNames = Array.from(new Set(projects.map(p => p.domain_code).filter(Boolean)))

  return (
    <div>
      {/* Compact info bar */}
      <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginBottom: 12 }}>
        {projects.length} dự án · {domains.length} domain · {highBv} high BV · {activePr} active
      </div>

      {/* Filter bar */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, alignItems: 'center', flexWrap: 'wrap' }}>
        {([{ code: '', label: 'Tất cả' }, ...domainNames.map(d => ({ code: d!, label: d! }))]).map(({ code, label }) => {
          const isActive = domainFilter === code
          const count = code === '' ? projects.length : projects.filter(p => p.domain_code === code).length
          return (
            <button
              key={code}
              onClick={() => setDomainFilter(code === domainFilter && code !== '' ? '' : code)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6, height: 28,
                padding: '0 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font)', fontSize: 13, lineHeight: '18px', fontWeight: isActive ? 600 : 500,
                background: isActive ? 'var(--app-primary)' : '#F2F4F7',
                color: isActive ? '#fff' : 'var(--app-neutral-700)',
              }}
            >
              {label}
              <span style={{
                fontSize: 11, fontWeight: 600, minWidth: 18, textAlign: 'center',
                padding: '1px 5px', borderRadius: 16,
                background: isActive ? 'rgba(255,255,255,0.25)' : 'var(--app-neutral-200)',
                color: isActive ? '#fff' : 'var(--app-neutral-500)',
              }}>{count}</span>
            </button>
          )
        })}
        {(loading || loadingMembers) && (
          <span style={{ fontSize: 11, color: 'var(--app-neutral-400)', marginLeft: 8 }}>Đang tải...</span>
        )}
      </div>

      {/* Table */}
      <div style={{ overflowX: 'auto', border: '1px solid var(--app-neutral-200)', borderRadius: 12 }}>
        <table className="ds-table" style={{ fontSize: 13 }}>
          <thead>
            <tr>
              {['#', 'Project', 'Domain', 'Business Value', 'Stakeholders', 'Priority', 'Status', 'Timeline'].map(h => (
                <th key={h}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayed.map((p, i) => {
              const bv = DOMAIN_BV[p.domain_code ?? ''] ?? 'Low'
              const members = membersMap[p.id] ?? []
              const pm = members.find(m => m.role === 'PM')
              const baLead = members.find(m => m.role === 'BA Lead')
              const stakeholders = [pm?.full_name, baLead?.full_name].filter(Boolean)
              const statusColor = p.status === 'active' ? '#039855' : p.status === 'completed' ? '#1570EF' : '#98A2B3'

              return (
                <tr key={p.id}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--app-neutral-100)')}
                  onMouseLeave={e => (e.currentTarget.style.background = '')}
                >
                  <td style={{ color: 'var(--app-neutral-400)', fontSize: 12 }}>{i + 1}</td>
                  <td>
                    <div style={{ fontWeight: 600, color: 'var(--app-neutral-900)' }}>{p.code}</div>
                    <div style={{ fontSize: 11, color: 'var(--app-neutral-500)', marginTop: 2 }}>{p.name}</div>
                  </td>
                  <td>
                    <span style={{ fontSize: 12, fontWeight: 500, background: '#F2F4F7', color: 'var(--app-neutral-700)', padding: '2px 8px', borderRadius: 16 }}>
                      {p.domain_code ?? '—'}
                    </span>
                  </td>
                  <td>
                    <Pill label={bv} color={BV_COLOR[bv]} bg={BV_BG[bv]} />
                  </td>
                  <td>
                    {loadingMembers ? (
                      <span style={{ fontSize: 11, color: 'var(--app-neutral-300)' }}>...</span>
                    ) : stakeholders.length ? (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {pm && (
                          <span style={{ fontSize: 11, color: 'var(--app-neutral-700)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                            <User size={12} strokeWidth={1.5} /> {pm.full_name}
                          </span>
                        )}
                        {baLead && (
                          <span style={{ fontSize: 11, color: 'var(--app-accent)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                            <PenLine size={12} strokeWidth={1.5} /> {baLead.full_name}
                          </span>
                        )}
                      </div>
                    ) : (
                      <span style={{ fontSize: 11, color: 'var(--app-neutral-300)' }}>Chưa gán</span>
                    )}
                  </td>
                  <td>
                    <span style={{ fontSize: 12, fontWeight: 600, color: PRIO_COLOR[bv === 'High' ? 'Critical' : bv === 'Medium' ? 'High' : 'Normal'] }}>
                      {bv === 'High' ? 'P1' : bv === 'Medium' ? 'P2' : 'P3'}
                    </span>
                  </td>
                  <td>
                    <span style={{ fontSize: 12, fontWeight: 500, color: statusColor }}>
                      {p.status === 'active'?'▶ Active': p.status ==='completed'?' Done' : p.status}
                    </span>
                  </td>
                  <td style={{ whiteSpace: 'nowrap', fontSize: 11, color: 'var(--app-neutral-500)' }}>
                    {p.start_date?.slice(0, 7)} → {p.end_date?.slice(0, 7) ?? '—'}
                  </td>
                </tr>
              )
            })}
            {!loading && displayed.length === 0 && (
              <tr><td colSpan={8} style={{ padding: '32px', textAlign: 'center', color: 'var(--app-neutral-500)' }}>Không có dự án</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// TAB 2 — SOLUTION
// ══════════════════════════════════════════════════════════════════
function SolutionTab({ projects, loading }: { projects: Project[]; loading: boolean }) {
  const { addToast } = useStore()
  const [docsMap, setDocsMap]         = useState<Record<string, BADocument[]>>({})
  const [milesMap, setMilesMap]       = useState<Record<string, Milestone[]>>({})
  const [loadingData, setLoadingData] = useState(false)
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current || projects.length === 0) return
    loaded.current = true
    setLoadingData(true)
    Promise.all([
      Promise.all(projects.map(p =>
        getBADocuments({ project_id: p.id, size: 100 })
          .then(r => [p.id, r.data] as [string, BADocument[]])
          .catch(() => [p.id, []] as [string, BADocument[]])
      )),
      Promise.all(projects.map(p =>
        getMilestones(p.id)
          .then(ms => [p.id, ms] as [string, Milestone[]])
          .catch(() => [p.id, []] as [string, Milestone[]])
      )),
    ]).then(([docPairs, msPairs]) => {
      setDocsMap(Object.fromEntries(docPairs))
      setMilesMap(Object.fromEntries(msPairs))
    }).catch(() => addToast('Lỗi tải dữ liệu Solution', 'error'))
      .finally(() => setLoadingData(false))
  }, [projects.length])

  const allDocs = Object.values(docsMap).flat()
  const totalApproved = allDocs.filter(d => d.status === 'approved').length
  const totalReview   = allDocs.filter(d => d.status === 'review').length
  const highComp = projects.filter(p => {
    const score = complexityScore(docsMap[p.id] ?? [], milesMap[p.id] ?? [])
    return complexityLabel(score) === 'High'
  }).length

  return (
    <div>
      {/* Compact summary line */}
      <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginBottom: 16 }}>
        {allDocs.length} tài liệu BA · {totalApproved} approved · {totalReview} in review · {highComp} dự án complexity cao
      </div>

      {(loading || loadingData) && (
        <div style={{ fontSize: 12, color: 'var(--app-neutral-400)', marginBottom: 12 }}>Đang tải dữ liệu...</div>
      )}

      {/* Solution matrix */}
      <div style={{ overflowX: 'auto', border: '1px solid var(--app-neutral-200)', borderRadius: 12 }}>
        <table className="ds-table" style={{ fontSize: 12 }}>
          <thead>
            <tr>
              <th>Project</th>
              <th>Requirement Status</th>
              <th>Data Mapping</th>
              <th>API / Integration</th>
              <th>Complexity</th>
              <th>Total Docs</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(p => {
              const docs  = docsMap[p.id] ?? []
              const miles = milesMap[p.id] ?? []
              const score = complexityScore(docs, miles)
              const clabel = complexityLabel(score)
              const cColor = clabel === 'High' ? '#D92D20' : clabel === 'Medium' ? '#DC6803' : '#039855'
              return (
                <tr key={p.id}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--app-neutral-100)')}
                  onMouseLeave={e => (e.currentTarget.style.background = '')}
                >
                  <td>
                    <div style={{ fontWeight: 600, color: 'var(--app-neutral-900)', fontSize: 12 }}>{p.code}</div>
                    <div style={{ fontSize: 10, color: 'var(--app-neutral-400)' }}>{p.domain_code}</div>
                  </td>
                  <td>
                    <DocStatusDots docs={docs} types={['BRD', 'BRS', 'FSD']} />
                  </td>
                  <td>
                    <DocStatusDots docs={docs} types={['ERD', 'DATA_DICT']} />
                  </td>
                  <td>
                    <DocStatusDots docs={docs} types={['API_SPEC', 'PROCESS_FLOW']} />
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <ProgressBar pct={score} color={cColor} />
                      <span style={{ fontSize: 11, fontWeight: 600, color: cColor, minWidth: 40 }}>
                        {clabel}
                      </span>
                    </div>
                    <div style={{ fontSize: 10, color: 'var(--app-neutral-400)', marginTop: 2 }}>{score}/100</div>
                  </td>
                  <td style={{ textAlign: 'center', fontWeight: 600, color: 'var(--app-neutral-700)' }}>
                    {docs.length}
                  </td>
                </tr>
              )
            })}
            {!loading && !loadingData && projects.length === 0 && (
              <tr><td colSpan={6} style={{ padding: '32px', textAlign: 'center', color: 'var(--app-neutral-500)' }}>Không có dữ liệu</td></tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div style={{ marginTop: 12, display: 'flex', gap: 16, fontSize: 11, color: 'var(--app-neutral-400)' }}>
        <span>Requirement: BRD / BRS / FSD</span>
        <span>Data Mapping: ERD / DATA_DICT</span>
        <span>API/Integration: API_SPEC / PROCESS_FLOW</span>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// TAB 3 — DELIVERY
// ══════════════════════════════════════════════════════════════════
function DeliveryTab({ projects, loading }: { projects: Project[]; loading: boolean }) {
  const { addToast } = useStore()
  const [milesMap,   setMilesMap]   = useState<Record<string, Milestone[]>>({})
  const [tasksMap,   setTasksMap]   = useState<Record<string, ActivityTask[]>>({})
  const [bugsMap,    setBugsMap]    = useState<Record<string, TestDocument[]>>({})
  const [loadingData, setLoadingData] = useState(false)
  const loaded = useRef(false)

  useEffect(() => {
    if (loaded.current || projects.length === 0) return
    loaded.current = true
    setLoadingData(true)
    Promise.all([
      Promise.all(projects.map(p =>
        getMilestones(p.id)
          .then(ms => [p.id, ms] as [string, Milestone[]])
          .catch(() => [p.id, []] as [string, Milestone[]])
      )),
      Promise.all(projects.map(p =>
        getActivityTasks(p.id)
          .then(ts => [p.id, ts] as [string, ActivityTask[]])
          .catch(() => [p.id, []] as [string, ActivityTask[]])
      )),
      Promise.all(projects.map(p =>
        getTestDocuments({ project_id: p.id, doc_type: 'BUG_REPORT', size: 100 })
          .then(r => [p.id, r.data] as [string, TestDocument[]])
          .catch(() => [p.id, []] as [string, TestDocument[]])
      )),
    ]).then(([msPairs, taskPairs, bugPairs]) => {
      setMilesMap(Object.fromEntries(msPairs))
      setTasksMap(Object.fromEntries(taskPairs))
      setBugsMap(Object.fromEntries(bugPairs))
    }).catch(() => addToast('Lỗi tải dữ liệu Delivery', 'error'))
      .finally(() => setLoadingData(false))
  }, [projects.length])

  // Aggregate KPIs
  const allMiles  = Object.values(milesMap).flat()
  const allTasks  = Object.values(tasksMap).flat()
  const allBugs   = Object.values(bugsMap).flat()
  const completedMs = allMiles.filter(m => m.status === 'completed').length
  const avgProgress = allMiles.length ? Math.round((completedMs / allMiles.length) * 100) : 0
  const openBugs  = allBugs.filter(b => b.status === 'open' || b.status === 'in_progress').length
  const doneTasks = allTasks.filter(t => t.status === 'done').length

  return (
    <div>
      {/* Compact summary line */}
      <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginBottom: 16 }}>
        Avg progress: {avgProgress}% · {doneTasks}/{allTasks.length} tasks done · {openBugs} open bugs · {completedMs}/{allMiles.length} milestones
      </div>

      {(loading || loadingData) && (
        <div style={{ fontSize: 12, color: 'var(--app-neutral-400)', marginBottom: 12 }}>Đang tải dữ liệu...</div>
      )}

      {/* Delivery table */}
      <div style={{ overflowX: 'auto', border: '1px solid var(--app-neutral-200)', borderRadius: 10 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
          <thead>
            <tr style={{ background: 'var(--app-neutral-50)', borderBottom: '2px solid var(--app-neutral-200)' }}>
              <th style={thStyle}>Project</th>
              <th style={thStyle}>Sprint Progress</th>
              <th style={thStyle}>BA Workload</th>
              <th style={thStyle}>Defects</th>
              <th style={thStyle}>Change Requests</th>
              <th style={thStyle}>Health</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(p => {
              const miles = milesMap[p.id] ?? []
              const tasks = tasksMap[p.id] ?? []
              const bugs  = bugsMap[p.id] ?? []

              const total     = miles.length
              const completed = miles.filter(m => m.status === 'completed').length
              const inProg    = miles.filter(m => m.status === 'in_progress').length
              const pct       = total ? Math.round((completed / total) * 100) : 0

              const taskDone   = tasks.filter(t => t.status === 'done').length
              const taskTotal  = tasks.length
              const taskInProg = tasks.filter(t => t.status === 'in_progress').length

              const openBugsP  = bugs.filter(b => b.status === 'open' || b.status === 'in_progress').length
              const resolvedB  = bugs.filter(b => b.status === 'resolved' || b.status === 'closed').length

              // CRs: approximated as archived BA docs (re-created → CR trend)
              const crCount = 0  // placeholder — no dedicated CR table yet

              // Health: simple traffic light
              const health = openBugsP > 3 ? 'At Risk' : pct >= 80 ? 'On Track' : inProg > 0 ? 'In Progress' : 'Planned'
              const healthColor = health === 'At Risk' ? '#dc2626' : health === 'On Track' ? '#16a34a' : health === 'In Progress' ? '#d97706' : '#9ca3af'

              return (
                <tr key={p.id} style={{ borderBottom: '1px solid var(--app-neutral-100)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--app-neutral-50)')}
                  onMouseLeave={e => (e.currentTarget.style.background = '')}
                >
                  <td style={{ padding: '10px 12px' }}>
                    <div style={{ fontWeight: 700, color: 'var(--app-neutral-800)', fontSize: 12 }}>{p.code}</div>
                    <div style={{ fontSize: 10, color: 'var(--app-neutral-400)' }}>{p.domain_code}</div>
                  </td>
                  <td style={{ padding: '10px 12px', minWidth: 160 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <ProgressBar pct={pct} color={pct >= 80 ? '#16a34a' : pct >= 40 ? '#d97706' : 'var(--app-primary)'} />
                      <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--app-neutral-700)', minWidth: 32 }}>{pct}%</span>
                    </div>
                    <div style={{ fontSize: 10, color: 'var(--app-neutral-400)' }}>
                      {completed}/{total} phases · {inProg > 0 ? `${inProg} in progress` : ''}
                    </div>
                  </td>
                  <td style={{ padding: '10px 12px' }}>
                    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                      {taskDone > 0 && (
                        <span style={{ fontSize: 10, padding: '1px 6px', borderRadius: 8, background: '#dcfce7', color: '#16a34a', fontWeight: 700 }}>
                           {taskDone} done
                        </span>
                      )}
                      {taskInProg > 0 && (
                        <span style={{ fontSize: 10, padding: '1px 6px', borderRadius: 8, background: '#fef3c7', color: '#d97706', fontWeight: 700 }}>
                          ● {taskInProg} active
                        </span>
                      )}
                      {taskTotal - taskDone - taskInProg > 0 && (
                        <span style={{ fontSize: 10, padding: '1px 6px', borderRadius: 8, background: 'var(--app-neutral-100)', color: 'var(--app-neutral-500)', fontWeight: 700 }}>
                          ○ {taskTotal - taskDone - taskInProg} pending
                        </span>
                      )}
                      {taskTotal === 0 && <span style={{ fontSize: 10, color: 'var(--app-neutral-300)' }}>—</span>}
                    </div>
                    {taskTotal > 0 && (
                      <div style={{ marginTop: 4 }}>
                        <ProgressBar pct={taskTotal ? (taskDone / taskTotal) * 100 : 0} color="#7c3aed" />
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '10px 12px' }}>
                    {bugs.length === 0 ? (
                      <span style={{ fontSize: 11, color: 'var(--app-neutral-300)' }}>0</span>
                    ) : (
                      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                        {openBugsP > 0 && (
                          <span style={{ fontSize: 10, padding: '1px 6px', borderRadius: 8, background: '#fee2e2', color: '#dc2626', fontWeight: 700 }}>
                             {openBugsP} open
                          </span>
                        )}
                        {resolvedB > 0 && (
                          <span style={{ fontSize: 10, padding: '1px 6px', borderRadius: 8, background: '#dcfce7', color: '#16a34a', fontWeight: 700 }}>
                             {resolvedB} resolved
                          </span>
                        )}
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '10px 12px', textAlign: 'center', fontSize: 12, color: 'var(--app-neutral-500)' }}>
                    {crCount > 0 ? (
                      <span style={{ fontWeight: 700, color: '#d97706' }}>{crCount}</span>
                    ) : (
                      <span style={{ color: 'var(--app-neutral-300)' }}>—</span>
                    )}
                  </td>
                  <td style={{ padding: '10px 12px' }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, color: healthColor,
                      background: healthColor + '18', padding: '2px 8px', borderRadius: 8,
                    }}>
                      {health}
                    </span>
                  </td>
                </tr>
              )
            })}
            {!loading && !loadingData && projects.length === 0 && (
              <tr><td colSpan={6} style={{ padding: '32px', textAlign: 'center', color: 'var(--app-neutral-400)' }}>Không có dữ liệu</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ─── shared th style ──────────────────────────────────────────────
const thStyle: React.CSSProperties = {
  padding: '10px 12px', textAlign: 'left', fontWeight: 700,
  fontSize: 12, color: 'var(--app-neutral-600)', whiteSpace: 'nowrap',
}

// ══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ══════════════════════════════════════════════════════════════════
import { RequirementsTab } from './RequirementsTab'
import { DocumentsTab } from './DocumentsTab'

type ExtendedBaTab = BaTab | 'requirements' | 'documents'

const TABS: { key: ExtendedBaTab; label: string; icon: string; sub: string }[] = [
  { key: 'requirements', icon: '', label: 'Requirements', sub: 'Transform Raw Requirements → Documents' },
  { key: 'documents',    icon: '', label: 'Documents',    sub: 'Document Hub · Duyệt tài liệu · State machine: draft → review → approved' },
  { key: 'business', icon: '', label: 'Business',  sub: 'Project list · Business value · Stakeholder · Priority' },
  { key: 'solution', icon: '', label: 'Solution',  sub: 'Requirement status · Data mapping · API integration · Complexity' },
  { key: 'delivery', icon: '', label: 'Delivery',  sub: 'Sprint progress · BA workload · Defects · Change requests' },
]

export default function BAWorkflowPage() {
  const { addToast } = useStore()
  const [activeTab, setActiveTab] = useState<ExtendedBaTab>('requirements')
  const [projects,  setProjects]  = useState<Project[]>([])
  const [domains,   setDomains]   = useState<ProjectDomain[]>([])
  const [loading,   setLoading]   = useState(true)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const [prjs, doms] = await Promise.all([
        getProjects({ all_years: true }),
        getProjectDomains(),
      ])
      setProjects(prjs.filter(p => p.status !== 'archived'))
      setDomains(doms)
    } catch (e: unknown) {
      addToast((e as Error).message, 'error')
    } finally {
      setLoading(false)
    }
  }, [addToast])

  useEffect(() => { load() }, [load])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <span style={{ fontSize: 13, color: 'var(--app-neutral-500)' }}>
          {projects.length} dự án đang theo dõi · {domains.length} domain
        </span>
        <Btn variant="ghost" size="sm" onClick={load} title="Refresh">
          <RefreshCw size={13} />
        </Btn>
      </div>

      {/* Tab bar */}
      <div style={{ display: 'flex', gap: 2, borderBottom: '2px solid var(--app-neutral-200)', marginBottom: 20, flexShrink: 0, overflowX: 'auto' }}>
        {TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            style={{
              padding: '10px 20px', border: 'none',
              borderBottom: activeTab === tab.key ? '2px solid var(--app-primary)' : '2px solid transparent',
              marginBottom: -2, background: 'transparent', cursor: 'pointer',
              fontFamily: 'var(--font)', fontWeight: activeTab === tab.key ? 700 : 400,
              fontSize: 14, color: activeTab === tab.key ? 'var(--app-primary)' : 'var(--app-neutral-600)',
              transition: 'all 0.15s', whiteSpace: 'nowrap', textAlign: 'left',
            }}
          >
            <span style={{ marginRight: 6 }}>{tab.icon}</span>{tab.label}
            {activeTab === tab.key && (
              <div style={{ fontSize: 11, fontWeight: 400, color: 'var(--app-neutral-400)', marginTop: 2 }}>{tab.sub}</div>
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ flex: 1, overflow: 'auto' }}>
        {activeTab === 'requirements' && (
          <RequirementsTab />
        )}
        {activeTab === 'documents' && (
          <DocumentsTab />
        )}
        {activeTab === 'business' && (
          <BusinessTab projects={projects} domains={domains} loading={loading} />
        )}
        {activeTab === 'solution' && (
          <SolutionTab projects={projects} loading={loading} />
        )}
        {activeTab === 'delivery' && (
          <DeliveryTab projects={projects} loading={loading} />
        )}
      </div>
    </div>
  )
}
