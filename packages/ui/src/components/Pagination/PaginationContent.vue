<script setup lang="ts">
import { computed } from 'vue'
import { PaginationList, type PaginationListProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends PaginationListProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn('flex flex-row items-center gap-1', props.class)
)
</script>

<template>
  <PaginationList v-slot="{ items }" v-bind="forwarded" :class="classes">
    <slot :items="items" />
  </PaginationList>
</template>
