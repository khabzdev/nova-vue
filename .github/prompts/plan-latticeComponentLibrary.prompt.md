## Plan: Vue 3 Component Library with Reka UI (Updated)

Build a clean, TypeScript-first Vue 3 component library using Reka UI primitives, Motion Vue animations, and Bun as the runtime. OXC linter ensures fast, strict code quality.

**Stack**: Vue 3 + TypeScript + Reka UI + Motion Vue + Tailwind CSS v4 + CVA + OXLint + Bun + Vite

**Steps**

1. **Initialize project with Bun**
   - Run `bun init` to create base project
   - Create `bunfig.toml` for Bun configuration
   - Set up monorepo structure with `packages/ui/` for the component library

2. **Configure TypeScript strictly**
   - Create root `tsconfig.json` with strict mode, ES2020 target, bundler module resolution
   - Add `@/*` path aliases for clean imports
   - Include `bun-types` for Bun-specific types

3. **Install dependencies**
   - Core: `vue@^3.4`, `reka-ui@^2.8`, `motion-v`
   - Styling: `tailwindcss@^4`, `class-variance-authority`, `clsx`, `tailwind-merge`
   - Build: `vite`, `@vitejs/plugin-vue`, `vue-tsc`, `@tailwindcss/postcss`
   - Linting: `oxlint`

4. **Configure OXLint**
   - Create `.oxlintrc.json` with TypeScript plugin enabled
   - Set `correctness: error`, `suspicious: warn` categories
   - Add Vue file overrides for `<script>` block linting
   - Add `lint` and `lint:fix` scripts to package.json

5. **Set up Vite library build**
   - Configure `vite.config.ts` for library mode with ES/CJS outputs
   - External `vue`, `reka-ui`, and `motion-v` as peer dependencies
   - Enable CSS extraction

6. **Create utility layer**
   - `src/utils/cn.ts` — class merging utility using `clsx` + `tailwind-merge`
   - `src/utils/animations.ts` — reusable animation presets (fade, scaleSpring, slideUp, popover)
   - CSS variables file for theming (light/dark mode support)

7. **Build Button component (no Reka dependency)**
   - Create `src/components/Button/Button.vue` with CVA variants (default, destructive, outline, ghost)
   - Define size variants (sm, default, lg)
   - Add `whileHover` and `whilePress` Motion animations for micro-interactions
   - Export via barrel file `index.ts`

8. **Build Dialog component (Reka + Motion Vue)**
   - Create compound components: `Dialog.vue`, `DialogTrigger.vue`, `DialogContent.vue`, `DialogHeader.vue`, `DialogTitle.vue`, `DialogDescription.vue`, `DialogFooter.vue`, `DialogClose.vue`, `DialogOverlay.vue`
   - Wrap Reka primitives with `<Motion>` using `as-child` pattern
   - Use `<AnimatePresence multiple>` for overlay + content exit animations
   - Apply `scaleSpring` preset for content, `fade` preset for overlay
   - Forward all Reka props via `useForwardProps`

9. **Build Select component (Reka + Motion Vue)**
   - Create compound components: `Select.vue`, `SelectTrigger.vue`, `SelectContent.vue`, `SelectItem.vue`, `SelectValue.vue`, `SelectGroup.vue`, `SelectLabel.vue`, `SelectSeparator.vue`
   - Animate dropdown with `popover` preset using `<AnimatePresence>`
   - Add chevron icon with rotation animation on open state
   - Full keyboard navigation inherited from Reka

10. **Create main entry point**
    - `src/index.ts` exports all components, utilities, and animation presets
    - Named exports for tree-shaking

11. **Set up package.json exports**
    - Configure `exports` field for ESM/CJS/types
    - Add `styles.css` export for Tailwind base styles
    - Define peer dependencies: `vue ^3.4`, `reka-ui ^2.8`, `motion-v`

**Project Structure**
```
lattice/
├── packages/ui/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button/
│   │   │   │   ├── Button.vue
│   │   │   │   └── index.ts
│   │   │   ├── Dialog/
│   │   │   │   ├── Dialog.vue
│   │   │   │   ├── DialogContent.vue
│   │   │   │   ├── DialogOverlay.vue
│   │   │   │   ├── DialogTrigger.vue
│   │   │   │   ├── DialogHeader.vue
│   │   │   │   ├── DialogTitle.vue
│   │   │   │   ├── DialogDescription.vue
│   │   │   │   ├── DialogFooter.vue
│   │   │   │   ├── DialogClose.vue
│   │   │   │   └── index.ts
│   │   │   ├── Select/
│   │   │   │   ├── Select.vue
│   │   │   │   ├── SelectTrigger.vue
│   │   │   │   ├── SelectContent.vue
│   │   │   │   ├── SelectItem.vue
│   │   │   │   ├── SelectValue.vue
│   │   │   │   ├── SelectGroup.vue
│   │   │   │   ├── SelectLabel.vue
│   │   │   │   ├── SelectSeparator.vue
│   │   │   │   └── index.ts
│   │   │   └── index.ts
│   │   ├── utils/
│   │   │   ├── cn.ts
│   │   │   └── animations.ts
│   │   ├── styles/
│   │   │   └── index.css
│   │   └── index.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── .oxlintrc.json
├── package.json
├── bunfig.toml
└── tsconfig.json
```

**Verification**
- Run `bun install` — dependencies resolve without errors
- Run `bun run lint` — oxlint passes with no errors
- Run `bun run build` — produces `dist/index.js`, `dist/index.cjs`, `dist/index.d.ts`, `dist/styles.css`
- Run `bun run type-check` — no TypeScript errors
- Import components in a test Vue app and verify:
  - Button renders with hover/press animations
  - Dialog opens/closes with spring animations, overlay fades
  - Select dropdown animates in/out smoothly

**Decisions**
- **OXLint over ESLint**: 50-100x faster, native TypeScript support, simpler config
- **Motion Vue for animations**: Officially recommended for Reka UI, declarative API, exit animations via `AnimatePresence`
- **Animation presets centralized**: Consistent motion language across all components
- **`motion-v` as peer dependency**: Consumers may want to use it directly, avoids bundling twice
