<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuLabel, type DropdownMenuLabelProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends DropdownMenuLabelProps {
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
  <DropdownMenuLabel v-bind="forwarded" :class="classes">
    <slot />
  </DropdownMenuLabel>
</template>
