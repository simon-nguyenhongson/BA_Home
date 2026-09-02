import React, { useEffect, useMemo, useState } from 'react'
import {
  X, Pencil, Trash2, Plus, Check, AlertTriangle, ArrowRight,
} from 'lucide-react'
import {
  crApi,
  type ChangeRequest, type CRStatus, type RequestHistoryEntry,
} from '../../api/requests'
import { CommentModal } from '../../components/CommentModal'
import { Confirm } from '../../components/Confirm'
import { RequestAttachments } from '../../components/RequestAttachments'
import { RequestHistoryTimeline } from '../../components/RequestHistoryTimeline'
import { BrsPanel } from './BrsPanel'
import { CrEditModal } from './CrEditModal'
import {
  CR_CHANGE_TYPE_LABELS, CR_STATUS_LABELS, CR_PRIORITY_LABELS,
  CR_STATUS_VARIANTS, CR_PRIORITY_VARIANTS,
  CR_FLOW, CR_TERMINAL, CR_REQUIRES_COMMENT, CR_MIN_REASON_LEN,
  CR_TRANSITIONS, CR_TRANSITION_ACTION_LABELS,
} from './constants'

/**
 * CrDetailPanel — khung chi tiết CR dùng chung cho trang Requests và tab CR của dự án.
 *
 * Ba điểm khác bản cũ đáng ghi lại:
 *
 * 1. SỬA ĐƯỢC THÔNG TIN. Bản cũ chỉ có một ô select trạng thái; muốn đổi tiêu đề,
 *    gắn sản phẩm hay sửa ngày mục tiêu thì phải xoá CR và tạo lại — mất luôn mã CR
 *    và lịch sử.
 *
 * 2. THANH TRẠNG THÁI NÓI ĐÚNG SỰ THẬT. Bản cũ tô đậm mọi bước có thứ tự nhỏ hơn
 *    trạng thái hiện tại, nên một CR đi Khởi tạo → Đang review → Đang triển khai
 *    (BỎ QUA bước duyệt) vẫn hiện "Pending" như đã hoàn thành. Với ngân hàng, bước
 *    duyệt là mắt xích kiểm soát: hiển thị đã duyệt khi chưa duyệt là sai nghiêm
 *    trọng. Nay tập bước đã đi qua lấy từ request_history, bước bị bỏ qua hiện
 *    riêng bằng viền gạch màu cảnh báo.
 *
 * 3. CHUYỂN TRẠNG THÁI THEO LUỒNG. Bản cũ cho chọn tự do 7 trạng thái nên nhảy từ
 *    Khởi tạo sang Đã triển khai được, không ai biết. Nay chỉ hiện bước hợp lệ;
 *    muốn đi ngoài luồng thì mở nhánh riêng và BẮT BUỘC nhập lý do — vết giải trình
 *    nằm trong lịch sử CR.
 */

function fmtDateTime(iso: string | null | undefined): string {
  if (!iso) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return String(iso)
  const p = (n: number) => String(n).padStart(2, '0')
  return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}`
}

function fmtDate(iso: string | null | undefined): string {
  if (!iso) return '—'
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return String(iso)
  const p = (n: number) => String(n).padStart(2, '0')
  return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()}`
}

// ── Thanh trạng thái ─────────────────────────────────────────────────────────

type StepState = 'done' | 'current' | 'skipped' | 'pending'

