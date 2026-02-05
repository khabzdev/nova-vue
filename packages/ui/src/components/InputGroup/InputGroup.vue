<script setup lang="ts">
import { computed, toRefs, provide } from 'vue'
import { cn } from '@/utils/cn'

interface Props {
  class?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
})

const { class: extraClasses, disabled } = toRefs(props)

// Provide context to children
provide('inputGroupDisabled', disabled)

const classes = computed(() =>
  cn(
    // Layout - horizontal flex for input + addons
    'relative flex items-stretch',
    // Shape
    'rounded-lg',
    // Focus-within for the whole group
    'has-focus-visible:ring-2 has-focus-visible:ring-ring has-focus-visible:ring-offset-1 has-focus-visible:ring-offset-background',
    // First child border radius
    '[&>*:first-child]:rounded-l-lg [&>*:first-child]:rounded-r-none',
    // Last child border radius
    '[&>*:last-child]:rounded-r-lg [&>*:last-child]:rounded-l-none',
    // Middle children no radius
    '[&>*:not(:first-child):not(:last-child)]:rounded-none',
    // Remove double borders
    '[&>*:not(:first-child)]:-ml-px',
    extraClasses.value
  )
)
</script>

<template>
  <div :class="classes" v-bind="$attrs">
    <slot />
  </div>
</template>
