<script setup lang="ts">
import { computed } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const alertVariants = cva(
  [
    // Layout
    'relative w-full',
    // Spacing
    'p-4',
    // Shape & border
    'rounded-xl border',
    // Typography
    '[&>svg+div]:translate-y-[-3px]',
    '[&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
    '[&>svg~*]:pl-7',
    // Inner radius overlay
    'before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)]',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-input bg-background text-foreground',
          'dark:border-input/50',
          '[&>svg]:text-foreground',
        ],
        destructive: [
          'border-destructive/50 bg-destructive/10 text-destructive',
          'dark:border-destructive/30 dark:bg-destructive/5',
          '[&>svg]:text-destructive',
        ],
        success: [
          'border-success/50 bg-success/10 text-success-foreground',
          'dark:border-success/30 dark:bg-success/5',
          '[&>svg]:text-success',
        ],
        warning: [
          'border-warning/50 bg-warning/10 text-warning-foreground',
          'dark:border-warning/30 dark:bg-warning/5',
          '[&>svg]:text-warning',
        ],
        info: [
          'border-info/50 bg-info/10 text-info-foreground',
          'dark:border-info/30 dark:bg-info/5',
          '[&>svg]:text-info',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export type AlertVariants = VariantProps<typeof alertVariants>

interface Props {
  variant?: AlertVariants['variant']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const classes = computed(() =>
  cn(alertVariants({ variant: props.variant }), props.class)
)
</script>

<template>
  <div role="alert" :class="classes">
    <slot />
  </div>
</template>
