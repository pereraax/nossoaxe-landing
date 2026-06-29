import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

const pwaPlugin = VitePWA({
  registerType: 'autoUpdate',
  includeAssets: [
    'favicon.svg',
    'apple-touch-icon.png',
    'pwa-192x192.png',
    'pwa-512x512.png',
    'pwa-maskable-512x512.png',
    'images/logo-nossoaxe.png',
  ],
  manifest: {
    name: 'Kit Guia Prático de Ebós e Banhos | NossoAxé',
    short_name: 'NossoAxé',
    description:
      'Kit digital com ebós, banhos, ervas e defumações — conteúdo organizado para consulta rápida.',
    theme_color: '#214332',
    background_color: '#F8F3EA',
    display: 'standalone',
    orientation: 'portrait-primary',
    scope: '/',
    start_url: '/',
    lang: 'pt-BR',
    dir: 'ltr',
    categories: ['education', 'lifestyle'],
    icons: [
      { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
      {
        src: 'pwa-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  },
  workbox: {
    globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff,woff2}'],
    maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
    globIgnores: [
      '**/Design sem nome*.png',
      '**/ChatGPT*.png',
      '**/1.png',
      '**/2.png',
      '**/ervas png.png',
      '**/images/icons/1.png',
      '**/images/icons/2.png',
      '**/images/icons/3.png',
      '**/images/icons/4.png',
      '**/images/icons/5.png',
      '**/images/icons/6.png',
      '**/images/hero-mockup-kit.png',
    ],
    navigateFallback: '/index.html',
    navigateFallbackDenylist: [/^\/api/],
    runtimeCaching: [
      {
        urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-stylesheets',
          expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
      {
        urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-webfonts',
          expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
          cacheableResponse: { statuses: [0, 200] },
        },
      },
    ],
  },
})

export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), ...(mode === 'production' ? [pwaPlugin] : [])],
}))
