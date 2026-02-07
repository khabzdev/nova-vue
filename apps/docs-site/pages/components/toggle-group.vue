<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Toggle Group</h1>
      <p>Group of toggles for selecting options.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Single" :code="singleCode">
      <ToggleGroup type="single" default-value="center">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon name="hugeicons:align-left" class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon name="hugeicons:align-horizontal-center" class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon name="hugeicons:align-right" class="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </ComponentPreview>

    <ComponentPreview title="Multiple" :code="multipleCode">
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Icon name="hugeicons:text-bold" class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Icon name="hugeicons:text-italic" class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Icon name="hugeicons:text-underline" class="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
    </ComponentPreview>

    <ComponentPreview title="Outline Variant" :code="outlineCode">
      <ToggleGroup type="single" variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon name="hugeicons:align-left" class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon name="hugeicons:align-horizontal-center" class="size-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon name="hugeicons:align-right" class="size-4" />
        </ToggleGroupItem>
      </ToggleGroup>
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
          <td><code>ToggleGroup</code></td>
          <td>Root container managing selection</td>
        </tr>
        <tr>
          <td><code>ToggleGroupItem</code></td>
          <td>Individual toggle option</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>ToggleGroup</h3>
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
          <td><code>'single' | 'multiple'</code></td>
          <td><code>'single'</code></td>
          <td>Selection mode</td>
        </tr>
        <tr>
          <td><code>variant</code></td>
          <td><code>string</code></td>
          <td><code>'default'</code></td>
          <td>Visual variant</td>
        </tr>
        <tr>
          <td><code>size</code></td>
          <td><code>string</code></td>
          <td><code>'default'</code></td>
          <td>Toggle size</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@nova-vue/ui/toggle-group'

definePageMeta({
  layout: 'default'
})

const singleCode = `<ToggleGroup type="single" default-value="center">
  <ToggleGroupItem value="left" aria-label="Align left">
    <Icon name="hugeicons:align-left" class="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <Icon name="hugeicons:align-horizontal-center" class="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <Icon name="hugeicons:align-right" class="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`

const multipleCode = `<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Bold">
    <Icon name="hugeicons:text-bold" class="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Italic">
    <Icon name="hugeicons:text-italic" class="size-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Underline">
    <Icon name="hugeicons:text-underline" class="size-4" />
  </ToggleGroupItem>
</ToggleGroup>`

const outlineCode = `<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="left" aria-label="Align left">
    <Icon name="hugeicons:align-left" class="size-4" />
  </ToggleGroupItem>
  ...
</ToggleGroup>`

const usageCode = '<' + `script setup lang="ts">
import { ToggleGroup, ToggleGroupItem } from '@nova-vue/ui/toggle-group'
<` + `/script>

<` + `template>
  <ToggleGroup type="single">
    <ToggleGroupItem value="a">A</ToggleGroupItem>
    <ToggleGroupItem value="b">B</ToggleGroupItem>
  </ToggleGroup>
</` + `template>`
</script>
