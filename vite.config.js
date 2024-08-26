import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dns from 'dns';
dns.setDefaultResultOrder('verbatim');
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js',
  },
  server: {
    host: 'localhost',
  }
})
