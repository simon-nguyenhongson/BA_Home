/**
 * Request Management API client
 * /requests/change-requests  — change_requests (CR)
 * /requests/service           — service_requests (SR)
 */

import { apiRequest } from '../lib/http'

const BASE = '/api/ppg'

const req = <T,>(method: string, path: string, body?: unknown) =>
  apiRequest<T>(BASE, method, path, body)

// ── Types ─────────────────────────────────────────────────────────────────────

export type CRChangeType = 'scope' | 'timeline' | 'resource' | 'budget' | 'technical' | 'process' | 'other'
export type CRStatus     = 'submitted' | 'reviewing' | 'approved' | 'rejected' | 'implementing' | 'implemented' | 'cancelled'
export type SRRequestType = 'bug_fix' | 'enhancement' | 'support' | 'incident' | 'access_request' | 'data_request' | 'other'
export type SRStatus      = 'submitted' | 'reviewing' | 'approved' | 'in_progress' | 'resolved' | 'rejected' | 'cancelled'
export type Priority      = 'critical' | 'high' | 'medium' | 'low'
export type Severity      = 'critical' | 'high' | 'medium' | 'low'
export type Environment   = 'DEV' | 'SIT' | 'UAT' | 'PROD' | 'DR' | 'STAGING'

export type CRKind = 'standard' | 'internal'

export interface ChangeRequest {
  id:            string
  request_code:  string
  /** QUYỀN SỞ HỮU — sản phẩm mà CR thay đổi (V052: bắt buộc với CR tạo mới) */
  product_id?:   string
  product_name?: string
  product_code?: string
  /** QUY KẾT NGUỒN — dự án tài trợ, tùy chọn; trống với CR phát sinh sau khi dự án đóng */
  project_id?:   string
  project_name?: string
  project_code?: string
  /** standard = CR nghiệp vụ (qua BRS + test) · internal = CR nội bộ sửa tay Master Doc */
  cr_kind?:      CRKind
  title:         string
  description?:  string
  change_type:   CRChangeType
  priority:      Priority
  status:        CRStatus
  impact_scope?:  string
  impact_effort?: string
  requested_by:  string
  assigned_to?:  string
  target_date?:  string
  approved_by?:  string
  approved_at?:  string
  notes?:        string
  created_at:    string
  updated_at:    string
}

export interface ServiceRequest {
  id:               string
  request_code:     string
  product_id?:      string
  product_name?:    string
  product_type?:    string
  title:            string
  description?:     string
  request_type:     SRRequestType
  priority:         Priority
  severity?:        Severity
  environment?:     Environment
  status:           SRStatus
  sla_deadline?:    string
  requested_by:     string
  assigned_to?:     string
  resolution_notes?: string
  resolved_at?:     string
  created_at:       string
  updated_at:       string
}

export interface CRCreate {
  /** Bắt buộc — sản phẩm mà CR thay đổi (quyền sở hữu) */
  product_id:    string
  /** Tùy chọn — dự án tài trợ (quy kết nguồn, phục vụ báo cáo theo kỳ) */
  project_id?:   string
  cr_kind?:      CRKind
  title:         string
  description?:  string
  change_type?:  CRChangeType
  priority?:     Priority
  impact_scope?: string
  impact_effort?: string
  requested_by:  string
  assigned_to?:  string
  target_date?:  string
  notes?:        string
}

export interface SRCreate {
  product_id?:   string
  title:         string
  description?:  string
  request_type?: SRRequestType
  priority?:     Priority
  severity?:     Severity
  environment?:  Environment
  requested_by:  string
  assigned_to?:  string
  sla_deadline?: string
}

export interface RequestAttachment {
  id:          string
  ref_type:    'cr' | 'sr'
  ref_id:      string
  filename:    string
  file_size:   number | null
  mime_type:   string | null
  uploaded_by: string
  created_at:  string
}

