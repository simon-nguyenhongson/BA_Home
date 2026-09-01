/**
 * Dashboard API client — /api/ppg/dashboard
 */

import { apiRequest } from '../lib/http'

const BASE = '/api/ppg'

const request = <T,>(path: string) => apiRequest<T>(BASE, 'GET', path)

// ── Types ──────────────────────────────────────────────────────────────────

export interface KpiData {
  total_projects: number
  active_projects: number
  completed_projects: number
  total_products: number
  products_with_master_doc: number
  total_crs: number
  open_crs: number
  /** CR nội bộ (sửa tay Master Doc) — tách riêng, không nằm trong total_crs */
  internal_crs: number
  open_test_tasks: number
}

export interface CountItem {
  count: number
}

export interface StatusDistItem extends CountItem { status: string }
export interface ProductDistItem extends CountItem { product_type: string }

export interface DashboardSummary {
  kpi: KpiData
  status_dist: StatusDistItem[]
  product_dist: ProductDistItem[]
  cr_dist: StatusDistItem[]
  brs_dist: StatusDistItem[]
  test_dist: StatusDistItem[]
}

export interface DashboardProduct {
  id: string
  product_code: string
  product_name: string
  product_type: string
  status: string
  domain_code: string | null
  domain_label: string | null
  master_doc_version: string | null
  master_doc_updated_at: string | null
  has_master_doc: boolean
  cr_count: number
  open_cr_count: number
}

export interface DashboardProject {
  id: string
  code: string
  name: string
  status: string
  owner: string | null
  start_date: string | null
  end_date: string | null
  domain_code: string | null
  domain_label: string | null
  created_at: string | null
  member_count: number
}

export interface MemberItem {
  name: string
  role: string | null
  email: string | null
}

export interface ProjectHeadcount {
  project_id: string
  code: string
  project_name: string
  project_status: string
  domain_code: string | null
  domain_label: string | null
  headcount: number
  members: MemberItem[]
}

export interface ResourceData {
  project_headcount: ProjectHeadcount[]
}

// ── API calls ──────────────────────────────────────────────────────────────

export const getDashboardSummary = () =>
  request<DashboardSummary>('/dashboard/summary')

export const getDashboardProjects = () =>
  request<DashboardProject[]>('/dashboard/projects')



export const getDashboardProducts = () =>
  request<DashboardProduct[]>('/dashboard/products')

export const getDashboardResources = () =>
  request<ResourceData>('/dashboard/resources')

// ── Báo cáo theo kỳ (QĐ-11) ────────────────────────────────────────────────
// Tổng hợp CR › Product › Project trong khoảng từ ngày – đến ngày.

export interface PeriodCr {
  cr_id:           string
  request_code:    string
  title:           string
  status:          string
  priority:        string
  change_type:     string
  cr_kind:         'standard' | 'internal'
  created_at:      string | null
  brs_status:      string | null
  test_status:     string | null
  test_case_count: number
  project_id:      string | null
  project_code:    string | null
  project_name:    string | null
}

export interface PeriodProductProject {
  project_id:   string | null
  project_code: string | null
  project_name: string
  cr_count:     number
}

export interface PeriodProduct {
  product_id:   string
  product_code: string | null
  product_name: string | null
  product_type: string | null
  domain_code:  string | null
  crs:          PeriodCr[]
  projects:     PeriodProductProject[]
  master_doc:   { approved_versions: number; last_approved_at: string | null } | null
}

export interface PeriodProject {
  id:                string
  code:              string
  name:              string
  status:            string
  domain_code:       string | null
  start_date:        string | null
  end_date:          string | null
  started_in_period: boolean
  ended_in_period:   boolean
  cr_count:          number
}

export interface PeriodReport {
  range: { from_date: string; to_date: string; domain: string | null }
  kpi: {
    total_crs:          number
    internal_crs:       number
    crs_with_brs:       number
    brs_golive:         number
    crs_with_test:      number
    products_touched:   number
    master_doc_updates: number
    projects_in_period: number
    crs_unassigned:     number
  }
  products:   PeriodProduct[]
  unassigned: PeriodCr[]
  projects:   PeriodProject[]
}

export const getPeriodReport = (params: { from_date?: string; to_date?: string; domain?: string }) => {
  const qs = new URLSearchParams()
  if (params.from_date) qs.set('from_date', params.from_date)
  if (params.to_date)   qs.set('to_date', params.to_date)
  if (params.domain)    qs.set('domain', params.domain)
  const q = qs.toString()
  return request<PeriodReport>(`/dashboard/period-report${q ? `?${q}` : ''}`)
}
