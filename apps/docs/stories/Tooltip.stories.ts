import type { Meta, StoryObj } from '@storybook/vue3'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@nova-vue/ui/tooltip'
import { Button } from '@nova-vue/ui/button'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    delayDuration: { control: 'number' },
  },
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    delayDuration: 300,
  },
  render: (args) => ({
    components: { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Button },
    setup() {
      return { args }
    },
    template: `
      <TooltipProvider>
        <Tooltip v-bind="args">
          <TooltipTrigger as-child>
            <Button variant="outline">Hover me</Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add to library</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    `,
  }),
}

export const Positioning: Story = {
  render: () => ({
    components: { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider, Button },
    template: `
      <TooltipProvider>
        <div class="flex gap-4">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Top</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Tooltip on top</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Bottom</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              <p>Tooltip on bottom</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Left</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Tooltip on left</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Right</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Tooltip on right</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>
    `,
  }),
}
