<script setup lang="ts">
import { computed } from 'vue'
import {
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { AnimatePresence, Motion } from 'motion-v'
import { cn } from '@/utils/cn'
import { scaleSpringPreset } from '@/utils/animations'
import DialogOverlay from './DialogOverlay.vue'

interface Props extends DialogContentProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<DialogContentEmits>()

const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Position & layout
      'fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4',
      // Padding & shape
      'p-6 rounded-xl border',
      // Colors
      'bg-background text-foreground',
      // Shadow system (COSS style)
      'shadow-lg shadow-black/8',
      'dark:shadow-none',
      // Border refinements
      'dark:border-input/50',
      // Inner radius overlay for depth
      'before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)]',
      'dark:before:shadow-[inset_0_1px_theme(colors.white/4%)]',
    ],
    props.class
  )
)
</script>

<template>
  <DialogPortal>
    <AnimatePresence multiple>
      <DialogOverlay />
      <DialogContent v-bind="forwarded" as-child>
        <Motion
          v-bind="scaleSpringPreset"
          :class="classes"
        >
          <slot />
        </Motion>
      </DialogContent>
    </AnimatePresence>
  </DialogPortal>
</template>
