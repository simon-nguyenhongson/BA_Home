/**
 * HTTP helper dùng chung cho mọi API client (src/api/* và src/lib/api/*).
 * Hợp nhất 10 bản copy authHeaders()/request() trước đây.
 */

export function authHeaders(): HeadersInit {
  const token = sessionStorage.getItem('access_token')
  return token
    ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' }
    : { 'Content-Type': 'application/json' }
}

/** Lấy câu thông báo đọc được từ `detail` của FastAPI (chuỗi, {code,message}, hoặc list 422). */
export function extractErrorMessage(detail: unknown): string {
  if (typeof detail === 'string') return detail
  if (Array.isArray(detail)) {
    const msgs = detail
      .map(d => (d && typeof d === 'object' && 'msg' in d ? String((d as { msg: unknown }).msg) : null))
      .filter((m): m is string => !!m)
    if (msgs.length) return msgs.join('; ')
  }
  if (detail && typeof detail === 'object') {
    const msg = (detail as { message?: unknown }).message
    if (typeof msg === 'string' && msg) return msg
    return JSON.stringify(detail)
  }
  return 'Request failed'
}

export async function apiRequest<T>(
  base: string,
  method: string,
  path: string,
  body?: unknown,
): Promise<T> {
  const res = await fetch(`${base}${path}`, {
    method,
    headers: authHeaders(),
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  if (res.status === 401) {
    sessionStorage.removeItem('access_token')
    window.location.href = '/login'
  }
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }))
    const detail: unknown = err.detail ?? err.error?.message
    // Backend trả lỗi nghiệp vụ dạng {code, message} (xem services/ai_agent.py). Không
    // JSON.stringify cả object — người dùng sẽ đọc nguyên chuỗi {"code":...} trong toast.
    throw new Error(extractErrorMessage(detail))
  }
  return res.status === 204 ? (undefined as T) : res.json()
}
