<script setup lang="ts">
import { computed } from 'vue'
import {
  ListboxItem as ListboxItemPrimitive,
  ListboxItemIndicator,
  type ListboxItemEmits,
  type ListboxItemProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { Icon } from '@iconify/vue'
import { cn } from '@/utils/cn'

interface Props extends ListboxItemProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<ListboxItemEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'relative flex w-full cursor-default select-none items-center gap-2',
      // Spacing
      'py-1.5 pl-8 pr-2',
      // Typography
      'text-sm',
      // Shape
      'rounded-lg',
      // State styling
      'outline-none transition-colors',
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-64',
    ],
    props.class
  )
)
</script>

<template>
  <ListboxItemPrimitive v-bind="forwarded" :class="classes">
    <ListboxItemIndicator class="absolute left-2 flex size-3.5 items-center justify-center">
      <Icon icon="hugeicons:tick-02" width="14" height="14" />
    </ListboxItemIndicator>
    <slot />
  </ListboxItemPrimitive>
</template>
