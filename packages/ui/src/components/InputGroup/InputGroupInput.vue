<script setup lang="ts">
import { computed, toRefs, inject, type Ref } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const inputVariants = cva(
  [
    // Layout
    'relative flex w-full min-w-0',
    // Typography
    'text-base sm:text-sm',
    'placeholder:text-muted-foreground',
    // Shape & border
    'rounded-lg border border-input',
    // Padding
    'px-[calc(theme(spacing.3)-1px)] py-2',
    // Colors
    'bg-popover text-foreground',
    // Shadow system
    'shadow-xs/5',
    // Dark mode
    'dark:bg-input/32',
    // Remove default focus ring (handled by InputGroup)
    'outline-none',
    // Focus within group highlight
    'focus:z-10 focus:border-ring',
    // Hover
    'hover:bg-accent/50 dark:hover:bg-input/64',
    'focus:bg-popover dark:focus:bg-input/32',
    // Disabled
    'disabled:pointer-events-none disabled:opacity-64 disabled:shadow-none',
    // Invalid state
    'aria-invalid:border-destructive aria-invalid:z-10',
  ],
  {
    variants: {
      size: {
        default: 'h-9 sm:h-8',
        sm: 'h-8 px-[calc(theme(spacing[2.5])-1px)] sm:h-7',
        lg: 'h-10 px-[calc(theme(spacing[3.5])-1px)] sm:h-9',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export type InputGroupInputVariants = VariantProps<typeof inputVariants>

interface Props {
  size?: InputGroupInputVariants['size']
  type?: string
  modelValue?: string | number
  placeholder?: string
  disabled?: boolean
  readonly?: boolean
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  type: 'text',
  modelValue: '',
  placeholder: '',
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const { size, class: extraClasses } = toRefs(props)

const groupDisabled = inject<Ref<boolean>>('inputGroupDisabled')

const classes = computed(() =>
  cn(inputVariants({ size: size.value }), extraClasses.value)
)

const isDisabled = computed(() => props.disabled || groupDisabled?.value)

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :class="classes"
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="isDisabled"
    :readonly="readonly"
    v-bind="$attrs"
    @input="handleInput"
  />
</template>