function CrStatusRail({
  status, history,
}: {
  status: CRStatus
  history: RequestHistoryEntry[]
}) {
  /**
   * Bước "đã đi qua" = có mặt ở to_status của một dòng lịch sử, cộng trạng thái
   * hiện tại. KHÔNG suy ra từ thứ tự trong CR_FLOW: chính chỗ đó là lỗi của bản cũ.
   */
  const visited = useMemo(() => {
    const s = new Set<string>(history.map(h => h.to_status ?? '').filter(Boolean))
    s.add(status)
    // 'submitted' là trạng thái lúc tạo — luôn đã đi qua, kể cả khi lịch sử bị mất
    s.add('submitted')
    return s
  }, [history, status])

  const isTerminal = CR_TERMINAL.includes(status) && status !== 'implemented'
  const currentIdx = CR_FLOW.indexOf(status)

  function stateOf(step: CRStatus, idx: number): StepState {
    if (step === status) return 'current'
    if (visited.has(step)) return 'done'
    if (!isTerminal && currentIdx >= 0 && idx < currentIdx) return 'skipped'
    return 'pending'
  }

  const STYLE: Record<StepState, React.CSSProperties> = {
    done: {
      background: 'var(--ds-brand-subtle)', color: 'var(--app-primary)',
      border: '1px solid var(--ds-brand-loading)',
    },
    current: {
      background: 'var(--app-primary)', color: 'var(--app-white)',
      border: '1px solid var(--app-primary)',
      boxShadow: '0 0 0 3px rgba(21,94,239,0.12)',
    },
    skipped: {
      background: 'var(--app-warning-bg)', color: 'var(--app-warning)',
      border: '1px dashed var(--app-warning)',
    },
    pending: {
      background: 'var(--app-white)', color: 'var(--app-neutral-400)',
      border: '1px solid var(--app-neutral-200)',
    },
  }

  const skipped = CR_FLOW.filter((s, i) => stateOf(s, i) === 'skipped')

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        {CR_FLOW.map((step, i) => {
          const st = stateOf(step, i)
          return (
            <React.Fragment key={step}>
              <span
                title={
                  st === 'skipped' ? `Bước "${CR_STATUS_LABELS[step]}" đã bị bỏ qua`
                  : st === 'done'  ? `Đã đi qua "${CR_STATUS_LABELS[step]}"`
                  : st === 'current' ? 'Trạng thái hiện tại'
                  : 'Chưa tới'
                }
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  padding: '2px 9px', borderRadius: 14,
                  fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap',
                  ...STYLE[st],
                }}
              >
                {st === 'done' && <Check size={11} strokeWidth={3} />}
                {st === 'skipped' && <AlertTriangle size={11} />}
                {CR_STATUS_LABELS[step]}
              </span>
              {i < CR_FLOW.length - 1 && (
                <span style={{ color: 'var(--app-neutral-300)', fontSize: 11, padding: '0 1px' }}>›</span>
              )}
            </React.Fragment>
          )
        })}
        {isTerminal && (
          <>
            <span style={{ color: 'var(--app-neutral-300)', fontSize: 11, padding: '0 3px' }}>|</span>
            <span style={{
              padding: '2px 9px', borderRadius: 14, fontSize: 11, fontWeight: 600,
              background: 'var(--app-danger-bg)', color: 'var(--app-danger)',
              border: '1px solid var(--color-error-300)',
            }}>
              {CR_STATUS_LABELS[status]}
            </span>
          </>
        )}
      </div>

      {skipped.length > 0 && (
        <div style={{
          marginTop: 6, fontSize: 11, color: 'var(--app-warning)',
          display: 'flex', alignItems: 'flex-start', gap: 5,
        }}>
          <AlertTriangle size={12} style={{ flexShrink: 0, marginTop: 1 }} />
          <span>
            Bỏ qua {skipped.map(s => `“${CR_STATUS_LABELS[s]}”`).join(', ')} — xem lịch sử để biết ai chuyển và vì sao.
          </span>
        </div>
      )}
    </div>
  )
}

// ── Ô thông tin ──────────────────────────────────────────────────────────────

function Field({
  label, children, span,
}: {
  label: string
  children: React.ReactNode
  span?: boolean
}) {
  return (
    <div style={span ? { gridColumn: '1 / -1' } : undefined}>
      <div style={{
        fontSize: 11, fontWeight: 600, color: 'var(--app-neutral-500)',
        textTransform: 'uppercase', letterSpacing: 0.4, marginBottom: 3,
      }}>
        {label}
      </div>
      <div style={{ fontSize: 13, color: 'var(--app-neutral-900)', lineHeight: 1.55 }}>
        {children}
      </div>
    </div>
  )
}

const EMPTY = <span style={{ color: 'var(--app-neutral-400)' }}>—</span>

// ── Panel ────────────────────────────────────────────────────────────────────

type PanelTab = 'overview' | 'brs' | 'files' | 'history'

