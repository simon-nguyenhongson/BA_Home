/**
 * AI API client — cấu hình Claude, kho skill, BRS theo CR, Master Doc, Automation Test.
 * Luồng: docs/design/AI-DOC-AUTOMATION-FLOW.md
 */
import { apiRequest } from '../lib/http'

const BASE = '/api/ppg'
const req = <T,>(method: string, path: string, body?: unknown) =>
  apiRequest<T>(BASE, method, path, body)

// ── Types ────────────────────────────────────────────────────────────────────
export interface AiSettings {
  anthropic_api_key_masked: string
  has_api_key: boolean
  credential_type: 'oauth' | 'api_key' | 'none'
  anthropic_model: string
  anthropic_max_tokens: number
  updated_by: string | null
  updated_at: string | null
}

export interface AiSkill {
  id: string
  code: string
  name: string
  description: string
  content?: string
  is_system: boolean
  updated_by: string | null
  created_at: string
  updated_at: string
  content_length?: number
}

export type BrsStatus = 'draft' | 'in_review' | 'approved' | 'golive'

export interface BrsDocument {
  id: string
  cr_id: string
  title: string
  content: string
  version: number
  status: BrsStatus
  skill_code: string | null
  created_by: string | null
  updated_by: string | null
  approved_by: string | null
  approved_at: string | null
  golive_by: string | null
  golive_at: string | null
  created_at: string
  updated_at: string
}

export interface BrsHistoryItem {
  id: string
  version: number
  change_note: string
  source: 'generate' | 'revise' | 'manual_edit' | 'status_change'
  created_by: string | null
  created_at: string
  content_length: number
}

export interface DiffRow {
  type: 'same' | 'add' | 'del' | 'change'
  left_no: number | null
  right_no: number | null
  left: string
  right: string
}

export interface DiffResult {
  stats: { added: number; removed: number; changed: number; left_lines: number; right_lines: number }
  rows: DiffRow[]
  left?: { label: string; version_id?: string | null }
  right?: { label: string; version_id?: string | null; status?: string }
  change_summary?: string
}

export interface MasterDoc {
  id: string
  product_id: string
  title: string
  content: string
  current_version: string
  current_version_no: number
  status: string
  product_name?: string | null
  product_code?: string | null
  pending_count?: number
  updated_at: string
}

export interface MasterDocVersionCr {
  cr_id: string | null
  cr_code: string
  cr_title: string
  cr_change_type: string | null
  cr_priority: string | null
  project_code: string | null
  project_name: string | null
  merged_by: string | null
  merged_at: string
}

export interface MasterDocVersion {
  id: string
  version_no: number | null
  version: string
  change_summary: string
  source: 'initial' | 'cr_merge' | 'manual'
  status: 'pending' | 'approved' | 'rejected'
  base_version_no: number | null
  brs_id: string | null
  created_by: string | null
  created_at: string
  approved_by: string | null
  approved_at: string | null
  content_length: number
  crs: MasterDocVersionCr[]
}

export interface MasterDocImpact extends DiffResult {
  master_doc_id: string
  master_doc_title: string
  product_name: string | null
  product_code: string | null
  version_id: string
  version: string
  status: string
  change_summary: string
  created_at: string
  approved_at: string | null
  base_label: string
}

export type TaskStatus = 'need_test' | 'cases_generated' | 'in_progress' | 'closed'
export type CaseStatus = 'draft' | 'ready' | 'mapped' | 'passed' | 'failed'

export interface AutomationTask {
  id: string
  cr_id: string
  brs_id: string | null
  status: TaskStatus
  closed_by: string | null
  closed_at: string | null
  created_at: string
  updated_at: string
  request_code: string
  cr_title: string
  cr_priority?: string
  project_code: string | null
  project_name: string | null
  brs_version: number | null
  brs_status: BrsStatus | null
  case_count?: number
  mapped_count?: number
  run_count?: number
}

export interface AutomationCase {
  id: string
  task_id: string
  code: string
  title: string
  precondition: string
  steps: string
  expected: string
  priority: 'critical' | 'high' | 'medium' | 'low'
  studio_tc_id: string | null
  status: CaseStatus
  sort_order: number
  created_at: string
  updated_at: string
}

