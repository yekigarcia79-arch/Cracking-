import { defineConfig } from 'vite';
import { handleDownload } from './download-endpoint.mjs';

// Serves /download/sagacious.exe in dev and preview, matching the production
// route in server.mjs so the progress UI behaves the same everywhere.
function downloadRoute() {
  const mount = (server) => {
    server.middlewares.use('/download/sagacious.exe', (req, res) => {
      handleDownload(req, res);
    });
  };
  return {
    name: 'sagacious-download',
    configureServer: mount,
    configurePreviewServer: mount,
  };
}

export default defineConfig({
  appType: 'spa',
  plugins: [downloadRoute()],
  server: {
    port: 5173,
    strictPort: false,
  },
  preview: {
    port: 4173,
  },
  build: {
    target: 'es2020',
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
        },
      },
    },
  },
});
