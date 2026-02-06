<script setup lang="ts">
import { computed, inject, type Ref, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  ToggleGroupItem as ToggleGroupItemPrimitive,
  type ToggleGroupItemProps,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/utils/cn'

const toggleGroupItemVariants = cva(
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
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background focus-visible:z-10',
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
          'bg-transparent text-foreground',
          'hover:bg-accent hover:text-accent-foreground',
          'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
          'first:rounded-l-lg first:rounded-r-none last:rounded-r-lg last:rounded-l-none [&:not(:first-child):not(:last-child)]:rounded-none',
          'border-r border-input last:border-r-0',
        ],
      },
      size: {
        default: 'h-9 min-w-9 px-3',
        sm: 'h-8 min-w-8 px-2.5',
        lg: 'h-10 min-w-10 px-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type ToggleGroupItemVariants = VariantProps<typeof toggleGroupItemVariants>

interface Props extends ToggleGroupItemProps {
  variant?: ToggleGroupItemVariants['variant']
  size?: ToggleGroupItemVariants['size']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: undefined,
  size: undefined,
})

const forwarded = useForwardProps(props)
const { class: extraClasses } = toRefs(props)

// Inject from parent ToggleGroup with fallbacks
const groupVariant = inject<Ref<ToggleGroupItemVariants['variant']>>('toggleGroupVariant')
const groupSize = inject<Ref<ToggleGroupItemVariants['size']>>('toggleGroupSize')

const variant = computed(() => props.variant ?? groupVariant?.value ?? 'default')
const size = computed(() => props.size ?? groupSize?.value ?? 'default')

const classes = computed(() =>
  cn(toggleGroupItemVariants({ variant: variant.value, size: size.value }), extraClasses.value)
)
</script>

<template>
  <ToggleGroupItemPrimitive v-bind="forwarded" :class="classes">
    <slot />
  </ToggleGroupItemPrimitive>
</template>
