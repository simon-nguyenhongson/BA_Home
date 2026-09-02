import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { postSse } from '../sse'

/** Dựng một Response có body là luồng, phát từng mảnh đúng như mạng thật cắt gói. */
function streamResponse(chunks: string[], init: ResponseInit = { status: 200 }): Response {
  const enc = new TextEncoder()
  const body = new ReadableStream<Uint8Array>({
    start(c) {
      for (const s of chunks) c.enqueue(enc.encode(s))
      c.close()
    },
  })
  return new Response(body, init)
}

beforeEach(() => {
  sessionStorage.setItem('access_token', 'tok')
})
afterEach(() => {
  vi.unstubAllGlobals()
  sessionStorage.clear()
})

describe('postSse', () => {
  it('bóc từng sự kiện phân cách bằng dòng trống', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(streamResponse([
      'data: {"type":"start"}\n\n',
      'data: {"type":"step","id":"ai","state":"running"}\n\n',
      'data: {"type":"done"}\n\n',
    ])))
    const got: unknown[] = []
    await postSse({ base: '/api', path: '/x', body: {}, onEvent: e => got.push(e) })
    expect(got).toEqual([
      { type: 'start' },
      { type: 'step', id: 'ai', state: 'running' },
      { type: 'done' },
    ])
  })

  it('ghép được sự kiện bị cắt ngang giữa hai gói mạng', async () => {
    // Đây là ca dễ vỡ nhất của SSE: gói TCP không trùng ranh giới sự kiện.
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(streamResponse([
      'data: {"type":"ai_pro',
      'gress","chars":1200}\n',
      '\ndata: {"type":"done"}\n\n',
    ])))
    const got: Record<string, unknown>[] = []
    await postSse<Record<string, unknown>>({
      base: '/api', path: '/x', body: {}, onEvent: e => got.push(e),
    })
    expect(got).toEqual([{ type: 'ai_progress', chars: 1200 }, { type: 'done' }])
  })

  it('bỏ qua dòng nhịp tim, không coi là sự kiện', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(streamResponse([
      ': keep-alive\n\n',
      'data: {"type":"done"}\n\n',
    ])))
    const got: unknown[] = []
    await postSse({ base: '/api', path: '/x', body: {}, onEvent: e => got.push(e) })
    expect(got).toEqual([{ type: 'done' }])
  })

  it('một gói JSON méo không làm chết cả luồng', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(streamResponse([
      'data: {khong-phai-json}\n\n',
      'data: {"type":"done"}\n\n',
    ])))
    const got: unknown[] = []
    await postSse({ base: '/api', path: '/x', body: {}, onEvent: e => got.push(e) })
    expect(got).toEqual([{ type: 'done' }])
  })

  it('lỗi trước khi luồng chảy vẫn đọc được detail dạng {code,message}', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ detail: { code: 'X', message: 'Sản phẩm không tồn tại' } }),
        { status: 404 }),
    ))
    await expect(postSse({ base: '/api', path: '/x', body: {}, onEvent: () => {} }))
      .rejects.toThrow('Sản phẩm không tồn tại')
  })

  it('gửi Bearer token và Accept: text/event-stream', async () => {
    const fetchMock = vi.fn().mockResolvedValue(streamResponse(['data: {"type":"done"}\n\n']))
    vi.stubGlobal('fetch', fetchMock)
    await postSse({ base: '/api/ppg', path: '/diagrams/generate/stream', body: { a: 1 }, onEvent: () => {} })
    const [url, init] = fetchMock.mock.calls[0]
    expect(url).toBe('/api/ppg/diagrams/generate/stream')
    expect((init.headers as Record<string, string>).Authorization).toBe('Bearer tok')
    expect((init.headers as Record<string, string>).Accept).toBe('text/event-stream')
    expect(init.body).toBe('{"a":1}')
  })
})