export function CrDetailPanel({
  cr, onClose, onChanged, onDeleted,
  onCreateTask, lockProjectId, canDelete = true,
}: {
  cr: ChangeRequest
  onClose: () => void
  /** Gọi sau khi CR đổi — parent dùng để reload danh sách và thay bản ghi đang chọn */
  onChanged: (fresh: ChangeRequest) => void
  onDeleted: () => void
  onCreateTask?: () => void
  lockProjectId?: string
  canDelete?: boolean
}) {
  const [tab, setTab]             = useState<PanelTab>('overview')
  const [history, setHistory]     = useState<RequestHistoryEntry[]>([])
  const [histLoading, setHist]    = useState(false)
  const [attachCount, setAttach]  = useState<number | null>(null)
  const [saving, setSaving]       = useState(false)
  const [error, setError]         = useState<string | null>(null)
  const [showEdit, setShowEdit]   = useState(false)
  const [pendingStatus, setPend]  = useState<{ status: CRStatus; offFlow: boolean } | null>(null)
  const [offFlowOpen, setOffFlow] = useState(false)
  const [offFlowPick, setPick]    = useState<CRStatus | ''>('')
  const [confirmDelete, setCfmDel] = useState(false)

  const isInternal = cr.cr_kind === 'internal'

  useEffect(() => {
    setTab('overview'); setError(null); setOffFlow(false); setPick('')
    setHist(true)
    crApi.history(cr.id)
      .then(setHistory)
      .catch(() => setHistory([]))
      .finally(() => setHist(false))
    crApi.listAttachments(cr.id)
      .then(a => setAttach(a.length))
      .catch(() => setAttach(null))
  }, [cr.id])

  const allowed = CR_TRANSITIONS[cr.status]

  async function applyStatus(status: CRStatus, comment?: string) {
    setSaving(true); setError(null); setPend(null)
    try {
      await crApi.update(cr.id, { status, ...(comment ? { comment } : {}) })
      const [fresh, hist] = await Promise.all([crApi.get(cr.id), crApi.history(cr.id)])
      setHistory(hist)
      setOffFlow(false); setPick('')
      onChanged(fresh)
    } catch (e) {
      setError((e as Error).message)
    } finally {
      setSaving(false)
    }
  }

  function requestStatus(status: CRStatus, offFlow: boolean) {
    // Lý do bắt buộc với trạng thái kết thúc VÀ với mọi nước đi ngoài luồng
    if (offFlow || CR_REQUIRES_COMMENT.includes(status)) setPend({ status, offFlow })
    else applyStatus(status)
  }

  async function doDelete() {
    setSaving(true); setError(null)
    try {
      await crApi.delete(cr.id)
      setCfmDel(false)
      onDeleted()
    } catch (e) {
      setError((e as Error).message); setCfmDel(false)
    } finally {
      setSaving(false)
    }
  }

  const TABS: { key: PanelTab; label: string; badge?: number | null; hidden?: boolean }[] = [
    { key: 'overview', label: 'Tổng quan' },
    { key: 'brs',      label: 'BRS', hidden: isInternal },
    { key: 'files',    label: 'Đính kèm', badge: attachCount },
    { key: 'history',  label: 'Lịch sử',  badge: history.length || null },
  ]

  return (
    <div
      className="card"
      style={{
        position: 'sticky', top: 0,
        display: 'flex', flexDirection: 'column',
        maxHeight: 'calc(100vh - 132px)', overflow: 'hidden',
      }}
    >
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div style={{ padding: '16px 20px 0', flexShrink: 0 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 10 }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
              <span className="txt_mono" style={{ fontSize: 11, fontWeight: 600, color: 'var(--app-neutral-500)' }}>
                {cr.request_code}
              </span>
              <span className={`badge badge-${CR_STATUS_VARIANTS[cr.status]}`}>
                {CR_STATUS_LABELS[cr.status]}
              </span>
              <span className={`badge badge-${CR_PRIORITY_VARIANTS[cr.priority]}`}>
                {CR_PRIORITY_LABELS[cr.priority]}
              </span>
              <span className="badge badge-neutral">{CR_CHANGE_TYPE_LABELS[cr.change_type]}</span>
              {isInternal && (
                <span className="badge badge-primary" title="CR nội bộ — sinh từ việc sửa tay Master Doc, không đi qua BRS">
                  CR nội bộ
                </span>
              )}
            </div>
            <h3 style={{ margin: '6px 0 0', fontSize: 16, lineHeight: 1.35 }}>{cr.title}</h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 2, flexShrink: 0 }}>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setShowEdit(true)}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}
            >
              <Pencil size={13} /> Sửa
            </button>
            {onCreateTask && (
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={onCreateTask}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}
              >
                <Plus size={13} /> Task
              </button>
            )}
            {canDelete && (
              <button
                type="button"
                className="btn-icon"
                title="Xoá CR"
                aria-label="Xoá CR"
                onClick={() => setCfmDel(true)}
                style={{ color: 'var(--app-danger)' }}
              >
                <Trash2 size={15} />
              </button>
            )}
            <button
              type="button"
              className="btn-icon"
              title="Đóng"
              aria-label="Đóng chi tiết CR"
              onClick={onClose}
            >
              <X size={17} />
            </button>
          </div>
        </div>

        <div style={{ marginTop: 12 }}>
          <CrStatusRail status={cr.status} history={history} />
        </div>

        {!cr.product_id && (
          <div style={{
            marginTop: 10, padding: '8px 11px', borderRadius: 8,
            background: 'var(--app-warning-bg)', border: '1px solid var(--app-warning-bg)',
            fontSize: 12, color: 'var(--app-warning)', display: 'flex', gap: 7, alignItems: 'flex-start',
          }}>
            <AlertTriangle size={14} style={{ flexShrink: 0, marginTop: 1 }} />
            <span style={{ flex: 1 }}>
              CR chưa gắn sản phẩm nên <strong>không sinh được BRS</strong> — AI cần Master Doc
              của sản phẩm làm bối cảnh AS-IS. Bấm <strong>Sửa</strong> để gắn sản phẩm.
            </span>
          </div>
        )}

        {error && (
          <div className="alert alert-danger" style={{ marginTop: 10, fontSize: 13 }}>{error}</div>
        )}

        {/* Tabs */}
        <div className="ds-tabs" style={{ marginTop: 14 }}>
          {TABS.filter(t => !t.hidden).map(t => (
            <button
              key={t.key}
              type="button"
              className={`ds-tab${tab === t.key ? ' active' : ''}`}
              onClick={() => setTab(t.key)}
              style={{ fontSize: 13, padding: '1px 10px 10px' }}
            >
              {t.label}
              {t.badge ? (
                <span style={{
                  marginLeft: 5, fontSize: 11, fontWeight: 700, padding: '0 5px',
                  borderRadius: 9, background: 'var(--app-neutral-100)', color: 'var(--app-neutral-600)',
                }}>
                  {t.badge}
                </span>
              ) : null}
            </button>
          ))}
        </div>
      </div>

      {/* ── Body ───────────────────────────────────────────────────────────── */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '14px 20px 18px' }}>
        {tab === 'overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 16px' }}>
            <Field label="Sản phẩm bị tác động">
              {cr.product_name
                ? <>
                    {cr.product_name}
                    {cr.product_code && (
                      <span className="txt_mono" style={{ marginLeft: 6, fontSize: 11, color: 'var(--app-neutral-500)' }}>
                        {cr.product_code}
                      </span>
                    )}
                  </>
                : <span style={{ color: 'var(--app-warning)' }}>chưa gắn</span>}
            </Field>
            <Field label="Dự án tài trợ">
              {cr.project_name
                ? <>
                    {cr.project_name}
                    {cr.project_code && (
                      <span className="txt_mono" style={{ marginLeft: 6, fontSize: 11, color: 'var(--app-neutral-500)' }}>
                        {cr.project_code}
                      </span>
                    )}
                  </>
                : <span style={{ color: 'var(--app-neutral-400)' }}>không thuộc dự án nào</span>}
            </Field>

            <Field label="Người yêu cầu">{cr.requested_by || EMPTY}</Field>
            <Field label="Người phụ trách">{cr.assigned_to || EMPTY}</Field>

            <Field label="Ngày mục tiêu">{cr.target_date ? fmtDate(cr.target_date) : EMPTY}</Field>
            <Field label="Người duyệt">
              {cr.approved_by
                ? <>{cr.approved_by}
                    {cr.approved_at && (
                      <span style={{ color: 'var(--app-neutral-500)', marginLeft: 6, fontSize: 12 }}>
                        · {fmtDateTime(cr.approved_at)}
                      </span>
                    )}
                  </>
                : <span style={{ color: 'var(--app-neutral-400)' }}>chưa duyệt</span>}
            </Field>

            <Field label="Phạm vi ảnh hưởng">{cr.impact_scope || EMPTY}</Field>
            <Field label="Ước tính effort">{cr.impact_effort || EMPTY}</Field>

            <Field label="Mô tả" span>
              {cr.description
                ? <div style={{ whiteSpace: 'pre-wrap' }}>{cr.description}</div>
                : EMPTY}
            </Field>

            {cr.notes && (
              <Field label="Ghi chú" span>
                <div style={{ whiteSpace: 'pre-wrap' }}>{cr.notes}</div>
              </Field>
            )}

            <div style={{
              gridColumn: '1 / -1', borderTop: '1px solid var(--app-neutral-200)',
              paddingTop: 10, display: 'flex', gap: 18, flexWrap: 'wrap',
              fontSize: 11, color: 'var(--app-neutral-500)',
            }}>
              <span>Tạo: {fmtDateTime(cr.created_at)}</span>
              <span>Cập nhật gần nhất: {fmtDateTime(cr.updated_at)}</span>
            </div>
          </div>
        )}

        {tab === 'brs' && !isInternal && (
          <BrsPanel crId={cr.id} crStatus={cr.status} crCode={cr.request_code} />
        )}

        {tab === 'files' && (
          <RequestAttachments
            refId={cr.id}
            listFn={crApi.listAttachments}
            uploadFn={async (id, file) => {
              const res = await crApi.uploadAttachment(id, file)
              setAttach(c => (c ?? 0) + 1)
              return res
            }}
          />
        )}

        {tab === 'history' && (
          histLoading
            ? <div style={{ fontSize: 13, color: 'var(--app-neutral-500)' }}>Đang tải lịch sử...</div>
            : history.length === 0
              ? <div style={{ fontSize: 13, color: 'var(--app-neutral-500)' }}>Chưa có hoạt động nào được ghi.</div>
              : <RequestHistoryTimeline entries={history} statusLabels={CR_STATUS_LABELS} />
        )}
      </div>

      {/* ── Footer: chuyển trạng thái ──────────────────────────────────────── */}
      <div style={{
        flexShrink: 0, borderTop: '1px solid var(--app-neutral-200)',
        padding: '12px 20px', background: 'var(--app-neutral-50)',
      }}>
        {allowed.length > 0 ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--app-neutral-500)', textTransform: 'uppercase', letterSpacing: 0.4 }}>
              Bước tiếp theo
            </span>
            {allowed.map((next, i) => {
              const danger = CR_REQUIRES_COMMENT.includes(next)
              return (
                <button
                  key={next}
                  type="button"
                  className={`btn btn-sm ${danger ? 'btn-secondary' : i === 0 ? 'btn-primary' : 'btn-secondary'}`}
                  disabled={saving}
                  onClick={() => requestStatus(next, false)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    ...(danger ? { color: 'var(--app-danger)', borderColor: 'var(--color-error-300)' } : {}),
                  }}
                >
                  {!danger && <ArrowRight size={13} />}
                  {CR_TRANSITION_ACTION_LABELS[next] ?? CR_STATUS_LABELS[next]}
                </button>
              )
            })}
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--app-neutral-500)' }}
              onClick={() => setOffFlow(o => !o)}
            >
              {offFlowOpen ? 'Ẩn' : 'Chuyển ngoài luồng'}
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>
              CR ở trạng thái kết thúc <strong>{CR_STATUS_LABELS[cr.status]}</strong> — không còn bước tiếp theo.
            </span>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--app-neutral-500)' }}
              onClick={() => setOffFlow(o => !o)}
            >
              {offFlowOpen ? 'Ẩn' : 'Mở lại (ngoài luồng)'}
            </button>
          </div>
        )}

        {offFlowOpen && (
          <div style={{
            marginTop: 10, padding: '10px 12px', borderRadius: 8,
            background: 'var(--app-warning-bg)', border: '1px solid var(--app-warning-bg)',
          }}>
            <div style={{ fontSize: 12, color: 'var(--app-warning)', marginBottom: 8, lineHeight: 1.5 }}>
              Chuyển sang trạng thái không nằm trong luồng chuẩn. Bắt buộc nhập lý do —
              lý do được ghi vào lịch sử CR để giải trình về sau.
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <select
                className="input input-sm"
                style={{ flex: 1 }}
                value={offFlowPick}
                onChange={e => setPick(e.target.value as CRStatus)}
              >
                <option value="">— Chọn trạng thái —</option>
                {(Object.keys(CR_STATUS_LABELS) as CRStatus[])
                  .filter(s => s !== cr.status && !allowed.includes(s))
                  .map(s => <option key={s} value={s}>{CR_STATUS_LABELS[s]}</option>)}
              </select>
              <button
                type="button"
                className="btn btn-sm btn-secondary"
                disabled={saving || !offFlowPick}
                onClick={() => offFlowPick && requestStatus(offFlowPick, true)}
              >
                Chuyển
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ── Modal ──────────────────────────────────────────────────────────── */}
      {showEdit && (
        <CrEditModal
          cr={cr}
          lockProjectId={lockProjectId}
          onClose={() => setShowEdit(false)}
          onSaved={fresh => {
            setShowEdit(false)
            crApi.history(cr.id).then(setHistory).catch(() => {})
            onChanged(fresh)
          }}
        />
      )}

      {pendingStatus && (
        <CommentModal
          title={
            pendingStatus.offFlow
              ? `Chuyển ngoài luồng sang “${CR_STATUS_LABELS[pendingStatus.status]}”`
              : pendingStatus.status === 'rejected' ? 'Từ chối CR' : 'Hủy CR'
          }
          subtitle={
            pendingStatus.offFlow
              ? `${cr.request_code} đang ở “${CR_STATUS_LABELS[cr.status]}”. Nêu rõ vì sao bỏ qua luồng chuẩn.`
              : `Nhập lý do ${pendingStatus.status === 'rejected' ? 'từ chối' : 'hủy'} CR “${cr.title}”.`
          }
          // Nhãn xác nhận khác nhãn nút ở chân panel — nếu trùng thì hộp thoại có hai
          // nút cùng tên "Hủy CR"/"Từ chối" đứng cạnh nút "Hủy" (đóng hộp), rất dễ bấm sai
          confirmLabel={
            pendingStatus.offFlow ? 'Xác nhận chuyển trạng thái'
            : pendingStatus.status === 'rejected' ? 'Xác nhận từ chối'
            : 'Xác nhận hủy CR'
          }
          onClose={() => setPend(null)}
          minLength={CR_MIN_REASON_LEN}
          onConfirm={comment => applyStatus(pendingStatus.status, comment)}
        />
      )}

      {confirmDelete && (
        // Không dùng hộp "nhập lý do" ở đây: DELETE /change-requests/{id} không nhận
        // comment và bản ghi bị xoá hẳn, nên lý do gõ vào sẽ bị bỏ đi — hỏi rồi bỏ
        // là thứ tệ hơn không hỏi.
        <Confirm
          title="Xoá CR"
          message={
            `Xoá vĩnh viễn ${cr.request_code} “${cr.title}”. `
            + 'BRS, test case và lịch sử gắn với CR này bị xoá theo và không phục hồi được. '
            + 'Nếu chỉ muốn dừng CR, hãy dùng “Hủy CR” để giữ lại vết.'
          }
          confirmLabel={saving ? 'Đang xoá...' : 'Xoá vĩnh viễn'}
          cancelLabel="Không xoá"
          danger
          onConfirm={doDelete}
          onCancel={() => setCfmDel(false)}
        />
      )}
    </div>
  )
}
