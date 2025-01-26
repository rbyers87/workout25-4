import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto', // This helps with automatic registration
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,txt}']
      },
      manifest: {
        name: 'Workout Tracker',
        short_name: 'Workout',
        description: 'Your workout tracking application',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icons/icon-192x192.png', // Updated path
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/icons/icon-512x512.png', // Updated path
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      devOptions: {
        enabled: true // Enable for debugging
      }
    })
  ],
  // ... rest of your configuration remains the same
});