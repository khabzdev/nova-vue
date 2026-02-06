<script setup lang="ts">
import { computed } from 'vue'
import {
  ListboxGroupLabel,
  type ListboxGroupLabelProps,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ListboxGroupLabelProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn('px-2 py-1.5 text-xs font-medium text-muted-foreground', props.class)
)
</script>

<template>
  <ListboxGroupLabel v-bind="forwarded" :class="classes">
    <slot />
  </ListboxGroupLabel>
</template>
