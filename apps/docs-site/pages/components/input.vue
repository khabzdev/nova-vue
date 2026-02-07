<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Input</h1>
      <p>Text input field for forms and data entry.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Input placeholder="Enter your email..." />
    </ComponentPreview>

    <ComponentPreview title="With Label" :code="labelCode">
      <div class="flex flex-col gap-2 w-full max-w-xs">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
    </ComponentPreview>

    <ComponentPreview title="Password" :code="passwordCode">
      <Input type="password" placeholder="Enter password..." />
    </ComponentPreview>

    <ComponentPreview title="Disabled" :code="disabledCode">
      <Input disabled placeholder="Disabled input" value="Cannot edit this" />
    </ComponentPreview>

    <ComponentPreview title="With Button" :code="withButtonCode">
      <div class="flex gap-2 w-full max-w-sm">
        <Input placeholder="Search..." />
        <Button>
          <Icon name="hugeicons:search-01" class="size-4" />
        </Button>
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
          <td><code>type</code></td>
          <td><code>string</code></td>
          <td><code>'text'</code></td>
          <td>HTML input type</td>
        </tr>
        <tr>
          <td><code>modelValue</code></td>
          <td><code>string</code></td>
          <td><code>''</code></td>
          <td>Input value (v-model)</td>
        </tr>
        <tr>
          <td><code>placeholder</code></td>
          <td><code>string</code></td>
          <td>-</td>
          <td>Placeholder text</td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Disable the input</td>
        </tr>
      </tbody>
    </table>

    <h2>Accessibility</h2>

    <p>
      Always pair inputs with a <code>Label</code> component for accessibility. 
      The <code>for</code> prop on Label should match the <code>id</code> on Input.
    </p>

    <CodeBlock :code="accessibilityCode" lang="vue" />
  </div>
</template>

<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
import { Input } from '@nova-vue/ui/input'
import { Label } from '@nova-vue/ui/label'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<Input placeholder="Enter your email..." />`

const labelCode = `<div class="flex flex-col gap-2">
  <Label for="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`

const passwordCode = `<Input type="password" placeholder="Enter password..." />`

const disabledCode = `<Input disabled placeholder="Disabled input" value="Cannot edit this" />`

const withButtonCode = `<div class="flex gap-2">
  <Input placeholder="Search..." />
  <Button>
    <Icon name="hugeicons:search-01" class="size-4" />
  </Button>
</div>`

const usageCode = '<' + `script setup lang="ts">
import { Input } from '@nova-vue/ui/input'
import { Label } from '@nova-vue/ui/label'

const value = ref('')
<` + `/script>

<` + `template>
  <div class="space-y-2">
    <Label for="name">Name</Label>
    <Input 
      id="name" 
      v-model="value" 
      placeholder="Enter your name..." 
    />
  </div>
</` + `template>`

const accessibilityCode = '<Label for="username">Username<' + '/Label>\n<Input id="username" />'
</script>
