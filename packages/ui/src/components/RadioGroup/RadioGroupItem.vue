<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  RadioGroupItem as RadioGroupItemPrimitive,
  RadioGroupIndicator,
  type RadioGroupItemProps,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/utils/cn'

const radioItemVariants = cva(
  [
    // Layout
    'peer aspect-square relative inline-flex items-center justify-center shrink-0',
    // Shape
    'rounded-full border',
    // Ring styling
    'ring-offset-background',
    // Focus state
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    // Disabled state
    'disabled:cursor-not-allowed disabled:opacity-64',
    // Transitions
    'transition-colors',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-input bg-background',
          'data-[state=checked]:border-primary',
          'hover:border-primary/80',
        ],
        destructive: [
          'border-input bg-background',
          'data-[state=checked]:border-destructive',
          'hover:border-destructive/80',
        ],
      },
      size: {
        default: 'size-4',
        sm: 'size-3.5',
        lg: 'size-5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const indicatorVariants = cva(
  [
    'rounded-full',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary',
        destructive: 'bg-destructive',
      },
      size: {
        default: 'size-2',
        sm: 'size-1.5',
        lg: 'size-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type RadioGroupItemVariants = VariantProps<typeof radioItemVariants>

interface Props extends RadioGroupItemProps {
  variant?: RadioGroupItemVariants['variant']
  size?: RadioGroupItemVariants['size']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

const forwarded = useForwardProps(props)
const { variant, size, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(radioItemVariants({ variant: variant.value, size: size.value }), extraClasses.value)
)

const indicatorClasses = computed(() =>
  indicatorVariants({ variant: variant.value, size: size.value })
)
</script>

<template>
  <RadioGroupItemPrimitive v-bind="forwarded" :class="classes">
    <RadioGroupIndicator class="flex items-center justify-center">
      <span :class="indicatorClasses" />
    </RadioGroupIndicator>
  </RadioGroupItemPrimitive>
</template>
