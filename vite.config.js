import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 999999999999999, // Tăng giới hạn kích thước chunk lên 1000 kB
  },
  base: '/animation/',
})
