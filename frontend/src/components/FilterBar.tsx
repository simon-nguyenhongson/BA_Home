import { Funnel, Search, X } from 'lucide-react'
/**
 * FilterBar — MỘT dải lọc cho mọi màn danh sách: ô tìm kiếm + nút [Lọc] gom mọi bộ lọc.
 *
 * Hai quyết định về hình:
 *
 * 1. Ô tìm kiếm PHẢI nằm trong dải này, không để rời trên dải hành động: tìm kiếm và lọc
 *    cùng thu hẹp một tập dữ liệu, tách ra hai dải thì người dùng phải quét hai chỗ mới
 *    biết danh sách đang bị giới hạn bởi những gì — mà chỉ số "x/y" ở cuối dải lại nói về
 *    cả hai.
 *
 * 2. LOV và khoảng ngày nằm sau nút icon phễu, không phơi thẳng ra dải. Phơi ra thì mỗi
 *    màn có số field khác nhau (Requests 1 LOV + 2 ngày, Danh mục nhân sự 0) nên dải lọc
 *    dài ngắn tuỳ màn và ngày nào không dùng vẫn chiếm 2 field "dd/mm/yyyy" trống. Số bộ
 *    lọc đang bật hiện thành badge trên nút, nên thu gọn KHÔNG làm mất dấu hiệu "danh sách
 *    đang bị lọc". Tấm popover theo hợp đồng PopOver của DS: có mũi, có title, có footer.
 *
 * Field bên trong dùng class .app-input — một điểm định nghĩa cho khung field (32px,
 * radius 8, viền gray-300, focus halo).
 */
import React, { useEffect, useRef, useState } from 'react'

export interface FilterSelectOption { value: string; label: string }

export interface FilterBarProps {
  text?: {
    value: string
    onChange: (v: string) => void
    placeholder?: string
  }
  selects?: {
    key: string
    value: string
    onChange: (v: string) => void
    /** Text của lựa chọn "không lọc" — cũng là nhãn dự phòng nếu không truyền `label`. */
    placeholder: string
    /** Nhãn trên field trong popover. Đặt tên trường ("Trạng thái"), không phải câu
     *  "Tất cả trạng thái" — câu đó là một GIÁ TRỊ của trường, đọc thành nhãn thì sai. */
    label?: string
    options: FilterSelectOption[]
  }[]
  dateFrom?: { value: string; onChange: (v: string) => void; label?: string }
  dateTo?:   { value: string; onChange: (v: string) => void; label?: string }
  onClear?: () => void
  /** Slot cuối dải — thường là chỉ số "đang hiện / tổng". */
  right?: React.ReactNode
}

const S: Record<string, React.CSSProperties> = {
  bar: {
    display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap',
    padding: '8px 12px',
    // Dải gray-50 là dấu hiệu nhận dạng "dải header" của DS — cũng là thứ gom cả hàng
    // control này thành MỘT khối thay vì mấy field trôi nổi trên nền trắng.
    background: 'var(--app-neutral-100)',
    borderTop: '1px solid var(--app-neutral-200)',
    borderBottom: '1px solid var(--app-neutral-200)',
  },
  searchIcon: {
    position: 'absolute', left: 10, display: 'flex',
    color: 'var(--app-neutral-400)', pointerEvents: 'none',
  },
  clearText: {
    position: 'absolute', right: 6,
    width: 20, height: 20, padding: 0, borderRadius: 6, border: 'none',
    background: 'transparent', color: 'var(--app-neutral-400)', cursor: 'pointer',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  panel: {
    position: 'absolute', top: 'calc(100% + 8px)', left: 0, zIndex: 40,
    width: 300,
    background: 'var(--app-white)',
    border: '1px solid var(--app-neutral-200)',
    borderRadius: 12,                     // radius panel của DS
    boxShadow: 'var(--shadow-popover)',
  },
  // Mũi popover: hình vuông xoay 45°, chỉ vẽ hai cạnh trên–trái nên viền nối liền với
  // viền tấm, không thành ô vuông có 4 cạnh nằm chồng lên tấm.
  arrow: {
    position: 'absolute', top: -5, left: 18, width: 8, height: 8,
    background: 'var(--app-white)',
    borderLeft: '1px solid var(--app-neutral-200)',
    borderTop: '1px solid var(--app-neutral-200)',
    transform: 'rotate(45deg)',
  },
  panelHead: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '10px 16px',
    borderBottom: '1px solid var(--app-neutral-200)',
  },
  panelBody: { padding: 16, display: 'flex', flexDirection: 'column', gap: 12 },
  panelFoot: {
    display: 'flex', justifyContent: 'space-between', gap: 8,
    padding: '10px 16px',
    borderTop: '1px solid var(--app-neutral-200)',
  },
  fieldLabel: {
    display: 'block', marginBottom: 4,
    fontSize: 14, lineHeight: '20px', fontWeight: 500,
    color: 'var(--app-neutral-700)',
  },
  count: {
    minWidth: 18, height: 18, padding: '0 5px', borderRadius: 16,
    background: 'var(--app-primary)', color: 'var(--app-white)',
    fontSize: 12, lineHeight: '18px', fontWeight: 600,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  },
}

