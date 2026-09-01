import { useEffect, useState } from 'react'
import {
  CheckCircle2, Download, FileSpreadsheet, Link2, Play, Sparkles, Trash2,
} from 'lucide-react'
import {
  getAutomationTasks, getAutomationTask, generateTestCases, updateTestCase, deleteTestCase,
  importTestRun, generateTestReport, closeAutomationTask, downloadAutomationExport,
  type AutomationTask, type AutomationCase, type AutomationRun,
} from '../../api/ai'
import { Badge, Btn, Card, EmptyState, Modal, Field, AppInput } from '../../components/ui'
import { useStore } from '../../stores/auth'

const STUDIO_URL: string =
  (import.meta.env.VITE_STUDIO_URL as string | undefined) ?? 'http://localhost:4700'

const TASK_STATUS_LABEL: Record<string, string> = {
  need_test: 'Cần test',
  cases_generated: 'Đã có test case',
  in_progress: 'Đang chạy',
  closed: 'Đã đóng',
}
const TASK_STATUS_VARIANT: Record<string, 'warning' | 'info' | 'primary' | 'success'> = {
  need_test: 'warning',
  cases_generated: 'info',
  in_progress: 'primary',
  closed: 'success',
}
const CASE_STATUS_LABEL: Record<string, string> = {
  draft: 'Nháp', ready: 'Sẵn sàng', mapped: 'Đã map script', passed: 'Đạt', failed: 'Không đạt',
}
const CASE_STATUS_VARIANT: Record<string, 'neutral' | 'info' | 'success' | 'danger'> = {
  draft: 'neutral', ready: 'neutral', mapped: 'info', passed: 'success', failed: 'danger',
}

interface StudioTestcase { id: string; name: string }

