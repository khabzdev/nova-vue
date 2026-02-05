<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const badgeVariants = cva(
  [
    // Layout
    'inline-flex items-center justify-center gap-1',
    // Typography
    'font-medium text-xs',
    // Shape
    'rounded-full border',
    // Transitions
    'transition-colors',
    // SVG styling
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    "[&_svg:not([class*='size-'])]:size-3",
  ],
  {
    variants: {
      variant: {
        default: [
          'border-primary/20 bg-primary/10 text-primary',
          'dark:border-primary/30 dark:bg-primary/20',
        ],
        secondary: [
          'border-secondary bg-secondary text-secondary-foreground',
        ],
        destructive: [
          'border-destructive/20 bg-destructive/10 text-destructive',
          'dark:border-destructive/30 dark:bg-destructive/20',
        ],
        success: [
          'border-green-500/20 bg-green-500/10 text-green-700',
          'dark:border-green-500/30 dark:bg-green-500/20 dark:text-green-400',
        ],
        warning: [
          'border-yellow-500/20 bg-yellow-500/10 text-yellow-700',
          'dark:border-yellow-500/30 dark:bg-yellow-500/20 dark:text-yellow-400',
        ],
        info: [
          'border-blue-500/20 bg-blue-500/10 text-blue-700',
          'dark:border-blue-500/30 dark:bg-blue-500/20 dark:text-blue-400',
        ],
        outline: [
          'border-input bg-transparent text-foreground',
        ],
      },
      size: {
        default: 'h-5 px-2',
        sm: 'h-4 px-1.5 text-[10px]',
        lg: 'h-6 px-2.5 text-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type BadgeVariants = VariantProps<typeof badgeVariants>

interface Props {
  variant?: BadgeVariants['variant']
  size?: BadgeVariants['size']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

const { variant, size, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(badgeVariants({ variant: variant.value, size: size.value }), extraClasses.value)
)
</script>

<template>
  <span :class="classes" v-bind="$attrs">
    <slot />
  </span>
</template>
