<script setup lang="ts">
import { computed } from 'vue'
import {
  TreeItem as TreeItemPrimitive,
  type TreeItemProps,
  type TreeItemEmits,
  useForwardPropsEmits,
} from 'reka-ui'
import { HugeiconsIcon } from '@hugeicons/vue'
import { ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { cn } from '@/utils/cn'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const props = defineProps<TreeItemProps<any> & { class?: string }>()
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const emit = defineEmits<TreeItemEmits<any>>()
const forwarded = useForwardPropsEmits(props, emit)

const classes = computed(() =>
  cn(
    [
      // Layout
      'flex flex-col gap-0.5',
      // Typography
      'text-sm',
      // Outline
      'outline-none',
    ],
    props.class
  )
)

const itemClasses = computed(() =>
  cn([
    // Layout
    'flex items-center gap-1.5 py-1 px-2',
    // Shape
    'rounded-lg',
    // States
    'outline-none transition-colors',
    'hover:bg-accent/64',
    'focus:bg-accent',
    'data-[selected]:bg-accent data-[selected]:text-accent-foreground',
    // Disabled
    'data-[disabled]:pointer-events-none data-[disabled]:opacity-64',
  ])
)

const iconClasses = 'size-4 shrink-0 text-muted-foreground transition-transform duration-200'
</script>

<template>
  <TreeItemPrimitive
    v-bind="forwarded"
    v-slot="{ isExpanded, isSelected, handleToggle, handleSelect }"
    :class="classes"
    :style="{ paddingLeft: `${(level ?? 0) * 12}px` }"
  >
    <div :class="itemClasses" @click="handleSelect">
      <button
        v-if="$slots.default"
        type="button"
        class="flex items-center justify-center outline-none"
        @click.stop="handleToggle"
      >
        <HugeiconsIcon
          :icon="ArrowRight01Icon"
          :size="16"
          :class="[iconClasses, isExpanded && 'rotate-90']"
        />
      </button>
      <span v-else class="size-4" />
      <slot name="content" :is-expanded="isExpanded" :is-selected="isSelected">
        {{ value }}
      </slot>
    </div>
    <div v-if="isExpanded && $slots.default" class="flex flex-col gap-0.5">
      <slot :is-expanded="isExpanded" :is-selected="isSelected" />
    </div>
  </TreeItemPrimitive>
</template>
