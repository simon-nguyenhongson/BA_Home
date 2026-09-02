import React, { useCallback, useEffect, useState } from 'react'
import { Building2, Package } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import PPGPage from '../ppg/PPGPage'
import { ProductsTab } from '../catalog/CatalogPage'
import { getCatalogDomains, type CatalogDomain } from '../../api/catalog'

/**
 * WorkspacePage — hai trục làm việc của BA nằm cạnh nhau: Project và Product.
 *
 * Trước đây "Danh mục sản phẩm" nằm trong Cài đặt → Danh mục, cạnh vai trò và domain.
 * Chỗ đó sai vai: vai trò/domain là dữ liệu cấu hình đặt một lần, còn sản phẩm là đối
 * tượng làm việc hằng ngày — CR gắn sản phẩm, Master Doc thuộc sản phẩm, BRS và test case
 * đều móc vào sản phẩm. Đặt nó sau menu Cài đặt khiến việc thường xuyên nhất phải đi
 * đường vòng qua trang cấu hình.
 *
 * Đổi tên menu "Project" → "Workspace" vì mục này giờ chứa cả hai trục, không chỉ dự án.
 * Tab hiện trên URL (?tab=project|product) để chia sẻ link và F5 không mất chỗ đang xem.
 */

type WsTab = 'project' | 'product'

const TABS: { key: WsTab; label: string; icon: typeof Building2; hint: string }[] = [
  { key: 'project', label: 'Project', icon: Building2,
    hint: 'Dự án có thời hạn — bàn giao sản phẩm rồi kết thúc' },
  { key: 'product', label: 'Product', icon: Package,
    hint: 'Sản phẩm sống lâu dài — CR, BRS, Master Doc, test đều gắn vào đây' },
]

export default function WorkspacePage() {
  const [params, setParams] = useSearchParams()

  const raw = params.get('tab')
  const tab: WsTab = raw === 'product' ? 'product' : 'project'

  const [domains, setDomains] = useState<CatalogDomain[]>([])

  const loadDomains = useCallback(async () => {
    try { setDomains(await getCatalogDomains()) } catch { /* form vẫn dùng được */ }
  }, [])
  useEffect(() => { loadDomains() }, [loadDomains])

  function pick(next: WsTab) {
    // replace: đổi tab không nhồi thêm bước vào lịch sử trình duyệt, để nút Back của
    // trình duyệt vẫn đưa người dùng ra khỏi Workspace thay vì lùi qua từng tab.
    setParams(next === 'project' ? {} : { tab: next }, { replace: true })
  }

  const active = TABS.find(t => t.key === tab)!

  return (
    <div>
      <div style={{ marginBottom: 14 }}>
        <h1 style={{ fontSize: 20, lineHeight: '30px', fontWeight: 600, color: 'var(--app-neutral-900)' }}>
          Workspace
        </h1>
        <p style={{ fontSize: 14, color: 'var(--app-neutral-500)' }}>{active.hint}</p>
      </div>

      <div className="ds-tabs" style={{ marginBottom: 18 }}>
        {TABS.map(t => (
          <button
            key={t.key}
            type="button"
            className={`ds-tab${tab === t.key ? ' active' : ''}`}
            onClick={() => pick(t.key)}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
          >
            <t.icon size={15} strokeWidth={1.5} /> {t.label}
          </button>
        ))}
      </div>

      {tab === 'project' && <PPGPage />}
      {tab === 'product' && <ProductsTab domains={domains} />}
    </div>
  )
}
