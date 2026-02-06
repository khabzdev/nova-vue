<script setup lang="ts">
import { computed } from 'vue'
import { PaginationEllipsis, type PaginationEllipsisProps, useForwardProps } from 'reka-ui'
import { Icon } from '@iconify/vue'
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
      <Icon icon="hugeicons:more-horizontal" width="16" height="16" />
    </slot>
  </PaginationEllipsis>
</template>
