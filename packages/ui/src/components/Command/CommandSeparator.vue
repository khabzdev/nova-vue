<script setup lang="ts">
import { computed } from 'vue'
import { ComboboxSeparator, type ComboboxSeparatorProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ComboboxSeparatorProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn('-mx-1 my-1 h-px bg-border', props.class)
)
</script>

<template>
  <ComboboxSeparator v-bind="forwarded" :class="classes" />
</template>
