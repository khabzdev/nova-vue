<script setup lang="ts">
import { computed } from 'vue'
import {
  HoverCardContent,
  type HoverCardContentProps,
  HoverCardPortal,
  useForwardProps,
} from 'reka-ui'
import { AnimatePresence, Motion } from 'motion-v'
import { cn } from '@/utils/cn'
import { popoverPreset } from '@/utils/animations'

interface Props extends HoverCardContentProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  sideOffset: 4,
  align: 'center',
})

const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'z-50 w-64 p-4',
      // Shape & border (COSS style)
      'rounded-xl border border-input',
      // Colors
      'bg-popover text-popover-foreground',
      // Shadow system
      'shadow-lg shadow-black/8',
      'dark:shadow-none dark:border-input/50',
      // Inner radius overlay
      'before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)]',
      'dark:before:shadow-[inset_0_1px_theme(colors.white/4%)]',
      // Focus
      'outline-none',
    ],
    props.class
  )
)
</script>

<template>
  <HoverCardPortal>
    <AnimatePresence>
      <HoverCardContent v-bind="forwarded" as-child>
        <Motion
          v-bind="popoverPreset"
          :class="classes"
        >
          <slot />
        </Motion>
      </HoverCardContent>
    </AnimatePresence>
  </HoverCardPortal>
</template>
