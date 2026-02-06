import type { Meta, StoryObj } from '@storybook/vue3'
import { InputGroup, InputGroupInput, InputGroupAddon } from '@lettuce/ui/input-group'

const meta = {
  title: 'Components/InputGroup',
  component: InputGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof InputGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { InputGroup, InputGroupInput, InputGroupAddon },
    template: `
      <InputGroup class="w-full max-w-sm">
        <InputGroupAddon>https://</InputGroupAddon>
        <InputGroupInput placeholder="example.com" />
      </InputGroup>
    `,
  }),
}

export const WithSuffix: Story = {
  render: () => ({
    components: { InputGroup, InputGroupInput, InputGroupAddon },
    template: `
      <InputGroup class="w-full max-w-sm">
        <InputGroupInput placeholder="Username" />
        <InputGroupAddon>@gmail.com</InputGroupAddon>
      </InputGroup>
    `,
  }),
}

export const BothSides: Story = {
  render: () => ({
    components: { InputGroup, InputGroupInput, InputGroupAddon },
    template: `
      <InputGroup class="w-full max-w-sm">
        <InputGroupAddon>$</InputGroupAddon>
        <InputGroupInput placeholder="0.00" type="number" />
        <InputGroupAddon>USD</InputGroupAddon>
      </InputGroup>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { InputGroup, InputGroupInput, InputGroupAddon },
    template: `
      <InputGroup class="w-full max-w-sm">
        <InputGroupAddon>https://</InputGroupAddon>
        <InputGroupInput placeholder="example.com" disabled />
      </InputGroup>
    `,
  }),
}
