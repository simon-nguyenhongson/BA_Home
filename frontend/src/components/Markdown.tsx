import React, { useMemo } from 'react'

/**
 * Markdown — renderer tự chứa cho tài liệu do AI sinh (Master Doc, BRS, báo cáo test).
 *
 * VÌ SAO TỰ VIẾT, KHÔNG DÙNG react-markdown:
 * Nội dung đi qua đây do mô hình sinh hoặc do người dùng import — tức là dữ liệu KHÔNG
 * tin cậy. Renderer này chỉ tạo React element từ text đã tách, không có đường nào chạm
 * tới dangerouslySetInnerHTML, nên HTML/script nhúng trong Markdown hiển thị thành CHỮ
 * chứ không thực thi. Đổi lại là không thêm chuỗi phụ thuộc mới (unified/remark/micromark)
 * vào một repo ngân hàng.
 *
 * PHẠM VI CÚ PHÁP — đúng những gì các skill của hệ sinh ra:
 *   heading #..######, bảng GFM, danh sách bullet/số (lồng nhau), code fence ```,
 *   blockquote >, đường kẻ ---, và inline: **đậm**, *nghiêng*, `mã`, [chữ](link).
 * Cú pháp ngoài danh sách trên hiện nguyên văn — sai theo kiểu đọc được, không phải vỡ layout.
 */

// ── Slug cho heading ─────────────────────────────────────────────────────────

/**
 * Sinh id theo kiểu GitHub để mục lục sẵn có trong tài liệu (`[Tổng quan](#1-tổng-quan)`)
 * trỏ đúng chỗ. Giữ chữ có dấu: tài liệu ở đây viết bằng tiếng Việt.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[`*_~[\]()]/g, '')          // bỏ ký hiệu markdown còn sót trong tiêu đề
    .replace(/[^\p{L}\p{N}\s-]/gu, '')    // bỏ dấu câu, giữ chữ/số/khoảng trắng/gạch
    .trim()
    .replace(/\s+/g, '-')
}

export interface Heading { level: number; text: string; id: string }

/** Rút mục lục từ heading — dùng cho khung điều hướng bên cạnh tài liệu. */
export function extractHeadings(md: string): Heading[] {
  const out: Heading[] = []
  let inFence = false
  for (const line of md.split('\n')) {
    if (/^\s*```/.test(line)) { inFence = !inFence; continue }
    if (inFence) continue
    const m = /^(#{1,6})\s+(.+?)\s*$/.exec(line)
    if (m) {
      const text = stripInline(m[2])
      out.push({ level: m[1].length, text, id: slugify(text) })
    }
  }
  return out
}

/** Bỏ ký hiệu inline để lấy chữ thuần (dùng cho mục lục và ô tìm kiếm). */
function stripInline(s: string): string {
  return s
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
}

// ── Inline ───────────────────────────────────────────────────────────────────

const INLINE = /(`[^`]+`|\*\*[^*]+\*\*|\*[^*\n]+\*|\[[^\]]+\]\([^)\s]+\))/g

function renderInline(text: string, keyPrefix: string): React.ReactNode[] {
  const parts = text.split(INLINE).filter(p => p !== '' && p !== undefined)
  return parts.map((p, i) => {
    const k = `${keyPrefix}-i${i}`
    if (p.startsWith('`') && p.endsWith('`') && p.length > 2) {
      return (
        <code key={k} style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.9em',
          background: 'var(--app-neutral-100)', border: '1px solid var(--app-neutral-200)',
          borderRadius: 4, padding: '1px 5px', wordBreak: 'break-word',
        }}>{p.slice(1, -1)}</code>
      )
    }
    if (p.startsWith('**') && p.endsWith('**') && p.length > 4) {
      return <strong key={k} style={{ fontWeight: 600, color: 'var(--app-neutral-900)' }}>{p.slice(2, -2)}</strong>
    }
    if (p.startsWith('*') && p.endsWith('*') && p.length > 2) {
      return <em key={k}>{p.slice(1, -1)}</em>
    }
    const link = /^\[([^\]]+)\]\(([^)\s]+)\)$/.exec(p)
    if (link) {
      const [, label, href] = link
      // Neo trong tài liệu → cuộn tới heading. Link ngoài → chỉ cho http/https/mailto:
      // javascript: và data: trong tài liệu do AI sinh phải hiện thành chữ, không bấm được.
      if (href.startsWith('#')) {
        return (
          <a key={k} href={href} style={{ color: 'var(--app-accent)', textDecoration: 'none' }}
            onClick={e => {
              e.preventDefault()
              document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }}>{label}</a>
        )
      }
      if (/^(https?:|mailto:)/i.test(href)) {
        return (
          <a key={k} href={href} target="_blank" rel="noopener noreferrer"
            style={{ color: 'var(--app-accent)' }}>{label}</a>
        )
      }
      return <span key={k}>{p}</span>
    }
    return <span key={k}>{p}</span>
  })
}

