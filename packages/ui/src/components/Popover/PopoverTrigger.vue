<script setup lang="ts">
import { PopoverTrigger } from 'reka-ui'

defineOptions({
  name: 'PopoverTrigger'
})
</script>

<template>
  <PopoverTrigger as-child>
    <slot />
  </PopoverTrigger>
</template>
