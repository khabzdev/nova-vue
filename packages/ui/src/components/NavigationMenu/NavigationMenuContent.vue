<script setup lang="ts">
import { computed } from 'vue'
import { NavigationMenuContent, type NavigationMenuContentEmits, type NavigationMenuContentProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends NavigationMenuContentProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<NavigationMenuContentEmits>()

// Filter out class from forwarded props
const forwarded = computed(() => {
  const { class: _, ...rest } = props
  return rest
})

const classes = computed(() =>
  cn(
    [
      // Position - relative so it sizes to content
      'left-0 top-0',
      // Shape & border (COSS style)
      'rounded-xl border border-input',
      // Colors
      'bg-popover text-popover-foreground',
      // Shadow system
      'shadow-lg shadow-black/8',
      'dark:shadow-none dark:border-input/50',
      // Inner radius overlay
      'before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[calc(var(--radius-xl)-1px)]',
      'dark:before:shadow-[inset_0_1px_theme(colors.white/4%)]',
      // Animation
      'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out',
      'data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out',
      'data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52',
      'data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52',
    ],
    props.class
  )
)
</script>

<template>
  <NavigationMenuContent v-bind="forwarded" :class="classes" @escape-key-down="emit('escapeKeyDown', $event)" @pointer-down-outside="emit('pointerDownOutside', $event)" @focus-outside="emit('focusOutside', $event)" @interact-outside="emit('interactOutside', $event)">
    <slot />
  </NavigationMenuContent>
</template>
