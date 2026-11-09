import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        showcase: resolve(import.meta.dirname, 'index.html'),
        portable: resolve(import.meta.dirname, 'portable.html'),
      },
    },
  },
});
