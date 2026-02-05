<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'reka-ui'
import { cn } from '@/utils/cn'

const sliderVariants = cva(
  [
    // Layout
    'relative flex w-full touch-none select-none items-center',
  ],
  {
    variants: {
      orientation: {
        horizontal: 'h-5',
        vertical: 'h-full w-5 flex-col',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
)

const trackVariants = cva(
  [
    // Shape
    'relative grow overflow-hidden rounded-full bg-secondary',
  ],
  {
    variants: {
      orientation: {
        horizontal: 'h-2 w-full',
        vertical: 'h-full w-2',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
)

const rangeVariants = cva(
  [
    'absolute rounded-full',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary',
        destructive: 'bg-destructive',
        success: 'bg-green-500 dark:bg-green-600',
      },
      orientation: {
        horizontal: 'h-full',
        vertical: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      orientation: 'horizontal',
    },
  }
)

const thumbVariants = cva(
  [
    // Layout
    'block rounded-full border-2 bg-background',
    // Ring for focus
    'ring-offset-background',
    // Transitions
    'transition-colors',
    // Focus state
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    // Disabled state
    'disabled:pointer-events-none disabled:opacity-64',
  ],
  {
    variants: {
      variant: {
        default: 'border-primary',
        destructive: 'border-destructive',
        success: 'border-green-500 dark:border-green-600',
      },
      size: {
        default: 'size-5',
        sm: 'size-4',
        lg: 'size-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type SliderVariants = VariantProps<typeof sliderVariants> &
  VariantProps<typeof rangeVariants> &
  VariantProps<typeof thumbVariants>

interface Props {
  variant?: 'default' | 'destructive' | 'success'
  size?: 'default' | 'sm' | 'lg'
  orientation?: 'horizontal' | 'vertical'
  class?: string
  modelValue?: number[]
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  minStepsBetweenThumbs?: number
  disabled?: boolean
  inverted?: boolean
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
  orientation: 'horizontal',
  min: 0,
  max: 100,
  step: 1,
})

const emit = defineEmits<{
  'update:modelValue': [value: number[]]
}>()

const { variant, size, orientation, class: extraClasses } = toRefs(props)

const rootClasses = computed(() =>
  cn(sliderVariants({ orientation: orientation.value }), extraClasses.value)
)

const trackClasses = computed(() =>
  trackVariants({ orientation: orientation.value })
)

const rangeClasses = computed(() =>
  rangeVariants({ variant: variant.value, orientation: orientation.value })
)

const thumbClasses = computed(() =>
  thumbVariants({ variant: variant.value, size: size.value })
)

// Compute the number of thumbs based on modelValue or defaultValue
const thumbCount = computed(() => {
  if (props.modelValue) return props.modelValue.length
  if (props.defaultValue) return props.defaultValue.length
  return 1
})
</script>

<template>
  <SliderRoot
    :class="rootClasses"
    :model-value="modelValue"
    :default-value="defaultValue"
    :min="min"
    :max="max"
    :step="step"
    :min-steps-between-thumbs="minStepsBetweenThumbs"
    :disabled="disabled"
    :inverted="inverted"
    :orientation="orientation"
    :name="name"
    v-bind="$attrs"
    @update:model-value="(val) => val && emit('update:modelValue', val)"
  >
    <SliderTrack :class="trackClasses">
      <SliderRange :class="rangeClasses" />
    </SliderTrack>
    <SliderThumb
      v-for="(_, index) in thumbCount"
      :key="index"
      :class="thumbClasses"
    />
  </SliderRoot>
</template>
