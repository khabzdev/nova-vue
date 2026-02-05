<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { Motion } from 'motion-v'
import { cn } from '@/utils/cn'

const buttonVariants = cva(
  [
    // Base layout
    'relative inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap',
    // Typography
    'font-medium text-base sm:text-sm',
    // Shape & border
    'rounded-lg border',
    // Transitions
    'outline-none transition-shadow',
    // Inner radius overlay
    'before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-lg)-1px)]',
    // Touch target for coarse pointers
    'pointer-coarse:after:absolute pointer-coarse:after:size-full pointer-coarse:after:min-h-11 pointer-coarse:after:min-w-11',
    // Focus states
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
    // Disabled states
    'disabled:pointer-events-none disabled:opacity-64',
    // SVG styling
    '[&_svg]:-mx-0.5 [&_svg]:pointer-events-none [&_svg]:shrink-0',
    "[&_svg:not([class*='opacity-'])]:opacity-80",
    "[&_svg:not([class*='size-'])]:size-4.5 sm:[&_svg:not([class*='size-'])]:size-4",
  ],
  {
    variants: {
      variant: {
        default: [
          'border-primary bg-primary text-primary-foreground',
          'shadow-xs shadow-primary/24',
          'not-disabled:inset-shadow-[0_1px_theme(colors.white/16%)]',
          'active:inset-shadow-[0_1px_theme(colors.black/8%)]',
          'disabled:shadow-none active:shadow-none',
          'hover:bg-primary/90',
        ],
        destructive: [
          'border-destructive bg-destructive text-white',
          'shadow-xs shadow-destructive/24',
          'not-disabled:inset-shadow-[0_1px_theme(colors.white/16%)]',
          'active:inset-shadow-[0_1px_theme(colors.black/8%)]',
          'disabled:shadow-none active:shadow-none',
          'hover:bg-destructive/90',
        ],
        outline: [
          'border-input bg-popover text-foreground',
          'shadow-xs/5',
          'not-dark:bg-clip-padding',
          'not-disabled:not-active:before:shadow-[0_1px_theme(colors.black/4%)]',
          'dark:bg-input/32',
          'dark:not-disabled:before:shadow-[0_-1px_theme(colors.white/2%)]',
          'dark:not-disabled:not-active:before:shadow-[0_-1px_theme(colors.white/6%)]',
          'disabled:shadow-none active:shadow-none',
          'hover:bg-accent/50 dark:hover:bg-input/64',
        ],
        'destructive-outline': [
          'border-input bg-popover text-destructive-foreground',
          'shadow-xs/5',
          'not-dark:bg-clip-padding',
          'not-disabled:not-active:before:shadow-[0_1px_theme(colors.black/4%)]',
          'dark:bg-input/32',
          'dark:not-disabled:before:shadow-[0_-1px_theme(colors.white/2%)]',
          'dark:not-disabled:not-active:before:shadow-[0_-1px_theme(colors.white/6%)]',
          'disabled:shadow-none active:shadow-none',
          'hover:border-destructive/32 hover:bg-destructive/4',
        ],
        secondary: [
          'border-transparent bg-secondary text-secondary-foreground',
          'active:bg-secondary/80',
          'hover:bg-secondary/90',
        ],
        ghost: [
          'border-transparent text-foreground',
          'hover:bg-accent active:bg-accent',
        ],
        link: [
          'border-transparent',
          'underline-offset-4 hover:underline',
        ],
      },
      size: {
        default: 'h-9 px-[calc(theme(spacing.3)-1px)] sm:h-8',
        xs: [
          'h-7 gap-1 rounded-md px-[calc(theme(spacing.2)-1px)] text-sm sm:h-6 sm:text-xs',
          'before:rounded-[calc(var(--radius-md)-1px)]',
          "[&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5",
        ],
        sm: 'h-8 gap-1.5 px-[calc(theme(spacing[2.5])-1px)] sm:h-7',
        lg: 'h-10 px-[calc(theme(spacing[3.5])-1px)] sm:h-9',
        xl: [
          'h-11 px-[calc(theme(spacing.4)-1px)] text-lg sm:h-10 sm:text-base',
          "[&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-4.5",
        ],
        icon: 'size-9 sm:size-8',
        'icon-xs': [
          'size-7 rounded-md sm:size-6',
          'before:rounded-[calc(var(--radius-md)-1px)]',
          "[&_svg:not([class*='size-'])]:size-4 sm:[&_svg:not([class*='size-'])]:size-3.5",
        ],
        'icon-sm': 'size-8 sm:size-7',
        'icon-lg': 'size-10 sm:size-9',
        'icon-xl': [
          'size-11 sm:size-10',
          "[&_svg:not([class*='size-'])]:size-5 sm:[&_svg:not([class*='size-'])]:size-4.5",
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export type ButtonVariants = VariantProps<typeof buttonVariants>

const props = defineProps({
  variant: {
    type: String as () => ButtonVariants['variant'],
    default: 'default',
  },
  size: {
    type: String as () => ButtonVariants['size'],
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button',
  },
  class: {
    type: String,
    default: '',
  },
})

const { variant, size, class: extraClasses } = toRefs(props)

const buttonClasses = computed(() =>
  cn(buttonVariants({ variant: variant.value, size: size.value }), extraClasses.value)
)
</script>

<template>
  <Motion
    as="button"
    :type="type"
    :disabled="disabled"
    :class="buttonClasses"
    data-slot="button"
    :while-hover="{ scale: 1.01 }"
    :while-tap="{ scale: 0.98 }"
    :transition="{ type: 'spring' as const, stiffness: 400, damping: 17 }"
  >
    <slot />
  </Motion>
</template>
