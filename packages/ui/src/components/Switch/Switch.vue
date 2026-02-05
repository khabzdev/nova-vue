<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { SwitchRoot, SwitchThumb } from 'reka-ui'
import { cn } from '@/utils/cn'

const switchVariants = cva(
  [
    // Layout
    'peer relative inline-flex shrink-0 cursor-pointer items-center',
    // Shape
    'rounded-full border-2 border-transparent',
    // Transitions
    'transition-colors',
    // Focus state
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    // Disabled state
    'disabled:cursor-not-allowed disabled:opacity-64',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-input',
          'data-[state=checked]:bg-primary',
        ],
        destructive: [
          'bg-input',
          'data-[state=checked]:bg-destructive',
        ],
        success: [
          'bg-input',
          'data-[state=checked]:bg-green-500 dark:data-[state=checked]:bg-green-600',
        ],
      },
      size: {
        default: 'h-6 w-11',
        sm: 'h-5 w-9',
        lg: 'h-7 w-[3.25rem]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const thumbVariants = cva(
  [
    // Layout
    'pointer-events-none block rounded-full bg-background shadow-lg ring-0',
    // Transitions
    'transition-transform',
  ],
  {
    variants: {
      size: {
        default: 'size-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0',
        sm: 'size-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
        lg: 'size-6 data-[state=checked]:translate-x-6 data-[state=unchecked]:translate-x-0',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export type SwitchVariants = VariantProps<typeof switchVariants>

interface Props {
  variant?: SwitchVariants['variant']
  size?: SwitchVariants['size']
  class?: string
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  required?: boolean
  name?: string
  value?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
  size: 'default',
})

const emit = defineEmits<{
  'update:checked': [value: boolean]
}>()

const { variant, size, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(switchVariants({ variant: variant.value, size: size.value }), extraClasses.value)
)

const thumbClasses = computed(() => thumbVariants({ size: size.value }))
</script>

<template>
  <SwitchRoot
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
    <SwitchThumb :class="thumbClasses" />
  </SwitchRoot>
</template>
