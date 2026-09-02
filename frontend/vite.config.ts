import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Design System được vendor ở gốc repo (design-system/), ngoài frontend/.
// Xem design-system/UPSTREAM.md — commit 6a241ae.
const repoRoot = fileURLToPath(new URL('..', import.meta.url));
const dsRoot = fileURLToPath(new URL('../design-system', import.meta.url));

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ds': dsRoot,
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
    // design-system/ nằm ngoài root của Vite nên dev server phải được cho phép đọc gốc repo.
    fs: { allow: [repoRoot] },
    proxy: {
      '/api/ppg': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/ppg', ''),
        configure: (proxy) => {
          proxy.on('error', (err) => {
            console.error('[Proxy /api/ppg] Error:', err.message);
          });
          proxy.on('proxyReq', (_proxyReq, req) => {
            console.log('[Proxy /api/ppg]', req.method, req.url);
          });
          proxy.on('proxyRes', (proxyRes, req) => {
            console.log('[Proxy /api/ppg] Response:', proxyRes.statusCode, req.url);
          });
        },
      },
      '/api/ba': {
        target: 'http://127.0.0.1:8002',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/ba', ''),
      },
      '/api/test': {
        target: 'http://127.0.0.1:8003',
        changeOrigin: true,
        rewrite: (path) => path.replace('/api/test', ''),
      },
      '/sites': {
        target: 'http://127.0.0.1:8001',
        changeOrigin: true,
      },
    },
  },
});
