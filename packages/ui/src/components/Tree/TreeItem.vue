<script setup lang="ts">
import { computed } from 'vue'
import {
  TreeItem as TreeItemPrimitive,
  type TreeItemProps,
} from 'reka-ui'
import { cn } from '@/utils/cn'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props = defineProps<TreeItemProps<any> & { class?: string; hasChildren?: boolean }>()

const classes = computed(() =>
  cn(
    [
      // Layout
      'flex items-center gap-1.5 py-1 px-2',
      // Typography
      'text-sm',
      // Shape
      'rounded-lg',
      // States
      'outline-none transition-colors',
      'hover:bg-accent/64',
      'focus:bg-accent',
      'data-[selected]:bg-accent data-[selected]:text-accent-foreground',
      // Disabled
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-64',
    ],
    props.class
  )
)
</script>

<template>
  <TreeItemPrimitive
    :value="props.value"
    :level="props.level"
    v-slot="{ isExpanded, isSelected, handleToggle }"
    :class="classes"
    :style="{ paddingLeft: `${((props.level ?? 0) * 12) + 8}px` }"
  >
    <button
      v-if="props.hasChildren"
      type="button"
      class="flex size-4 items-center justify-center outline-none text-muted-foreground transition-transform duration-200"
      :class="{ 'rotate-90': isExpanded }"
      @click.stop="handleToggle"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </button>
    <span v-else class="size-4" />
    <slot name="icon" :is-expanded="isExpanded" :is-selected="isSelected" />
    <span class="truncate">
      <slot :is-expanded="isExpanded" :is-selected="isSelected" />
    </span>
  </TreeItemPrimitive>
</template>
