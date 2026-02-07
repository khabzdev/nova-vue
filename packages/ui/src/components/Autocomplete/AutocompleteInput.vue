<script setup lang="ts">
import { computed } from 'vue'
import { ComboboxAnchor, ComboboxInput, type ComboboxInputProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ComboboxInputProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'relative flex h-9 w-full items-center gap-2 sm:h-8',
      // Typography
      'text-base sm:text-sm',
      // Shape & border (COSS style)
      'rounded-lg border border-input',
      // Padding accounting for border
      'px-[calc(theme(spacing.3)-1px)] py-2',
      // Colors
      'bg-popover text-foreground',
      // Shadow system
      'shadow-xs/5',
      // Inner radius overlay
      'before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)]',
      'not-disabled:not-active:before:shadow-[0_1px_theme(colors.black/4%)]',
      // Dark mode refinements
      'dark:bg-input/32',
      'dark:not-disabled:before:shadow-[0_-1px_theme(colors.white/2%)]',
      // Focus within states
      'outline-none transition-shadow',
      'focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-1 focus-within:ring-offset-background',
      // Open state
      'data-[state=open]:ring-2 data-[state=open]:ring-ring',
      // Disabled
      'has-[:disabled]:pointer-events-none has-[:disabled]:opacity-64 has-[:disabled]:shadow-none',
    ],
    props.class
  )
)

const inputClasses = computed(() =>
  cn([
    'flex-1 bg-transparent outline-none placeholder:text-muted-foreground',
    'disabled:cursor-not-allowed',
  ])
)
</script>

<template>
  <ComboboxAnchor :class="classes">
    <slot name="leading" />
    <ComboboxInput v-bind="forwarded" :class="inputClasses" />
    <slot name="trailing" />
  </ComboboxAnchor>
</template>
