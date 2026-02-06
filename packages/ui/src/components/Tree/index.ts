export { default as Tree } from './Tree.vue'
export { default as TreeItem } from './TreeItem.vue'

export interface TreeItemData {
  title: string
  icon?: string
  children?: TreeItemData[]
}