export function FilterBar({
  text, selects = [], dateFrom, dateTo, onClear, right,
}: FilterBarProps) {
  const [open, setOpen] = useState(false)
  const popRef = useRef<HTMLDivElement>(null)

  const hasFilters = selects.length > 0 || !!dateFrom || !!dateTo

  // Đếm bộ lọc đang bật — KHÔNG tính ô tìm kiếm, vì ô đó nhìn thấy được nên đã tự nói
  // trạng thái của nó.
  const activeCount =
    selects.filter(s => s.value !== '').length +
    ((dateFrom?.value ?? '') !== '' ? 1 : 0) +
    ((dateTo?.value ?? '') !== '' ? 1 : 0)

  const hasActive = activeCount > 0 || (text?.value ?? '') !== ''

  useEffect(() => {
    if (!open) return
    function onDown(e: MouseEvent) {
      if (popRef.current && !popRef.current.contains(e.target as Node)) setOpen(false)
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div role="group" aria-label="Bộ lọc danh sách" style={S.bar}>
      {/* Tìm kiếm */}
      {text && (
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <span style={S.searchIcon}>
            <Search size={16} strokeWidth={1.5} aria-hidden />
          </span>
          <input
            className="app-input"
            style={{ width: 240, paddingLeft: 34, paddingRight: text.value ? 30 : 12 }}
            placeholder={text.placeholder ?? 'Tìm kiếm'}
            aria-label={text.placeholder ?? 'Tìm kiếm'}
            value={text.value}
            onChange={e => text.onChange(e.target.value)}
          />
          {text.value && (
            <button
              type="button"
              onClick={() => text.onChange('')}
              title="Xoá từ khoá"
              aria-label="Xoá từ khoá tìm kiếm"
              style={S.clearText}
            ><X size={14} strokeWidth={1.5} /></button>
          )}
        </div>
      )}

      {/* Nút phễu + tấm popover chứa toàn bộ bộ lọc */}
      {hasFilters && (
        <div ref={popRef} style={{ position: 'relative' }}>
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <Funnel size={16} strokeWidth={1.5} aria-hidden /> Lọc
            {activeCount > 0 && (
              <span style={S.count} aria-label={`${activeCount} bộ lọc đang bật`}>
                {activeCount}
              </span>
            )}
          </button>

          {open && (
            <div role="dialog" aria-label="Bộ lọc" style={S.panel}>
              <span style={S.arrow} />

              <div style={S.panelHead}>
                <span style={{ fontSize: 14, lineHeight: '20px', fontWeight: 600 }}>Lọc</span>
                <button
                  type="button"
                  className="btn-icon"
                  style={{ width: 24, height: 24, color: 'var(--app-neutral-500)' }}
                  aria-label="Đóng bộ lọc"
                  onClick={() => setOpen(false)}
                ><X size={16} strokeWidth={1.5} /></button>
              </div>

              <div style={S.panelBody}>
                {selects.map(sel => (
                  <div key={sel.key}>
                    <label style={S.fieldLabel} htmlFor={`flt-${sel.key}`}>
                      {sel.label ?? sel.placeholder}
                    </label>
                    <select
                      id={`flt-${sel.key}`}
                      className="app-input"
                      value={sel.value}
                      onChange={e => sel.onChange(e.target.value)}
                    >
                      <option value="">{sel.placeholder}</option>
                      {sel.options.map(o => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                  </div>
                ))}

                {dateFrom && (
                  <div>
                    <label style={S.fieldLabel} htmlFor="flt-date-from">
                      {dateFrom.label ?? 'Từ ngày'}
                    </label>
                    <input
                      id="flt-date-from"
                      type="date"
                      className="app-input"
                      value={dateFrom.value}
                      onChange={e => dateFrom.onChange(e.target.value)}
                    />
                  </div>
                )}

                {dateTo && (
                  <div>
                    <label style={S.fieldLabel} htmlFor="flt-date-to">
                      {/* '→' là nhãn nối của bản dải ngang cũ, không đọc được thành câu
                          khi field xuống dòng riêng */}
                      {!dateTo.label || dateTo.label === '→' ? 'Đến ngày' : dateTo.label}
                    </label>
                    <input
                      id="flt-date-to"
                      type="date"
                      className="app-input"
                      value={dateTo.value}
                      onChange={e => dateTo.onChange(e.target.value)}
                    />
                  </div>
                )}
              </div>

              <div style={S.panelFoot}>
                <button
                  type="button"
                  className="btn btn-ghost btn-sm"
                  disabled={!hasActive}
                  onClick={() => onClear?.()}
                >
                  Xoá lọc
                </button>
                <button type="button" className="btn btn-primary btn-sm" onClick={() => setOpen(false)}>
                  Xong
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Slot cuối dải */}
      {right && (
        <>
          <div style={{ flex: 1 }} />
          {right}
        </>
      )}
    </div>
  )
}

/** Client-side text filter across multiple string fields. */
export function applyTextFilter<T extends object>(
  rows: T[],
  query: string,
  fields: (keyof T)[],
): T[] {
  if (!query.trim()) return rows
  const q = query.toLowerCase()
  return rows.filter(r =>
    fields.some(f => String(r[f] ?? '').toLowerCase().includes(q))
  )
}

/**
 * Client-side date-range filter on an ISO date/datetime field.
 * Rows with null/empty field values always pass through (not excluded by range).
 */
export function applyDateFilter<T>(
  rows: T[],
  field: keyof T,
  from: string,
  to: string,
): T[] {
  if (!from && !to) return rows
  return rows.filter(r => {
    const raw = String(r[field] ?? '').slice(0, 10)
    if (!raw) return true          // null dates are not filtered out
    if (from && raw < from) return false
    if (to   && raw > to)   return false
    return true
  })
}
