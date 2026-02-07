<script setup lang="ts">
import { computed } from 'vue'
import { ComboboxItem, type ComboboxItemEmits, type ComboboxItemProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ComboboxItemProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<ComboboxItemEmits>()

const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'relative flex cursor-default select-none items-center gap-2',
      // Spacing
      'rounded-lg px-2 py-1.5',
      // Typography
      'text-sm',
      // States
      'outline-none transition-colors',
      'hover:bg-accent hover:text-accent-foreground',
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
      // Disabled
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      // Icon styling
      '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    ],
    props.class
  )
)
</script>

<template>
  <ComboboxItem v-bind="forwarded" :class="classes">
    <slot />
  </ComboboxItem>
</template>
