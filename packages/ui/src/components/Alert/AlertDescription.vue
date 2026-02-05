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
      'text-sm sm:text-xs',
      // Color
      '[&_p]:leading-relaxed',
    ],
    props.class
  )
)
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
