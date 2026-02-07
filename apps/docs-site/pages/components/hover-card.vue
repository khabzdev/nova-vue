<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Hover Card</h1>
      <p>Preview content when hovering over a trigger.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <HoverCard>
        <HoverCardTrigger as-child>
          <Button variant="link">@nova-vue</Button>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between space-x-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>NV</AvatarFallback>
            </Avatar>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@nova-vue</h4>
              <p class="text-sm">
                Modern Vue 3 component library built with Reka UI and Tailwind CSS.
              </p>
              <div class="flex items-center pt-2">
                <Icon name="hugeicons:calendar-01" class="mr-2 size-4 opacity-70" />
                <span class="text-xs text-muted-foreground">Joined January 2024</span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
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
          <td><code>HoverCard</code></td>
          <td>Root component</td>
        </tr>
        <tr>
          <td><code>HoverCardTrigger</code></td>
          <td>Element that triggers the hover card</td>
        </tr>
        <tr>
          <td><code>HoverCardContent</code></td>
          <td>Hover card content container</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>HoverCardContent</h3>
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
          <td><code>side</code></td>
          <td><code>string</code></td>
          <td><code>'bottom'</code></td>
          <td>Position (top, bottom, left, right)</td>
        </tr>
        <tr>
          <td><code>sideOffset</code></td>
          <td><code>number</code></td>
          <td><code>4</code></td>
          <td>Distance from trigger</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@nova-vue/ui/avatar'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@nova-vue/ui/hover-card'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<HoverCard>
  <HoverCardTrigger as-child>
    <Button variant="link">@nova-vue</Button>
  </HoverCardTrigger>
  <HoverCardContent class="w-80">
    <div class="flex space-x-4">
      <Avatar>
        <AvatarImage src="..." />
        <AvatarFallback>NV</AvatarFallback>
      </Avatar>
      <div class="space-y-1">
        <h4 class="text-sm font-semibold">@nova-vue</h4>
        <p class="text-sm">Description text here.</p>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`

const usageCode = '<' + `script setup lang="ts">
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@nova-vue/ui/hover-card'
<` + `/script>

<` + `template>
  <HoverCard>
    <HoverCardTrigger as-child>
      <Button variant="link">Hover me</Button>
    </HoverCardTrigger>
    <HoverCardContent>
      Content shown on hover
    </HoverCardContent>
  </HoverCard>
</` + `template>`
</script>
