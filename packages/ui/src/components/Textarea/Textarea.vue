<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const textareaVariants = cva(
  [
    // Layout
    'relative flex w-full min-h-20',
    // Typography
    'text-base sm:text-sm',
    'placeholder:text-muted-foreground',
    // Shape & border (COSS style)
    'rounded-lg border border-input',
    // Padding accounting for border
    'px-[calc(theme(spacing.3)-1px)] py-2',
    // Colors
    'bg-popover text-foreground',
    // Shadow system
    'shadow-xs/5',
    // Inner radius overlay
    'before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)]',
    'not-disabled:not-read-only:not-focus:before:shadow-[0_1px_theme(colors.black/4%)]',
    // Dark mode refinements
    'dark:bg-input/32',
    'dark:not-disabled:not-read-only:before:shadow-[0_-1px_theme(colors.white/2%)]',
    'dark:not-disabled:not-read-only:not-focus:before:shadow-[0_-1px_theme(colors.white/6%)]',
    // Focus states
    'outline-none transition-shadow',
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
    // Hover
    'hover:bg-accent/50 dark:hover:bg-input/64',
    'focus:bg-popover dark:focus:bg-input/32',
    // Disabled
    'disabled:pointer-events-none disabled:opacity-64 disabled:shadow-none',
    // Read-only
    'read-only:bg-muted read-only:shadow-none',
    // Invalid state
    'aria-invalid:border-destructive aria-invalid:ring-destructive/24',
    // Resize
    'resize-y',
  ],
  {
    variants: {
      size: {
        default: 'min-h-20',
        sm: [
          'min-h-16 px-[calc(theme(spacing[2.5])-1px)] text-sm sm:text-xs',
        ],
        lg: [
          'min-h-28 px-[calc(theme(spacing[3.5])-1px)]',
        ],
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export type TextareaVariants = VariantProps<typeof textareaVariants>

const props = defineProps({
  size: {
    type: String as () => TextareaVariants['size'],
    default: 'default',
  },
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  rows: {
    type: Number,
    default: 3,
  },
  class: {
    type: String,
    default: '',
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const { size, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(textareaVariants({ size: size.value }), extraClasses.value)
)

function handleInput(event: Event) {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <textarea
    :class="classes"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :rows="rows"
    v-bind="$attrs"
    @input="handleInput"
  />
</template>
