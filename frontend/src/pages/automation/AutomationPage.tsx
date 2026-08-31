import { useEffect, useState } from 'react'

/**
 * Automation Test — nhúng Capture Studio (automation-test/capture-studio).
 * Studio là local tool chạy trên máy người dùng: ghi thao tác browser thành
 * test case, chạy kèm evidence, xuất Playwright spec.
 * Khởi động: `cd automation-test && npm run studio` (http://localhost:4700).
 */
const STUDIO_URL: string =
  (import.meta.env.VITE_STUDIO_URL as string | undefined) ?? 'http://localhost:4700'

export default function AutomationPage() {
  const [studioUp, setStudioUp] = useState<boolean | null>(null)

  useEffect(() => {
    let cancelled = false
    fetch(`${STUDIO_URL}/api/testcases`, { mode: 'no-cors' })
      .then(() => { if (!cancelled) setStudioUp(true) })
      .catch(() => { if (!cancelled) setStudioUp(false) })
    return () => { cancelled = true }
  }, [])

  if (studioUp === false) {
    return (
      <div className="p-8 max-w-2xl">
        <h1 className="text-xl font-bold text-gray-900 mb-2">Automation Test</h1>
        <div className="bg-white border rounded-lg p-6">
          <p className="text-sm font-medium text-gray-900 mb-1">Capture Studio chưa chạy</p>
          <p className="text-sm text-gray-500 mb-4">
            Khởi động studio trên máy này rồi tải lại trang.
          </p>
          <pre className="bg-gray-50 border rounded px-3 py-2 text-xs text-gray-700 mb-4">cd automation-test{'\n'}npm run studio</pre>
          <p className="text-xs text-gray-500">
            Lần đầu cần cài đặt: <code>npm ci &amp;&amp; npx playwright install chromium</code>.
            Studio ghi thao tác trên trình duyệt thành test case, chạy lại kèm evidence
            từng bước và xuất Playwright spec vào <code>automation-test/tests/generated/</code>.
          </p>
          <button
            className="mt-4 px-3 py-1.5 text-sm rounded bg-app-blue text-white"
            onClick={() => window.location.reload()}
          >
            Tải lại
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col" style={{ height: 'calc(100vh - 96px)' }}>
      <div className="flex items-center justify-between px-4 py-2 border-b bg-white">
        <div>
          <span className="text-sm font-semibold text-gray-900">Automation Test — Capture Studio</span>
          <span className="text-xs text-gray-500 ml-2">Ghi thao tác → test case → chạy kèm evidence → xuất Playwright</span>
        </div>
        <a
          className="text-sm text-app-blue underline"
          href={STUDIO_URL}
          target="_blank"
          rel="noreferrer"
        >
          Mở cửa sổ riêng
        </a>
      </div>
      <iframe
        title="Capture Studio"
        src={STUDIO_URL}
        className="flex-1 w-full border-0 bg-white"
      />
    </div>
  )
}
