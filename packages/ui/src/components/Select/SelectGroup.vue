<script setup lang="ts">
import { computed } from 'vue'
import { SelectGroup, type SelectGroupProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends SelectGroupProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() => cn('p-1', props.class))
</script>

<template>
  <SelectGroup v-bind="forwarded" :class="classes">
    <slot />
  </SelectGroup>
</template>
