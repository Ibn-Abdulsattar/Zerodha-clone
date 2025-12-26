import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom/client',
      'react-router-dom',
      'chart.js',
      'react-chartjs-2',
    ],
    force: true,
  },
  server: {
    watch: { usePolling: true },
  },
});
