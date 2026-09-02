import { useEffect, useState } from 'react'
import {
  CheckCircle2, GitMerge, History, Pencil, RefreshCw, Rocket, Send, Sparkles, X, Shapes,
} from 'lucide-react'
import {
  getBrsOfCr, updateBrs, changeBrsStatus, getBrsHistory,
  getBrsHistoryContent, approveMasterDocVersion, rejectMasterDocVersion,
  getCrMasterDocImpact,
  type BrsDocument, type BrsHistoryItem, type DiffResult, type MasterDocImpact,
} from '../../api/ai'
import { Badge, Btn, Field, AppTextarea, Modal, EmptyState } from '../../components/ui'
import { MarkdownDocView } from '../../components/MarkdownDocView'
import { AiRunStage } from '../ai/AiRunStage'
import { useAiRun } from '../ai/useAiRun'
import { useStore } from '../../stores/auth'
import { DiffView } from './DiffView'
import { DiagramsPanel } from '../diagrams/DiagramsPanel'

const BRS_STATUS_LABEL: Record<string, string> = {
  draft: 'Nháp',
  in_review: 'Đang review',
  approved: 'Đã duyệt',
  golive: 'Đã golive',
}

const BRS_STATUS_VARIANT: Record<string, 'neutral' | 'warning' | 'success' | 'info'> = {
  draft: 'neutral',
  in_review: 'warning',
  approved: 'success',
  golive: 'info',
}

const BRS_FLOW = ['draft', 'in_review', 'approved', 'golive']

/**
 * Khối tài liệu BRS của một Change Request.
 * Luồng: [Gen BRS] → review/sửa (tay hoặc AI) → gửi duyệt → duyệt → golive
 *        → [Merge Master Doc] → duyệt bản đề xuất.
 */
