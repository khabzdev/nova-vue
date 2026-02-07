<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Checkbox</h1>
      <p>Toggle control for boolean values in forms.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <div class="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    </ComponentPreview>

    <ComponentPreview title="Checked" :code="checkedCode">
      <div class="flex items-center gap-2">
        <Checkbox id="checked" :default-checked="true" />
        <Label for="checked">Checked by default</Label>
      </div>
    </ComponentPreview>

    <ComponentPreview title="Disabled" :code="disabledCode">
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <Checkbox id="disabled" disabled />
          <Label for="disabled" class="opacity-50">Disabled unchecked</Label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox id="disabled-checked" disabled :default-checked="true" />
          <Label for="disabled-checked" class="opacity-50">Disabled checked</Label>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview title="With v-model" :code="vmodelCode">
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <Checkbox id="controlled" v-model:checked="isChecked" />
          <Label for="controlled">Newsletter subscription</Label>
        </div>
        <p class="text-sm text-muted-foreground">
          Checked: {{ isChecked }}
        </p>
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
          <td><code>checked</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Controlled checked state (v-model:checked)</td>
        </tr>
        <tr>
          <td><code>defaultChecked</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Initial checked state</td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Disable the checkbox</td>
        </tr>
        <tr>
          <td><code>variant</code></td>
          <td><code>string</code></td>
          <td><code>'default'</code></td>
          <td>Visual variant</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Checkbox } from '@nova-vue/ui/checkbox'
import { Label } from '@nova-vue/ui/label'

definePageMeta({
  layout: 'default'
})

const isChecked = ref(false)

const defaultCode = `<div class="flex items-center gap-2">
  <Checkbox id="terms" />
  <Label for="terms">Accept terms and conditions</Label>
</div>`

const checkedCode = `<div class="flex items-center gap-2">
  <Checkbox id="checked" :default-checked="true" />
  <Label for="checked">Checked by default</Label>
</div>`

const disabledCode = `<div class="flex items-center gap-2">
  <Checkbox id="disabled" disabled />
  <Label for="disabled">Disabled</Label>
</div>`

const vmodelCode = '<' + `script setup>
const isChecked = ref(false)
<` + `/script>

<` + `template>
  <Checkbox id="controlled" v-model:checked="isChecked" />
  <Label for="controlled">Newsletter</Label>
</` + `template>`

const usageCode = '<' + `script setup lang="ts">
import { Checkbox } from '@nova-vue/ui/checkbox'
import { Label } from '@nova-vue/ui/label'
<` + `/script>

<` + `template>
  <div class="flex items-center gap-2">
    <Checkbox id="terms" />
    <Label for="terms">Accept terms</Label>
  </div>
</` + `template>`
</script>
