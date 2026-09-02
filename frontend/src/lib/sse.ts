/**
 * Đọc luồng SSE từ một endpoint POST.
 *
 * Không dùng EventSource: nó chỉ gửi được GET và KHÔNG gắn được header Authorization,
 * trong khi mọi endpoint của hệ đều cần Bearer token.
 */

import { authHeaders, extractErrorMessage } from './http'

export interface SseOptions<T> {
  base:   string
  path:   string
  body:   unknown
  /** Gọi cho từng sự kiện nhận được */
  onEvent: (event: T) => void
  /** Cho phép hủy giữa lượt — người dùng đóng hộp thoại hoặc đổi trang */
  signal?: AbortSignal
}

export async function postSse<T = Record<string, unknown>>({
  base, path, body, onEvent, signal,
}: SseOptions<T>): Promise<void> {
  const res = await fetch(`${base}${path}`, {
    method:  'POST',
    headers: { ...authHeaders(), Accept: 'text/event-stream' },
    body:    JSON.stringify(body),
    signal,
  })

  if (res.status === 401) {
    sessionStorage.removeItem('access_token')
    window.location.href = '/login'
    throw new Error('Hết phiên đăng nhập')
  }

  // Lỗi xảy ra TRƯỚC khi thân phản hồi bắt đầu chảy (validate body, 404, 403…) vẫn là
  // JSON như endpoint thường — xử lý giống apiRequest để thông báo không bị khác kiểu.
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }))
    throw new Error(extractErrorMessage(err.detail ?? err.error?.message))
  }
  if (!res.body) throw new Error('Trình duyệt không hỗ trợ đọc luồng phản hồi')

  const reader  = res.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })

    // Sự kiện SSE ngăn cách bằng một dòng trống. Gói tin cuối trong buffer có thể còn
    // dở nên giữ lại chờ lượt đọc sau.
    const frames = buffer.split('\n\n')
    buffer = frames.pop() ?? ''

    for (const frame of frames) {
      for (const line of frame.split('\n')) {
        if (!line.startsWith('data:')) continue   // bỏ qua dòng nhịp tim ": keep-alive"
        const raw = line.slice(5).trim()
        if (!raw) continue
        try {
          onEvent(JSON.parse(raw) as T)
        } catch {
          // Một gói méo không được làm chết cả luồng — bỏ qua và đọc tiếp.
        }
      }
    }
  }
}
