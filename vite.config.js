// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [],  // ensure '@fortawesome/fontawesome-free/css/all.min.css' is NOT listed here
    }
  }
})
