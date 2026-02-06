<script setup lang="ts">
import { computed } from 'vue'
import { PaginationLast, type PaginationLastProps, useForwardProps } from 'reka-ui'
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowRightDoubleIcon } from '@hugeicons/core-free-icons'
import { cn } from '@/utils/cn'

interface Props extends PaginationLastProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'inline-flex items-center justify-center',
      // Size
      'size-9',
      // Shape
      'rounded-lg',
      // Transitions
      'outline-none transition-colors',
      // States
      'hover:bg-accent/64 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
      'disabled:pointer-events-none disabled:opacity-64',
    ],
    props.class
  )
)
</script>

<template>
  <PaginationLast v-bind="forwarded" :class="classes">
    <slot>
      <HugeiconsIcon :icon="ArrowRightDoubleIcon" :size="16" />
    </slot>
  </PaginationLast>
</template>
