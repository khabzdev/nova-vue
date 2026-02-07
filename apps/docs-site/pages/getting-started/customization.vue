<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Design Tokens</h1>
      <p>Customize colors, spacing, and visual properties with CSS custom properties.</p>
    </div>

    <h2>Token Architecture</h2>

    <p>Nova Vue uses a two-layer theming approach:</p>

    <ol>
      <li><strong>Semantic tokens</strong> (<code>--primary</code>, <code>--background</code>, etc.) - Define the purpose of a color</li>
      <li><strong>Tailwind mappings</strong> (<code>--color-primary</code>, <code>--color-background</code>, etc.) - Map semantic tokens to Tailwind utilities</li>
    </ol>

    <p>This separation allows you to override just the semantic tokens while keeping all component styles working correctly.</p>

    <h2>Core Tokens Reference</h2>

    <h3>Background &amp; Foreground</h3>
    <table class="props-table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Description</th>
          <th>Light Default</th>
          <th>Dark Default</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--background</code></td>
          <td>Page/app background</td>
          <td>White</td>
          <td>Neutral 950</td>
        </tr>
        <tr>
          <td><code>--foreground</code></td>
          <td>Primary text color</td>
          <td>Neutral 800</td>
          <td>Neutral 100</td>
        </tr>
      </tbody>
    </table>

    <h3>Primary Colors</h3>
    <table class="props-table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Description</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--primary</code></td>
          <td>Main brand color</td>
          <td>Buttons, links, active states</td>
        </tr>
        <tr>
          <td><code>--primary-foreground</code></td>
          <td>Text on primary backgrounds</td>
          <td>Button text</td>
        </tr>
      </tbody>
    </table>

    <h3>Secondary &amp; Accent</h3>
    <table class="props-table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Description</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--secondary</code></td>
          <td>Secondary actions</td>
          <td>Secondary buttons</td>
        </tr>
        <tr>
          <td><code>--secondary-foreground</code></td>
          <td>Text on secondary</td>
          <td>Secondary button text</td>
        </tr>
        <tr>
          <td><code>--accent</code></td>
          <td>Highlighted/hover states</td>
          <td>Menu items, list selections</td>
        </tr>
        <tr>
          <td><code>--accent-foreground</code></td>
          <td>Text on accent backgrounds</td>
          <td>Menu text</td>
        </tr>
      </tbody>
    </table>

    <h3>Status Colors</h3>
    <table class="props-table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--destructive</code></td>
          <td>Error/danger actions</td>
        </tr>
        <tr>
          <td><code>--info</code></td>
          <td>Informational states</td>
        </tr>
        <tr>
          <td><code>--success</code></td>
          <td>Success states</td>
        </tr>
        <tr>
          <td><code>--warning</code></td>
          <td>Warning states</td>
        </tr>
      </tbody>
    </table>

    <h3>UI Elements</h3>
    <table class="props-table">
      <thead>
        <tr>
          <th>Token</th>
          <th>Description</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--border</code></td>
          <td>Default border color</td>
          <td>Inputs, cards, dividers</td>
        </tr>
        <tr>
          <td><code>--input</code></td>
          <td>Input border color</td>
          <td>Form inputs</td>
        </tr>
        <tr>
          <td><code>--ring</code></td>
          <td>Focus ring color</td>
          <td>Focus indicators</td>
        </tr>
        <tr>
          <td><code>--radius</code></td>
          <td>Base border radius</td>
          <td>All rounded corners</td>
        </tr>
      </tbody>
    </table>

    <h2>Overriding Tokens</h2>

    <h3>Method 1: CSS Override (Recommended)</h3>

    <p>Create a CSS file that overrides the tokens after importing the base styles:</p>

    <CodeBlock :code="cssOverrideCode" lang="css" />

    <p>Then import it in your app:</p>

    <CodeBlock :code="importOverrideCode" lang="typescript" />

    <h3>Method 2: Using @nova-vue/colors Presets</h3>

    <p>We provide pre-built color themes that you can import:</p>

    <CodeBlock :code="presetCode" lang="typescript" />

    <p>Available color themes:</p>
    <ul>
      <li><code>@nova-vue/colors/blue.css</code> - Professional blue</li>
      <li><code>@nova-vue/colors/red.css</code> - Bold red</li>
      <li><code>@nova-vue/colors/rose.css</code> - Soft rose/pink</li>
      <li><code>@nova-vue/colors/orange.css</code> - Energetic orange</li>
      <li><code>@nova-vue/colors/yellow.css</code> - Bright yellow</li>
      <li><code>@nova-vue/colors/green.css</code> - Fresh green</li>
      <li><code>@nova-vue/colors/violet.css</code> - Creative violet</li>
    </ul>

    <h3>Method 3: Inline Styles for Dynamic Theming</h3>

    <p>For runtime theme switching, apply tokens via inline styles:</p>

    <CodeBlock :code="inlineStyleCode" lang="vue" />

    <h3>Method 4: Scoped Theming with Data Attributes</h3>

    <p>Apply themes to specific sections using data attributes:</p>

    <CodeBlock :code="dataAttrCssCode" lang="css" />

    <CodeBlock :code="dataAttrVueCode" lang="vue" />

    <h2>Color Format Recommendations</h2>

    <p>We recommend using <strong>OKLCH</strong> colors for the best results:</p>

    <CodeBlock :code="oklchCode" lang="css" />

    <p><strong>Why OKLCH?</strong></p>
    <ul>
      <li>Perceptually uniform - equal steps look equally different</li>
      <li>Predictable color mixing</li>
      <li>Wide gamut support for modern displays</li>
      <li>Native Tailwind CSS v4 color format</li>
    </ul>

    <h2>Dark Mode</h2>

    <p>Nova Vue uses the <code>.dark</code> class for dark mode. Override dark mode tokens in the <code>.dark</code> selector:</p>

    <CodeBlock :code="darkModeCode" lang="css" />

    <p>To toggle dark mode:</p>

    <CodeBlock :code="darkModeToggleCode" lang="typescript" />

    <h2>Best Practices</h2>

    <ol>
      <li><strong>Always provide dark mode variants</strong> - Users expect dark mode support</li>
      <li><strong>Maintain sufficient contrast</strong> - Ensure text is readable on all backgrounds</li>
      <li><strong>Test with real components</strong> - Verify your theme works across all UI states</li>
      <li><strong>Use semantic tokens</strong> - Override <code>--primary</code>, not <code>--color-blue-500</code></li>
      <li><strong>Keep foreground colors appropriate</strong> - Light text on dark backgrounds and vice versa</li>
      <li><strong>Use OKLCH for predictable results</strong> - Especially for programmatic color generation</li>
    </ol>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const cssOverrideCode = `/* your-theme.css */
:root {
  /* Change the primary color to blue */
  --primary: oklch(0.546 0.245 262.881);
  --primary-foreground: white;
  --ring: oklch(0.707 0.165 254.624);
  
  /* Adjust border radius */
  --radius: 0.5rem;
}

.dark {
  /* Dark mode overrides */
  --primary: oklch(0.623 0.214 259.815);
  --primary-foreground: white;
}`

