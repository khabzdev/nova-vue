<script setup lang="ts">
import { MenubarMenu, type MenubarMenuProps, useForwardProps } from 'reka-ui'

const props = defineProps<MenubarMenuProps>()
const forwarded = useForwardProps(props)
</script>

<template>
  <MenubarMenu v-bind="forwarded">
    <slot />
  </MenubarMenu>
</template>
