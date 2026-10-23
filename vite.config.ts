import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(import.meta.dirname, 'src') } },
  build: {
    target: 'es2022',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router', 'react-helmet-async'],
          gsap: ['gsap', 'gsap/ScrollTrigger', 'gsap/SplitText', 'gsap/DrawSVGPlugin', 'gsap/CustomEase', '@gsap/react', 'lenis'],
          framer: ['motion/react'],
        },
      },
    },
  },
})
