<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import {
  SplitterResizeHandle as SplitterResizeHandlePrimitive,
  type SplitterResizeHandleEmits,
  type SplitterResizeHandleProps,
  useForwardPropsEmits,
} from 'reka-ui'
import { cn } from '@/utils/cn'

const resizeHandleVariants = cva(
  [
    // Base
    'relative flex items-center justify-center',
    // Focus
    'outline-none',
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background',
    // States
    'data-[state=hover]:bg-accent/50',
    'data-[state=drag]:bg-accent',
    // After pseudo-element for larger hit area
    'after:absolute after:inset-0',
  ],
  {
    variants: {
      withHandle: {
        true: '',
        false: '',
      },
    },
    defaultVariants: {
      withHandle: true,
    },
  }
)

export type SplitterResizeHandleVariants = VariantProps<typeof resizeHandleVariants>

interface Props extends SplitterResizeHandleProps {
  class?: string
  withHandle?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  withHandle: true,
})

const emit = defineEmits<SplitterResizeHandleEmits>()
const forwarded = useForwardPropsEmits(props, emit)

const { withHandle, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(resizeHandleVariants({ withHandle: withHandle.value }), extraClasses.value)
)

const handleClasses = computed(() =>
  cn(
    'z-10 flex items-center justify-center rounded-sm bg-border transition-colors',
    'group-data-[orientation=horizontal]/handle:h-4 group-data-[orientation=horizontal]/handle:w-[3px]',
    'group-data-[orientation=vertical]/handle:h-[3px] group-data-[orientation=vertical]/handle:w-4',
  )
)
</script>

<template>
  <SplitterResizeHandlePrimitive
    v-bind="forwarded"
    :class="classes"
    class="group/handle data-[orientation=horizontal]:w-px data-[orientation=horizontal]:after:-left-1 data-[orientation=horizontal]:after:-right-1 data-[orientation=vertical]:h-px data-[orientation=vertical]:w-full data-[orientation=vertical]:after:-top-1 data-[orientation=vertical]:after:-bottom-1"
  >
    <div v-if="withHandle" :class="handleClasses" />
  </SplitterResizeHandlePrimitive>
</template>
