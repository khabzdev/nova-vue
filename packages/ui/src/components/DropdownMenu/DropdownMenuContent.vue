<script setup lang="ts">
import { computed } from 'vue'
import {
  DropdownMenuContent,
  type DropdownMenuContentEmits,
  type DropdownMenuContentProps,
  DropdownMenuPortal,
  useForwardPropsEmits,
} from 'reka-ui'
import { AnimatePresence, Motion } from 'motion-v'
import { cn } from '@/utils/cn'
import { popoverPreset } from '@/utils/animations'

interface Props extends DropdownMenuContentProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 4,
  align: 'start',
})

const emit = defineEmits<DropdownMenuContentEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'z-50 min-w-[8rem] overflow-hidden p-1',
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
    props.class
  )
)
</script>

<template>
  <DropdownMenuPortal>
    <AnimatePresence>
      <DropdownMenuContent v-bind="forwarded" as-child>
        <Motion
          v-bind="popoverPreset"
          :class="classes"
        >
          <slot />
        </Motion>
      </DropdownMenuContent>
    </AnimatePresence>
  </DropdownMenuPortal>
</template>
