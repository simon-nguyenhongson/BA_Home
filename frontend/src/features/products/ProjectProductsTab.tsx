import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Package, Plus, Link2, Unlink, ExternalLink, AlertTriangle, RefreshCw, Layers,
} from 'lucide-react'
import {
  getProducts, createProduct, updateProduct, unlinkProductOriginProject,
  type CatalogProduct, type CatalogProductCreate, type ProductType,
} from '../../api/catalog'
import { ComboSelect, type ComboOption } from '../../components/ComboSelect'
import { ProductDetailModal } from '../../pages/catalog/CatalogPage'
import { Confirm } from '../../components/Confirm'
import { useStore } from '../../stores/auth'

/**
 * ProjectProductsTab — sản phẩm mà dự án này bàn giao.
 *
 * Trước đây KHÔNG có đường nào tạo sản phẩm từ trong dự án: cột
 * catalog_products.origin_project_id (V052) chỉ tồn tại trong file migration, không API
 * và không giao diện nào đọc/ghi. Muốn có sản phẩm thì phải vào Cài đặt → Danh mục tạo
 * riêng, và quan hệ "dự án OMS bàn giao ra sản phẩm X" không được ghi ở đâu.
 *
 * Tab này ghi vào ĐÚNG bảng catalog_products — cùng bảng mà CR, BRS, Master Doc và Sơ đồ
 * đang dùng. Không dùng project_product_registry (V019, thế hệ trước): sản phẩm tạo ở đó
 * thì chuỗi CR → BRS → Master Doc không thấy, đúng cái bẫy "hai thế hệ nằm cạnh nhau".
 *
 * V052: mỗi dự án bàn giao TỐI ĐA MỘT sản phẩm (UNIQUE partial index). Giao diện phản
 * ánh đúng giới hạn đó thay vì để người dùng bấm rồi nhận lỗi.
 */

const TYPE_LABELS: Record<ProductType, string> = {
  web_app: 'Web App', mobile: 'Mobile App', api: 'API',
  etl: 'ETL Pipeline', job: 'Job / Scheduler',
}

const STATUS_STYLE: Record<string, { color: string; bg: string }> = {
  active:     { color: 'var(--app-success)', bg: 'var(--app-success-bg)' },
  planned:    { color: 'var(--app-warning)', bg: 'var(--app-warning-bg)' },
  inactive:   { color: 'var(--app-neutral-500)', bg: 'var(--ds-border-subtle)' },
  deprecated: { color: 'var(--app-neutral-500)', bg: 'var(--ds-border-subtle)' },
}

