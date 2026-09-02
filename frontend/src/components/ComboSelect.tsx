import React, { useEffect, useRef, useState } from 'react'

/**
 * ComboSelect — dropdown LOV có ô tìm kiếm.
 * Trước đây định nghĩa cục bộ trong RequestsPage.tsx; tách ra đây để form tạo CR
 * và form sửa CR dùng chung một hành vi chọn sản phẩm / dự án.
 */

export interface ComboOption { value: string; label: string; meta?: string }

export function ComboSelect({
  options, value, onChange,
  placeholder = 'Tìm kiếm...',
  loading = false,
  disabled = false,
  allowClear = false,
  clearLabel = '— Không chọn —',
}: {
  options: ComboOption[]
  value: string
  onChange: (val: string, label: string) => void
  placeholder?: string
  loading?: boolean
  disabled?: boolean
  /** Cho phép bỏ chọn — dùng cho trường tùy chọn như Dự án tài trợ */
  allowClear?: boolean
  clearLabel?: string
}) {
  const [query, setQuery] = useState('')
  const [open, setOpen]   = useState(false)
  const ref               = useRef<HTMLDivElement>(null)

  const selectedLabel = options.find(o => o.value === value)?.label ?? ''

  const filtered = query.trim()
    ? options.filter(o =>
        o.label.toLowerCase().includes(query.toLowerCase()) ||
        (o.meta ?? '').toLowerCase().includes(query.toLowerCase())
      )
    : options

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <div
        className="input"
        style={{
          display: 'flex', alignItems: 'center', gap: 6, cursor: disabled ? 'not-allowed' : 'pointer',
          background: disabled ? 'var(--app-neutral-100)' : undefined,
          minHeight: 36, padding: '4px 10px',
        }}
        onClick={() => { if (!disabled) setOpen(o => !o) }}
      >
        {value ? (
          <span style={{ flex: 1, fontSize: 13 }}>{selectedLabel}</span>
        ) : (
          <span style={{ flex: 1, fontSize: 13, color: 'var(--app-neutral-400)' }}>
            {loading ? 'Đang tải...' : placeholder}
          </span>
        )}
        <span style={{ color: 'var(--app-neutral-400)', fontSize: 10 }}>{open ? '▲' : '▼'}</span>
      </div>

      {open && !disabled && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 999,
          background: 'var(--app-white)', border: '1px solid var(--app-neutral-300)',
          borderRadius: 6, boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          maxHeight: 260, display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ padding: '6px 8px', borderBottom: '1px solid var(--app-neutral-200)' }}>
            <input
              autoFocus
              className="input input-sm"
              style={{ width: '100%' }}
              placeholder="Tìm..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              onClick={e => e.stopPropagation()}
            />
          </div>
          <div style={{ overflowY: 'auto', flex: 1 }}>
            {allowClear && (
              <div
                style={{
                  padding: '8px 12px', cursor: 'pointer', fontSize: 13,
                  color: 'var(--app-neutral-500)', fontStyle: 'italic',
                  borderBottom: '1px solid var(--app-neutral-100)',
                }}
                onClick={() => { onChange('', ''); setOpen(false); setQuery('') }}
              >
                {clearLabel}
              </div>
            )}
            {filtered.length === 0 && (
              <div style={{ padding: '10px 12px', color: 'var(--app-neutral-400)', fontSize: 13 }}>
                Không tìm thấy kết quả
              </div>
            )}
            {filtered.map(opt => (
              <div
                key={opt.value}
                style={{
                  padding: '8px 12px', cursor: 'pointer', fontSize: 13,
                  background: opt.value === value ? 'var(--ds-surface-selected)' : undefined,
                  borderBottom: '1px solid var(--app-neutral-100)',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.background = 'var(--app-neutral-50)' }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    opt.value === value ? 'var(--ds-surface-selected)' : ''
                }}
                onClick={() => { onChange(opt.value, opt.label); setOpen(false); setQuery('') }}
              >
                <div style={{ fontWeight: opt.value === value ? 600 : 400 }}>{opt.label}</div>
                {opt.meta && (
                  <div style={{ fontSize: 11, color: 'var(--app-neutral-500)', marginTop: 1 }}>{opt.meta}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
