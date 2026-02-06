import type { Meta, StoryObj } from '@storybook/vue3'
import { Avatar, AvatarImage, AvatarFallback } from '@novavue/ui/avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'default', 'lg', 'xl', '2xl'],
    },
  },
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    size: 'default',
  },
  render: (args) => ({
    components: { Avatar, AvatarImage, AvatarFallback },
    setup() {
      return { args }
    },
    template: `
      <Avatar v-bind="args">
        <AvatarImage src="https://pbs.twimg.com/profile_images/1908475222728011776/z_pvBR14_400x400.jpg" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    `,
  }),
}

export const Fallback: Story = {
  args: {
    size: 'default',
  },
  render: (args) => ({
    components: { Avatar, AvatarImage, AvatarFallback },
    setup() {
      return { args }
    },
    template: `
      <Avatar v-bind="args">
        <AvatarImage src="/broken-image.jpg" alt="Broken" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Avatar, AvatarImage, AvatarFallback },
    template: `
      <div class="flex items-center gap-4">
        <Avatar size="xs">
          <AvatarImage src="https://pbs.twimg.com/profile_images/1908475222728011776/z_pvBR14_400x400.jpg" alt="@shadcn" />
          <AvatarFallback>XS</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarImage src="https://pbs.twimg.com/profile_images/1908475222728011776/z_pvBR14_400x400.jpg" alt="@shadcn" />
          <AvatarFallback>SM</AvatarFallback>
        </Avatar>
        <Avatar size="default">
          <AvatarImage src="https://pbs.twimg.com/profile_images/1908475222728011776/z_pvBR14_400x400.jpg" alt="@shadcn" />
          <AvatarFallback>MD</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarImage src="https://pbs.twimg.com/profile_images/1908475222728011776/z_pvBR14_400x400.jpg" alt="@shadcn" />
          <AvatarFallback>LG</AvatarFallback>
        </Avatar>
        <Avatar size="xl">
          <AvatarImage src="https://pbs.twimg.com/profile_images/1908475222728011776/z_pvBR14_400x400.jpg" alt="@shadcn" />
          <AvatarFallback>XL</AvatarFallback>
        </Avatar>
        <Avatar size="2xl">
          <AvatarImage src="https://pbs.twimg.com/profile_images/1908475222728011776/z_pvBR14_400x400.jpg" alt="@shadcn" />
          <AvatarFallback>2XL</AvatarFallback>
        </Avatar>
      </div>
    `,
  }),
}
