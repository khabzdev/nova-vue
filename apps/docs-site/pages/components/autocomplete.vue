<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Autocomplete</h1>
      <p>Text input with suggestions and filtering.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Autocomplete v-model="selectedFramework" class="w-64">
        <AutocompleteInput placeholder="Select a framework..." />
        <AutocompleteContent>
          <AutocompleteEmpty>No framework found.</AutocompleteEmpty>
          <AutocompleteItem v-for="framework in frameworks" :key="framework" :value="framework">
            {{ framework }}
          </AutocompleteItem>
        </AutocompleteContent>
      </Autocomplete>
    </ComponentPreview>

    <ComponentPreview title="With Groups" :code="groupsCode">
      <Autocomplete v-model="selectedFruit" class="w-64">
        <AutocompleteInput placeholder="Select a fruit..." />
        <AutocompleteContent>
          <AutocompleteEmpty>No fruit found.</AutocompleteEmpty>
          <AutocompleteGroup>
            <AutocompleteLabel>Citrus</AutocompleteLabel>
            <AutocompleteItem value="orange">Orange</AutocompleteItem>
            <AutocompleteItem value="lemon">Lemon</AutocompleteItem>
            <AutocompleteItem value="lime">Lime</AutocompleteItem>
          </AutocompleteGroup>
          <AutocompleteSeparator />
          <AutocompleteGroup>
            <AutocompleteLabel>Berries</AutocompleteLabel>
            <AutocompleteItem value="strawberry">Strawberry</AutocompleteItem>
            <AutocompleteItem value="blueberry">Blueberry</AutocompleteItem>
          </AutocompleteGroup>
        </AutocompleteContent>
      </Autocomplete>
    </ComponentPreview>

    <ComponentPreview title="With Icons" :code="iconsCode">
      <Autocomplete v-model="selectedStatus" class="w-64">
        <AutocompleteInput placeholder="Select status...">
          <template #leading>
            <Icon name="hugeicons:search-01" class="size-4 opacity-50" />
          </template>
        </AutocompleteInput>
        <AutocompleteContent>
          <AutocompleteEmpty>No status found.</AutocompleteEmpty>
          <AutocompleteItem value="pending">
            <Icon name="hugeicons:clock-01" class="size-4 text-yellow-500" />
            Pending
          </AutocompleteItem>
          <AutocompleteItem value="active">
            <Icon name="hugeicons:checkmark-circle-02" class="size-4 text-green-500" />
            Active
          </AutocompleteItem>
          <AutocompleteItem value="inactive">
            <Icon name="hugeicons:cancel-circle" class="size-4 text-red-500" />
            Inactive
          </AutocompleteItem>
        </AutocompleteContent>
      </Autocomplete>
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
          <td><code>Autocomplete</code></td>
          <td>Root component wrapping the combobox</td>
        </tr>
        <tr>
          <td><code>AutocompleteInput</code></td>
          <td>Text input with search functionality</td>
        </tr>
        <tr>
          <td><code>AutocompleteContent</code></td>
          <td>Dropdown content container</td>
        </tr>
        <tr>
          <td><code>AutocompleteItem</code></td>
          <td>Individual selectable option</td>
        </tr>
        <tr>
          <td><code>AutocompleteEmpty</code></td>
          <td>Displayed when no results match</td>
        </tr>
        <tr>
          <td><code>AutocompleteGroup</code></td>
          <td>Group of related items</td>
        </tr>
        <tr>
          <td><code>AutocompleteLabel</code></td>
          <td>Label for a group</td>
        </tr>
        <tr>
          <td><code>AutocompleteSeparator</code></td>
          <td>Visual separator between groups</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteContent,
  AutocompleteItem,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteLabel,
  AutocompleteSeparator,
} from '@nova-vue/ui/autocomplete'

definePageMeta({
  layout: 'default'
})

const selectedFramework = ref('')
const selectedFruit = ref('')
const selectedStatus = ref('')

const frameworks = ['Vue', 'React', 'Angular', 'Svelte', 'Solid', 'Qwik']

const defaultCode = `<Autocomplete v-model="selected" class="w-64">
  <AutocompleteInput placeholder="Select a framework..." />
  <AutocompleteContent>
    <AutocompleteEmpty>No framework found.</AutocompleteEmpty>
    <AutocompleteItem value="vue">Vue</AutocompleteItem>
    <AutocompleteItem value="react">React</AutocompleteItem>
    <AutocompleteItem value="angular">Angular</AutocompleteItem>
  </AutocompleteContent>
</Autocomplete>`

const groupsCode = `<Autocomplete v-model="selected" class="w-64">
  <AutocompleteInput placeholder="Select a fruit..." />
  <AutocompleteContent>
    <AutocompleteEmpty>No fruit found.</AutocompleteEmpty>
    <AutocompleteGroup>
      <AutocompleteLabel>Citrus</AutocompleteLabel>
      <AutocompleteItem value="orange">Orange</AutocompleteItem>
      <AutocompleteItem value="lemon">Lemon</AutocompleteItem>
    </AutocompleteGroup>
    <AutocompleteSeparator />
    <AutocompleteGroup>
      <AutocompleteLabel>Berries</AutocompleteLabel>
      <AutocompleteItem value="strawberry">Strawberry</AutocompleteItem>
    </AutocompleteGroup>
  </AutocompleteContent>
</Autocomplete>`

const iconsCode = `<Autocomplete v-model="selected" class="w-64">
  <AutocompleteInput placeholder="Select status...">
    <template #leading>
      <Icon name="hugeicons:search-01" class="size-4 opacity-50" />
    </template>
  </AutocompleteInput>
  <AutocompleteContent>
    <AutocompleteItem value="active">
      <Icon name="hugeicons:checkmark-circle-02" class="size-4 text-green-500" />
      Active
    </AutocompleteItem>
  </AutocompleteContent>
</Autocomplete>`

const usageCode = '<' + `script setup lang="ts">
import { ref } from 'vue'
import {
  Autocomplete,
  AutocompleteInput,
  AutocompleteContent,
  AutocompleteItem,
  AutocompleteEmpty,
} from '@nova-vue/ui/autocomplete'

const selected = ref('')
<` + `/script>

<` + `template>
  <Autocomplete v-model="selected">
    <AutocompleteInput placeholder="Search..." />
    <AutocompleteContent>
      <AutocompleteEmpty>No results.</AutocompleteEmpty>
      <AutocompleteItem value="option1">Option 1</AutocompleteItem>
      <AutocompleteItem value="option2">Option 2</AutocompleteItem>
    </AutocompleteContent>
  </Autocomplete>
</` + `template>`
</script>
