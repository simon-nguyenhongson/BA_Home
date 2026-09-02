/**
 * StudioPanel — Capture Studio nhúng trong BA_Home, KHÔNG mang vỏ ứng dụng riêng của nó.
 *
 * Vấn đề đã sửa (PO 2026-09-01: *"Capture Studio nó buồn cười không, chả ra thể thống gì cả,
 * không chuyên nghiệp. mỗi chỗ 1 kiểu và ux ui tệ"*):
 *
 * Studio là ứng dụng độc lập có vỏ đầy đủ — sidebar riêng, thương hiệu "SOOBINZHONGSON",
 * dải gradient riêng, bộ từ vựng điều hướng riêng ("Phiên ghi", "Kiểm thử"). Nhúng nguyên vào
 * iframe thì người dùng thấy **sidebar trong sidebar, thương hiệu trong thương hiệu, hai dải
 * gradient** — hai ứng dụng xếp lên nhau. Đó là gốc của cảm giác "mỗi chỗ một kiểu", không phải
 * chuyện màu sắc (Studio vốn đã dùng token của cùng Design System).
 *
 * Cách sửa: Studio có chế độ nhúng (`?embed=1`) ẩn toàn bộ vỏ và chỉ để lại vùng làm việc.
 * Điều hướng do component này vẽ bằng DS của BA_Home, hai bên nói chuyện qua postMessage:
 *   BA_Home → Studio : { type: 'studio:view',  view }
 *   Studio → BA_Home : { type: 'studio:state', view, counts, recording }
 *
 * Nhờ vậy nút và số lượng nằm ở lớp ngoài, cùng một hệ với phần còn lại của ứng dụng, và
 * KHÔNG phải đọc DOM bên trong iframe.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ExternalLink, ListChecks, Circle, Activity, RefreshCw, AlertCircle } from 'lucide-react'
import { Btn } from '../../components/ui'

const STUDIO_URL: string =
  (import.meta.env.VITE_STUDIO_URL as string | undefined) ?? 'http://localhost:4700'

type StudioView = 'list' | 'record' | 'runs'

interface StudioState {
  view: StudioView
  counts: { tcs: number; runs: number }
  recording: boolean
}

const VIEWS: { key: StudioView; label: string; icon: React.ReactNode; hint: string }[] = [
  // Dòng gợi ý mang đúng thông tin mà tiêu đề trong Studio vốn nói — Studio ở chế độ nhúng
  // đã ẩn tiêu đề để không lặp lại, nên thông tin phải chuyển ra đây chứ không được mất.
  { key: 'list',   label: 'Kịch bản đã ghi', icon: <ListChecks size={14} strokeWidth={1.5} />,
    hint: 'Chọn nhiều dòng để ghép thành test case tổng hợp' },
  { key: 'record', label: 'Đang ghi',        icon: <Circle size={14} strokeWidth={1.5} />,
    hint: 'Thao tác trong cửa sổ Chromium — các bước hiện ở đây ngay khi ghi được' },
  { key: 'runs',   label: 'Lượt chạy',       icon: <Activity size={14} strokeWidth={1.5} />,
    hint: 'Kết quả từng lượt chạy kèm ảnh evidence; xoá lượt chạy sẽ xoá cả ảnh' },
]

export function StudioPanel() {
  const frameRef = useRef<HTMLIFrameElement | null>(null)
  const [status, setStatus] = useState<'checking' | 'up' | 'down'>('checking')
  const [view, setView] = useState<StudioView>('list')
  const [state, setState] = useState<StudioState | null>(null)

  // Phát hiện Studio có chạy bằng chính bắt tay postMessage, KHÔNG dùng fetch cross-origin.
  //
  // Bản trước gọi fetch(`${STUDIO_URL}/api/testcases`) để kiểm. Cách đó phụ thuộc CORS của
  // Studio, mà Studio chỉ cho đúng một origin — nên mở app bằng 127.0.0.1 thay vì localhost là
  // fetch bị chặn và giao diện báo "Studio chưa chạy" trong khi Studio đang chạy bình thường.
  // Bắt tay postMessage không phụ thuộc CORS và dùng lại đúng kênh vốn đã cần cho điều hướng.
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStatus(prev => (prev === 'checking' ? 'down' : prev))
    }, 6000)
    return () => window.clearTimeout(timer)
  }, [])

  // Studio báo trạng thái ra sau mỗi lần vẽ → tab ngoài luôn khớp với bên trong
  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      if (new URL(STUDIO_URL).origin !== e.origin) return
      const msg = e.data as { type?: string } & Partial<StudioState>
      if (msg?.type !== 'studio:state') return
      setStatus('up')
      setState({
        view: (msg.view ?? 'list') as StudioView,
        counts: msg.counts ?? { tcs: 0, runs: 0 },
        recording: !!msg.recording,
      })
      if (msg.view && msg.view !== view) setView(msg.view as StudioView)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [view])

  const go = useCallback((next: StudioView) => {
    setView(next)
    frameRef.current?.contentWindow?.postMessage(
      { type: 'studio:view', view: next },
      new URL(STUDIO_URL).origin,
    )
  }, [])

  if (status === 'down') {
    return (
      <div style={{
        border: '1px solid var(--app-neutral-200)', borderRadius: 12,
        padding: 20, maxWidth: 640, background: 'var(--app-white)',
      }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8, fontSize: 14,
          fontWeight: 600, color: 'var(--app-neutral-900)', marginBottom: 6,
        }}>
          <AlertCircle size={16} strokeWidth={1.5} color="var(--app-warning)" />
          Capture Studio chưa chạy trên máy này
        </div>
        <p style={{ fontSize: 14, color: 'var(--app-neutral-500)', margin: '0 0 12px' }}>
          Studio là công cụ chạy cục bộ vì việc ghi thao tác cần mở Chromium thật trên máy
          người dùng. Khởi động rồi tải lại:
        </p>
        <pre style={{
          background: 'var(--app-neutral-50)', border: '1px solid var(--app-neutral-200)',
          borderRadius: 8, padding: '10px 12px', fontSize: 13,
          fontFamily: 'var(--font-mono)', color: 'var(--app-neutral-700)', margin: '0 0 12px',
        }}>cd automation-test{'\n'}npm run studio</pre>
        <p style={{ fontSize: 12, color: 'var(--app-neutral-500)', margin: '0 0 14px' }}>
          Lần đầu cần cài: <code>npm ci &amp;&amp; npx playwright install chromium</code>
        </p>
        <Btn onClick={() => window.location.reload()}>
          <RefreshCw size={14} strokeWidth={1.5} /> Tải lại
        </Btn>
      </div>
    )
  }

  const active = VIEWS.find(v => v.key === view) ?? VIEWS[0]
  const connecting = status === 'checking'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 520 }}>
      {/* Điều hướng của Studio, vẽ bằng DS của BA_Home */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap', marginBottom: 4,
      }}>
        {VIEWS.map(v => {
          const isActive = view === v.key
          const count = v.key === 'list' ? state?.counts.tcs
                      : v.key === 'runs' ? state?.counts.runs
                      : undefined
          return (
            <button key={v.key} onClick={() => go(v.key)} title={v.hint}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, height: 32,
                padding: '0 12px', borderRadius: 8, cursor: 'pointer',
                border: `1px solid ${isActive ? 'var(--app-primary)' : 'var(--app-neutral-200)'}`,
                background: isActive ? 'var(--app-primary)' : 'var(--app-white)',
                color: isActive ? 'var(--app-white)' : 'var(--app-neutral-700)',
                fontFamily: 'var(--font)', fontSize: 13,
                fontWeight: isActive ? 600 : 500,
              }}>
              {v.icon}
              {v.label}
              {v.key === 'record' && state?.recording && (
                <span style={{
                  width: 7, height: 7, borderRadius: '50%', background: 'var(--app-danger)',
                  boxShadow: '0 0 0 3px rgba(217,45,32,0.18)',
                }} />
              )}
              {count !== undefined && (
                <span style={{
                  fontSize: 11, fontWeight: 600, minWidth: 18, textAlign: 'center',
                  padding: '1px 5px', borderRadius: 16,
                  background: isActive ? 'rgba(255,255,255,0.25)' : 'var(--app-neutral-100)',
                  color: isActive ? 'var(--app-white)' : 'var(--app-neutral-500)',
                }}>{count}</span>
              )}
            </button>
          )
        })}
        <div style={{ flex: 1 }} />
        <a className="btn btn-secondary btn-sm" href={STUDIO_URL} target="_blank" rel="noreferrer"
          title="Mở Studio ở cửa sổ riêng — tiện khi cần màn hình rộng để ghi thao tác">
          <ExternalLink size={14} strokeWidth={1.5} /> Cửa sổ riêng
        </a>
      </div>
      <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginBottom: 10 }}>
        {connecting ? 'Đang kết nối tới Capture Studio…' : active.hint}
      </div>

      <iframe
        ref={frameRef}
        title="Capture Studio"
        src={`${STUDIO_URL}/?embed=1`}
        style={{
          flex: 1, width: '100%', minHeight: 520, background: 'var(--app-white)',
          border: '1px solid var(--app-neutral-200)', borderRadius: 12,
        }}
      />
    </div>
  )
}
