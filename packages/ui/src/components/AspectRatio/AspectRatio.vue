<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { AspectRatio as RekaAspectRatio, type AspectRatioProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends /* @vue-ignore */ AspectRatioProps {
  /**
   * The desired ratio. Eg: 16/9 for widescreen, 1 for square
   * @defaultValue 1
   */
  ratio?: number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  ratio: 1,
})

const { ratio, class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn('overflow-hidden', extraClasses.value)
)
</script>

<template>
  <RekaAspectRatio
    :ratio="ratio"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </RekaAspectRatio>
</template>
