/**
 * DocumentsTab — Document Hub with approval workflow (v2 API)
 * State machine: draft → in_review → approved → archived (FR-009, BR-001)
 * Auto-push on approve: BRS → Test Platform; all types → PPG (FR-011)
 * Uses ba_documents table (v2) via /api/v1/documents endpoint
 */

import React, { useState, useEffect, useCallback } from 'react'
import {
  Plus, Send, CheckCircle, RotateCcw, Archive, ArrowRight, RefreshCw, Trash2
} from 'lucide-react'
import {
  Btn, Modal, Drawer, Field, AppInput, AppTextarea, AppSelect, StatusBadge, EmptyState,
} from '../../components/ui'
import {
  getBADocuments, createBADocument, transitionBADocumentStatus, deleteBADocument
} from '../../lib/api/workflow-docs'
import type {
  BADocument, BADocType, BADocStatus,
} from '../../lib/types/workflow-doc'
import { getProjects, type Project } from '../../api/ppg'
import { useStore } from '../../stores/auth'

// ── Colors per doc type ──────────────────────────────────────────
const DOC_COLORS: Record<string, string> = {
  BRD: 'var(--app-primary)', BRS: 'var(--app-success)', FSD: '#0891b2',
  ERD: 'var(--app-warning)', API_SPEC: '#6B21A8', DATA_DICT: '#4f46e5',
  WIREFRAME: '#be185d', PROCESS_FLOW: '#059669', MASTER_DOC: '#b91c1c'
}

// ── State machine visual bar ─────────────────────────────────────
const STATUS_STEPS: { key: string; label: string }[] = [
  { key: 'draft', label: 'Draft' },
  { key: 'in_review', label: 'Review' },
  { key: 'approved', label: 'Approved' },
  { key: 'archived', label: 'Archived' },
]
// Also handle legacy "review" status → treat as "in_review"
function normalizeStatus(s: string): string {
  return s === 'review' ? 'in_review' : s
}

