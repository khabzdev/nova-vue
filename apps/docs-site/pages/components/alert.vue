<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Alert</h1>
      <p>Display important messages and notifications.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Alert class="max-w-md">
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the CLI.
        </AlertDescription>
      </Alert>
    </ComponentPreview>

    <ComponentPreview title="Variants" :code="variantsCode">
      <div class="flex flex-col gap-4 w-full max-w-md">
        <Alert>
          <Icon name="hugeicons:information-circle" class="size-4" />
          <AlertTitle>Default</AlertTitle>
          <AlertDescription>This is a default alert.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <Icon name="hugeicons:alert-02" class="size-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong.</AlertDescription>
        </Alert>
        <Alert variant="success">
          <Icon name="hugeicons:checkmark-circle-02" class="size-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Operation completed successfully.</AlertDescription>
        </Alert>
        <Alert variant="warning">
          <Icon name="hugeicons:alert-01" class="size-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Please review before continuing.</AlertDescription>
        </Alert>
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
          <td><code>Alert</code></td>
          <td>Root container component</td>
        </tr>
        <tr>
          <td><code>AlertTitle</code></td>
          <td>Alert heading text</td>
        </tr>
        <tr>
          <td><code>AlertDescription</code></td>
          <td>Alert body text</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>Alert</h3>
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
          <td><code>variant</code></td>
          <td><code>string</code></td>
          <td><code>'default'</code></td>
          <td>Alert style (default, destructive, success, warning)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@nova-vue/ui/alert'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the CLI.
  </AlertDescription>
</Alert>`

const variantsCode = `<Alert>
  <Icon name="hugeicons:information-circle" class="size-4" />
  <AlertTitle>Default</AlertTitle>
  <AlertDescription>This is a default alert.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <Icon name="hugeicons:alert-02" class="size-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>

<Alert variant="success">
  <Icon name="hugeicons:checkmark-circle-02" class="size-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>Operation completed.</AlertDescription>
</Alert>`

const usageCode = '<' + `script setup lang="ts">
import { Alert, AlertTitle, AlertDescription } from '@nova-vue/ui/alert'
<` + `/script>

<` + `template>
  <Alert>
    <AlertTitle>Title</AlertTitle>
    <AlertDescription>Description text here.</AlertDescription>
  </Alert>
</` + `template>`
</script>
