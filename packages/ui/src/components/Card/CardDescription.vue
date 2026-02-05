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
  cn('text-sm text-muted-foreground', extraClasses.value)
)
</script>

<template>
  <p :class="classes" v-bind="$attrs">
    <slot />
  </p>
</template>
