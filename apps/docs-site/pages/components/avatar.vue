<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Avatar</h1>
      <p>Display user profile images with fallback support.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </ComponentPreview>

    <ComponentPreview title="Sizes" :code="sizesCode">
      <Avatar size="sm">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </ComponentPreview>

    <ComponentPreview title="Fallback" :code="fallbackCode">
      <Avatar>
        <AvatarImage src="https://broken-link.com/image.png" alt="User" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>
          <Icon name="hugeicons:user" class="size-4" />
        </AvatarFallback>
      </Avatar>
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
          <td><code>Avatar</code></td>
          <td>Root container component</td>
        </tr>
        <tr>
          <td><code>AvatarImage</code></td>
          <td>Image element with loading state</td>
        </tr>
        <tr>
          <td><code>AvatarFallback</code></td>
          <td>Fallback content shown when image fails</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>Avatar</h3>
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
          <td><code>size</code></td>
          <td><code>string</code></td>
          <td><code>'default'</code></td>
          <td>Avatar size (sm, default, lg)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '@nova-vue/ui/avatar'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`

const sizesCode = `<Avatar size="sm">
  <AvatarImage src="..." alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarImage src="..." alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
<Avatar size="lg">
  <AvatarImage src="..." alt="User" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`

const fallbackCode = `<Avatar>
  <AvatarImage src="broken-link" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
<Avatar>
  <AvatarFallback>
    <Icon name="hugeicons:user" class="size-4" />
  </AvatarFallback>
</Avatar>`

const usageCode = '<' + `script setup lang="ts">
import { Avatar, AvatarImage, AvatarFallback } from '@nova-vue/ui/avatar'
<` + `/script>

<` + `template>
  <Avatar>
    <AvatarImage src="https://example.com/avatar.png" alt="User" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
</` + `template>`
</script>
