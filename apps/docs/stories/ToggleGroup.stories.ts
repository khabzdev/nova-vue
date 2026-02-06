import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { ToggleGroup, ToggleGroupItem } from '@nova-vue/ui/toggle-group'
import { Icon } from '@iconify/vue'

const meta = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem, Icon },
    setup() {
      const value = ref('center')
      return { value }
    },
    template: `
      <ToggleGroup v-model="value" type="single">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon icon="hugeicons:align-left" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon icon="hugeicons:align-center" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon icon="hugeicons:align-right" width="16" height="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    `,
  }),
}

export const Outline: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem, Icon },
    setup() {
      const value = ref('center')
      return { value }
    },
    template: `
      <ToggleGroup v-model="value" type="single" variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon icon="hugeicons:align-left" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon icon="hugeicons:align-center" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon icon="hugeicons:align-right" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="justify" aria-label="Justify">
          <Icon icon="hugeicons:align-justify" width="16" height="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    `,
  }),
}

export const Multiple: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem, Icon },
    setup() {
      const value = ref(['bold'])
      return { value }
    },
    template: `
      <ToggleGroup v-model="value" type="multiple">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Icon icon="hugeicons:text-bold" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Icon icon="hugeicons:text-italic" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Icon icon="hugeicons:text-underline" width="16" height="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem, Icon },
    setup() {
      const sm = ref('center')
      const md = ref('center')
      const lg = ref('center')
      return { sm, md, lg }
    },
    template: `
      <div class="flex flex-col gap-4">
        <div>
          <p class="text-sm font-medium mb-2">Small</p>
          <ToggleGroup v-model="sm" type="single" size="sm" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <Icon icon="hugeicons:align-left" width="14" height="14" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <Icon icon="hugeicons:align-center" width="14" height="14" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <Icon icon="hugeicons:align-right" width="14" height="14" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Default</p>
          <ToggleGroup v-model="md" type="single" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <Icon icon="hugeicons:align-left" width="16" height="16" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <Icon icon="hugeicons:align-center" width="16" height="16" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <Icon icon="hugeicons:align-right" width="16" height="16" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Large</p>
          <ToggleGroup v-model="lg" type="single" size="lg" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <Icon icon="hugeicons:align-left" width="18" height="18" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <Icon icon="hugeicons:align-center" width="18" height="18" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <Icon icon="hugeicons:align-right" width="18" height="18" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem, Icon },
    setup() {
      const value = ref('center')
      return { value }
    },
    template: `
      <ToggleGroup v-model="value" type="single" disabled variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          <Icon icon="hugeicons:align-left" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <Icon icon="hugeicons:align-center" width="16" height="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <Icon icon="hugeicons:align-right" width="16" height="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    `,
  }),
}
