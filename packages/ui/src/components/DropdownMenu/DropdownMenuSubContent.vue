<script setup lang="ts">
import { computed } from 'vue'
import {
  DropdownMenuPortal,
  DropdownMenuSubContent,
  type DropdownMenuSubContentEmits,
  type DropdownMenuSubContentProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { AnimatePresence, Motion } from 'motion-v'
import { cn } from '@/utils/cn'
import { popoverPreset } from '@/utils/animations'

interface Props extends DropdownMenuSubContentProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 2,
})

const emit = defineEmits<DropdownMenuSubContentEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'z-50 min-w-[8rem] overflow-hidden p-1',
      // Shape & border
      'rounded-xl border border-input',
      // Colors
      'bg-popover text-popover-foreground',
      // Shadow
      'shadow-lg shadow-black/8',
      'dark:shadow-none dark:border-input/50',
    ],
    props.class
  )
)
</script>

<template>
  <DropdownMenuPortal>
    <AnimatePresence>
      <DropdownMenuSubContent v-bind="forwarded" as-child>
        <Motion
          v-bind="popoverPreset"
          :class="classes"
        >
          <slot />
        </Motion>
      </DropdownMenuSubContent>
    </AnimatePresence>
  </DropdownMenuPortal>
</template>
