import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Production build için göreceli path kullanımı - beyaz ekran sorununu çözer
})
