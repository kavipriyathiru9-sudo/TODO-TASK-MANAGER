
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TODO-TASK-MANAGER/',
  server: {
    host: '0.0.0.0',
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})

