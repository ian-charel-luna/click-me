import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Add this

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/click-me/', // Must match your repo name exactly
})