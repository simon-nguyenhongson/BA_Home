/**
 * ProductDocsView — tài liệu của một SẢN PHẨM trong trang Tài liệu.
 *
 * Yêu cầu PO 2026-09-01: "trong phần Tài liệu thì mới chỉ thấy tài liệu của project
 * chứ chưa thấy tài liệu của Product."
 *
 * Khác với tài liệu dự án (file trên đĩa theo cây thư mục), tài liệu sản phẩm nằm TRONG DB:
 * Master Doc + phiên bản, BRS theo từng CR, sơ đồ, kết quả test. Đây là khung nhìn hợp nhất,
 * không phải cây thư mục vật lý.
 */

import React, { useCallback, useEffect, useState } from 'react'
import {
  FileText, GitBranch, Shapes, FlaskConical, Package, AlertCircle,
  Upload, Plus, ExternalLink, Clock, type LucideIcon,
} from 'lucide-react'
import { Btn, Badge, EmptyState, Field, AppInput, AppTextarea, Modal, Drawer } from '../../components/ui'
import { MarkdownDocView } from '../../components/MarkdownDocView'
import {
  getMasterDocs, createMasterDoc, getMasterDocVersions,
  listBrs, type MasterDoc, type MasterDocVersion,
} from '../../api/ai'
import { crApi, type ChangeRequest } from '../../api/requests'
import type { CatalogProduct } from '../../api/catalog'
import { DiagramsPanel } from '../../features/diagrams/DiagramsPanel'
import { CR_STATUS_LABELS } from '../../features/cr/constants'
import { useStore } from '../../stores/auth'

type Tab = 'master' | 'crbrs' | 'diagram' | 'test'

const TABS: { key: Tab; label: string; icon: LucideIcon }[] = [
  { key: 'master',  label: 'Master Doc', icon: FileText },
  { key: 'crbrs',   label: 'CR & BRS',   icon: GitBranch },
  { key: 'diagram', label: 'Sơ đồ',      icon: Shapes },
  { key: 'test',    label: 'Test',       icon: FlaskConical },
]

const BRS_LABEL: Record<string, string> = {
  draft: 'Nháp', in_review: 'Đang review', approved: 'Đã duyệt', golive: 'Đã golive',
}

export function ProductDocsView({ product }: { product: CatalogProduct }) {
  const [tab, setTab] = useState<Tab>('master')

  return (
    <div>
      <div style={{
        padding: '14px 16px 12px',
        borderBottom: '1px solid var(--app-neutral-200)',
        background: 'var(--app-neutral-50)',
      }}>
        <h3 style={{
          margin: 0, fontSize: 15, fontWeight: 600, color: 'var(--app-neutral-900)',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <Package size={16} strokeWidth={1.5} /> {product.product_name}
        </h3>
        <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginTop: 4, display: 'flex', gap: 12 }}>
          <span>{product.product_code}</span>
          <span>{product.product_type}</span>
          {product.domain_code && <span>{product.domain_code}</span>}
          <span>{product.status}</span>
        </div>
      </div>

      <div style={{ padding: '12px 16px 16px' }}>
        <div className="ds-tabs" style={{ marginBottom: 16 }}>
          {TABS.map(t => (
            <button key={t.key}
              className={`ds-tab${tab === t.key ? ' active' : ''}`}
              onClick={() => setTab(t.key)}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <t.icon size={14} strokeWidth={1.5} /> {t.label}
              </span>
            </button>
          ))}
        </div>

        {tab === 'master'  && <MasterDocSection product={product} />}
        {tab === 'crbrs'   && <CrBrsSection product={product} />}
        {tab === 'diagram' && (
          <DiagramsPanel ownerType="product" ownerId={product.id} ownerLabel={product.product_name} />
        )}
        {tab === 'test'    && <TestSection product={product} />}
      </div>
    </div>
  )
}

