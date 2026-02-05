<script setup lang="ts">
import { computed } from 'vue'
import { TabsContent, type TabsContentProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends TabsContentProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Spacing
      'mt-2',
      // Focus states
      'outline-none',
      'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    ],
    props.class
  )
)
</script>

<template>
  <TabsContent v-bind="forwarded" :class="classes">
    <slot />
  </TabsContent>
</template>
