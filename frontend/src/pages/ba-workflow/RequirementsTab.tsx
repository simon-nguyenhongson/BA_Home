import React, { useState, useEffect, useCallback } from 'react'
import { Plus, Wand2, FileText, Loader2, Search, CheckSquare, Square, File, Clock, AlertCircle } from 'lucide-react'
import { Btn, AppInput, AppTextarea, StatusBadge } from '../../components/ui'
import { createRequirement, generateDocumentFromRequirement } from '../../api/ba'
import { getProjects, getProjectDomains, type Project, type ProjectDomain } from '../../api/ppg'
import { pcrApi, type ProjectChangeRequest } from '../../api/requests'
import { getBADocuments, createBADocument } from '../../lib/api/workflow-docs'
import type { BADocument } from '../../lib/types/workflow-doc'
import { useStore } from '../../stores/auth'

export function RequirementsTab() {
  const { addToast, username } = useStore()

  // ── States ────────────────────────────────────────────────────────
  const [projects, setProjects] = useState<Project[]>([])
  const [loadingProjects, setLoadingProjects] = useState(false)
  const [searchProject, setSearchProject] = useState('')
  const [showProjectDropdown, setShowProjectDropdown] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // PCRs & Selection
  const [pcrs, setPcrs] = useState<ProjectChangeRequest[]>([])
  const [loadingPcrs, setLoadingPcrs] = useState(false)
  const [selectedPcrIds, setSelectedPcrIds] = useState<Set<string>>(new Set())

  // Text Aggregation
  const [aggregatedText, setAggregatedText] = useState('')

  // Document Preview
  const [previewDoc, setPreviewDoc] = useState<{ type: string; title: string; content: string } | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  // AI Generation State
  const [generatingStates, setGeneratingStates] = useState<Set<string>>(new Set())

  // ── Data Loading ──────────────────────────────────────────────────
  const loadProjects = useCallback(async () => {
    setLoadingProjects(true)
    try {
      const prjs = await getProjects({ all_years: true })
      setProjects(prjs)
    } catch (e: unknown) {
      addToast((e as Error).message, 'error')
    } finally {
      setLoadingProjects(false)
    }
  }, [addToast])

  useEffect(() => { loadProjects() }, [loadProjects])

  const loadProjectData = useCallback(async (projectId: string) => {
    setLoadingPcrs(true)
    try {
      const pcrRes = await pcrApi.list({ project_id: projectId })
      setPcrs(Array.isArray(pcrRes) ? pcrRes : [])
    } catch (e: unknown) {
      addToast((e as Error).message, 'error')
    } finally {
      setLoadingPcrs(false)
    }
  }, [addToast])

  useEffect(() => {
    if (selectedProject) {
      loadProjectData(selectedProject.id)
      setSelectedPcrIds(new Set())
      setAggregatedText('')
      setPreviewDoc(null)
    } else {
      setPcrs([])
      setAggregatedText('')
      setPreviewDoc(null)
    }
  }, [selectedProject, loadProjectData])

  // ── Interactions ──────────────────────────────────────────────────
  const handleTogglePcr = (pcr: ProjectChangeRequest) => {
    const next = new Set(selectedPcrIds)
    if (next.has(pcr.id)) {
      next.delete(pcr.id)
    } else {
      next.add(pcr.id)
    }
    setSelectedPcrIds(next)
    
    // Auto-update aggregated text
    let newText = ''
    pcrs.filter(p => next.has(p.id)).forEach(p => {
      newText += `[${p.request_code}] ${p.title}\n`
      if (p.description) newText += `${p.description}\n`
      if (p.notes) newText += `Notes: ${p.notes}\n`
      newText += `\n`
    })
    setAggregatedText(newText)
  }

  const handleSelectAll = () => {
    if (selectedPcrIds.size === pcrs.length) {
      setSelectedPcrIds(new Set())
      setAggregatedText('')
    } else {
      const allIds = new Set(pcrs.map(p => p.id))
      setSelectedPcrIds(allIds)
      
      let newText = ''
      pcrs.forEach(p => {
        newText += `[${p.request_code}] ${p.title}\n`
        if (p.description) newText += `${p.description}\n`
        if (p.notes) newText += `Notes: ${p.notes}\n`
        newText += `\n`
      })
      setAggregatedText(newText)
    }
  }

  const handleGenerate = async (docType: string) => {
    if (!aggregatedText.trim()) {
      addToast('Cần có nội dung để tạo tài liệu (chọn PCR hoặc tự nhập)', 'warn')
      return
    }
    if (!selectedProject) return

    setGeneratingStates(prev => new Set(prev).add(docType))
    try {
      // 1. Check if MASTER_DOC exists when generating BRS
      if (docType === 'BRS') {
        const docsRes = await getBADocuments({
          project_id: selectedProject.id,
          doc_type: 'MASTER_DOC',
          status: 'approved',
          size: 1
        })
        if (docsRes.data.length === 0) {
          addToast('Cảnh báo: Dự án chưa có Tài liệu Hệ thống (MASTER_DOC) đã duyệt. BRS sinh ra có thể thiếu Impact Analysis chính xác.', 'warn')
        }
      }

      // 2. Create a raw requirement with the aggregated text to maintain linkage history
      const selectedPcrCodes = pcrs.filter(p => selectedPcrIds.has(p.id)).map(p => p.request_code)
      const reqTitle = selectedPcrCodes.length > 0 
        ? `Aggregated from PCRs: ${selectedPcrCodes.join(', ')}`
        : `Manual aggregated requirements`

      const reqRes = await createRequirement({
        project_id: selectedProject.id,
        title: reqTitle,
        raw_text: aggregatedText,
        created_by: username || 'system'
      })

      // 2. Call AI generation logic
      const res = await generateDocumentFromRequirement(reqRes.id, docType)
      addToast(`Đã lấy dữ liệu review ${docType} thành công!`, 'success')
      
      // 3. Set Preview
      setPreviewDoc({ type: docType, title: res.title, content: res.content })
      
      // Reset form text
      setAggregatedText('')
      setSelectedPcrIds(new Set())
    } catch (e: unknown) {
      addToast(`Lỗi khi tạo tài liệu: ${(e as Error).message}`, 'error')
    } finally {
      setGeneratingStates(prev => {
        const next = new Set(prev)
        next.delete(docType)
        return next
      })
    }
  }

  const handleCreateDocument = async () => {
    if (!previewDoc || !selectedProject) return
    if (previewDoc.type === 'TEST_CASE') {
      addToast('Test Case không thể lưu vào BA Workflow. Hãy tải xuống (.md) và đưa vào Test Platform.', 'info')
      return
    }

    setIsSaving(true)
    try {
      await createBADocument({
        project_id: selectedProject.id,
        doc_type: previewDoc.type as BADocument['doc_type'],
        title: previewDoc.title,
        content: previewDoc.content
      })
      addToast('Đã lưu tài liệu thành công!', 'success')
      setPreviewDoc(null)
    } catch (e: unknown) {
      addToast((e as Error).message, 'error')
    } finally {
      setIsSaving(false)
    }
  }

  // ── Render Helpers ────────────────────────────────────────────────
  const filteredProjects = searchProject 
    ? projects.filter(p => p.name.toLowerCase().includes(searchProject.toLowerCase()) || p.code.toLowerCase().includes(searchProject.toLowerCase()))
    : []

  return (
    <div style={{ display: 'flex', height: '100%', gap: 16 }}>
      
      {/* ── Left Pane: Project Selection & PCR Form ──────────────────────────── */}
      <div style={{ 
        width: '450px', display: 'flex', flexDirection: 'column',
        background: '#fff', border: '1px solid var(--app-neutral-200)', borderRadius: 12,
        overflow: 'hidden', flexShrink: 0
      }}>
        {/* Project Search Header */}
        <div style={{ padding: '16px', borderBottom: '1px solid var(--app-neutral-200)', background: 'var(--app-neutral-50)' }}>
          <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--app-neutral-600)', marginBottom: 12, letterSpacing: 0.5 }}>
            TỔNG HỢP NỘI DUNG (TẠO YÊU CẦU MỚI)
          </div>
          <div style={{ position: 'relative' }}>
            <Search size={14} style={{ position: 'absolute', left: 10, top: 9, color: 'var(--app-neutral-400)' }} />
            <input 
              value={searchProject}
              onChange={e => {
                setSearchProject(e.target.value)
                setShowProjectDropdown(true)
                if (selectedProject) setSelectedProject(null)
              }}
              onFocus={() => setShowProjectDropdown(true)}
              onBlur={() => setTimeout(() => setShowProjectDropdown(false), 200)}
              placeholder="Tìm kiếm dự án..."
              style={{
                width: '100%', padding: '8px 12px 8px 32px', borderRadius: 6, border: '1px solid var(--app-neutral-200)',
                fontSize: 13, fontFamily: 'var(--font)', outline: 'none'
              }}
            />
            
            {/* Project Autocomplete Dropdown */}
            {showProjectDropdown && searchProject && (
              <div style={{
                position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4,
                background: '#fff', border: '1px solid var(--app-neutral-200)', borderRadius: 8,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)', zIndex: 10, maxHeight: 250, overflowY: 'auto'
              }}>
                {filteredProjects.length === 0 ? (
                  <div style={{ padding: '12px 16px', fontSize: 13, color: 'var(--app-neutral-500)' }}>Không tìm thấy dự án</div>
                ) : (
                  filteredProjects.map(p => (
                    <div 
                      key={p.id}
                      onClick={() => {
                        setSelectedProject(p)
                        setSearchProject(`${p.code} - ${p.name}`)
                        setShowProjectDropdown(false)
                      }}
                      style={{
                        padding: '10px 16px', cursor: 'pointer', borderBottom: '1px solid var(--app-neutral-100)',
                        fontSize: 13, color: 'var(--app-neutral-800)'
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = 'var(--app-neutral-50)'}
                      onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                    >
                      <span style={{ fontWeight: 600, marginRight: 8, color: 'var(--app-primary)' }}>{p.code}</span>
                      {p.name}
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
        
        {/* PCR Form Workspace */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column' }}>
          {!selectedProject ? (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--app-neutral-400)', opacity: 0.6 }}>
              <Search size={40} style={{ marginBottom: 12 }} />
              <div style={{ fontSize: 13 }}>Hãy tìm và chọn một dự án để bắt đầu</div>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {/* Select PCRs */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--app-neutral-700)' }}>
                    Chọn Project Change Request (PCR)
                  </label>
                  <button 
                    onClick={handleSelectAll}
                    style={{ background: 'none', border: 'none', color: 'var(--app-primary)', fontSize: 12, cursor: 'pointer', fontWeight: 600 }}
                  >
                    {selectedPcrIds.size === pcrs.length && pcrs.length > 0 ? 'Bỏ chọn tất cả' : 'Chọn tất cả'}
                  </button>
                </div>
                
                {loadingPcrs ? (
                  <div style={{ padding: 20, textAlign: 'center', color: 'var(--app-neutral-400)' }}><Loader2 size={20} className="spin" /></div>
                ) : pcrs.length === 0 ? (
                  <div style={{ padding: 16, background: 'var(--app-neutral-50)', borderRadius: 8, fontSize: 13, color: 'var(--app-neutral-500)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <AlertCircle size={16} /> Dự án này chưa có PCR nào.
                  </div>
                ) : (
                  <div style={{ 
                    maxHeight: 220, overflowY: 'auto', border: '1px solid var(--app-neutral-200)', borderRadius: 8, background: '#fff' 
                  }}>
                    {pcrs.map(pcr => {
                      const isSelected = selectedPcrIds.has(pcr.id)
                      return (
                        <div 
                          key={pcr.id}
                          onClick={() => handleTogglePcr(pcr)}
                          style={{ 
                            display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', 
                            borderBottom: '1px solid var(--app-neutral-100)', cursor: 'pointer',
                            background: isSelected ? 'var(--app-primary-50)' : 'transparent',
                            transition: 'background 0.15s'
                          }}
                        >
                          <div style={{ color: isSelected ? 'var(--app-primary)' : 'var(--app-neutral-300)', marginTop: 2 }}>
                            {isSelected ? <CheckSquare size={16} /> : <Square size={16} />}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 13, fontWeight: 600, color: isSelected ? 'var(--app-primary-800)' : 'var(--app-neutral-800)' }}>
                              [{pcr.request_code}] {pcr.title}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Textarea */}
              <div style={{ marginBottom: 20 }}>
                <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: 'var(--app-neutral-700)', marginBottom: 8 }}>
                  Nội dung tổng hợp (Raw Text)
                </label>
                <textarea
                  placeholder="Mô tả của các PCR sẽ được ghép vào đây..."
                  value={aggregatedText}
                  onChange={e => setAggregatedText(e.target.value)}
                  style={{
                    width: '100%', minHeight: 180, padding: 12, border: '1px solid var(--app-neutral-200)',
                    borderRadius: 8, fontFamily: 'var(--font)', fontSize: 13, resize: 'vertical',
                    lineHeight: 1.5, color: 'var(--app-neutral-800)'
                  }}
                />
              </div>

              {/* Generate Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {(['BRD', 'BRS', 'API_SPEC'] as const).map(dt => {
                  const isGeneratingThis = generatingStates.has(dt);
                  return (
                    <Btn key={dt} variant="primary" size="sm"
                         disabled={generatingStates.size > 0} 
                         onClick={() => handleGenerate(dt)}
                         className={isGeneratingThis ? 'ai-generating gemini-btn-loading' : ''}>
                      {isGeneratingThis ? <Loader2 size={13} className="spin" /> : <Search size={13} />} 
                      Review {dt === 'API_SPEC' ? 'API Spec' : dt}
                    </Btn>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Right Pane: Document Preview ──────────────────────────────────── */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ background: '#fff', border: '1px solid var(--app-neutral-200)', borderRadius: 12, display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid var(--app-neutral-100)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--app-neutral-50)', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
            <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--app-neutral-600)', letterSpacing: 0.5 }}>
              XEM TRƯỚC TÀI LIỆU
            </div>
            {previewDoc && (
              <div style={{ display: 'flex', gap: 8 }}>
                <Btn size="sm" variant="primary" onClick={handleCreateDocument} disabled={isSaving}>
                  {isSaving ? <Loader2 size={13} className="spin" /> : <Plus size={13} />}
                  Tạo tài liệu
                </Btn>
                <Btn size="sm" variant="secondary" onClick={() => {
                  const blob = new Blob([previewDoc.content], { type: 'text/markdown' })
                  const url = URL.createObjectURL(blob)
                  const a = document.createElement('a')
                  a.href = url
                  a.download = `${previewDoc.title.replace(/[^a-zA-Z0-9-]/g, '_')}.md`
                  document.body.appendChild(a)
                  a.click()
                  document.body.removeChild(a)
                  URL.revokeObjectURL(url)
                }}>
                  Tải xuống (.md)
                </Btn>
              </div>
            )}
          </div>
          
          <div style={{ flex: 1, overflowY: 'auto', padding: 20 }}>
            {!selectedProject ? (
               <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--app-neutral-400)' }}>
                 <FileText size={48} style={{ opacity: 0.3, marginBottom: 16 }} />
                 <div style={{ fontSize: 15 }}>Chưa chọn dự án</div>
               </div>
            ) : !previewDoc ? (
              <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: 'var(--app-neutral-400)' }}>
                <File size={32} style={{ opacity: 0.5, marginBottom: 12 }} />
                <div style={{ fontSize: 13 }}>Tài liệu sinh ra sẽ hiển thị tại đây.</div>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
                <AppInput
                  value={previewDoc.title}
                  onChange={(e) => setPreviewDoc({ ...previewDoc, title: e.target.value })}
                  style={{ fontSize: 18, fontWeight: 700, color: 'var(--app-primary-700)' }}
                />
                <AppTextarea
                  value={previewDoc.content}
                  onChange={(e) => setPreviewDoc({ ...previewDoc, content: e.target.value })}
                  style={{
                    flex: 1,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 14,
                    lineHeight: 1.6,
                    padding: 16
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
