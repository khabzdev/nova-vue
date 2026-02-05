<script setup lang="ts">
import { computed } from 'vue'
import { TabsList, type TabsListProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends TabsListProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'inline-flex items-center justify-center',
      // Spacing
      'h-9 gap-1 p-1 sm:h-8',
      // Shape
      'rounded-lg',
      // Colors
      'bg-muted text-muted-foreground',
    ],
    props.class
  )
)
</script>

<template>
  <TabsList v-bind="forwarded" :class="classes">
    <slot />
  </TabsList>
</template>
