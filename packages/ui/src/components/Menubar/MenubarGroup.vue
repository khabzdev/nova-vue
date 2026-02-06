<script setup lang="ts">
import { MenubarGroup, type MenubarGroupProps, useForwardProps } from 'reka-ui'

const props = defineProps<MenubarGroupProps>()
const forwarded = useForwardProps(props)
</script>

<template>
  <MenubarGroup v-bind="forwarded">
    <slot />
  </MenubarGroup>
</template>
