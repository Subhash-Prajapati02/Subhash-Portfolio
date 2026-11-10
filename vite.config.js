// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 5173,
//     open: true
//   },
//   build: {
//     outDir: 'dist'
//   }
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: '/Subhash-Portfolio/',

  server: {
    port: 5173,
    open: true
  },

  build: {
    outDir: 'dist'
  }
})
