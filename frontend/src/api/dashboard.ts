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
