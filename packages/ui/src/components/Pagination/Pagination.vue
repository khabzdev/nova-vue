<script setup lang="ts">
import { computed } from 'vue'
import {
  PaginationRoot,
  type PaginationRootEmits,
  type PaginationRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends PaginationRootProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<PaginationRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn('mx-auto flex w-full justify-center', props.class)
)
</script>

<template>
  <PaginationRoot v-bind="forwarded" :class="classes">
    <slot />
  </PaginationRoot>
</template>
