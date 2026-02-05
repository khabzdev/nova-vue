<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { ToastTitle } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
})

const { class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn('text-sm font-semibold', extraClasses.value)
)
</script>

<template>
  <ToastTitle :class="classes" v-bind="$attrs">
    <slot />
  </ToastTitle>
</template>
