<script setup lang="ts">
import { computed } from 'vue'
import { MenubarSeparator, type MenubarSeparatorProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends MenubarSeparatorProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() => cn('-mx-1 my-1 h-px bg-muted', props.class))
</script>

<template>
  <MenubarSeparator v-bind="forwarded" :class="classes" />
</template>
