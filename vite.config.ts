import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/blyablyablya/',
  server: { port: 3000,
    proxy:{
      '/api': 'http://localhost:8080',
    }
    
  },
  plugins: [react()],
})
