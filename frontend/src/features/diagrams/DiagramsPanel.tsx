/**
 * DiagramsPanel — khối quản lý diagram dùng chung cho Project | Product | BRS (QĐ-9).
 *
 * Diagram do AI vẽ là một file HTML+SVG tự chứa (skill diagram-design, MIT — xem
 * backend/ppg/app/skills/diagram-design/ATTRIBUTION.md). Hiển thị bằng iframe srcDoc với
 * sandbox RỖNG: không script, không form, không điều hướng, không truy cập cùng nguồn.
 * Backend đã từ chối mọi HTML có script/tài nguyên ngoài; sandbox là lớp chặn thứ hai.
 */

import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {
  Wand2, Download, Trash2, RefreshCw, Upload, PenLine, ExternalLink,
  History, CheckCircle2, Loader2, Shapes,
} from 'lucide-react'
import {
  Btn, AppInput, AppTextarea, AppSelect, Field, Modal, Drawer, EmptyState, Confirm,
} from '../../components/ui'
import {
  diagramApi, type Diagram, type DiagramOwnerType, type DiagramType, type DiagramVersion,
} from '../../api/diagrams'
import { useStore } from '../../stores/auth'
import { AiRunStage } from '../ai/AiRunStage'
import { useAiRun } from '../ai/useAiRun'

const SOURCE_LABEL: Record<string, string> = {
  ai:        'AI vẽ',
  ai_import: 'AI vẽ lại từ nguồn',
  manual:    'Soạn tay',
  upload:    'Nhập trực tiếp',
}

const STATUS_STYLE: Record<string, { color: string; bg: string; label: string }> = {
  draft:    { color: 'var(--app-warning)', bg: 'var(--app-warning-bg)', label: 'Nháp' },
  approved: { color: 'var(--app-success)', bg: 'var(--app-success-bg)', label: 'Đã duyệt' },
  archived: { color: 'var(--app-neutral-500)', bg: 'var(--ds-border-subtle)', label: 'Lưu trữ' },
}

interface Props {
  ownerType: DiagramOwnerType
  ownerId:   string
  /** Tên chủ sở hữu — chỉ dùng để gợi ý tên diagram mặc định */
  ownerLabel?: string
}

