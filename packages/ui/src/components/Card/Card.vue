<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const cardVariants = cva(
  [
    // Layout
    'relative flex flex-col',
    // Shape & border
    'rounded-xl border',
    // Background
    'bg-card text-card-foreground',
    // Shadow
    'shadow-sm',
  ],
  {
    variants: {
      variant: {
        default: 'border-border',
        outline: [
          'border-input',
          'shadow-xs/5',
          'dark:bg-input/16',
        ],
        ghost: 'border-transparent shadow-none bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export type CardVariants = VariantProps<typeof cardVariants>

interface Props {
  variant?: CardVariants['variant']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const { variant, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(cardVariants({ variant: variant.value }), extraClasses.value)
)
</script>

<template>
  <div :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>
