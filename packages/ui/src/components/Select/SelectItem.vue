<script setup lang="ts">
import { computed } from 'vue'
import {
  SelectItem,
  SelectItemIndicator,
  type SelectItemProps,
  SelectItemText,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends SelectItemProps {
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
  <SelectItem v-bind="forwarded" :class="classes">
    <span class="absolute right-2 flex size-4 items-center justify-center">
      <SelectItemIndicator>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-4 sm:size-3.5"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </SelectItemIndicator>
    </span>
    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