export interface AutomationRun {
  id: string
  task_id?: string
  run_ref: string | null
  summary: Record<string, unknown>
  report_content?: string
  report_length?: number
  created_by: string | null
  created_at: string
}

// ── Settings & skills ────────────────────────────────────────────────────────
export const getAiSettings = () => req<{ data: AiSettings }>('GET', '/settings/ai')
export const updateAiSettings = (body: {
  anthropic_api_key?: string
  anthropic_model?: string
  anthropic_max_tokens?: number
}) => req<{ data: AiSettings }>('PUT', '/settings/ai', body)
export const testAiKey = () => req<{ data: { ok: boolean; model: string } }>('POST', '/settings/ai/test')

export const getAiSkills = () => req<{ data: AiSkill[] }>('GET', '/ai-skills')
export const getAiSkill = (id: string) => req<{ data: AiSkill }>('GET', `/ai-skills/${id}`)
export const createAiSkill = (body: { code: string; name: string; description: string; content: string }) =>
  req<{ data: AiSkill }>('POST', '/ai-skills', body)
export const updateAiSkill = (id: string, body: { name?: string; description?: string; content?: string }) =>
  req<{ data: AiSkill }>('PUT', `/ai-skills/${id}`, body)
export const deleteAiSkill = (id: string) => req<void>('DELETE', `/ai-skills/${id}`)

// ── BRS ──────────────────────────────────────────────────────────────────────
export const getBrsOfCr = (crId: string) =>
  req<{ data: BrsDocument | null }>('GET', `/requests/change-requests/${crId}/brs`)
export const generateBrs = (crId: string, body: { skill_code?: string; note?: string } = {}) =>
  req<{ data: BrsDocument }>('POST', `/requests/change-requests/${crId}/brs/generate`, body)
export const reviseBrs = (brsId: string, instruction: string) =>
  req<{ data: BrsDocument }>('POST', `/brs/${brsId}/revise`, { instruction })
export const updateBrs = (brsId: string, body: { title?: string; content?: string }) =>
  req<{ data: BrsDocument }>('PUT', `/brs/${brsId}`, body)
export const changeBrsStatus = (brsId: string, action: string, note = '') =>
  req<{ data: BrsDocument; meta: { automation_task_created: boolean } }>(
    'POST', `/brs/${brsId}/status`, { action, note },
  )
export const getBrsHistory = (brsId: string) =>
  req<{ data: BrsHistoryItem[] }>('GET', `/brs/${brsId}/history`)
export const getBrsHistoryContent = (brsId: string, historyId: string) =>
  req<{ data: BrsHistoryItem & { content: string } }>('GET', `/brs/${brsId}/history/${historyId}`)
export const listBrs = (params?: { status?: string; project_id?: string }) => {
  const qs = new URLSearchParams()
  if (params?.status) qs.set('status', params.status)
  if (params?.project_id) qs.set('project_id', params.project_id)
  const q = qs.toString()
  return req<{ data: (BrsDocument & { request_code: string; cr_title: string })[] }>(
    'GET', `/brs${q ? `?${q}` : ''}`,
  )
}

// ── Master Doc ───────────────────────────────────────────────────────────────
export const getMasterDocs = (productId?: string) =>
  req<{ data: MasterDoc[] }>('GET', `/master-docs${productId ? `?product_id=${productId}` : ''}`)
export const getMasterDoc = (id: string) => req<{ data: MasterDoc }>('GET', `/master-docs/${id}`)
export const createMasterDoc = (body: { product_id: string; title: string; content: string }) =>
  req<{ data: MasterDoc }>('POST', '/master-docs', body)
export const updateMasterDoc = (id: string, body: { title?: string; content?: string; change_summary?: string }) =>
  req<{ data: MasterDoc }>('PUT', `/master-docs/${id}`, body)
export const getMasterDocVersions = (id: string) =>
  req<{ data: MasterDocVersion[] }>('GET', `/master-docs/${id}/versions`)
