<script setup lang="ts">
import { computed } from 'vue'
import {
  ListboxFilter,
  type ListboxFilterEmits,
  type ListboxFilterProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ListboxFilterProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<ListboxFilterEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'flex w-full',
      // Shape
      'rounded-lg border-b border-input',
      // Colors
      'bg-transparent text-foreground',
      // Typography
      'px-3 py-2 text-sm',
      // Placeholder
      'placeholder:text-muted-foreground',
      // Focus
      'focus:outline-none',
      // Disabled
      'disabled:cursor-not-allowed disabled:opacity-64',
    ],
    props.class
  )
)
</script>

<template>
  <ListboxFilter v-bind="forwarded" :class="classes" />
</template>
