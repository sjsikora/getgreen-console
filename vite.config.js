import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api/userNameOrEmail': {
        target: "https://api-stg.emeraldtechnology.net/v1/account/userNameOrEmail",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api\/userNameOrEmail/, '')
      }
    }
  }
})
