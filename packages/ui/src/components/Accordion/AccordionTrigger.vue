<script setup lang="ts">
import { computed } from 'vue'
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends AccordionTriggerProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'flex flex-1 items-center justify-between gap-4',
      // Typography
      'text-base font-medium sm:text-sm',
      // Spacing
      'py-4',
      // Focus states
      'outline-none transition-colors',
      'focus-visible:underline',
      // Hover
      'hover:underline',
      // Icon rotation
      '[&[data-state=open]>svg]:rotate-180',
      // Disabled
      'disabled:pointer-events-none disabled:opacity-64',
    ],
    props.class
  )
)
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger v-bind="forwarded" :class="classes">
      <slot />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-4 shrink-0 text-muted-foreground transition-transform duration-200"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </AccordionTrigger>
  </AccordionHeader>
</template>
