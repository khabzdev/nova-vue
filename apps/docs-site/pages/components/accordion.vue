<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Accordion</h1>
      <p>Vertically stacked expandable sections.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Accordion type="single" collapsible class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match your theme.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default with smooth transitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ComponentPreview>

    <ComponentPreview title="Multiple" :code="multipleCode">
      <Accordion type="multiple" class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section One</AccordionTrigger>
          <AccordionContent>Content for section one.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section Two</AccordionTrigger>
          <AccordionContent>Content for section two.</AccordionContent>
        </AccordionItem>
      </Accordion>
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
          <td><code>Accordion</code></td>
          <td>Root container</td>
        </tr>
        <tr>
          <td><code>AccordionItem</code></td>
          <td>Individual accordion section</td>
        </tr>
        <tr>
          <td><code>AccordionTrigger</code></td>
          <td>Clickable header to toggle content</td>
        </tr>
        <tr>
          <td><code>AccordionContent</code></td>
          <td>Collapsible content area</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>Accordion</h3>
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
          <td><code>type</code></td>
          <td><code>'single' | 'multiple'</code></td>
          <td><code>'single'</code></td>
          <td>Allow single or multiple items open</td>
        </tr>
        <tr>
          <td><code>collapsible</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Allow closing all items (single mode)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@nova-vue/ui/accordion'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>
      Yes. It comes with default styles.
    </AccordionContent>
  </AccordionItem>
</Accordion>`

const multipleCode = `<Accordion type="multiple">
  <AccordionItem value="item-1">
    <AccordionTrigger>Section One</AccordionTrigger>
    <AccordionContent>Content for section one.</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Section Two</AccordionTrigger>
    <AccordionContent>Content for section two.</AccordionContent>
  </AccordionItem>
</Accordion>`

const usageCode = '<' + `script setup lang="ts">
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@nova-vue/ui/accordion'
<` + `/script>

<` + `template>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Title</AccordionTrigger>
      <AccordionContent>Content</AccordionContent>
    </AccordionItem>
  </Accordion>
</` + `template>`
</script>
