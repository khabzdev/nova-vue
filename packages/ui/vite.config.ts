import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: './tsconfig.json',
      rollupTypes: true,
      outDir: 'dist',
    }),
  ],
  css: {
    postcss: {
      plugins: [
        (await import('@tailwindcss/postcss')).default,
      ],
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        accordion: resolve(__dirname, 'src/components/Accordion/index.ts'),
        button: resolve(__dirname, 'src/components/Button/index.ts'),
        dialog: resolve(__dirname, 'src/components/Dialog/index.ts'),
        input: resolve(__dirname, 'src/components/Input/index.ts'),
        select: resolve(__dirname, 'src/components/Select/index.ts'),
        utils: resolve(__dirname, 'src/utils/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', 'reka-ui', 'motion-v'],
      output: {
        globals: {
          vue: 'Vue',
          'reka-ui': 'RekaUI',
          'motion-v': 'MotionV',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'styles.css'
          return assetInfo.name ?? 'asset'
        },
      },
    },
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
