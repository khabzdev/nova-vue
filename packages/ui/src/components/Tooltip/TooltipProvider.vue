<script setup lang="ts">
import { TooltipProvider, type TooltipProviderProps } from 'reka-ui'

interface Props extends /* @vue-ignore */ TooltipProviderProps {
  delayDuration?: number
  skipDelayDuration?: number
}

const props = withDefaults(defineProps<Props>(), {
  delayDuration: 300,
  skipDelayDuration: 300,
})
</script>

<template>
  <TooltipProvider v-bind="props">
    <slot />
  </TooltipProvider>
</template>