export function DiagramsPanel({ ownerType, ownerId, ownerLabel }: Props) {
  const { addToast } = useStore()

  const [types,   setTypes]   = useState<DiagramType[]>([])
  const [items,   setItems]   = useState<Diagram[]>([])
  const [loading, setLoading] = useState(false)

  const [genOpen,    setGenOpen]    = useState(false)
  const [importOpen, setImportOpen] = useState(false)
  const [busy,       setBusy]       = useState(false)

  // Hai lượt gọi AI có tường thuật riêng: vẽ mới và chỉnh bản có sẵn. Nhập Mermaid không
  // vẽ lại thì không gọi AI nên vẫn dùng `busy` như cũ.
  const draw   = useAiRun()
  const redraw = useAiRun()

  const [viewing,  setViewing]  = useState<Diagram | null>(null)
  const [versions, setVersions] = useState<DiagramVersion[]>([])
  const [editOpen, setEditOpen] = useState(false)
  const [instruction, setInstruction] = useState('')
  const [confirmDel, setConfirmDel] = useState<Diagram | null>(null)

  // ── form sinh mới ───────────────────────────────────────────────
  const [gType,   setGType]   = useState('workflow')
  const [gName,   setGName]   = useState('')
  const [gBrief,  setGBrief]  = useState('')
  const [gCtx,    setGCtx]    = useState(true)
  // Lỗi theo trường — DS đòi viền đỏ + dòng lỗi tại field, không chỉ toast
  const [gErr,    setGErr]    = useState<Record<string, string>>({})

  // ── form nhập nguồn ─────────────────────────────────────────────
  const [iType,   setIType]   = useState('workflow')
  const [iName,   setIName]   = useState('')
  const [iFormat, setIFormat] = useState<'mermaid' | 'drawio'>('mermaid')
  const [iText,   setIText]   = useState('')
  const [iRedraw, setIRedraw] = useState(true)
  const [iErr,    setIErr]    = useState<Record<string, string>>({})

  const load = useCallback(async () => {
    setLoading(true)
    try {
      setItems(await diagramApi.list({ owner_type: ownerType, owner_id: ownerId }))
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setLoading(false)
    }
  }, [ownerType, ownerId, addToast])

  useEffect(() => {
    diagramApi.types().then(setTypes).catch(() => { /* LOV lỗi thì form vẫn dùng được */ })
  }, [])
  useEffect(() => { if (ownerId) load() }, [load, ownerId])

  const typeHint = useMemo(
    () => types.find(t => t.code === gType)?.hint ?? '',
    [types, gType],
  )

  // ── hành động ───────────────────────────────────────────────────
  async function doGenerate() {
    if (!gName.trim()) { setGErr({ name: 'Đặt tên cho sơ đồ' }); return }
    setGErr({})
    const d = await draw.run<Diagram & { sanitized?: string[] }>('/diagrams/generate/stream', {
      owner_type: ownerType, owner_id: ownerId,
      diagram_type: gType, name: gName.trim(),
      brief: gBrief.trim(), include_context: gCtx,
    })
    // Lỗi đã hiện ngay trên sân khấu kèm mã lỗi và các bước đã qua — không đóng hộp
    // thoại, để người dùng sửa lại yêu cầu mà không phải nhập lại từ đầu.
    if (!d) return
    if (d.sanitized?.length) {
      addToast(`Đã gỡ khỏi diagram: ${d.sanitized.join(', ')}`, 'warn')
    }
    addToast(`Đã vẽ «${d.name}»`, 'success')
    setGenOpen(false); setGName(''); setGBrief('')
    draw.reset()
    await load()
    openViewer(d.id)
  }

  async function doImport() {
    const ie: Record<string, string> = {}
    if (!iName.trim()) ie.name = 'Đặt tên cho sơ đồ'
    if (!iText.trim()) ie.text = 'Dán nội dung Mermaid hoặc draw.io'
    if (Object.keys(ie).length) { setIErr(ie); return }
    setIErr({})
    setBusy(true)
    try {
      const d = await diagramApi.importSource({
        owner_type: ownerType, owner_id: ownerId,
        diagram_type: iType, name: iName.trim(),
        source_format: iFormat, source_text: iText, redraw: iRedraw,
      })
      addToast(`Đã nhập «${d.name}»`, 'success')
      setImportOpen(false); setIName(''); setIText('')
      await load()
      openViewer(d.id)
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setBusy(false)
    }
  }

  async function openViewer(id: string) {
    try {
      const [d, vs] = await Promise.all([
        diagramApi.get(id),
        diagramApi.versions(id).catch(() => [] as DiagramVersion[]),
      ])
      setViewing(d); setVersions(vs)
    } catch (e) {
      addToast((e as Error).message, 'error')
    }
  }

  async function doRegenerate() {
    if (!viewing || instruction.trim().length < 3) {
      addToast('Nêu rõ cần chỉnh gì', 'warn'); return
    }
    const id = viewing.id
    const d = await redraw.run<Diagram & { sanitized?: string[] }>(`/diagrams/${id}/regenerate/stream`, {
      instruction: instruction.trim(),
    })
    if (!d) return
    if (d.sanitized?.length) {
      addToast(`Đã gỡ khỏi diagram: ${d.sanitized.join(', ')}`, 'warn')
    }
    addToast(`Đã chỉnh lại diagram — v${d.version}`, 'success')
    setEditOpen(false); setInstruction('')
    redraw.reset()
    await Promise.all([load(), openViewer(id)])
  }

  async function doApprove() {
    if (!viewing) return
    try {
      await diagramApi.update(viewing.id, { status: 'approved' })
      addToast('Đã duyệt diagram', 'success')
      await Promise.all([load(), openViewer(viewing.id)])
    } catch (e) {
      addToast((e as Error).message, 'error')
    }
  }

  async function doDelete() {
    if (!confirmDel) return
    try {
      await diagramApi.remove(confirmDel.id)
      addToast('Đã xóa diagram', 'success')
      if (viewing?.id === confirmDel.id) setViewing(null)
      setConfirmDel(null)
      await load()
    } catch (e) {
      addToast((e as Error).message, 'error')
    }
  }

  function downloadHtml(d: Diagram) {
    if (!d.content) return
    const blob = new Blob([d.content], { type: 'text/html;charset=utf-8' })
    const url  = URL.createObjectURL(blob)
    const a    = document.createElement('a')
    a.href = url
    a.download = `${d.name.replace(/[^\p{L}\p{N}\-_ ]/gu, '')|| 'diagram'}.html`
    a.click()
    URL.revokeObjectURL(url)
  }

  function openInTab(d: Diagram) {
    if (!d.content) return
    const blob = new Blob([d.content], { type: 'text/html;charset=utf-8' })
    window.open(URL.createObjectURL(blob), '_blank', 'noopener')
  }

  async function showVersion(v: number) {
    if (!viewing) return
    try {
      const data = await diagramApi.versionContent(viewing.id, v)
      setViewing({ ...viewing, content: data.content, version: data.version })
    } catch (e) {
      addToast((e as Error).message, 'error')
    }
  }

  // ── render ──────────────────────────────────────────────────────
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        <span style={{ fontSize: 13, color: 'var(--app-neutral-500)' }}>
          {items.length} sơ đồ
        </span>
        <div style={{ flex: 1 }} />
        <Btn size="sm" onClick={() => { setGName(ownerLabel ? `Luồng nghiệp vụ — ${ownerLabel}` : ''); setGenOpen(true) }}>
          <Wand2 size={14} strokeWidth={1.5} /> Vẽ bằng AI
        </Btn>
        <Btn size="sm" variant="secondary" onClick={() => setImportOpen(true)}>
          <Upload size={14} strokeWidth={1.5} /> Nhập Mermaid / draw.io
        </Btn>
        <Btn size="sm" variant="ghost" onClick={load} title="Tải lại">
          <RefreshCw size={14} strokeWidth={1.5} />
        </Btn>
      </div>

      {loading && (
        <div style={{ fontSize: 12, color: 'var(--app-neutral-400)', marginBottom: 8 }}>Đang tải…</div>
      )}

      {!loading && items.length === 0 ? (
        <EmptyState
          title="Chưa có sơ đồ nào"
          desc="Bấm [Vẽ bằng AI] để sinh sơ đồ từ mô tả nghiệp vụ và dữ liệu đang có trong hệ, hoặc nhập từ file Mermaid / draw.io sẵn có."
        />
      ) : (
        <div style={{ border: '1px solid var(--app-neutral-200)', borderRadius: 12, overflowX: 'auto' }}>
          <table className="ds-table" style={{ fontSize: 13 }}>
            <thead>
              <tr>
                {['Tên sơ đồ', 'Loại', 'Nguồn', 'Bản', 'Trạng thái', 'Cập nhật', ''].map(h => (
                  <th key={h}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {items.map(d => {
                const st = STATUS_STYLE[d.status] ?? STATUS_STYLE.draft
                return (
                  <tr key={d.id} style={{ cursor: 'pointer' }} onClick={() => openViewer(d.id)}>
                    <td>
                      <div style={{ fontWeight: 600, color: 'var(--app-neutral-900)' }}>{d.name}</div>
                      {d.description && (
                        <div style={{
                          fontSize: 11, color: 'var(--app-neutral-500)', marginTop: 2,
                          maxWidth: 420, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                        }}>{d.description}</div>
                      )}
                    </td>
                    <td style={{ fontSize: 12 }}>{d.diagram_type_label}</td>
                    <td style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>
                      {SOURCE_LABEL[d.source] ?? d.source}
                      {d.source_format && ` · ${d.source_format}`}
                    </td>
                    <td style={{ fontSize: 12 }}>v{d.version}</td>
                    <td>
                      <span style={{
                        fontSize: 12, fontWeight: 500, color: st.color, background: st.bg,
                        padding: '2px 8px', borderRadius: 16,
                      }}>{st.label}</span>
                    </td>
                    <td style={{ fontSize: 11, color: 'var(--app-neutral-500)', whiteSpace: 'nowrap' }}>
                      {d.updated_at?.slice(0, 10)}
                    </td>
                    <td onClick={e => e.stopPropagation()}>
                      <Btn size="sm" variant="ghost" onClick={() => setConfirmDel(d)} title="Xóa">
                        <Trash2 size={14} strokeWidth={1.5} />
                      </Btn>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* ── Vẽ bằng AI ────────────────────────────────────────────── */}
      <Modal
        title={draw.error ? 'Lượt vẽ đã dừng' : draw.active ? 'AI đang vẽ sơ đồ' : 'Vẽ sơ đồ bằng AI'}
        open={genOpen}
        onClose={() => {
          // Đóng giữa lượt = dừng lượt vẽ. Nói rõ trong sân khấu để không ai đóng nhầm.
          if (draw.active) draw.cancel()
          draw.reset(); setGenOpen(false)
        }}
        width="620px"
      >
        {(draw.active || draw.error) ? (
          <AiRunStage
            title={`Claude đang vẽ «${gName.trim() || 'sơ đồ'}»`}
            steps={draw.steps}
            stats={draw.stats}
            error={draw.error}
            elapsedFrom={draw.startedAt}
            onCancel={() => { draw.cancel(); draw.reset() }}
            onRetry={() => draw.reset()}
            onClose={() => { draw.reset(); setGenOpen(false) }}
            verb="vẽ" 
          />
        ) : (
        <>
        <Field label="Loại sơ đồ" required>
          <AppSelect value={gType} onChange={e => setGType(e.target.value)}>
            {types.map(t => <option key={t.code} value={t.code}>{t.label}</option>)}
          </AppSelect>
        </Field>
        {typeHint && (
          <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', margin: '-6px 0 12px' }}>
            {typeHint}
          </div>
        )}
        <Field label="Tên sơ đồ" required error={gErr.name}>
          <AppInput value={gName} onChange={e => { setGName(e.target.value); setGErr({}) }}
            placeholder="Ví dụ: Luồng chuyển tiền liên ngân hàng 24/7" />
        </Field>
        <Field label="Mô tả nội dung cần vẽ">
          <AppTextarea rows={7} value={gBrief} onChange={e => setGBrief(e.target.value)}
            placeholder={'Nêu các bước, các bên tham gia, điều kiện rẽ nhánh, chốt kiểm soát…\n\nAI chỉ vẽ những gì suy ra được từ đây và từ dữ liệu trong hệ — không tự bịa thành phần.'} />
        </Field>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, marginBottom: 16 }}>
          <input type="checkbox" checked={gCtx} onChange={e => setGCtx(e.target.checked)} />
          Nạp thêm bối cảnh từ hệ thống
          <span style={{ color: 'var(--app-neutral-500)' }}>
            ({ownerType === 'product' ? 'Master Doc của sản phẩm'
              : ownerType === 'brs' ? 'nội dung BRS và CR'
              : 'thông tin dự án'})
          </span>
        </label>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <Btn variant="secondary" onClick={() => setGenOpen(false)}>Hủy</Btn>
          <Btn onClick={doGenerate}>
            <Wand2 size={14} strokeWidth={1.5} /> Vẽ
          </Btn>
        </div>
        </>
        )}
      </Modal>

      {/* ── Nhập nguồn ────────────────────────────────────────────── */}
      <Modal title="Nhập sơ đồ có sẵn" open={importOpen} onClose={() => setImportOpen(false)} width="640px">
        <Field label="Định dạng nguồn" required>
          <AppSelect value={iFormat} onChange={e => setIFormat(e.target.value as 'mermaid' | 'drawio')}>
            <option value="mermaid">Mermaid (.mmd — flowchart / sequence / state / ER)</option>
            <option value="drawio">draw.io (XML)</option>
          </AppSelect>
        </Field>
        <Field label="Loại sơ đồ đích" required>
          <AppSelect value={iType} onChange={e => setIType(e.target.value)}>
            {types.map(t => <option key={t.code} value={t.code}>{t.label}</option>)}
          </AppSelect>
        </Field>
        <Field label="Tên sơ đồ" required error={iErr.name}>
          <AppInput value={iName} onChange={e => { setIName(e.target.value); setIErr(p => ({ ...p, name: '' })) }} />
        </Field>
        <Field label="Dán nội dung nguồn" required error={iErr.text}>
          <AppTextarea rows={9} value={iText} onChange={e => { setIText(e.target.value); setIErr(p => ({ ...p, text: '' })) }}
            style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: 12 }}
            placeholder={iFormat === 'mermaid'
              ? 'flowchart TD\n  A[Khách hàng] --> B{Đủ hạn mức?}\n  B -->|Có| C[Ghi nợ]\n  B -->|Không| D[Từ chối]'
              : '<mxfile ...> … </mxfile>'} />
        </Field>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, marginBottom: 16 }}>
          <input type="checkbox" checked={iRedraw} onChange={e => setIRedraw(e.target.checked)}
            style={{ marginTop: 3 }} />
          <span>
            Để AI vẽ lại theo Design System
            <div style={{ color: 'var(--app-neutral-500)', fontSize: 12, marginTop: 2 }}>
              Bỏ chọn thì chỉ lưu mã Mermaid gốc (không tốn hạn mức AI, nhưng không theo bộ nhận diện
              và trình duyệt chưa render — chỉ xem được mã nguồn). Nguồn draw.io bắt buộc vẽ lại.
            </div>
          </span>
        </label>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <Btn variant="secondary" onClick={() => setImportOpen(false)}>Hủy</Btn>
          <Btn onClick={doImport} disabled={busy}>
            {busy ? <><Loader2 size={14} className="spin" /> Đang xử lý…</> : <><Upload size={14} strokeWidth={1.5} /> Nhập</>}
          </Btn>
        </div>
      </Modal>

      {/* ── Xem sơ đồ ─────────────────────────────────────────────── */}
      <Drawer
        title={viewing ? `${viewing.name} · v${viewing.version}` : ''}
        open={!!viewing}
        onClose={() => setViewing(null)}
        width="min(1200px, 92vw)"
      >
        {viewing && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, height: '100%' }}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>
                {viewing.diagram_type_label} · {SOURCE_LABEL[viewing.source] ?? viewing.source}
                {viewing.created_by && ` · ${viewing.created_by}`}
              </span>
              <div style={{ flex: 1 }} />
              <Btn size="sm" variant="secondary" onClick={() => setEditOpen(true)}>
                <PenLine size={14} strokeWidth={1.5} /> Sửa bằng AI
              </Btn>
              {viewing.status !== 'approved' && (
                <Btn size="sm" variant="secondary" onClick={doApprove}>
                  <CheckCircle2 size={14} strokeWidth={1.5} /> Duyệt
                </Btn>
              )}
              <Btn size="sm" variant="ghost" onClick={() => openInTab(viewing)} title="Mở tab mới">
                <ExternalLink size={14} strokeWidth={1.5} />
              </Btn>
              <Btn size="sm" variant="ghost" onClick={() => downloadHtml(viewing)} title="Tải file HTML">
                <Download size={14} strokeWidth={1.5} />
              </Btn>
            </div>

            {viewing.format === 'html' ? (
              <iframe
                title={viewing.name}
                srcDoc={viewing.content ?? ''}
                /* sandbox rỗng: chặn script, form, điều hướng, truy cập same-origin */
                sandbox=""
                style={{
                  width: '100%', flex: 1, minHeight: 460, border: '1px solid var(--app-neutral-200)',
                  borderRadius: 12, background: 'var(--app-white)',
                }}
              />
            ) : (
              <div>
                <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginBottom: 6 }}>
                  Sơ đồ lưu ở dạng mã {viewing.format} — chưa render trực tiếp. Dùng [Sửa bằng AI]
                  để vẽ lại thành hình theo Design System.
                </div>
                <pre style={{
                  background: 'var(--app-neutral-50)', border: '1px solid var(--app-neutral-200)',
                  borderRadius: 8, padding: 12, fontSize: 12, overflow: 'auto', maxHeight: 420,
                }}>{viewing.content}</pre>
              </div>
            )}

            {versions.length > 1 && (
              <div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6, fontSize: 12,
                  fontWeight: 600, color: 'var(--app-neutral-700)', marginBottom: 6,
                }}>
                  <History size={13} strokeWidth={1.5} /> Lịch sử phiên bản
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {versions.map(v => (
                    <button key={v.id} onClick={() => showVersion(v.version)}
                      title={`${v.change_summary} — ${v.created_by ?? ''}`}
                      style={{
                        border: '1px solid var(--app-neutral-200)', borderRadius: 8,
                        background: viewing.version === v.version ? 'var(--app-primary)' : 'var(--app-white)',
                        color: viewing.version === v.version ? 'var(--app-white)' : 'var(--app-neutral-700)',
                        fontSize: 12, padding: '3px 10px', cursor: 'pointer',
                        fontFamily: 'var(--font)',
                      }}>
                      v{v.version}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Drawer>

      {/* ── Sửa bằng AI ───────────────────────────────────────────── */}
      <Modal
        title={redraw.error ? 'Lượt chỉnh đã dừng' : redraw.active ? 'AI đang chỉnh sơ đồ' : 'Chỉnh sơ đồ bằng AI'}
        open={editOpen}
        onClose={() => {
          if (redraw.active) redraw.cancel()
          redraw.reset(); setEditOpen(false)
        }}
        width="620px"
      >
        {(redraw.active || redraw.error) ? (
          <AiRunStage
            title={`Claude đang chỉnh «${viewing?.name ?? 'sơ đồ'}»`}
            steps={redraw.steps}
            stats={redraw.stats}
            error={redraw.error}
            elapsedFrom={redraw.startedAt}
            onCancel={() => { redraw.cancel(); redraw.reset() }}
            onRetry={() => redraw.reset()}
            onClose={() => { redraw.reset(); setEditOpen(false) }}
            verb="chỉnh" 
          />
        ) : (
        <>
        <Field label="Cần chỉnh gì?" required>
          <AppTextarea rows={5} value={instruction} onChange={e => setInstruction(e.target.value)}
            placeholder="Ví dụ: thêm bước kiểm tra AML sau khi xác thực OTP; tô đậm nhánh từ chối." />
        </Field>
        <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginBottom: 16 }}>
          Bản hiện tại được giữ lại trong lịch sử phiên bản, xem lại được bất cứ lúc nào.
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <Btn variant="secondary" onClick={() => setEditOpen(false)}>Hủy</Btn>
          <Btn onClick={doRegenerate}>
            <Wand2 size={14} strokeWidth={1.5} /> Chỉnh
          </Btn>
        </div>
        </>
        )}
      </Modal>

      <Confirm
        open={!!confirmDel}
        message={confirmDel ? `Xóa sơ đồ «${confirmDel.name}» và toàn bộ lịch sử phiên bản?` : ''}
        onConfirm={doDelete}
        onCancel={() => setConfirmDel(null)}
      />
    </div>
  )
}

export function DiagramsPanelHeader() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <Shapes size={15} strokeWidth={1.5} /> Sơ đồ
    </div>
  )
}
