<script setup lang="ts">
import { computed } from 'vue'
import { SelectLabel, type SelectLabelProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends SelectLabelProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      'px-2 py-1.5',
      'text-xs font-medium uppercase tracking-wide',
      'text-muted-foreground',
    ],
    props.class
  )
)
</script>

<template>
  <SelectLabel v-bind="forwarded" :class="classes">
    <slot />
  </SelectLabel>
</template>
