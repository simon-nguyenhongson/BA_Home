/**
 * ProjectCRTab — CR management scoped to one project.
 * CRs created in the global Requests module (same project_id) appear here automatically.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  X } from 'lucide-react'
import {
  crApi,
  type ChangeRequest,
  type CRCreate,
  type CRChangeType,
  type CRStatus,
  type Priority,
  type RequestHistoryEntry,
} from '../../api/requests'
import { useStore } from '../../stores/auth'
import { FilterBar, applyTextFilter, applyDateFilter } from '../../components/FilterBar'
import { CrDetailPanel } from '../../features/cr/CrDetailPanel'
import { FileQueueSection } from '../../components/FileQueueSection'
import { createTodo, type TodoType } from '../../api/todos'
import { UserSelect } from '../../components/UserSelect'
import { getProducts, type CatalogProduct } from '../../api/catalog'
import {
  CR_CHANGE_TYPE_LABELS as CHANGE_TYPE_LABELS,
  CR_STATUS_LABELS as STATUS_LABELS,
  CR_STATUS_TABS as STATUS_TABS,
  CR_PRIORITY_LABELS as PRIORITY_LABELS,
  CR_FLOW as FLOW,
  TODO_TYPE_LABELS,
} from '../../features/cr/constants'

function addWorkingDays(days: number, from = new Date()): string {
  const d = new Date(from)
  let added = 0
  while (added < days) {
    d.setDate(d.getDate() + 1)
    const dow = d.getDay()
    if (dow !== 0 && dow !== 6) added++
  }
  return d.toISOString().slice(0, 10)
}

// ── Label maps ────────────────────────────────────────────────────
const STATUS_CSS: Record<CRStatus, string> = {
  submitted:    'bg-gray-100 text-gray-600',
  reviewing:    'bg-yellow-50 text-yellow-700',
  approved:     'bg-blue-50 text-blue-700',
  rejected:     'bg-red-50 text-red-600',
  implementing: 'bg-orange-50 text-orange-700',
  implemented:  'bg-green-50 text-green-700',
  cancelled:    'bg-gray-100 text-gray-400',
}
const PRIORITY_CSS: Record<Priority, string> = {
  critical: 'bg-red-100 text-red-700',
  high:     'bg-orange-100 text-orange-700',
  medium:   'bg-yellow-100 text-yellow-700',
  low:      'bg-gray-100 text-gray-500',
}
const PRIORITY_BORDER: Record<Priority, string> = {
  critical: '#ef4444', high: '#f97316', medium: '#eab308', low: '#9ca3af',
}

// ── Error banner ──────────────────────────────────────────────────
function ErrorBanner({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div style={{
      padding: '8px 14px', borderRadius: 8,
      background: '#fee2e2', border: '1px solid #fca5a5',
      display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: '#b91c1c',
    }}>
      <span style={{ flex: 1 }}>{message}</span>
      <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#b91c1c', fontSize: 16 }}></button>
    </div>
  )
}

// ── CR flow progress bar ─────────────────────────────────────────
// ── CR Form (create / edit) ──────────────────────────────────────
function blankForm(projectId: string, username: string | null): CRCreate {
  return {
    // product_id là quyền sở hữu CR (V052) — người dùng phải chọn trước khi lưu
    product_id:   '',
    project_id:   projectId,
    title:        '',
    change_type:  'process',
    priority:     'medium',
    requested_by: username ?? '',
    target_date:  addWorkingDays(14),
  }
}

function CRFormModal({
  projectId, projectLabel,
  initial, mode,
  onClose, onSaved,
}: {
  projectId: string
  projectLabel: string
  initial?: ChangeRequest | null
  mode: 'create' | 'edit'
  onClose: () => void
  onSaved: (cr: ChangeRequest) => void
}) {
  const { username } = useStore()
  const [form, setForm] = useState<CRCreate>(() =>
    initial
      ? {
          product_id:    initial.product_id ?? '',
          project_id:    projectId,
          title:         initial.title,
          description:   initial.description,
          change_type:   initial.change_type,
          priority:      initial.priority,
          impact_scope:  initial.impact_scope,
          impact_effort: initial.impact_effort,
          requested_by:  initial.requested_by,
          assigned_to:   initial.assigned_to,
          target_date:   initial.target_date,
          notes:         initial.notes,
        }
      : blankForm(projectId, username),
  )
  const [saving, setSaving]           = useState(false)
  const [error,  setError]            = useState<string | null>(null)
  const [queuedFiles, setQueuedFiles] = useState<File[]>([])
  const [products, setProducts]       = useState<CatalogProduct[]>([])

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError('Không tải được danh mục sản phẩm — kiểm tra kết nối rồi thử lại'))
  }, [])

  const set = <K extends keyof CRCreate>(k: K, v: CRCreate[K]) =>
    setForm(f => ({ ...f, [k]: v }))

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.title.trim() || !form.requested_by.trim()) {
      setError('Vui lòng điền Tiêu đề và Người yêu cầu'); return
    }
    if (!form.product_id) {
      setError('Vui lòng chọn Sản phẩm bị tác động — CR thuộc về sản phẩm, '
        + 'và AI cần Master Doc của sản phẩm đó để sinh BRS'); return
    }
    setSaving(true); setError(null)
    try {
      let result: ChangeRequest
      if (mode === 'edit' && initial) {
        await crApi.update(initial.id, form)
        result = await crApi.get(initial.id)
      } else {
        result = await crApi.create(form)
        for (const file of queuedFiles) {
          try { await crApi.uploadAttachment(result.id, file) } catch (_) {}
        }
      }
      onSaved(result)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)',
        zIndex: 1100, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff', borderRadius: 14,
          width: 640, maxWidth: '96vw', maxHeight: '90vh',
          display: 'flex', flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '16px 24px', borderBottom: '1px solid var(--app-neutral-200)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0,
        }}>
          <span style={{ fontSize: 15, fontWeight: 700 }}>
            {mode === 'edit' ? 'Chỉnh sửa CR' : 'Tạo Project Change Request'}
          </span>
          <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={submit} style={{ flex: 1, overflowY: 'auto', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Sản phẩm — quyền sở hữu CR, bắt buộc */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">
              Sản phẩm bị tác động <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <select
              className="w-full border rounded px-3 py-2 text-sm"
              value={form.product_id}
              onChange={e => set('product_id', e.target.value)}
            >
              <option value="">— Chọn sản phẩm —</option>
              {products.map(pr => (
                <option key={pr.id} value={pr.id}>{pr.product_code} — {pr.product_name}</option>
              ))}
            </select>
            <div className="text-xs text-gray-400 mt-1">
              CR thuộc về sản phẩm và sống cùng sản phẩm. Master Doc của sản phẩm là bối cảnh
              AS-IS để AI sinh BRS.
            </div>
          </div>

          {/* Dự án tài trợ — chỉ để quy kết nguồn, phục vụ báo cáo theo kỳ */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Dự án tài trợ</label>
            <div className="w-full border border-gray-200 rounded px-3 py-2 text-sm bg-gray-50 text-gray-600">
              {projectLabel}
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">
              Tiêu đề <span style={{ color: '#ef4444' }}>*</span>
            </label>
            <input
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="Mô tả ngắn thay đổi cần thực hiện"
              value={form.title}
              onChange={e => set('title', e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Mô tả chi tiết</label>
            <textarea
              rows={3}
              className="w-full border rounded px-3 py-2 text-sm resize-none"
              placeholder="Bối cảnh, lý do, phạm vi thay đổi..."
              value={form.description ?? ''}
              onChange={e => set('description', e.target.value)}
            />
          </div>

          {/* Row: change_type + priority */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Loại thay đổi</label>
              <select
                className="w-full border rounded px-3 py-2 text-sm"
                value={form.change_type}
                onChange={e => set('change_type', e.target.value as CRChangeType)}
              >
                {(Object.entries(CHANGE_TYPE_LABELS) as [CRChangeType, string][]).map(([v, l]) => (
                  <option key={v} value={v}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Mức ưu tiên</label>
              <select
                className="w-full border rounded px-3 py-2 text-sm"
                value={form.priority}
                onChange={e => set('priority', e.target.value as Priority)}
              >
                {(Object.entries(PRIORITY_LABELS) as [Priority, string][]).map(([v, l]) => (
                  <option key={v} value={v}>{l}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row: requested_by + assigned_to */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label className="block text-xs text-gray-500 mb-1">
                Người yêu cầu <span style={{ color: '#ef4444' }}>*</span>
              </label>
              <UserSelect
                value={form.requested_by}
                onChange={val => set('requested_by', val)}
                placeholder="Chọn nhân sự..."
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Người phụ trách</label>
              <UserSelect
                value={form.assigned_to ?? ''}
                onChange={val => set('assigned_to', val)}
                placeholder="Chọn nhân sự..."
              />
            </div>
          </div>

          {/* Row: target_date + impact_scope */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Ngày mục tiêu</label>
              <input
                type="date"
                className="w-full border rounded px-3 py-2 text-sm"
                value={form.target_date ?? ''}
                onChange={e => set('target_date', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Phạm vi ảnh hưởng</label>
              <input
                className="w-full border rounded px-3 py-2 text-sm"
                placeholder="Ví dụ: Frontend + API"
                value={form.impact_scope ?? ''}
                onChange={e => set('impact_scope', e.target.value)}
              />
            </div>
          </div>

          {/* impact_effort */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Ước tính effort</label>
            <input
              className="w-full border rounded px-3 py-2 text-sm"
              placeholder="Ví dụ: 3 ngày / 1 sprint"
              value={form.impact_effort ?? ''}
              onChange={e => set('impact_effort', e.target.value)}
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs text-gray-500 mb-1">Ghi chú</label>
            <textarea
              rows={2}
              className="w-full border rounded px-3 py-2 text-sm resize-none"
              value={form.notes ?? ''}
              onChange={e => set('notes', e.target.value)}
            />
          </div>

          {/* File attachments — only shown in create mode */}
          {mode === 'create' && (
            <FileQueueSection
              files={queuedFiles}
              onAdd={fl => fl && setQueuedFiles(prev => [...prev, ...Array.from(fl)])}
              onRemove={i => setQueuedFiles(prev => prev.filter((_, idx) => idx !== i))}
            />
          )}

          {error && (
            <div style={{ padding: '8px 12px', background: '#fee2e2', borderRadius: 8, fontSize: 13, color: '#b91c1c' }}>
              {error}
            </div>
          )}

          {/* Footer inside form */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 10, paddingTop: 4 }}>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={saving || !form.title.trim() || !form.requested_by.trim()}
              className="px-4 py-2 text-sm bg-app-blue text-white rounded hover:bg-blue-900 disabled:opacity-50"
            >
              {saving ? 'Đang lưu...' : mode === 'edit' ? 'Lưu thay đổi' : 'Tạo CR'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ── CreateTaskModal (inline, reuses project context) ─────────────
function CreateTaskModal({
  cr, projectId, projectLabel, onClose,
}: {
  cr: ChangeRequest
  projectId: string
  projectLabel: string
  onClose: () => void
}) {
  const [title,    setTitle]    = useState(`[${cr.request_code}] ${cr.title}`)
  const [desc,     setDesc]     = useState('')
  const [taskType, setTaskType] = useState<TodoType>('other')
  const [priority, setPriority] = useState<Priority>(cr.priority)
  const [assignee, setAssignee] = useState(cr.assigned_to ?? '')
  const [dueDate,  setDueDate]  = useState(cr.target_date ?? '')
  const [saving,   setSaving]   = useState(false)
  const [error,    setError]    = useState<string | null>(null)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!title.trim()) { setError('Vui lòng nhập tiêu đề'); return }
    setSaving(true); setError(null)
    try {
      await createTodo({
        title:       title.trim(),
        description: desc || undefined,
        project_id:  projectId,
        task_type:   taskType,
        priority,
        assignee_id: assignee.trim() || undefined,
        due_date:    dueDate || undefined,
        ref_type:    'CR',
        ref_id:      cr.id,
      })
      onClose()
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 1200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#fff', borderRadius: 14, width: 500, maxWidth: '96vw', boxShadow: '0 20px 60px rgba(0,0,0,0.25)', display: 'flex', flexDirection: 'column' }}>

        {/* Header */}
        <div style={{ padding: '14px 20px', borderBottom: '1px solid var(--app-neutral-200)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15 }}>Tạo Task từ CR</div>
            <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginTop: 2 }}>
              <span style={{ fontFamily: 'monospace', fontWeight: 600 }}>{cr.request_code}</span>
              {' · '}{projectLabel}
            </div>
          </div>
          <button type="button" onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}><X size={18} /></button>
        </div>

        {/* Ref badge */}
        <div style={{ margin: '12px 20px 0', padding: '6px 10px', borderRadius: 6, background: '#eff6ff', border: '1px solid #bfdbfe', fontSize: 12, color: '#1d4ed8', display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ fontFamily: 'monospace', fontWeight: 700 }}>{cr.request_code}</span>
          <span style={{ color: '#60a5fa' }}>·</span>
          <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cr.title}</span>
          <span style={{ fontSize: 11, fontWeight: 600, padding: '1px 6px', borderRadius: 8, background: '#bfdbfe', color: '#1e40af' }}>CR</span>
        </div>

        {/* Form */}
        <form onSubmit={submit} style={{ padding: '14px 20px', display: 'flex', flexDirection: 'column', gap: 11 }}>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Tiêu đề <span style={{ color: '#ef4444' }}>*</span></label>
            <input className="w-full border rounded px-3 py-2 text-sm" value={title} onChange={e => setTitle(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Mô tả</label>
            <textarea rows={2} className="w-full border rounded px-3 py-2 text-sm resize-none" value={desc} onChange={e => setDesc(e.target.value)} placeholder="Chi tiết công việc..." />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Loại task</label>
              <select className="w-full border rounded px-3 py-2 text-sm" value={taskType} onChange={e => setTaskType(e.target.value as TodoType)}>
                {(Object.entries(TODO_TYPE_LABELS) as [TodoType, string][]).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Ưu tiên</label>
              <select className="w-full border rounded px-3 py-2 text-sm" value={priority} onChange={e => setPriority(e.target.value as Priority)}>
                <option value="critical">Khẩn cấp</option>
                <option value="high">Cao</option>
                <option value="medium">Trung bình</option>
                <option value="low">Thấp</option>
              </select>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Người thực hiện</label>
              <UserSelect value={assignee} onChange={setAssignee} placeholder="Chọn nhân sự..." />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1">Due date</label>
              <input type="date" className="w-full border rounded px-3 py-2 text-sm" value={dueDate} onChange={e => setDueDate(e.target.value)} />
            </div>
          </div>

          {error && <div style={{ padding: '7px 10px', background: '#fee2e2', borderRadius: 6, fontSize: 13, color: '#b91c1c' }}>{error}</div>}

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, paddingTop: 4 }}>
            <button type="button" onClick={onClose} className="px-4 py-1.5 text-sm border border-gray-300 rounded text-gray-600 hover:bg-gray-50">Hủy</button>
            <button type="submit" disabled={saving || !title.trim()} className="px-4 py-1.5 text-sm bg-app-blue text-white rounded hover:bg-blue-900 disabled:opacity-50">
              {saving ? 'Đang tạo...' : 'Tạo Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// ══════════════════════════════════════════════════════════════════
// ProjectCRTab — main export
// ══════════════════════════════════════════════════════════════════
export default function ProjectCRTab({
  projectId,
  projectLabel,
}: {
  projectId: string
  projectLabel: string
}) {
  const [items, setItems]           = useState<ChangeRequest[]>([])
  const [loading, setLoading]       = useState(true)
  const [pageError, setPageError]   = useState<string | null>(null)
  const [activeTabIdx, setActiveTabIdx] = useState(0)
  const [filterPriority, setFP]     = useState('')
  const [filterType, setFT]         = useState('')
  const [filterText, setFText]      = useState('')
  const [filterFrom, setFFrom]      = useState('')
  const [filterTo,   setFTo]        = useState('')
  const [selected, setSelected]     = useState<ChangeRequest | null>(null)
  const [showCreate, setShowCreate] = useState(false)
  const [showCreateTask, setShowCreateTask] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    setPageError(null)
    try {
      const data = await crApi.list({
        project_id:  projectId,
        priority:    filterPriority || undefined,
        change_type: filterType     || undefined,
      })
      setItems(data)
    } catch (err) {
      setPageError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }, [projectId, filterPriority, filterType])

  useEffect(() => { load() }, [load])

  // Keep selected in sync after reload
  useEffect(() => {
    if (selected) {
      const fresh = items.find(i => i.id === selected.id)
      if (fresh) setSelected(fresh)
    }
  }, [items, selected?.id])

  const tabFilter = STATUS_TABS[activeTabIdx]
  const byTab = tabFilter.values
    ? items.filter(p => tabFilter.values!.includes(p.status))
    : items

  const visible = applyDateFilter(
    applyTextFilter(byTab, filterText, ['title', 'request_code', 'requested_by'] as (keyof ChangeRequest)[]),
    'created_at', filterFrom, filterTo,
  )

  function clearFilters() {
    setFText(''); setFFrom(''); setFTo('')
    setFP(''); setFT('')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>

      {/* Info banner — "input từ Module Request" */}
      <div style={{
        padding: '8px 14px', borderRadius: 8,
        background: '#eff6ff', border: '1px solid #bfdbfe',
        display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: '#1d4ed8',
      }}>
        <span style={{ fontSize: 15 }}>ℹ</span>
        <span style={{ flex: 1 }}>
          CR tạo từ <strong>Module Requests</strong> với cùng dự án này sẽ tự động hiển thị ở đây.
          Bạn cũng có thể tạo CR trực tiếp tại tab này.
        </span>
        <a
          href="/requests"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#1d4ed8', fontWeight: 600, whiteSpace: 'nowrap', textDecoration: 'none' }}
        >
          Module Requests →
        </a>
      </div>

      {/* Error banner */}
      {pageError && <ErrorBanner message={pageError} onClose={() => setPageError(null)} />}

      {/* Status tabs */}
      <div style={{
        display: 'flex', gap: 0, overflowX: 'auto', overflowY: 'hidden',
        borderBottom: '2px solid var(--app-neutral-200)',
        flexShrink: 0,
      }}>
        {STATUS_TABS.map((tab, idx) => {
          const count = tab.values
            ? items.filter(p => tab.values!.includes(p.status)).length
            : items.length
          const active = activeTabIdx === idx
          return (
            <button
              key={idx}
              onClick={() => { setActiveTabIdx(idx); setSelected(null) }}
              style={{
                padding: '7px 14px', border: 'none', background: 'transparent',
                cursor: 'pointer', whiteSpace: 'nowrap', fontFamily: 'var(--font)',
                fontSize: 13, fontWeight: active ? 700 : 400,
                color: active ? 'var(--app-primary)' : 'var(--app-neutral-600)',
                borderBottom: active ? '2px solid var(--app-primary)' : '2px solid transparent',
                marginBottom: -2, transition: 'all 0.15s',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              {tab.label}
              {count > 0 && (
                <span style={{
                  fontSize: 11, fontWeight: 700, padding: '1px 6px', borderRadius: 10,
                  background: active ? 'var(--app-primary)' : 'var(--app-neutral-200)',
                  color: active ? '#fff' : 'var(--app-neutral-600)',
                }}>
                  {count}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Filter bar (no status select — handled by tabs above) */}
      <FilterBar
        text={{ value: filterText, onChange: setFText, placeholder: 'Tìm code / tiêu đề / người yêu cầu...' }}
        selects={[
          { key: 'priority', value: filterPriority, onChange: setFP, placeholder: 'Tất cả ưu tiên',
            options: (Object.entries(PRIORITY_LABELS) as [Priority, string][]).map(([v, l]) => ({ value: v, label: l })) },
          { key: 'type', value: filterType, onChange: setFT, placeholder: 'Tất cả loại',
            options: (Object.entries(CHANGE_TYPE_LABELS) as [CRChangeType, string][]).map(([v, l]) => ({ value: v, label: l })) },
        ]}
        dateFrom={{ value: filterFrom, onChange: setFFrom, label: 'Từ ngày' }}
        dateTo={{ value: filterTo, onChange: setFTo }}
        onClear={clearFilters}
        right={
          <button
            type="button"
            className="bg-app-blue text-white px-3 py-1.5 rounded text-xs font-medium"
            onClick={() => setShowCreate(true)}
          >
            + Tạo CR
          </button>
        }
      />

      {/* Two-panel body */}
      <div style={{ display: 'flex', gap: 16, flex: 1, minHeight: 0 }}>

        {/* List */}
        <div style={{ flex: 2, minWidth: 0, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {loading && (
            <div style={{ padding: 20, color: 'var(--app-neutral-400)', fontSize: 13 }}>Đang tải...</div>
          )}
          {!loading && visible.length === 0 && (
            <div style={{
              padding: 32, textAlign: 'center',
              color: 'var(--app-neutral-400)', fontSize: 13,
              background: '#fff', borderRadius: 12, border: '1px solid var(--app-neutral-200)',
            }}>
              {items.length === 0 ? 'Chưa có Change Request nào cho dự án này' : 'Không tìm thấy kết quả'}
            </div>
          )}
          {visible.map(cr => (
            <div
              key={cr.id}
              onClick={() => setSelected(cr)}
              style={{
                background: '#fff', borderRadius: 10,
                // Longhand cả 4 cạnh: trộn shorthand `border` với `borderLeft` làm React
                // cảnh báo "Updating a style property during rerender" mỗi lần chọn dòng
                borderTopStyle: 'solid', borderRightStyle: 'solid',
                borderBottomStyle: 'solid', borderLeftStyle: 'solid',
                borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderLeftWidth: 4,
                borderTopColor:    selected?.id === cr.id ? 'var(--app-primary)' : 'var(--app-neutral-200)',
                borderRightColor:  selected?.id === cr.id ? 'var(--app-primary)' : 'var(--app-neutral-200)',
                borderBottomColor: selected?.id === cr.id ? 'var(--app-primary)' : 'var(--app-neutral-200)',
                borderLeftColor:   PRIORITY_BORDER[cr.priority],
                padding: '10px 14px', cursor: 'pointer',
                boxShadow: selected?.id === cr.id ? '0 0 0 2px rgba(37,99,235,0.15)' : 'none',
                transition: 'all 0.1s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 4 }}>
                <span style={{ fontFamily: 'monospace', fontSize: 11, color: 'var(--app-neutral-500)' }}>
                  {cr.request_code}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${STATUS_CSS[cr.status]}`}>
                  {STATUS_LABELS[cr.status]}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${PRIORITY_CSS[cr.priority]}`}>
                  {PRIORITY_LABELS[cr.priority]}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-500">
                  {CHANGE_TYPE_LABELS[cr.change_type]}
                </span>
              </div>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--app-neutral-800)', marginBottom: 2 }}>
                {cr.title}
              </div>
              {cr.description && (
                <div style={{
                  fontSize: 12, color: 'var(--app-neutral-500)',
                  overflow: 'hidden', display: '-webkit-box',
                  WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                }}>
                  {cr.description}
                </div>
              )}
              <div style={{ display: 'flex', gap: 12, marginTop: 6, fontSize: 11, color: 'var(--app-neutral-400)' }}>
                <span>Yêu cầu: <span style={{ color: 'var(--app-neutral-600)' }}>{cr.requested_by}</span></span>
                {cr.assigned_to && (
                  <span>Phụ trách: <span style={{ color: 'var(--app-neutral-600)' }}>{cr.assigned_to}</span></span>
                )}
                {cr.target_date && (
                  <span>Mục tiêu: <span style={{ color: 'var(--app-neutral-600)' }}>{cr.target_date}</span></span>
                )}
                <span style={{ marginLeft: 'auto' }}>
                  {new Date(cr.created_at).toLocaleDateString('vi-VN')}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Detail panel — dùng chung với trang Requests (features/cr/CrDetailPanel) */}
        {selected && (
          <div style={{ flex: 3, minWidth: 0, overflowY: 'auto' }}>
            <CrDetailPanel
              cr={selected}
              lockProjectId={projectId}
              onClose={() => setSelected(null)}
              onChanged={fresh => { setSelected(fresh); load() }}
              onDeleted={() => { setSelected(null); load() }}
              onCreateTask={() => setShowCreateTask(true)}
            />
          </div>
        )}

        {/* Create task modal */}
        {showCreateTask && selected && (
          <CreateTaskModal
            cr={selected}
            projectId={projectId}
            projectLabel={projectLabel}
            onClose={() => setShowCreateTask(false)}
          />
        )}
      </div>

      {/* Create modal */}
      {showCreate && (
        <CRFormModal
          projectId={projectId}
          projectLabel={projectLabel}
          mode="create"
          onClose={() => setShowCreate(false)}
          onSaved={() => { setShowCreate(false); load() }}
        />
      )}

    </div>
  )
}
