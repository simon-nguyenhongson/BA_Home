import { describe, it, expect } from 'vitest'
import { extractErrorMessage } from '../http'

describe('extractErrorMessage — lỗi 422 của FastAPI', () => {
  it('nêu TÊN TRƯỜNG, không chỉ câu lỗi kiểu dữ liệu', () => {
    // Đây đúng payload đã làm "Tạo task" thất bại im lặng
    const detail = [{
      type: 'date_from_datetime_parsing',
      loc: ['body', 'due_date'],
      msg: 'Input should be a valid date or datetime, input is too short',
    }]
    const out = extractErrorMessage(detail)
    expect(out).toContain('due_date')
    expect(out).toContain('valid date')
  })

  it('gộp nhiều trường sai trong một câu', () => {
    const detail = [
      { loc: ['body', 'start_date'], msg: 'Input should be a valid date' },
      { loc: ['body', 'end_date'],   msg: 'Input should be a valid date' },
    ]
    const out = extractErrorMessage(detail)
    expect(out).toContain('start_date')
    expect(out).toContain('end_date')
    expect(out.split(';')).toHaveLength(2)
  })

  it('trường lồng nhau ghép bằng dấu chấm, bỏ tiền tố body', () => {
    const detail = [{ loc: ['body', 'recurrence', 'every'], msg: 'Field required' }]
    expect(extractErrorMessage(detail)).toBe('recurrence.every: Field required')
  })

  it('lỗi không có loc thì vẫn trả về msg', () => {
    expect(extractErrorMessage([{ msg: 'Something failed' }])).toBe('Something failed')
  })
})

describe('extractErrorMessage — các dạng detail khác', () => {
  it('chuỗi thuần', () => {
    expect(extractErrorMessage('CR không tồn tại')).toBe('CR không tồn tại')
  })

  it('{code, message} của lỗi nghiệp vụ — lấy message, không JSON.stringify', () => {
    expect(extractErrorMessage({ code: 'AI_RATE_LIMIT', message: 'Hết hạn mức.' }))
      .toBe('Hết hạn mức.')
  })

  it('object không có message thì không được trả về "[object Object]"', () => {
    const out = extractErrorMessage({ foo: 'bar' })
    expect(out).not.toBe('[object Object]')
    expect(out).toContain('foo')
  })

  it('undefined → câu mặc định', () => {
    expect(extractErrorMessage(undefined)).toBe('Request failed')
  })
})
