<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Dropdown Menu</h1>
      <p>Menu displayed on trigger interaction.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Icon name="hugeicons:user" class="mr-2 size-4" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon name="hugeicons:settings-02" class="mr-2 size-4" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Icon name="hugeicons:logout-01" class="mr-2 size-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ComponentPreview>

    <ComponentPreview title="With Shortcuts" :code="shortcutsCode">
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Actions</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuItem>
            New Tab
            <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            New Window
            <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled>
            Print
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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
          <td><code>DropdownMenu</code></td>
          <td>Root component</td>
        </tr>
        <tr>
          <td><code>DropdownMenuTrigger</code></td>
          <td>Button that opens the menu</td>
        </tr>
        <tr>
          <td><code>DropdownMenuContent</code></td>
          <td>Menu content container</td>
        </tr>
        <tr>
          <td><code>DropdownMenuItem</code></td>
          <td>Individual menu item</td>
        </tr>
        <tr>
          <td><code>DropdownMenuLabel</code></td>
          <td>Label for menu section</td>
        </tr>
        <tr>
          <td><code>DropdownMenuSeparator</code></td>
          <td>Visual separator</td>
        </tr>
        <tr>
          <td><code>DropdownMenuShortcut</code></td>
          <td>Keyboard shortcut hint</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut } from '@nova-vue/ui/dropdown-menu'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<DropdownMenu>
  <DropdownMenuTrigger as-child>
    <Button variant="outline">Open Menu</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent class="w-56">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`

const shortcutsCode = `<DropdownMenu>
  <DropdownMenuTrigger as-child>
    <Button variant="outline">Actions</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent class="w-56">
    <DropdownMenuItem>
      New Tab
      <DropdownMenuShortcut>⌘T</DropdownMenuShortcut>
    </DropdownMenuItem>
    <DropdownMenuItem disabled>
      Print
      <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`

const usageCode = '<' + `script setup lang="ts">
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@nova-vue/ui/dropdown-menu'
<` + `/script>

<` + `template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button>Open</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>Item 1</DropdownMenuItem>
      <DropdownMenuItem>Item 2</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</` + `template>`
</script>
