<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { Label as RekaLabel, type LabelProps } from 'reka-ui'
import { cn } from '@/utils/cn'

const labelVariants = cva(
  [
    // Typography
    'text-sm font-medium leading-none',
    // Peer disabled state (when associated input is disabled)
    'peer-disabled:cursor-not-allowed peer-disabled:opacity-64',
  ],
  {
    variants: {
      variant: {
        default: 'text-foreground',
        muted: 'text-muted-foreground',
        destructive: 'text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export type LabelVariants = VariantProps<typeof labelVariants>

interface Props extends LabelProps {
  variant?: LabelVariants['variant']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const { variant, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(labelVariants({ variant: variant.value }), extraClasses.value)
)
</script>

<template>
  <RekaLabel :class="classes" v-bind="$attrs">
    <slot />
  </RekaLabel>
</template>
