<script setup lang="ts">
import { ComboboxRoot, type ComboboxRootEmits, type ComboboxRootProps, useForwardPropsEmits } from 'reka-ui'

const props = defineProps<ComboboxRootProps>()
const emit = defineEmits<ComboboxRootEmits>()

const forwarded = useForwardPropsEmits(props, emit)
</script>

<template>
  <ComboboxRoot v-bind="forwarded">
    <slot />
  </ComboboxRoot>
</template>
