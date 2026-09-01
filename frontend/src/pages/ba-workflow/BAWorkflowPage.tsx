/**
 * Trang BA — chọn CR và để AI sinh tài liệu. Không có gì khác.
 *
 * Yêu cầu PO 2026-09-01: "trong BA thì làm lại đi, bỏ 2 tab document, solution và delivery,
 * khong cần text giải thích ở dưới khi chọn tab. BA chỉ để lại để thực hiện chọn CR và
 * AI Gen tài liệu thôi."
 *
 * Đã gỡ: 5 tab cũ (Requirements / Documents / Business / Solution / Delivery) — bốn tab sau
 * là bảng chỉ số suy diễn (business value theo domain, complexity score heuristic, health RAG)
 * không phải việc BA làm hằng ngày, và trùng với Dashboard.
 *
 * Luồng còn lại: chọn sản phẩm → chọn CR → BrsPanel lo toàn bộ phần AI:
 *   [Gen BRS] → sửa (tay hoặc nhờ AI) → gửi duyệt → duyệt → golive
 *   → [Merge Master Doc] → duyệt bản đề xuất.
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { RefreshCw, Search, FileText, Package, Wand2 } from 'lucide-react'
import { Btn, AppInput, AppSelect, EmptyState, Badge } from '../../components/ui'
import { crApi, type ChangeRequest } from '../../api/requests'
import { getProducts, type CatalogProduct } from '../../api/catalog'
import { BrsPanel } from '../../features/cr/BrsPanel'
import { CR_STATUS_LABELS, CR_PRIORITY_LABELS } from '../../features/cr/constants'
import { useStore } from '../../stores/auth'

const STATUS_STYLE: Record<string, { color: string; bg: string }> = {
  submitted:    { color: '#B54708', bg: '#FFFAEB' },
  reviewing:    { color: '#B54708', bg: '#FFFAEB' },
  approved:     { color: '#027A48', bg: '#ECFDF3' },
  implementing: { color: '#175CD3', bg: '#EFF8FF' },
  implemented:  { color: '#175CD3', bg: '#EFF8FF' },
  rejected:     { color: '#B42318', bg: '#FEF3F2' },
  cancelled:    { color: '#667085', bg: '#F2F4F7' },
}

export default function BAWorkflowPage() {
  const { addToast } = useStore()

  const [products, setProducts] = useState<CatalogProduct[]>([])
  const [crs, setCrs]           = useState<ChangeRequest[]>([])
  const [loading, setLoading]   = useState(false)

  const [productFilter, setProductFilter] = useState('')
  const [statusFilter,  setStatusFilter]  = useState('')
  const [search,        setSearch]        = useState('')
  const [selected,      setSelected]      = useState<ChangeRequest | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const [prods, list] = await Promise.all([
        getProducts().catch(() => [] as CatalogProduct[]),
        crApi.list(productFilter ? { product_id: productFilter } : undefined),
      ])
      setProducts(prods)
      // CR nội bộ (sinh tự động khi sửa tay Master Doc) không cần BRS — ẩn khỏi màn BA
      setCrs(list.filter(c => c.cr_kind !== 'internal'))
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setLoading(false)
    }
  }, [productFilter, addToast])

  useEffect(() => { void load() }, [load])

  // CR đang chọn có thể đã bị lọc mất → bỏ chọn để không hiện panel của CR không còn trong danh sách
  useEffect(() => {
    if (selected && !crs.some(c => c.id === selected.id)) setSelected(null)
  }, [crs, selected])

  const displayed = useMemo(() => {
    const kw = search.trim().toLowerCase()
    return crs.filter(c => {
      if (statusFilter && c.status !== statusFilter) return false
      if (!kw) return true
      return (
        c.request_code.toLowerCase().includes(kw) ||
        c.title.toLowerCase().includes(kw) ||
        (c.product_name ?? '').toLowerCase().includes(kw)
      )
    })
  }, [crs, statusFilter, search])

  const noProduct = displayed.filter(c => !c.product_id).length

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', gap: 14 }}>
      {/* Thanh lọc */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', width: 260 }}>
          <span style={{
            position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
            color: 'var(--app-neutral-400)', display: 'flex',
          }}>
            <Search size={14} strokeWidth={1.5} />
          </span>
          <AppInput value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Tìm mã CR, tiêu đề, sản phẩm" style={{ paddingLeft: 30 }} />
        </div>
        <AppSelect value={productFilter} onChange={e => setProductFilter(e.target.value)}
          style={{ width: 240 }}>
          <option value="">Tất cả sản phẩm</option>
          {products.map(p => (
            <option key={p.id} value={p.id}>{p.product_code} — {p.product_name}</option>
          ))}
        </AppSelect>
        <AppSelect value={statusFilter} onChange={e => setStatusFilter(e.target.value)}
          style={{ width: 170 }}>
          <option value="">Mọi trạng thái</option>
          {Object.entries(CR_STATUS_LABELS).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </AppSelect>
        <span style={{ fontSize: 13, color: 'var(--app-neutral-500)' }}>
          {displayed.length} CR
        </span>
        <div style={{ flex: 1 }} />
        <Btn variant="ghost" size="sm" onClick={load} title="Tải lại">
          <RefreshCw size={14} strokeWidth={1.5} />
        </Btn>
      </div>

      {noProduct > 0 && (
        <div className="state-banner state-banner-warn" style={{ fontSize: 13 }}>
          {noProduct} CR chưa gắn sản phẩm — chưa sinh được BRS vì AI cần Master Doc của sản phẩm
          làm bối cảnh AS-IS. Mở CR ở màn Requests và chọn sản phẩm trước.
        </div>
      )}

      <div style={{ display: 'flex', gap: 16, flex: 1, minHeight: 0 }}>
        {/* Danh sách CR */}
        <div style={{
          width: 380, flexShrink: 0, border: '1px solid var(--app-neutral-200)',
          borderRadius: 12, overflowY: 'auto', background: '#fff',
        }}>
          {loading && (
            <div style={{ padding: 14, fontSize: 12, color: 'var(--app-neutral-400)' }}>Đang tải…</div>
          )}
          {!loading && displayed.length === 0 && (
            <div style={{ padding: 20 }}>
              <EmptyState title="Không có CR nào" desc="Đổi bộ lọc, hoặc tạo CR ở màn Requests." />
            </div>
          )}
          {displayed.map(cr => {
            const st = STATUS_STYLE[cr.status] ?? STATUS_STYLE.cancelled
            const active = selected?.id === cr.id
            return (
              <div key={cr.id} onClick={() => setSelected(cr)}
                style={{
                  padding: '10px 12px', cursor: 'pointer',
                  borderBottom: '1px solid var(--app-neutral-100)',
                  borderLeft: active ? '3px solid var(--app-primary)' : '3px solid transparent',
                  background: active ? '#EFF4FF' : 'transparent',
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--app-neutral-900)' }}>
                    {cr.request_code}
                  </span>
                  <span style={{
                    fontSize: 11, fontWeight: 500, color: st.color, background: st.bg,
                    padding: '1px 7px', borderRadius: 16,
                  }}>{CR_STATUS_LABELS[cr.status] ?? cr.status}</span>
                  <div style={{ flex: 1 }} />
                  <span style={{ fontSize: 11, color: 'var(--app-neutral-400)' }}>
                    {CR_PRIORITY_LABELS[cr.priority] ?? cr.priority}
                  </span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--app-neutral-800)', marginTop: 3, lineHeight: 1.35 }}>
                  {cr.title}
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 5, marginTop: 4,
                  fontSize: 11, color: cr.product_name ? 'var(--app-neutral-500)' : '#B54708',
                }}>
                  <Package size={11} strokeWidth={1.5} />
                  {cr.product_name ?? 'chưa gắn sản phẩm'}
                  {cr.project_code && (
                    <span style={{ color: 'var(--app-neutral-400)' }}>· dự án {cr.project_code}</span>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Tài liệu do AI sinh cho CR đang chọn */}
        <div style={{ flex: 1, minWidth: 0, overflowY: 'auto' }}>
          {!selected ? (
            <div style={{
              height: '100%', minHeight: 320, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 10,
              border: '1px dashed var(--app-neutral-200)', borderRadius: 12,
              color: 'var(--app-neutral-400)',
            }}>
              <Wand2 size={22} strokeWidth={1.5} />
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--app-neutral-600)' }}>
                Chọn một CR để sinh tài liệu
              </div>
              <div style={{ fontSize: 12, maxWidth: 420, textAlign: 'center', lineHeight: 1.5 }}>
                AI đọc CR và Master Doc của sản phẩm để viết BRS. Sau khi BRS được duyệt và golive,
                bấm [Merge Master Doc] để cập nhật tài liệu tổng — bản cập nhật vẫn phải qua duyệt.
              </div>
            </div>
          ) : (
            <div>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12,
                paddingBottom: 10, borderBottom: '1px solid var(--app-neutral-200)',
              }}>
                <FileText size={16} strokeWidth={1.5} />
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--app-neutral-900)' }}>
                    {selected.request_code} · {selected.title}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginTop: 2 }}>
                    {selected.product_name ?? 'Chưa gắn sản phẩm'}
                    {selected.project_name && ` · dự án ${selected.project_name}`}
                  </div>
                </div>
                <div style={{ flex: 1 }} />
                <Badge variant="neutral">{CR_STATUS_LABELS[selected.status] ?? selected.status}</Badge>
              </div>
              <BrsPanel crId={selected.id} crStatus={selected.status} crCode={selected.request_code} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
