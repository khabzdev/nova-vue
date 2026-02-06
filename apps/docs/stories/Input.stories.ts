import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Input } from '@novavue/ui/input'
import { Label } from '@novavue/ui/label'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { value }
    },
    template: '<Input v-model="value" class="max-w-xs" />',
  }),
}

export const WithPlaceholder: Story = {
  render: () => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { value }
    },
    template: '<Input v-model="value" placeholder="Enter your email" class="max-w-xs" />',
  }),
}

export const WithLabel: Story = {
  render: () => ({
    components: { Input, Label },
    setup() {
      const email = ref('')
      return { email }
    },
    template: `
      <div class="grid w-full max-w-xs gap-1.5">
        <Label for="email">Email</Label>
        <Input id="email" v-model="email" type="email" placeholder="Enter your email" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Input },
    template: '<Input disabled value="Disabled input" class="max-w-xs" />',
  }),
}

export const Password: Story = {
  render: () => ({
    components: { Input, Label },
    setup() {
      const password = ref('')
      return { password }
    },
    template: `
      <div class="grid w-full max-w-xs gap-1.5">
        <Label for="password">Password</Label>
        <Input id="password" v-model="password" type="password" placeholder="Enter password" />
      </div>
    `,
  }),
}
