<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Radio Group</h1>
      <p>Select single option from a list.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <RadioGroup default-value="option-one">
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label for="option-one">Option One</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label for="option-two">Option Two</Label>
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label for="option-three">Option Three</Label>
        </div>
      </RadioGroup>
    </ComponentPreview>

    <ComponentPreview title="With v-model" :code="vmodelCode">
      <div class="space-y-4">
        <RadioGroup v-model="selected">
          <div class="flex items-center space-x-2">
            <RadioGroupItem value="small" id="small" />
            <Label for="small">Small</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem value="medium" id="medium" />
            <Label for="medium">Medium</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem value="large" id="large" />
            <Label for="large">Large</Label>
          </div>
        </RadioGroup>
        <p class="text-sm text-muted-foreground">Selected: {{ selected }}</p>
      </div>
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
          <td><code>RadioGroup</code></td>
          <td>Root container managing selection state</td>
        </tr>
        <tr>
          <td><code>RadioGroupItem</code></td>
          <td>Individual radio option</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>RadioGroup</h3>
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
          <td>-</td>
          <td>Controlled selected value (v-model)</td>
        </tr>
        <tr>
          <td><code>defaultValue</code></td>
          <td><code>string</code></td>
          <td>-</td>
          <td>Initial selected value</td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Disable the entire group</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@nova-vue/ui/radio-group'
import { Label } from '@nova-vue/ui/label'

definePageMeta({
  layout: 'default'
})

const selected = ref('medium')

const defaultCode = `<RadioGroup default-value="option-one">
  <div class="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label for="option-one">Option One</Label>
  </div>
  <div class="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label for="option-two">Option Two</Label>
  </div>
</RadioGroup>`

const vmodelCode = '<' + `script setup>
const selected = ref('medium')
<` + `/script>

<` + `template>
  <RadioGroup v-model="selected">
    <div class="flex items-center space-x-2">
      <RadioGroupItem value="small" id="small" />
      <Label for="small">Small</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem value="medium" id="medium" />
      <Label for="medium">Medium</Label>
    </div>
  </RadioGroup>
</` + `template>`

const usageCode = '<' + `script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@nova-vue/ui/radio-group'
import { Label } from '@nova-vue/ui/label'
<` + `/script>

<` + `template>
  <RadioGroup default-value="option-1">
    <div class="flex items-center space-x-2">
      <RadioGroupItem value="option-1" id="r1" />
      <Label for="r1">Option 1</Label>
    </div>
  </RadioGroup>
</` + `template>`
</script>
