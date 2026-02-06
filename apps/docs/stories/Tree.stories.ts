import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Tree, TreeItem } from '@lettuce/ui/tree'

const meta = {
  title: 'Components/Tree',
  component: Tree,
  tags: ['autodocs'],
} satisfies Meta<typeof Tree>

export default meta
type Story = StoryObj<typeof meta>

interface TreeNode {
  id: string
  name: string
  children?: TreeNode[]
}

const treeData: TreeNode[] = [
  {
    id: '1',
    name: 'Documents',
    children: [
      {
        id: '1.1',
        name: 'Work',
        children: [
          { id: '1.1.1', name: 'Report.pdf' },
          { id: '1.1.2', name: 'Presentation.pptx' },
        ],
      },
      {
        id: '1.2',
        name: 'Personal',
        children: [
          { id: '1.2.1', name: 'Resume.docx' },
        ],
      },
    ],
  },
  {
    id: '2',
    name: 'Images',
    children: [
      { id: '2.1', name: 'vacation.jpg' },
      { id: '2.2', name: 'profile.png' },
    ],
  },
  {
    id: '3',
    name: 'readme.md',
  },
]

export const Default: Story = {
  args: {
    items: treeData,
    getKey: (item: TreeNode) => item.id,
  },
  render: () => ({
    components: { Tree, TreeItem },
    setup() {
      const selected = ref<TreeNode | undefined>()
      const expanded = ref<string[]>(['1'])
      return { selected, expanded, treeData }
    },
    template: `
      <Tree
        v-model="selected"
        v-model:expanded="expanded"
        :items="treeData"
        :get-key="(item) => item.id"
        :get-children="(item) => item.children"
        class="w-[300px] rounded-lg border border-input p-2"
      >
        <template #default="{ flattenItems }">
          <TreeItem
            v-for="item in flattenItems"
            :key="item._id"
            v-bind="item.bind"
            :level="item.level"
            :has-children="item.hasChildren"
          >
            <template #content>{{ item.value.name }}</template>
          </TreeItem>
        </template>
      </Tree>
    `,
  }),
}

export const MultipleSelection: Story = {
  args: {
    items: treeData,
    getKey: (item: TreeNode) => item.id,
  },
  render: () => ({
    components: { Tree, TreeItem },
    setup() {
      const selected = ref<TreeNode[]>([])
      const expanded = ref<string[]>(['1', '1.1'])
      return { selected, expanded, treeData }
    },
    template: `
      <Tree
        v-model="selected"
        v-model:expanded="expanded"
        :items="treeData"
        :get-key="(item) => item.id"
        :get-children="(item) => item.children"
        multiple
        class="w-[300px] rounded-lg border border-input p-2"
      >
        <template #default="{ flattenItems }">
          <TreeItem
            v-for="item in flattenItems"
            :key="item._id"
            v-bind="item.bind"
            :level="item.level"
            :has-children="item.hasChildren"
          >
            <template #content>{{ item.value.name }}</template>
          </TreeItem>
        </template>
      </Tree>
    `,
  }),
}