// ── Khối ─────────────────────────────────────────────────────────────────────

const H_STYLE: Record<number, React.CSSProperties> = {
  1: { fontSize: 22, lineHeight: '30px', fontWeight: 700, margin: '4px 0 12px' },
  2: { fontSize: 18, lineHeight: '26px', fontWeight: 700, margin: '26px 0 10px',
       paddingBottom: 6, borderBottom: '1px solid var(--app-neutral-200)' },
  3: { fontSize: 15, lineHeight: '22px', fontWeight: 700, margin: '20px 0 8px' },
  4: { fontSize: 14, lineHeight: '20px', fontWeight: 600, margin: '16px 0 6px' },
  5: { fontSize: 13, lineHeight: '20px', fontWeight: 600, margin: '14px 0 6px',
       color: 'var(--app-neutral-700)' },
  6: { fontSize: 12, lineHeight: '18px', fontWeight: 600, margin: '12px 0 4px',
       textTransform: 'uppercase', letterSpacing: 0.4, color: 'var(--app-neutral-500)' },
}

function isTableSep(line: string): boolean {
  return /^\s*\|?[\s:-]*-[\s:|-]*\|?\s*$/.test(line) && line.includes('-')
}

function splitRow(line: string): string[] {
  const t = line.trim().replace(/^\|/, '').replace(/\|$/, '')
  return t.split('|').map(c => c.trim())
}

export function Markdown({ source }: { source: string }) {
  const blocks = useMemo(() => renderBlocks(source), [source])
  return <div style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--app-neutral-700)' }}>{blocks}</div>
}

