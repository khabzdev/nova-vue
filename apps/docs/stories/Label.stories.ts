import type { Meta, StoryObj } from '@storybook/vue3'
import { Label } from '@nova-vue/ui/label'
import { Input } from '@nova-vue/ui/input'

const meta = {
  title: 'Components/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'muted', 'destructive'],
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => ({
    components: { Label },
    setup() {
      return { args }
    },
    template: '<Label v-bind="args">Email</Label>',
  }),
}

export const WithInput: Story = {
  render: () => ({
    components: { Label, Input },
    template: `
      <div class="grid w-full max-w-sm items-center gap-1.5">
        <Label for="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Label },
    template: `
      <div class="flex flex-col gap-3">
        <Label variant="default">Default Label</Label>
        <Label variant="muted">Muted Label</Label>
        <Label variant="destructive">Destructive Label</Label>
      </div>
    `,
  }),
}
