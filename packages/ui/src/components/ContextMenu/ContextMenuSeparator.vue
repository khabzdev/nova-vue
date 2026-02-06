<script setup lang="ts">
import { computed } from 'vue'
import { ContextMenuSeparator, type ContextMenuSeparatorProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends ContextMenuSeparatorProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() => cn('-mx-1 my-1 h-px bg-muted', props.class))
</script>

<template>
  <ContextMenuSeparator v-bind="forwarded" :class="classes" />
</template>
