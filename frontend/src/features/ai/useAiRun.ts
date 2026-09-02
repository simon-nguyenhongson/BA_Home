import { useCallback, useRef, useState } from 'react'
import { postSse } from '../../lib/sse'
import type { StageError, StageStats, StageStep } from './AiRunStage'

/**
 * useAiRun — điều khiển một lượt gọi AI có tường thuật (SSE). Dùng cho mọi luồng:
 * vẽ sơ đồ, sinh/chỉnh BRS, merge Master Doc, sinh test case, sinh báo cáo test.
 *
 * Lỗi đến bằng SỰ KIỆN chứ không bằng mã HTTP: thân phản hồi SSE đã bắt đầu chảy nên
 * backend không đổi được status nữa. Vì vậy `error` ở đây là nguồn sự thật duy nhất về
 * việc lượt vẽ có thành công hay không — chỉ khi nhận `done` mới coi là xong.
 */

const BASE = '/api/ppg'

interface SseEvent {
  type:  string
  // start
  steps?: { id: string; label: string }[]
  // step
  id?:     string
  state?:  'running' | 'done'
  detail?: string
  // ai_start / ai_progress / ai_done
  model?:         string
  max_tokens?:    number
  chars?:         number
  output_tokens?: number
  input_tokens?:  number
  cache_read?:    number
  // done — payload tuỳ luồng
  data?: unknown
  // error
  code?:    string
  message?: string
}

const nf = new Intl.NumberFormat('vi-VN')

export function useAiRun() {
  const [active, setActive] = useState(false)
  const [steps,  setSteps]  = useState<StageStep[]>([])
  const [stats,  setStats]  = useState<StageStats>({})
  const [error,  setError]  = useState<StageError | null>(null)
  const [startedAt, setStartedAt] = useState(0)

  const abortRef = useRef<AbortController | null>(null)

  const reset = useCallback(() => {
    abortRef.current?.abort()
    abortRef.current = null
    setActive(false); setSteps([]); setStats({}); setError(null)
  }, [])

  const cancel = useCallback(() => {
    abortRef.current?.abort()
    abortRef.current = null
    setActive(false)
  }, [])

  /**
   * Chạy một lượt. Trả về diagram khi thành công, `null` khi lỗi hoặc bị hủy —
   * KHÔNG throw, để nơi gọi không phải bọc try/catch quanh phần trang trí.
   */
  const run = useCallback(async <T = unknown>(
    path: string,
    body: unknown,
  ): Promise<T | null> => {
    const ctrl = new AbortController()
    abortRef.current = ctrl
    setActive(true); setError(null); setStats({}); setSteps([])
    setStartedAt(performance.now())

    let result: T | null = null
    let failure: StageError | null = null

    const setStep = (id: string, patch: Partial<StageStep>) =>
      setSteps(prev => prev.map(s => (s.id === id ? { ...s, ...patch } : s)))

    try {
      await postSse<SseEvent>({
        base: BASE,
        path,
        body,
        signal: ctrl.signal,
        onEvent: ev => {
          switch (ev.type) {
            case 'start':
              setSteps((ev.steps ?? []).map((s, i) => ({
                ...s,
                // Bước đầu chạy ngay khi luồng mở; các bước sau chờ tới lượt
                state: i === 0 ? 'running' : 'pending',
              })))
              break

            case 'step':
              if (ev.id) {
                setStep(ev.id, { state: ev.state ?? 'running', detail: ev.detail })
                // Bước kế tiếp chuyển sang "đang chạy" ngay khi bước này xong, để
                // không có khoảng trống nào trông như đã dừng.
                if (ev.state === 'done') {
                  setSteps(prev => {
                    const i = prev.findIndex(s => s.id === ev.id)
                    if (i < 0 || i + 1 >= prev.length) return prev
                    if (prev[i + 1].state !== 'pending') return prev
                    const next = [...prev]
                    next[i + 1] = { ...next[i + 1], state: 'running' }
                    return next
                  })
                }
              }
              break

            case 'ai_start':
              setStats((s: StageStats) => ({ ...s, model: ev.model, maxTokens: ev.max_tokens }))
              break

            case 'ai_progress':
              setStats((s: StageStats) => ({ ...s, chars: ev.chars }))
              if (ev.chars) {
                setStep('ai', { detail: `đã sinh ${nf.format(ev.chars)} ký tự` })
              }
              break

            case 'ai_done':
              setStats((s: StageStats) => ({
                ...s,
                model:        ev.model ?? s.model,
                chars:        ev.chars ?? s.chars,
                outputTokens: ev.output_tokens ?? undefined,
                inputTokens:  ev.input_tokens ?? undefined,
                cacheRead:    ev.cache_read ?? undefined,
              }))
              break

            case 'done':
              result = (ev.data ?? null) as T | null
              setSteps(prev => prev.map(s => ({ ...s, state: 'done' })))
              break

            case 'error':
              failure = {
                code:    ev.code ?? 'ERROR',
                message: ev.message ?? 'Lỗi không rõ nguyên nhân',
              }
              break
          }
        },
      })
    } catch (e) {
      // AbortError = người dùng chủ động dừng, không phải lỗi hệ thống
      if ((e as Error).name === 'AbortError') { setActive(false); return null }
      failure = { code: 'STREAM_ERROR', message: (e as Error).message }
    } finally {
      abortRef.current = null
    }

    if (failure) {
      setError(failure)
      setSteps(prev => prev.map(s => (s.state === 'running' ? { ...s, state: 'pending' } : s)))
      return null
    }
    if (!result) {
      // Luồng đóng mà không có `done` lẫn `error` — mạng đứt giữa đường. Phải báo,
      // không được coi là thành công.
      setError({
        code: 'STREAM_INCOMPLETE',
        message: 'Kết nối tới máy chủ bị ngắt giữa lượt chạy. Kết quả CÓ THỂ đã được lưu — '
               + 'bấm [Tải lại] để kiểm tra trước khi chạy lại, tránh tạo bản trùng.',
      })
      return null
    }
    setActive(false)
    return result
  }, [])

  return { active, steps, stats, error, startedAt, run, cancel, reset }
}