function renderBlocks(md: string): React.ReactNode[] {
  const lines = md.replace(/\r\n/g, '\n').split('\n')
  const out: React.ReactNode[] = []
  let i = 0
  let key = 0
  const seen = new Map<string, number>()

  /** Heading trùng tên trong cùng tài liệu phải ra id khác nhau, kẻo neo nhảy sai chỗ. */
  const uniqueId = (base: string) => {
    const n = seen.get(base) ?? 0
    seen.set(base, n + 1)
    return n === 0 ? base : `${base}-${n}`
  }

  while (i < lines.length) {
    const line = lines[i]

    // code fence
    const fence = /^\s*```(\w*)\s*$/.exec(line)
    if (fence) {
      const lang = fence[1]
      const body: string[] = []
      i++
      while (i < lines.length && !/^\s*```/.test(lines[i])) { body.push(lines[i]); i++ }
      i++ // bỏ dòng đóng
      out.push(
        <pre key={`k${key++}`} style={{
          background: 'var(--app-neutral-100)', border: '1px solid var(--app-neutral-200)',
          borderRadius: 8, padding: '10px 12px', margin: '10px 0', overflowX: 'auto',
          fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.6,
          color: 'var(--app-neutral-800)',
        }}>
          {lang && (
            <div style={{ fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.5,
              color: 'var(--app-neutral-500)', marginBottom: 6 }}>{lang}</div>
          )}
          <code>{body.join('\n')}</code>
        </pre>,
      )
      continue
    }

    // heading
    const h = /^(#{1,6})\s+(.+?)\s*$/.exec(line)
    if (h) {
      const level = h[1].length
      const raw = h[2]
      const id = uniqueId(slugify(stripInline(raw)))
      const Tag = `h${level}` as 'h1'
      out.push(
        <Tag key={`k${key++}`} id={id} style={{ ...H_STYLE[level], scrollMarginTop: 12,
          color: H_STYLE[level].color ?? 'var(--app-neutral-900)' }}>
          {renderInline(raw, `h${key}`)}
        </Tag>,
      )
      i++
      continue
    }

    // đường kẻ
    if (/^\s*([-*_])\1{2,}\s*$/.test(line)) {
      out.push(<hr key={`k${key++}`} style={{ border: 0, borderTop: '1px solid var(--app-neutral-200)', margin: '18px 0' }} />)
      i++
      continue
    }

    // bảng GFM: dòng có | và dòng kế là dòng phân cách
    if (line.includes('|') && i + 1 < lines.length && isTableSep(lines[i + 1])) {
      const head = splitRow(line)
      i += 2
      const rows: string[][] = []
      while (i < lines.length && lines[i].includes('|') && lines[i].trim() !== '') {
        rows.push(splitRow(lines[i])); i++
      }
      out.push(
        <div key={`k${key++}`} style={{ overflowX: 'auto', margin: '12px 0' }}>
          <table className="ds-table" style={{ fontSize: 13, minWidth: '100%' }}>
            <thead>
              <tr>{head.map((c, ci) => (
                <th key={ci} style={{ whiteSpace: 'nowrap' }}>{renderInline(c, `th${ci}`)}</th>
              ))}</tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri}>
                  {/* Ô thiếu so với header vẫn phải ra ô trống — bảng do AI sinh hay lệch cột */}
                  {head.map((_, ci) => (
                    <td key={ci} style={{ verticalAlign: 'top' }}>{renderInline(r[ci] ?? '', `td${ri}-${ci}`)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>,
      )
      continue
    }

    // blockquote
    if (/^\s*>\s?/.test(line)) {
      const body: string[] = []
      while (i < lines.length && /^\s*>\s?/.test(lines[i])) {
        body.push(lines[i].replace(/^\s*>\s?/, '')); i++
      }
      out.push(
        <blockquote key={`k${key++}`} style={{
          borderLeft: '3px solid var(--app-neutral-300)', paddingLeft: 12, margin: '10px 0',
          color: 'var(--app-neutral-600)',
        }}>{renderInline(body.join(' '), `bq${key}`)}</blockquote>,
      )
      continue
    }

    // danh sách (bullet hoặc số), lồng nhau theo thụt đầu dòng
    const li = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/.exec(line)
    if (li) {
      const items: { indent: number; ordered: boolean; text: string }[] = []
      while (i < lines.length) {
        const m = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/.exec(lines[i])
        if (m) {
          items.push({ indent: Math.floor(m[1].length / 2), ordered: /\d/.test(m[2]), text: m[3] })
          i++
        } else if (lines[i].trim() === '' && i + 1 < lines.length &&
                   /^(\s*)([-*+]|\d+[.)])\s+/.test(lines[i + 1])) {
          i++   // dòng trống giữa các mục cùng danh sách
        } else if (items.length && /^\s{2,}\S/.test(lines[i])) {
          items[items.length - 1].text += ' ' + lines[i].trim()   // dòng tiếp của mục
          i++
        } else break
      }
      out.push(<ListBlock key={`k${key++}`} items={items} />)
      continue
    }

    // dòng trống
    if (line.trim() === '') { i++; continue }

    // đoạn văn — gom các dòng liền nhau
    const para: string[] = []
    while (i < lines.length && lines[i].trim() !== ''
           && !/^(#{1,6})\s/.test(lines[i])
           && !/^\s*```/.test(lines[i])
           && !/^\s*>\s?/.test(lines[i])
           && !/^(\s*)([-*+]|\d+[.)])\s+/.test(lines[i])
           && !/^\s*([-*_])\1{2,}\s*$/.test(lines[i])
           && !(lines[i].includes('|') && i + 1 < lines.length && isTableSep(lines[i + 1]))) {
      para.push(lines[i]); i++
    }
    if (para.length) {
      out.push(
        <p key={`k${key++}`} style={{ margin: '8px 0' }}>{renderInline(para.join(' '), `p${key}`)}</p>,
      )
    }
  }
  return out
}

/** Dựng danh sách lồng nhau từ mảng phẳng có mức thụt. */
function ListBlock({ items }: { items: { indent: number; ordered: boolean; text: string }[] }) {
  function build(start: number, level: number): [React.ReactNode, number] {
    const kids: React.ReactNode[] = []
    const ordered = items[start]?.ordered ?? false
    let i = start
    while (i < items.length && items[i].indent >= level) {
      if (items[i].indent > level) {
        const [sub, next] = build(i, items[i].indent)
        kids.push(<React.Fragment key={`s${i}`}>{sub}</React.Fragment>)
        i = next
        continue
      }
      const cur = items[i]
      let node: React.ReactNode = renderInline(cur.text, `li${i}`)
      i++
      if (i < items.length && items[i].indent > level) {
        const [sub, next] = build(i, items[i].indent)
        node = <>{node}{sub}</>
        i = next
      }
      kids.push(<li key={`l${i}`} style={{ margin: '3px 0' }}>{node}</li>)
    }
    const Tag = ordered ? 'ol' : 'ul'
    // listStyleType tường minh: Tailwind preflight đặt `list-style: none` cho ul/ol, nên
    // không khai báo lại thì danh sách mất hết dấu đầu dòng và số thứ tự — mọi mục trông
    // như đoạn văn thụt lề, mất luôn quan hệ cha–con.
    return [
      <Tag style={{
        paddingLeft: 22, margin: '6px 0',
        listStyleType: ordered ? 'decimal' : (level > 0 ? 'circle' : 'disc'),
        listStylePosition: 'outside',
      }}>{kids}</Tag>,
      i,
    ]
  }
  const [node] = build(0, items[0]?.indent ?? 0)
  return <>{node}</>
}