async function downloadBlob(path: string, filename: string): Promise<void> {
  const token = sessionStorage.getItem('access_token')
  const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {}
  const res = await fetch(`${BASE}${path}`, { headers })
  if (res.status === 401) { sessionStorage.removeItem('access_token'); window.location.href = '/login' }
  if (!res.ok) throw new Error('Export thất bại')
  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

async function uploadAttachmentFetch(path: string, file: File): Promise<RequestAttachment> {
  const fd = new FormData()
  fd.append('file', file)
  const token = sessionStorage.getItem('access_token')
  const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {}
  const res = await fetch(`${BASE}${path}`, { method: 'POST', headers, body: fd })
  if (res.status === 401) { sessionStorage.removeItem('access_token'); window.location.href = '/login' }
  if (!res.ok) {
    const err = await res.json().catch(() => ({ detail: res.statusText }))
    throw new Error(err.detail || 'Upload thất bại')
  }
  return res.json()
}

const PREVIEW_EXTS = new Set(['pdf', 'png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp', 'svg', 'html', 'htm', 'doc', 'docx'])

export async function downloadRequestAttachment(attId: string, filename: string): Promise<void> {
  const ext = filename.split('.').pop()?.toLowerCase() ?? ''
  const token = sessionStorage.getItem('access_token')
  const headers: HeadersInit = token ? { Authorization: `Bearer ${token}` } : {}
  const res = await fetch(`${BASE}/requests/attachments/${attId}/download`, { headers })
  if (res.status === 401) { sessionStorage.removeItem('access_token'); window.location.href = '/login' }
  if (!res.ok) throw new Error('Tải file thất bại')
  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  if (PREVIEW_EXTS.has(ext)) {
    window.open(url, '_blank')
    setTimeout(() => URL.revokeObjectURL(url), 60000)
  } else {
    const a = document.createElement('a')
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click(); document.body.removeChild(a)
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }
}

export interface RequestHistoryEntry {
  id:          string
  ref_type:    'cr' | 'sr'
  ref_id:      string
  action:      string
  actor:       string
  from_status: string | null
  to_status:   string | null
  comment:     string | null
  created_at:  string
}

// ── CR endpoints ─────────────────────────────────────────────────────────────

export const crApi = {
  list: (params?: {
    product_id?: string; project_id?: string
    status?: string; priority?: string; change_type?: string
  }) => {
    const qs = new URLSearchParams()
    if (params?.product_id)  qs.set('product_id',  params.product_id)
    if (params?.project_id)  qs.set('project_id',  params.project_id)
    if (params?.status)      qs.set('status',       params.status)
    if (params?.priority)    qs.set('priority',     params.priority)
    if (params?.change_type) qs.set('change_type',  params.change_type)
    const q = qs.toString()
    return req<ChangeRequest[]>('GET', `/requests/change-requests${q ? '?' + q : ''}`)
  },
  get:    (id: string) => req<ChangeRequest>('GET', `/requests/change-requests/${id}`),
  create: (body: CRCreate) => req<ChangeRequest>('POST', '/requests/change-requests', body),
  update: (id: string, body: Partial<CRCreate & { status: CRStatus; approved_by: string; comment: string }>) =>
    req<{ ok: boolean }>('PATCH', `/requests/change-requests/${id}`, body),
  delete: (id: string) => req<void>('DELETE', `/requests/change-requests/${id}`),
  history:           (id: string) => req<RequestHistoryEntry[]>('GET', `/requests/change-requests/${id}/history`),
  listAttachments:   (id: string) => req<RequestAttachment[]>('GET', `/requests/change-requests/${id}/attachments`),
  uploadAttachment:  (id: string, file: File) => uploadAttachmentFetch(`/requests/change-requests/${id}/attachments`, file),
  export: (params?: { project_id?: string; status?: string; priority?: string; change_type?: string }) => {
    const qs = new URLSearchParams()
    if (params?.project_id)  qs.set('project_id',  params.project_id)
    if (params?.status)      qs.set('status',       params.status)
    if (params?.priority)    qs.set('priority',     params.priority)
    if (params?.change_type) qs.set('change_type',  params.change_type)
    const q = qs.toString()
    return downloadBlob(`/requests/change-requests/export${q ? '?' + q : ''}`, 'cr_export.xlsx')
  },
}

// ── SR endpoints ──────────────────────────────────────────────────────────────

export const srApi = {
  list: (params?: { product_id?: string; status?: string; priority?: string; request_type?: string; environment?: string }) => {
    const qs = new URLSearchParams()
    if (params?.product_id)   qs.set('product_id',   params.product_id)
    if (params?.status)       qs.set('status',        params.status)
    if (params?.priority)     qs.set('priority',      params.priority)
    if (params?.request_type) qs.set('request_type',  params.request_type)
    if (params?.environment)  qs.set('environment',   params.environment)
    const q = qs.toString()
    return req<ServiceRequest[]>('GET', `/requests/service${q ? '?' + q : ''}`)
  },
  get:    (id: string) => req<ServiceRequest>('GET', `/requests/service/${id}`),
  create: (body: SRCreate) => req<ServiceRequest>('POST', '/requests/service', body),
  update: (id: string, body: Partial<SRCreate & { status: SRStatus; resolution_notes: string; comment: string }>) =>
    req<{ ok: boolean }>('PATCH', `/requests/service/${id}`, body),
  delete: (id: string) => req<void>('DELETE', `/requests/service/${id}`),
  history:           (id: string) => req<RequestHistoryEntry[]>('GET', `/requests/service/${id}/history`),
  listAttachments:   (id: string) => req<RequestAttachment[]>('GET', `/requests/service/${id}/attachments`),
  uploadAttachment:  (id: string, file: File) => uploadAttachmentFetch(`/requests/service/${id}/attachments`, file),
  export: (params?: { product_id?: string; status?: string; priority?: string; request_type?: string; environment?: string }) => {
    const qs = new URLSearchParams()
    if (params?.product_id)   qs.set('product_id',   params.product_id)
    if (params?.status)       qs.set('status',        params.status)
    if (params?.priority)     qs.set('priority',      params.priority)
    if (params?.request_type) qs.set('request_type',  params.request_type)
    if (params?.environment)  qs.set('environment',   params.environment)
    const q = qs.toString()
    return downloadBlob(`/requests/service/export${q ? '?' + q : ''}`, 'sr_export.xlsx')
  },
}
