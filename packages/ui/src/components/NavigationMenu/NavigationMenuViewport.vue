<script setup lang="ts">
import { computed } from 'vue'
import { NavigationMenuViewport, type NavigationMenuViewportProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends NavigationMenuViewportProps {
  class?: string
}

const props = defineProps<Props>()

// Filter out class from forwarded props to avoid conflict
const forwarded = computed(() => {
  const { class: _, ...rest } = props
  return rest
})

const classes = computed(() =>
  cn(
    [
      // Position
      'absolute left-0 top-full mt-1.5',
      // Animation
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90',
    ],
    props.class
  )
)
</script>

<template>
  <NavigationMenuViewport v-bind="forwarded" :class="classes" />
</template>
