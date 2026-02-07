<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Popover</h1>
      <p>Floating content anchored to a trigger element.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">Dimensions</h4>
              <p class="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="width">Width</Label>
                <Input id="width" value="100%" class="col-span-2 h-8" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="height">Height</Label>
                <Input id="height" value="25px" class="col-span-2 h-8" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
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
          <td><code>Popover</code></td>
          <td>Root component managing open state</td>
        </tr>
        <tr>
          <td><code>PopoverTrigger</code></td>
          <td>Element that toggles the popover</td>
        </tr>
        <tr>
          <td><code>PopoverContent</code></td>
          <td>Floating content container</td>
        </tr>
        <tr>
          <td><code>PopoverClose</code></td>
          <td>Button to close the popover</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>PopoverContent</h3>
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
          <td><code>side</code></td>
          <td><code>string</code></td>
          <td><code>'bottom'</code></td>
          <td>Position (top, bottom, left, right)</td>
        </tr>
        <tr>
          <td><code>sideOffset</code></td>
          <td><code>number</code></td>
          <td><code>4</code></td>
          <td>Distance from trigger</td>
        </tr>
        <tr>
          <td><code>align</code></td>
          <td><code>string</code></td>
          <td><code>'center'</code></td>
          <td>Alignment (start, center, end)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
import { Input } from '@nova-vue/ui/input'
import { Label } from '@nova-vue/ui/label'
import { Popover, PopoverTrigger, PopoverContent } from '@nova-vue/ui/popover'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<Popover>
  <PopoverTrigger as-child>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent class="w-80">
    <div class="grid gap-4">
      <h4 class="font-medium">Title</h4>
      <p class="text-sm text-muted-foreground">
        Content goes here.
      </p>
    </div>
  </PopoverContent>
</Popover>`

const usageCode = '<' + `script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent } from '@nova-vue/ui/popover'
<` + `/script>

<` + `template>
  <Popover>
    <PopoverTrigger as-child>
      <Button>Open</Button>
    </PopoverTrigger>
    <PopoverContent>
      Content here
    </PopoverContent>
  </Popover>
</` + `template>`
</script>
