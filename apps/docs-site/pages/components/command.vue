<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Command</h1>
      <p>Command palette for quick actions and navigation.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Command Dialog" :code="dialogCode">
      <div>
        <p class="text-sm text-muted-foreground mb-4">
          Press
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
          or click the button below
        </p>
        <Button variant="outline" @click="open = true">
          <Icon name="hugeicons:search-01" class="size-4" />
          Open Command Palette
          <span class="ml-auto flex items-center gap-1">
            <Kbd size="sm">⌘</Kbd>
            <Kbd size="sm">K</Kbd>
          </span>
        </Button>
      </div>

      <CommandDialog v-model:open="open">
        <Command>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem value="calendar" @select="handleSelect('calendar')">
                <Icon name="hugeicons:calendar-03" class="size-4" />
                Calendar
              </CommandItem>
              <CommandItem value="search" @select="handleSelect('search')">
                <Icon name="hugeicons:search-01" class="size-4" />
                Search
              </CommandItem>
              <CommandItem value="settings" @select="handleSelect('settings')">
                <Icon name="hugeicons:settings-02" class="size-4" />
                Settings
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem value="profile" @select="handleSelect('profile')">
                <Icon name="hugeicons:user-circle" class="size-4" />
                Profile
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem value="billing" @select="handleSelect('billing')">
                <Icon name="hugeicons:credit-card" class="size-4" />
                Billing
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem value="keyboard" @select="handleSelect('keyboard')">
                <Icon name="hugeicons:keyboard" class="size-4" />
                Keyboard Shortcuts
                <CommandShortcut>⌘K</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </ComponentPreview>

    <ComponentPreview title="Inline Command" :code="inlineCode">
      <div class="border rounded-xl overflow-hidden w-80">
        <Command>
          <CommandInput placeholder="Search actions..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Actions">
              <CommandItem value="new-file">
                <Icon name="hugeicons:file-add" class="size-4" />
                New File
              </CommandItem>
              <CommandItem value="new-folder">
                <Icon name="hugeicons:folder-add" class="size-4" />
                New Folder
              </CommandItem>
              <CommandItem value="upload">
                <Icon name="hugeicons:upload-02" class="size-4" />
                Upload
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
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
          <td><code>Command</code></td>
          <td>Root component wrapping the command palette</td>
        </tr>
        <tr>
          <td><code>CommandDialog</code></td>
          <td>Dialog wrapper for modal command palette</td>
        </tr>
        <tr>
          <td><code>CommandInput</code></td>
          <td>Search input with icon</td>
        </tr>
        <tr>
          <td><code>CommandList</code></td>
          <td>Scrollable list of command items</td>
        </tr>
        <tr>
          <td><code>CommandEmpty</code></td>
          <td>Displayed when no results match</td>
        </tr>
        <tr>
          <td><code>CommandGroup</code></td>
          <td>Group of related commands with optional heading</td>
        </tr>
        <tr>
          <td><code>CommandItem</code></td>
          <td>Individual command option</td>
        </tr>
        <tr>
          <td><code>CommandSeparator</code></td>
          <td>Visual separator between groups</td>
        </tr>
        <tr>
          <td><code>CommandShortcut</code></td>
          <td>Keyboard shortcut hint</td>
        </tr>
      </tbody>
    </table>

    <h2>Keyboard Shortcuts</h2>

    <table class="props-table">
      <thead>
        <tr>
          <th>Key</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><Kbd>↑</Kbd> <Kbd>↓</Kbd></td>
          <td>Navigate between items</td>
        </tr>
        <tr>
          <td><Kbd>Enter</Kbd></td>
          <td>Select highlighted item</td>
        </tr>
        <tr>
          <td><Kbd>Esc</Kbd></td>
          <td>Close the command palette</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Button } from '@nova-vue/ui/button'
import { Kbd } from '@nova-vue/ui/kbd'
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from '@nova-vue/ui/command'

definePageMeta({
  layout: 'default'
})

const open = ref(false)

function handleSelect(value: string) {
  console.log('Selected:', value)
  open.value = false
}

// Handle keyboard shortcut
function handleKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    open.value = !open.value
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})

const dialogCode = `<CommandDialog v-model:open="open">
  <Command>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem value="calendar" @select="handleSelect">
          <Icon name="hugeicons:calendar-03" class="size-4" />
          Calendar
        </CommandItem>
        <CommandItem value="search">
          <Icon name="hugeicons:search-01" class="size-4" />
          Search
        </CommandItem>
      </CommandGroup>
      <CommandSeparator />
      <CommandGroup heading="Settings">
        <CommandItem value="profile">
          <Icon name="hugeicons:user-circle" class="size-4" />
          Profile
          <CommandShortcut>⌘P</CommandShortcut>
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</CommandDialog>`

const inlineCode = `<div class="border rounded-xl overflow-hidden w-80">
  <Command>
    <CommandInput placeholder="Search actions..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Actions">
        <CommandItem value="new-file">
          <Icon name="hugeicons:file-add" class="size-4" />
          New File
        </CommandItem>
        <CommandItem value="upload">
          <Icon name="hugeicons:upload-02" class="size-4" />
          Upload
        </CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</div>`

const usageCode = '<' + `script setup lang="ts">
import { ref } from 'vue'
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from '@nova-vue/ui/command'

const open = ref(false)
<` + `/script>

<` + `template>
  <CommandDialog v-model:open="open">
    <Command>
      <CommandInput placeholder="Type a command..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem value="action1">Action 1</CommandItem>
          <CommandItem value="action2">Action 2</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  </CommandDialog>
</` + `template>`
</script>
