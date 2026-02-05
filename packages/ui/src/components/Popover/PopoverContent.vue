<script setup lang="ts">
import { computed } from 'vue'
import {
  PopoverContent,
  type PopoverContentEmits,
  type PopoverContentProps,
  PopoverPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { AnimatePresence, Motion } from 'motion-v'
import { cn } from '@/utils/cn'
import { popoverPreset } from '@/utils/animations'

interface Props extends PopoverContentProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  side: 'bottom',
  sideOffset: 4,
  align: 'center',
})

const emit = defineEmits<PopoverContentEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'relative z-50 w-72 p-4',
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
  <PopoverPortal>
    <AnimatePresence>
      <PopoverContent v-bind="forwarded" as-child>
        <Motion
          v-bind="popoverPreset"
          :class="classes"
        >
          <slot />
        </Motion>
      </PopoverContent>
    </AnimatePresence>
  </PopoverPortal>
</template>
