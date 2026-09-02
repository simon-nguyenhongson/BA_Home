import React, { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'
import {
  crApi,
  type ChangeRequest, type CRChangeType, type Priority,
} from '../../api/requests'
import { getProjects, type Project } from '../../api/ppg'
import { getProducts, type CatalogProduct } from '../../api/catalog'
import { ComboSelect, type ComboOption } from '../../components/ComboSelect'
import { UserSelect } from '../../components/UserSelect'
import {
  CR_CHANGE_TYPE_LABELS, CR_PRIORITY_LABELS,
} from './constants'

/**
 * CrEditModal — sửa thông tin một CR đã tạo.
 *
 * Trước đây giao diện CHỈ cho đổi trạng thái: form sửa tồn tại trong
 * ProjectCRTab (CRFormModal mode='edit') nhưng không nút nào gọi tới, nên trên
 * thực tế không ai sửa được tiêu đề, mô tả, sản phẩm hay ngày mục tiêu của CR
 * dù backend PATCH /change-requests/{id} đã nhận đủ các trường đó.
 *
 * KHÔNG cho sửa ở đây:
 *  - status   → có luồng chuyển trạng thái riêng, cần lý do khi đi ngoài luồng
 *  - cr_kind  → đổi CR nghiệp vụ thành nội bộ sẽ xoá mất bắt buộc BRS/test của
 *               một thay đổi đã ghi nhận (backend cũng không nhận trường này)
 */

/** Chỉ những trường CR mà PATCH nhận và người dùng được sửa trên giao diện. */
interface EditableCr {
  title:         string
  product_id:    string
  project_id:    string
  description:   string
  change_type:   CRChangeType
  priority:      Priority
  impact_scope:  string
  impact_effort: string
  requested_by:  string
  assigned_to:   string
  target_date:   string
  notes:         string
}

function toForm(cr: ChangeRequest): EditableCr {
  return {
    title:         cr.title,
    product_id:    cr.product_id    ?? '',
    project_id:    cr.project_id    ?? '',
    description:   cr.description   ?? '',
    change_type:   cr.change_type,
    priority:      cr.priority,
    impact_scope:  cr.impact_scope  ?? '',
    impact_effort: cr.impact_effort ?? '',
    requested_by:  cr.requested_by,
    assigned_to:   cr.assigned_to   ?? '',
    target_date:   cr.target_date   ?? '',
    notes:         cr.notes         ?? '',
  }
}

export function CrEditModal({
  cr, lockProjectId, onClose, onSaved,
}: {
  cr: ChangeRequest
  /** Khi mở từ tab CR của một dự án — dự án tài trợ khoá theo bối cảnh, không cho đổi */
  lockProjectId?: string
  onClose: () => void
  onSaved: (fresh: ChangeRequest) => void
}) {
  const [form, setForm]     = useState<EditableCr>(() => toForm(cr))
  const [projects, setPrj]  = useState<Project[]>([])
  const [products, setProd] = useState<CatalogProduct[]>([])
  const [lovLoading, setLov] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError]   = useState<string | null>(null)

  useEffect(() => {
    Promise.all([
      getProjects({ all_years: true }).catch(() => [] as Project[]),
      getProducts().catch(() => [] as CatalogProduct[]),
    ])
      .then(([prjs, prods]) => { setPrj(prjs); setProd(prods) })
      .finally(() => setLov(false))
  }, [])

  const productOptions: ComboOption[] = useMemo(
    () => [...products]
      .sort((a, b) => a.product_name.localeCompare(b.product_name))
      .map(p => ({
        value: p.id,
        label: p.product_name,
        meta:  `${p.product_code} · ${p.product_type}${p.domain_code ? ' · ' + p.domain_code : ''}`,
      })),
    [products],
  )

  const projectOptions: ComboOption[] = useMemo(
    () => [...projects]
      .sort((a, b) => a.name.localeCompare(b.name))
      .map(p => ({
        value: p.id,
        label: p.name,
        meta:  `${p.code}${p.domain_code ? ' · ' + p.domain_code : ''} · ${p.status}`,
      })),
    [projects],
  )

  const set = <K extends keyof EditableCr>(k: K, v: EditableCr[K]) =>
    setForm(f => ({ ...f, [k]: v }))

  const original = useMemo(() => toForm(cr), [cr])
  const dirtyKeys = (Object.keys(form) as (keyof EditableCr)[])
    .filter(k => form[k] !== original[k])

  async function submit(e: React.SyntheticEvent) {
    e.preventDefault()
    if (!form.title.trim())        { setError('Tiêu đề không được để trống'); return }
    if (!form.requested_by.trim()) { setError('Người yêu cầu không được để trống'); return }
    if (!form.product_id) {
      setError('CR phải gắn một sản phẩm — Master Doc của sản phẩm là bối cảnh AS-IS '
        + 'để AI sinh BRS. Bỏ trống thì bước sinh BRS sẽ bị chặn.')
      return
    }
    if (dirtyKeys.length === 0) { onClose(); return }

    // PATCH: chỉ gửi trường đã đổi. Chuỗi rỗng gửi lên sẽ bị exclude_none bỏ qua
    // (không phải None), nên vẫn xoá được nội dung của trường tùy chọn.
    const patch: Record<string, string> = {}
    for (const k of dirtyKeys) patch[k] = form[k]

    setSaving(true); setError(null)
    try {
      await crApi.update(cr.id, patch)
      const fresh = await crApi.get(cr.id)
      onSaved(fresh)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setSaving(false)
    }
  }

  const lockedProject = lockProjectId
    ? projects.find(p => p.id === lockProjectId)
    : undefined

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(16,24,40,0.45)',
        zIndex: 1150, display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--app-white)', borderRadius: 12, width: 720, maxWidth: '95vw',
          maxHeight: '90vh', display: 'flex', flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(16,24,40,0.25)',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '14px 20px', borderBottom: '1px solid var(--app-neutral-200)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0,
        }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15 }}>Sửa thông tin CR</div>
            <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginTop: 2 }}>
              <span className="txt_mono" style={{ fontWeight: 600 }}>{cr.request_code}</span>
              {' · trạng thái và loại CR không sửa ở đây'}
            </div>
          </div>
          <button type="button" className="btn-icon" onClick={onClose} aria-label="Đóng">
            <X size={18} />
          </button>
        </div>

        <form onSubmit={submit} style={{ flex: 1, overflowY: 'auto', padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Tiêu đề */}
          <div>
            <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>
              Tiêu đề <span className="req" aria-hidden="true">*</span><span className="sr-only"> (bắt buộc)</span>
            </label>
            <input
              className="input"
              style={{ width: '100%' }}
              value={form.title}
              onChange={e => set('title', e.target.value)}
            />
          </div>

          {/* Sản phẩm + Dự án */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>
                Sản phẩm bị tác động <span className="req" aria-hidden="true">*</span><span className="sr-only"> (bắt buộc)</span>
              </label>
              <ComboSelect
                options={productOptions}
                value={form.product_id}
                onChange={val => set('product_id', val)}
                placeholder={lovLoading ? 'Đang tải...' : 'Chọn sản phẩm'}
                loading={lovLoading}
              />
            </div>
            <div>
              <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>
                Dự án tài trợ <span style={{ fontWeight: 400, color: 'var(--app-neutral-500)' }}>(tùy chọn)</span>
              </label>
              {lockProjectId ? (
                <div className="input" style={{ background: 'var(--app-neutral-100)', color: 'var(--app-neutral-600)', fontSize: 13, minHeight: 36, display: 'flex', alignItems: 'center' }}>
                  {lockedProject?.name ?? cr.project_name ?? '—'}
                </div>
              ) : (
                <ComboSelect
                  options={projectOptions}
                  value={form.project_id}
                  onChange={val => set('project_id', val)}
                  placeholder={lovLoading ? 'Đang tải...' : 'Không thuộc dự án nào'}
                  loading={lovLoading}
                  allowClear
                  clearLabel="— Không thuộc dự án nào —"
                />
              )}
            </div>
          </div>

          {/* Mô tả */}
          <div>
            <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>Mô tả</label>
            <textarea
              rows={4}
              className="input"
              style={{ width: '100%', resize: 'vertical' }}
              value={form.description}
              onChange={e => set('description', e.target.value)}
              placeholder="Bối cảnh, lý do, phạm vi thay đổi..."
            />
          </div>

          {/* Loại + ưu tiên */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>Loại thay đổi</label>
              <select
                className="input"
                value={form.change_type}
                onChange={e => set('change_type', e.target.value as CRChangeType)}
              >
                {(Object.entries(CR_CHANGE_TYPE_LABELS) as [CRChangeType, string][]).map(([v, l]) => (
                  <option key={v} value={v}>{l}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>Mức ưu tiên</label>
              <select
                className="input"
                value={form.priority}
                onChange={e => set('priority', e.target.value as Priority)}
              >
                {(Object.entries(CR_PRIORITY_LABELS) as [Priority, string][]).map(([v, l]) => (
                  <option key={v} value={v}>{l}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Người yêu cầu + phụ trách */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div>
              <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>
                Người yêu cầu <span className="req" aria-hidden="true">*</span><span className="sr-only"> (bắt buộc)</span>
              </label>
              <UserSelect
                value={form.requested_by}
                onChange={val => set('requested_by', val)}
                placeholder="Chọn nhân sự..."
              />
            </div>
            <div>
              <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>Người phụ trách</label>
              <UserSelect
                value={form.assigned_to}
                onChange={val => set('assigned_to', val)}
                placeholder="Chọn nhân sự..."
              />
            </div>
          </div>

          {/* Ngày mục tiêu + phạm vi + effort */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            <div>
              <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>Ngày mục tiêu</label>
              <input
                type="date"
                className="input"
                value={form.target_date}
                onChange={e => set('target_date', e.target.value)}
              />
            </div>
            <div>
              <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>Phạm vi ảnh hưởng</label>
              <input
                className="input"
                value={form.impact_scope}
                onChange={e => set('impact_scope', e.target.value)}
                placeholder="VD: Frontend + API"
              />
            </div>
            <div>
              <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>Ước tính effort</label>
              <input
                className="input"
                value={form.impact_effort}
                onChange={e => set('impact_effort', e.target.value)}
                placeholder="VD: 3 ngày / 1 sprint"
              />
            </div>
          </div>

          {/* Ghi chú */}
          <div>
            <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>Ghi chú</label>
            <textarea
              rows={2}
              className="input"
              style={{ width: '100%', resize: 'vertical' }}
              value={form.notes}
              onChange={e => set('notes', e.target.value)}
            />
          </div>

          {error && <div className="alert alert-danger" style={{ fontSize: 13 }}>{error}</div>}
        </form>

        {/* Footer */}
        <div style={{
          padding: '12px 20px', borderTop: '1px solid var(--app-neutral-200)',
          display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0,
        }}>
          <span style={{ fontSize: 12, color: 'var(--app-neutral-500)', flex: 1 }}>
            {dirtyKeys.length === 0
              ? 'Chưa có thay đổi nào'
              : `${dirtyKeys.length} trường đã thay đổi — sẽ ghi một dòng "Cập nhật thông tin" vào lịch sử`}
          </span>
          <button type="button" className="btn btn-secondary btn-sm" onClick={onClose}>Hủy</button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={submit}
            disabled={saving || dirtyKeys.length === 0}
          >
            {saving ? 'Đang lưu...' : 'Lưu thay đổi'}
          </button>
        </div>
      </div>
    </div>
  )
}
