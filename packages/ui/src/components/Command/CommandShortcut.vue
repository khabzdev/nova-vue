<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/utils/cn'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const classes = computed(() =>
  cn('ml-auto text-xs tracking-widest text-muted-foreground', props.class)
)
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
