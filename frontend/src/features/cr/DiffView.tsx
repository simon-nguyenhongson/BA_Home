import type { DiffResult } from '../../api/ai'

const ROW_BG: Record<string, string> = {
  add: '#ECFDF3',
  del: '#FEF3F2',
  change: '#FFFAEB',
  same: 'transparent',
}

const NO_COLOR = 'var(--app-neutral-400)'

/**
 * So sánh 2 phiên bản tài liệu dạng side-by-side.
 * Dùng cho: duyệt bản đề xuất Master Doc, so sánh 2 version bất kỳ,
 * và xem tác động của một CR lên Master Doc.
 */
export function DiffView({ diff, compact = false }: { diff: DiffResult; compact?: boolean }) {
  const rows = compact ? diff.rows.filter(r => r.type !== 'same') : diff.rows

  return (
    <div>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8, flexWrap: 'wrap' }}>
        {diff.left?.label && (
          <span style={{ fontSize: 13, color: 'var(--app-neutral-600)' }}>
            {diff.left.label} → <strong style={{ color: 'var(--app-neutral-900)' }}>{diff.right?.label}</strong>
          </span>
        )}
        <span className="badge badge-success">+{diff.stats.added} dòng thêm</span>
        <span className="badge badge-danger">−{diff.stats.removed} dòng xoá</span>
        <span className="badge badge-warning">{diff.stats.changed} dòng sửa</span>
      </div>

      {rows.length === 0 ? (
        <div style={{ padding: 24, textAlign: 'center', color: 'var(--app-neutral-500)', fontSize: 14 }}>
          Không có khác biệt giữa hai phiên bản
        </div>
      ) : (
        <div style={{
          border: '1px solid var(--app-neutral-200)', borderRadius: 8, overflow: 'auto',
          maxHeight: 520, background: '#fff',
        }}>
          <table style={{
            width: '100%', borderCollapse: 'collapse',
            fontFamily: 'var(--font-mono)', fontSize: 12, lineHeight: '18px',
          }}>
            <thead>
              <tr>
                <th colSpan={2} style={{
                  position: 'sticky', top: 0, background: 'var(--app-neutral-100)',
                  padding: '6px 10px', textAlign: 'left', fontFamily: 'var(--font)',
                  fontSize: 12, fontWeight: 500, color: 'var(--app-neutral-500)',
                  borderBottom: '1px solid var(--app-neutral-200)', width: '50%',
                }}>
                  {diff.left?.label || 'Bản gốc'}
                </th>
                <th colSpan={2} style={{
                  position: 'sticky', top: 0, background: 'var(--app-neutral-100)',
                  padding: '6px 10px', textAlign: 'left', fontFamily: 'var(--font)',
                  fontSize: 12, fontWeight: 500, color: 'var(--app-neutral-500)',
                  borderBottom: '1px solid var(--app-neutral-200)',
                  borderLeft: '1px solid var(--app-neutral-200)', width: '50%',
                }}>
                  {diff.right?.label || 'Bản mới'}
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i}>
                  <td style={{
                    width: 44, textAlign: 'right', padding: '1px 6px', color: NO_COLOR,
                    background: 'var(--app-neutral-50)', userSelect: 'none', verticalAlign: 'top',
                  }}>{r.left_no ?? ''}</td>
                  <td style={{
                    padding: '1px 8px', background: ROW_BG[r.type === 'add' ? 'same' : r.type],
                    whiteSpace: 'pre-wrap', wordBreak: 'break-word', verticalAlign: 'top',
                    color: r.type === 'del' ? 'var(--app-danger)' : 'var(--app-neutral-700)',
                  }}>{r.left}</td>
                  <td style={{
                    width: 44, textAlign: 'right', padding: '1px 6px', color: NO_COLOR,
                    background: 'var(--app-neutral-50)', userSelect: 'none', verticalAlign: 'top',
                    borderLeft: '1px solid var(--app-neutral-200)',
                  }}>{r.right_no ?? ''}</td>
                  <td style={{
                    padding: '1px 8px', background: ROW_BG[r.type === 'del' ? 'same' : r.type],
                    whiteSpace: 'pre-wrap', wordBreak: 'break-word', verticalAlign: 'top',
                    color: r.type === 'add' ? 'var(--app-success)' : 'var(--app-neutral-700)',
                  }}>{r.right}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
