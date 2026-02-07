<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Switch</h1>
      <p>Toggle switch for on/off states.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <div class="flex items-center gap-2">
        <Switch id="airplane" />
        <Label for="airplane">Airplane Mode</Label>
      </div>
    </ComponentPreview>

    <ComponentPreview title="Sizes" :code="sizesCode">
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <Switch id="sm" size="sm" />
          <Label for="sm">Small</Label>
        </div>
        <div class="flex items-center gap-2">
          <Switch id="default" />
          <Label for="default">Default</Label>
        </div>
        <div class="flex items-center gap-2">
          <Switch id="lg" size="lg" />
          <Label for="lg">Large</Label>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview title="Disabled" :code="disabledCode">
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-2">
          <Switch id="disabled" disabled />
          <Label for="disabled" class="opacity-50">Disabled</Label>
        </div>
        <div class="flex items-center gap-2">
          <Switch id="disabled-on" disabled :default-checked="true" />
          <Label for="disabled-on" class="opacity-50">Disabled On</Label>
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview title="With v-model" :code="vmodelCode">
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <Switch id="controlled" v-model:checked="isEnabled" />
          <Label for="controlled">Enable notifications</Label>
        </div>
        <p class="text-sm text-muted-foreground">
          Notifications are {{ isEnabled ? 'enabled' : 'disabled' }}
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
          <td>Disable the switch</td>
        </tr>
        <tr>
          <td><code>size</code></td>
          <td><code>string</code></td>
          <td><code>'default'</code></td>
          <td>Switch size (sm, default, lg)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Switch } from '@nova-vue/ui/switch'
import { Label } from '@nova-vue/ui/label'

definePageMeta({
  layout: 'default'
})

const isEnabled = ref(false)

const defaultCode = `<div class="flex items-center gap-2">
  <Switch id="airplane" />
  <Label for="airplane">Airplane Mode</Label>
</div>`

const sizesCode = `<Switch id="sm" size="sm" />
<Switch id="default" />
<Switch id="lg" size="lg" />`

const disabledCode = `<Switch id="disabled" disabled />
<Switch id="disabled-on" disabled :default-checked="true" />`

const vmodelCode = '<' + `script setup>
const isEnabled = ref(false)
<` + `/script>

<` + `template>
  <Switch id="notifications" v-model:checked="isEnabled" />
</` + `template>`

const usageCode = '<' + `script setup lang="ts">
import { Switch } from '@nova-vue/ui/switch'
import { Label } from '@nova-vue/ui/label'
<` + `/script>

<` + `template>
  <div class="flex items-center gap-2">
    <Switch id="mode" />
    <Label for="mode">Dark mode</Label>
  </div>
</` + `template>`
</script>
