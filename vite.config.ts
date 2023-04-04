import { defineConfig } from 'vite'

export default defineConfig({
  esbuild: {
    treeShaking: true
  },
  define: {
    global: 'globalThis'
  },
  build: {
    target: 'esnext',
    emptyOutDir: true,
    rollupOptions: {
      treeshake: true
    },
    commonjsOptions: {
      strictRequires: true
    }
  }
})
