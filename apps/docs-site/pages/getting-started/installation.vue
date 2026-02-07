<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Installation</h1>
      <p>How to install and set up Nova Vue in your project.</p>
    </div>

    <h2>Requirements</h2>

    <ul>
      <li>Vue 3.5 or higher</li>
      <li>Tailwind CSS v4</li>
    </ul>

    <h2>Install the package</h2>

    <p>Using your preferred package manager:</p>

    <CodeBlock :code="installCode" lang="bash" />

    <h2>Import styles</h2>

    <p>Add the base styles to your application entry point (e.g., <code>main.ts</code>):</p>

    <CodeBlock code="import '@nova-vue/ui/styles.css'" lang="typescript" />

    <h2>Optional: Color themes</h2>

    <p>Install the color themes package for pre-built color palettes:</p>

    <CodeBlock code="pnpm add @nova-vue/colors" lang="bash" />

    <p>Then import a theme after the base styles:</p>

    <CodeBlock :code="colorThemeCode" lang="typescript" />

    <h2>Usage</h2>

    <p>Import components individually for optimal tree-shaking:</p>

    <CodeBlock :code="usageCode" lang="vue" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const installCode = `# npm
npm install @nova-vue/ui

# pnpm
pnpm add @nova-vue/ui

# yarn
yarn add @nova-vue/ui

# bun
bun add @nova-vue/ui`

const colorThemeCode = `import '@nova-vue/ui/styles.css'
import '@nova-vue/colors/blue.css' // or red, green, orange, violet, rose, yellow`

const usageCode = '<' + `script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
import { Input } from '@nova-vue/ui/input'
import { Dialog, DialogContent, DialogTrigger } from '@nova-vue/ui/dialog'
<` + `/script>

<` + `template>
  <Button>Click me</Button>
  <Input placeholder="Type here..." />
</` + `template>`
</script>
