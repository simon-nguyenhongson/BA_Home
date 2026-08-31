import { useEffect, useState } from 'react'
import { Bot, KeyRound, Pencil, Plus, Trash2, Wand2 } from 'lucide-react'
import {
  getAiSettings, updateAiSettings, testAiKey,
  getAiSkills, getAiSkill, createAiSkill, updateAiSkill, deleteAiSkill,
  type AiSettings, type AiSkill,
} from '../../api/ai'
import { Badge, Btn, Card, Confirm, EmptyState, Field, AppInput, AppTextarea, Modal } from '../../components/ui'
import { useStore } from '../../stores/auth'

type Tab = 'ai' | 'skills'

const MODELS = [
  { value: 'claude-opus-5', label: 'Claude Opus 5 — mạnh nhất, mặc định' },
  { value: 'claude-sonnet-5', label: 'Claude Sonnet 5 — cân bằng chi phí' },
  { value: 'claude-haiku-4-5', label: 'Claude Haiku 4.5 — nhanh, việc đơn giản' },
]

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>('ai')

  return (
    <div>
      <div style={{ marginBottom: 16 }}>
        <h1 style={{ fontSize: 20, lineHeight: '30px', fontWeight: 600, color: 'var(--app-neutral-900)' }}>
          Cài đặt
        </h1>
        <p style={{ fontSize: 14, color: 'var(--app-neutral-500)' }}>
          Cấu hình AI Agent và kho skill chuẩn dùng cho sinh tài liệu, test case, báo cáo
        </p>
      </div>

      <div className="ds-tabs" style={{ marginBottom: 20 }}>
        <button className={`ds-tab${tab === 'ai' ? ' active' : ''}`} onClick={() => setTab('ai')}>
          AI Agent
        </button>
        <button className={`ds-tab${tab === 'skills' ? ' active' : ''}`} onClick={() => setTab('skills')}>
          Kho skill
        </button>
      </div>

      {tab === 'ai' ? <AiSettingsTab /> : <SkillsTab />}
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
        </div>

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
        <div style={{ fontSize: 14, color: 'var(--app-neutral-500)' }}>
          Skill là bộ hướng dẫn chuẩn gửi kèm mỗi lần gọi AI. Sửa nội dung skill để đổi cách AI viết tài liệu.
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
                <th style={{ width: 100 }}>Độ dài</th>
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
                  <td>{s.content_length ?? 0} ký tự</td>
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

  const save = async () => {
    setSaving(true)
    try {
      await updateAiSkill(skill.id, { name, description, content })
      addToast('Đã lưu skill', 'success')
      onSaved()
    } catch (e) {
      addToast((e as Error).message, 'error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Modal title={`Sửa skill — ${skill.code}`} open onClose={onClose} width="880px">
      <Field label="Tên"><AppInput value={name} onChange={e => setName(e.target.value)} /></Field>
      <Field label="Mô tả">
        <AppInput value={description} onChange={e => setDescription(e.target.value)} />
      </Field>
      <Field label="Nội dung hướng dẫn gửi cho AI">
        <AppTextarea
          rows={22}
          value={content}
          onChange={e => setContent(e.target.value)}
          style={{ fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: '20px' }}
        />
      </Field>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
        <Btn variant="secondary" onClick={onClose}>Cancel</Btn>
        <Btn onClick={save} loading={saving}>Lưu</Btn>
      </div>
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
