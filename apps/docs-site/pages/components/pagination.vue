<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Pagination</h1>
      <p>Navigate through paginated content.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Pagination :total="100" :items-per-page="10" :sibling-count="1" show-edges :default-page="1">
        <PaginationContent class="flex items-center gap-1">
          <PaginationFirst />
          <PaginationPrevious />
          <PaginationItem v-for="page in 5" :key="page" :value="page" as-child>
            <Button class="w-10 h-10 p-0" variant="outline">
              {{ page }}
            </Button>
          </PaginationItem>
          <PaginationEllipsis />
          <PaginationNext />
          <PaginationLast />
        </PaginationContent>
      </Pagination>
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
          <td><code>Pagination</code></td>
          <td>Root component</td>
        </tr>
        <tr>
          <td><code>PaginationContent</code></td>
          <td>Container for pagination items</td>
        </tr>
        <tr>
          <td><code>PaginationItem</code></td>
          <td>Individual page button</td>
        </tr>
        <tr>
          <td><code>PaginationFirst</code></td>
          <td>Go to first page</td>
        </tr>
        <tr>
          <td><code>PaginationPrevious</code></td>
          <td>Go to previous page</td>
        </tr>
        <tr>
          <td><code>PaginationNext</code></td>
          <td>Go to next page</td>
        </tr>
        <tr>
          <td><code>PaginationLast</code></td>
          <td>Go to last page</td>
        </tr>
        <tr>
          <td><code>PaginationEllipsis</code></td>
          <td>Ellipsis indicator</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>Pagination</h3>
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
          <td><code>total</code></td>
          <td><code>number</code></td>
          <td>-</td>
          <td>Total number of items</td>
        </tr>
        <tr>
          <td><code>itemsPerPage</code></td>
          <td><code>number</code></td>
          <td>-</td>
          <td>Items shown per page (required)</td>
        </tr>
        <tr>
          <td><code>page</code></td>
          <td><code>number</code></td>
          <td><code>1</code></td>
          <td>Current page (v-model:page)</td>
        </tr>
        <tr>
          <td><code>siblingCount</code></td>
          <td><code>number</code></td>
          <td><code>1</code></td>
          <td>Pages shown beside current</td>
        </tr>
        <tr>
          <td><code>showEdges</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Show first/last page buttons</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
import { Pagination, PaginationContent, PaginationItem, PaginationFirst, PaginationPrevious, PaginationNext, PaginationLast, PaginationEllipsis } from '@nova-vue/ui/pagination'

definePageMeta({
  layout: 'default'
})

const page = ref(1)

const defaultCode = `<Pagination :total="100" :items-per-page="10" :sibling-count="1" show-edges>
  <PaginationContent class="flex items-center gap-1">
    <PaginationFirst />
    <PaginationPrevious />
    <PaginationItem v-for="page in 5" :key="page" :value="page">
      {{ page }}
    </PaginationItem>
    <PaginationEllipsis />
    <PaginationNext />
    <PaginationLast />
  </PaginationContent>
</Pagination>`

const usageCode = '<' + `script setup lang="ts">
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationNext } from '@nova-vue/ui/pagination'
<` + `/script>

<` + `template>
  <Pagination :total="100" :items-per-page="10">
    <PaginationContent>
      <PaginationPrevious />
      <PaginationItem v-for="page in 10" :key="page" :value="page">
        {{ page }}
      </PaginationItem>
      <PaginationNext />
    </PaginationContent>
  </Pagination>
</` + `template>`
</script>
