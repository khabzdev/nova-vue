<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Select</h1>
      <p>Dropdown for selecting from a list of options.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Select>
        <SelectTrigger class="w-48">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectContent>
      </Select>
    </ComponentPreview>

    <ComponentPreview title="With Groups" :code="groupsCode">
      <Select>
        <SelectTrigger class="w-48">
          <SelectValue placeholder="Select a food" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Vegetables</SelectLabel>
            <SelectItem value="carrot">Carrot</SelectItem>
            <SelectItem value="broccoli">Broccoli</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </ComponentPreview>

    <ComponentPreview title="Disabled" :code="disabledCode">
      <Select disabled>
        <SelectTrigger class="w-48">
          <SelectValue placeholder="Disabled" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option">Option</SelectItem>
        </SelectContent>
      </Select>
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
          <td><code>Select</code></td>
          <td>Root component</td>
        </tr>
        <tr>
          <td><code>SelectTrigger</code></td>
          <td>Button that opens the dropdown</td>
        </tr>
        <tr>
          <td><code>SelectValue</code></td>
          <td>Displays the selected value</td>
        </tr>
        <tr>
          <td><code>SelectContent</code></td>
          <td>Dropdown content container</td>
        </tr>
        <tr>
          <td><code>SelectItem</code></td>
          <td>Individual selectable option</td>
        </tr>
        <tr>
          <td><code>SelectGroup</code></td>
          <td>Group of related items</td>
        </tr>
        <tr>
          <td><code>SelectLabel</code></td>
          <td>Label for a group</td>
        </tr>
        <tr>
          <td><code>SelectSeparator</code></td>
          <td>Visual separator between groups</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem, SelectGroup, SelectLabel, SelectSeparator } from '@nova-vue/ui/select'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<Select>
  <SelectTrigger class="w-48">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
  </SelectContent>
</Select>`

const groupsCode = `<Select>
  <SelectTrigger class="w-48">
    <SelectValue placeholder="Select a food" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>Fruits</SelectLabel>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>Vegetables</SelectLabel>
      <SelectItem value="carrot">Carrot</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>`

const disabledCode = `<Select disabled>
  <SelectTrigger class="w-48">
    <SelectValue placeholder="Disabled" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option">Option</SelectItem>
  </SelectContent>
</Select>`

const usageCode = '<' + `script setup lang="ts">
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@nova-vue/ui/select'

const value = ref('')
<` + `/script>

<` + `template>
  <Select v-model="value">
    <SelectTrigger class="w-48">
      <SelectValue placeholder="Select..." />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="one">Option 1</SelectItem>
      <SelectItem value="two">Option 2</SelectItem>
    </SelectContent>
  </Select>
</` + `template>`
</script>
