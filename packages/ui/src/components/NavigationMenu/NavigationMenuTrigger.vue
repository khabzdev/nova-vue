<script setup lang="ts">
import { computed } from 'vue'
import { NavigationMenuTrigger, type NavigationMenuTriggerProps, useForwardProps } from 'reka-ui'
import { Icon } from '@iconify/vue'
import { cn } from '@/utils/cn'

interface Props extends NavigationMenuTriggerProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'group inline-flex items-center justify-center gap-1.5',
      // Typography
      'text-sm font-medium',
      // Spacing
      'h-9 px-3 sm:h-8',
      // Shape
      'rounded-lg',
      // Colors
      'bg-background text-foreground',
      // Transitions
      'outline-none transition-colors',
      // Focus states
      'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
      // Hover
      'hover:bg-accent hover:text-accent-foreground',
      // Active/open state
      'data-[state=open]:bg-accent/50',
      // Disabled
      'disabled:pointer-events-none disabled:opacity-64',
    ],
    props.class
  )
)
</script>

<template>
  <NavigationMenuTrigger v-bind="forwarded" :class="classes">
    <slot />
    <Icon
      icon="hugeicons:arrow-down-01"
      width="14"
      height="14"
      class="relative top-px ml-0.5 transition-transform duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTrigger>
</template>
