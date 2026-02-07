<script setup lang="ts">
import { computed } from 'vue'
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
import { slideFromBottomPreset } from '@/utils/animations'
import DrawerOverlay from './DrawerOverlay.vue'

interface Props extends DialogContentProps {
  class?: string
  showHandle?: boolean
  showClose?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  showHandle: true,
  showClose: false,
})

const emit = defineEmits<DialogContentEmits>()

const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Position
      'fixed inset-x-0 bottom-0 z-50',
      // Shape
      'rounded-t-2xl',
      // Spacing
      'p-6 pt-2',
      // Colors
      'bg-background text-foreground',
      // Border
      'border-t border-x',
      // Shadow
      'shadow-lg shadow-black/8',
      'dark:shadow-none',
      'dark:border-input/50',
      // Max height
      'max-h-[96vh]',
      // Flex container for scrollable content
      'flex flex-col',
    ],
    props.class
  )
)
</script>

<template>
  <DialogPortal>
    <AnimatePresence multiple>
      <DrawerOverlay />
      <DialogContent v-bind="forwarded" as-child>
        <Motion v-bind="slideFromBottomPreset" :class="classes">
          <!-- Drag handle -->
          <div v-if="showHandle" class="mx-auto mb-4 h-1.5 w-12 flex-shrink-0 rounded-full bg-muted-foreground/24" />
          
          <slot />

          <!-- Close X button (optional) -->
          <RekaDialogClose
            v-if="showClose"
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
