<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { ToastClose } from 'reka-ui'
import { HugeiconsIcon } from '@hugeicons/vue'
import { Cancel01Icon } from '@hugeicons/core-free-icons'
import { cn } from '@/utils/cn'

interface Props {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
})

const { class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(
    'absolute right-2 top-2 rounded-md p-1',
    'transition-opacity',
    'focus:outline-none focus:ring-2 focus:ring-ring',
    // Default variant
    'text-foreground/50 hover:text-foreground',
    // Colored variants - always visible with white text
    'group-[.success]:text-white/70 group-[.success]:hover:text-white',
    'group-[.destructive]:text-white/70 group-[.destructive]:hover:text-white',
    'group-[.warning]:text-white/70 group-[.warning]:hover:text-white',
    'group-[.info]:text-white/70 group-[.info]:hover:text-white',
    extraClasses.value
  )
)
</script>

<template>
  <ToastClose :class="classes" v-bind="$attrs">
    <HugeiconsIcon :icon="Cancel01Icon" :size="14" />
    <span class="sr-only">Close</span>
  </ToastClose>
</template>
