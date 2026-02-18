import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Rebote Labs',
        short_name: 'Rebote',
        theme_color: '#020617',
        icons: [
          { src: 'logo.svg', sizes: '192x192', type: 'image/svg+xml' },
          { src: 'logo.svg', sizes: '512x512', type: 'image/svg+xml' }
        ]
      }
    })
  ],
  server: {
    host: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
})
