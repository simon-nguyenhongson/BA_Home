import { useEffect, useState } from 'react'
import { Bot, FileCode2, FolderTree, KeyRound, Pencil, Plus, Trash2, Wand2 } from 'lucide-react'
import {
  getAiSettings, updateAiSettings, testAiKey,
  getAiSkills, getAiSkill, createAiSkill, updateAiSkill, deleteAiSkill, getSkillFile,
  type AiSettings, type AiSkill,
} from '../../api/ai'
import { Badge, Btn, Card, Confirm, EmptyState, Field, AppInput, AppTextarea, Modal } from '../../components/ui'
import { useStore } from '../../stores/auth'
import CatalogPage from '../catalog/CatalogPage'

// Danh mục (sản phẩm / nhân sự / vai trò) đã chuyển từ menu riêng vào đây
// theo yêu cầu PO 2026-09-01 — đều là dữ liệu cấu hình, không phải việc hằng ngày.
type Tab = 'ai' | 'skills' | 'catalog'

const MODELS = [
  { value: 'claude-opus-5', label: 'Claude Opus 5 — mạnh nhất, mặc định' },
  { value: 'claude-sonnet-5', label: 'Claude Sonnet 5 — cân bằng chi phí' },
  { value: 'claude-haiku-4-5', label: 'Claude Haiku 4.5 — nhanh, việc đơn giản' },
]

export default function SettingsPage() {
  // Link cũ /catalog chuyển hướng sang /settings?tab=products → mở luôn tab Danh mục
  const initialTab: Tab =
    new URLSearchParams(window.location.search).get('tab') === 'products' ? 'catalog' : 'ai'
  const [tab, setTab] = useState<Tab>(initialTab)

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <h1 style={{ fontSize: 20, lineHeight: '30px', fontWeight: 600, color: 'var(--app-neutral-900)' }}>
          Cài đặt
        </h1>
        <p style={{ fontSize: 14, color: 'var(--app-neutral-500)' }}>
          AI Agent, kho skill chuẩn và danh mục dữ liệu nền của hệ thống
        </p>
      </div>

      <div className="ds-tabs" style={{ marginBottom: 20 }}>
        <button className={`ds-tab${tab === 'ai' ? ' active' : ''}`} onClick={() => setTab('ai')}>
          AI Agent
        </button>
        <button className={`ds-tab${tab === 'skills' ? ' active' : ''}`} onClick={() => setTab('skills')}>
          Skill
        </button>
        <button className={`ds-tab${tab === 'catalog' ? ' active' : ''}`} onClick={() => setTab('catalog')}>
          Danh mục
        </button>
      </div>

      {tab === 'ai' && <AiSettingsTab />}
      {tab === 'skills' && <SkillsTab />}
      {tab === 'catalog' && <CatalogPage />}
    </div>
  )
}

