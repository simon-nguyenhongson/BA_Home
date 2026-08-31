import { useEffect, useState } from 'react'
import { AutomationTasksTab } from '../../features/automation/AutomationTasksTab'

/**
 * Automation Test.
 * - Tab "Công việc theo CR": task test sinh ra khi BRS của CR được duyệt —
 *   gen test case bằng AI, map script đã record, import kết quả chạy, gen báo cáo, đóng, export.
 * - Tab "Capture Studio": nhúng studio ghi/chạy script (automation-test/capture-studio).
 *   Khởi động: `cd automation-test && npm run studio` (http://localhost:4700).
 */
const STUDIO_URL: string =
  (import.meta.env.VITE_STUDIO_URL as string | undefined) ?? 'http://localhost:4700'

type Tab = 'tasks' | 'studio'

export default function AutomationPage() {
  const [tab, setTab] = useState<Tab>('tasks')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="ds-tabs" style={{ marginBottom: 16, flexShrink: 0 }}>
        <button className={`ds-tab${tab === 'tasks' ? ' active' : ''}`} onClick={() => setTab('tasks')}>
          Công việc theo CR
        </button>
        <button className={`ds-tab${tab === 'studio' ? ' active' : ''}`} onClick={() => setTab('studio')}>
          Capture Studio
        </button>
      </div>

      {tab === 'tasks' ? <AutomationTasksTab /> : <StudioFrame />}
    </div>
  )
}

function StudioFrame() {
  const [studioUp, setStudioUp] = useState<boolean | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(`${STUDIO_URL}/api/testcases`)
      .then(() => { if (!cancelled) setStudioUp(true) })
      .catch(() => { if (!cancelled) setStudioUp(false) })
    return () => { cancelled = true }
  }, [])

  if (studioUp === false) {
    return (
      <div className="card card-pad" style={{ maxWidth: 620 }}>
        <p style={{ fontSize: 14, fontWeight: 600, color: 'var(--app-neutral-900)', marginBottom: 4 }}>
          Capture Studio chưa chạy
        </p>
        <p style={{ fontSize: 14, color: 'var(--app-neutral-500)', marginBottom: 12 }}>
          Khởi động studio trên máy này rồi tải lại trang.
        </p>
        <pre style={{
          background: 'var(--app-neutral-50)', border: '1px solid var(--app-neutral-200)',
          borderRadius: 8, padding: '10px 12px', fontSize: 13,
          fontFamily: 'var(--font-mono)', color: 'var(--app-neutral-700)', marginBottom: 12,
        }}>cd automation-test{'\n'}npm run studio</pre>
        <p style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginBottom: 12 }}>
          Lần đầu cần cài đặt: <code>npm ci &amp;&amp; npx playwright install chromium</code>.
          Studio ghi thao tác trên trình duyệt thành test case, chạy lại kèm ảnh evidence từng bước
          và xuất Playwright spec vào <code>automation-test/tests/generated/</code>.
        </p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>Tải lại</button>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 480 }}>
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '8px 12px', border: '1px solid var(--app-neutral-200)',
        borderBottom: 'none', borderRadius: '12px 12px 0 0', background: '#fff',
      }}>
        <span style={{ fontSize: 13, color: 'var(--app-neutral-500)' }}>
          Ghi thao tác thành test case, chạy kèm evidence, xuất Playwright spec
        </span>
        <a className="btn btn-secondary btn-sm" href={STUDIO_URL} target="_blank" rel="noreferrer">
          Mở cửa sổ riêng
        </a>
      </div>
      <iframe
        title="Capture Studio"
        src={STUDIO_URL}
        style={{
          flex: 1, width: '100%', border: '1px solid var(--app-neutral-200)',
          borderRadius: '0 0 12px 12px', background: '#fff', minHeight: 520,
        }}
      />
    </div>
  )
}
