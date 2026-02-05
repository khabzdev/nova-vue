<script setup lang="ts">
import { computed } from 'vue'
import { NavigationMenuList, type NavigationMenuListProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends NavigationMenuListProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'group flex flex-1 list-none items-center justify-center',
      // Spacing
      'gap-1',
    ],
    props.class
  )
)
</script>

<template>
  <NavigationMenuList v-bind="forwarded" :class="classes">
    <slot />
  </NavigationMenuList>
</template>
