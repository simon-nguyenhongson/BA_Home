/**
 * Đo tính LẮP GHÉP được của component DS — khác với test render ở designSystem.test.tsx.
 *
 * Vì sao cần: quyết định "migrate toàn bộ UI sang component DS" chỉ khả thi nếu component DS
 * nhận được nội dung của app. Test này ghi lại sự thật đo được, để quyết định sau này dựa
 * trên số liệu chứ không dựa trên giả định.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Modal } from '@ds/components/navigation/Modal';
import { Alert } from '@ds/components/navigation/Alert';
import { Button } from '@ds/components/core/Button';

describe('Tính lắp ghép của component DS', () => {
  it('Modal KHÔNG nhận children — nội dung của app không đưa vào được', () => {
    const { container } = render(
      // @ts-expect-error — ModalProps không khai children. Dòng này là BẰNG CHỨNG,
      // không phải lỗi cần sửa: nếu upstream thêm children thì ts-expect-error sẽ fail
      // và ta biết ngay là giới hạn đã được tháo.
      <Modal>
        <p>Nội dung riêng của BA_Home</p>
      </Modal>,
    );
    expect(container.textContent).not.toContain('Nội dung riêng của BA_Home');
  });

  it('Alert render ra markup nhưng KHÔNG có chữ và KHÔNG có prop nào để đặt thông điệp', () => {
    const { container } = render(<Alert />);
    // AlertProps chỉ khai className + style — không message, không variant, không children.
    expect(container.querySelectorAll('*').length).toBeGreaterThan(0); // có dựng DOM
    expect(container.textContent).toBe(''); // nhưng rỗng chữ: dùng làm alert thật thì vô nghĩa
  });

  it('Button CÓ nhận nội dung qua text1 — đây là kiểu prop 56/85 component dùng', () => {
    const { container } = render(<Button text1="Duyệt BRS" />);
    expect(container.textContent).toContain('Duyệt BRS');
  });
});
