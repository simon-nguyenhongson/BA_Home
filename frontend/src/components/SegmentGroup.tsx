import type { LayoutGrid } from 'lucide-react'
import React from 'react'

/**
 * SegmentGroup — dải segmented để lát danh sách theo một trục (loại sản phẩm, loại nhân
 * sự, mục của form). Vỏ và trạng thái lấy từ class .ds-seg/.ds-seg__item trong styles.css.
 *
 * LỖI ĐÃ SỬA: ba bản copy trong CatalogPage tự dựng inline với radius 20 cho vỏ và 14 cho
 * item, mục đang chọn tô đầy Blue 600. Cả hai đều lệch DS: radius 16 chỉ dành cho badge
 * (pill), mọi control là radius 8; và fill Blue 600 là ngôn ngữ của nút primary — dùng cho
 * một mục trong dải lọc thì nó tranh vai với nút hành động thật của trang. DS dùng
 * "bề mặt trắng nổi lên một nấc" cho mục đang chọn, đúng như .ds-seg đã khai.
 */

export interface SegmentItem<K extends string> {
  key: K
  label: string
  icon?: typeof LayoutGrid
  /** Số bản ghi thuộc mục — hiện thành chip sau nhãn. */
  count?: number
}

const COUNT: React.CSSProperties = {
  minWidth: 18, padding: '0 5px', borderRadius: 16,
  background: 'var(--app-neutral-200)', color: 'var(--app-neutral-600)',
  fontSize: 12, lineHeight: '18px', fontWeight: 600,
}

export function SegmentGroup<K extends string>({
  value, onChange, items, ariaLabel,
}: {
  value: K
  onChange: (key: K) => void
  items: readonly SegmentItem<K>[]
  ariaLabel: string
}) {
  return (
    <div role="group" aria-label={ariaLabel} className="ds-seg" style={{ flexShrink: 0 }}>
      {items.map(({ key, label, icon: Icon, count }) => {
        const on = key === value
        return (
          <button
            key={key}
            type="button"
            aria-pressed={on}
            className={`ds-seg__item${on ? ' active' : ''}`}
            onClick={() => onChange(key)}
          >
            {Icon && <Icon size={16} strokeWidth={1.5} aria-hidden />}
            {label}
            {count !== undefined && <span style={COUNT}>{count}</span>}
          </button>
        )
      })}
    </div>
  )
}
