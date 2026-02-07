<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Toast</h1>
      <p>Brief notification messages.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Button @click="showToast">Show Toast</Button>
    </ComponentPreview>

    <ComponentPreview title="With Title" :code="titleCode">
      <Button variant="outline" @click="showTitleToast">With Title</Button>
    </ComponentPreview>

    <ComponentPreview title="Destructive" :code="destructiveCode">
      <Button variant="destructive" @click="showDestructiveToast">Destructive</Button>
    </ComponentPreview>

    <h2>Usage</h2>

    <CodeBlock :code="usageCode" lang="vue" />

    <h2>Setup</h2>

    <p>Add the <code>Toaster</code> component to your app root:</p>

    <CodeBlock :code="setupCode" lang="vue" />

    <h2>useToast API</h2>

    <table class="props-table">
      <thead>
        <tr>
          <th>Option</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>title</code></td>
          <td><code>string</code></td>
          <td>Toast title</td>
        </tr>
        <tr>
          <td><code>description</code></td>
          <td><code>string</code></td>
          <td>Toast description</td>
        </tr>
        <tr>
          <td><code>variant</code></td>
          <td><code>'default' | 'destructive'</code></td>
          <td>Toast style</td>
        </tr>
        <tr>
          <td><code>duration</code></td>
          <td><code>number</code></td>
          <td>Auto-dismiss time in ms</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
import { useToast } from '@nova-vue/ui/toast'

definePageMeta({
  layout: 'default'
})

const { toast } = useToast()

const showToast = () => {
  toast({
    description: 'Your message has been sent.',
  })
}

const showTitleToast = () => {
  toast({
    title: 'Scheduled',
    description: 'Friday, February 10, 2023 at 5:57 PM',
  })
}

const showDestructiveToast = () => {
  toast({
    variant: 'destructive',
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
  })
}

const defaultCode = `const { toast } = useToast()

toast({
  description: 'Your message has been sent.',
})`

const titleCode = `toast({
  title: 'Scheduled',
  description: 'Friday, February 10, 2023 at 5:57 PM',
})`

const destructiveCode = `toast({
  variant: 'destructive',
  title: 'Uh oh! Something went wrong.',
  description: 'There was a problem with your request.',
})`

const usageCode = '<' + `script setup lang="ts">
import { useToast } from '@nova-vue/ui/toast'

const { toast } = useToast()

const showToast = () => {
  toast({
    title: 'Success',
    description: 'Operation completed.',
  })
}
<` + `/script>

<` + `template>
  <Button @click="showToast">Show Toast</Button>
</` + `template>`

const setupCode = '<' + `!-- App.vue -->
<` + `template>
  <RouterView />
  <Toaster />
</` + `template>

<` + `script setup>
import { Toaster } from '@nova-vue/ui/toast'
<` + `/script>`
</script>
