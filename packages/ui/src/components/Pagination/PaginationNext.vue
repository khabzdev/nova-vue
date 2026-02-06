<script setup lang="ts">
import { computed } from 'vue'
import { PaginationNext, type PaginationNextProps, useForwardProps } from 'reka-ui'
import { Icon } from '@iconify/vue'
import { cn } from '@/utils/cn'

interface Props extends PaginationNextProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'inline-flex items-center justify-center gap-1',
      // Size
      'h-9 px-2.5',
      // Typography
      'text-sm font-medium',
      // Shape
      'rounded-lg',
      // Transitions
      'outline-none transition-colors',
      // States
      'hover:bg-accent/64 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
      'disabled:pointer-events-none disabled:opacity-64',
    ],
    props.class
  )
)
</script>

<template>
  <PaginationNext v-bind="forwarded" :class="classes">
    <slot>
      <span>Next</span>
      <Icon icon="hugeicons:arrow-right-01" width="16" height="16" />
    </slot>
  </PaginationNext>
</template>
