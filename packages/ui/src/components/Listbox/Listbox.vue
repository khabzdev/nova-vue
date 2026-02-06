<script setup lang="ts">
import { computed } from 'vue'
import {
  ListboxRoot,
  type ListboxRootEmits,
  type ListboxRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ListboxRootProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<ListboxRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'flex flex-col gap-1 overflow-hidden',
      // Shape & border
      'rounded-xl border border-input',
      // Colors
      'bg-popover text-popover-foreground',
      // Focus
      'focus:outline-none',
    ],
    props.class
  )
)
</script>

<template>
  <ListboxRoot v-bind="forwarded" :class="classes">
    <slot />
  </ListboxRoot>
</template>
