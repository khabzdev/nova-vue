<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cn } from '@/utils/cn'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})

const { class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(
    'animate-pulse rounded-md bg-muted',
    extraClasses.value
  )
)
</script>

<template>
  <div :class="classes" v-bind="$attrs" />
</template>
