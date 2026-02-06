import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Tree, type TreeItemData } from '@lettuce/ui/tree'

const meta = {
  title: 'Components/Tree',
  component: Tree,
  tags: ['autodocs'],
} satisfies Meta<typeof Tree>

export default meta
type Story = StoryObj<typeof meta>

const fileTreeItems: TreeItemData[] = [
  {
    title: 'composables',
    icon: 'lucide:folder',
    children: [
      { title: 'useAuth.ts', icon: 'vscode-icons:file-type-typescript' },
      { title: 'useUser.ts', icon: 'vscode-icons:file-type-typescript' },
    ],
  },
  {
    title: 'components',
    icon: 'lucide:folder',
    children: [
      {
        title: 'Home',
        icon: 'lucide:folder',
        children: [
          { title: 'Card.vue', icon: 'vscode-icons:file-type-vue' },
          { title: 'Button.vue', icon: 'vscode-icons:file-type-vue' },
        ],
      },
    ],
  },
  { title: 'app.vue', icon: 'vscode-icons:file-type-vue' },
  { title: 'nuxt.config.ts', icon: 'vscode-icons:file-type-nuxt' },
]

export const Default: Story = {
  render: () => ({
    components: { Tree },
    setup() {
      const items = fileTreeItems
      return { items }
    },
    template: `
      <Tree
        :items="items"
        :default-expanded="['composables', 'components', 'Home']"
        class="w-[300px] rounded-lg border border-input p-2"
      />
    `,
  }),
}

export const WithSelection: Story = {
  render: () => ({
    components: { Tree },
    setup() {
      const items = fileTreeItems
      const selected = ref<TreeItemData | undefined>()
      return { items, selected }
    },
    template: `
      <div class="space-y-4">
        <Tree
          v-model="selected"
          :items="items"
          :default-expanded="['composables', 'components']"
          class="w-[300px] rounded-lg border border-input p-2"
        />
        <p class="text-sm text-muted-foreground">
          Selected: {{ selected?.title ?? 'None' }}
        </p>
      </div>
    `,
  }),
}

export const MultipleSelection: Story = {
  render: () => ({
    components: { Tree },
    setup() {
      const items = fileTreeItems
      const selected = ref<TreeItemData[]>([])
      return { items, selected }
    },
    template: `
      <div class="space-y-4">
        <Tree
          v-model="selected"
          :items="items"
          :default-expanded="['composables', 'components', 'Home']"
          multiple
          class="w-[300px] rounded-lg border border-input p-2"
        />
        <p class="text-sm text-muted-foreground">
          Selected: {{ selected.map(s => s.title).join(', ') || 'None' }}
        </p>
      </div>
    `,
  }),
}

const simpleItems: TreeItemData[] = [
  {
    title: 'Documents',
    children: [
      {
        title: 'Work',
        children: [
          { title: 'Report.pdf' },
          { title: 'Presentation.pptx' },
        ],
      },
      {
        title: 'Personal',
        children: [
          { title: 'Resume.docx' },
        ],
      },
    ],
  },
  {
    title: 'Images',
    children: [
      { title: 'vacation.jpg' },
      { title: 'profile.png' },
    ],
  },
  { title: 'readme.md' },
]

export const WithoutIcons: Story = {
  render: () => ({
    components: { Tree },
    setup() {
      const items = simpleItems
      return { items }
    },
    template: `
      <Tree
        :items="items"
        :default-expanded="['Documents', 'Work']"
        class="w-[300px] rounded-lg border border-input p-2"
      />
    `,
  }),
}
