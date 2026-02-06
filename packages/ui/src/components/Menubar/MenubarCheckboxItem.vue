<script setup lang="ts">
import { computed } from 'vue'
import {
  MenubarCheckboxItem,
  type MenubarCheckboxItemEmits,
  type MenubarCheckboxItemProps,
  MenubarItemIndicator,
  useForwardPropsEmits,
} from 'reka-ui'
import { HugeiconsIcon } from '@hugeicons/vue'
import { Tick02Icon } from '@hugeicons/core-free-icons'
import { cn } from '@/utils/cn'

interface Props extends MenubarCheckboxItemProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<MenubarCheckboxItemEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'relative flex cursor-default select-none items-center',
      // Spacing
      'py-1.5 pl-8 pr-2',
      // Typography
      'text-sm',
      // Shape
      'rounded-lg',
      // Focus & hover states
      'outline-none transition-colors',
      'hover:bg-accent/64 focus:bg-accent focus:text-accent-foreground',
      // Highlighted state
      'data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground',
      // Disabled
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    ],
    props.class
  )
)
</script>

<template>
  <MenubarCheckboxItem v-bind="forwarded" :class="classes">
    <span class="absolute left-2 flex size-4 items-center justify-center">
      <MenubarItemIndicator>
        <HugeiconsIcon :icon="Tick02Icon" :size="14" />
      </MenubarItemIndicator>
    </span>
    <slot />
  </MenubarCheckboxItem>
</template>
