<script setup lang="ts">
import { computed } from 'vue'
import { ComboboxLabel, type ComboboxLabelProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ComboboxLabelProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn('px-2 py-1.5 text-sm font-semibold text-muted-foreground', props.class)
)
</script>

<template>
  <ComboboxLabel v-bind="forwarded" :class="classes">
    <slot />
  </ComboboxLabel>
</template>
