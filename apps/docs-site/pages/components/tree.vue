<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Tree</h1>
      <p>Hierarchical tree view for nested data.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Tree :items="treeItems" class="w-full max-w-sm rounded-md border p-4" />
    </ComponentPreview>

    <h2>Usage</h2>

    <CodeBlock :code="usageCode" lang="vue" />

    <h2>Props</h2>

    <h3>Tree</h3>
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
          <td><code>items</code></td>
          <td><code>TreeItemData[]</code></td>
          <td><code>[]</code></td>
          <td>Array of tree items</td>
        </tr>
      </tbody>
    </table>

    <h3>TreeItemData</h3>
    <CodeBlock :code="typeCode" lang="typescript" />
  </div>
</template>

<script setup lang="ts">
import { Tree } from '@nova-vue/ui/tree'

definePageMeta({
  layout: 'default'
})

const treeItems = [
  {
    title: 'src',
    icon: 'hugeicons:folder-02',
    children: [
      {
        title: 'components',
        icon: 'hugeicons:folder-02',
        children: [
          { title: 'Button.vue', icon: 'hugeicons:file-02' },
          { title: 'Input.vue', icon: 'hugeicons:file-02' },
        ],
      },
      {
        title: 'utils',
        icon: 'hugeicons:folder-02',
        children: [
          { title: 'helpers.ts', icon: 'hugeicons:file-02' },
        ],
      },
      { title: 'App.vue', icon: 'hugeicons:file-02' },
      { title: 'main.ts', icon: 'hugeicons:file-02' },
    ],
  },
  {
    title: 'public',
    icon: 'hugeicons:folder-02',
    children: [
      { title: 'favicon.ico', icon: 'hugeicons:file-02' },
    ],
  },
  { title: 'package.json', icon: 'hugeicons:file-02' },
  { title: 'README.md', icon: 'hugeicons:file-02' },
]

const defaultCode = `<Tree :items="treeItems" class="rounded-md border p-4" />`

const usageCode = '<' + `script setup lang="ts">
import { Tree } from '@nova-vue/ui/tree'

const treeItems = [
  {
    title: 'src',
    icon: 'hugeicons:folder-02',
    children: [
      { title: 'App.vue', icon: 'hugeicons:file-02' },
      { title: 'main.ts', icon: 'hugeicons:file-02' },
    ],
  },
  { title: 'package.json', icon: 'hugeicons:file-02' },
]
<` + `/script>

<` + `template>
  <Tree :items="treeItems" />
</` + `template>`

const typeCode = `interface TreeItemData {
  title: string
  icon?: string
  children?: TreeItemData[]
}`
</script>
