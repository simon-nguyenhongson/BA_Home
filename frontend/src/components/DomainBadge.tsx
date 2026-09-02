import React from 'react'
import { DOMAIN_BADGE_COLORS } from '../styles/categorical'

/**
 * DomainBadge — chip domain nghiệp vụ, dùng chung cho dự án và sản phẩm.
 *
 * LỖI ĐÃ SỬA: bốn chỗ tự dựng chip này viết `background: 'var(--app-warning)20'` — nối
 * "20" vào sau một var() KHÔNG phải cú pháp màu hợp lệ, nên trình duyệt bỏ nguyên khai
 * báo: chữ cam đậm nằm trên nền trắng, không ra hình cái chip. Cùng lúc phía sản phẩm
 * lại tô đúng theo thang categorical, nên hai tab hiện cùng một khái niệm bằng hai kiểu.
 *
 * Màu lấy từ styles/categorical.ts — DS không có thang qualitative, và theo CLAUDE.md
 * màu phân loại chỉ được khai ở đúng một chỗ đó. Cộng alpha vào chuỗi hex thì hợp lệ
 * (#8B5CF6 + '18'), khác với var().
 */

export function DomainBadge({
  code, name, size = 'sm',
}: {
  code?: string | null
  name?: string | null
  /** sm cho ô bảng (11px), md cho dải tiêu đề (12px) */
  size?: 'sm' | 'md'
}) {
  if (!code) return <span style={{ color: 'var(--app-neutral-400)' }}>—</span>

  const hex = DOMAIN_BADGE_COLORS[code]
  const style: React.CSSProperties = hex
    ? { background: `${hex}18`, color: hex, border: `1px solid ${hex}40` }
    : {
        background: 'var(--app-neutral-100)',
        color: 'var(--app-neutral-600)',
        border: '1px solid var(--app-neutral-200)',
      }

  return (
    <span
      style={{
        ...style,
        display: 'inline-block', whiteSpace: 'nowrap',
        borderRadius: 16,                                   // badge = pill theo DS
        padding: size === 'md' ? '2px 8px' : '1px 8px',
        fontSize: size === 'md' ? 12 : 11,
        lineHeight: '18px', fontWeight: 600,
      }}
    >
      {name || code}
    </span>
  )
}
