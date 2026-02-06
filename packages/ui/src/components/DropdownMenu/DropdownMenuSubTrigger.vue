<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuSubTrigger, type DropdownMenuSubTriggerProps, useForwardProps } from 'reka-ui'
import { Icon } from '@iconify/vue'
import { cn } from '@/utils/cn'

interface Props extends DropdownMenuSubTriggerProps {
  class?: string
  inset?: boolean
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'flex cursor-default select-none items-center gap-2',
      // Spacing
      'px-2 py-1.5',
      // Typography
      'text-base sm:text-sm',
      // Shape
      'rounded-lg',
      // Focus & hover states
      'outline-none transition-colors',
      'hover:bg-accent/64 focus:bg-accent',
      // Highlighted / Open state
      'data-[highlighted]:bg-accent',
      'data-[state=open]:bg-accent',
    ],
    props.inset && 'pl-8',
    props.class
  )
)
</script>

<template>
  <DropdownMenuSubTrigger v-bind="forwarded" :class="classes">
    <slot />
    <Icon icon="hugeicons:arrow-right-01" width="16" height="16" class="ml-auto" />
  </DropdownMenuSubTrigger>
</template>
