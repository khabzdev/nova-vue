<script setup lang="ts">
import { ToastProvider, type ToastProviderProps } from 'reka-ui'

interface Props extends /* @vue-ignore */ ToastProviderProps {
  duration?: number
  swipeDirection?: 'right' | 'left' | 'up' | 'down'
  swipeThreshold?: number
}

const props = withDefaults(defineProps<Props>(), {
  duration: 5000,
  swipeDirection: 'right',
  swipeThreshold: 50,
})
</script>

<template>
  <ToastProvider v-bind="props">
    <slot />
  </ToastProvider>
</template>