function StateMachineBar({ status }: { status: string }) {
  const normalized = normalizeStatus(status)
  const idx = STATUS_STEPS.findIndex(s => s.key === normalized)
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 16 }}>
      {STATUS_STEPS.map((s, i) => (
        <React.Fragment key={s.key}>
          <div style={{
            padding: '4px 10px', borderRadius: 12, fontSize: 11, fontWeight: 700,
            background: i <= idx ? (i === idx ? 'var(--app-primary)' : 'var(--app-success)') : 'var(--app-neutral-200)',
            color: i <= idx ? '#fff' : 'var(--app-neutral-500)',
          }}>{i < idx ? '✓ ' : ''}{s.label}</div>
          {i < STATUS_STEPS.length - 1 && (
            <div style={{ flex: 1, height: 2, background: i < idx ? 'var(--app-success)' : 'var(--app-neutral-200)', minWidth: 16 }} />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

// ── Create Document Modal ────────────────────────────────────────
const DOC_TYPE_OPTIONS: { value: BADocType; label: string }[] = [
  { value: 'MASTER_DOC', label: 'DocMaster (Hệ thống AS-IS)' },
  { value: 'BRD', label: 'BRD — Business Requirements' },
  { value: 'BRS', label: 'BRS — Business Rules Spec' },
  { value: 'FSD', label: 'FSD — Functional Spec' },
  { value: 'ERD', label: 'ERD — Entity Relationship' },
  { value: 'API_SPEC', label: 'API Specification' },
  { value: 'DATA_DICT', label: 'Data Dictionary' },
  { value: 'WIREFRAME', label: 'Wireframe' },
  { value: 'PROCESS_FLOW', label: 'Process Flow' },
]

function CreateDocumentModal({ open, onClose, onSaved, projects }: {
  open: boolean; onClose: () => void; onSaved: () => void; projects: Project[]
}) {
  const { addToast } = useStore()
  const [form, setForm] = useState({
    project_id: '', doc_type: 'BRD' as BADocType,
    title: '', content: '',
  })
  const [saving, setSaving] = useState(false)

  const s = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const submit = async () => {
    if (!form.title) return addToast('Cần nhập tiêu đề', 'warn')
    if (!form.project_id) return addToast('Cần chọn dự án', 'warn')
    setSaving(true)
    try {
      await createBADocument({
        project_id: form.project_id,
        doc_type: form.doc_type,
        title: form.title,
        content: form.content || undefined,
      })
      addToast('Đã tạo document', 'success')
      setForm({ project_id: '', doc_type: 'BRD', title: '', content: '' })
      onSaved(); onClose()
    } catch (e: unknown) { addToast((e as Error).message, 'error') }
    finally { setSaving(false) }
  }

  return (
    <Modal title="Tạo Document Mới" open={open} onClose={onClose} width="640px">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <Field label="Dự án" required>
          <AppSelect value={form.project_id} onChange={s('project_id')}>
            <option value="">Chọn dự án...</option>
            {projects.map(p => (
              <option key={p.id} value={p.id}>{p.code} — {p.name}</option>
            ))}
          </AppSelect>
        </Field>
        <Field label="Loại Document" required>
          <AppSelect value={form.doc_type} onChange={s('doc_type')}>
            {DOC_TYPE_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </AppSelect>
        </Field>
      </div>
      <div style={{ marginTop: 16 }}>
        <Field label="Tiêu đề" required>
          <AppInput value={form.title} onChange={s('title')} placeholder="Tên document" />
        </Field>
      </div>
      <div style={{ marginTop: 16 }}>
        <Field label="Nội dung">
          <AppTextarea value={form.content} onChange={s('content')} rows={6}
            placeholder="Nội dung tài liệu..." />
        </Field>
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
        <Btn onClick={submit} loading={saving} style={{ flex: 1, justifyContent: 'center' }}>Tạo Document</Btn>
        <Btn variant="ghost" onClick={onClose} style={{ flex: 1, justifyContent: 'center' }}>Hủy</Btn>
      </div>
    </Modal>
  )
}

// ── Document Detail Modal (with approval actions) ────────────────
function DocumentDetailModal({ doc, open, onClose, onUpdated, projects }: {
  doc: BADocument; open: boolean; onClose: () => void; onUpdated: () => void; projects: Project[]
}) {
  const { addToast } = useStore()
  const [acting, setActing] = useState(false)

  const normalized = normalizeStatus(doc.status)

  const action = async (act: string) => {
    setActing(true)
    try {
      await transitionBADocumentStatus(doc.id, { action: act as any })
      const newStatus = act === 'submit_review' ? 'in_review' : act === 'approve' ? 'approved' : act === 'reject' ? 'draft' : 'archived'
      addToast(`Chuyển trạng thái → ${newStatus}`, 'success')
      if (act === 'approve') addToast('Document đã được push sang PPG & Test Platform (nếu BRS)', 'info')
      onUpdated(); onClose()
    } catch (e: unknown) { addToast((e as Error).message, 'error') }
    finally { setActing(false) }
  }

  const project = projects.find(p => p.id === doc.project_id)

  return (
    <Drawer title={`${doc.doc_type} — ${doc.title}`} open={open} onClose={onClose} width="700px">
      <StateMachineBar status={doc.status} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
        <div className="card card-pad-sm">
          <div className="app-label">Loại</div>
          <div style={{ display: 'inline-flex', padding: '2px 10px', borderRadius: 12, fontSize: 12, fontWeight: 700, background: DOC_COLORS[doc.doc_type] || 'var(--app-primary)', color: '#fff', marginTop: 4 }}>
            {doc.doc_type}
          </div>
        </div>
        <div className="card card-pad-sm">
          <div className="app-label">Version</div>
          <div className="txt_mono" style={{ marginTop: 4 }}>{doc.version}</div>
        </div>
        <div className="card card-pad-sm">
          <div className="app-label">Dự án</div>
          <div style={{ marginTop: 4, fontSize: 12 }}>{project ? project.code : doc.project_id?.slice(0, 8)}</div>
        </div>
        <div className="card card-pad-sm">
          <div className="app-label">Approved by</div>
          <div style={{ marginTop: 4, fontSize: 13 }}>{doc.approved_by || '—'}</div>
        </div>
      </div>

      {!!doc.content && (
        <div className="card card-pad-sm" style={{ marginBottom: 16 }}>
          <div className="app-label" style={{ marginBottom: 8 }}>Nội dung</div>
          <pre style={{ fontFamily: 'var(--font-mono)', fontSize: 12, whiteSpace: 'pre-wrap', maxHeight: 250, overflowY: 'auto', color: 'var(--app-neutral-700)' }}>
            {typeof doc.content === 'string' ? doc.content : JSON.stringify(doc.content, null, 2)}
          </pre>
        </div>
      )}

      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        {normalized === 'draft' && (
          <Btn variant="primary" loading={acting} onClick={() => action('submit_review')}>
            <Send size={14} /> Gửi Review
          </Btn>
        )}
        {normalized === 'in_review' && (
          <>
            <Btn variant="primary" loading={acting} onClick={() => action('approve')}>
              <CheckCircle size={14} /> Phê duyệt
            </Btn>
            <Btn variant="danger" loading={acting} onClick={() => action('reject')}>
              <RotateCcw size={14} /> Từ chối
            </Btn>
          </>
        )}
        {normalized === 'approved' && (
          <Btn variant="ghost" loading={acting} onClick={() => action('archive')}>
            <Archive size={14} /> Archive
          </Btn>
        )}
        <Btn variant="ghost" onClick={onClose}>Đóng</Btn>
        <div style={{ flex: 1 }} />
        <Btn variant="danger" loading={acting} onClick={async () => {
          if (!confirm('Bạn có chắc chắn muốn xóa tài liệu này? Hành động này không thể hoàn tác.')) return
          setActing(true)
          try {
            await deleteBADocument(doc.id)
            addToast('Đã xóa tài liệu', 'success')
            onUpdated(); onClose()
          } catch (e: unknown) { addToast((e as Error).message, 'error') }
          finally { setActing(false) }
        }}>
          <Trash2 size={14} /> Xóa
        </Btn>
      </div>
    </Drawer>
  )
}

// ══════════════════════════════════════════════════════════════════
// MAIN EXPORT — DocumentsTab
// ══════════════════════════════════════════════════════════════════
export function DocumentsTab() {
  const { addToast } = useStore()
  const [documents, setDocuments] = useState<BADocument[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(false)
  const [typeFilter, setTypeFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [showCreate, setShowCreate] = useState(false)
  const [selectedDoc, setSelectedDoc] = useState<BADocument | null>(null)

  const loadDocs = useCallback(async () => {
    setLoading(true)
    try {
      const [docsRes, prjs] = await Promise.all([
        getBADocuments({ size: 100 }),
        getProjects({ all_years: true }),
      ])
      setDocuments(docsRes.data)
      setProjects(prjs)
    } catch (e: unknown) { addToast((e as Error).message, 'error') }
    finally { setLoading(false) }
  }, [addToast])

  useEffect(() => { loadDocs() }, [loadDocs])

  const displayDocs = documents.filter(doc =>
    (!typeFilter || doc.doc_type === typeFilter) &&
    (!statusFilter || normalizeStatus(doc.status) === normalizeStatus(statusFilter))
  )

  // KPI counts
  const countByStatus = (s: string) => documents.filter(d => normalizeStatus(d.status) === s).length

  // Unique doc types present
  const docTypes = Array.from(new Set(documents.map(d => d.doc_type)))

  return (
    <div>
      {/* KPI summary */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 16, fontSize: 12, color: 'var(--app-neutral-500)' }}>
        <span>{documents.length} tài liệu</span>
        <span>·</span>
        <span style={{ color: 'var(--app-neutral-600)'}}> {countByStatus('draft')} draft</span>
        <span style={{ color: '#d97706'}}> {countByStatus('in_review')} đang review</span>
        <span style={{ color: '#16a34a'}}> {countByStatus('approved')} approved</span>
        <span style={{ color: '#6b7280'}}> {countByStatus('archived')} archived</span>
      </div>

      {/* Filter bar */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap', alignItems: 'center' }}>
        <button
          onClick={() => setTypeFilter('')}
          style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '5px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font)', fontSize: 13, fontWeight: !typeFilter ? 700 : 400,
            background: !typeFilter ? 'var(--app-primary)' : 'var(--app-neutral-100)',
            color: !typeFilter ? '#fff' : 'var(--app-neutral-600)',
            transition: 'all 0.15s',
          }}
        >
          Tất cả
          <span style={{
            fontSize: 11, fontWeight: 700, minWidth: 18, textAlign: 'center',
            padding: '1px 5px', borderRadius: 10,
            background: !typeFilter ? 'rgba(255,255,255,0.25)' : 'var(--app-neutral-200)',
            color: !typeFilter ? '#fff' : 'var(--app-neutral-500)',
          }}>{documents.length}</span>
        </button>
        {docTypes.map(t => {
          const isActive = typeFilter === t
          const count = documents.filter(d => d.doc_type === t).length
          return (
            <button
              key={t}
              onClick={() => setTypeFilter(isActive ? '' : t)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '5px 12px', borderRadius: 8, border: 'none', cursor: 'pointer',
                fontFamily: 'var(--font)', fontSize: 13, fontWeight: isActive ? 700 : 400,
                background: isActive ? (DOC_COLORS[t] || 'var(--app-primary)') : 'var(--app-neutral-100)',
                color: isActive ? '#fff' : 'var(--app-neutral-600)',
                transition: 'all 0.15s',
              }}
            >
              {t}
              <span style={{
                fontSize: 11, fontWeight: 700, minWidth: 18, textAlign: 'center',
                padding: '1px 5px', borderRadius: 10,
                background: isActive ? 'rgba(255,255,255,0.25)' : 'var(--app-neutral-200)',
                color: isActive ? '#fff' : 'var(--app-neutral-500)',
              }}>{count}</span>
            </button>
          )
        })}
        <div style={{ marginLeft: 12, display: 'flex', gap: 8 }}>
          {[
            { key: '', label: 'Tất cả status' },
            { key: 'draft', label: 'Draft' },
            { key: 'in_review', label: 'Review' },
            { key: 'approved', label: 'Approved' },
          ].map(s => (
            <Btn key={s.key} variant={statusFilter === s.key ? 'secondary' : 'ghost'} size="sm"
              onClick={() => setStatusFilter(s.key)}>
              {s.label}
            </Btn>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <Btn variant="ghost" size="sm" onClick={loadDocs}><RefreshCw size={13} /></Btn>
        <Btn size="sm" onClick={() => setShowCreate(true)}><Plus size={14} /> Tạo Document</Btn>
      </div>

      {/* Document list */}
      {loading ? (
        <div className="empty-state"><div>Đang tải...</div></div>
      ) : displayDocs.length === 0 ? (
        <EmptyState icon=""title="Chưa có document nào"
          desc="Tạo tài liệu mới hoặc thay đổi bộ lọc"
          action={<Btn onClick={() => setShowCreate(true)}><Plus size={14} /> Tạo Document</Btn>} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {displayDocs.map(doc => {
            const project = projects.find(p => p.id === doc.project_id)
            const normalized = normalizeStatus(doc.status)
            return (
              <div key={doc.id} className="card card-pad-sm"
                style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}
                onClick={() => setSelectedDoc(doc)}>
                <div style={{
                  width: 44, height: 44, borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: DOC_COLORS[doc.doc_type] || 'var(--app-primary)', color: '#fff', fontWeight: 700, fontSize: 10, flexShrink: 0,
                  letterSpacing: -0.3,
                }}>{doc.doc_type}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
                    <span className="txt_s_xxs">{doc.title}</span>
                    <StatusBadge status={normalized === 'in_review' ? 'review' : doc.status} />
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>
                    {project ? `${project.code} — ${project.name}` : doc.project_id?.slice(0, 8)}
                    {' · '}{doc.version}
                    {' · '}{doc.created_at ? new Date(doc.created_at).toLocaleDateString('vi-VN') : ''}
                    {doc.approved_by && <span> ·  {doc.approved_by}</span>}
                    {doc.created_by && <span> ·  {doc.created_by}</span>}
                  </div>
                </div>
                <div style={{ color: 'var(--app-neutral-400)' }}><ArrowRight size={16} /></div>
              </div>
            )
          })}
        </div>
      )}

      {/* Modals */}
      <CreateDocumentModal open={showCreate} onClose={() => setShowCreate(false)} onSaved={loadDocs} projects={projects} />
      {selectedDoc && (
        <DocumentDetailModal doc={selectedDoc} open={!!selectedDoc}
          onClose={() => setSelectedDoc(null)} onUpdated={loadDocs} projects={projects} />
      )}
    </div>
  )
}
