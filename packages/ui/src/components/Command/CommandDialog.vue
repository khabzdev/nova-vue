<script setup lang="ts">
import { computed } from 'vue'
import {
  DialogClose as RekaDialogClose,
  DialogContent,
  DialogPortal,
  DialogRoot,
  type DialogRootEmits,
  type DialogRootProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { AnimatePresence, Motion } from 'motion-v'
import { Icon } from '@iconify/vue'
import { cn } from '@/utils/cn'
import { scaleSpringPreset } from '@/utils/animations'
import DialogOverlay from '../Dialog/DialogOverlay.vue'

interface Props extends DialogRootProps {
  class?: string
  contentClass?: string
}

const props = defineProps<Props>()
const emit = defineEmits<DialogRootEmits>()

const forwarded = useForwardPropsEmits(props, emit)

const dialogContentClasses = computed(() =>
  cn(
    [
      // Position & layout
      'fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2',
      // Padding & shape
      'rounded-xl border overflow-hidden',
      // Colors
      'bg-popover text-popover-foreground',
      // Shadow system (COSS style)
      'shadow-lg shadow-black/8',
      'dark:shadow-none',
      // Border refinements
      'dark:border-input/50',
      // Inner radius overlay for depth
      'before:pointer-events-none before:absolute before:inset-0 before:rounded-[calc(var(--radius-xl)-1px)]',
      'dark:before:shadow-[inset_0_1px_theme(colors.white/4%)]',
    ],
    props.contentClass
  )
)
</script>

<template>
  <DialogRoot v-bind="forwarded">
    <slot name="trigger" />
    <DialogPortal>
      <AnimatePresence multiple>
        <DialogOverlay />
        <DialogContent as-child>
          <Motion v-bind="scaleSpringPreset" :class="dialogContentClasses">
            <slot />
            <!-- Close X button -->
            <RekaDialogClose
              class="absolute right-4 top-3 rounded-lg p-1 opacity-64 transition-opacity hover:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none"
            >
              <Icon icon="hugeicons:cancel-01" width="16" height="16" />
              <span class="sr-only">Close</span>
            </RekaDialogClose>
          </Motion>
        </DialogContent>
      </AnimatePresence>
    </DialogPortal>
  </DialogRoot>
</template>
