<script setup lang="ts">
import { computed } from 'vue'
import {
  RadioGroupRoot,
  type RadioGroupRootEmits,
  type RadioGroupRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends RadioGroupRootProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<RadioGroupRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() => cn('grid gap-2', props.class))
</script>

<template>
  <RadioGroupRoot v-bind="forwarded" :class="classes">
    <slot />
  </RadioGroupRoot>
</template>
