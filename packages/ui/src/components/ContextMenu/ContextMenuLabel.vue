<script setup lang="ts">
import { computed } from 'vue'
import { ContextMenuLabel, type ContextMenuLabelProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ContextMenuLabelProps {
  class?: string
  inset?: boolean
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      'px-2 py-1.5',
      'text-sm font-semibold',
    ],
    props.inset && 'pl-8',
    props.class
  )
)
</script>

<template>
  <ContextMenuLabel v-bind="forwarded" :class="classes">
    <slot />
  </ContextMenuLabel>
</template>
