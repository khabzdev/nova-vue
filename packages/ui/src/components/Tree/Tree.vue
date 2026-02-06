<script setup lang="ts">
import { computed } from 'vue'
import { TreeRoot, type TreeRootProps, type TreeRootEmits, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/utils/cn'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props = defineProps<TreeRootProps<any, any, false> & { class?: string }>()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const emit = defineEmits<TreeRootEmits<any, false>>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      'flex flex-col gap-1',
      'outline-none',
    ],
    props.class
  )
)
</script>

<template>
  <TreeRoot v-bind="forwarded" :class="classes" v-slot="slotProps">
    <slot v-bind="slotProps" />
  </TreeRoot>
</template>
