<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { Separator as RekaSeparator, type SeparatorProps } from 'reka-ui'
import { cn } from '@/utils/cn'

const separatorVariants = cva(
  [
    'shrink-0 bg-border',
  ],
  {
    variants: {
      orientation: {
        horizontal: 'h-px w-full',
        vertical: 'h-full w-px',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  }
)

export type SeparatorVariants = VariantProps<typeof separatorVariants>

interface Props extends /* @vue-ignore */ SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  decorative?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
  decorative: true,
})

const { orientation, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(separatorVariants({ orientation: orientation.value }), extraClasses.value)
)
</script>

<template>
  <RekaSeparator
    :orientation="orientation"
    :decorative="decorative"
    :class="classes"
    v-bind="$attrs"
  />
</template>
