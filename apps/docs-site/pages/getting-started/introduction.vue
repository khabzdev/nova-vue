<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Introduction</h1>
      <p>A modern, accessible Vue 3 component library built with Reka UI and Tailwind CSS.</p>
    </div>

    <p>
      <strong>Nova Vue</strong> provides a set of beautifully designed, accessible components 
      that you can use to build modern web applications with Vue 3.
    </p>

    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-card-icon">
          <Icon name="hugeicons:paint-board" class="w-5 h-5" />
        </div>
        <h3>Beautifully Designed</h3>
        <p>Clean, modern UI components following best practices in design.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">
          <Icon name="hugeicons:wheelchair" class="w-5 h-5" />
        </div>
        <h3>Accessible</h3>
        <p>Built on Reka UI primitives with full WAI-ARIA compliance.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">
          <Icon name="hugeicons:code" class="w-5 h-5" />
        </div>
        <h3>TypeScript First</h3>
        <p>Complete type definitions for all components and props.</p>
      </div>

      <div class="feature-card">
        <div class="feature-card-icon">
          <Icon name="hugeicons:moon-02" class="w-5 h-5" />
        </div>
        <h3>Dark Mode</h3>
        <p>Built-in light and dark theme support out of the box.</p>
      </div>
    </div>

    <h2>Quick Start</h2>

    <p>Get started by installing the package:</p>

    <CodeBlock code="pnpm add @nova-vue/ui" lang="bash" />

    <p>Import the styles in your main entry file:</p>

    <CodeBlock code="import '@nova-vue/ui/styles.css'" lang="typescript" />

    <p>Then import and use components:</p>

    <CodeBlock :code="usageExample" lang="vue" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})

const usageExample = '<' + `script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
<` + `/script>

<` + `template>
  <Button>Click me</Button>
</` + `template>`
</script>
