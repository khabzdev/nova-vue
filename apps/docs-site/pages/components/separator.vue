<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Separator</h1>
      <p>Visual divider between content sections.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Horizontal" :code="horizontalCode">
      <div class="w-full max-w-md">
        <div class="space-y-1">
          <h4 class="text-sm font-medium leading-none">Nova Vue</h4>
          <p class="text-sm text-muted-foreground">
            An open-source UI component library.
          </p>
        </div>
        <Separator class="my-4" />
        <div class="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" />
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview title="Vertical" :code="verticalCode">
      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>Home</div>
        <Separator orientation="vertical" />
        <div>About</div>
        <Separator orientation="vertical" />
        <div>Contact</div>
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
          <td><code>orientation</code></td>
          <td><code>'horizontal' | 'vertical'</code></td>
          <td><code>'horizontal'</code></td>
          <td>Separator direction</td>
        </tr>
        <tr>
          <td><code>decorative</code></td>
          <td><code>boolean</code></td>
          <td><code>true</code></td>
          <td>Whether purely decorative</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Separator } from '@nova-vue/ui/separator'

definePageMeta({
  layout: 'default'
})

const horizontalCode = `<div class="space-y-1">
  <h4 class="text-sm font-medium">Title</h4>
  <p class="text-sm text-muted-foreground">Description</p>
</div>
<Separator class="my-4" />
<div class="flex items-center space-x-4">
  <div>Item 1</div>
  <Separator orientation="vertical" />
  <div>Item 2</div>
</div>`

const verticalCode = `<div class="flex h-5 items-center space-x-4 text-sm">
  <div>Home</div>
  <Separator orientation="vertical" />
  <div>About</div>
  <Separator orientation="vertical" />
  <div>Contact</div>
</div>`

const usageCode = '<' + `script setup lang="ts">
import { Separator } from '@nova-vue/ui/separator'
<` + `/script>

<` + `template>
  <Separator />
  <Separator orientation="vertical" />
</` + `template>`
</script>
