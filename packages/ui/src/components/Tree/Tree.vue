<script setup lang="ts">
import { computed } from 'vue'
import { TreeRoot } from 'reka-ui'
import { Icon } from '@iconify/vue'
import { cn } from '@/utils/cn'
import TreeItem from './TreeItem.vue'

export interface TreeItemData {
  title: string
  icon?: string
  children?: TreeItemData[]
}

interface Props {
  items: TreeItemData[]
  class?: string
  defaultExpanded?: string[]
  multiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  defaultExpanded: () => [],
  multiple: false,
})

const modelValue = defineModel<TreeItemData | TreeItemData[] | undefined>()
const expanded = defineModel<string[]>('expanded', { default: () => [] })

const classes = computed(() =>
  cn(
    [
      'flex flex-col',
      'outline-none',
    ],
    props.class
  )
)
</script>

<template>
  <TreeRoot
    v-model="modelValue"
    v-model:expanded="expanded"
    :items="items"
    :get-key="(item: TreeItemData) => item.title"
    :get-children="(item: TreeItemData) => item.children"
    :multiple="multiple"
    :default-expanded="defaultExpanded"
    :class="classes"
  >
    <template #default="{ flattenItems }">
      <TreeItem
        v-for="item in flattenItems"
        :key="item._id"
        v-bind="item.bind"
        :level="item.level"
        :has-children="item.hasChildren"
      >
        <template #icon>
          <Icon
            v-if="item.value.icon"
            :icon="item.value.icon"
            width="16"
            height="16"
            class="shrink-0"
          />
        </template>
        <template #default>{{ item.value.title }}</template>
      </TreeItem>
    </template>
  </TreeRoot>
</template>
