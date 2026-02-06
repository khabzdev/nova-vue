import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Checkbox } from '@novavue/ui/checkbox'
import { Label } from '@novavue/ui/label'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: '<Checkbox v-model="checked" />',
  }),
}

export const Checked: Story = {
  render: () => ({
    components: { Checkbox },
    setup() {
      const checked = ref(true)
      return { checked }
    },
    template: '<Checkbox v-model="checked" />',
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Checkbox, Label },
    setup() {
      const checked = ref(false)
      return { checked }
    },
    template: `
      <div class="flex items-center gap-2">
        <Checkbox id="terms" v-model="checked" />
        <Label for="terms">Accept terms and conditions</Label>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Checkbox, Label },
    template: `
      <div class="flex items-center gap-2">
        <Checkbox id="disabled" disabled />
        <Label for="disabled" class="text-muted-foreground">Disabled checkbox</Label>
      </div>
    `,
  }),
}