export function ProjectProductsTab({
  projectId, projectCode, projectName, domainCode,
}: {
  projectId:   string
  projectCode: string
  projectName: string
  /** Domain của dự án — điền sẵn cho sản phẩm để không phải chọn lại */
  domainCode?: string
}) {
  const { addToast } = useStore()

  const [mine,    setMine]    = useState<CatalogProduct[]>([])
  const [all,     setAll]     = useState<CatalogProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [busy,    setBusy]    = useState(false)

  const [mode,      setMode]      = useState<'none' | 'create' | 'link'>('none')
  const [unlinking, setUnlinking] = useState<CatalogProduct | null>(null)
  // Hồ sơ đầy đủ 8 tab — dùng chung với Workspace → Product, không dựng bản rút gọn thứ hai
  const [viewing,   setViewing]   = useState<CatalogProduct | null>(null)

  // form tạo mới
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState<ProductType>('web_app')
  const [desc, setDesc] = useState('')
  // form gắn sản phẩm có sẵn
  const [pickId, setPickId] = useState('')
  const [errs, setErrs] = useState<Record<string, string>>({})

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const [own, everything] = await Promise.all([
        getProducts({ origin_project_id: projectId }),
        getProducts(),
      ])
      setMine(own); setAll(everything)
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setLoading(false)
    }
  }, [projectId, addToast])

  useEffect(() => { if (projectId) load() }, [load, projectId])

  const slotTaken = mine.length > 0

  /** Chỉ sản phẩm CHƯA gắn dự án nào mới gắn được — tránh cướp sản phẩm của dự án khác. */
  const linkable: ComboOption[] = useMemo(
    () => all
      .filter(p => !p.origin_project_id)
      .sort((a, b) => a.product_name.localeCompare(b.product_name))
      .map(p => ({
        value: p.id,
        label: p.product_name,
        meta:  `${p.product_code} · ${TYPE_LABELS[p.product_type] ?? p.product_type}`
             + `${p.domain_code ? ' · ' + p.domain_code : ''}`,
      })),
    [all],
  )

  function resetForms() {
    setMode('none'); setCode(''); setName(''); setDesc(''); setType('web_app'); setPickId(''); setErrs({})
  }

  async function doCreate() {
    const e: Record<string, string> = {}
    if (code.trim().length < 2) e.code = 'Mã sản phẩm cần ít nhất 2 ký tự'
    if (!name.trim())           e.name = 'Nhập tên sản phẩm'
    if (Object.keys(e).length) { setErrs(e); return }
    setErrs({})
    setBusy(true)
    try {
      const body: CatalogProductCreate = {
        product_code:      code.trim().toUpperCase(),
        product_name:      name.trim(),
        product_type:      type,
        description:       desc.trim() || undefined,
        domain_code:       domainCode || undefined,
        origin_project_id: projectId,
      }
      const p = await createProduct(body)
      addToast(`Đã tạo «${p.product_name}» và gắn với ${projectCode}`, 'success')
      resetForms(); await load()
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setBusy(false)
    }
  }

  async function doLink() {
    if (!pickId) { addToast('Chọn sản phẩm cần gắn', 'warn'); return }
    setBusy(true)
    try {
      await updateProduct(pickId, { origin_project_id: projectId })
      addToast(`Đã gắn sản phẩm với ${projectCode}`, 'success')
      resetForms(); await load()
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setBusy(false)
    }
  }

  async function doUnlink() {
    if (!unlinking) return
    setBusy(true)
    try {
      await unlinkProductOriginProject(unlinking.id)
      addToast('Đã bỏ gắn — sản phẩm vẫn còn trong danh mục', 'success')
      setUnlinking(null); await load()
    } catch (e) {
      addToast((e as Error).message, 'error')
      setUnlinking(null)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div>
      {/* ── Giải thích quan hệ ─────────────────────────────────────── */}
      <div style={{
        padding: '10px 14px', borderRadius: 8, marginBottom: 14,
        background: 'var(--app-info-bg)', border: '1px solid var(--app-info-bg)',
        fontSize: 12, color: 'var(--app-primary)', lineHeight: 1.55,
      }}>
        Dự án bàn giao <strong>đúng một sản phẩm</strong> rồi kết thúc; sản phẩm sống tiếp
        và mọi thay đổi sau đó đi qua CR. Sản phẩm tạo ở đây vào thẳng{' '}
        <strong>Danh mục sản phẩm</strong> nên dùng được ngay cho CR, BRS, Master Doc và Sơ đồ.
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13, color: 'var(--app-neutral-500)' }}>
          {loading ? 'Đang tải…' : slotTaken ? '1 sản phẩm' : 'Chưa có sản phẩm'}
        </span>
        <div style={{ flex: 1 }} />
        {!slotTaken && (
          <>
            <button type="button" className="btn btn-primary btn-sm"
              onClick={() => setMode(m => (m === 'create' ? 'none' : 'create'))}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <Plus size={14} /> Tạo sản phẩm cho dự án
            </button>
            <button type="button" className="btn btn-secondary btn-sm"
              onClick={() => setMode(m => (m === 'link' ? 'none' : 'link'))}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <Link2 size={14} /> Gắn sản phẩm có sẵn
            </button>
          </>
        )}
        <button type="button" className="btn-icon" title="Tải lại" onClick={load}>
          <RefreshCw size={14} />
        </button>
      </div>

      {/* ── Form tạo mới ───────────────────────────────────────────── */}
      {mode === 'create' && (
        <div className="card card-pad" style={{ marginBottom: 14 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 200px', gap: 12 }}>
            <div>
              <label className="app-label">
                Mã sản phẩm<span className="req" aria-hidden="true"> *</span>
                <span className="sr-only"> (bắt buộc)</span>
              </label>
              <input className={`input${errs.code ? ' has-error' : ''}`} value={code}
                aria-invalid={!!errs.code || undefined}
                onChange={e => { setCode(e.target.value.toUpperCase()); setErrs(p => ({ ...p, code: '' })) }}
                placeholder="VD: OMS-WEB" />
              {errs.code && <div className="app-error" role="alert">{errs.code}</div>}
            </div>
            <div>
              <label className="app-label">
                Tên sản phẩm<span className="req" aria-hidden="true"> *</span>
                <span className="sr-only"> (bắt buộc)</span>
              </label>
              <input className={`input${errs.name ? ' has-error' : ''}`} value={name}
                aria-invalid={!!errs.name || undefined}
                onChange={e => { setName(e.target.value); setErrs(p => ({ ...p, name: '' })) }}
                placeholder={`VD: ${projectName}`} />
              {errs.name && <div className="app-error" role="alert">{errs.name}</div>}
            </div>
            <div>
              <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>Loại</label>
              <select className="input" value={type}
                onChange={e => setType(e.target.value as ProductType)}>
                {(Object.entries(TYPE_LABELS) as [ProductType, string][]).map(([v, l]) => (
                  <option key={v} value={v}>{l}</option>
                ))}
              </select>
            </div>
          </div>
          <div style={{ marginTop: 12 }}>
            <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>
              Mô tả nghiệp vụ
            </label>
            <textarea className="input" rows={2} value={desc}
              onChange={e => setDesc(e.target.value)}
              placeholder="Sản phẩm này phục vụ nghiệp vụ gì, cho ai dùng…" />
          </div>
          <div style={{
            marginTop: 10, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
          }}>
            <span style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>
              Domain lấy theo dự án: <strong>{domainCode || '— (dự án chưa có domain)'}</strong>
              {' · '}Dự án khai sinh: <strong>{projectCode}</strong>
              {' · '}Chi tiết kỹ thuật (môi trường, bảo mật, licence) bổ sung ngay sau khi tạo,
              bằng nút [Hồ sơ đầy đủ].
            </span>
            <div style={{ flex: 1 }} />
            <button type="button" className="btn btn-secondary btn-sm" onClick={resetForms}>Hủy</button>
            <button type="button" className="btn btn-primary btn-sm" disabled={busy} onClick={doCreate}>
              {busy ? 'Đang tạo…' : 'Tạo sản phẩm'}
            </button>
          </div>
        </div>
      )}

      {/* ── Form gắn sản phẩm có sẵn ───────────────────────────────── */}
      {mode === 'link' && (
        <div className="card card-pad" style={{ marginBottom: 14 }}>
          <label className="form-label" style={{ display: 'block', marginBottom: 4 }}>
            Sản phẩm chưa gắn dự án nào
          </label>
          <ComboSelect
            options={linkable}
            value={pickId}
            onChange={v => setPickId(v)}
            placeholder={linkable.length
              ? `Chọn sản phẩm (${linkable.length} sản phẩm còn trống)`
              : 'Không còn sản phẩm nào chưa gắn dự án'}
            disabled={linkable.length === 0}
          />
          <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 12, color: 'var(--app-neutral-500)', flex: 1 }}>
              Danh sách chỉ gồm sản phẩm chưa thuộc dự án nào — gắn lại sản phẩm của dự án
              khác sẽ làm mất vết bàn giao của dự án đó.
            </span>
            <button type="button" className="btn btn-secondary btn-sm" onClick={resetForms}>Hủy</button>
            <button type="button" className="btn btn-primary btn-sm"
              disabled={busy || !pickId} onClick={doLink}>
              {busy ? 'Đang gắn…' : 'Gắn vào dự án'}
            </button>
          </div>
        </div>
      )}

      {/* ── Sản phẩm của dự án ─────────────────────────────────────── */}
      {!loading && !slotTaken && mode === 'none' && (
        <div style={{
          textAlign: 'center', padding: '36px 20px',
          border: '1px dashed var(--app-neutral-300)', borderRadius: 12,
          background: 'var(--app-neutral-50)',
        }}>
          <Package size={26} strokeWidth={1.5} style={{ color: 'var(--app-neutral-300)' }} />
          <div style={{ fontSize: 14, fontWeight: 600, marginTop: 10 }}>
            Dự án chưa bàn giao sản phẩm nào
          </div>
          <div style={{
            fontSize: 13, color: 'var(--app-neutral-500)', marginTop: 4,
            maxWidth: 520, margin: '4px auto 0', lineHeight: 1.55,
          }}>
            Chưa gắn sản phẩm thì CR của dự án không sinh được BRS — AI cần Master Doc của
            sản phẩm làm bối cảnh AS-IS.
          </div>
        </div>
      )}

      {mine.map(p => {
        const st = STATUS_STYLE[p.status] ?? STATUS_STYLE.deprecated
        return (
          <div key={p.id} className="card card-pad" style={{ cursor: 'pointer' }}
            onClick={() => setViewing(p)}
            title="Mở hồ sơ đầy đủ của sản phẩm">
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
              <span style={{
                width: 36, height: 36, borderRadius: 8, flexShrink: 0,
                background: 'var(--ds-brand-subtle)', color: 'var(--app-primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Package size={18} strokeWidth={1.5} />
              </span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                  <span className="txt_mono" style={{ fontSize: 11, color: 'var(--app-neutral-500)' }}>
                    {p.product_code}
                  </span>
                  <span className="badge badge-neutral">
                    {TYPE_LABELS[p.product_type] ?? p.product_type}
                  </span>
                  {p.domain_code && <span className="badge badge-info">{p.domain_code}</span>}
                  <span style={{
                    fontSize: 12, fontWeight: 500, padding: '2px 8px', borderRadius: 16,
                    color: st.color, background: st.bg,
                  }}>{p.status}</span>
                </div>
                <div style={{ fontSize: 15, fontWeight: 600, marginTop: 4 }}>{p.product_name}</div>
                {p.description && (
                  <div style={{
                    fontSize: 13, color: 'var(--app-neutral-600)', marginTop: 3, lineHeight: 1.5,
                  }}>{p.description}</div>
                )}
                <div style={{
                  fontSize: 11, color: 'var(--app-neutral-500)', marginTop: 8,
                  display: 'flex', gap: 14, flexWrap: 'wrap',
                }}>
                  <span>Business Owner: {p.business_owner || '—'}</span>
                  <span>Technical Owner: {p.technical_owner || '—'}</span>
                  <span>Team: {p.owner_team || '—'}</span>
                </div>
              </div>
              {/* stopPropagation: thẻ đã mở hồ sơ khi bấm, các nút này phải làm việc riêng */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, flexShrink: 0 }}
                onClick={e => e.stopPropagation()}>
                <button type="button" className="btn btn-primary btn-sm"
                  onClick={() => setViewing(p)}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                  <Layers size={13} /> Hồ sơ đầy đủ
                </button>
                <a href="/docs" className="btn btn-secondary btn-sm"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 5, textDecoration: 'none' }}>
                  <ExternalLink size={13} /> Tài liệu sản phẩm
                </a>
                <button type="button" className="btn btn-ghost btn-sm"
                  onClick={() => setUnlinking(p)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    color: 'var(--app-neutral-600)',
                  }}>
                  <Unlink size={13} /> Bỏ gắn
                </button>
              </div>
            </div>
          </div>
        )
      })}

      {slotTaken && (
        <div style={{
          marginTop: 12, fontSize: 12, color: 'var(--app-warning)',
          display: 'flex', gap: 6, alignItems: 'flex-start',
        }}>
          <AlertTriangle size={13} style={{ flexShrink: 0, marginTop: 2 }} />
          <span>
            Mỗi dự án bàn giao tối đa một sản phẩm (V052). Muốn đổi sản phẩm thì bỏ gắn
            sản phẩm hiện tại trước — bỏ gắn KHÔNG xóa sản phẩm khỏi danh mục.
          </span>
        </div>
      )}

      {viewing && (
        <ProductDetailModal
          product={viewing}
          onClose={() => setViewing(null)}
          onUpdated={fresh => { setViewing(fresh); load() }}
        />
      )}

      {unlinking && (
        <Confirm
          title="Bỏ gắn sản phẩm khỏi dự án"
          message={
            `Bỏ ghi nhận «${unlinking.product_name}» là sản phẩm do ${projectCode} bàn giao. `
            + 'Sản phẩm VẪN CÒN trong Danh mục cùng toàn bộ Master Doc, CR, BRS và sơ đồ — '
            + 'chỉ mất quan hệ với dự án này.'
          }
          confirmLabel={busy ? 'Đang xử lý…' : 'Bỏ gắn'}
          cancelLabel="Giữ nguyên"
          onConfirm={doUnlink}
          onCancel={() => setUnlinking(null)}
        />
      )}
    </div>
  )
}
