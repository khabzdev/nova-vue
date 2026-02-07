<script setup lang="ts">
import { computed } from 'vue'
import { ComboboxGroup, type ComboboxGroupProps, ComboboxLabel, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ComboboxGroupProps {
  class?: string
  heading?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn('overflow-hidden p-1 text-foreground', props.class)
)

const headingClasses = computed(() =>
  cn('px-2 py-1.5 text-xs font-medium text-muted-foreground')
)
</script>

<template>
  <ComboboxGroup v-bind="forwarded" :class="classes">
    <ComboboxLabel v-if="heading" :class="headingClasses">{{ heading }}</ComboboxLabel>
    <slot />
  </ComboboxGroup>
</template>
