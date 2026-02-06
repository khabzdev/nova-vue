<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  Toggle as TogglePrimitive,
  type ToggleEmits,
  type ToggleProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/utils/cn'

const toggleVariants = cva(
  [
    // Layout
    'inline-flex items-center justify-center gap-2',
    // Typography
    'font-medium text-sm',
    // Shape
    'rounded-lg',
    // Transitions
    'outline-none transition-colors',
    // Focus states
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
    // Disabled states
    'disabled:pointer-events-none disabled:opacity-64',
    // SVG styling
    '[&_svg]:pointer-events-none [&_svg]:shrink-0',
    "[&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-transparent text-foreground',
          'hover:bg-accent hover:text-accent-foreground',
          'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
        ],
        outline: [
          'border border-input bg-transparent text-foreground',
          'shadow-xs/5',
          'hover:bg-accent hover:text-accent-foreground',
          'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
        ],
      },
      size: {
        default: 'h-9 px-3',
        sm: 'h-8 px-2.5',
        lg: 'h-10 px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type ToggleVariants = VariantProps<typeof toggleVariants>

interface Props extends ToggleProps {
  variant?: ToggleVariants['variant']
  size?: ToggleVariants['size']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

const emit = defineEmits<ToggleEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const { variant, size, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(toggleVariants({ variant: variant.value, size: size.value }), extraClasses.value)
)
</script>

<template>
  <TogglePrimitive v-bind="forwarded" :class="classes">
    <slot />
  </TogglePrimitive>
</template>
