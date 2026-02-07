<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Tooltip</h1>
      <p>Display additional information on hover.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>This is a tooltip</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </ComponentPreview>

    <ComponentPreview title="Positions" :code="positionsCode">
      <TooltipProvider>
        <div class="flex gap-4">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline" size="icon">
                <Icon name="hugeicons:arrow-up-01" class="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Top</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline" size="icon">
                <Icon name="hugeicons:arrow-down-01" class="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Bottom</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline" size="icon">
                <Icon name="hugeicons:arrow-left-01" class="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Left</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline" size="icon">
                <Icon name="hugeicons:arrow-right-01" class="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Right</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
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
          <td><code>TooltipProvider</code></td>
          <td>Context provider for tooltip settings</td>
        </tr>
        <tr>
          <td><code>Tooltip</code></td>
          <td>Root component for each tooltip</td>
        </tr>
        <tr>
          <td><code>TooltipTrigger</code></td>
          <td>Element that triggers the tooltip</td>
        </tr>
        <tr>
          <td><code>TooltipContent</code></td>
          <td>Tooltip content container</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>TooltipContent</h3>
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
          <td><code>'top'</code></td>
          <td>Position relative to trigger (top, bottom, left, right)</td>
        </tr>
        <tr>
          <td><code>sideOffset</code></td>
          <td><code>number</code></td>
          <td><code>4</code></td>
          <td>Distance from trigger in pixels</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@nova-vue/ui/tooltip'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger as-child>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>This is a tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`

const positionsCode = `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger as-child>
      <Button>Top</Button>
    </TooltipTrigger>
    <TooltipContent side="top">
      <p>Top tooltip</p>
    </TooltipContent>
  </Tooltip>
  
  <Tooltip>
    <TooltipTrigger as-child>
      <Button>Bottom</Button>
    </TooltipTrigger>
    <TooltipContent side="bottom">
      <p>Bottom tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`

const usageCode = '<' + `script setup lang="ts">
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@nova-vue/ui/tooltip'
<` + `/script>

<` + `template>
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger as-child>
        <Button>Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip text</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</` + `template>`
</script>
