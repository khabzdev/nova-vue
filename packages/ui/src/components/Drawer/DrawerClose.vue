<script setup lang="ts">
import { computed } from 'vue'
import { DialogClose, type DialogCloseProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends DialogCloseProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() => cn(props.class))
</script>

<template>
  <DialogClose v-bind="forwarded" :class="classes" as-child>
    <slot />
  </DialogClose>
</template>
