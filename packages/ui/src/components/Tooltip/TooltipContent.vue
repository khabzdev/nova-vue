<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { TooltipContent, TooltipPortal, TooltipArrow, type TooltipContentProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends /* @vue-ignore */ TooltipContentProps {
  class?: string
  sideOffset?: number
  showArrow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 6,
  showArrow: true,
})

const { class: extraClasses, sideOffset, showArrow } = toRefs(props)

const classes = computed(() =>
  cn(
    // Layout
    'z-50 overflow-hidden',
    // Padding
    'px-3 py-1.5',
    // Typography
    'text-xs font-medium',
    // Shape
    'rounded-md',
    // Colors
    'bg-primary text-primary-foreground',
    // Shadow
    'shadow-md',
    // Animation
    'animate-in fade-in-0 zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2',
    extraClasses.value
  )
)
</script>

<template>
  <TooltipPortal>
    <TooltipContent :side-offset="sideOffset" :class="classes" v-bind="$attrs">
      <slot />
      <TooltipArrow v-if="showArrow" class="fill-primary" />
    </TooltipContent>
  </TooltipPortal>
</template>
