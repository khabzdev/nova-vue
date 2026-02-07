<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Toggle</h1>
      <p>Two-state button that can be toggled on or off.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Toggle aria-label="Toggle italic">
        <Icon name="hugeicons:text-italic" class="size-4" />
      </Toggle>
    </ComponentPreview>

    <ComponentPreview title="Variants" :code="variantsCode">
      <Toggle variant="default" aria-label="Toggle bold">
        <Icon name="hugeicons:text-bold" class="size-4" />
      </Toggle>
      <Toggle variant="outline" aria-label="Toggle italic">
        <Icon name="hugeicons:text-italic" class="size-4" />
      </Toggle>
    </ComponentPreview>

    <ComponentPreview title="Sizes" :code="sizesCode">
      <Toggle size="sm" aria-label="Toggle">
        <Icon name="hugeicons:text-bold" class="size-3" />
      </Toggle>
      <Toggle size="default" aria-label="Toggle">
        <Icon name="hugeicons:text-bold" class="size-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Toggle">
        <Icon name="hugeicons:text-bold" class="size-5" />
      </Toggle>
    </ComponentPreview>

    <ComponentPreview title="With Text" :code="textCode">
      <Toggle aria-label="Toggle italic">
        <Icon name="hugeicons:text-italic" class="size-4 mr-2" />
        Italic
      </Toggle>
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
          <td><code>pressed</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Controlled pressed state (v-model:pressed)</td>
        </tr>
        <tr>
          <td><code>defaultPressed</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Initial pressed state</td>
        </tr>
        <tr>
          <td><code>variant</code></td>
          <td><code>string</code></td>
          <td><code>'default'</code></td>
          <td>Visual variant (default, outline)</td>
        </tr>
        <tr>
          <td><code>size</code></td>
          <td><code>string</code></td>
          <td><code>'default'</code></td>
          <td>Toggle size (sm, default, lg)</td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Disable the toggle</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Toggle } from '@nova-vue/ui/toggle'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<Toggle aria-label="Toggle italic">
  <Icon name="hugeicons:text-italic" class="size-4" />
</Toggle>`

const variantsCode = `<Toggle variant="default" aria-label="Bold">
  <Icon name="hugeicons:text-bold" class="size-4" />
</Toggle>
<Toggle variant="outline" aria-label="Italic">
  <Icon name="hugeicons:text-italic" class="size-4" />
</Toggle>`

const sizesCode = `<Toggle size="sm" aria-label="Toggle">
  <Icon name="hugeicons:text-bold" class="size-3" />
</Toggle>
<Toggle size="default" aria-label="Toggle">
  <Icon name="hugeicons:text-bold" class="size-4" />
</Toggle>
<Toggle size="lg" aria-label="Toggle">
  <Icon name="hugeicons:text-bold" class="size-5" />
</Toggle>`

const textCode = `<Toggle aria-label="Toggle italic">
  <Icon name="hugeicons:text-italic" class="size-4 mr-2" />
  Italic
</Toggle>`

const usageCode = '<' + `script setup lang="ts">
import { Toggle } from '@nova-vue/ui/toggle'
<` + `/script>

<` + `template>
  <Toggle aria-label="Toggle bold">
    <Icon name="hugeicons:text-bold" class="size-4" />
  </Toggle>
</` + `template>`
</script>
