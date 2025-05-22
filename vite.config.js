// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, '../../modules/dev/xo_dev_tools/index.js'),
      name: 'XODevTools',
      fileName: 'xo-dev-tools'
    },
    outDir: 'dist',
    rollupOptions: {
      output: {
        globals: {
          // Define browser-safe globals if needed
        }
      }
    }
  }
});

