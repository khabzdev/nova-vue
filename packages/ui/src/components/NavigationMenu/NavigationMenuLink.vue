<script setup lang="ts">
import { computed } from 'vue'
import { NavigationMenuLink, type NavigationMenuLinkProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends NavigationMenuLinkProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'block select-none',
      // Spacing
      'rounded-md p-3',
      // Typography
      'text-sm leading-none no-underline',
      // Transitions
      'outline-none transition-colors',
      // Focus states
      'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
      // Hover
      'hover:bg-accent hover:text-accent-foreground',
      // Active
      'focus:bg-accent focus:text-accent-foreground',
    ],
    props.class
  )
)
</script>

<template>
  <NavigationMenuLink v-bind="forwarded" :class="classes">
    <slot />
  </NavigationMenuLink>
</template>
