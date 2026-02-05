<script setup lang="ts">
import { computed } from 'vue'
import { DialogClose, type DialogCloseProps, useForwardProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends DialogCloseProps {
  class?: string
}

const props = defineProps<Props>()
const forwarded = useForwardProps(props)

const classes = computed(() =>
  cn(
    'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground',
    props.class
  )
)
</script>

<template>
  <DialogClose v-bind="forwarded" :class="classes">
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
      <span class="sr-only">Close</span>
    </slot>
  </DialogClose>
</template>
