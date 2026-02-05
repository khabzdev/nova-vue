<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { ToastRoot, type ToastRootProps } from 'reka-ui'
import { cn } from '@/utils/cn'

const toastVariants = cva(
  [
    // Layout
    'group pointer-events-auto relative flex w-full items-center justify-between gap-4 pr-8',
    // Shape
    'rounded-lg border',
    // Padding
    'p-4',
    // Shadow
    'shadow-lg',
    // Transitions
    'transition-all',
    // Animation
    'data-[swipe=cancel]:translate-x-0',
    'data-[swipe=end]:translate-x-[var(--reka-toast-swipe-end-x)]',
    'data-[swipe=move]:translate-x-[var(--reka-toast-swipe-move-x)]',
    'data-[swipe=move]:transition-none',
    'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:slide-in-from-bottom-full',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:slide-out-to-right-full',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-border bg-background text-foreground',
        ],
        success: [
          'success border-green-200 bg-green-500 text-white dark:border-green-800 dark:bg-green-900 dark:text-green-100',
        ],
        destructive: [
          'destructive border-red-200 bg-red-500 text-white dark:border-red-800 dark:bg-red-900 dark:text-red-100',
        ],
        warning: [
          'warning border-yellow-200 bg-yellow-500 text-white dark:border-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
        ],
        info: [
          'info border-blue-200 bg-blue-500 text-white dark:border-blue-800 dark:bg-blue-900 dark:text-blue-100',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export type ToastVariants = VariantProps<typeof toastVariants>

interface Props extends /* @vue-ignore */ ToastRootProps {
  variant?: ToastVariants['variant']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const emit = defineEmits<{
  'update:open': [value: boolean]
}>()

const { variant, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(toastVariants({ variant: variant.value }), extraClasses.value)
)
</script>

<template>
  <ToastRoot
    :class="classes"
    v-bind="$attrs"
    @update:open="emit('update:open', $event)"
  >
    <slot />
  </ToastRoot>
</template>
