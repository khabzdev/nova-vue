<script setup lang="ts">
import { computed } from 'vue'
import {
  SplitterPanel as SplitterPanelPrimitive,
  type SplitterPanelEmits,
  type SplitterPanelProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends SplitterPanelProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<SplitterPanelEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    'overflow-hidden',
    props.class
  )
)
</script>

<template>
  <SplitterPanelPrimitive v-bind="forwarded" v-slot="slotProps" :class="classes">
    <slot v-bind="slotProps" />
  </SplitterPanelPrimitive>
</template>
