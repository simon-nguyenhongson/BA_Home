import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Check, X, AlertTriangle, Sparkles, Loader2 } from 'lucide-react'

/**
 * AiDrawStage — sân khấu tường thuật lúc AI vẽ sơ đồ.
 *
 * Trước đây bấm [Vẽ] chỉ làm nút mờ đi thành "Đang vẽ…" rồi đứng yên hàng chục giây tới
 * vài phút. Người dùng tưởng hệ treo và bấm lại — mỗi lần bấm lại là một lượt gọi Claude
 * nữa, tốn hạn mức thật.
 *
 * MỌI SỐ LIỆU HIỆN Ở ĐÂY LÀ SỐ ĐO ĐƯỢC, đến từ sự kiện SSE của backend: dung lượng bộ
 * quy tắc nạp từ đĩa, số ký tự bối cảnh, số ký tự và token mô hình đã sinh, danh sách
 * thành phần bị chặn khi kiểm an toàn, phiên bản đã lưu.
 *
 * KHÔNG có thanh phần trăm: độ dài tài liệu không biết trước nên mọi con số phần trăm
 * sẽ là bịa. Thay vào đó dùng thanh chạy vô định + số liệu thật bằng chữ.
 */

export type StepState = 'pending' | 'running' | 'done'

export interface StageStep {
  id:      string
  label:   string
  state:   StepState
  detail?: string
}

export interface StageStats {
  model?:         string
  chars?:         number
  outputTokens?:  number
  inputTokens?:   number
  cacheRead?:     number
  maxTokens?:     number
}

export interface StageError {
  code:    string
  message: string
}

const nf = new Intl.NumberFormat('vi-VN')