// ── Master Doc ───────────────────────────────────────────────────────────────
function MasterDocSection({ product }: { product: CatalogProduct }) {
  const { addToast } = useStore()
  const [doc, setDoc]           = useState<MasterDoc | null>(null)
  const [versions, setVersions] = useState<MasterDocVersion[]>([])
  const [loading, setLoading]   = useState(true)
  const [viewOpen, setViewOpen] = useState(false)
  const [initOpen, setInitOpen] = useState(false)
  const [saving, setSaving]     = useState(false)

  // Khởi tạo Master Doc v1 — đường IMPORT / soạn tay (QĐ-14).
  // Đường "AI sinh từ BRD dự án" chưa dùng được vì project_briefs hiện chưa có dữ liệu.
  const [initTitle, setInitTitle]     = useState('')
  const [initContent, setInitContent] = useState('')
  // Ghi lại người dùng đã nạp từ file hay tự soạn — hai đường khác nhau trong hồ sơ kiểm toán
  const [initMethod, setInitMethod]   = useState<'import' | 'manual'>('manual')

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await getMasterDocs(product.id)
      const found = res.data[0] ?? null
      setDoc(found)
      setVersions(found ? (await getMasterDocVersions(found.id)).data : [])
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setLoading(false)
    }
  }, [product.id, addToast])

  useEffect(() => { void load() }, [load])

  async function doInit() {
    if (!initTitle.trim()) { addToast('Cần nhập tiêu đề tài liệu', 'warn'); return }
    if (initContent.trim().length < 20) {
      addToast('Nội dung quá ngắn — dán tài liệu sẵn có hoặc soạn phần khung trước', 'warn'); return
    }
    setSaving(true)
    try {
      await createMasterDoc({
        product_id: product.id,
        title: initTitle.trim(),
        content: initContent,
        init_method: initMethod,
      })
      addToast('Đã khởi tạo Master Doc v1.0', 'success')
      setInitOpen(false); setInitTitle(''); setInitContent('')
      await load()
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setSaving(false)
    }
  }

  async function openFile(f: File) {
    const text = await f.text()
    setInitContent(text)
    setInitMethod('import')
    if (!initTitle.trim()) setInitTitle(`Master Doc — ${product.product_name}`)
  }

  if (loading) return <div style={{ fontSize: 12, color: 'var(--app-neutral-400)' }}>Đang tải…</div>

  if (!doc) {
    return (
      <>
        <div className="state-banner state-banner-warn" style={{ fontSize: 13, marginBottom: 14 }}>
          <AlertCircle size={14} strokeWidth={1.5} style={{ marginRight: 6, verticalAlign: -2 }} />
          Sản phẩm này chưa có Master Doc. Chuỗi CR → BRS → Merge chưa chạy được vì AI cần
          Master Doc làm bối cảnh AS-IS.
        </div>
        <EmptyState
          title="Chưa có Master Doc"
          desc="Khởi tạo bản v1.0 bằng cách dán/nhập tài liệu đặc tả sẵn có, hoặc soạn phần khung rồi bổ sung dần. Từ v1.0 trở đi, mọi thay đổi đều đi qua phê duyệt."
          action={
            <Btn onClick={() => { setInitTitle(`Master Doc — ${product.product_name}`); setInitOpen(true) }}>
              <Plus size={14} strokeWidth={1.5} /> Khởi tạo Master Doc
            </Btn>
          }
        />

        <Modal title="Khởi tạo Master Doc v1.0" open={initOpen} onClose={() => setInitOpen(false)} width="720px">
          <Field label="Tiêu đề" required>
            <AppInput value={initTitle} onChange={e => setInitTitle(e.target.value)} />
          </Field>
          <Field label="Nội dung (Markdown)" required>
            <AppTextarea rows={14} value={initContent}
              onChange={e => { setInitContent(e.target.value); setInitMethod('manual') }}
              placeholder="Dán nội dung tài liệu đặc tả hiện có, hoặc soạn phần khung…" />
          </Field>
          <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', margin: '-6px 0 12px' }}>
            Sẽ ghi vào lịch sử là{' '}
            <b>{initMethod === 'import' ? 'import tài liệu sẵn có' : 'soạn trực tiếp trên giao diện'}</b>
            {' '}— nguồn khởi tạo là phần bắt buộc của hồ sơ kiểm toán tài liệu.
          </div>
          <label style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13,
            marginBottom: 16, cursor: 'pointer', color: 'var(--app-primary)',
          }}>
            <Upload size={14} strokeWidth={1.5} /> Nạp từ file .md / .txt
            <input type="file" accept=".md,.markdown,.txt" style={{ display: 'none' }}
              onChange={e => { const f = e.target.files?.[0]; if (f) void openFile(f) }} />
          </label>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
            <Btn variant="secondary" onClick={() => setInitOpen(false)}>Hủy</Btn>
            <Btn onClick={doInit} disabled={saving}>{saving ? 'Đang lưu…' : 'Khởi tạo'}</Btn>
          </div>
        </Modal>
      </>
    )
  }

  const pending = versions.filter(v => v.status === 'pending')

  return (
    <div>
      <div style={{
        border: '1px solid var(--app-neutral-200)', borderRadius: 12, padding: 14,
        display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14,
      }}>
        <FileText size={18} strokeWidth={1.5} />
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--app-neutral-900)' }}>
            {doc.title}
          </div>
          <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginTop: 2 }}>
            {doc.current_version} · cập nhật {doc.updated_at?.slice(0, 10)}
          </div>
        </div>
        <Btn size="sm" variant="secondary" onClick={() => setViewOpen(true)}>
          <ExternalLink size={14} strokeWidth={1.5} /> Xem nội dung
        </Btn>
      </div>

      {pending.length > 0 && (
        <div className="state-banner state-banner-warn" style={{ fontSize: 13, marginBottom: 14 }}>
          {pending.length} bản đề xuất đang chờ duyệt — Master Doc chưa thay đổi.
          Duyệt ở màn BA (CR tương ứng) để bản mới có hiệu lực.
        </div>
      )}

      <div style={{
        display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 600,
        color: 'var(--app-neutral-700)', marginBottom: 8,
      }}>
        <Clock size={14} strokeWidth={1.5} /> Lịch sử phiên bản ({versions.length})
      </div>
      <div style={{ border: '1px solid var(--app-neutral-200)', borderRadius: 12, overflowX: 'auto' }}>
        <table className="ds-table" style={{ fontSize: 12 }}>
          <thead>
            <tr>{['Bản', 'Nguồn', 'Trạng thái', 'Lý do / mô tả', 'Người tạo', 'Người duyệt'].map(h =>
              <th key={h}>{h}</th>)}</tr>
          </thead>
          <tbody>
            {versions.map(v => (
              <tr key={v.id}>
                <td style={{ fontWeight: 600 }}>{v.version}</td>
                <td>{SOURCE_LABEL[v.source] ?? v.source}</td>
                <td>
                  <Badge variant={v.status === 'approved' ? 'success' : v.status === 'pending' ? 'warning' : 'neutral'}>
                    {v.status === 'approved' ? 'Đã duyệt' : v.status === 'pending' ? 'Chờ duyệt' : 'Từ chối'}
                  </Badge>
                </td>
                <td style={{ maxWidth: 320 }}>{v.change_summary}</td>
                <td>{v.created_by ?? '—'}</td>
                <td>{v.approved_by ?? '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Master Doc là Markdown (heading, mục lục, bảng, code block). Trước đây render
          bằng một thẻ <pre>: bảng thành ASCII pipe, mục lục không bấm được, tài liệu
          1.000+ dòng không có cách nào tìm tới đúng mục. */}
      <Drawer title={doc.title} open={viewOpen} onClose={() => setViewOpen(false)} width="min(1180px, 95vw)">
        <MarkdownDocView
          content={doc.content ?? ''}
          filename={`${(product.product_code || 'master-doc').toLowerCase()}-master-doc-${doc.current_version}.md`}
          meta={<>Bản <strong>{doc.current_version}</strong> · trạng thái {doc.status}
            {' · '}cập nhật {doc.updated_at?.slice(0, 10) ?? '—'}
            {doc.pending_count ? ` · ${doc.pending_count} bản đề xuất chờ duyệt` : ''}</>}
        />
      </Drawer>
    </div>
  )
}

const SOURCE_LABEL: Record<string, string> = {
  initial:     'Khởi tạo',
  init_ai:     'AI sinh từ BRD',
  init_import: 'Import tài liệu',
  init_manual: 'Soạn tay',
  cr_merge:    'Merge từ BRS',
  manual:      'Sửa tay (CR nội bộ)',
}

// ── CR & BRS ─────────────────────────────────────────────────────────────────
function CrBrsSection({ product }: { product: CatalogProduct }) {
  const { addToast } = useStore()
  const [crs, setCrs]         = useState<ChangeRequest[]>([])
  const [brsMap, setBrsMap]   = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Promise.all([
      crApi.list({ product_id: product.id }),
      // Một lượt gọi cho BRS của đúng sản phẩm này rồi map theo cr_id — tránh N+1
      listBrs({ product_id: product.id }).then(r => r.data).catch(() => []),
    ])
      .then(([crList, brsList]) => {
        setCrs(crList)
        const map: Record<string, string> = {}
        brsList.forEach(b => { map[b.cr_id] = b.status })
        setBrsMap(map)
      })
      .catch(e => addToast((e as Error).message, 'error'))
      .finally(() => setLoading(false))
  }, [product.id, addToast])

  if (loading) return <div style={{ fontSize: 12, color: 'var(--app-neutral-400)' }}>Đang tải…</div>
  if (!crs.length) return <EmptyState title="Chưa có CR nào cho sản phẩm này" desc="CR tạo ở màn Requests, gắn vào sản phẩm này." />

  return (
    <div style={{ border: '1px solid var(--app-neutral-200)', borderRadius: 12, overflowX: 'auto' }}>
      <table className="ds-table" style={{ fontSize: 12 }}>
        <thead>
          <tr>{['Mã CR', 'Tiêu đề', 'Loại', 'Trạng thái CR', 'BRS', 'Dự án tài trợ'].map(h =>
            <th key={h}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {crs.map(cr => (
            <tr key={cr.id}>
              <td style={{ fontWeight: 600 }}>{cr.request_code}</td>
              <td style={{ maxWidth: 300 }}>{cr.title}</td>
              <td>{cr.cr_kind === 'internal' ? 'Nội bộ' : 'Nghiệp vụ'}</td>
              <td>{CR_STATUS_LABELS[cr.status] ?? cr.status}</td>
              <td>
                {cr.cr_kind === 'internal'
                  ? <span style={{ color: 'var(--app-neutral-400)' }}>không cần</span>
                  : brsMap[cr.id]
                    ? <Badge variant={brsMap[cr.id] === 'golive' ? 'info' : brsMap[cr.id] === 'approved' ? 'success' : 'warning'}>
                        {BRS_LABEL[brsMap[cr.id]] ?? brsMap[cr.id]}
                      </Badge>
                    : <span style={{ color: 'var(--app-neutral-400)' }}>chưa có</span>}
              </td>
              <td style={{ color: 'var(--app-neutral-500)' }}>{cr.project_code ?? '—'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Test ─────────────────────────────────────────────────────────────────────
function TestSection({ product }: { product: CatalogProduct }) {
  return (
    <EmptyState
      title="Kết quả test theo sản phẩm"
      desc={`Task test sinh theo từng CR sau khi BRS được duyệt. Xem và chạy ở màn Automation. `
        + `Phần tổng hợp độ phủ test theo sản phẩm ${product.product_code} sẽ bổ sung khi bảng kết quả `
        + `từng test case (automation_case_results) được triển khai.`}
    />
  )
}
