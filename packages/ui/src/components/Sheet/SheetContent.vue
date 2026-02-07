<script setup lang="ts">
import { computed } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  DialogClose as RekaDialogClose,
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { AnimatePresence, Motion } from 'motion-v'
import { Icon } from '@iconify/vue'
import { cn } from '@/utils/cn'
import {
  slideFromRightPreset,
  slideFromLeftPreset,
  slideFromTopPreset,
  slideFromBottomPreset,
} from '@/utils/animations'
import SheetOverlay from './SheetOverlay.vue'

const sheetVariants = cva(
  [
    'fixed z-50 gap-4 p-6',
    // Colors
    'bg-background text-foreground',
    // Border
    'border',
    // Shadow
    'shadow-lg shadow-black/8',
    'dark:shadow-none',
    'dark:border-input/50',
  ],
  {
    variants: {
      side: {
        right: 'inset-y-0 right-0 h-full w-3/4 sm:max-w-sm border-l',
        left: 'inset-y-0 left-0 h-full w-3/4 sm:max-w-sm border-r',
        top: 'inset-x-0 top-0 w-full border-b',
        bottom: 'inset-x-0 bottom-0 w-full border-t',
      },
    },
    defaultVariants: {
      side: 'right',
    },
  }
)

export type SheetVariants = VariantProps<typeof sheetVariants>

interface Props extends DialogContentProps {
  class?: string
  side?: SheetVariants['side']
}

const props = withDefaults(defineProps<Props>(), {
  side: 'right',
})

const emit = defineEmits<DialogContentEmits>()

const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(sheetVariants({ side: props.side }), props.class)
)

const animationPreset = computed(() => {
  switch (props.side) {
    case 'left':
      return slideFromLeftPreset
    case 'top':
      return slideFromTopPreset
    case 'bottom':
      return slideFromBottomPreset
    default:
      return slideFromRightPreset
  }
})
</script>

<template>
  <DialogPortal>
    <AnimatePresence multiple>
      <SheetOverlay />
      <DialogContent v-bind="forwarded" as-child>
        <Motion v-bind="animationPreset" :class="classes">
          <slot />
          <!-- Close X button -->
          <RekaDialogClose
            class="absolute right-4 top-4 rounded-lg p-1 opacity-64 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none"
          >
            <Icon icon="hugeicons:cancel-01" width="16" height="16" />
            <span class="sr-only">Close</span>
          </RekaDialogClose>
        </Motion>
      </DialogContent>
    </AnimatePresence>
  </DialogPortal>
</template>
