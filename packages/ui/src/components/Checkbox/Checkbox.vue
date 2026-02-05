<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { CheckboxRoot, CheckboxIndicator } from 'reka-ui'
import { HugeiconsIcon } from '@hugeicons/vue'
import { Tick02Icon, MinusSignIcon } from '@hugeicons/core-free-icons'
import { cn } from '@/utils/cn'

const checkboxVariants = cva(
  [
    // Layout
    'peer relative inline-flex items-center justify-center shrink-0',
    // Shape
    'rounded-md border',
    // Typography/Sizing
    'size-4.5 sm:size-4',
    // Ring styling for inner highlight
    'ring-offset-background',
    // Focus state
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    // Disabled state
    'disabled:cursor-not-allowed disabled:opacity-64',
    // Transitions
    'transition-colors',
  ],
  {
    variants: {
      variant: {
        default: [
          'border-input bg-background',
          'data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          'data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary data-[state=indeterminate]:text-primary-foreground',
          'hover:border-primary/80',
        ],
        destructive: [
          'border-input bg-background',
          'data-[state=checked]:border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground',
          'data-[state=indeterminate]:border-destructive data-[state=indeterminate]:bg-destructive data-[state=indeterminate]:text-destructive-foreground',
          'hover:border-destructive/80',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export type CheckboxVariants = VariantProps<typeof checkboxVariants>

interface Props {
  variant?: CheckboxVariants['variant']
  class?: string
  checked?: boolean | 'indeterminate'
  defaultChecked?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const emit = defineEmits<{
  'update:checked': [value: boolean | 'indeterminate']
}>()

const { variant, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(checkboxVariants({ variant: variant.value }), extraClasses.value)
)
</script>

<template>
  <CheckboxRoot
    :class="classes"
    :checked="checked"
    :default-checked="defaultChecked"
    :disabled="disabled"
    :required="required"
    :name="name"
    :value="value"
    v-bind="$attrs"
    @update:checked="emit('update:checked', $event)"
  >
    <CheckboxIndicator class="flex items-center justify-center text-current">
      <HugeiconsIcon
        v-if="checked === 'indeterminate'"
        :icon="MinusSignIcon"
        :size="12"
        class="sm:size-2.5"
      />
      <HugeiconsIcon
        v-else
        :icon="Tick02Icon"
        :size="12"
        class="sm:size-2.5"
      />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
