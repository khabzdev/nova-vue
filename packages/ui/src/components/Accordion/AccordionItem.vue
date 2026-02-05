<script setup lang="ts">
import { computed } from 'vue'
import { AccordionItem, type AccordionItemProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends AccordionItemProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    [
      'border-b border-border',
      'last:border-b-0',
    ],
    props.class
  )
)
</script>

<template>
  <AccordionItem v-bind="forwarded" :class="classes">
    <slot />
  </AccordionItem>
</template>
