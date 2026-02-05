<script setup lang="ts">
import { computed } from 'vue'
import { AccordionHeader, AccordionTrigger, type AccordionTriggerProps, useForwardProps } from 'reka-ui'
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
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
      <HugeiconsIcon :icon="ArrowDown01Icon" :size="16" class="shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionTrigger>
  </AccordionHeader>
</template>
