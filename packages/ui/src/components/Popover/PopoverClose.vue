<script setup lang="ts">
import { PopoverClose as RekaPopoverClose } from 'reka-ui'
</script>

<template>
  <RekaPopoverClose v-bind="$attrs">
    <slot />
  </RekaPopoverClose>
</template>
