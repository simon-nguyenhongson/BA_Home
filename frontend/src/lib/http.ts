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
    // Lỗi 422 của FastAPI có `loc` chỉ ra TRƯỜNG sai — trước đây bị bỏ, nên thông báo chỉ
    // là "Input should be a valid date or datetime" mà không nói trường nào trong form.
    // Với form 10+ ô như tạo task hay tạo dự án, thiếu tên trường thì người dùng phải đoán.
    const msgs = detail
      .map(d => {
        if (!d || typeof d !== 'object' || !('msg' in d)) return null
        const msg = String((d as { msg: unknown }).msg)
        const loc = (d as { loc?: unknown }).loc
        // loc thường là ['body', '<tên trường>'] — bỏ tiền tố 'body'
        const field = Array.isArray(loc)
          ? loc.filter(x => typeof x === 'string' && x !== 'body').join('.')
          : ''
        return field ? `${field}: ${msg}` : msg
      })
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
