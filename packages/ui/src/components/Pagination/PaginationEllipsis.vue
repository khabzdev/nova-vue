<script setup lang="ts">
import { computed } from 'vue'
import { PaginationEllipsis, type PaginationEllipsisProps, useForwardProps } from 'reka-ui'
import { HugeiconsIcon } from '@hugeicons/vue'
import { MoreHorizontalIcon } from '@hugeicons/core-free-icons'
import { cn } from '@/utils/cn'

interface Props extends PaginationEllipsisProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    'inline-flex items-center justify-center size-9',
    props.class
  )
)
</script>

<template>
  <PaginationEllipsis v-bind="forwarded" :class="classes">
    <slot>
      <HugeiconsIcon :icon="MoreHorizontalIcon" :size="16" />
    </slot>
  </PaginationEllipsis>
</template>
