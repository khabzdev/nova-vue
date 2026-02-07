<script setup lang="ts">
import { computed } from 'vue'
import { DialogOverlay, type DialogOverlayProps, useForwardProps } from 'reka-ui'
import { Motion } from 'motion-v'
import { cn } from '@/utils/cn'
import { fadePreset } from '@/utils/animations'

interface Props extends DialogOverlayProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      'fixed inset-0 z-50',
      // Overlay color with blur
      'bg-black/64 backdrop-blur-sm',
      // Dark mode adjustment
      'dark:bg-black/72',
    ],
    props.class
  )
)
</script>

<template>
  <DialogOverlay v-bind="forwarded" as-child>
    <Motion v-bind="fadePreset" :class="classes" />
  </DialogOverlay>
</template>
