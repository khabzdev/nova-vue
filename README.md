# Nova Vue

A modern Vue 3 component library built with Reka UI primitives and Tailwind CSS v4

[![npm version](https://img.shields.io/npm/v/@nova-vue/ui?color=blue)](https://www.npmjs.com/package/@nova-vue/ui)
[![npm downloads](https://img.shields.io/npm/dm/@nova-vue/ui)](https://www.npmjs.com/package/@nova-vue/ui)
[![license](https://img.shields.io/npm/l/@nova-vue/ui)](https://github.com/khabzdev/nova-vue/blob/main/LICENSE)

## Features

- **40+ Components** - Comprehensive set of UI components for building modern web applications
- **Accessible** - Built on [Reka UI](https://reka-ui.com) primitives with full WAI-ARIA compliance
- **Beautifully Designed** - Polished styling following COSS UI conventions
- **Dark Mode** - First-class dark mode support out of the box
- **Animations** - Smooth animations powered by [Motion Vue](https://motion.vuejs.org)
- **TypeScript** - Full TypeScript support with exported types
- **Tree-shakeable** - Import only what you need with per-component exports
- **Customizable** - Easily customize with Tailwind CSS and CSS variables

## Installation

```bash
# npm
npm install @nova-vue/ui

# pnpm
pnpm add @nova-vue/ui

# bun
bun add @nova-vue/ui
```

## Quick Start

1. **Import the styles** in your main entry file:

```ts
// main.ts
import '@nova-vue/ui/styles.css'
```

2. **Use components** in your Vue files:

```vue
<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@nova-vue/ui/dialog'
</script>

<template>
  <Dialog>
    <DialogTrigger>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <h2>Hello World</h2>
      <p>This is a dialog powered by Nova Vue.</p>
    </DialogContent>
  </Dialog>
</template>
```

## Components

| Category | Components |
|----------|------------|
| **Layout** | AspectRatio, Card, Separator, Splitter |
| **Forms** | Autocomplete, Checkbox, Input, InputGroup, Label, RadioGroup, Select, Slider, Switch, Textarea, Toggle, ToggleGroup |
| **Data Display** | Accordion, Avatar, Badge, Kbd, Skeleton, Tabs, Tree |
| **Feedback** | Alert, Dialog, Drawer, Sheet, Toast, Tooltip |
| **Navigation** | Command, ContextMenu, DropdownMenu, HoverCard, Menubar, NavigationMenu, Pagination, Popover |
| **Overlay** | Dialog, Drawer, Sheet, Popover, Tooltip |
| **Utilities** | Listbox, ScrollArea |

## Theming

Nova Vue supports multiple color themes via the `@nova-vue/colors` package:

```bash
pnpm add @nova-vue/colors
```

```ts
// Use a different color theme
import '@nova-vue/colors/rose.css'  // or blue, green, orange, yellow, violet, red
```

Available themes: `default`, `blue`, `green`, `red`, `rose`, `orange`, `yellow`, `violet`

## Documentation

Visit our [documentation site](https://nova-vue.vercel.app) for:

- Component API references
- Interactive examples
- Theming guide
- Best practices

## Packages

| Package | Description | Version |
|---------|-------------|---------|
| [@nova-vue/ui](./packages/ui) | Core component library | ![npm](https://img.shields.io/npm/v/@nova-vue/ui) |
| [@nova-vue/colors](./packages/colors) | Color themes | ![npm](https://img.shields.io/npm/v/@nova-vue/colors) |

## Tech Stack

- [Vue 3.5+](https://vuejs.org/) - Progressive JavaScript framework
- [Reka UI](https://reka-ui.com/) - Accessible component primitives
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [Motion Vue](https://motion.vuejs.org/) - Animation library
- [class-variance-authority](https://cva.style/) - Variant management
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Development

This is a monorepo managed with [pnpm](https://pnpm.io/) and [Turborepo](https://turbo.build/).

```bash
# Clone the repository
git clone https://github.com/khabzdev/nova-vue.git
cd nova-vue

# Install dependencies
pnpm install

# Start development
pnpm dev

# Build all packages
pnpm build

# Run the playground
pnpm playground
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## License

[MIT](./LICENSE) © Ndivhuwo Khabubu
