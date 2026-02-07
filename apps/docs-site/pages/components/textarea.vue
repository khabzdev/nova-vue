<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Textarea</h1>
      <p>Multi-line text input field.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Textarea placeholder="Type your message here..." class="max-w-sm" />
    </ComponentPreview>

    <ComponentPreview title="With Label" :code="labelCode">
      <div class="flex flex-col gap-2 max-w-sm">
        <Label for="bio">Bio</Label>
        <Textarea id="bio" placeholder="Tell us about yourself..." />
      </div>
    </ComponentPreview>

    <ComponentPreview title="Disabled" :code="disabledCode">
      <Textarea disabled placeholder="Disabled textarea" class="max-w-sm" />
    </ComponentPreview>

    <ComponentPreview title="With v-model" :code="vmodelCode">
      <div class="flex flex-col gap-3 max-w-sm">
        <Textarea v-model="text" placeholder="Type something..." />
        <p class="text-sm text-muted-foreground">
          {{ text.length }} characters
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
          <td><code>modelValue</code></td>
          <td><code>string</code></td>
          <td><code>''</code></td>
          <td>Textarea value (v-model)</td>
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
          <td>Disable the textarea</td>
        </tr>
        <tr>
          <td><code>rows</code></td>
          <td><code>number</code></td>
          <td><code>3</code></td>
          <td>Number of visible text lines</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Textarea } from '@nova-vue/ui/textarea'
import { Label } from '@nova-vue/ui/label'

definePageMeta({
  layout: 'default'
})

const text = ref('')

const defaultCode = `<Textarea placeholder="Type your message here..." />`

const labelCode = `<div class="flex flex-col gap-2">
  <Label for="bio">Bio</Label>
  <Textarea id="bio" placeholder="Tell us about yourself..." />
</div>`

const disabledCode = `<Textarea disabled placeholder="Disabled textarea" />`

const vmodelCode = '<' + `script setup>
const text = ref('')
<` + `/script>

<` + `template>
  <Textarea v-model="text" placeholder="Type something..." />
  <p>{{ text.length }} characters</p>
</` + `template>`

const usageCode = '<' + `script setup lang="ts">
import { Textarea } from '@nova-vue/ui/textarea'
import { Label } from '@nova-vue/ui/label'
<` + `/script>

<` + `template>
  <div class="flex flex-col gap-2">
    <Label for="message">Message</Label>
    <Textarea id="message" placeholder="Type here..." />
  </div>
</` + `template>`
</script>
