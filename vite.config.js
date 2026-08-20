import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Enable Fast Refresh
      fastRefresh: true
    }),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    // Enable minification with esbuild (faster and built-in)
    minify: 'esbuild',
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes('node_modules')) {
            return
          }

          if (id.includes('node_modules/@vercel')) {
            return 'vendor-analytics'
          }

          // Admin-only libraries. These are reachable ONLY through the lazy
          // admin routes in App.jsx, so splitting them out cannot create the
          // React/Recharts cross-initialization cycle that forced everything
          // into one chunk before — nothing on a public page imports them.
          // Together they were ~1MB of dead weight on every public pageview.
          if (
            id.includes('node_modules/@tiptap') ||
            id.includes('node_modules/prosemirror') ||
            id.includes('node_modules/lowlight') ||
            id.includes('node_modules/highlight.js') ||
            id.includes('node_modules/refractor')
          ) {
            return 'vendor-editor'
          }

          if (id.includes('node_modules/recharts')) {
            return 'vendor-charts'
          }

          // force-graph and its full helper set. The helpers must be listed
          // explicitly: leaving one (float-tooltip) unmatched dropped it into
          // the shared vendor chunk, from where it imported d3 and created a
          // `vendor -> vendor-dataviz -> vendor` cycle.
          if (
            /node_modules\/(react-force-graph|react-kapsule|force-graph|kapsule|float-tooltip|accessor-fn|bezier-js|canvas-color-tracker|index-array-by|@tweenjs)/.test(id)
          ) {
            return 'vendor-graph'
          }

          // d3 (+ victory-vendor, Recharts' d3 wrapper) is used only by the two
          // lazy chunks above, never by a public page — so it gets its own leaf
          // chunk rather than riding along in vendor on every pageview.
          if (id.includes('node_modules/d3-') || id.includes('node_modules/victory-vendor')) {
            return 'vendor-dataviz'
          }

          // Everything else stays in one shared vendor chunk, deliberately:
          // splitting React away from its consumers reintroduces the startup
          // cycle this config previously worked around.
          return 'vendor'
        },
        // Optimize asset file names
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').pop();
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          }
          if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize asset inline limit
    assetsInlineLimit: 4096,
  },
  server: {
    historyApiFallback: true,
    compress: true,
    // Proxy /api to vercel dev (run: vercel dev --listen 3001).
    // If vercel dev isn't running, swallow the connection errors so the
    // terminal stays clean — the frontend already handles fetch failures.
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        configure: (proxy) => {
          proxy.on('error', () => { /* vercel dev offline — silent */ })
        },
      },
    },
  },
  // Optimize deps
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'lucide-react'
    ],
    exclude: ['@vercel/analytics', '@vercel/speed-insights']
  }
})
