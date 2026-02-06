<script setup lang="ts">
import { computed, provide, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  ToggleGroupRoot,
  type ToggleGroupRootEmits,
  type ToggleGroupRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/utils/cn'

const toggleGroupVariants = cva(
  [
    'inline-flex items-center justify-center gap-1',
  ],
  {
    variants: {
      variant: {
        default: '',
        outline: 'rounded-lg border border-input shadow-xs/5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export type ToggleGroupVariants = VariantProps<typeof toggleGroupVariants>

interface Props extends ToggleGroupRootProps {
  variant?: ToggleGroupVariants['variant']
  size?: 'default' | 'sm' | 'lg'
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

const emit = defineEmits<ToggleGroupRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const { variant, size, class: extraClasses } = toRefs(props)

// Provide variant and size to child items
provide('toggleGroupVariant', variant)
provide('toggleGroupSize', size)

const classes = computed(() =>
  cn(toggleGroupVariants({ variant: variant.value }), extraClasses.value)
)
</script>

<template>
  <ToggleGroupRoot v-bind="forwarded" :class="classes">
    <slot />
  </ToggleGroupRoot>
</template>
