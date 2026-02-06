<script setup lang="ts">
import { computed } from 'vue'
import { ContextMenuItem, type ContextMenuItemEmits, type ContextMenuItemProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ContextMenuItemProps {
  class?: string
  inset?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<ContextMenuItemEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'relative flex cursor-default select-none items-center gap-2',
      // Spacing
      'px-2 py-1.5',
      // Typography
      'text-base sm:text-sm',
      // Shape
      'rounded-lg',
      // Focus & hover states
      'outline-none transition-colors',
      'hover:bg-accent/64 focus:bg-accent focus:text-accent-foreground',
      // Highlighted state (keyboard navigation)
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
      // Disabled
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      // SVG styling
      '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    ],
    props.inset && 'pl-8',
    props.class
  )
)
</script>

<template>
  <ContextMenuItem v-bind="forwarded" :class="classes">
    <slot />
  </ContextMenuItem>
</template>
