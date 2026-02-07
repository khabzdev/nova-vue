<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Kbd</h1>
      <p>Display keyboard shortcuts and key combinations.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Kbd>⌘</Kbd>
      <Kbd>K</Kbd>
    </ComponentPreview>

    <ComponentPreview title="Key Combinations" :code="combinationsCode">
      <div class="flex items-center gap-1">
        <Kbd>⌘</Kbd>
        <span class="text-muted-foreground">+</span>
        <Kbd>K</Kbd>
      </div>
      <div class="flex items-center gap-1">
        <Kbd>Ctrl</Kbd>
        <span class="text-muted-foreground">+</span>
        <Kbd>Shift</Kbd>
        <span class="text-muted-foreground">+</span>
        <Kbd>P</Kbd>
      </div>
    </ComponentPreview>

    <ComponentPreview title="Sizes" :code="sizesCode">
      <Kbd size="sm">Esc</Kbd>
      <Kbd>Enter</Kbd>
      <Kbd size="lg">Space</Kbd>
    </ComponentPreview>

    <ComponentPreview title="Common Keys" :code="commonKeysCode">
      <div class="flex flex-wrap gap-2">
        <Kbd>↑</Kbd>
        <Kbd>↓</Kbd>
        <Kbd>←</Kbd>
        <Kbd>→</Kbd>
        <Kbd>⌘</Kbd>
        <Kbd>⌥</Kbd>
        <Kbd>⇧</Kbd>
        <Kbd>⌃</Kbd>
        <Kbd>⏎</Kbd>
        <Kbd>⌫</Kbd>
        <Kbd>⇥</Kbd>
      </div>
    </ComponentPreview>

    <h2>Usage</h2>

    <CodeBlock :code="usageCode" lang="vue" />

    <h2>Props</h2>

    <table class="props-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>size</code></td>
          <td><code>'sm' | 'default' | 'lg'</code></td>
          <td><code>'default'</code></td>
          <td>Size of the kbd element</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Kbd } from '@nova-vue/ui/kbd'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<Kbd>⌘</Kbd>
<Kbd>K</Kbd>`

const combinationsCode = `<div class="flex items-center gap-1">
  <Kbd>⌘</Kbd>
  <span class="text-muted-foreground">+</span>
  <Kbd>K</Kbd>
</div>
<div class="flex items-center gap-1">
  <Kbd>Ctrl</Kbd>
  <span class="text-muted-foreground">+</span>
  <Kbd>Shift</Kbd>
  <span class="text-muted-foreground">+</span>
  <Kbd>P</Kbd>
</div>`

const sizesCode = `<Kbd size="sm">Esc</Kbd>
<Kbd>Enter</Kbd>
<Kbd size="lg">Space</Kbd>`

const commonKeysCode = `<Kbd>↑</Kbd>
<Kbd>↓</Kbd>
<Kbd>←</Kbd>
<Kbd>→</Kbd>
<Kbd>⌘</Kbd>
<Kbd>⌥</Kbd>
<Kbd>⇧</Kbd>
<Kbd>⌃</Kbd>`

const usageCode = '<' + `script setup lang="ts">
import { Kbd } from '@nova-vue/ui/kbd'
<` + `/script>

<` + `template>
  <div class="flex items-center gap-1">
    <Kbd>⌘</Kbd>
    <span>+</span>
    <Kbd>K</Kbd>
  </div>
</` + `template>`
</script>
