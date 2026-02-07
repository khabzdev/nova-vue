<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Skeleton</h1>
      <p>A placeholder loading component that displays a pulsing animation while content is loading.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <div class="flex items-center space-x-4">
        <Skeleton class="h-12 w-12 rounded-full" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-[250px]" />
          <Skeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview title="Card" :code="cardCode">
      <div class="flex flex-col space-y-3">
        <Skeleton class="h-[125px] w-[250px] rounded-xl" />
        <div class="space-y-2">
          <Skeleton class="h-4 w-[250px]" />
          <Skeleton class="h-4 w-[200px]" />
        </div>
      </div>
    </ComponentPreview>

    <ComponentPreview title="Text Block" :code="textCode">
      <div class="space-y-2">
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-4/5" />
      </div>
    </ComponentPreview>

    <ComponentPreview title="Avatar Group" :code="avatarCode">
      <div class="flex -space-x-2">
        <Skeleton class="h-10 w-10 rounded-full border-2 border-background" />
        <Skeleton class="h-10 w-10 rounded-full border-2 border-background" />
        <Skeleton class="h-10 w-10 rounded-full border-2 border-background" />
        <Skeleton class="h-10 w-10 rounded-full border-2 border-background" />
      </div>
    </ComponentPreview>

    <ComponentPreview title="List Items" :code="listCode">
      <div class="space-y-4">
        <div v-for="i in 3" :key="i" class="flex items-center space-x-4">
          <Skeleton class="h-10 w-10 rounded-md" />
          <div class="flex-1 space-y-2">
            <Skeleton class="h-4 w-3/4" />
            <Skeleton class="h-3 w-1/2" />
          </div>
          <Skeleton class="h-8 w-16 rounded-md" />
        </div>
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
          <td><code>class</code></td>
          <td><code>string</code></td>
          <td><code>''</code></td>
          <td>Additional CSS classes for sizing and shape</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Skeleton } from '@nova-vue/ui/skeleton'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<div class="flex items-center space-x-4">
  <Skeleton class="h-12 w-12 rounded-full" />
  <div class="space-y-2">
    <Skeleton class="h-4 w-[250px]" />
    <Skeleton class="h-4 w-[200px]" />
  </div>
</div>`

const cardCode = `<div class="flex flex-col space-y-3">
  <Skeleton class="h-[125px] w-[250px] rounded-xl" />
  <div class="space-y-2">
    <Skeleton class="h-4 w-[250px]" />
    <Skeleton class="h-4 w-[200px]" />
  </div>
</div>`

const textCode = `<div class="space-y-2">
  <Skeleton class="h-4 w-full" />
  <Skeleton class="h-4 w-full" />
  <Skeleton class="h-4 w-4/5" />
</div>`

const avatarCode = `<div class="flex -space-x-2">
  <Skeleton class="h-10 w-10 rounded-full border-2 border-background" />
  <Skeleton class="h-10 w-10 rounded-full border-2 border-background" />
  <Skeleton class="h-10 w-10 rounded-full border-2 border-background" />
  <Skeleton class="h-10 w-10 rounded-full border-2 border-background" />
</div>`

const listCode = `<div class="space-y-4">
  <div v-for="i in 3" :key="i" class="flex items-center space-x-4">
    <Skeleton class="h-10 w-10 rounded-md" />
    <div class="flex-1 space-y-2">
      <Skeleton class="h-4 w-3/4" />
      <Skeleton class="h-3 w-1/2" />
    </div>
    <Skeleton class="h-8 w-16 rounded-md" />
  </div>
</div>`

const usageCode = '<' + `script setup lang="ts">
import { Skeleton } from '@nova-vue/ui/skeleton'
<` + `/script>

<` + `template>
  <Skeleton class="h-4 w-[200px]" />
</` + `template>`
</script>