// ── Tab AI Agent ─────────────────────────────────────────────────────────────
function AiSettingsTab() {
  const addToast = useStore(s => s.addToast)
  const [settings, setSettings] = useState<AiSettings | null>(null)
  const [apiKey, setApiKey] = useState('')
  const [model, setModel] = useState('claude-opus-5')
  const [maxTokens, setMaxTokens] = useState(32000)
  const [saving, setSaving] = useState(false)
  const [testing, setTesting] = useState(false)

  const load = async () => {
    try {
      const res = await getAiSettings()
      setSettings(res.data)
      setModel(res.data.anthropic_model)
      setMaxTokens(res.data.anthropic_max_tokens)
    } catch (e) {
      addToast((e as Error).message, 'error')
    }
  }
  useEffect(() => { void load() }, [])

  const save = async () => {
    setSaving(true)
    try {
      const body: { anthropic_api_key?: string; anthropic_model: string; anthropic_max_tokens: number } = {
        anthropic_model: model,
        anthropic_max_tokens: maxTokens,
      }
      if (apiKey.trim()) body.anthropic_api_key = apiKey.trim()
      const res = await updateAiSettings(body)
      setSettings(res.data)
      setApiKey('')
      addToast('Đã lưu cấu hình AI', 'success')
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setSaving(false)
    }
  }

  const test = async () => {
    setTesting(true)
    try {
      const res = await testAiKey()
      addToast(`Kết nối thành công — ${res.data.model}`, 'success')
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setTesting(false)
    }
  }

  return (
    <div style={{ display: 'grid', gap: 16, maxWidth: 720 }}>
      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <KeyRound size={16} strokeWidth={1.5} color="var(--app-primary)" />
          <span className="card__title">Claude API</span>
          {settings?.has_api_key
            ? <Badge variant="success">Đã cấu hình</Badge>
            : <Badge variant="warning">Chưa cấu hình</Badge>}
          {settings?.credential_type === 'oauth' && <Badge variant="warning">OAuth token</Badge>}
          {settings?.credential_type === 'api_key' && <Badge variant="info">API key</Badge>}
        </div>

        {settings?.credential_type === 'oauth' && (
          <div className="state-banner state-banner-warn">
            Đang dùng OAuth token (sk-ant-oat…) của gói thuê bao. Qua API, token này chỉ
            gọi được model nhẹ (Claude Haiku 4.5) — Opus 5 và Sonnet 5 bị Anthropic từ chối
            (429) dù hạn mức của gói vẫn còn, vì hai model đó chỉ dành cho ứng dụng
            Claude/Claude Code. Token cũng sống ngắn hạn. Muốn hệ thống dùng Opus/Sonnet,
            nhập API key trả theo lượt dùng (sk-ant-api…) lấy từ console.anthropic.com.
          </div>
        )}

        <Field label="API key">
          <AppInput
            type="password"
            value={apiKey}
            onChange={e => setApiKey(e.target.value)}
            placeholder={settings?.has_api_key ? settings.anthropic_api_key_masked : 'Nhập Claude API key'}
          />
          <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', marginTop: 4 }}>
            Key được lưu trên máy chủ và luôn hiển thị dạng che. Để trống nếu không đổi key.
          </div>
        </Field>

        <Field label="Model">
          <select className="app-input" value={model} onChange={e => setModel(e.target.value)}>
            {MODELS.map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
          </select>
        </Field>

        <Field label="Giới hạn token mỗi lần gọi">
          <AppInput
            type="number"
            min={1024}
            max={128000}
            value={maxTokens}
            onChange={e => setMaxTokens(Number(e.target.value))}
          />
        </Field>

        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <Btn onClick={save} loading={saving}>Lưu</Btn>
          <Btn variant="secondary" onClick={test} loading={testing} disabled={!settings?.has_api_key}>
            Kiểm tra kết nối
          </Btn>
        </div>

        {settings?.updated_at && (
          <div style={{ fontSize: 12, color: 'var(--app-neutral-400)', marginTop: 12 }}>
            Cập nhật lần cuối: {new Date(settings.updated_at).toLocaleString('vi-VN')}
            {settings.updated_by ? ` bởi ${settings.updated_by}` : ''}
          </div>
        )}
      </Card>

      <Card>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <Bot size={16} strokeWidth={1.5} color="var(--app-primary)" />
          <span className="card__title">AI Agent làm gì trong hệ thống</span>
        </div>
        <ul style={{ fontSize: 14, color: 'var(--app-neutral-600)', paddingLeft: 18, display: 'grid', gap: 6 }}>
          <li>Sinh tài liệu BRS từ Change Request đã duyệt, lấy Master Doc làm bối cảnh hiện trạng</li>
          <li>Chỉnh sửa BRS theo chỉ dẫn của BA</li>
          <li>Hợp nhất BRS đã golive vào Master Doc — bản đề xuất phải được duyệt mới ghi đè</li>
          <li>Sinh test case từ BRS đã duyệt cho công việc automation test</li>
          <li>Tổng hợp báo cáo kết quả sau mỗi lượt chạy test</li>
        </ul>
      </Card>
    </div>
  )
}

// ── Tab kho skill ────────────────────────────────────────────────────────────
function SkillsTab() {
  const addToast = useStore(s => s.addToast)
  const [skills, setSkills] = useState<AiSkill[]>([])
  const [loading, setLoading] = useState(true)
  const [editing, setEditing] = useState<AiSkill | null>(null)
  const [creating, setCreating] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState<AiSkill | null>(null)

  const load = async () => {
    setLoading(true)
    try {
      const res = await getAiSkills()
      setSkills(res.data)
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => { void load() }, [])

  const openEdit = async (skill: AiSkill) => {
    try {
      const res = await getAiSkill(skill.id)
      setEditing(res.data)
    } catch (e) {
      addToast((e as Error).message, 'error')
    }
  }

  const doDelete = async () => {
    if (!confirmDelete) return
    try {
      await deleteAiSkill(confirmDelete.id)
      addToast('Đã xoá skill', 'success')
      setConfirmDelete(null)
      void load()
    } catch (e) {
      addToast((e as Error).message, 'error')
      setConfirmDelete(null)
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
        <div style={{ fontSize: 14, color: 'var(--app-neutral-500)', maxWidth: 780 }}>
          Skill hệ thống là <b>thư mục</b> theo chuẩn Claude skill — <code>SKILL.md</code> kèm
          <code> templates/</code> (hợp đồng đầu ra mà hệ thống parse theo) và
          <code> references/</code> (tài liệu nạp theo nhu cầu). Phần này nằm trong Git, sửa qua
          pull request. Trên giao diện, mỗi skill có thêm ô <b>bổ sung của đơn vị</b> — nội dung
          nối thêm vào cuối hướng dẫn, không ghi đè.
        </div>
        <Btn onClick={() => setCreating(true)}>
          <Plus size={14} strokeWidth={1.5} /> Thêm skill
        </Btn>
      </div>

      {loading ? (
        <Card><div style={{ color: 'var(--app-neutral-500)' }}>Đang tải...</div></Card>
      ) : skills.length === 0 ? (
        <Card><EmptyState title="Chưa có skill" desc="Thêm skill đầu tiên để bắt đầu." /></Card>
      ) : (
        <div className="card" style={{ overflow: 'hidden' }}>
          <table className="ds-table">
            <thead>
              <tr>
                <th style={{ width: 180 }}>Mã skill</th>
                <th>Tên</th>
                <th>Mô tả</th>
                <th style={{ width: 230 }}>Nguồn hướng dẫn</th>
                <th style={{ width: 120 }}>Loại</th>
                <th style={{ width: 110 }}></th>
              </tr>
            </thead>
            <tbody>
              {skills.map(s => (
                <tr key={s.id}>
                  <td><code style={{ fontSize: 13 }}>{s.code}</code></td>
                  <td style={{ color: 'var(--app-neutral-900)', fontWeight: 500 }}>{s.name}</td>
                  <td>{s.description}</td>
                  <td>
                    {s.bundle?.folder ? (
                      <div style={{ fontSize: 12, lineHeight: 1.5 }}>
                        <div style={{
                          display: 'inline-flex', alignItems: 'center', gap: 4,
                          color: 'var(--app-neutral-800)', fontWeight: 500,
                        }}>
                          <FolderTree size={12} strokeWidth={1.5} />
                          {s.bundle.folder}/ <span style={{ color: 'var(--app-neutral-400)' }}>
                            v{s.bundle.version}
                          </span>
                        </div>
                        <div style={{ color: 'var(--app-neutral-500)' }}>
                          {(s.bundle.templates?.length ?? 0)} template ·{' '}
                          {(s.bundle.references?.length ?? 0)} reference
                          {(s.content_length ?? 0) > 0 && ' · có bổ sung'}
                        </div>
                        {!!s.bundle.missing?.length && (
                          <div style={{ color: 'var(--app-danger)' }}>
                            thiếu {s.bundle.missing.length} file
                          </div>
                        )}
                      </div>
                    ) : (
                      <span style={{ fontSize: 12, color: 'var(--app-neutral-500)' }}>
                        Chỉ trong DB · {s.content_length ?? 0} ký tự
                      </span>
                    )}
                  </td>
                  <td>
                    {s.is_system
                      ? <Badge variant="info">Hệ thống</Badge>
                      : <Badge variant="neutral">Tuỳ chỉnh</Badge>}
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: 4 }}>
                      <button className="btn-icon" title="Sửa" onClick={() => void openEdit(s)}>
                        <Pencil size={14} strokeWidth={1.5} />
                      </button>
                      {!s.is_system && (
                        <button className="btn-icon" title="Xoá" onClick={() => setConfirmDelete(s)}>
                          <Trash2 size={14} strokeWidth={1.5} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {editing && (
        <SkillEditor
          skill={editing}
          onClose={() => setEditing(null)}
          onSaved={() => { setEditing(null); void load() }}
        />
      )}
      {creating && (
        <SkillCreator onClose={() => setCreating(false)} onSaved={() => { setCreating(false); void load() }} />
      )}
      <Confirm
        open={!!confirmDelete}
        message={`Xoá skill "${confirmDelete?.name}"?`}
        onConfirm={doDelete}
        onCancel={() => setConfirmDelete(null)}
      />
    </div>
  )
}

function SkillEditor({ skill, onClose, onSaved }: { skill: AiSkill; onClose: () => void; onSaved: () => void }) {
  const addToast = useStore(s => s.addToast)
  const [name, setName] = useState(skill.name)
  const [description, setDescription] = useState(skill.description)
  const [content, setContent] = useState(skill.content ?? '')
  const [saving, setSaving] = useState(false)
  const [viewFile, setViewFile] = useState<{ path: string; content: string } | null>(null)
  const [loadingFile, setLoadingFile] = useState('')

  const bundle = skill.bundle?.folder ? skill.bundle : null
  const files = bundle
    ? ['SKILL.md', ...(bundle.templates ?? []), ...(bundle.references ?? [])]
    : []

  const openFile = async (path: string) => {
    setLoadingFile(path)
    try {
      const res = await getSkillFile(skill.id, path)
      setViewFile(res.data)
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setLoadingFile('')
    }
  }

  const save = async () => {
    setSaving(true)
    try {
      // Với skill dạng thư mục, `content` là phần BỔ SUNG — được phép để trống.
      // Backend chỉ chặn để trống với skill mà hướng dẫn nằm hoàn toàn trong DB.
      await updateAiSkill(skill.id, bundle ? { name, description, content } : { name, description, content })
      addToast('Đã lưu skill', 'success')
      onSaved()
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Modal title={`Skill — ${skill.code}`} open onClose={onClose} width="920px">
      {bundle && (
        <div style={{
          border: '1px solid var(--app-neutral-200)', borderRadius: 12,
          padding: 12, marginBottom: 16, background: 'var(--app-neutral-50)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 6, fontSize: 13,
            fontWeight: 600, color: 'var(--app-neutral-800)', marginBottom: 8,
          }}>
            <FolderTree size={14} strokeWidth={1.5} />
            {bundle.folder}/ <Badge variant="info">v{bundle.version}</Badge>
            {bundle.loaded_elsewhere && (
              <Badge variant="neutral">reference nạp theo loại diagram</Badge>
            )}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 8 }}>
            {files.map(f => (
              <button key={f} onClick={() => void openFile(f)} disabled={loadingFile === f}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 4,
                  border: '1px solid var(--app-neutral-200)', background: '#fff',
                  borderRadius: 8, padding: '3px 9px', cursor: 'pointer',
                  fontFamily: 'var(--font)', fontSize: 12, color: 'var(--app-neutral-700)',
                }}>
                <FileCode2 size={12} strokeWidth={1.5} /> {f}
              </button>
            ))}
          </div>
          <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', lineHeight: 1.5 }}>
            Các file trên nằm trong Git tại <code>backend/ppg/app/skills/{bundle.folder}/</code> —
            chỉ đọc ở đây, sửa qua pull request để thay đổi được review và truy vết được.
          </div>
          {!!bundle.missing?.length && (
            <div className="state-banner state-banner-err" style={{ marginTop: 8, fontSize: 13 }}>
              Thiếu file khai báo trong SKILL.md: {bundle.missing.join(', ')} — skill vẫn chạy
              nhưng mất phần hướng dẫn đó. Kiểm tra lại bộ skill trên máy chủ.
            </div>
          )}
        </div>
      )}

      <Field label="Tên"><AppInput value={name} onChange={e => setName(e.target.value)} /></Field>
      <Field label="Mô tả">
        <AppInput value={description} onChange={e => setDescription(e.target.value)} />
      </Field>
      <Field label={bundle ? 'Bổ sung của đơn vị (nối thêm sau hướng dẫn trong thư mục)'
                           : 'Nội dung hướng dẫn gửi cho AI'}>
        <AppTextarea
          rows={bundle ? 12 : 22}
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder={bundle
            ? 'Ví dụ: mọi BRS phải nêu số hiệu Thông tư NHNN liên quan ở mục 1.\n\nĐể trống nếu không cần bổ sung gì.'
            : 'Viết hướng dẫn cho AI: vai trò, nguyên tắc, cấu trúc đầu ra'}
          style={{ fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: '20px' }}
        />
      </Field>
      {bundle && (
        <div style={{ fontSize: 12, color: 'var(--app-neutral-500)', margin: '-8px 0 16px' }}>
          Phần này <b>bổ sung</b>, không ghi đè. Khi xung đột về định dạng đầu ra, template
          trong thư mục thắng — nhờ vậy sửa ở đây không làm hỏng phần mã nguồn parse.
        </div>
      )}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <Btn variant="secondary" onClick={onClose}>Đóng</Btn>
        <Btn onClick={save} loading={saving}>Lưu</Btn>
      </div>

      <Modal title={viewFile?.path ?? ''} open={!!viewFile} onClose={() => setViewFile(null)} width="900px">
        <pre style={{
          whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)', fontSize: 12,
          lineHeight: '19px', background: 'var(--app-neutral-50)',
          border: '1px solid var(--app-neutral-200)', borderRadius: 8,
          padding: 12, maxHeight: '62vh', overflow: 'auto', margin: 0,
        }}>{viewFile?.content}</pre>
      </Modal>
    </Modal>
  )
}

function SkillCreator({ onClose, onSaved }: { onClose: () => void; onSaved: () => void }) {
  const addToast = useStore(s => s.addToast)
  const [code, setCode] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [saving, setSaving] = useState(false)

  const save = async () => {
    if (!/^[a-z0-9_]+$/.test(code)) {
      addToast('Mã skill chỉ gồm chữ thường, số và dấu gạch dưới', 'warn')
      return
    }
    setSaving(true)
    try {
      await createAiSkill({ code, name, description, content })
      addToast('Đã thêm skill', 'success')
      onSaved()
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Modal title="Thêm skill" open onClose={onClose} width="880px">
      <Field label="Mã skill" required>
        <AppInput value={code} onChange={e => setCode(e.target.value)} placeholder="Nhập mã dạng gen_impact_analysis" />
      </Field>
      <Field label="Tên" required>
        <AppInput value={name} onChange={e => setName(e.target.value)} placeholder="Nhập tên hiển thị" />
      </Field>
      <Field label="Mô tả">
        <AppInput value={description} onChange={e => setDescription(e.target.value)} placeholder="Mô tả ngắn skill dùng để làm gì" />
      </Field>
      <Field label="Nội dung hướng dẫn gửi cho AI" required>
        <AppTextarea
          rows={18}
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Viết hướng dẫn cho AI: vai trò, nguyên tắc, cấu trúc đầu ra"
          style={{ fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: '20px' }}
        />
      </Field>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <Btn variant="secondary" onClick={onClose}>Cancel</Btn>
        <Btn onClick={save} loading={saving}>
          <Wand2 size={14} strokeWidth={1.5} /> Thêm skill
        </Btn>
      </div>
    </Modal>
  )
}
