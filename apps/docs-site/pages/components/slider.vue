<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Slider</h1>
      <p>Range input for selecting numeric values.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Slider :default-value="[50]" :max="100" :step="1" class="w-full max-w-sm" />
    </ComponentPreview>

    <ComponentPreview title="With v-model" :code="vmodelCode">
      <div class="space-y-4 w-full max-w-sm">
        <Slider v-model="value" :max="100" :step="1" />
        <p class="text-sm text-muted-foreground">Value: {{ value[0] }}</p>
      </div>
    </ComponentPreview>

    <ComponentPreview title="Range" :code="rangeCode">
      <div class="space-y-4 w-full max-w-sm">
        <Slider v-model="rangeValue" :max="100" :step="1" />
        <p class="text-sm text-muted-foreground">Range: {{ rangeValue[0] }} - {{ rangeValue[1] }}</p>
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
          <td><code>number[]</code></td>
          <td>-</td>
          <td>Controlled value (v-model)</td>
        </tr>
        <tr>
          <td><code>defaultValue</code></td>
          <td><code>number[]</code></td>
          <td><code>[0]</code></td>
          <td>Initial value</td>
        </tr>
        <tr>
          <td><code>min</code></td>
          <td><code>number</code></td>
          <td><code>0</code></td>
          <td>Minimum value</td>
        </tr>
        <tr>
          <td><code>max</code></td>
          <td><code>number</code></td>
          <td><code>100</code></td>
          <td>Maximum value</td>
        </tr>
        <tr>
          <td><code>step</code></td>
          <td><code>number</code></td>
          <td><code>1</code></td>
          <td>Step increment</td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Disable the slider</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Slider } from '@nova-vue/ui/slider'

definePageMeta({
  layout: 'default'
})

const value = ref([50])
const rangeValue = ref([25, 75])

const defaultCode = `<Slider :default-value="[50]" :max="100" :step="1" />`

const vmodelCode = '<' + `script setup>
const value = ref([50])
<` + `/script>

<` + `template>
  <Slider v-model="value" :max="100" :step="1" />
  <p>Value: {{ value[0] }}</p>
</` + `template>`

const rangeCode = '<' + `script setup>
const rangeValue = ref([25, 75])
<` + `/script>

<` + `template>
  <Slider v-model="rangeValue" :max="100" />
  <p>Range: {{ rangeValue[0] }} - {{ rangeValue[1] }}</p>
</` + `template>`

const usageCode = '<' + `script setup lang="ts">
import { Slider } from '@nova-vue/ui/slider'

const value = ref([50])
<` + `/script>

<` + `template>
  <Slider v-model="value" :max="100" :step="1" />
</` + `template>`
</script>
