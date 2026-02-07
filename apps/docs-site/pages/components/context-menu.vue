<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Context Menu</h1>
      <p>Right-click menu for contextual actions.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <ContextMenu>
        <ContextMenuTrigger class="flex h-40 w-full max-w-sm items-center justify-center rounded-md border border-dashed text-sm">
          Right click here
        </ContextMenuTrigger>
        <ContextMenuContent class="w-64">
          <ContextMenuItem>
            Back
            <ContextMenuShortcut>⌘[</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem disabled>
            Forward
            <ContextMenuShortcut>⌘]</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuItem>
            Reload
            <ContextMenuShortcut>⌘R</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>
            Save Page As...
            <ContextMenuShortcut>⌘S</ContextMenuShortcut>
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem>Inspect</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
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
          <td><code>ContextMenu</code></td>
          <td>Root component</td>
        </tr>
        <tr>
          <td><code>ContextMenuTrigger</code></td>
          <td>Area that triggers the menu on right-click</td>
        </tr>
        <tr>
          <td><code>ContextMenuContent</code></td>
          <td>Menu content container</td>
        </tr>
        <tr>
          <td><code>ContextMenuItem</code></td>
          <td>Individual menu item</td>
        </tr>
        <tr>
          <td><code>ContextMenuSeparator</code></td>
          <td>Visual separator</td>
        </tr>
        <tr>
          <td><code>ContextMenuShortcut</code></td>
          <td>Keyboard shortcut hint</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem, ContextMenuSeparator, ContextMenuShortcut } from '@nova-vue/ui/context-menu'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<ContextMenu>
  <ContextMenuTrigger class="flex h-40 w-80 items-center justify-center rounded-md border border-dashed">
    Right click here
  </ContextMenuTrigger>
  <ContextMenuContent class="w-64">
    <ContextMenuItem>
      Back
      <ContextMenuShortcut>⌘[</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>
      Reload
      <ContextMenuShortcut>⌘R</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Inspect</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`

const usageCode = '<' + `script setup lang="ts">
import { ContextMenu, ContextMenuTrigger, ContextMenuContent, ContextMenuItem } from '@nova-vue/ui/context-menu'
<` + `/script>

<` + `template>
  <ContextMenu>
    <ContextMenuTrigger>Right click area</ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Item 1</ContextMenuItem>
      <ContextMenuItem>Item 2</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</` + `template>`
</script>
