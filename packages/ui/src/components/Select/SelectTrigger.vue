<script setup lang="ts">
import { computed } from 'vue'
import { SelectIcon, SelectTrigger, type SelectTriggerProps, useForwardProps } from 'reka-ui'
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowDown01Icon } from '@hugeicons/core-free-icons'
import { cn } from '@/utils/cn'

interface Props extends SelectTriggerProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'relative flex h-9 w-full items-center justify-between gap-2 whitespace-nowrap sm:h-8',
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
      'dark:not-disabled:not-[data-state=open]:before:shadow-[0_-1px_theme(colors.white/6%)]',
      // Focus states
      'outline-none transition-shadow',
      'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
      // Open state
      'data-[state=open]:ring-2 data-[state=open]:ring-ring',
      // Hover
      'hover:bg-accent/50 dark:hover:bg-input/64',
      // Disabled
      'disabled:pointer-events-none disabled:opacity-64 disabled:shadow-none',
      // Touch target
      'pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11',
      // Content clipping
      '[&>span]:line-clamp-1',
      // Placeholder
      'data-[placeholder]:text-muted-foreground',
    ],
    props.class
  )
)
</script>

<template>
  <SelectTrigger v-bind="forwarded" :class="classes">
    <slot />
    <SelectIcon as-child>
      <HugeiconsIcon :icon="ArrowDown01Icon" :size="16" class="shrink-0 opacity-64" />
    </SelectIcon>
  </SelectTrigger>
</template>
