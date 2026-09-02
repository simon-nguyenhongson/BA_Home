/**
 * Kiểm chứng Design System vendored (design-system/, commit 6a241ae) nhúng được vào BA_Home.
 *
 * Test này KHÔNG kiểm giao diện — nó kiểm hạ tầng:
 *   1. alias '@ds' resolve được ở cả vite.config.ts và vitest.config.ts
 *   2. component .jsx nạp được implementation thật từ _impl/p1..p5.js
 *   3. component render ra DOM chứ không throw
 *   4. token CSS trong repo khớp byte-for-byte với design-system/tokens/
 *
 * Nếu ai đó cập nhật design-system/ mà làm vỡ một trong 4 điều trên, test này fail
 * thay vì để lỗi lộ ra ở màn hình người dùng.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import { Button } from '@ds/components/core/Button';
import { Badge } from '@ds/components/core/Badge';
import { Input } from '@ds/components/forms/Input';

// jsdom không cho import.meta.url là scheme file: — vitest chạy với cwd = frontend/
const dsRoot = resolve(process.cwd(), '../design-system');
const appTokens = resolve(process.cwd(), 'src/styles/ds');

describe('Design System vendored — hạ tầng', () => {
  it('alias @ds nạp được component core', () => {
    expect(typeof Button).toBe('function');
    expect(typeof Badge).toBe('function');
    expect(typeof Input).toBe('function');
  });

  it('Button render ra DOM thật (implementation từ _impl, không phải stub rỗng)', () => {
    const { container } = render(<Button text1="Lưu thay đổi" />);
    expect(container.firstChild).not.toBeNull();
    expect(container.textContent).toContain('Lưu thay đổi');
  });

  it('Button nhận đủ 7 hierarchy theo hợp đồng Button.d.ts', () => {
    const hierarchies = [
      'primary',
      'secondary gray',
      'secondary color',
      'ghost gray',
      'ghost color',
      'link color',
      'link gray',
    ] as const;
    for (const hierarchy of hierarchies) {
      const { container } = render(<Button hierarchy={hierarchy} text1="X" />);
      expect(container.firstChild, `hierarchy=${hierarchy} không render`).not.toBeNull();
    }
  });

  it('component forms render được (chứng minh _impl của forms cũng đủ phần)', () => {
    const { container } = render(<Input />);
    expect(container.querySelector('input, [contenteditable], div')).not.toBeNull();
  });
});

describe('Design System vendored — token không drift', () => {
  const tokenFiles = [
    'base.css',
    'elevation.css',
    'fonts.css',
    'layout.css',
    'palette.css',
    'semantic.css',
    'typography.css',
  ];

  it.each(tokenFiles)('%s trong app khớp byte-for-byte với upstream', (name) => {
    const upstream = readFileSync(`${dsRoot}/tokens/${name}`, 'utf8');
    const inApp = readFileSync(`${appTokens}/${name}`, 'utf8');
    expect(inApp).toBe(upstream);
  });

  it('figma-variables.css KHÔNG được copy vào app (upstream gọi là "archaeology")', () => {
    expect(() => readFileSync(`${appTokens}/figma-variables.css`, 'utf8')).toThrow();
  });
});
