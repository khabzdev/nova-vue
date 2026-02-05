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
        alert: resolve(__dirname, 'src/components/Alert/index.ts'),
        avatar: resolve(__dirname, 'src/components/Avatar/index.ts'),
        badge: resolve(__dirname, 'src/components/Badge/index.ts'),
        button: resolve(__dirname, 'src/components/Button/index.ts'),
        card: resolve(__dirname, 'src/components/Card/index.ts'),
        checkbox: resolve(__dirname, 'src/components/Checkbox/index.ts'),
        dialog: resolve(__dirname, 'src/components/Dialog/index.ts'),
        input: resolve(__dirname, 'src/components/Input/index.ts'),
        'input-group': resolve(__dirname, 'src/components/InputGroup/index.ts'),
        label: resolve(__dirname, 'src/components/Label/index.ts'),
        'navigation-menu': resolve(__dirname, 'src/components/NavigationMenu/index.ts'),
        popover: resolve(__dirname, 'src/components/Popover/index.ts'),
        'scroll-area': resolve(__dirname, 'src/components/ScrollArea/index.ts'),
        select: resolve(__dirname, 'src/components/Select/index.ts'),
        separator: resolve(__dirname, 'src/components/Separator/index.ts'),
        slider: resolve(__dirname, 'src/components/Slider/index.ts'),
        switch: resolve(__dirname, 'src/components/Switch/index.ts'),
        tabs: resolve(__dirname, 'src/components/Tabs/index.ts'),
        textarea: resolve(__dirname, 'src/components/Textarea/index.ts'),
        toast: resolve(__dirname, 'src/components/Toast/index.ts'),
        tooltip: resolve(__dirname, 'src/components/Tooltip/index.ts'),
        utils: resolve(__dirname, 'src/utils/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', 'reka-ui', 'motion-v', '@hugeicons/vue', '@hugeicons/core-free-icons'],
      output: {
        globals: {
          vue: 'Vue',
          'reka-ui': 'RekaUI',
          'motion-v': 'MotionV',
          '@hugeicons/vue': 'HugeiconsVue',
          '@hugeicons/core-free-icons': 'HugeiconsCoreFreeIcons',
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
