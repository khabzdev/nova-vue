import type { Meta, StoryObj } from '@storybook/vue3'
import { Toaster, useToast } from '@nova-vue/ui/toast'
import { Button } from '@nova-vue/ui/button'

const meta = {
  title: 'Components/Toast',
  component: Toaster,
  tags: ['autodocs'],
} satisfies Meta<typeof Toaster>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Toaster, Button },
    setup() {
      const { toast } = useToast()
      const showToast = () => {
        toast({
          title: 'Scheduled: Catch up',
          description: 'Friday, February 10, 2023 at 5:57 PM',
        })
      }
      return { showToast }
    },
    template: `
      <div>
        <Button @click="showToast">Show Toast</Button>
        <Toaster />
      </div>
    `,
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Toaster, Button },
    setup() {
      const { toast } = useToast()
      const showDefault = () => {
        toast({
          title: 'Default Toast',
          description: 'This is a default toast notification.',
        })
      }
      const showSuccess = () => {
        toast({
          title: 'Success!',
          description: 'Your changes have been saved.',
          variant: 'success',
        })
      }
      const showDestructive = () => {
        toast({
          title: 'Error',
          description: 'Something went wrong.',
          variant: 'destructive',
        })
      }
      const showWarning = () => {
        toast({
          title: 'Warning',
          description: 'Please review your settings.',
          variant: 'warning',
        })
      }
      const showInfo = () => {
        toast({
          title: 'Info',
          description: 'Here is some useful information.',
          variant: 'info',
        })
      }
      return { showDefault, showSuccess, showDestructive, showWarning, showInfo }
    },
    template: `
      <div>
        <div class="flex flex-wrap gap-2">
          <Button variant="outline" @click="showDefault">Default</Button>
          <Button variant="outline" @click="showSuccess">Success</Button>
          <Button variant="outline" @click="showDestructive">Destructive</Button>
          <Button variant="outline" @click="showWarning">Warning</Button>
          <Button variant="outline" @click="showInfo">Info</Button>
        </div>
        <Toaster />
      </div>
    `,
  }),
}

export const WithAction: Story = {
  render: () => ({
    components: { Toaster, Button },
    setup() {
      const { toast } = useToast()
      const showWithAction = () => {
        toast({
          title: 'Undo available',
          description: 'Your recent action can be undone.',
          action: {
            label: 'Undo',
            onClick: () => {
              console.log('Undo clicked')
            },
          },
        })
      }
      return { showWithAction }
    },
    template: `
      <div>
        <Button @click="showWithAction">Show Toast with Action</Button>
        <Toaster />
      </div>
    `,
  }),
}
