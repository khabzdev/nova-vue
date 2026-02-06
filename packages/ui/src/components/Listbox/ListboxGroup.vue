<script setup lang="ts">
import { computed } from 'vue'
import {
  ListboxGroup,
  type ListboxGroupProps,
  useForwardProps,
} from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ListboxGroupProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() => cn('overflow-hidden', props.class))
</script>

<template>
  <ListboxGroup v-bind="forwarded" :class="classes">
    <slot />
  </ListboxGroup>
</template>
