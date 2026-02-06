<script setup lang="ts">
import { computed } from 'vue'
import { DropdownMenuSeparator, type DropdownMenuSeparatorProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends DropdownMenuSeparatorProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() => cn('-mx-1 my-1 h-px bg-muted', props.class))
</script>

<template>
  <DropdownMenuSeparator v-bind="forwarded" :class="classes" />
</template>
