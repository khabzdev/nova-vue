<script setup lang="ts">
import { NavigationMenuRoot, type NavigationMenuRootEmits, type NavigationMenuRootProps, useForwardPropsEmits } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends NavigationMenuRootProps {
  class?: string
}

const props = defineProps<Props>()
const emit = defineEmits<NavigationMenuRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)
</script>

<template>
  <NavigationMenuRoot
    v-bind="forwarded"
    :class="cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class)"
  >
    <slot />
  </NavigationMenuRoot>
</template>
