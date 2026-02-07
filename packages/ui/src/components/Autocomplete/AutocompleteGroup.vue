<script setup lang="ts">
import { computed } from 'vue'
import { ComboboxGroup, type ComboboxGroupProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ComboboxGroupProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() => cn('overflow-hidden p-1', props.class))
</script>

<template>
  <ComboboxGroup v-bind="forwarded" :class="classes">
    <slot />
  </ComboboxGroup>
</template>
