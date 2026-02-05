<script setup lang="ts">
import { DialogClose, type DialogCloseProps, useForwardProps } from 'reka-ui'

interface Props extends DialogCloseProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)
</script>

<template>
  <DialogClose v-bind="forwarded" :class="props.class" as-child>
    <slot />
  </DialogClose>
</template>
