<script setup lang="ts">
import { computed } from 'vue'
import { MenubarTrigger, type MenubarTriggerProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends MenubarTriggerProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'flex cursor-default select-none items-center',
      // Spacing
      'px-3 py-1',
      // Typography
      'text-sm font-medium',
      // Shape
      'rounded-md',
      // Focus & hover states
      'outline-none transition-colors',
      'hover:bg-accent hover:text-accent-foreground',
      'focus:bg-accent focus:text-accent-foreground',
      // Open state
      'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
    ],
    props.class
  )
)
</script>

<template>
  <MenubarTrigger v-bind="forwarded" :class="classes">
    <slot />
  </MenubarTrigger>
</template>