/** Danh sách công việc automation test sinh ra từ CR có BRS đã duyệt. */
export function AutomationTasksTab() {
  const addToast = useStore(s => s.addToast)
  const [tasks, setTasks] = useState<AutomationTask[]>([])
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('')

  const load = async () => {
    setLoading(true)
    try {
      const res = await getAutomationTasks(filter ? { status: filter } : undefined)
      setTasks(res.data)
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => { void load() }, [filter])

  if (selected) {
    return <TaskDetail taskId={selected} onBack={() => { setSelected(null); void load() }} />
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
        <div className="ds-seg">
          {[['', 'Tất cả'], ['need_test', 'Cần test'], ['cases_generated', 'Đã có test case'],
            ['in_progress', 'Đang chạy'], ['closed', 'Đã đóng']].map(([v, l]) => (
            <button key={v} className={`ds-seg__item${filter === v ? ' active' : ''}`}
              onClick={() => setFilter(v)}>{l}</button>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <a className="btn btn-secondary btn-sm" href={STUDIO_URL} target="_blank" rel="noreferrer">
          Mở Capture Studio
        </a>
      </div>

      {loading ? (
        <Card><div style={{ color: 'var(--app-neutral-500)' }}>Đang tải...</div></Card>
      ) : tasks.length === 0 ? (
        <Card>
          <EmptyState
            title="Chưa có công việc test nào"
            desc="Công việc test được tạo tự động khi BRS của một CR được duyệt."
          />
        </Card>
      ) : (
        <div className="card" style={{ overflow: 'hidden' }}>
          <table className="ds-table">
            <thead>
              <tr>
                <th style={{ width: 130 }}>Mã CR</th>
                <th>Tiêu đề</th>
                <th style={{ width: 150 }}>Dự án</th>
                <th style={{ width: 90 }}>BRS</th>
                <th style={{ width: 130 }}>Test case</th>
                <th style={{ width: 90 }}>Lượt chạy</th>
                <th style={{ width: 140 }}>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map(t => (
                <tr key={t.id} style={{ cursor: 'pointer' }} onClick={() => setSelected(t.id)}>
                  <td><code style={{ fontSize: 13 }}>{t.request_code}</code></td>
                  <td style={{ color: 'var(--app-neutral-900)', fontWeight: 500 }}>{t.cr_title}</td>
                  <td>{t.project_code || '—'}</td>
                  <td>{t.brs_version ? `v${t.brs_version}` : '—'}</td>
                  <td>
                    {t.case_count ?? 0} case
                    {(t.mapped_count ?? 0) > 0 && (
                      <span style={{ color: 'var(--app-neutral-500)' }}> · {t.mapped_count} đã map</span>
                    )}
                  </td>
                  <td>{t.run_count ?? 0}</td>
                  <td>
                    <Badge variant={TASK_STATUS_VARIANT[t.status]}>{TASK_STATUS_LABEL[t.status]}</Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

// ── Chi tiết một công việc test ──────────────────────────────────────────────
function TaskDetail({ taskId, onBack }: { taskId: string; onBack: () => void }) {
  const addToast = useStore(s => s.addToast)
  const [task, setTask] = useState<AutomationTask | null>(null)
  const [cases, setCases] = useState<AutomationCase[]>([])
  const [runs, setRuns] = useState<AutomationRun[]>([])
  const [studioCases, setStudioCases] = useState<StudioTestcase[]>([])
  const [busy, setBusy] = useState('')
  const [importOpen, setImportOpen] = useState(false)
  const [reportView, setReportView] = useState<AutomationRun | null>(null)

  const load = async () => {
    try {
      const res = await getAutomationTask(taskId)
      setTask(res.data)
      setCases(res.cases)
      setRuns(res.runs)
    } catch (e) {
      addToast((e as Error).message, 'error')
    }
  }
  useEffect(() => { void load() }, [taskId])

  // Đọc danh sách test case đã record trong Capture Studio để map
  useEffect(() => {
    fetch(`${STUDIO_URL}/api/testcases`)
      .then(r => r.ok ? r.json() : [])
      .then((data: unknown) => {
        if (Array.isArray(data)) {
          setStudioCases(data.map(d => {
            const item = d as Record<string, unknown>
            return { id: String(item.id ?? ''), name: String(item.name ?? item.title ?? item.id ?? '') }
          }))
        }
      })
      .catch(() => setStudioCases([]))
  }, [])

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

  const doGenerate = () => run('gen', async () => {
    const res = await generateTestCases(taskId)
    addToast(`AI đã sinh ${res.meta.created} test case`, 'success')
    // Sinh lại sẽ THAY các case chưa map script — nếu QA đã sửa tay thì bản sửa đó mất
    if (res.meta.replaced > 0) addToast(res.meta.message, 'warn')
    await load()
  })

  const doMap = (caseId: string, studioId: string) => run(`map-${caseId}`, async () => {
    await updateTestCase(caseId, { studio_tc_id: studioId || null, status: studioId ? 'mapped' : 'ready' })
    await load()
  })

  const doDelete = (caseId: string) => run(`del-${caseId}`, async () => {
    await deleteTestCase(caseId)
    await load()
  })

  const doGenReport = (runId: string) => run(`report-${runId}`, async () => {
    const res = await generateTestReport(runId)
    addToast('AI đã sinh báo cáo kết quả test', 'success')
    setReportView(res.data)
    await load()
  })

  const doClose = () => run('close', async () => {
    await closeAutomationTask(taskId)
    addToast('Đã đóng công việc test cho CR', 'success')
    await load()
  })

  const doExport = () => run('export', async () => {
    if (!task) return
    await downloadAutomationExport(taskId, `automation_test_${task.request_code}.xlsx`)
  })

  if (!task) return <div style={{ padding: 20, color: 'var(--app-neutral-500)' }}>Đang tải...</div>

  const closed = task.status === 'closed'

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
        <Btn variant="ghost" size="sm" onClick={onBack}>← Danh sách</Btn>
        <code style={{ fontSize: 14, fontWeight: 600 }}>{task.request_code}</code>
        <span style={{ fontSize: 14, color: 'var(--app-neutral-700)' }}>{task.cr_title}</span>
        <Badge variant={TASK_STATUS_VARIANT[task.status]}>{TASK_STATUS_LABEL[task.status]}</Badge>
        {task.brs_version && (
          <span style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>
            BRS v{task.brs_version} ({task.brs_status})
          </span>
        )}
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          {!closed && (
            <Btn size="sm" onClick={doGenerate} loading={busy === 'gen'}>
              <Sparkles size={14} strokeWidth={1.5} /> Gen testcase
            </Btn>
          )}
          <a className="btn btn-secondary btn-sm" href={STUDIO_URL} target="_blank" rel="noreferrer">
            <Play size={14} strokeWidth={1.5} /> Record script
          </a>
          {!closed && cases.length > 0 && (
            <Btn variant="secondary" size="sm" onClick={() => setImportOpen(true)}>
              <Link2 size={14} strokeWidth={1.5} /> Import kết quả chạy
            </Btn>
          )}
          {!closed && runs.length > 0 && (
            <Btn size="sm" onClick={doClose} loading={busy === 'close'}>
              <CheckCircle2 size={14} strokeWidth={1.5} /> Close
            </Btn>
          )}
          <Btn variant="secondary" size="sm" onClick={doExport} loading={busy === 'export'}>
            <Download size={14} strokeWidth={1.5} /> Export
          </Btn>
        </div>
      </div>

      {/* Test case */}
      <Card className="mb-4">
        <div className="card__header">
          <span className="card__title">Test case ({cases.length})</span>
          <span style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>
            Map từng test case với script đã record trong Capture Studio
          </span>
        </div>
        {cases.length === 0 ? (
          <EmptyState
            title="Chưa có test case"
            desc="Sinh test case từ BRS đã duyệt bằng nút Gen testcase."
          />
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table className="ds-table">
              <thead>
                <tr>
                  <th style={{ width: 80 }}>Mã</th>
                  <th style={{ minWidth: 200 }}>Tiêu đề</th>
                  <th style={{ minWidth: 220 }}>Các bước</th>
                  <th style={{ minWidth: 180 }}>Kết quả mong đợi</th>
                  <th style={{ width: 100 }}>Ưu tiên</th>
                  <th style={{ width: 200 }}>Script automation</th>
                  <th style={{ width: 110 }}>Kết quả</th>
                  <th style={{ width: 50 }}></th>
                </tr>
              </thead>
              <tbody>
                {cases.map(c => (
                  <tr key={c.id}>
                    <td><code style={{ fontSize: 12 }}>{c.code}</code></td>
                    <td style={{ color: 'var(--app-neutral-900)' }}>{c.title}</td>
                    <td style={{ whiteSpace: 'pre-wrap', fontSize: 13 }}>{c.steps}</td>
                    <td style={{ whiteSpace: 'pre-wrap', fontSize: 13 }}>{c.expected}</td>
                    <td>{c.priority}</td>
                    <td>
                      <select
                        className="app-input"
                        style={{ fontSize: 12, minHeight: 28, padding: '2px 8px' }}
                        value={c.studio_tc_id ?? ''}
                        disabled={closed || busy === `map-${c.id}`}
                        onChange={e => doMap(c.id, e.target.value)}
                      >
                        <option value="">Chọn script đã record</option>
                        {studioCases.map(sc => (
                          <option key={sc.id} value={sc.id}>{sc.name}</option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <Badge variant={CASE_STATUS_VARIANT[c.status]}>{CASE_STATUS_LABEL[c.status]}</Badge>
                    </td>
                    <td>
                      {!closed && (
                        <button className="btn-icon" title="Xoá" onClick={() => doDelete(c.id)}>
                          <Trash2 size={14} strokeWidth={1.5} />
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Lượt chạy */}
      <Card>
        <div className="card__header">
          <span className="card__title">Lượt chạy ({runs.length})</span>
        </div>
        {runs.length === 0 ? (
          <EmptyState
            title="Chưa có lượt chạy"
            desc="Chạy test trong Capture Studio rồi import kết quả về đây."
          />
        ) : (
          <table className="ds-table">
            <thead>
              <tr>
                <th style={{ width: 160 }}>Thời điểm</th>
                <th>Mã lượt chạy</th>
                <th style={{ width: 80 }}>Tổng</th>
                <th style={{ width: 80 }}>Đạt</th>
                <th style={{ width: 90 }}>Không đạt</th>
                <th style={{ width: 200 }}>Báo cáo</th>
              </tr>
            </thead>
            <tbody>
              {runs.map(r => {
                const s = r.summary as Record<string, number | undefined>
                return (
                  <tr key={r.id}>
                    <td>{new Date(r.created_at).toLocaleString('vi-VN')}</td>
                    <td>{r.run_ref || '—'}</td>
                    <td>{s.total ?? '—'}</td>
                    <td style={{ color: 'var(--app-success)' }}>{s.passed ?? '—'}</td>
                    <td style={{ color: 'var(--app-danger)' }}>{s.failed ?? '—'}</td>
                    <td>
                      {(r.report_length ?? 0) > 0 ? (
                        <Btn variant="link" size="sm" onClick={() => setReportView(r)}>
                          <FileSpreadsheet size={14} strokeWidth={1.5} /> Xem báo cáo
                        </Btn>
                      ) : (
                        <Btn variant="secondary" size="sm"
                          onClick={() => doGenReport(r.id)} loading={busy === `report-${r.id}`}>
                          <Sparkles size={14} strokeWidth={1.5} /> Gen report
                        </Btn>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </Card>

      <ImportRunModal
        open={importOpen}
        taskId={taskId}
        onClose={() => setImportOpen(false)}
        onDone={() => { setImportOpen(false); void load() }}
      />

      <Modal
        title="Báo cáo kết quả kiểm thử"
        open={!!reportView}
        onClose={() => setReportView(null)}
        width="900px"
      >
        <ReportContent run={reportView} />
      </Modal>
    </div>
  )
}

function ReportContent({ run }: { run: AutomationRun | null }) {
  const addToast = useStore(s => s.addToast)
  const [content, setContent] = useState('')

  useEffect(() => {
    if (!run) return
    if (run.report_content) { setContent(run.report_content); return }
    import('../../api/ai')
      .then(m => m.getTestRun(run.id))
      .then(res => setContent(res.data.report_content ?? ''))
      .catch(e => addToast((e as Error).message, 'error'))
  }, [run])

  return (
    <pre style={{
      whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: '20px',
      background: 'var(--app-neutral-50)', border: '1px solid var(--app-neutral-200)',
      borderRadius: 8, padding: 16, maxHeight: 520, overflow: 'auto', margin: 0,
    }}>{content || 'Chưa có nội dung báo cáo'}</pre>
  )
}

function ImportRunModal({ open, taskId, onClose, onDone }: {
  open: boolean; taskId: string; onClose: () => void; onDone: () => void
}) {
  const addToast = useStore(s => s.addToast)
  const [runRef, setRunRef] = useState('')
  const [raw, setRaw] = useState('')
  const [busy, setBusy] = useState(false)

  const submit = async () => {
    setBusy(true)
    try {
      let summary: Record<string, unknown>
      try {
        summary = JSON.parse(raw) as Record<string, unknown>
      } catch {
        addToast('Nội dung JSON không hợp lệ', 'warn')
        setBusy(false)
        return
      }
      const res = await importTestRun(taskId, { run_ref: runRef, summary })
      addToast(`Đã import kết quả — cập nhật ${res.meta.cases_updated} test case`, 'success')
      setRaw('')
      setRunRef('')
      onDone()
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setBusy(false)
    }
  }

  return (
    <Modal title="Import kết quả chạy từ Capture Studio" open={open} onClose={onClose} width="720px">
      <Field label="Mã lượt chạy">
        <AppInput value={runRef} onChange={e => setRunRef(e.target.value)} placeholder="Nhập mã run của studio" />
      </Field>
      <Field label="Kết quả (JSON)" required>
        <textarea
          className="app-input"
          rows={12}
          value={raw}
          onChange={e => setRaw(e.target.value)}
          placeholder={'{\n  "total": 10,\n  "passed": 9,\n  "failed": 1,\n  "cases": [\n    { "studio_tc_id": "tc_abc123", "status": "passed" }\n  ]\n}'}
          style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}
        />
        <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginTop: 4 }}>
          Lấy kết quả trong tab Kiểm thử của Capture Studio, dán JSON vào đây để cập nhật trạng thái test case.
        </div>
      </Field>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <Btn variant="secondary" onClick={onClose}>Cancel</Btn>
        <Btn onClick={submit} loading={busy} disabled={!raw.trim()}>Import</Btn>
      </div>
    </Modal>
  )
}
