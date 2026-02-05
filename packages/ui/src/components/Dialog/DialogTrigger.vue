<script setup lang="ts">
import { DialogTrigger, type DialogTriggerProps } from 'reka-ui'

defineProps<DialogTriggerProps>()
</script>

<template>
  <DialogTrigger v-bind="$props" as-child>
    <slot />
  </DialogTrigger>
</template>
