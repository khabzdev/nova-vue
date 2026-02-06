<script setup lang="ts">
import { HoverCardRoot, type HoverCardRootEmits, type HoverCardRootProps, useForwardPropsEmits } from 'reka-ui'

const props = withDefaults(defineProps<HoverCardRootProps>(), {
  openDelay: 200,
  closeDelay: 300,
})
const emit = defineEmits<HoverCardRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)
</script>

<template>
  <HoverCardRoot v-bind="forwarded">
    <slot />
  </HoverCardRoot>
</template>
