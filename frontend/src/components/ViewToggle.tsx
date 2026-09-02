import React from 'react'
import { LayoutGrid, List } from 'lucide-react'

/**
 * ViewToggle — chuyển giữa dạng thẻ và dạng bảng.
 *
 * LỖI ĐÃ SỬA: bốn bản copy của khối này (3 trong CatalogPage, 1 trong PPGPage) render nội
 * dung là CHUỖI RỖNG — `{icon}` với icon = '' và `{mode === 'grid' ? '' : ''}`. Emoji bị gỡ
 * khi áp Design System nhưng không ai thay bằng icon, nên còn lại hai nút 20×8px trong
 * suốt: người dùng không thấy có gì để bấm, chỉ vô tình chạm vào mới đổi được cách xem.
 *
 * Gộp thành một component để lần sau đổi icon không phải sửa bốn chỗ, và để hai nút có
 * nhãn truy cập được (aria-label + aria-pressed) thay vì chỉ có tooltip.
 */

export type ViewMode = 'grid' | 'list'

const OPTIONS: { mode: ViewMode; label: string; Icon: typeof LayoutGrid }[] = [
  { mode: 'grid', label: 'Dạng thẻ',  Icon: LayoutGrid },
  { mode: 'list', label: 'Dạng bảng', Icon: List },
]

export function ViewToggle({
  value, onChange,
}: {
  value: ViewMode
  onChange: (mode: ViewMode) => void
}) {
  return (
    <div
      role="group"
      aria-label="Cách hiển thị danh sách"
      style={{
        display: 'flex', gap: 2, flexShrink: 0,
        background: 'var(--app-neutral-100)', padding: 3, borderRadius: 8,
      }}
    >
      {OPTIONS.map(({ mode, label, Icon }) => {
        const on = value === mode
        return (
          <button
            key={mode}
            type="button"
            title={label}
            aria-label={label}
            aria-pressed={on}
            onClick={() => onChange(mode)}
            style={{
              // 28px: đủ lớn để nhìn thấy và bấm được, khớp chiều cao .btn-sm bên cạnh
              width: 30, height: 26, padding: 0, border: 'none', borderRadius: 6,
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: on ? 'var(--app-white)' : 'transparent',
              color: on ? 'var(--app-primary)' : 'var(--app-neutral-500)',
              boxShadow: on ? 'var(--shadow-xs)' : 'none',
              transition: 'background .15s, color .15s',
            }}
          >
            <Icon size={15} strokeWidth={1.8} />
          </button>
        )
      })}
    </div>
  )
}
