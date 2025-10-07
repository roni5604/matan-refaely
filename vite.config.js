// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// חשוב: ודא שה-base תואם לשם הריפו שלך ב-GitHub Pages
// במקרה שלך: https://roni5604.github.io/matan-refaely/
export default defineConfig({
  base: '/matan-refaely/',
  plugins: [react()],

  // (רשות) נוחות בפיתוח מקומי — אפשר להשאיר או להסיר
  server: {
    port: 5173,
    open: true,
    // אם אי פעם תרצה לכבות את שכבת השגיאות הצפה של Vite:
    // hmr: { overlay: false },
  },

  // (רשות) Build נקי וברור
  build: {
    sourcemap: false,
    outDir: 'dist',
  },
})
