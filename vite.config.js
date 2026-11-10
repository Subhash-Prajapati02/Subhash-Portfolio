import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

/**
 * Custom Vite plugin to generate dist/404.html for GitHub Pages SPA routing.
 * Automatically copies the built dist/index.html to dist/404.html
 * after Vite completes the bundle output.
 */
function githubPagesSpaFallback() {
  return {
    name: 'github-pages-spa-fallback',
    closeBundle() {
      const outDir = path.resolve(__dirname, 'dist')
      const indexPath = path.join(outDir, 'index.html')
      const notFoundPath = path.join(outDir, '404.html')

      if (fs.existsSync(indexPath)) {
        fs.copyFileSync(indexPath, notFoundPath)
        console.log('\n[vite] ✓ Generated dist/404.html from dist/index.html for GitHub Pages SPA fallback.\n')
      }
    }
  }
}

export default defineConfig({
  plugins: [react(), githubPagesSpaFallback()],

  base: '/Subhash-Portfolio/',

  server: {
    port: 5173,
    open: true
  },

  build: {
    outDir: 'dist'
  }
})
