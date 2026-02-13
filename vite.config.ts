import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Asset yollarını mutlak (absolute) yapar - nested route'larda beyaz ekran sorununu çözer
  build: {
    chunkSizeWarningLimit: 1000, // Uyarı limitini 1MB'a çıkar
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom', 'framer-motion', 'lucide-react'],
        },
      },
    },
  },
})
