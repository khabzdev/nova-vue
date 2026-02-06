# Vue 3 Starter Template

A modern Vue 3 starter template built with Nova Vue, Tailwind CSS, and Vue Router.

## Features

- **Vue 3** - Composition API with `<script setup>`
- **Nova Vue** - Beautiful, accessible components
- **Tailwind CSS v4** - Utility-first styling
- **Vue Router** - Client-side routing
- **TypeScript** - Full type safety
- **Dark Mode** - Built-in theme switching
- **Responsive Layout** - Sidebar + header layout

## Project Structure

```
src/
├── components/
│   ├── AppSidebar.vue    # Navigation sidebar
│   └── AppHeader.vue     # Top header with search & user menu
├── pages/
│   ├── Dashboard.vue     # Dashboard page with stats & overview
│   └── Settings.vue      # Settings page with tabs
├── App.vue               # Root component with layout
├── main.ts               # App entry point with router
└── style.css             # Global styles
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Customization

### Changing Colors

Import a color theme from `@novavue/colors`:

```typescript
// main.ts
import '@novavue/ui/styles.css'
import '@novavue/colors/blue.css'  // Add your preferred color
import './style.css'
```

Available themes: `blue`, `green`, `red`, `rose`, `orange`, `yellow`, `violet`

### Adding Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/main.ts`:

```typescript
import NewPage from './pages/NewPage.vue'

const router = createRouter({
  routes: [
    // ...existing routes
    { path: '/new-page', name: 'new-page', component: NewPage },
  ],
})
```

3. Add navigation link in `src/components/AppSidebar.vue`

### Customizing Layout

- **Sidebar**: Edit `src/components/AppSidebar.vue`
- **Header**: Edit `src/components/AppHeader.vue`
- **Layout Structure**: Edit `src/App.vue`

## Learn More

- [Nova Vue Documentation](https://Nova-ui.dev)
- [Vue 3 Documentation](https://vuejs.org)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vue Router Documentation](https://router.vuejs.org)
