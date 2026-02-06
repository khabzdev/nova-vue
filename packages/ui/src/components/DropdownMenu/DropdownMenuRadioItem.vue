<script setup lang="ts">
import { computed } from 'vue'
import {
  DropdownMenuItemIndicator,
  DropdownMenuRadioItem,
  type DropdownMenuRadioItemEmits,
  type DropdownMenuRadioItemProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends DropdownMenuRadioItemProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<DropdownMenuRadioItemEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'relative flex cursor-default select-none items-center',
      // Spacing
      'py-1.5 pl-8 pr-2',
      // Typography
      'text-base sm:text-sm',
      // Shape
      'rounded-lg',
      // Focus & hover states
      'outline-none transition-colors',
      'hover:bg-accent/64 focus:bg-accent focus:text-accent-foreground',
      // Highlighted state
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
      // Disabled
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    props.class
  )
)
</script>

<template>
  <DropdownMenuRadioItem v-bind="forwarded" :class="classes">
    <span class="absolute left-2 flex size-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <span class="size-2 rounded-full bg-current" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
