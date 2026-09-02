import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// Alias phải khai lại ở đây: vitest.config.ts KHÔNG kế thừa vite.config.ts.
// Thiếu dòng này thì mọi test import '@ds/...' sẽ fail resolve.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ds': fileURLToPath(new URL('../design-system', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    include: ['src/**/__tests__/**/*.test.{ts,tsx}'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      include: ['src/components/**', 'src/lib/**'],
    },
  },
})