const importOverrideCode = `// main.ts
import '@nova-vue/ui/styles.css'
import './your-theme.css'  // Your overrides come AFTER`

const presetCode = `// main.ts
import '@nova-vue/ui/styles.css'
import '@nova-vue/colors/blue.css'  // or red, green, orange, violet, etc.`

const inlineStyleCode = '<' + `script setup lang="ts">
import { ref } from 'vue'

const theme = ref({
  '--primary': 'oklch(0.546 0.245 262.881)',
  '--primary-foreground': 'white',
})
<` + `/script>

<` + `template>
  <div :style="theme">
    <Button>Themed Button</Button>
  </div>
</` + `template>`

const dataAttrCssCode = `/* Multi-brand theming */
[data-brand="company-a"] {
  --primary: oklch(0.546 0.245 262.881);
  --primary-foreground: white;
}

[data-brand="company-b"] {
  --primary: oklch(0.627 0.194 149.214);
  --primary-foreground: white;
}`

const dataAttrVueCode = '<' + `template>
  <div data-brand="company-a">
    <Button>Company A Style</Button>
  </div>
  
  <div data-brand="company-b">
    <Button>Company B Style</Button>
  </div>
</` + `template>`

const oklchCode = `/* OKLCH format: oklch(lightness chroma hue) */
--primary: oklch(0.546 0.245 262.881);

/* With alpha: oklch(lightness chroma hue / alpha) */
--accent: oklch(0.546 0.245 262.881 / 10%);`

const darkModeCode = `:root {
  --primary: oklch(0.55 0.25 262);
}

.dark {
  --primary: oklch(0.65 0.22 262);
}`

const darkModeToggleCode = `// Toggle dark mode
document.documentElement.classList.toggle('dark')

// Or use a reactive approach in Vue
const isDark = ref(false)
watchEffect(() => {
  document.documentElement.classList.toggle('dark', isDark.value)
})`
</script>
