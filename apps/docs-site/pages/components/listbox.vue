<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Listbox</h1>
      <p>Keyboard-navigable list for selecting options.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Listbox v-model="selected" class="w-full max-w-xs rounded-md border">
        <ListboxItem v-for="item in items" :key="item.value" :value="item.value">
          {{ item.label }}
        </ListboxItem>
      </Listbox>
    </ComponentPreview>

    <ComponentPreview title="With Icons" :code="iconsCode">
      <Listbox v-model="selectedIcon" class="w-full max-w-xs rounded-md border">
        <ListboxItem value="inbox">
          <Icon name="hugeicons:inbox" class="mr-2 size-4" />
          Inbox
        </ListboxItem>
        <ListboxItem value="sent">
          <Icon name="hugeicons:sent" class="mr-2 size-4" />
          Sent
        </ListboxItem>
        <ListboxItem value="drafts">
          <Icon name="hugeicons:file-edit" class="mr-2 size-4" />
          Drafts
        </ListboxItem>
        <ListboxItem value="trash">
          <Icon name="hugeicons:delete-02" class="mr-2 size-4" />
          Trash
        </ListboxItem>
      </Listbox>
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
          <td><code>Listbox</code></td>
          <td>Root container</td>
        </tr>
        <tr>
          <td><code>ListboxItem</code></td>
          <td>Individual list item</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>Listbox</h3>
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
          <td><code>string</code></td>
          <td>-</td>
          <td>Selected value (v-model)</td>
        </tr>
      </tbody>
    </table>

    <h3>ListboxItem</h3>
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
          <td><code>value</code></td>
          <td><code>string</code></td>
          <td>-</td>
          <td>Item value</td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Disable the item</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Listbox, ListboxItem } from '@nova-vue/ui/listbox'

definePageMeta({
  layout: 'default'
})

const items = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'orange', label: 'Orange' },
  { value: 'grape', label: 'Grape' },
  { value: 'mango', label: 'Mango' },
]

const selected = ref('apple')
const selectedIcon = ref('inbox')

const defaultCode = `<Listbox v-model="selected" class="rounded-md border">
  <ListboxItem v-for="item in items" :key="item.value" :value="item.value">
    {{ item.label }}
  </ListboxItem>
</Listbox>`

const iconsCode = `<Listbox v-model="selected" class="rounded-md border">
  <ListboxItem value="inbox">
    <Icon name="hugeicons:inbox" class="mr-2 size-4" />
    Inbox
  </ListboxItem>
  <ListboxItem value="sent">
    <Icon name="hugeicons:sent" class="mr-2 size-4" />
    Sent
  </ListboxItem>
</Listbox>`

const usageCode = '<' + `script setup lang="ts">
import { Listbox, ListboxItem } from '@nova-vue/ui/listbox'

const selected = ref('option1')
<` + `/script>

<` + `template>
  <Listbox v-model="selected">
    <ListboxItem value="option1">Option 1</ListboxItem>
    <ListboxItem value="option2">Option 2</ListboxItem>
  </Listbox>
</` + `template>`
</script>
