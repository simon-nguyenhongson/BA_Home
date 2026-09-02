/**
 * PeriodReportTab — báo cáo công việc đã làm theo khoảng thời gian (QĐ-11).
 *
 * Yêu cầu PO 2026-09-01: "Dashboard cần sửa lại để có thể report theo from to thời gian.
 * tổng hợp theo CR > Product > project."
 *
 * Trục tổng hợp: CR là đơn vị công việc → gom theo Product (chủ sở hữu) → trong mỗi Product
 * tách theo Project tài trợ. CR chưa gắn sản phẩm được hiện riêng, KHÔNG ẩn — vì đó là
 * dữ liệu cần xử lý, không phải dữ liệu bỏ đi.
 */

import React, { useCallback, useEffect, useState } from 'react'
import { Calendar, Package, Building2, Download, RefreshCw, AlertCircle } from 'lucide-react'
import { Btn, AppInput, AppSelect, EmptyState, Badge } from '../../components/ui'
import { getPeriodReport, type PeriodReport, type PeriodCr } from '../../api/dashboard'
import { getProjectDomains, type ProjectDomain } from '../../api/ppg'
import { CR_STATUS_LABELS } from '../../features/cr/constants'
import { useStore } from '../../stores/auth'

const BRS_LABEL: Record<string, string> = {
  draft: 'Nháp', in_review: 'Đang review', approved: 'Đã duyệt', golive: 'Đã golive',
}
const TEST_LABEL: Record<string, string> = {
  need_test: 'Cần test', cases_generated: 'Đã sinh case',
  in_progress: 'Đang chạy', closed: 'Đã đóng',
}

/** Mốc nhanh — quý và năm hiện tại tính theo ngày hệ thống, không hardcode */
function presets(): { label: string; from: string; to: string }[] {
  const now = new Date()
  const y = now.getFullYear()
  const q = Math.floor(now.getMonth() / 3)
  const iso = (d: Date) => d.toISOString().slice(0, 10)
  return [
    { label: 'Tháng này',  from: iso(new Date(y, now.getMonth(), 1)), to: iso(new Date(y, now.getMonth() + 1, 0)) },
    { label: 'Quý này',    from: iso(new Date(y, q * 3, 1)),          to: iso(new Date(y, q * 3 + 3, 0)) },
    { label: `Năm ${y}`,   from: `${y}-01-01`,                        to: `${y}-12-31` },
    { label: `Năm ${y - 1}`, from: `${y - 1}-01-01`,                  to: `${y - 1}-12-31` },
  ]
}

