<script setup lang="ts">
import { computed } from 'vue'
import {
  MenubarContent,
  type MenubarContentProps,
  MenubarPortal,
  useForwardProps,
} from 'reka-ui'
import { AnimatePresence, Motion } from 'motion-v'
import { cn } from '@/utils/cn'
import { popoverPreset } from '@/utils/animations'

interface Props extends MenubarContentProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  sideOffset: 8,
  align: 'start',
  alignOffset: -4,
})

const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      // Layout
      'z-50 min-w-[12rem] overflow-hidden p-1',
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
      <MenubarContent v-bind="forwarded" as-child>
        <Motion
          v-bind="popoverPreset"
          :class="classes"
        >
          <slot />
        </Motion>
      </MenubarContent>
    </AnimatePresence>
  </MenubarPortal>
</template>
