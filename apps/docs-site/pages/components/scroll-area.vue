<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Scroll Area</h1>
      <p>Custom scrollable container with styled scrollbar.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <ScrollArea class="h-72 w-full max-w-sm rounded-md border">
        <div class="p-4">
          <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
          <div v-for="tag in tags" :key="tag" class="text-sm py-2">
            {{ tag }}
          </div>
        </div>
      </ScrollArea>
    </ComponentPreview>

    <ComponentPreview title="Horizontal" :code="horizontalCode">
      <ScrollArea class="w-full max-w-lg whitespace-nowrap rounded-md border" orientation="horizontal">
        <div class="flex w-max space-x-4 p-4">
          <div v-for="i in 10" :key="i" class="w-40 shrink-0 rounded-md border p-4">
            <div class="text-sm font-medium">Item {{ i }}</div>
            <div class="text-xs text-muted-foreground">Description {{ i }}</div>
          </div>
        </div>
      </ScrollArea>
    </ComponentPreview>

    <h2>Usage</h2>

    <CodeBlock :code="usageCode" lang="vue" />

    <h2>Components</h2>

    <table class="props-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>ScrollArea</code></td>
          <td>Scrollable container with custom scrollbar</td>
        </tr>

      </tbody>
    </table>

    <h2>Props</h2>

    <h3>ScrollArea</h3>
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
          <td><code>orientation</code></td>
          <td><code>'vertical' | 'horizontal'</code></td>
          <td><code>'vertical'</code></td>
          <td>Scroll direction</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ScrollArea } from '@nova-vue/ui/scroll-area'

definePageMeta({
  layout: 'default'
})

const tags = Array.from({ length: 50 }, (_, i) => `Tag ${i + 1}`)

const defaultCode = `<ScrollArea class="h-72 w-48 rounded-md border">
  <div class="p-4">
    <h4 class="mb-4 text-sm font-medium">Tags</h4>
    <div v-for="tag in tags" :key="tag" class="text-sm py-2">
      {{ tag }}
    </div>
  </div>
</ScrollArea>`

const horizontalCode = `<ScrollArea class="w-96 whitespace-nowrap rounded-md border" orientation="horizontal">
  <div class="flex w-max space-x-4 p-4">
    <div v-for="i in 10" :key="i" class="w-40 shrink-0 rounded-md border p-4">
      Item {{ i }}
    </div>
  </div>
</ScrollArea>`

const usageCode = '<' + `script setup lang="ts">
import { ScrollArea } from '@nova-vue/ui/scroll-area'
<` + `/script>

<` + `template>
  <ScrollArea class="h-72 w-48 rounded-md border">
    <div class="p-4">
      <!-- Scrollable content -->
    </div>
  </ScrollArea>
</` + `template>`
</script>
