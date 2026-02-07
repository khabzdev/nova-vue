<script setup lang="ts">
import { computed } from 'vue'
import { ComboboxEmpty, type ComboboxEmptyProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ComboboxEmptyProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn('py-6 text-center text-sm text-muted-foreground', props.class)
)
</script>

<template>
  <ComboboxEmpty v-bind="forwarded" :class="classes">
    <slot>No results found.</slot>
  </ComboboxEmpty>
</template>