export function BrsPanel({ crId, crStatus, crCode }: { crId: string; crStatus: string; crCode: string }) {
  const addToast = useStore(s => s.addToast)
  const [brs, setBrs] = useState<BrsDocument | null>(null)
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState('')
  // Ba lượt gọi AI của luồng BA, mỗi lượt có sân khấu tường thuật riêng
  const genRun    = useAiRun()   // sinh BRS
  const reviseRun = useAiRun()   // AI chỉnh BRS
  const mergeRun  = useAiRun()   // hợp nhất vào Master Doc
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState('')
  const [reviseOpen, setReviseOpen] = useState(false)
  const [instruction, setInstruction] = useState('')
  const [rejectOpen, setRejectOpen] = useState(false)
  const [rejectNote, setRejectNote] = useState('')
  const [historyOpen, setHistoryOpen] = useState(false)
  const [history, setHistory] = useState<BrsHistoryItem[]>([])
  const [mergeDiff, setMergeDiff] = useState<{ versionId: string; summary: string; diff: DiffResult } | null>(null)
  const [impacts, setImpacts] = useState<MasterDocImpact[] | null>(null)

  const canGenerate = ['approved', 'implementing', 'implemented'].includes(crStatus)

  const load = async () => {
    setLoading(true)
    try {
      const res = await getBrsOfCr(crId)
      setBrs(res.data)
      setDraft(res.data?.content ?? '')
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => { void load() }, [crId])

  const run = async (key: string, fn: () => Promise<void>) => {
    setBusy(key)
    try {
      await fn()
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setBusy('')
    }
  }

  const doGenerate = async () => {
    const res = await genRun.run<{ data: BrsDocument }>(
      `/requests/change-requests/${crId}/brs/generate/stream`, {},
    )
    // Lỗi đã hiện trên sân khấu kèm mã lỗi và bước dừng — không đóng, để sửa rồi thử lại
    if (!res) return
    setBrs(res.data)
    setDraft(res.data.content)
    genRun.reset()
    addToast(`AI đã sinh BRS — v${res.data.version}`, 'success')
  }

  const doRevise = async () => {
    if (!brs || !instruction.trim()) return
    const res = await reviseRun.run<{
      data: BrsDocument
      meta?: { review_reset?: boolean; message?: string }
    }>(`/brs/${brs.id}/revise/stream`, { instruction: instruction.trim() })
    if (!res) return
    setBrs(res.data)
    setDraft(res.data.content)
    setReviseOpen(false)
    setInstruction('')
    reviseRun.reset()
    addToast(`AI đã cập nhật BRS — v${res.data.version}`, 'success')
    // Nội dung đổi khi đang review thì BRS bị trả về nháp — phải nói rõ, nếu không
    // BA tưởng vẫn đang chờ duyệt và không bấm gửi duyệt lại.
    if (res.meta?.review_reset && res.meta.message) addToast(res.meta.message, 'warn')
  }

  const doSaveEdit = () => run('save', async () => {
    if (!brs) return
    const res = await updateBrs(brs.id, { content: draft })
    setBrs(res.data)
    setEditing(false)
    addToast(`Đã lưu BRS — v${res.data.version}`, 'success')
  })

  const doStatus = (action: string, note = '') => run(action, async () => {
    if (!brs) return
    const res = await changeBrsStatus(brs.id, action, note)
    setBrs(res.data)
    setRejectOpen(false)
    setRejectNote('')
    if (res.meta?.automation_task_created) {
      addToast('BRS đã duyệt — đã tạo công việc automation test cho CR', 'success')
    } else {
      addToast(`BRS chuyển sang: ${BRS_STATUS_LABEL[res.data.status]}`, 'success')
    }
  })

  const doMerge = async () => {
    if (!brs) return
    const res = await mergeRun.run<{
      data: { version_id: string; change_summary: string }
      diff: DiffResult
    }>(`/brs/${brs.id}/merge-master-doc/stream`, {})
    if (!res) return
    mergeRun.reset()
    setMergeDiff({ versionId: res.data.version_id, summary: res.data.change_summary, diff: res.diff })
  }

  const doApproveMerge = () => run('approveMerge', async () => {
    if (!mergeDiff) return
    const res = await approveMasterDocVersion(mergeDiff.versionId)
    setMergeDiff(null)
    addToast(`Master Doc đã cập nhật — ${res.meta.version}`, 'success')
  })

  const doRejectMerge = () => run('rejectMerge', async () => {
    if (!mergeDiff) return
    await rejectMasterDocVersion(mergeDiff.versionId, 'BA từ chối bản đề xuất')
    setMergeDiff(null)
    addToast('Đã từ chối bản đề xuất Master Doc', 'info')
  })

  const openHistory = () => run('history', async () => {
    if (!brs) return
    const res = await getBrsHistory(brs.id)
    setHistory(res.data)
    setHistoryOpen(true)
  })

  const openImpact = () => run('impact', async () => {
    const res = await getCrMasterDocImpact(crId)
    setImpacts(res.data)
  })

  if (loading) {
    return <div style={{ padding: 20, color: 'var(--app-neutral-500)' }}>Đang tải tài liệu BRS...</div>
  }

  // Đang sinh BRS lần đầu: thay chỗ trống bằng sân khấu tường thuật, không để nút mờ
  // rồi đứng yên hàng phút.
  if (!brs && (genRun.active || genRun.error)) {
    return (
      <div style={{ padding: 8 }}>
        <AiRunStage
          title={`Claude đang viết BRS cho ${crCode}`}
          steps={genRun.steps}
          stats={genRun.stats}
          error={genRun.error}
          elapsedFrom={genRun.startedAt}
          verb="sinh"
          onCancel={() => { genRun.cancel(); genRun.reset() }}
          onRetry={() => genRun.reset()}
          onClose={() => genRun.reset()}
        />
      </div>
    )
  }

  if (!brs) {
    return (
      <div style={{ padding: 8 }}>
        <EmptyState
          title="Chưa có tài liệu BRS"
          desc={canGenerate
            ? 'Sinh BRS từ nội dung CR và Master Doc hiện hành để bắt đầu.'
            : 'CR phải được duyệt trước khi sinh BRS.'}
          action={
            <Btn onClick={doGenerate} disabled={!canGenerate}>
              <Sparkles size={14} strokeWidth={1.5} /> Gen BRS
            </Btn>
          }
        />
      </div>
    )
  }

  const flowIdx = BRS_FLOW.indexOf(brs.status)

  // Ba luồng AI trên BRS đã có: sinh lại, AI chỉnh, hợp nhất Master Doc. Lượt nào đang
  // chạy thì chiếm chỗ nội dung — người dùng thấy tiến độ thật chứ không phải nút mờ.
  const liveRun =
    genRun.active    || genRun.error    ? { r: genRun,    verb: 'sinh',      title: `Claude đang sinh lại BRS cho ${crCode}` }
    : reviseRun.active || reviseRun.error ? { r: reviseRun, verb: 'chỉnh',     title: `Claude đang chỉnh BRS v${brs.version}` }
    : mergeRun.active  || mergeRun.error  ? { r: mergeRun,  verb: 'hợp nhất', title: `Claude đang hợp nhất BRS v${brs.version} vào Master Doc` }
    : null

  if (liveRun) {
    return (
      <div style={{ padding: 8 }}>
        <AiRunStage
          title={liveRun.title}
          steps={liveRun.r.steps}
          stats={liveRun.r.stats}
          error={liveRun.r.error}
          elapsedFrom={liveRun.r.startedAt}
          verb={liveRun.verb}
          onCancel={() => { liveRun.r.cancel(); liveRun.r.reset() }}
          onRetry={() => liveRun.r.reset()}
          onClose={() => liveRun.r.reset()}
        />
      </div>
    )
  }

  return (
    <div>
      {/* Thanh trạng thái + hành động */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
        paddingBottom: 12, borderBottom: '1px solid var(--app-neutral-200)', marginBottom: 12,
      }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--app-neutral-900)' }}>{brs.title}</span>
        <Badge variant={BRS_STATUS_VARIANT[brs.status]}>{BRS_STATUS_LABEL[brs.status]}</Badge>
        <span style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>v{brs.version}</span>

        <div style={{ display: 'flex', gap: 4, alignItems: 'center', marginLeft: 4 }}>
          {BRS_FLOW.map((s, i) => (
            <div key={s} style={{
              height: 4, width: 28, borderRadius: 2,
              background: i <= flowIdx ? 'var(--app-primary)' : 'var(--app-neutral-200)',
            }} title={BRS_STATUS_LABEL[s]} />
          ))}
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <Btn variant="ghost" size="sm" onClick={openHistory} loading={busy === 'history'}>
            <History size={14} strokeWidth={1.5} /> Lịch sử
          </Btn>
          <Btn variant="ghost" size="sm" onClick={openImpact} loading={busy === 'impact'}>
            <GitMerge size={14} strokeWidth={1.5} /> Tác động Master Doc
          </Btn>

          {['draft', 'in_review'].includes(brs.status) && (
            <>
              <Btn variant="secondary" size="sm" onClick={() => setReviseOpen(true)}>
                <Sparkles size={14} strokeWidth={1.5} /> AI chỉnh sửa
              </Btn>
              {editing ? (
                <>
                  <Btn size="sm" onClick={doSaveEdit} loading={busy === 'save'}>Lưu</Btn>
                  <Btn variant="secondary" size="sm" onClick={() => { setEditing(false); setDraft(brs.content) }}>
                    Cancel
                  </Btn>
                </>
              ) : (
                <Btn variant="secondary" size="sm" onClick={() => setEditing(true)}>
                  <Pencil size={14} strokeWidth={1.5} /> Sửa
                </Btn>
              )}
            </>
          )}

          {brs.status === 'draft' && (
            <>
              <Btn variant="secondary" size="sm" onClick={doGenerate}>
                <RefreshCw size={14} strokeWidth={1.5} /> Sinh lại
              </Btn>
              <Btn size="sm" onClick={() => doStatus('submit_review')} loading={busy === 'submit_review'}>
                <Send size={14} strokeWidth={1.5} /> Gửi duyệt
              </Btn>
            </>
          )}
          {brs.status === 'in_review' && (
            <>
              <Btn variant="danger" size="sm" onClick={() => setRejectOpen(true)}>Từ chối</Btn>
              <Btn size="sm" onClick={() => doStatus('approve')} loading={busy === 'approve'}>
                <CheckCircle2 size={14} strokeWidth={1.5} /> Duyệt
              </Btn>
            </>
          )}
          {brs.status === 'approved' && (
            <Btn size="sm" onClick={() => doStatus('golive')} loading={busy === 'golive'}>
              <Rocket size={14} strokeWidth={1.5} /> Golive
            </Btn>
          )}
          {brs.status === 'golive' && (
            <Btn size="sm" onClick={doMerge}>
              <GitMerge size={14} strokeWidth={1.5} /> Merge Master Doc
            </Btn>
          )}
        </div>
      </div>

      {/* Nội dung */}
      {editing ? (
        <AppTextarea
          rows={26}
          value={draft}
          onChange={e => setDraft(e.target.value)}
          style={{ fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: '20px' }}
        />
      ) : (
        // BRS cũng là Markdown 12 mục — cùng lỗi <pre> như Master Doc
        <div style={{
          background: 'var(--app-neutral-50)', border: '1px solid var(--app-neutral-200)',
          borderRadius: 8, padding: 16, height: 620, overflow: 'hidden',
        }}>
          <MarkdownDocView
            content={brs.content}
            filename={`${crCode.toLowerCase()}-brs-v${brs.version}.md`}
            meta={<>BRS <strong>v{brs.version}</strong> của {crCode}</>}
          />
        </div>
      )}

      {/* Modal: AI chỉnh sửa */}
      <Modal title="AI chỉnh sửa BRS" open={reviseOpen} onClose={() => setReviseOpen(false)} width="640px">
        <Field label="Yêu cầu chỉnh sửa" required>
          <AppTextarea
            rows={6}
            value={instruction}
            onChange={e => setInstruction(e.target.value)}
            placeholder="Mô tả điều cần sửa, ví dụ: bổ sung yêu cầu phi chức năng về thời gian phản hồi dưới 2 giây"
          />
        </Field>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Btn variant="secondary" onClick={() => setReviseOpen(false)}>Cancel</Btn>
          <Btn onClick={doRevise} disabled={!instruction.trim()}>
            <Sparkles size={14} strokeWidth={1.5} /> Chỉnh sửa
          </Btn>
        </div>
      </Modal>

      {/* Modal: từ chối */}
      <Modal title="Từ chối BRS" open={rejectOpen} onClose={() => setRejectOpen(false)} width="560px">
        <Field label="Lý do từ chối" required>
          <AppTextarea
            rows={4}
            value={rejectNote}
            onChange={e => setRejectNote(e.target.value)}
            placeholder="Nêu rõ điểm cần sửa để BA xử lý"
          />
        </Field>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
          <Btn variant="secondary" onClick={() => setRejectOpen(false)}>Cancel</Btn>
          <Btn variant="danger" onClick={() => doStatus('reject', rejectNote)}
            loading={busy === 'reject'} disabled={!rejectNote.trim()}>
            Từ chối
          </Btn>
        </div>
      </Modal>

      {/* Modal: lịch sử */}
      <Modal title="Lịch sử thay đổi BRS" open={historyOpen} onClose={() => setHistoryOpen(false)} width="760px">
        <BrsHistoryList brsId={brs.id} items={history} />
      </Modal>

      {/* Sơ đồ của BRS (QĐ-9) — mỗi CR có sơ đồ luồng riêng, gắn vào BRS */}
      <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--app-neutral-200)' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600,
          color: 'var(--app-neutral-800)', marginBottom: 10,
        }}>
          <Shapes size={15} strokeWidth={1.5} /> Sơ đồ của BRS này
        </div>
        <DiagramsPanel ownerType="brs" ownerId={brs.id} ownerLabel={crCode} />
      </div>

      {/* Modal: duyệt bản đề xuất Master Doc */}
      <Modal
        title="Duyệt cập nhật Master Doc"
        open={!!mergeDiff}
        onClose={() => setMergeDiff(null)}
        width="1100px"
      >
        {mergeDiff && (
          <>
            <div style={{
              background: 'var(--app-info-bg)', borderRadius: 8, padding: 12, marginBottom: 12,
              fontSize: 14, color: 'var(--app-neutral-700)', whiteSpace: 'pre-wrap',
            }}>
              <strong style={{ display: 'block', marginBottom: 4 }}>AI tóm tắt thay đổi</strong>
              {mergeDiff.summary}
            </div>
            <DiffView diff={mergeDiff.diff} />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 12 }}>
              <Btn variant="secondary" onClick={() => setMergeDiff(null)}>Để sau</Btn>
              <Btn variant="danger" onClick={doRejectMerge} loading={busy === 'rejectMerge'}>
                <X size={14} strokeWidth={1.5} /> Từ chối
              </Btn>
              <Btn onClick={doApproveMerge} loading={busy === 'approveMerge'}>
                <CheckCircle2 size={14} strokeWidth={1.5} /> Duyệt và cập nhật Master Doc
              </Btn>
            </div>
          </>
        )}
      </Modal>

      {/* Modal: tác động Master Doc của CR */}
      <Modal
        title={`Tác động của ${crCode} lên Master Doc`}
        open={!!impacts}
        onClose={() => setImpacts(null)}
        width="1100px"
      >
        {impacts && impacts.length === 0 && (
          <EmptyState
            title="Chưa có tác động nào"
            desc="CR này chưa được merge vào Master Doc nào."
          />
        )}
        {impacts?.map(im => (
          <div key={im.version_id} style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6, flexWrap: 'wrap' }}>
              <strong style={{ fontSize: 14 }}>{im.product_name || im.master_doc_title}</strong>
              <Badge variant={im.status === 'approved' ? 'success' : im.status === 'pending' ? 'warning' : 'danger'}>
                {im.status === 'approved' ? 'Đã áp dụng' : im.status === 'pending' ? 'Chờ duyệt' : 'Từ chối'}
              </Badge>
              <span style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>
                {im.base_label} → {im.version}
              </span>
            </div>
            <div style={{
              fontSize: 13, color: 'var(--app-neutral-600)', marginBottom: 8, whiteSpace: 'pre-wrap',
            }}>{im.change_summary}</div>
            <DiffView diff={im} compact />
          </div>
        ))}
      </Modal>
    </div>
  )
}

