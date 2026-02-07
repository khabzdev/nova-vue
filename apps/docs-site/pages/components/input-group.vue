<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Input Group</h1>
      <p>Combine inputs with addons for enhanced form fields.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="With Prefix" :code="prefixCode">
      <InputGroup class="max-w-sm">
        <InputGroupAddon>https://</InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
    </ComponentPreview>

    <ComponentPreview title="With Suffix" :code="suffixCode">
      <InputGroup class="max-w-sm">
        <InputGroupInput placeholder="Enter amount" />
        <InputGroupAddon>.00</InputGroupAddon>
      </InputGroup>
    </ComponentPreview>

    <ComponentPreview title="With Icon" :code="iconCode">
      <InputGroup class="max-w-sm">
        <InputGroupAddon>
          <Icon name="hugeicons:search-01" class="size-4" />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
      </InputGroup>
    </ComponentPreview>

    <ComponentPreview title="Email Input" :code="emailCode">
      <InputGroup class="max-w-sm">
        <InputGroupAddon>
          <Icon name="hugeicons:mail-01" class="size-4" />
        </InputGroupAddon>
        <InputGroupInput type="email" placeholder="you@example.com" />
        <InputGroupAddon>@company.com</InputGroupAddon>
      </InputGroup>
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
          <td><code>InputGroup</code></td>
          <td>Container for input and addons</td>
        </tr>
        <tr>
          <td><code>InputGroupInput</code></td>
          <td>The input element</td>
        </tr>
        <tr>
          <td><code>InputGroupAddon</code></td>
          <td>Prefix or suffix addon</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { InputGroup, InputGroupInput, InputGroupAddon } from '@nova-vue/ui/input-group'

definePageMeta({
  layout: 'default'
})

const prefixCode = `<InputGroup>
  <InputGroupAddon>https://</InputGroupAddon>
  <InputGroupInput placeholder="example.com" />
</InputGroup>`

const suffixCode = `<InputGroup>
  <InputGroupInput placeholder="Enter amount" />
  <InputGroupAddon>.00</InputGroupAddon>
</InputGroup>`

const iconCode = `<InputGroup>
  <InputGroupAddon>
    <Icon name="hugeicons:search-01" class="size-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="Search..." />
</InputGroup>`

const emailCode = `<InputGroup>
  <InputGroupAddon>
    <Icon name="hugeicons:mail-01" class="size-4" />
  </InputGroupAddon>
  <InputGroupInput type="email" placeholder="you@example.com" />
  <InputGroupAddon>@company.com</InputGroupAddon>
</InputGroup>`

const usageCode = '<' + `script setup lang="ts">
import { InputGroup, InputGroupInput, InputGroupAddon } from '@nova-vue/ui/input-group'
<` + `/script>

<` + `template>
  <InputGroup>
    <InputGroupAddon>$</InputGroupAddon>
    <InputGroupInput placeholder="Enter price" />
    <InputGroupAddon>.00</InputGroupAddon>
  </InputGroup>
</` + `template>`
</script>
