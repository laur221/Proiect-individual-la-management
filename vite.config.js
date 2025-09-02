import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: parseInt(process.env.PORT || '3000'),
    host: '0.0.0.0', // Bind to all network interfaces
    strictPort: false, // Allow falling back to another port if specified port is already in use
  },
  preview: {
    port: parseInt(process.env.PORT || '8080'),
    host: '0.0.0.0',
    allowedHosts: ['edumanager.live']
  }
})
