# Lettuce UI Component Library

A Vue 3 component library built with Reka UI primitives, following COSS UI styling conventions.

## Tech Stack

- **Vue 3.5+** with `<script setup>` composition API
- **Reka UI** for accessible primitives (Dialog, Select, etc.)
- **Motion Vue (motion-v)** for animations
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- **class-variance-authority (CVA)** for variant management
- **@iconify/vue** for icons (using Hugeicons icon set)
- **TypeScript** throughout
- **Bun** as package manager and runtime

## Icons (Iconify)

Use the `Icon` component from `@iconify/vue` with Hugeicons icon names:

```vue
<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <Icon icon="hugeicons:arrow-down-01" width="16" height="16" />
  <Icon icon="hugeicons:cancel-01" width="16" height="16" class="opacity-64" />
  <Icon icon="hugeicons:tick-02" width="14" height="14" />
</template>
```

**Props:**
- `icon` - Icon name in format `collection:icon-name` (e.g., `hugeicons:arrow-down-01`)
- `width` / `height` - Icon dimensions in pixels
- `color` - Icon color (default: `currentColor`)

**Common icons used in components:**
- `hugeicons:cancel-01` - Close/X button
- `hugeicons:arrow-down-01` - Dropdown chevrons
- `hugeicons:tick-02` - Checkmarks
- `hugeicons:sidebar-left` - Sidebar toggle

## Component Structure

Every component follows this structure:

```vue
<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { Motion } from 'motion-v'
import { cn } from '@/utils/cn'

const componentVariants = cva(
  [/* base classes */],
  {
    variants: { /* variant definitions */ },
    defaultVariants: { /* defaults */ },
  }
)

export type ComponentVariants = VariantProps<typeof componentVariants>

const props = defineProps({
  variant: {
    type: String as () => ComponentVariants['variant'],
    default: 'default',
  },
  // ... other props
  class: {
    type: String,
    default: '',
  },
})

const { variant, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(componentVariants({ variant: variant.value }), extraClasses.value)
)
</script>

<template>
  <Motion
    tag="element"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </Motion>
</template>
```

## CVA Styling Conventions (COSS UI Style)

### Base Classes Pattern

Use arrays for organizing base classes by category:

```ts
const componentVariants = cva(
  [
    // Layout
    'relative inline-flex items-center justify-center',
    // Typography
    'font-medium text-base sm:text-sm',
    // Shape & border
    'rounded-lg border',
    // Transitions
    'outline-none transition-shadow',
    // Inner radius overlay (for sophisticated borders)
    'before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)]',
    // Touch target for accessibility
    'pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11',
    // Focus states
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
    // Disabled states  
    'disabled:pointer-events-none disabled:opacity-64',
    // SVG styling
    '[&_svg]:-mx-0.5 [&_svg]:pointer-events-none [&_svg]:shrink-0',
    "[&_svg:not([class*='opacity-'])]:opacity-80",
    "[&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4",
  ],
  { variants: {}, defaultVariants: {} }
)
```

### Variant Styling Pattern

Use arrays for complex variants with multiple states:

```ts
variants: {
  variant: {
    // Primary/default - solid background with inset shadows
    default: [
      'border-primary bg-primary text-primary-foreground',
      'shadow-xs shadow-primary/24',
      'not-disabled:inset-shadow-[0_1px_theme(colors.white/16%)]',
      'active:inset-shadow-[0_1px_theme(colors.black/8%)]',
      'disabled:shadow-none active:shadow-none',
      'hover:bg-primary/90',
    ],
    // Outline - transparent with border effects
    outline: [
      'border-input bg-popover text-foreground',
      'shadow-xs/5',
      'not-dark:bg-clip-padding',
      'not-disabled:not-active:before:shadow-[0_1px_theme(colors.black/4%)]',
      'dark:bg-input/32',
      'dark:not-disabled:before:shadow-[0_-1px_theme(colors.white/2%)]',
      'dark:not-disabled:not-active:before:shadow-[0_-1px_theme(colors.white/6%)]',
      'disabled:shadow-none active:shadow-none',
      'hover:bg-accent/50 dark:hover:bg-input/64',
    ],
    // Ghost - minimal styling
    ghost: [
      'border-transparent text-foreground',
      'hover:bg-accent active:bg-accent',
    ],
  },
}
```

