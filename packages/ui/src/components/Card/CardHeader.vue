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
  cn('flex flex-col gap-1.5 p-6', extraClasses.value)
)
</script>

<template>
  <div :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>
