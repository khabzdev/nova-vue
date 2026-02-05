<script setup lang="ts">
import { TabsRoot, type TabsRootEmits, type TabsRootProps, useForwardPropsEmits } from 'reka-ui'

interface Props extends TabsRootProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  orientation: 'horizontal',
})

const emit = defineEmits<TabsRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)
</script>

<template>
  <TabsRoot v-bind="forwarded" :class="props.class">
    <slot />
  </TabsRoot>
</template>