### Size Variants Pattern

Include responsive sizing with `sm:` breakpoint for smaller screens:

```ts
size: {
  default: 'h-9 px-[calc(theme(spacing.3)-1px)] sm:h-8',
  xs: [
    'h-7 gap-1 rounded-md px-[calc(theme(spacing.2)-1px)] text-sm sm:h-6 sm:text-xs',
    'before:rounded-[calc(var(--radius-md)-1px)]',
    "[&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5",
  ],
  sm: 'h-8 gap-1.5 px-[calc(theme(spacing[2.5])-1px)] sm:h-7',
  lg: 'h-10 px-[calc(theme(spacing[3.5])-1px)] sm:h-9',
  xl: [
    'h-11 px-[calc(theme(spacing.4)-1px)] text-lg sm:h-10 sm:text-base',
    "[&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-4.5",
  ],
  // Icon sizes
  icon: 'size-9 sm:size-8',
  'icon-xs': [
    'size-7 rounded-md sm:size-6',
    'before:rounded-[calc(var(--radius-md)-1px)]',
  ],
  'icon-sm': 'size-8 sm:size-7',
  'icon-lg': 'size-10 sm:size-9',
  'icon-xl': 'size-11 sm:size-10',
},
```

### Key Styling Utilities

| Pattern | Purpose |
|---------|---------|
| `inset-shadow-[0_1px_theme(colors.white/16%)]` | Inner highlight for depth |
| `shadow-xs shadow-primary/24` | Subtle colored drop shadow |
| `shadow-xs/5` | Very subtle shadow (5% opacity) |
| `not-disabled:` | Apply only when not disabled |
| `not-dark:` | Apply only in light mode |
| `pointer-coarse:` | Touch device target sizing |
| `px-[calc(theme(spacing.3)-1px)]` | Account for border in padding |
| `before:rounded-[calc(var(--radius-lg)-1px)]` | Inner radius matches outer minus border |
| `[&_svg:not([class*='size-'])]:size-4` | Default SVG size unless overridden |

## Motion Vue Animation Patterns

### Interactive Element Animations

```vue
<Motion
  tag="button"
  :class="classes"
  :initial="{ scale: 1 }"
  :while-hover="{ scale: 1.02 }"
  :while-tap="{ scale: 0.96 }"
  :transition="{ type: 'spring', stiffness: 500, damping: 30 }"
>
  <slot />
</Motion>
```

### Dialog/Modal Animations

```vue
<!-- Overlay -->
<Motion
  :initial="{ opacity: 0 }"
  :animate="{ opacity: 1 }"
  :exit="{ opacity: 0 }"
  :transition="{ duration: 0.2 }"
/>

<!-- Content -->
<Motion
  :initial="{ opacity: 0, scale: 0.95, y: -10 }"
  :animate="{ opacity: 1, scale: 1, y: 0 }"
  :exit="{ opacity: 0, scale: 0.95, y: -10 }"
  :transition="{ type: 'spring', stiffness: 300, damping: 24 }"
/>
```

### Select/Dropdown Animations

```vue
<Motion
  :initial="{ opacity: 0, scale: 0.95 }"
  :animate="{ opacity: 1, scale: 1 }"
  :exit="{ opacity: 0, scale: 0.95 }"
  :transition="{ duration: 0.15 }"
/>
```

## Design Tokens

Use CSS custom properties from `styles/index.css`:

```css
/* Core semantic colors */
--background, --foreground
--primary, --primary-foreground
--secondary, --secondary-foreground
--muted, --muted-foreground
--accent, --accent-foreground
--destructive, --destructive-foreground

/* Status colors */
--info, --info-foreground
--success, --success-foreground
--warning, --warning-foreground

/* UI elements */
--border, --input, --ring
--card, --card-foreground
--popover, --popover-foreground

/* Base radius */
--radius: 0.625rem
```