export const getMasterDocVersion = (versionId: string) =>
  req<{ data: MasterDocVersion & { content: string; crs: MasterDocVersionCr[] } }>(
    'GET', `/master-docs/versions/${versionId}`,
  )
export const mergeBrsIntoMasterDoc = (brsId: string, note = '') =>
  req<{ data: { version_id: string; master_doc_id: string; change_summary: string }; diff: DiffResult }>(
    'POST', `/brs/${brsId}/merge-master-doc`, { note },
  )
export const approveMasterDocVersion = (versionId: string) =>
  req<{ data: MasterDoc; meta: { version: string } }>('POST', `/master-docs/versions/${versionId}/approve`)
export const rejectMasterDocVersion = (versionId: string, reason: string) =>
  req<{ data: MasterDocVersion }>('POST', `/master-docs/versions/${versionId}/reject`, { reason })
export const diffMasterDoc = (docId: string, fromVid?: string, toVid?: string) => {
  const qs = new URLSearchParams()
  if (fromVid) qs.set('from_vid', fromVid)
  if (toVid) qs.set('to_vid', toVid)
  const q = qs.toString()
  return req<{ data: DiffResult }>('GET', `/master-docs/${docId}/diff${q ? `?${q}` : ''}`)
}
export const diffVersionAgainstBase = (versionId: string) =>
  req<{ data: DiffResult }>('GET', `/master-docs/versions/${versionId}/diff-base`)
export const getCrMasterDocImpact = (crId: string) =>
  req<{ data: MasterDocImpact[] }>('GET', `/requests/change-requests/${crId}/master-doc-impact`)

// ── Automation Test ──────────────────────────────────────────────────────────
export const getAutomationTasks = (params?: { status?: string; project_id?: string }) => {
  const qs = new URLSearchParams()
  if (params?.status) qs.set('status', params.status)
  if (params?.project_id) qs.set('project_id', params.project_id)
  const q = qs.toString()
  return req<{ data: AutomationTask[] }>('GET', `/automation/tasks${q ? `?${q}` : ''}`)
}
export const getAutomationTask = (id: string) =>
  req<{ data: AutomationTask; cases: AutomationCase[]; runs: AutomationRun[] }>(
    'GET', `/automation/tasks/${id}`,
  )
export const generateTestCases = (taskId: string, note = '') =>
  req<{ data: AutomationCase[]; meta: { created: number; kept: number } }>(
    'POST', `/automation/tasks/${taskId}/generate-cases`, { note },
  )
export const createTestCase = (taskId: string, body: Partial<AutomationCase> & { code: string; title: string }) =>
  req<{ data: AutomationCase }>('POST', `/automation/tasks/${taskId}/cases`, body)
export const updateTestCase = (caseId: string, body: Partial<AutomationCase>) =>
  req<{ data: AutomationCase }>('PUT', `/automation/cases/${caseId}`, body)
export const deleteTestCase = (caseId: string) => req<void>('DELETE', `/automation/cases/${caseId}`)
export const importTestRun = (taskId: string, body: { run_ref?: string; summary: Record<string, unknown> }) =>
  req<{ data: AutomationRun; meta: { cases_updated: number } }>(
    'POST', `/automation/tasks/${taskId}/runs`, body,
  )
export const generateTestReport = (runId: string) =>
  req<{ data: AutomationRun }>('POST', `/automation/runs/${runId}/generate-report`, {})
export const getTestRun = (runId: string) => req<{ data: AutomationRun }>('GET', `/automation/runs/${runId}`)
export const closeAutomationTask = (taskId: string) =>
  req<{ data: AutomationTask }>('POST', `/automation/tasks/${taskId}/close`, {})

export function exportAutomationTaskUrl(taskId: string): string {
  return `${BASE}/automation/tasks/${taskId}/export`
}

export async function downloadAutomationExport(taskId: string, fileName: string): Promise<void> {
  const token = sessionStorage.getItem('access_token')
  const res = await fetch(exportAutomationTaskUrl(taskId), {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  })
  if (!res.ok) throw new Error('Không tải được file export')
  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName
  a.click()
  URL.revokeObjectURL(url)
}
