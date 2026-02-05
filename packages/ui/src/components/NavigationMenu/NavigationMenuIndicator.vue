<script setup lang="ts">
import { computed } from 'vue'
import { NavigationMenuIndicator, type NavigationMenuIndicatorProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends NavigationMenuIndicatorProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Position
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
      // Animation
      'data-[state=visible]:animate-in data-[state=hidden]:animate-out',
      'data-[state=hidden]:fade-out data-[state=visible]:fade-in',
    ],
    props.class
  )
)
</script>

<template>
  <NavigationMenuIndicator v-bind="forwarded" :class="classes">
    <div class="relative top-[60%] size-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
  </NavigationMenuIndicator>
</template>
