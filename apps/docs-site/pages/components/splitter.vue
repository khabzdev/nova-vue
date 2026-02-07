<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Splitter</h1>
      <p>Resizable split panes for flexible layouts.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Horizontal" :code="horizontalCode">
      <Splitter direction="horizontal" class="max-w-md rounded-lg border h-48">
        <SplitterPanel :default-size="50">
          <div class="flex h-full items-center justify-center p-6">
            <span class="font-semibold">Left</span>
          </div>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="50">
          <div class="flex h-full items-center justify-center p-6">
            <span class="font-semibold">Right</span>
          </div>
        </SplitterPanel>
      </Splitter>
    </ComponentPreview>

    <ComponentPreview title="Vertical" :code="verticalCode">
      <Splitter direction="vertical" class="max-w-md rounded-lg border h-64">
        <SplitterPanel :default-size="50">
          <div class="flex h-full items-center justify-center p-6">
            <span class="font-semibold">Top</span>
          </div>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="50">
          <div class="flex h-full items-center justify-center p-6">
            <span class="font-semibold">Bottom</span>
          </div>
        </SplitterPanel>
      </Splitter>
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
          <td><code>Splitter</code></td>
          <td>Container for splitter panels</td>
        </tr>
        <tr>
          <td><code>SplitterPanel</code></td>
          <td>Resizable panel content</td>
        </tr>
        <tr>
          <td><code>SplitterResizeHandle</code></td>
          <td>Draggable resize handle</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>Splitter</h3>
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
          <td><code>direction</code></td>
          <td><code>'horizontal' | 'vertical'</code></td>
          <td><code>'horizontal'</code></td>
          <td>Split direction</td>
        </tr>
      </tbody>
    </table>

    <h3>SplitterPanel</h3>
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
          <td><code>defaultSize</code></td>
          <td><code>number</code></td>
          <td>-</td>
          <td>Initial size percentage</td>
        </tr>
        <tr>
          <td><code>minSize</code></td>
          <td><code>number</code></td>
          <td><code>10</code></td>
          <td>Minimum size percentage</td>
        </tr>
        <tr>
          <td><code>maxSize</code></td>
          <td><code>number</code></td>
          <td><code>90</code></td>
          <td>Maximum size percentage</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Splitter, SplitterPanel, SplitterResizeHandle } from '@nova-vue/ui/splitter'

definePageMeta({
  layout: 'default'
})

const horizontalCode = `<Splitter direction="horizontal" class="rounded-lg border h-48">
  <SplitterPanel :default-size="50">
    <div>Left Panel</div>
  </SplitterPanel>
  <SplitterResizeHandle />
  <SplitterPanel :default-size="50">
    <div>Right Panel</div>
  </SplitterPanel>
</Splitter>`

const verticalCode = `<Splitter direction="vertical" class="rounded-lg border h-64">
  <SplitterPanel :default-size="50">
    <div>Top Panel</div>
  </SplitterPanel>
  <SplitterResizeHandle />
  <SplitterPanel :default-size="50">
    <div>Bottom Panel</div>
  </SplitterPanel>
</Splitter>`

const usageCode = '<' + `script setup lang="ts">
import { Splitter, SplitterPanel, SplitterResizeHandle } from '@nova-vue/ui/splitter'
<` + `/script>

<` + `template>
  <Splitter direction="horizontal">
    <SplitterPanel :default-size="50">Left</SplitterPanel>
    <SplitterResizeHandle />
    <SplitterPanel :default-size="50">Right</SplitterPanel>
  </Splitter>
</` + `template>`
</script>