export function PeriodReportTab() {
  const { addToast } = useStore()
  const P = presets()

  const [fromDate, setFromDate] = useState(P[2].from)
  const [toDate,   setToDate]   = useState(P[2].to)
  const [domain,   setDomain]   = useState('')
  const [domains,  setDomains]  = useState<ProjectDomain[]>([])
  const [data,     setData]     = useState<PeriodReport | null>(null)
  const [loading,  setLoading]  = useState(false)

  useEffect(() => { getProjectDomains().then(setDomains).catch(() => { /* LOV không chặn báo cáo */ }) }, [])

  const load = useCallback(async () => {
    setLoading(true)
    try {
      setData(await getPeriodReport({ from_date: fromDate, to_date: toDate, domain: domain || undefined }))
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setLoading(false)
    }
  }, [fromDate, toDate, domain, addToast])

  useEffect(() => { void load() }, [load])

  function exportCsv() {
    if (!data) return
    const rows: string[][] = [[
      'Sản phẩm', 'Mã sản phẩm', 'Domain', 'Mã CR', 'Tiêu đề CR', 'Loại CR',
      'Trạng thái CR', 'BRS', 'Test', 'Số test case', 'Dự án tài trợ', 'Ngày tạo',
    ]]
    const push = (productName: string, productCode: string, dom: string, cr: PeriodCr) => {
      rows.push([
        productName, productCode, dom, cr.request_code, cr.title,
        cr.cr_kind === 'internal' ? 'Nội bộ' : 'Nghiệp vụ',
        CR_STATUS_LABELS[cr.status as keyof typeof CR_STATUS_LABELS] ?? cr.status,
        cr.brs_status ? (BRS_LABEL[cr.brs_status] ?? cr.brs_status) : '',
        cr.test_status ? (TEST_LABEL[cr.test_status] ?? cr.test_status) : '',
        String(cr.test_case_count),
        cr.project_code ?? '', (cr.created_at ?? '').slice(0, 10),
      ])
    }
    data.products.forEach(p =>
      p.crs.forEach(cr => push(p.product_name ?? '', p.product_code ?? '', p.domain_code ?? '', cr)))
    data.unassigned.forEach(cr => push('(chưa gắn sản phẩm)', '', '', cr))

    // BOM (U+FEFF) để Excel trên Windows đọc đúng dấu tiếng Việt
    const csv = '﻿' + rows
      .map(r => r.map(c => `"${(c ?? '').replace(/"/g, '""')}"`).join(','))
      .join('\r\n')
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }))
    const a = document.createElement('a')
    a.href = url
    a.download = `bao-cao-${fromDate}_${toDate}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div>
      {/* Thanh chọn kỳ */}
      <div style={{
        display: 'flex', gap: 8, alignItems: 'flex-end', flexWrap: 'wrap', marginBottom: 16,
        padding: 12, border: '1px solid var(--app-neutral-200)', borderRadius: 12,
        background: 'var(--app-neutral-50)',
      }}>
        <div>
          <label style={{ display: 'block', fontSize: 12, color: 'var(--app-neutral-500)', marginBottom: 4 }}>
            Từ ngày
          </label>
          <AppInput type="date" value={fromDate} onChange={e => setFromDate(e.target.value)} style={{ width: 150 }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: 12, color: 'var(--app-neutral-500)', marginBottom: 4 }}>
            Đến ngày
          </label>
          <AppInput type="date" value={toDate} onChange={e => setToDate(e.target.value)} style={{ width: 150 }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: 12, color: 'var(--app-neutral-500)', marginBottom: 4 }}>
            Domain
          </label>
          <AppSelect value={domain} onChange={e => setDomain(e.target.value)} style={{ width: 170 }}>
            <option value="">Tất cả domain</option>
            {domains.map(d => <option key={d.code} value={d.code}>{d.code} — {d.name}</option>)}
          </AppSelect>
        </div>
        <div style={{ display: 'flex', gap: 4, alignItems: 'center', paddingBottom: 1 }}>
          {P.map(p => (
            <button key={p.label} onClick={() => { setFromDate(p.from); setToDate(p.to) }}
              style={{
                height: 32, padding: '0 10px', borderRadius: 8, cursor: 'pointer',
                border: '1px solid var(--app-neutral-200)', background: 'var(--app-white)',
                fontFamily: 'var(--font)', fontSize: 12, color: 'var(--app-neutral-700)',
              }}>
              {p.label}
            </button>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <Btn size="sm" variant="ghost" onClick={load} title="Tải lại"><RefreshCw size={14} strokeWidth={1.5} /></Btn>
        <Btn size="sm" variant="secondary" onClick={exportCsv} disabled={!data}>
          <Download size={14} strokeWidth={1.5} /> Xuất CSV
        </Btn>
      </div>

      {loading && (
        <div style={{ padding: 32, textAlign: 'center', color: 'var(--app-neutral-400)', fontSize: 14 }}>
          Đang tổng hợp…
        </div>
      )}

      {!loading && data && (
        <>
          {/* KPI */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: 10, marginBottom: 18,
          }}>
            {[
              { label: 'CR trong kỳ',        value: data.kpi.total_crs },
              { label: 'CR nội bộ',          value: data.kpi.internal_crs },
              { label: 'CR đã có BRS',       value: data.kpi.crs_with_brs },
              { label: 'BRS đã golive',      value: data.kpi.brs_golive },
              { label: 'CR đã có việc test', value: data.kpi.crs_with_test },
              { label: 'Sản phẩm chịu tác động', value: data.kpi.products_touched },
              { label: 'Lần cập nhật Master Doc', value: data.kpi.master_doc_updates },
              { label: 'Dự án có mốc trong kỳ',   value: data.kpi.projects_in_period },
            ].map(k => (
              <div key={k.label} style={{
                border: '1px solid var(--app-neutral-200)', borderRadius: 12, padding: '10px 12px',
              }}>
                <div style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>{k.label}</div>
                <div style={{ fontSize: 22, fontWeight: 600, color: 'var(--app-neutral-900)', marginTop: 2 }}>
                  {k.value}
                </div>
              </div>
            ))}
          </div>

          {data.kpi.crs_unassigned > 0 && (
            <div className="state-banner state-banner-warn" style={{ fontSize: 13, marginBottom: 16 }}>
              <AlertCircle size={14} strokeWidth={1.5} style={{ marginRight: 6, verticalAlign: -2 }} />
              {data.kpi.crs_unassigned} CR chưa gắn sản phẩm — không vào được báo cáo theo sản phẩm.
              Mở CR ở màn Requests và chọn sản phẩm để đưa vào báo cáo.
            </div>
          )}

          {/* CR › Product › Project */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600,
            color: 'var(--app-neutral-800)', marginBottom: 10,
          }}>
            <Package size={15} strokeWidth={1.5} /> Theo sản phẩm ({data.products.length})
          </div>

          {data.products.length === 0 ? (
            <EmptyState title="Không có sản phẩm nào chịu tác động trong kỳ"
              desc="Chưa có CR nào gắn sản phẩm, và chưa có Master Doc nào được cập nhật trong khoảng thời gian này." />
          ) : data.products.map(p => (
            <div key={p.product_id} style={{
              border: '1px solid var(--app-neutral-200)', borderRadius: 12,
              marginBottom: 12, overflow: 'hidden',
            }}>
              <div style={{
                padding: '10px 12px', background: 'var(--app-neutral-50)',
                borderBottom: '1px solid var(--app-neutral-200)',
                display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap',
              }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--app-neutral-900)' }}>
                  {p.product_code} — {p.product_name}
                </span>
                <span style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>
                  {p.product_type}{p.domain_code ? ` · ${p.domain_code}` : ''}
                </span>
                <div style={{ flex: 1 }} />
                <Badge variant="neutral">{p.crs.length} CR</Badge>
                {p.master_doc && (
                  <Badge variant="success">
                    Master Doc: {p.master_doc.approved_versions} bản duyệt
                  </Badge>
                )}
              </div>

              {p.projects.length > 0 && (
                <div style={{
                  padding: '8px 12px', display: 'flex', gap: 8, flexWrap: 'wrap',
                  borderBottom: '1px solid var(--app-neutral-100)', fontSize: 12,
                }}>
                  <span style={{
                    color: 'var(--app-neutral-500)', display: 'inline-flex', alignItems: 'center', gap: 4,
                  }}>
                    <Building2 size={12} strokeWidth={1.5} /> Dự án tài trợ:
                  </span>
                  {p.projects.map(pr => (
                    <span key={pr.project_id ?? 'none'} style={{
                      background: 'var(--ds-border-subtle)', color: 'var(--app-neutral-700)',
                      padding: '1px 8px', borderRadius: 16,
                    }}>
                      {pr.project_code ?? pr.project_name} · {pr.cr_count} CR
                    </span>
                  ))}
                </div>
              )}

              {p.crs.length > 0 && (
                <div style={{ overflowX: 'auto' }}>
                  <table className="ds-table" style={{ fontSize: 12 }}>
                    <thead>
                      <tr>{['Mã CR', 'Tiêu đề', 'Loại', 'Trạng thái', 'BRS', 'Test', 'Dự án', 'Ngày tạo'].map(h =>
                        <th key={h}>{h}</th>)}</tr>
                    </thead>
                    <tbody>
                      {p.crs.map(cr => <CrRow key={cr.cr_id} cr={cr} />)}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}

          {/* CR chưa gắn sản phẩm */}
          {data.unassigned.length > 0 && (
            <>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600,
                color: 'var(--app-warning)', margin: '18px 0 10px',
              }}>
                <AlertCircle size={15} strokeWidth={1.5} /> CR chưa gắn sản phẩm ({data.unassigned.length})
              </div>
              <div style={{ border: '1px solid var(--app-warning-bg)', borderRadius: 12, overflowX: 'auto' }}>
                <table className="ds-table" style={{ fontSize: 12 }}>
                  <thead>
                    <tr>{['Mã CR', 'Tiêu đề', 'Loại', 'Trạng thái', 'BRS', 'Test', 'Dự án', 'Ngày tạo'].map(h =>
                      <th key={h}>{h}</th>)}</tr>
                  </thead>
                  <tbody>{data.unassigned.map(cr => <CrRow key={cr.cr_id} cr={cr} />)}</tbody>
                </table>
              </div>
            </>
          )}

          {/* Dự án có mốc trong kỳ */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600,
            color: 'var(--app-neutral-800)', margin: '20px 0 10px',
          }}>
            <Calendar size={15} strokeWidth={1.5} /> Dự án có mốc trong kỳ ({data.projects.length})
          </div>
          {data.projects.length === 0 ? (
            <EmptyState title="Không có dự án nào khởi động hay kết thúc trong kỳ" />
          ) : (
            <div style={{ border: '1px solid var(--app-neutral-200)', borderRadius: 12, overflowX: 'auto' }}>
              <table className="ds-table" style={{ fontSize: 12 }}>
                <thead>
                  <tr>{['Mã', 'Tên dự án', 'Domain', 'Trạng thái', 'Bắt đầu', 'Kết thúc', 'Mốc trong kỳ', 'CR trong kỳ'].map(h =>
                    <th key={h}>{h}</th>)}</tr>
                </thead>
                <tbody>
                  {data.projects.map(pr => (
                    <tr key={pr.id}>
                      <td style={{ fontWeight: 600 }}>{pr.code}</td>
                      <td style={{ maxWidth: 280 }}>{pr.name}</td>
                      <td>{pr.domain_code ?? '—'}</td>
                      <td>{pr.status}</td>
                      <td>{pr.start_date ?? '—'}</td>
                      <td>{pr.end_date ?? '—'}</td>
                      <td>
                        {pr.started_in_period && <Badge variant="info">khởi động</Badge>}{' '}
                        {pr.ended_in_period && <Badge variant="success">kết thúc</Badge>}
                        {!pr.started_in_period && !pr.ended_in_period && '—'}
                      </td>
                      <td>{pr.cr_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </div>
  )
}

function CrRow({ cr }: { cr: PeriodCr }) {
  return (
    <tr>
      <td style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{cr.request_code}</td>
      <td style={{ maxWidth: 280 }}>{cr.title}</td>
      <td>{cr.cr_kind === 'internal' ? 'Nội bộ' : 'Nghiệp vụ'}</td>
      <td>{CR_STATUS_LABELS[cr.status as keyof typeof CR_STATUS_LABELS] ?? cr.status}</td>
      <td>
        {cr.cr_kind === 'internal'
          ? <span style={{ color: 'var(--app-neutral-400)' }}>không cần</span>
          : cr.brs_status
            ? (BRS_LABEL[cr.brs_status] ?? cr.brs_status)
            : <span style={{ color: 'var(--app-neutral-400)' }}>chưa có</span>}
      </td>
      <td>
        {cr.test_status
          ? `${TEST_LABEL[cr.test_status] ?? cr.test_status}${cr.test_case_count ? ` (${cr.test_case_count})` : ''}`
          : <span style={{ color: 'var(--app-neutral-400)' }}>—</span>}
      </td>
      <td style={{ color: 'var(--app-neutral-500)', whiteSpace: 'nowrap' }}>{cr.project_code ?? '—'}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{(cr.created_at ?? '').slice(0, 10)}</td>
    </tr>
  )
}
