<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cn } from '@/utils/cn'

interface Props {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
})

const { class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn('text-lg font-semibold leading-none tracking-tight', extraClasses.value)
)
</script>

<template>
  <h3 :class="classes" v-bind="$attrs">
    <slot />
  </h3>
</template>
