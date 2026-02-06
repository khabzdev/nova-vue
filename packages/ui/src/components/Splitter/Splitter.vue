<script setup lang="ts">
import { computed } from 'vue'
import {
  SplitterGroup,
  type SplitterGroupEmits,
  type SplitterGroupProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends SplitterGroupProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<SplitterGroupEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      'flex h-full w-full',
      'data-[orientation=horizontal]:flex-row',
      'data-[orientation=vertical]:flex-col',
    ],
    props.class
  )
)
</script>

<template>
  <SplitterGroup v-bind="forwarded" :class="classes">
    <slot />
  </SplitterGroup>
</template>
