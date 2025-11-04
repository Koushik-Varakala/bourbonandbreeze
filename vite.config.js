import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // Fix JSON overlay crash
  server: {
    hmr: {
      overlay: true // set false if you don't want error popup
    }
  },

  // Optional path alias support
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
