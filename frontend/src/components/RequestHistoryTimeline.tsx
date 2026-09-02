import React from 'react'
import type { RequestHistoryEntry } from '../api/requests'

/**
 * toLocaleString('vi-VN') cho ra "23:40:46 1/9/2026" — giờ trước ngày, ngày một chữ số,
 * khó đối chiếu khi rà soát nhiều dòng và khác định dạng dùng ở panel chi tiết.
 */
function fmtStamp(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  const p = (n: number) => String(n).padStart(2, '0')
  return `${p(d.getDate())}/${p(d.getMonth() + 1)}/${d.getFullYear()} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`
}

const ACTION_LABEL: Record<string, string> = {
  created:                  'Khởi tạo',
  updated:                  'Cập nhật thông tin',
  status_changed:           'Thay đổi trạng thái',
  // Backend ghi action riêng cho nước đi ngoài luồng chuẩn (bỏ qua bước duyệt chẳng hạn).
  // Không có nhãn thì dòng này hiện nguyên chuỗi mã và trông y như một thay đổi bình thường.
  status_changed_off_flow:  'Chuyển NGOÀI LUỒNG',
}

function dotColor(e: RequestHistoryEntry): string {
  if (e.action === 'status_changed_off_flow') return 'var(--app-warning)'
  if (e.action === 'created') return 'var(--app-success)'
  const terminal = ['rejected', 'cancelled', 'closed']
  if (e.to_status && terminal.includes(e.to_status)) return 'var(--ds-danger)'
  if (e.to_status === 'implemented' || e.to_status === 'resolved') return 'var(--app-success)'
  return 'var(--app-primary)'
}

export function RequestHistoryTimeline({
  entries,
  statusLabels,
  loading,
}: {
  entries: RequestHistoryEntry[]
  statusLabels: Record<string, string>
  loading?: boolean
}) {
  if (loading) {
    return (
      <div style={{ marginTop: 16, borderTop: '1px solid var(--app-neutral-200)', paddingTop: 12 }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--app-neutral-400)', textTransform: 'uppercase', letterSpacing: 0.5 }}>
          Lịch sử hoạt động
        </div>
        <div style={{ fontSize: 12, color: 'var(--app-neutral-400)', paddingTop: 8 }}>Đang tải...</div>
      </div>
    )
  }
  if (entries.length === 0) return null

  return (
    <div style={{ marginTop: 16, borderTop: '1px solid var(--app-neutral-200)', paddingTop: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--app-neutral-500)', marginBottom: 10, textTransform: 'uppercase', letterSpacing: 0.5 }}>
        Lịch sử hoạt động
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {entries.map((e, i) => (
          <div key={e.id} style={{ display: 'flex', gap: 10 }}>
            {/* Dot + connector */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0, width: 18 }}>
              <div style={{
                width: 8, height: 8, borderRadius: '50%', marginTop: 5, flexShrink: 0,
                background: dotColor(e),
                boxShadow: `0 0 0 2px var(--app-white), 0 0 0 3px ${dotColor(e)}33`,
              }} />
              {i < entries.length - 1 && (
                <div style={{ width: 1, flex: 1, background: 'var(--app-neutral-200)', minHeight: 14 }} />
              )}
            </div>

            {/* Content */}
            <div style={{ flex: 1, paddingBottom: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: 12, fontWeight: e.action === 'status_changed_off_flow' ? 700 : 600,
                  color: e.action === 'status_changed_off_flow' ? 'var(--app-warning)' : 'var(--app-neutral-800)',
                }}>
                  {ACTION_LABEL[e.action] ?? e.action}
                </span>
                {e.from_status && e.to_status && (
                  <>
                    <span style={{ fontSize: 11, color: 'var(--app-neutral-400)' }}>
                      {statusLabels[e.from_status] ?? e.from_status}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--app-neutral-400)' }}>→</span>
                    <span style={{ fontSize: 11, fontWeight: 600, color: dotColor(e) }}>
                      {statusLabels[e.to_status] ?? e.to_status}
                    </span>
                  </>
                )}
                {e.action === 'created' && e.to_status && !e.from_status && (
                  <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--app-success)' }}>
                    {statusLabels[e.to_status] ?? e.to_status}
                  </span>
                )}
              </div>
              <div style={{ fontSize: 11, color: 'var(--app-neutral-400)', marginTop: 1 }}>
                {e.actor} · {fmtStamp(e.created_at)}
              </div>
              {e.comment && (
                <div style={{
                  marginTop: 5, padding: '5px 10px',
                  background: 'var(--app-neutral-50)', borderRadius: 6,
                  border: '1px solid var(--app-neutral-200)',
                  fontSize: 12, color: 'var(--app-neutral-700)',
                  lineHeight: 1.5, fontStyle: 'italic',
                }}>
                  "{e.comment}"
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
