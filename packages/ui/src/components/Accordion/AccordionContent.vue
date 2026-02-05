<script setup lang="ts">
import { computed } from 'vue'
import { AccordionContent, type AccordionContentProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends AccordionContentProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      'overflow-hidden',
      'text-base sm:text-sm',
      // Animation using Reka UI CSS custom properties
      'data-[state=open]:animate-accordion-down',
      'data-[state=closed]:animate-accordion-up',
    ],
    props.class
  )
)

const contentClasses = computed(() =>
  cn(
    [
      'pb-4 pt-0',
      'text-muted-foreground',
    ]
  )
)
</script>

<template>
  <AccordionContent v-bind="forwarded" :class="classes">
    <div :class="contentClasses">
      <slot />
    </div>
  </AccordionContent>
</template>
