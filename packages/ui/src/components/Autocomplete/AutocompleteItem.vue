<script setup lang="ts">
import { computed } from 'vue'
import {
  ComboboxItem,
  ComboboxItemIndicator,
  type ComboboxItemProps,
  useForwardProps,
} from 'reka-ui'
import { Icon } from '@iconify/vue'
import { cn } from '@/utils/cn'

interface Props extends ComboboxItemProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'relative flex w-full cursor-default select-none items-center',
      // Spacing
      'py-1.5 pl-2 pr-8',
      // Typography
      'text-base sm:text-sm',
      // Shape
      'rounded-lg',
      // Focus & hover states (COSS style)
      'outline-none transition-colors',
      'hover:bg-accent/64 focus:bg-accent focus:text-accent-foreground',
      // Highlighted state (keyboard navigation)
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
      // Disabled
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    props.class
  )
)
</script>

<template>
  <ComboboxItem v-bind="forwarded" :class="classes">
    <span class="absolute right-2 flex size-4 items-center justify-center">
      <ComboboxItemIndicator>
        <Icon icon="hugeicons:tick-02" width="14" height="14" />
      </ComboboxItemIndicator>
    </span>
    <slot />
  </ComboboxItem>
</template>
