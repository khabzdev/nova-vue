<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { AvatarRoot, type AvatarRootProps } from 'reka-ui'
import { cn } from '@/utils/cn'

const avatarVariants = cva(
  [
    // Layout
    'relative flex shrink-0 overflow-hidden',
    // Shape
    'rounded-full',
  ],
  {
    variants: {
      size: {
        xs: 'size-6',
        sm: 'size-8',
        default: 'size-10',
        lg: 'size-12',
        xl: 'size-16',
        '2xl': 'size-20',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
)

export type AvatarVariants = VariantProps<typeof avatarVariants>

interface Props extends AvatarRootProps {
  size?: AvatarVariants['size']
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'default',
})

const { size, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(avatarVariants({ size: size.value }), extraClasses.value)
)
</script>

<template>
  <AvatarRoot :class="classes" v-bind="$attrs">
    <slot />
  </AvatarRoot>
</template>
