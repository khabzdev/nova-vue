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
        'aspect-ratio': resolve(__dirname, 'src/components/AspectRatio/index.ts'),
        autocomplete: resolve(__dirname, 'src/components/Autocomplete/index.ts'),
        avatar: resolve(__dirname, 'src/components/Avatar/index.ts'),
        badge: resolve(__dirname, 'src/components/Badge/index.ts'),
        button: resolve(__dirname, 'src/components/Button/index.ts'),
        card: resolve(__dirname, 'src/components/Card/index.ts'),
        checkbox: resolve(__dirname, 'src/components/Checkbox/index.ts'),
        command: resolve(__dirname, 'src/components/Command/index.ts'),
        'context-menu': resolve(__dirname, 'src/components/ContextMenu/index.ts'),
        dialog: resolve(__dirname, 'src/components/Dialog/index.ts'),
        'dropdown-menu': resolve(__dirname, 'src/components/DropdownMenu/index.ts'),
        'hover-card': resolve(__dirname, 'src/components/HoverCard/index.ts'),
        input: resolve(__dirname, 'src/components/Input/index.ts'),
        'input-group': resolve(__dirname, 'src/components/InputGroup/index.ts'),
        kbd: resolve(__dirname, 'src/components/Kbd/index.ts'),
        label: resolve(__dirname, 'src/components/Label/index.ts'),
        listbox: resolve(__dirname, 'src/components/Listbox/index.ts'),
        menubar: resolve(__dirname, 'src/components/Menubar/index.ts'),
        'navigation-menu': resolve(__dirname, 'src/components/NavigationMenu/index.ts'),
        pagination: resolve(__dirname, 'src/components/Pagination/index.ts'),
        popover: resolve(__dirname, 'src/components/Popover/index.ts'),
        'radio-group': resolve(__dirname, 'src/components/RadioGroup/index.ts'),
        'scroll-area': resolve(__dirname, 'src/components/ScrollArea/index.ts'),
        select: resolve(__dirname, 'src/components/Select/index.ts'),
        separator: resolve(__dirname, 'src/components/Separator/index.ts'),
        slider: resolve(__dirname, 'src/components/Slider/index.ts'),
        splitter: resolve(__dirname, 'src/components/Splitter/index.ts'),
        switch: resolve(__dirname, 'src/components/Switch/index.ts'),
        tabs: resolve(__dirname, 'src/components/Tabs/index.ts'),
        textarea: resolve(__dirname, 'src/components/Textarea/index.ts'),
        toast: resolve(__dirname, 'src/components/Toast/index.ts'),
        toggle: resolve(__dirname, 'src/components/Toggle/index.ts'),
        'toggle-group': resolve(__dirname, 'src/components/ToggleGroup/index.ts'),
        tooltip: resolve(__dirname, 'src/components/Tooltip/index.ts'),
        tree: resolve(__dirname, 'src/components/Tree/index.ts'),
        utils: resolve(__dirname, 'src/utils/index.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', 'reka-ui', 'motion-v', '@iconify/vue'],
      output: {
        globals: {
          vue: 'Vue',
          'reka-ui': 'RekaUI',
          'motion-v': 'MotionV',
          '@iconify/vue': 'IconifyVue',
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
