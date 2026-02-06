<script setup lang="ts">
import { HoverCardTrigger, type HoverCardTriggerProps, useForwardProps } from 'reka-ui'

const props = defineProps<HoverCardTriggerProps>()
const forwarded = useForwardProps(props)
</script>

<template>
  <HoverCardTrigger v-bind="forwarded">
    <slot />
  </HoverCardTrigger>
</template>
