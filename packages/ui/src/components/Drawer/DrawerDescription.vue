<script setup lang="ts">
import { computed } from 'vue'
import { DialogDescription, type DialogDescriptionProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends DialogDescriptionProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      'text-base sm:text-sm',
      'text-muted-foreground',
      'leading-relaxed',
    ],
    props.class
  )
)
</script>

<template>
  <DialogDescription v-bind="forwarded" :class="classes">
    <slot />
  </DialogDescription>
</template>