function fmtElapsed(ms: number): string {
  const s = Math.floor(ms / 1000)
  return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`
}

/** Khối xương sơ đồ — chỗ giữ hình để khoảng trống không trông như màn hình lỗi. */
function SkeletonDiagram() {
  return (
    <svg viewBox="0 0 480 190" style={{ width: '100%', height: '100%', display: 'block' }}
      aria-hidden="true">
      <defs>
        <linearGradient id="aiSkelFill" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor="var(--ds-brand-subtle)" />
          <stop offset="55%"  stopColor="var(--ds-border-brand)" />
          <stop offset="100%" stopColor="var(--color-brand-gradient-3)" />
        </linearGradient>
      </defs>

      {/* nét nối — chạy như đang được vẽ */}
      <g stroke="var(--ds-brand-loading)" strokeWidth="1.5" fill="none" className="ai-stroke">
        <path d="M104 46 H168" />
        <path d="M236 46 V96 H168" />
        <path d="M236 46 H300" />
        <path d="M368 46 V140 H236" />
        <path d="M104 140 H168" />
      </g>

      {/* các nút */}
      {[
        { x: 32,  y: 30,  w: 72, h: 32 },
        { x: 168, y: 30,  w: 68, h: 32 },
        { x: 300, y: 30,  w: 68, h: 32 },
        { x: 120, y: 80,  w: 96, h: 32 },
        { x: 32,  y: 124, w: 72, h: 32 },
        { x: 236, y: 124, w: 132, h: 32 },
      ].map((n, i) => (
        <g key={i} style={{ animation: `aiBreathe 1.8s ease-in-out ${i * 0.18}s infinite` }}>
          <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="6"
            fill="url(#aiSkelFill)" stroke="var(--app-neutral-300)" strokeWidth="1" />
          <rect x={n.x + 10} y={n.y + 11} width={n.w - 26} height={6} rx="3" fill="var(--ds-border-brand)" />
        </g>
      ))}
    </svg>
  )
}

export function AiRunStage({
  title, steps, stats, error, elapsedFrom, onCancel, onRetry, onClose, verb = 'sinh',
}: {
  /** Ví dụ: "Claude đang vẽ «Luồng chuyển tiền»" */
  title:        string
  steps:        StageStep[]
  stats:        StageStats
  error?:       StageError | null
  /** performance.now() lúc bắt đầu — để đếm thời gian đã chạy */
  elapsedFrom:  number
  onCancel?:    () => void
  onRetry?:     () => void
  onClose?:     () => void
  /** Động từ của luồng — "vẽ" | "sinh" | "chỉnh" | "hợp nhất". Mặc định "sinh". */
  verb?:        string
}) {
  const running = !error
  const [now, setNow] = useState(() => performance.now())
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (!running) return
    timer.current = window.setInterval(() => setNow(performance.now()), 500)
    return () => { if (timer.current) window.clearInterval(timer.current) }
  }, [running])

  const elapsed = fmtElapsed((running ? now : now) - elapsedFrom)
  const current = useMemo(() => steps.find(s => s.state === 'running'), [steps])
  const doneCount = steps.filter(s => s.state === 'done').length

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* ── Tiêu đề ─────────────────────────────────────────────── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {error ? (
          <span style={{
            width: 28, height: 28, borderRadius: 8, flexShrink: 0,
            background: 'var(--app-danger-bg)', color: 'var(--app-danger)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <AlertTriangle size={15} />
          </span>
        ) : (
          <span style={{
            width: 28, height: 28, borderRadius: 8, flexShrink: 0,
            background: 'var(--brand-gradient)', color: 'var(--app-white)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Sparkles size={15} />
          </span>
        )}
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 600, lineHeight: '20px' }}>
            {error
              ? <span style={{ color: 'var(--app-danger)' }}>Không {verb} được</span>
              : <span className="ai-grad-text">{title}</span>}
          </div>
          <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginTop: 1 }}>
            {error
              ? `Mã lỗi ${error.code} · đã chạy ${elapsed}`
              : `${doneCount}/${steps.length} bước · ${elapsed}${current ? ` · ${current.label.toLowerCase()}` : ''}`}
          </div>
        </div>
      </div>

      {/* ── Thanh chạy vô định ──────────────────────────────────── */}
      {!error && (
        <div className="ai-rail" aria-hidden="true">
          <div className="ai-rail__sweep" />
        </div>
      )}

      {/* ── Sân khấu ────────────────────────────────────────────── */}
      <div className={`ai-stage${!error ? ' ai-card-live' : ''}`}
        style={{ height: 190, padding: 12, opacity: error ? 0.4 : 1 }}>
        <SkeletonDiagram />
      </div>

      {/* ── Lỗi ─────────────────────────────────────────────────── */}
      {error && (
        <div style={{
          padding: '10px 12px', borderRadius: 8,
          background: 'var(--app-danger-bg)', border: '1px solid var(--color-error-300)',
          fontSize: 13, color: 'var(--ds-text-danger)', lineHeight: 1.55,
        }}>
          {error.message}
        </div>
      )}

      {/* ── Các bước ────────────────────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {steps.map((s, i) => {
          const isLast = i === steps.length - 1
          const color =
            s.state === 'done'    ? 'var(--app-success)'
            : s.state === 'running' ? 'var(--app-primary)'
            : 'var(--app-neutral-300)'
          return (
            <div key={s.id} style={{ display: 'flex', gap: 10 }}>
              <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                width: 18, flexShrink: 0,
              }}>
                <span style={{
                  width: 16, height: 16, borderRadius: '50%', marginTop: 3, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: s.state === 'done' ? 'var(--app-success-bg)'
                    : s.state === 'running' ? 'var(--ds-brand-subtle)' : 'transparent',
                  border: `1.5px solid ${color}`,
                  color,
                }}>
                  {s.state === 'done'    && <Check size={9} strokeWidth={4} />}
                  {s.state === 'running' && <Loader2 size={9} className="spin" strokeWidth={3} />}
                </span>
                {!isLast && (
                  <span style={{
                    width: 1, flex: 1, minHeight: 12,
                    background: s.state === 'done' ? 'var(--app-success)' : 'var(--app-neutral-200)',
                  }} />
                )}
              </div>
              <div style={{ flex: 1, paddingBottom: isLast ? 0 : 10, minWidth: 0 }}>
                <div
                  className={s.state === 'running' ? 'ai-breathe' : undefined}
                  style={{
                    fontSize: 13,
                    fontWeight: s.state === 'running' ? 600 : 500,
                    color: s.state === 'pending' ? 'var(--app-neutral-400)' : 'var(--app-neutral-800)',
                  }}
                >
                  {s.label}
                </div>
                {s.detail && (
                  <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginTop: 1 }}>
                    {s.detail}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* ── Số liệu thật ────────────────────────────────────────── */}
      {(stats.chars || stats.outputTokens || stats.model) && (
        <div style={{
          display: 'flex', gap: 16, flexWrap: 'wrap',
          borderTop: '1px solid var(--app-neutral-200)', paddingTop: 10,
          fontSize: 11, color: 'var(--app-neutral-500)',
        }}>
          {stats.model && <span>Model: <strong style={{ color: 'var(--app-neutral-700)' }}>{stats.model}</strong></span>}
          {!!stats.chars && <span>Đã sinh: {nf.format(stats.chars)} ký tự</span>}
          {!!stats.outputTokens && (
            <span>
              Token đầu ra: {nf.format(stats.outputTokens)}
              {stats.maxTokens ? ` / ${nf.format(stats.maxTokens)}` : ''}
            </span>
          )}
          {!!stats.cacheRead && <span>Đọc lại từ cache: {nf.format(stats.cacheRead)} token</span>}
        </div>
      )}

      {/* ── Hành động ───────────────────────────────────────────── */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
        {!error && onCancel && (
          <button type="button" className="btn btn-secondary btn-sm" onClick={onCancel}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <X size={13} /> Dừng lượt {verb}
          </button>
        )}
        {error && onRetry && (
          <button type="button" className="btn btn-secondary btn-sm" onClick={onRetry}>
            Sửa lại yêu cầu
          </button>
        )}
        {error && onClose && (
          <button type="button" className="btn btn-primary btn-sm" onClick={onClose}>
            Đóng
          </button>
        )}
      </div>

      {!error && (
        <div style={{ fontSize: 11, color: 'var(--app-neutral-400)', lineHeight: 1.5 }}>
          Xong sẽ tự mở kết quả. Đóng hộp thoại này sẽ DỪNG lượt {verb} — không lưu gì.
        </div>
      )}
    </div>
  )
}
