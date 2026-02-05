<script setup lang="ts">
import { AccordionRoot, type AccordionRootEmits, type AccordionRootProps, useForwardPropsEmits } from 'reka-ui'

interface Props extends AccordionRootProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  type: 'single',
  collapsible: true,
})

const emit = defineEmits<AccordionRootEmits>()
const forwarded = useForwardPropsEmits(props, emit)
</script>

<template>
  <AccordionRoot v-bind="forwarded" :class="props.class">
    <slot />
  </AccordionRoot>
</template>