function BrsHistoryList({ brsId, items }: { brsId: string; items: BrsHistoryItem[] }) {
  const addToast = useStore(s => s.addToast)
  const [content, setContent] = useState<{ version: number; text: string } | null>(null)

  const SOURCE_LABEL: Record<string, string> = {
    generate: 'AI sinh mới',
    revise: 'AI chỉnh sửa',
    manual_edit: 'Sửa tay',
    status_change: 'Đổi trạng thái',
  }

  const view = async (item: BrsHistoryItem) => {
    try {
      const res = await getBrsHistoryContent(brsId, item.id)
      setContent({ version: item.version, text: res.data.content })
    } catch (e) {
      addToast((e as Error).message, 'error')
    }
  }

  if (content) {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
          <strong>Nội dung phiên bản v{content.version}</strong>
          <Btn variant="secondary" size="sm" onClick={() => setContent(null)}>Quay lại danh sách</Btn>
        </div>
        <pre style={{
          whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)', fontSize: 13,
          background: 'var(--app-neutral-50)', border: '1px solid var(--app-neutral-200)',
          borderRadius: 8, padding: 12, maxHeight: 460, overflow: 'auto', margin: 0,
        }}>{content.text}</pre>
      </div>
    )
  }

  return (
    <table className="ds-table">
      <thead>
        <tr>
          <th style={{ width: 70 }}>Phiên bản</th>
          <th style={{ width: 130 }}>Nguồn</th>
          <th>Ghi chú</th>
          <th style={{ width: 140 }}>Thời điểm</th>
          <th style={{ width: 90 }}></th>
        </tr>
      </thead>
      <tbody>
        {items.map(h => (
          <tr key={h.id}>
            <td>v{h.version}</td>
            <td>{SOURCE_LABEL[h.source] || h.source}</td>
            <td>{h.change_note}</td>
            <td>{new Date(h.created_at).toLocaleString('vi-VN')}</td>
            <td>
              <Btn variant="link" size="sm" onClick={() => void view(h)}>Xem</Btn>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
