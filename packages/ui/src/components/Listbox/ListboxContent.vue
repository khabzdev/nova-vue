<script setup lang="ts">
import { computed } from 'vue'
import {
  ListboxContent,
  type ListboxContentProps,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ListboxContentProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn('flex flex-col gap-0.5 p-1', props.class)
)
</script>

<template>
  <ListboxContent v-bind="forwarded" :class="classes">
    <slot />
  </ListboxContent>
</template>
