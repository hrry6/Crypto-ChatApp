import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'https://crypto-chatapp.onrender.com',
        changeOrigin: true,
      },
      '/auth': {
        target: 'https://crypto-chatapp.onrender.com',
        changeOrigin: true,
      },
      '/user': {
        target: 'https://crypto-chatapp.onrender.com',
        changeOrigin: true,
      },
      '/ws-chat': {
        target: 'https://crypto-chatapp.onrender.com',
        changeOrigin: true,
        ws: true,
      },
    },
  }
})
