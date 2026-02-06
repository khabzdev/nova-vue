import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Switch, Label } from '@lettuce/ui'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: '<Switch v-model="checked" />',
  }),
}

export const Checked: Story = {
  render: () => ({
    components: { Switch },
    setup() {
      const checked = ref(true)
      return { checked }
    },
    template: '<Switch v-model="checked" />',
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Switch, Label },
    setup() {
      const enabled = ref(false)
      return { enabled }
    },
    template: `
      <div class="flex items-center gap-2">
        <Switch id="airplane" v-model="enabled" />
        <Label for="airplane">Airplane Mode</Label>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Switch, Label },
    template: `
      <div class="flex items-center gap-2">
        <Switch id="disabled" disabled />
        <Label for="disabled" class="text-muted-foreground">Disabled</Label>
      </div>
    `,
  }),
}
