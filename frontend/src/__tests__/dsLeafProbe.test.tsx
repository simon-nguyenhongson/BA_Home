/**
 * Thăm dò 3 leaf component DS trước khi đưa vào app.
 * Mục đích: đừng thay component của BA_Home bằng thứ tệ hơn.
 * Test này in ra DOM thật để quyết định, và khoá lại kết luận.
 */
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Divider } from '@ds/components/core/Divider';
import { SpinnerStatic } from '@ds/components/navigation/SpinnerStatic';
import { Illustration } from '@ds/components/navigation/Illustration';

describe('Thăm dò leaf component DS', () => {
  it('Divider render ra gì', () => {
    const { container } = render(<Divider />);
    expect(container.innerHTML.length).toBeGreaterThan(0);
    console.log('DIVIDER:', container.innerHTML.slice(0, 400));
  });

  it('SpinnerStatic có animation hay không (tên là "Static")', () => {
    const { container } = render(<SpinnerStatic size="sm" />);
    const html = container.innerHTML;
    console.log('SPINNER:', html.slice(0, 600));
    // DS quy định loading là "ring xoay 16px". Nếu không có animation/keyframes
    // thì component này KHÔNG thay được spinner của Btn.
    const hasAnimation = /animate|animation|@keyframes|rotate/i.test(html);
    console.log('SPINNER có dấu hiệu animation:', hasAnimation);
    expect(html.length).toBeGreaterThan(0);
  });

  it('Illustration render ra gì (dùng cho EmptyState)', () => {
    const { container } = render(<Illustration size="md" color="gray" />);
    console.log('ILLUSTRATION:', container.innerHTML.slice(0, 500));
    expect(container.innerHTML.length).toBeGreaterThan(0);
  });
});
