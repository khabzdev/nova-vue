import type { Meta, StoryObj } from '@storybook/vue3'
import { Popover, PopoverTrigger, PopoverContent } from '@nova-vue/ui/popover'
import { Button } from '@nova-vue/ui/button'
import { Input } from '@nova-vue/ui/input'
import { Label } from '@nova-vue/ui/label'

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Popover, PopoverTrigger, PopoverContent, Button },
    template: `
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline">Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">Dimensions</h4>
              <p class="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    `,
  }),
}

export const WithForm: Story = {
  render: () => ({
    components: { Popover, PopoverTrigger, PopoverContent, Button, Input, Label },
    template: `
      <Popover>
        <PopoverTrigger as-child>
          <Button variant="outline">Edit Profile</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="grid gap-4">
            <div class="space-y-2">
              <h4 class="font-medium leading-none">Profile</h4>
              <p class="text-sm text-muted-foreground">
                Update your profile information.
              </p>
            </div>
            <div class="grid gap-2">
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="name">Name</Label>
                <Input id="name" class="col-span-2 h-8" value="John Doe" />
              </div>
              <div class="grid grid-cols-3 items-center gap-4">
                <Label for="email">Email</Label>
                <Input id="email" class="col-span-2 h-8" value="john@example.com" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    `,
  }),
}

export const Positioning: Story = {
  render: () => ({
    components: { Popover, PopoverTrigger, PopoverContent, Button },
    template: `
      <div class="flex gap-4">
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Top</Button>
          </PopoverTrigger>
          <PopoverContent side="top">
            <p class="text-sm">Popover on top</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Bottom</Button>
          </PopoverTrigger>
          <PopoverContent side="bottom">
            <p class="text-sm">Popover on bottom</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Left</Button>
          </PopoverTrigger>
          <PopoverContent side="left">
            <p class="text-sm">Popover on left</p>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger as-child>
            <Button variant="outline">Right</Button>
          </PopoverTrigger>
          <PopoverContent side="right">
            <p class="text-sm">Popover on right</p>
          </PopoverContent>
        </Popover>
      </div>
    `,
  }),
}
