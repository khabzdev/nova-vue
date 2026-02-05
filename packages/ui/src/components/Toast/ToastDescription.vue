<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { ToastDescription } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
})

const { class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn('text-sm opacity-90', extraClasses.value)
)
</script>

<template>
  <ToastDescription :class="classes" v-bind="$attrs">
    <slot />
  </ToastDescription>
</template>
