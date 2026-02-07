<script setup lang="ts">
import { computed } from 'vue'
import { ComboboxViewport, type ComboboxViewportProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ComboboxViewportProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    'max-h-[300px] overflow-y-auto overflow-x-hidden p-1',
    props.class
  )
)
</script>

<template>
  <ComboboxViewport v-bind="forwarded" :class="classes">
    <slot />
  </ComboboxViewport>
</template>
