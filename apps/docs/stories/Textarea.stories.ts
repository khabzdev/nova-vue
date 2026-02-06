import type { Meta, StoryObj } from '@storybook/vue3'
import { Textarea } from '@nova-vue/ui/textarea'
import { Label } from '@nova-vue/ui/label'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here.',
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      return { args }
    },
    template: '<Textarea v-bind="args" class="w-full max-w-sm" />',
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Textarea, Label },
    template: `
      <div class="grid w-full max-w-sm gap-1.5">
        <Label for="message">Your message</Label>
        <Textarea id="message" placeholder="Type your message here." />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: 'Disabled textarea',
  },
  render: (args) => ({
    components: { Textarea },
    setup() {
      return { args }
    },
    template: '<Textarea v-bind="args" class="w-full max-w-sm" />',
  }),
}

export const WithDefaultValue: Story = {
  render: () => ({
    components: { Textarea },
    template: `
      <Textarea class="w-full max-w-sm" model-value="This is a default value for the textarea. You can edit it as needed." />
    `,
  }),
}
