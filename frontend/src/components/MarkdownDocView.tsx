import React, { useEffect, useMemo, useRef, useState } from 'react'
import { List, Search, Copy, Download, X, Check } from 'lucide-react'
import { Markdown, extractHeadings } from './Markdown'

/**
 * MarkdownDocView — khung đọc tài liệu dài (Master Doc, BRS).
 *
 * Trước đây Master Doc render bằng một thẻ <pre> duy nhất: bảng thành ASCII pipe, heading
 * thành dấu #, mục lục có sẵn trong tài liệu KHÔNG bấm được, và với tài liệu 1.000+ dòng
 * thì không có cách nào tìm tới đúng mục ngoài cuộn tay.
 *
 * Khung này thêm ba thứ mà một tài liệu dài buộc phải có: mục lục điều hướng theo heading,
 * ô tìm kiếm nhảy tới từng kết quả, và đường lấy nguyên văn Markdown ra (copy / tải .md)
 * cho người cần đọc bằng công cụ khác.
 */

export function MarkdownDocView({
  content, filename, meta,
}: {
  content: string
  /** Tên file khi tải về — không có thì dùng 'tai-lieu.md' */
  filename?: string
  /** Dòng thông tin phụ hiện ở thanh trên (phiên bản, người duyệt…) */
  meta?: React.ReactNode
}) {
  const [tocOpen, setTocOpen] = useState(true)
  const [q, setQ]             = useState('')
  const [hit, setHit]         = useState(0)
  const [copied, setCopied]   = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)

  const headings = useMemo(() => extractHeadings(content), [content])
  // Heading cấp 1 thường là tên tài liệu (đã có ở tiêu đề drawer) → mục lục bắt từ cấp 2
  const toc = useMemo(() => headings.filter(h => h.level >= 2 && h.level <= 3), [headings])

  const matches = useMemo(() => {
    const s = q.trim().toLowerCase()
    if (s.length < 2) return 0
    let n = 0, from = 0
    const hay = content.toLowerCase()
    while (true) {
      const at = hay.indexOf(s, from)
      if (at < 0) break
      n++; from = at + s.length
    }
    return n
  }, [q, content])

  /** Nhảy tới kết quả thứ n bằng Window.find — không phải sửa DOM để bôi vàng. */
  function jump(dir: 1 | -1) {
    const s = q.trim()
    if (s.length < 2) return
    const w = window as Window & { find?: (s: string, ci?: boolean, back?: boolean) => boolean }
    if (typeof w.find !== 'function') return
    const found = w.find(s, false, dir === -1)
    if (!found) {
      // Hết trang thì quay về đầu rồi tìm lại — hành vi người dùng quen từ Ctrl+F
      window.getSelection()?.removeAllRanges()
      bodyRef.current?.scrollTo({ top: 0 })
      w.find(s, false, false)
      setHit(1)
    } else {
      setHit(h => Math.min(Math.max(h + dir, 1), matches || 1))
    }
  }

  async function copyAll() {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch { /* trình duyệt chặn clipboard — nút Tải .md vẫn dùng được */ }
  }

  function download() {
    const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename || 'tai-lieu.md'
    a.click()
    URL.revokeObjectURL(url)
  }

  useEffect(() => { setHit(0) }, [q])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      {/* ── Thanh công cụ ─────────────────────────────────────────── */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
        paddingBottom: 10, borderBottom: '1px solid var(--app-neutral-200)', flexShrink: 0,
      }}>
        {toc.length > 0 && (
          <button type="button" className="btn btn-secondary btn-sm"
            onClick={() => setTocOpen(o => !o)}
            aria-pressed={tocOpen}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <List size={13} /> Mục lục
          </button>
        )}

        <div style={{ position: 'relative', width: 260 }}>
          <Search size={13} style={{
            position: 'absolute', left: 9, top: '50%', transform: 'translateY(-50%)',
            color: 'var(--app-neutral-400)', pointerEvents: 'none',
          }} />
          <input
            className="input input-sm"
            style={{ paddingLeft: 28, paddingRight: q ? 26 : 10 }}
            placeholder="Tìm trong tài liệu…"
            value={q}
            onChange={e => setQ(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') { e.preventDefault(); jump(e.shiftKey ? -1 : 1) }
              if (e.key === 'Escape') setQ('')
            }}
          />
          {q && (
            <button type="button" title="Xóa từ khóa" aria-label="Xóa từ khóa"
              onClick={() => setQ('')}
              style={{
                position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer', padding: 2,
                color: 'var(--app-neutral-400)', display: 'flex', alignItems: 'center',
              }}><X size={12} /></button>
          )}
        </div>

        {q.trim().length >= 2 && (
          <span style={{ fontSize: 12, color: matches ? 'var(--app-neutral-600)' : 'var(--app-warning)' }}>
            {matches
              ? <>{hit > 0 ? `${hit}/` : ''}{matches} kết quả · Enter để tới, Shift+Enter lùi</>
              : 'không tìm thấy'}
          </span>
        )}

        <div style={{ flex: 1 }} />

        <span style={{ fontSize: 11, color: 'var(--app-neutral-500)' }}>
          {content.split('\n').length.toLocaleString('vi-VN')} dòng
        </span>
        <button type="button" className="btn btn-ghost btn-sm" onClick={copyAll}
          title="Copy nguyên văn Markdown"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          {copied ? <><Check size={13} /> Đã copy</> : <><Copy size={13} /> Copy</>}
        </button>
        <button type="button" className="btn btn-ghost btn-sm" onClick={download}
          title="Tải file .md"
          style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          <Download size={13} /> .md
        </button>
      </div>

      {meta && (
        <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', padding: '8px 0 0', flexShrink: 0 }}>
          {meta}
        </div>
      )}

      {/* ── Mục lục + nội dung ───────────────────────────────────── */}
      <div style={{ display: 'flex', gap: 18, flex: 1, minHeight: 0, paddingTop: 12 }}>
        {tocOpen && toc.length > 0 && (
          <nav aria-label="Mục lục tài liệu" style={{
            width: 250, flexShrink: 0, overflowY: 'auto',
            borderRight: '1px solid var(--app-neutral-200)', paddingRight: 12,
          }}>
            <div className="eyebrow" style={{ marginBottom: 8 }}>Mục lục</div>
            {toc.map((h, i) => (
              <button
                key={`${h.id}-${i}`}
                type="button"
                onClick={() => document.getElementById(h.id)
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                style={{
                  display: 'block', width: '100%', textAlign: 'left',
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: h.level === 2 ? '5px 6px' : '3px 6px 3px 18px',
                  borderRadius: 6, fontFamily: 'var(--font)',
                  fontSize: h.level === 2 ? 13 : 12,
                  fontWeight: h.level === 2 ? 600 : 400,
                  color: h.level === 2 ? 'var(--app-neutral-800)' : 'var(--app-neutral-600)',
                  lineHeight: 1.45,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--app-neutral-100)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'none' }}
              >
                {h.text}
              </button>
            ))}
          </nav>
        )}

        <div ref={bodyRef} style={{ flex: 1, minWidth: 0, overflowY: 'auto', paddingRight: 4 }}>
          <Markdown source={content} />
        </div>
      </div>
    </div>
  )
}
