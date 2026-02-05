<script setup lang="ts">
import { computed } from 'vue'
import {
  SelectContent,
  type SelectContentEmits,
  type SelectContentProps,
  SelectPortal,
  SelectViewport,
  useForwardPropsEmits,
} from 'reka-ui'
import { AnimatePresence, Motion } from 'motion-v'
import { cn } from '@/utils/cn'
import { popoverPreset } from '@/utils/animations'

interface Props extends SelectContentProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  position: 'popper',
  sideOffset: 4,
})

const emit = defineEmits<SelectContentEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'relative z-50 max-h-96 min-w-[8rem] overflow-hidden',
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
    ],
    props.position === 'popper' &&
      'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
    props.class
  )
)

const viewportClasses = computed(() =>
  cn(
    'p-1',
    props.position === 'popper' &&
      'h-[var(--reka-select-trigger-height)] w-full min-w-[var(--reka-select-trigger-width)]'
  )
)
</script>

<template>
  <SelectPortal>
    <AnimatePresence>
      <SelectContent v-bind="forwarded" as-child>
        <Motion
          v-bind="popoverPreset"
          :class="classes"
        >
          <SelectViewport :class="viewportClasses">
            <slot />
          </SelectViewport>
        </Motion>
      </SelectContent>
    </AnimatePresence>
  </SelectPortal>
</template>
