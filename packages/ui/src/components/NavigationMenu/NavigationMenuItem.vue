<script setup lang="ts">
import { NavigationMenuItem, type NavigationMenuItemProps, useForwardProps } from 'reka-ui'

interface Props extends NavigationMenuItemProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <NavigationMenuItem v-bind="forwarded" :class="props.class">
    <slot />
  </NavigationMenuItem>
</template>
