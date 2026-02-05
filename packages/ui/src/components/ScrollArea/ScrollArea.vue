<script setup lang="ts">
import { computed, toRefs } from 'vue'
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner,
} from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props {
  class?: string
  type?: 'auto' | 'always' | 'scroll' | 'hover'
  scrollHideDelay?: number
  orientation?: 'vertical' | 'horizontal' | 'both'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'hover',
  scrollHideDelay: 600,
  orientation: 'vertical',
})

const { class: extraClasses, orientation } = toRefs(props)

const rootClasses = computed(() =>
  cn('relative overflow-hidden', extraClasses.value)
)

const scrollbarClasses = computed(() =>
  cn(
    'flex touch-none select-none transition-colors',
    'data-[orientation=vertical]:h-full data-[orientation=vertical]:w-2.5 data-[orientation=vertical]:border-l data-[orientation=vertical]:border-l-transparent data-[orientation=vertical]:p-px',
    'data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:border-t data-[orientation=horizontal]:border-t-transparent data-[orientation=horizontal]:p-px'
  )
)

const thumbClasses = computed(() =>
  cn(
    'relative flex-1 rounded-full bg-border',
    'transition-colors hover:bg-border/80'
  )
)

const showVertical = computed(() =>
  orientation.value === 'vertical' || orientation.value === 'both'
)

const showHorizontal = computed(() =>
  orientation.value === 'horizontal' || orientation.value === 'both'
)
</script>

<template>
  <ScrollAreaRoot
    :class="rootClasses"
    :type="type"
    :scroll-hide-delay="scrollHideDelay"
    v-bind="$attrs"
  >
    <ScrollAreaViewport class="size-full rounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <ScrollAreaScrollbar
      v-if="showVertical"
      orientation="vertical"
      :class="scrollbarClasses"
    >
      <ScrollAreaThumb :class="thumbClasses" />
    </ScrollAreaScrollbar>
    <ScrollAreaScrollbar
      v-if="showHorizontal"
      orientation="horizontal"
      :class="scrollbarClasses"
    >
      <ScrollAreaThumb :class="thumbClasses" />
    </ScrollAreaScrollbar>
    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>
