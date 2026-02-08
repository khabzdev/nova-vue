# Contributing to Nova Vue

Thank you for your interest in contributing to Nova Vue! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and considerate in all interactions. We are committed to providing a welcoming and inclusive environment for everyone.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/) 10+
- [Git](https://git-scm.com/)

### Setup

1. **Fork the repository** on GitHub

2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/nova-vue.git
   cd nova-vue
   ```

3. **Install dependencies**:
   ```bash
   pnpm install
   ```

4. **Start development**:
   ```bash
   pnpm dev
   ```

## Project Structure

```
nova-vue/
├── apps/
│   ├── docs-site/        # Documentation website (Nuxt)
│   └── playground/       # Component playground (Vite)
├── packages/
│   ├── ui/               # Core component library
│   │   ├── src/
│   │   │   ├── components/   # Vue components
│   │   │   ├── styles/       # CSS styles
│   │   │   └── utils/        # Utility functions
│   │   └── package.json
│   └── colors/           # Color themes
│       ├── src/          # Theme CSS files
│       └── package.json
├── turbo.json            # Turborepo configuration
├── pnpm-workspace.yaml   # pnpm workspace configuration
└── package.json          # Root package.json
```

## Development Workflow

### Creating a New Component

1. **Create the component folder**:
   ```
   packages/ui/src/components/ComponentName/
   ├── ComponentName.vue       # Main component
   ├── ComponentPart.vue       # Sub-components (if compound)
   └── index.ts                # Exports
   ```

2. **Follow the component structure** from [Claude.md](./Claude.md):
   - Use `<script setup lang="ts">` composition API
   - Use CVA for variants with array-based class organization
   - Include responsive sizing (`sm:` breakpoint)
   - Support dark mode via `dark:` prefix
   - Add proper focus states and accessibility

3. **Export the component**:
   ```ts
   // packages/ui/src/components/ComponentName/index.ts
   export { default as ComponentName } from './ComponentName.vue'
   ```

4. **Add to barrel export**:
   ```ts
   // packages/ui/src/components/index.ts
   export * from './ComponentName'
   ```

5. **Add entry point** in `packages/ui/vite.config.ts`

6. **Add package export** in `packages/ui/package.json`

7. **Create documentation** in `apps/docs-site/pages/components/`

8. **Update sidebar** in `apps/docs-site/components/DocsSidebar.vue`

### Component Checklist

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
- [ ] Documentation page created
- [ ] Sidebar link added

### Running Tests

```bash
# Lint code
pnpm lint

# Fix lint issues
pnpm lint:fix

# Type check
pnpm type-check

# Build all packages
pnpm build
```

### Running the Playground

```bash
pnpm playground
```

This starts a Vite dev server where you can test components interactively.

### Running the Documentation Site

```bash
cd apps/docs-site
pnpm dev
```

## Submitting Changes

### Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): description

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(button): add loading state variant
fix(dialog): correct focus trap behavior
docs(readme): update installation instructions
```

### Pull Request Process

1. **Create a branch** from `main`:
   ```bash
   git checkout -b feat/my-feature
   ```

2. **Make your changes** and commit them

3. **Push to your fork**:
   ```bash
   git push origin feat/my-feature
   ```

4. **Open a Pull Request** on GitHub

5. **Fill out the PR template** with:
   - Description of changes
   - Related issues
   - Screenshots (for UI changes)
   - Testing performed

6. **Wait for review** and address any feedback

### PR Requirements

- All checks must pass (lint, type-check, build)
- Code follows the project conventions
- Documentation is updated if needed
- Changes are tested in the playground

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

1. **Description** - Clear description of the bug
2. **Steps to Reproduce** - How to reproduce the issue
3. **Expected Behavior** - What should happen
4. **Actual Behavior** - What actually happens
5. **Environment** - Browser, OS, Vue version, etc.
6. **Screenshots** - If applicable

### Feature Requests

When requesting features, please include:

1. **Description** - Clear description of the feature
2. **Use Case** - Why this feature would be useful
3. **Proposed Solution** - How you think it should work
4. **Alternatives** - Other approaches you've considered

## Style Guide

### Vue Components

- Use `<script setup lang="ts">` syntax
- Use `defineProps` with TypeScript types
- Use `computed` for derived state
- Use `toRefs` for prop destructuring with reactivity

### TypeScript

- Enable strict mode
- Export types alongside components
- Use proper type annotations

### CSS/Tailwind

- Use Tailwind utility classes
- Organize classes in arrays by category (layout, typography, etc.)
- Use CSS variables for theming
- Follow COSS UI styling conventions

### File Naming

- Components: `PascalCase.vue`
- Utilities: `camelCase.ts`
- Styles: `kebab-case.css`

## Questions?

If you have questions, feel free to:

- Open an issue for discussion
- Check existing issues and documentation
- Reach out to the maintainers

Thank you for contributing to Nova Vue!
