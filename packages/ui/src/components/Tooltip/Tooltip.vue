<script setup lang="ts">
import { TooltipRoot, type TooltipRootProps } from 'reka-ui'

interface Props extends /* @vue-ignore */ TooltipRootProps {
  delayDuration?: number
}

const props = withDefaults(defineProps<Props>(), {
  delayDuration: 300,
})
</script>

<template>
  <TooltipRoot v-bind="props">
    <slot />
  </TooltipRoot>
</template>
