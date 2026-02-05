<script setup lang="ts">
import { computed } from 'vue'
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends TabsTriggerProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'inline-flex items-center justify-center',
      // Spacing
      'px-3 py-1 sm:px-2.5',
      // Typography
      'text-sm font-medium whitespace-nowrap',
      // Shape
      'rounded-md',
      // Transitions
      'transition-all',
      // Focus states
      'outline-none',
      'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      // Disabled
      'disabled:pointer-events-none disabled:opacity-50',
      // Active state
      'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
    ],
    props.class
  )
)
</script>

<template>
  <TabsTrigger v-bind="forwarded" :class="classes">
    <slot />
  </TabsTrigger>
</template>
