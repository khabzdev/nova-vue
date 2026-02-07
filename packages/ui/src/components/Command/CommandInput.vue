<script setup lang="ts">
import { computed } from 'vue'
import { ComboboxAnchor, ComboboxInput, type ComboboxInputProps, useForwardProps } from 'reka-ui'
import { Icon } from '@iconify/vue'
import { cn } from '@/utils/cn'
import { inputVariants } from '@/components/Input'

interface Props extends ComboboxInputProps {
  class?: string
  placeholder?: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'Type a command or search...',
})

const forwarded = useForwardProps(props)

const wrapperClasses = computed(() =>
  cn(
    inputVariants({ size: 'default' }),
    'flex items-center gap-2 border-b border-x-0 border-t-0 rounded-none rounded-t-xl shadow-none',
    'focus-within:ring-0 focus-within:ring-offset-0',
    'hover:bg-popover dark:hover:bg-input/32',
    props.class
  )
)

const inputClasses = computed(() =>
  cn([
    'flex h-11 w-full bg-transparent py-3 outline-none placeholder:text-muted-foreground',
    'disabled:cursor-not-allowed disabled:opacity-50',
  ])
)
</script>

<template>
  <ComboboxAnchor :class="wrapperClasses">
    <Icon icon="hugeicons:search-01" width="16" height="16" class="shrink-0 opacity-50" />
    <ComboboxInput v-bind="forwarded" :placeholder="placeholder" :class="inputClasses" />
  </ComboboxAnchor>
</template>
