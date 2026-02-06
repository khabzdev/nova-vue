import type { Meta, StoryObj } from '@storybook/vue3'
import { ScrollArea } from '@novavue/ui/scroll-area'
import { Separator } from '@novavue/ui/separator'

const meta = {
  title: 'Components/ScrollArea',
  component: ScrollArea,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['auto', 'always', 'scroll', 'hover'],
    },
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal', 'both'],
    },
  },
  args: {
    orientation: 'vertical',
    type: 'hover',
  },
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.${a.length - i}.0`
)

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => ({
    components: { ScrollArea, Separator },
    setup() {
      return { args, tags }
    },
    template: `
      <ScrollArea v-bind="args" class="h-72 w-48 rounded-md border" style="height: 18rem;">
        <div class="p-4">
          <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
          <div v-for="tag in tags" :key="tag">
            <div class="text-sm">{{ tag }}</div>
            <Separator class="my-2" />
          </div>
        </div>
      </ScrollArea>
    `,
  }),
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => ({
    components: { ScrollArea },
    setup() {
      return { args }
    },
    template: `
      <ScrollArea v-bind="args" class="w-96 whitespace-nowrap rounded-md border">
        <div class="flex w-max space-x-4 p-4">
          <div v-for="i in 200" :key="i" class="shrink-0">
            <div class="h-32 w-32 rounded-md bg-muted flex items-center justify-center">
              <span class="text-sm text-muted-foreground">Item {{ i }}</span>
            </div>
          </div>
        </div>
      </ScrollArea>
    `,
  }),
}

export const Both: Story = {
  args: {
    orientation: 'both',
  },
  render: (args) => ({
    components: { ScrollArea },
    setup() {
      return { args }
    },
    template: `
      <ScrollArea v-bind="args" class="h-72 w-72 rounded-md border" style="height: 18rem;">
        <div class="p-4 w-[600px]">
          <h4 class="mb-4 text-sm font-medium leading-none">Both Directions</h4>
          <p class="text-sm text-muted-foreground whitespace-nowrap">
            This content is wider than the container and requires horizontal scrolling.
          </p>
          <div class="mt-4 space-y-2">
            <div v-for="i in 20" :key="i" class="text-sm whitespace-nowrap">
              Row {{ i }} - This is some content that extends beyond the container width to demonstrate horizontal scrolling
            </div>
          </div>
        </div>
      </ScrollArea>
    `,
  }),
}
