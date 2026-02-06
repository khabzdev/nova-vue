import type { Meta, StoryObj } from '@storybook/vue3'
import { Separator } from '@novavue/ui/separator'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    decorative: { control: 'boolean' },
  },
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => ({
    components: { Separator },
    setup() {
      return { args }
    },
    template: `
      <div class="w-full max-w-sm">
        <div class="space-y-1">
          <h4 class="text-sm font-medium leading-none">Nova Vue</h4>
          <p class="text-sm text-muted-foreground">
            A component library for Vue.
          </p>
        </div>
        <Separator v-bind="args" class="my-4" />
        <div class="flex h-5 items-center space-x-4 text-sm">
          <div>Docs</div>
          <Separator orientation="vertical" />
          <div>API</div>
          <Separator orientation="vertical" />
          <div>Source</div>
        </div>
      </div>
    `,
  }),
}

export const Vertical: Story = {
  render: () => ({
    components: { Separator },
    template: `
      <div class="flex h-5 items-center space-x-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
        <Separator orientation="vertical" />
        <div>Community</div>
      </div>
    `,
  }),
}