## Dark Mode

Dark mode is class-based using `.dark` class on parent:

```css
@custom-variant dark (&:is(.dark *));
```

Use `dark:` prefix for dark mode overrides:
```ts
'dark:bg-input/32',
'dark:not-disabled:before:shadow-[0_-1px_theme(colors.white/2%)]',
```

## Accessibility

1. **Touch targets**: Use `pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11`
2. **Focus rings**: Always include `focus-visible:ring-2 focus-visible:ring-ring`
3. **Disabled states**: Use `disabled:pointer-events-none disabled:opacity-64`
4. **ARIA labels**: Require `aria-label` for icon-only buttons
5. **Keyboard navigation**: Leverage Reka UI primitives for built-in a11y

## File Organization

```
packages/ui/src/
├── components/
│   ├── Button/
│   │   ├── Button.vue
│   │   └── index.ts        # Named exports
│   ├── Dialog/
│   │   ├── Dialog.vue
│   │   ├── DialogTrigger.vue
│   │   ├── DialogContent.vue
│   │   ├── ...             # Compound components
│   │   └── index.ts
│   └── [Component]/
│       └── ...
├── utils/
│   ├── cn.ts               # clsx + tailwind-merge
│   └── index.ts
├── styles/
│   └── index.css           # Design tokens
└── index.ts                # Main barrel export
```

## Component Exports

Each component folder has an `index.ts`:

```ts
// components/Button/index.ts
export { default as Button } from './Button.vue'
export type { ButtonVariants } from './Button.vue'

// components/Dialog/index.ts (compound)
export { default as Dialog } from './Dialog.vue'
export { default as DialogTrigger } from './DialogTrigger.vue'
export { default as DialogContent } from './DialogContent.vue'
export { default as DialogHeader } from './DialogHeader.vue'
export { default as DialogTitle } from './DialogTitle.vue'
export { default as DialogDescription } from './DialogDescription.vue'
export { default as DialogFooter } from './DialogFooter.vue'
export { default as DialogClose } from './DialogClose.vue'
export { default as DialogOverlay } from './DialogOverlay.vue'
```

## Per-Component Imports

Support tree-shakeable imports via package.json exports:

```json
{
  "exports": {
    ".": { "import": "./dist/index.js", "types": "./dist/index.d.ts" },
    "./button": { "import": "./dist/button.js", "types": "./dist/button.d.ts" },
    "./dialog": { "import": "./dist/dialog.js", "types": "./dist/dialog.d.ts" },
    "./styles.css": "./dist/ui.css"
  }
}
```

Usage:
```ts
import { Button } from '@lettuce/ui/button'
import { Dialog, DialogContent } from '@lettuce/ui/dialog'
import '@lettuce/ui/styles.css'
```

## Creating New Components

1. Create folder: `src/components/[Name]/`
2. Create main component with CVA variants following patterns above
3. For compound components (like Dialog), create sub-components
4. Export from `index.ts` in component folder
5. Add to main `src/index.ts` barrel export
6. Add entry point in `vite.config.ts` for per-component imports
7. Add export path in `package.json`
8. Update playground to showcase all variants

## Checklist for New Components

- [ ] Uses CVA for variants with array-based class organization
- [ ] Includes responsive sizing (`sm:` breakpoint)
- [ ] Has `class` prop that merges with `cn()`
- [ ] Uses Motion Vue for interactive animations
- [ ] Supports dark mode via `dark:` prefix
- [ ] Has proper focus states (`focus-visible:ring-*`)
- [ ] Has accessible touch targets (`pointer-coarse:`)
- [ ] Proper disabled styling (`disabled:opacity-64`)
- [ ] SVG children styled consistently
- [ ] TypeScript types exported
- [ ] Added to component index and main barrel
