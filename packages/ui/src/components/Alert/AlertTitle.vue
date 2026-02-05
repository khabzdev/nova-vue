<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/utils/cn'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const classes = computed(() =>
  cn(
    [
      // Typography
      'font-medium text-base leading-none tracking-tight sm:text-sm',
    ],
    props.class
  )
)
</script>

<template>
  <h5 :class="classes">
    <slot />
  </h5>
</template>
