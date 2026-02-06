<script setup lang="ts">
import { computed } from 'vue'
import {
  MenubarPortal,
  MenubarSubContent,
  type MenubarSubContentEmits,
  type MenubarSubContentProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { AnimatePresence, Motion } from 'motion-v'
import { cn } from '@/utils/cn'
import { popoverPreset } from '@/utils/animations'

interface Props extends MenubarSubContentProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 2,
  alignOffset: -5,
})

const emit = defineEmits<MenubarSubContentEmits>()
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
  <MenubarPortal>
    <AnimatePresence>
      <MenubarSubContent v-bind="forwarded" as-child>
        <Motion
          v-bind="popoverPreset"
          :class="classes"
        >
          <slot />
        </Motion>
      </MenubarSubContent>
    </AnimatePresence>
  </MenubarPortal>
</template>
