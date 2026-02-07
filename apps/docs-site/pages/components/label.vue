<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Label</h1>
      <p>Accessible label for form controls.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <div class="flex flex-col gap-2 max-w-sm">
        <Label for="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
    </ComponentPreview>

    <ComponentPreview title="With Checkbox" :code="checkboxCode">
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    </ComponentPreview>

    <ComponentPreview title="Required" :code="requiredCode">
      <div class="flex flex-col gap-2 max-w-sm">
        <Label for="username">
          Username <span class="text-destructive">*</span>
        </Label>
        <Input id="username" placeholder="Enter username" />
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
          <td><code>for</code></td>
          <td><code>string</code></td>
          <td>-</td>
          <td>ID of the form control this label is for</td>
        </tr>
      </tbody>
    </table>

    <h2>Accessibility</h2>

    <p>
      Always use a <code>Label</code> component with form inputs. The <code>for</code> prop 
      should match the <code>id</code> of the associated input element.
    </p>
  </div>
</template>

<script setup lang="ts">
import { Label } from '@nova-vue/ui/label'
import { Input } from '@nova-vue/ui/input'
import { Checkbox } from '@nova-vue/ui/checkbox'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<div class="flex flex-col gap-2">
  <Label for="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`

const checkboxCode = `<div class="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label for="terms">Accept terms and conditions</Label>
</div>`

const requiredCode = `<div class="flex flex-col gap-2">
  <Label for="username">
    Username <span class="text-destructive">*</span>
  </Label>
  <Input id="username" placeholder="Enter username" />
</div>`

const usageCode = '<' + `script setup lang="ts">
import { Label } from '@nova-vue/ui/label'
import { Input } from '@nova-vue/ui/input'
<` + `/script>

<` + `template>
  <div class="flex flex-col gap-2">
    <Label for="email">Email</Label>
    <Input id="email" type="email" />
  </div>
</` + `template>`
</script>
