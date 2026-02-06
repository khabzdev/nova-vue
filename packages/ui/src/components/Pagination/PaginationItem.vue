<script setup lang="ts">
import { computed } from 'vue'
import { PaginationListItem, type PaginationListItemProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends PaginationListItemProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'inline-flex items-center justify-center',
      // Size
      'size-9',
      // Typography
      'text-sm font-medium',
      // Shape
      'rounded-lg',
      // Transitions
      'outline-none transition-colors',
      // States
      'hover:bg-accent/64 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
      'disabled:pointer-events-none disabled:opacity-64',
      // Selected state
      'data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground',
    ],
    props.class
  )
)
</script>

<template>
  <PaginationListItem v-bind="forwarded" :class="classes">
    <slot>{{ value }}</slot>
  </PaginationListItem>
</template>
