import { resolve } from 'path';
import { defineConfig } from 'vite';

/**
 * Bundles src/_js/defaults.js as a single self-executing script,
 * matching the previous Webpack output (no exports, no IE11 target).
 */
export default defineConfig({
  // Vite's "copy public/ into outDir" feature is unused here —
  // static assets are handled by _tasks/copy.js instead.
  publicDir: false,
  build: {
    outDir: resolve(import.meta.dirname, 'public/js'),
    emptyOutDir: false,
    lib: {
      entry: resolve(import.meta.dirname, 'src/_js/defaults.js'),
      name: 'defaults',
      formats: ['iife'],
      fileName: () => 'defaults.js'
    }
  }
});
