import React, { useEffect, useRef } from 'react'
import { X, Info, CheckCircle2, AlertTriangle, XCircle } from 'lucide-react'
import { useStore } from '../stores/auth'

// ── Badge ────────────────────────────────────────────────────────
type BadgeVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'primary'
const badgeClasses: Record<BadgeVariant, string> = {
  success: 'badge-success',
  warning: 'badge-warning',
  danger:  'badge-danger',
  info:    'badge-info',
  neutral: 'badge-neutral',
  primary: 'badge-primary',
}
export function Badge({ children, variant = 'neutral' }: { children: React.ReactNode; variant?: BadgeVariant }) {
  return <span className={`badge ${badgeClasses[variant]}`}>{children}</span>
}

// ── Status badge helper ─────────────────────────────────────────
export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, BadgeVariant> = {
    active: 'success', completed: 'info', on_hold: 'warning', archived: 'neutral',
    draft: 'neutral', review: 'warning', approved: 'success',
    generated: 'neutral', reviewed: 'warning', executed: 'info',
    planned: 'neutral', in_progress: 'primary', delayed: 'danger',
    done: 'success', blocked: 'danger', open: 'warning', resolved: 'success',
    final: 'success',
  }
  return <Badge variant={map[status] || 'neutral'}>{status}</Badge>
}

// ── Button ───────────────────────────────────────────────────────
//
// TRẠNG THÁI LOADING — sửa theo đúng luật DS (design-system/readme.md → States):
//   "Loading — Primary buttons fill Blue 200 and show a spinning 16px ring with
//    the label 'Chờ...'"
//
// Hai vi phạm đã bỏ:
//  1. `'⟳ '` — ký tự Unicode đứng thay icon. readme.md: "No icon font. No emoji.
//     No Unicode characters standing in for icons." Thay bằng ring xoay 16px dựng
//     bằng CSS (.btn__spinner trong styles.css).
//  2. `opacity-60` — readme.md: "Disabled = fill Gray 50 hoặc Blue 200 … Opacity is
//     not used to fake a disabled state." Nay dùng fill Blue 200 (--ds-brand-loading)
//     qua class .btn--loading.
//
// Nhãn "Chờ..." CHỈ áp cho variant primary vì spec nói "Primary buttons". Các variant
// khác giữ nguyên nội dung của call site và chỉ thêm ring — 52 chỗ đang dùng `loading`
// không bị mất nhãn.
interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'link'
  /** sm = 28px (--ds-control-h-s) · md = 32px mặc định (-h-m) · lg = 40px (-h-l) */
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}
export function Btn({ variant = 'primary', size, loading, children, className = '', ...props }: BtnProps) {
  const sizeCls = size === 'sm' ? ' btn-sm' : size === 'lg' ? ' btn-lg' : ''
  const cls = `btn btn-${variant}${sizeCls}${loading ? ' btn--loading' : ''} ${className}`
  return (
    <button className={cls} disabled={loading || props.disabled} aria-busy={loading || undefined} {...props}>
      {loading && <span className="btn__spinner" aria-hidden="true" />}
      {loading && variant === 'primary' ? 'Chờ...' : children}
    </button>
  )
}

// ── Card ─────────────────────────────────────────────────────────
export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`card card-pad ${className}`}>{children}</div>
}

