import { useState } from 'react'
import { AutomationTasksTab } from '../../features/automation/AutomationTasksTab'
import { StudioPanel } from './StudioPanel'

/**
 * Test — MỘT module duy nhất cho toàn bộ việc kiểm thử (QĐ-3).
 *
 * Trước 2026-09-01 có HAI menu song song vì hai thế hệ nằm cạnh nhau:
 *   - "Test" (/test-workflow, service test-platform :8003): tài liệu test + generator bóc
 *     bullet từ BRS. Test case sinh ra là mảnh tiêu đề Markdown, script chỉ có phần khung.
 *     Cột brs_id kiểu varchar trỏ bảng brs_sync — KHÔNG nối được với cr_brs_documents (uuid)
 *     của luồng BA, nên hai bên vĩnh viễn không tham chiếu nhau được.
 *   - "Automation" (/automation, PPG :8001): chuỗi CR → BRS → task → test case → Capture
 *     Studio → lượt chạy → báo cáo → đóng.
 * Việc tách đó là nợ kỹ thuật, không phải thiết kế, và trái QĐ-3 ("gom chung 1 hệ, đi theo
 * hướng automation"). Nay chỉ còn module này.
 *
 * Phân biệt đáng giữ KHÔNG phải "test vs automation" mà là:
 *   test case = cái gì phải đúng (thuộc BRS)  ·  script = chạy thế nào (thuộc Capture Studio)
 * Cả hai nằm trong cùng một module, hai tab.
 *
 * Tài liệu test (Test Plan, UAT Sign-off) là TÀI LIỆU — đã chuyển sang trang Tài liệu.
 */
type Tab = 'tasks' | 'studio'

export default function TestHubPage() {
  const [tab, setTab] = useState<Tab>('tasks')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="ds-tabs" style={{ marginBottom: 16, flexShrink: 0 }}>
        <button className={`ds-tab${tab === 'tasks' ? ' active' : ''}`} onClick={() => setTab('tasks')}>
          Test case theo CR
        </button>
        <button className={`ds-tab${tab === 'studio' ? ' active' : ''}`} onClick={() => setTab('studio')}>
          Capture Studio — ghi script
        </button>
      </div>

      {tab === 'tasks' ? <AutomationTasksTab /> : <StudioPanel />}
    </div>
  )
}
