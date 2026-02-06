<script setup lang="ts">
import { ContextMenuRoot, type ContextMenuRootEmits, type ContextMenuRootProps, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ContextMenuRootProps>()
const emit = defineEmits<ContextMenuRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)
</script>

<template>
  <ContextMenuRoot v-bind="forwarded">
    <slot />
  </ContextMenuRoot>
</template>