// ── Modal ─────────────────────────────────────────────────────────
interface ModalProps {
  title: string
  open: boolean
  onClose: () => void
  children: React.ReactNode
  width?: string
}
export function Modal({ title, open, onClose, children, width = '560px' }: ModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  if (!open) return null
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-panel" style={{ maxWidth: width }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="txt_s_xxs">{title}</span>
          <button className="btn-icon" onClick={onClose}><X size={18} /></button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

// ── Drawer ────────────────────────────────────────────────────────
export function Drawer({ title, open, onClose, children, width = '700px' }: ModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  if (!open) return null
  return (
    <div className="drawer-overlay" onClick={onClose}>
      <div className="drawer-panel" style={{ maxWidth: width }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="txt_s_xxs">{title}</span>
          <button className="btn-icon" onClick={onClose}><X size={18} /></button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  )
}

// ── Form Field ───────────────────────────────────────────────────
//
// LỖI ĐÃ SỬA (DS-ADOPTION-SPEC mục Input, dòng "destructive/error"):
//  1. `.app-input.has-error` có trong styles.css nhưng KHÔNG chỗ nào dùng → viền đỏ chưa
//     bao giờ xuất hiện. Field nhận `error` và in dòng chữ đỏ, nhưng không truyền trạng
//     thái lỗi xuống chính ô nhập, nên ô vẫn viền xám như bình thường.
//  2. Dấu * dùng inline `var(--app-danger)` (#D92D20) trong khi DS quy định #F04438.
//  3. Form không đánh dấu ô nào thiếu — người dùng bấm nút và không thấy gì phản hồi.
//
// Field giờ tự truyền `invalid` xuống con (AppInput/AppTextarea/AppSelect) và nối
// aria-describedby tới dòng lỗi, nên 54 chỗ đang dùng <Field required error=…> được sửa
// một lần ở đây thay vì sửa từng form.

interface FieldProps {
  label: string
  required?: boolean
  /** Có giá trị = ô đang sai: viền đỏ + dòng lỗi dưới field, theo DS */
  error?: string
  /** Câu gợi ý dưới field (14/20 #475467) — ẩn khi có error */
  hint?: React.ReactNode
  children: React.ReactNode
}

let fieldSeq = 0

export function Field({ label, required, error, hint, children }: FieldProps) {
  // id ổn định trong một lần mount để nối label ↔ dòng lỗi cho trình đọc màn hình
  const idRef = useRef<string>()
  if (!idRef.current) idRef.current = `f${++fieldSeq}`
  const errId = `${idRef.current}-err`

  // Truyền trạng thái lỗi xuống ô nhập. Chỉ chạm vào con là element của DS để không
  // vô tình đẩy prop lạ vào component khác (ComboSelect, UserSelect…).
  const decorated = React.isValidElement(children) && error
    ? React.cloneElement(children as React.ReactElement<{ invalid?: boolean; 'aria-describedby'?: string }>,
        { invalid: true, 'aria-describedby': errId })
    : children

  return (
    <div className="app-field">
      <label className="app-label">
        {label}{required && <span className="req" aria-hidden="true"> *</span>}
        {required && <span className="sr-only"> (bắt buộc)</span>}
      </label>
      {decorated}
      {error
        ? <div className="app-error" id={errId} role="alert">{error}</div>
        : hint ? <div className="app-hint">{hint}</div> : null}
    </div>
  )
}

/** Prop dùng chung cho 3 ô nhập của DS. */
interface InvalidProp { invalid?: boolean }

export function AppInput({ className = '', invalid, ...props }: React.InputHTMLAttributes<HTMLInputElement> & InvalidProp) {
  return (
    <input
      className={`app-input${invalid ? ' has-error' : ''} ${className}`}
      aria-invalid={invalid || undefined}
      {...props}
    />
  )
}

export function AppTextarea({ className = '', invalid, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement> & InvalidProp) {
  return (
    <textarea
      className={`app-input${invalid ? ' has-error' : ''} ${className}`}
      aria-invalid={invalid || undefined}
      style={{ resize: 'vertical', paddingTop: 8 }}
      {...props}
    />
  )
}

export function AppSelect({ className = '', invalid, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & InvalidProp & { children: React.ReactNode }) {
  return (
    <select
      className={`app-input${invalid ? ' has-error' : ''} ${className}`}
      aria-invalid={invalid || undefined}
      {...props}
    >{children}</select>
  )
}

// ── Toast Container ──────────────────────────────────────────────
export function ToastContainer() {
  const { toasts, removeToast } = useStore()

  useEffect(() => {
    toasts.forEach((t) => {
      const timer = setTimeout(() => removeToast(t.id), 4000)
      return () => clearTimeout(timer)
    })
  }, [toasts, removeToast])

  return (
    <div className="toast-container">
      {toasts.map((t) => {
        // Trước đây: <span>{...?'':...?'':...?'':'ℹ'}</span> — ba nhánh trả chuỗi RỖNG
        // (mã chết, dựng span trống) và nhánh cuối là ký tự Unicode 'ℹ' đứng thay icon,
        // trái luật DS "No Unicode characters standing in for icons". Nay dùng lucide 16px
        // currentColor như mọi icon khác trong app.
        const Icon = t.type === 'success' ? CheckCircle2
          : t.type === 'warn' ? AlertTriangle
          : t.type === 'error' ? XCircle
          : Info
        return (
        <div key={t.id} role="status" className={`toast${t.type === 'success' ? ' toast-success' : t.type === 'warn' ? ' toast-warning' : t.type === 'error' ? ' toast-danger' : ''}`}>
          <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
          <span>{t.message}</span>
          <button className="toast__close" onClick={() => removeToast(t.id)}
            title="Đóng thông báo" aria-label="Đóng thông báo"><X size={16} strokeWidth={1.5} /></button>
        </div>
        )
      })}
    </div>
  )
}

// ── Empty State ───────────────────────────────────────────────────
// `icon` trước đây là `string` — chữ ký chỉ nhận được emoji/Unicode, trái luật DS
// "No emoji … no Unicode characters standing in for icons". Nay nhận ReactNode để
// truyền lucide vào. Mọi call site hiện tại đang truyền  (prop chết còn lại
// sau lần bóc emoji) nên đổi kiểu này không làm vỡ chỗ nào.
export function EmptyState({ icon, title, desc, action }: { icon?: React.ReactNode; title: string; desc?: string; action?: React.ReactNode }) {
  return (
    <div className="empty-state">
      {icon && <div className="empty-state__icon">{icon}</div>}
      <div className="empty-state__title">{title}</div>
      {desc && <div className="empty-state__desc">{desc}</div>}
      {action}
    </div>
  )
}

// ── Progress Bar ─────────────────────────────────────────────────
export function ProgressBar({ value, color }: { value: number; color?: string }) {
  return (
    <div className="process-progress" style={{ width: '100%' }}>
      <div
        className="process-progress__fill"
        style={{ width: `${Math.min(100, Math.max(0, value))}%`, background: color || 'var(--app-primary)' }}
      />
    </div>
  )
}

// ── KPI Card ─────────────────────────────────────────────────────
export function KpiCard({ label, value, change, changePositive }: {
  label: string; value: string | number; change?: string; changePositive?: boolean
}) {
  return (
    <div className="kpi-card">
      <div className="kpi-card__label">{label}</div>
      <div className="kpi-card__value">{value}</div>
      {change && (
        <div className={`kpi-card__change ${changePositive !== false ? 'kpi-change-pos' : 'kpi-change-neg'}`}>
          {change}
        </div>
      )}
    </div>
  )
}

// ── Confirm Dialog ────────────────────────────────────────────────
export function Confirm({ open, message, onConfirm, onCancel }: {
  open: boolean; message: string; onConfirm: () => void; onCancel: () => void
}) {
  if (!open) return null
  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal-panel" style={{ maxWidth: 400 }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span className="txt_s_xxs" style={{ color: 'var(--app-danger)' }}>Xác nhận</span>
          <button className="btn-icon" onClick={onCancel}><X size={18} /></button>
        </div>
        <div className="modal-body">
          <div className="state-banner state-banner-warn mb-4">{message}</div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Btn variant="danger" style={{ flex: 1, justifyContent: 'center' }} onClick={onConfirm}>Xác nhận</Btn>
            <Btn variant="ghost" style={{ flex: 1, justifyContent: 'center' }} onClick={onCancel}>Hủy</Btn>
          </div>
        </div>
      </div>
    </div>
  )
}
