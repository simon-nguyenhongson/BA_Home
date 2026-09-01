/**
 * Diagram API client — /diagrams
 *
 * Diagram thuộc về Project | Product | BRS (QĐ-9). Nội dung `content` là một file
 * HTML+SVG tự chứa do AI vẽ (skill diagram-design, MIT) hoặc mã Mermaid khi nhập trực tiếp.
 */

import { apiRequest } from '../lib/http'

const BASE = '/api/ppg'

const req = <T,>(method: string, path: string, body?: unknown) =>
  apiRequest<T>(BASE, method, path, body)

// ── Types ─────────────────────────────────────────────────────────────────────

export type DiagramOwnerType = 'project' | 'product' | 'brs'
export type DiagramFormat    = 'html' | 'mermaid' | 'drawio' | 'image'
export type DiagramSource    = 'ai' | 'ai_import' | 'manual' | 'upload'
export type DiagramStatus    = 'draft' | 'approved' | 'archived'

export interface DiagramType {
  code:  string
  label: string
  hint:  string
}

export interface Diagram {
  id:                 string
  owner_type:         DiagramOwnerType
  owner_id:           string
  diagram_type:       string
  diagram_type_label: string
  name:               string
  description:        string
  format:             DiagramFormat
  storage_path:       string | null
  source:             DiagramSource
  source_format:      string | null
  version:            number
  status:             DiagramStatus
  created_by:         string | null
  updated_by:         string | null
  created_at:         string | null
  updated_at:         string | null
  /** Chỉ có ở endpoint chi tiết — danh sách không trả content để không kéo hàng trăm KB */
  content?:           string
  source_ref?:        string | null
  /** Những thành phần đã bị gỡ khỏi HTML do AI sinh (link font, script…) */
  sanitized?:         string[]
}

export interface DiagramVersion {
  id:             string
  version:        number
  change_summary: string
  source:         string
  created_by:     string | null
  created_at:     string | null
}

export interface SkillCheck {
  ok:        boolean
  skill_dir: string
  types:     number
  missing:   string[]
}

// ── API ───────────────────────────────────────────────────────────────────────

export const diagramApi = {
  types: () => req<{ data: DiagramType[] }>('GET', '/diagrams/types').then(r => r.data),

  skillCheck: () => req<SkillCheck>('GET', '/diagrams/skill-check'),

  list: (params: {
    owner_type?:   DiagramOwnerType
    owner_id?:     string
    diagram_type?: string
    status?:       DiagramStatus
  } = {}) => {
    const qs = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v) as [string, string][],
    ).toString()
    return req<{ data: Diagram[] }>('GET', `/diagrams${qs ? `?${qs}` : ''}`).then(r => r.data)
  },

  get: (id: string) => req<{ data: Diagram }>('GET', `/diagrams/${id}`).then(r => r.data),

  versions: (id: string) =>
    req<{ data: DiagramVersion[] }>('GET', `/diagrams/${id}/versions`).then(r => r.data),

  versionContent: (id: string, version: number) =>
    req<{ data: { version: number; content: string; change_summary: string } }>(
      'GET', `/diagrams/${id}/versions/${version}`,
    ).then(r => r.data),

  create: (body: {
    owner_type:   DiagramOwnerType
    owner_id:     string
    diagram_type: string
    name:         string
    description?: string
    format?:      DiagramFormat
    content?:     string
  }) => req<{ data: Diagram }>('POST', '/diagrams', body).then(r => r.data),

  update: (id: string, body: {
    name?:           string
    description?:    string
    content?:        string
    status?:         DiagramStatus
    change_summary?: string
  }) => req<{ data: Diagram }>('PUT', `/diagrams/${id}`, body).then(r => r.data),

  remove: (id: string) => req<void>('DELETE', `/diagrams/${id}`),

  /** [Vẽ bằng AI] — sinh diagram mới từ mô tả của BA + bối cảnh trong hệ thống */
  generate: (body: {
    owner_type:       DiagramOwnerType
    owner_id:         string
    diagram_type:     string
    name:             string
    brief?:           string
    include_context?: boolean
  }) => req<{ data: Diagram }>('POST', '/diagrams/generate', body).then(r => r.data),

  /** [Sửa bằng AI] — chỉnh diagram hiện có theo yêu cầu bằng lời, tăng version */
  regenerate: (id: string, instruction: string) =>
    req<{ data: Diagram }>('POST', `/diagrams/${id}/regenerate`, { instruction })
      .then(r => r.data),

  /** Nhập từ Mermaid / draw.io. redraw=true thì AI vẽ lại theo Design System */
  importSource: (body: {
    owner_type:    DiagramOwnerType
    owner_id:      string
    diagram_type:  string
    name:          string
    source_format: 'mermaid' | 'drawio'
    source_text:   string
    redraw?:       boolean
  }) => req<{ data: Diagram }>('POST', '/diagrams/import', body).then(r => r.data),
}
