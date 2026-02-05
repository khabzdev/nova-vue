<script setup lang="ts">
import { computed, toRefs, inject, type Ref } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const addonVariants = cva(
  [
    // Layout
    'relative inline-flex items-center justify-center shrink-0',
    // Typography
    'text-sm text-muted-foreground',
    // Shape & border
    'rounded-lg border border-input',
    // Padding
    'px-3',
    // Background
    'bg-muted',
    // Dark mode
    'dark:bg-input/48',
    // SVG styling
    '[&_svg]:size-4 [&_svg]:shrink-0',
  ],
  {
    variants: {
      size: {
        default: 'h-9 sm:h-8',
        sm: 'h-8 px-2.5 sm:h-7',
        lg: 'h-10 px-3.5 sm:h-9',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export type InputGroupAddonVariants = VariantProps<typeof addonVariants>

interface Props {
  size?: InputGroupAddonVariants['size']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})

const { size, class: extraClasses } = toRefs(props)

const groupDisabled = inject<Ref<boolean>>('inputGroupDisabled')

const classes = computed(() =>
  cn(
    addonVariants({ size: size.value }),
    groupDisabled?.value && 'opacity-64',
    extraClasses.value
  )
)
</script>

<template>
  <span :class="classes" v-bind="$attrs">
    <slot />
  </span>
</template>
