<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Badge</h1>
      <p>Small status indicators for labels and counts.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Variants" :code="variantsCode">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
    </ComponentPreview>

    <ComponentPreview title="Sizes" :code="sizesCode">
      <Badge size="sm">Small</Badge>
      <Badge size="default">Default</Badge>
      <Badge size="lg">Large</Badge>
    </ComponentPreview>

    <ComponentPreview title="With Icon" :code="iconCode">
      <Badge>
        <Icon name="hugeicons:checkmark-circle-02" class="size-3" />
        Verified
      </Badge>
      <Badge variant="destructive">
        <Icon name="hugeicons:alert-02" class="size-3" />
        Error
      </Badge>
      <Badge variant="warning">
        <Icon name="hugeicons:clock-01" class="size-3" />
        Pending
      </Badge>
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
          <td><code>variant</code></td>
          <td><code>string</code></td>
          <td><code>'default'</code></td>
          <td>Badge style variant</td>
        </tr>
        <tr>
          <td><code>size</code></td>
          <td><code>string</code></td>
          <td><code>'default'</code></td>
          <td>Badge size</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Badge } from '@nova-vue/ui/badge'

definePageMeta({
  layout: 'default'
})

const variantsCode = `<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="info">Info</Badge>
<Badge variant="outline">Outline</Badge>`

const sizesCode = `<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>
<Badge size="lg">Large</Badge>`

const iconCode = `<Badge>
  <Icon name="hugeicons:checkmark-circle-02" class="size-3" />
  Verified
</Badge>
<Badge variant="destructive">
  <Icon name="hugeicons:alert-02" class="size-3" />
  Error
</Badge>`

const usageCode = '<' + `script setup lang="ts">
import { Badge } from '@nova-vue/ui/badge'
<` + `/script>

<` + `template>
  <Badge>New</Badge>
  <Badge variant="success">Active</Badge>
</` + `template>`
</script>
