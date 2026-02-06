<script setup lang="ts">
import { computed } from 'vue'
import { MenubarSubTrigger, type MenubarSubTriggerProps, useForwardProps } from 'reka-ui'
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { cn } from '@/utils/cn'

interface Props extends MenubarSubTriggerProps {
  class?: string
  inset?: boolean
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'flex cursor-default select-none items-center gap-2',
      // Spacing
      'px-2 py-1.5',
      // Typography
      'text-sm',
      // Shape
      'rounded-lg',
      // Focus & hover states
      'outline-none transition-colors',
      'hover:bg-accent/64 focus:bg-accent',
      // Highlighted / Open state
      'data-[highlighted]:bg-accent',
      'data-[state=open]:bg-accent',
    ],
    props.inset && 'pl-8',
    props.class
  )
)
</script>

<template>
  <MenubarSubTrigger v-bind="forwarded" :class="classes">
    <slot />
    <HugeiconsIcon :icon="ArrowRight01Icon" :size="16" class="ml-auto" />
  </MenubarSubTrigger>
</template>
