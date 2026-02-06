<script setup lang="ts">
import { computed } from 'vue'
import { MenubarLabel, type MenubarLabelProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends MenubarLabelProps {
  class?: string
  inset?: boolean
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      'px-2 py-1.5',
      'text-sm font-semibold',
    ],
    props.inset && 'pl-8',
    props.class
  )
)
</script>

<template>
  <MenubarLabel v-bind="forwarded" :class="classes">
    <slot />
  </MenubarLabel>
</template>
