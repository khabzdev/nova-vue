<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { ToastViewport } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props {
  class?: string
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
}

const props = withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
})

const { class: extraClasses, position } = toRefs(props)

const positionClasses: Record<string, string> = {
  'top-left': 'top-0 left-0',
  'top-center': 'top-0 left-1/2 -translate-x-1/2',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
  'bottom-right': 'bottom-0 right-0',
}

const classes = computed(() =>
  cn(
    'fixed z-[100] flex max-h-screen flex-col-reverse gap-2 p-4',
    'w-full sm:max-w-[420px]',
    'outline-none',
    positionClasses[position.value],
    extraClasses.value
  )
)
</script>

<template>
  <ToastViewport :class="classes" v-bind="$attrs" />
</template>
