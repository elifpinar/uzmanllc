import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    minify: true,
    target: 'es2015',
    cssCodeSplit: true,
    sourcemap: false,
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
  esbuild: {
    drop: ['console', 'debugger'],
  },
}) 