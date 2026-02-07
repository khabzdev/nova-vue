<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const kbdVariants = cva(
  [
    // Layout
    'inline-flex items-center justify-center',
    // Typography
    'font-mono text-xs font-medium',
    // Shape
    'rounded-md border',
    // Colors
    'bg-muted/50 text-muted-foreground',
    'border-border',
    // Shadow for keyboard key effect
    'shadow-[0_1px_0_1px] shadow-border/50',
    // Transitions
    'transition-all duration-75',
    // Active state (key press effect)
    'active:translate-y-px active:shadow-none',
  ],
  {
    variants: {
      size: {
        default: 'min-w-5 h-5 px-1.5',
        sm: 'min-w-4 h-4 px-1 text-[10px]',
        lg: 'min-w-6 h-6 px-2 text-sm',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export type KbdVariants = VariantProps<typeof kbdVariants>

interface Props {
  size?: KbdVariants['size']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})

const { size, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(kbdVariants({ size: size.value }), extraClasses.value)
)
</script>

<template>
  <kbd :class="classes">
    <slot />
  </kbd>
</template>
