<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Button</h1>
      <p>Interactive button element with multiple variants and sizes.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Variants" :code="variantsCode">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </ComponentPreview>

    <ComponentPreview title="Sizes" :code="sizesCode">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </ComponentPreview>

    <ComponentPreview title="With Icon" :code="iconCode">
      <Button>
        <Icon name="hugeicons:add-01" class="size-4" />
        Add item
      </Button>
      <Button variant="outline">
        <Icon name="hugeicons:download-04" class="size-4" />
        Download
      </Button>
      <Button size="icon" variant="outline">
        <Icon name="hugeicons:settings-02" class="size-4" />
      </Button>
    </ComponentPreview>

    <ComponentPreview title="Loading State" :code="loadingCode">
      <Button :loading="true">Loading...</Button>
      <Button :loading="true" variant="outline">Processing</Button>
    </ComponentPreview>

    <ComponentPreview title="Disabled" :code="disabledCode">
      <Button disabled>Disabled</Button>
      <Button variant="outline" disabled>Disabled</Button>
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
          <td>Button style variant</td>
        </tr>
        <tr>
          <td><code>size</code></td>
          <td><code>string</code></td>
          <td><code>'default'</code></td>
          <td>Button size</td>
        </tr>
        <tr>
          <td><code>loading</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Show loading spinner</td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Disable the button</td>
        </tr>
        <tr>
          <td><code>asChild</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Render as child element</td>
        </tr>
      </tbody>
    </table>

    <h3>Variant Options</h3>

    <ul>
      <li><code>default</code> - Primary action button</li>
      <li><code>secondary</code> - Secondary action button</li>
      <li><code>outline</code> - Outlined button</li>
      <li><code>ghost</code> - Minimal styling</li>
      <li><code>destructive</code> - Destructive action</li>
      <li><code>link</code> - Link-styled button</li>
    </ul>

    <h3>Size Options</h3>

    <ul>
      <li><code>xs</code> - Extra small</li>
      <li><code>sm</code> - Small</li>
      <li><code>default</code> - Default size</li>
      <li><code>lg</code> - Large</li>
      <li><code>xl</code> - Extra large</li>
      <li><code>icon</code> - Square icon button</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'

definePageMeta({
  layout: 'default'
})

const variantsCode = `<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>`

const sizesCode = `<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`

const iconCode = `<Button>
  <Icon name="hugeicons:add-01" class="size-4" />
  Add item
</Button>
<Button variant="outline">
  <Icon name="hugeicons:download-04" class="size-4" />
  Download
</Button>
<Button size="icon" variant="outline">
  <Icon name="hugeicons:settings-02" class="size-4" />
</Button>`

const loadingCode = `<Button :loading="true">Loading...</Button>
<Button :loading="true" variant="outline">Processing</Button>`

const disabledCode = `<Button disabled>Disabled</Button>
<Button variant="outline" disabled>Disabled</Button>`

const usageCode = '<' + `script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
<` + `/script>

<` + `template>
  <Button>Click me</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost" size="sm">Small Ghost</Button>
</` + `template>`
</script>
