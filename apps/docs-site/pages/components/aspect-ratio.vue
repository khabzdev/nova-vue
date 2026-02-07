<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Aspect Ratio</h1>
      <p>Maintain consistent width-to-height ratio.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="16:9 Ratio" :code="defaultCode">
      <div class="w-full max-w-md">
        <AspectRatio :ratio="16 / 9" class="bg-muted rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="h-full w-full object-cover"
          />
        </AspectRatio>
      </div>
    </ComponentPreview>

    <ComponentPreview title="1:1 Ratio (Square)" :code="squareCode">
      <div class="w-full max-w-xs">
        <AspectRatio :ratio="1" class="bg-muted rounded-md overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo"
            class="h-full w-full object-cover"
          />
        </AspectRatio>
      </div>
    </ComponentPreview>

    <ComponentPreview title="4:3 Ratio" :code="fourThreeCode">
      <div class="w-full max-w-sm">
        <AspectRatio :ratio="4 / 3" class="bg-muted rounded-md flex items-center justify-center">
          <span class="text-muted-foreground">4:3</span>
        </AspectRatio>
      </div>
    </ComponentPreview>

    <h2>Usage</h2>

    <CodeBlock :code="usageCode" lang="vue" />

    <h2>Props</h2>

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
          <td><code>ratio</code></td>
          <td><code>number</code></td>
          <td><code>1</code></td>
          <td>Aspect ratio (width / height)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { AspectRatio } from '@nova-vue/ui/aspect-ratio'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<AspectRatio :ratio="16 / 9" class="bg-muted rounded-md overflow-hidden">
  <img
    src="https://images.unsplash.com/..."
    alt="Image"
    class="h-full w-full object-cover"
  />
</AspectRatio>`

const squareCode = `<AspectRatio :ratio="1" class="bg-muted rounded-md overflow-hidden">
  <img src="..." alt="Image" class="h-full w-full object-cover" />
</AspectRatio>`

const fourThreeCode = `<AspectRatio :ratio="4 / 3" class="bg-muted rounded-md">
  <span>4:3 content</span>
</AspectRatio>`

const usageCode = '<' + `script setup lang="ts">
import { AspectRatio } from '@nova-vue/ui/aspect-ratio'
<` + `/script>

<` + `template>
  <AspectRatio :ratio="16 / 9">
    <img src="..." alt="" class="h-full w-full object-cover" />
  </AspectRatio>
</` + `template>`
</script>
