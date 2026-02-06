<script setup lang="ts">
import { computed } from 'vue'
import { MenubarRoot, type MenubarRootEmits, type MenubarRootProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends MenubarRootProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<MenubarRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'flex h-9 items-center gap-1',
      // Shape & border
      'rounded-lg border border-input',
      // Colors
      'bg-background',
      // Padding
      'p-1',
      // Shadow
      'shadow-xs/5',
    ],
    props.class
  )
)
</script>

<template>
  <MenubarRoot v-bind="forwarded" :class="classes">
    <slot />
  </MenubarRoot>
</template>
