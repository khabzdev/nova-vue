# @lettuce/themes

Color themes for Lettuce UI components.

## Installation

```bash
bun add @lettuce/themes
```

## Usage

Import a theme CSS file **after** the main Lettuce UI styles:

```ts
// main.ts
import '@lettuce/ui/styles.css'
import '@lettuce/themes/blue.css' // or any other theme
```

## Available Themes

| Theme | Primary Color | Description |
|-------|--------------|-------------|
| `default.css` | Neutral | Default grayscale theme |
| `red.css` | Red | Bold, attention-grabbing |
| `rose.css` | Rose | Soft, elegant |
| `orange.css` | Orange | Warm, energetic |
| `green.css` | Green | Fresh, natural |
| `blue.css` | Blue | Professional, trustworthy |
| `yellow.css` | Yellow | Bright, optimistic |
| `violet.css` | Violet | Creative, luxurious |

## Dark Mode

All themes automatically support dark mode via the `.dark` class on a parent element.

## Customization

Each theme overrides these CSS custom properties:

- `--primary` / `--primary-foreground`
- `--ring`
- `--accent` / `--accent-foreground`
- `--sidebar-primary` / `--sidebar-primary-foreground`
- `--sidebar-ring`

You can create your own theme by copying any theme file and modifying the color values.
