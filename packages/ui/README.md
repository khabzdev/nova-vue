# @nova-vue/ui

A modern, accessible Vue 3 component library built with [Reka UI](https://reka-ui.com) and [Tailwind CSS v4](https://tailwindcss.com).

## Features

- 🎨 **Beautifully designed** - Clean, modern components following best practices
- ♿ **Accessible** - Built on Reka UI primitives with full WAI-ARIA compliance
- 🎯 **TypeScript first** - Complete type definitions for all components
- 🌗 **Dark mode** - Built-in light/dark theme support
- 🎨 **Themeable** - Customize with CSS variables or use `@nova-vue/colors` presets
- 📦 **Tree-shakeable** - Import only what you need

## Installation

```bash
# npm
npm install @nova-vue/ui

# pnpm
pnpm add @nova-vue/ui

# yarn
yarn add @nova-vue/ui

# bun
bun add @nova-vue/ui
```

## Quick Start

```ts
// main.ts
import { createApp } from 'vue'
import App from './App.vue'

// Import base styles (required)
import '@nova-vue/ui/styles.css'

createApp(App).mount('#app')
```

```vue
<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
</script>

<template>
  <Button>Click me</Button>
</template>
```

## Theming

### Using Color Presets

Install the optional color themes package:

```bash
pnpm add @nova-vue/colors
```

```ts
// main.ts
import '@nova-vue/ui/styles.css'
import '@nova-vue/colors/blue.css' // or red, green, orange, yellow, violet, rose
```

### Custom Theme

Override CSS variables in your stylesheet:

```css
:root {
  --primary: oklch(0.6 0.2 250);
  --primary-foreground: oklch(0.98 0 0);
  --radius: 0.5rem;
}
```

## Components

### Layout
- **AspectRatio** - Maintain consistent width-to-height ratios
- **ScrollArea** - Custom scrollbar styling
- **Separator** - Visual divider between content
- **Splitter** - Resizable panel layouts

### Forms
- **Button** - Primary action element with multiple variants
- **Checkbox** - Toggle selection control
- **Input** - Text input field
- **InputGroup** - Input with prefix/suffix addons
- **Label** - Accessible form labels
- **RadioGroup** - Single selection from options
- **Select** - Dropdown selection
- **Slider** - Range value selection
- **Switch** - Toggle on/off control
- **Textarea** - Multi-line text input

### Data Display
- **Accordion** - Collapsible content sections
- **Avatar** - User profile images with fallback
- **Badge** - Status indicators and labels
- **Card** - Content container with header/footer
- **Table** - Data tables (coming soon)
- **Tree** - Hierarchical tree view

### Feedback
- **Alert** - Contextual feedback messages
- **Dialog** - Modal dialogs
- **HoverCard** - Content on hover
- **Popover** - Floating content panels
- **Toast** - Temporary notifications
- **Tooltip** - Contextual hints

### Navigation
- **ContextMenu** - Right-click menus
- **DropdownMenu** - Action menus
- **Menubar** - Application menu bar
- **NavigationMenu** - Site navigation
- **Pagination** - Page navigation
- **Tabs** - Tabbed content sections

### Toggles
- **Toggle** - Single toggle button
- **ToggleGroup** - Group of toggle buttons

## TypeScript

All components are fully typed. Import types as needed:

```ts
import type { ButtonProps } from '@nova-vue/ui/button'
```

## Documentation

Visit our [Storybook documentation](https://nova-vue-docs.netlify.app) for live examples and API reference.

## License

MIT © [khabzdev](https://github.com/khabzdev)

## Links

- [GitHub Repository](https://github.com/khabzdev/nova-vue)
- [npm Package](https://www.npmjs.com/package/@nova-vue/ui)
- [Report Issues](https://github.com/khabzdev/nova-vue/issues)
