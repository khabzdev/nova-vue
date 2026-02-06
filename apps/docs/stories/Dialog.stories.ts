import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Button } from '@lettuce/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@lettuce/ui/dialog'
import { Input } from '@lettuce/ui/input'
import { Label } from '@lettuce/ui/label'

const meta = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
} satisfies Meta<typeof Dialog>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      DialogClose,
    },
    template: `
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline">Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose as-child>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Delete Account</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
}

export const WithForm: Story = {
  render: () => ({
    components: {
      Button,
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
      DialogTrigger,
      Input,
      Label,
    },
    setup() {
      const name = ref('')
      const email = ref('')
      return { name, email }
    },
    template: `
      <Dialog>
        <DialogTrigger as-child>
          <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">Name</Label>
              <Input id="name" v-model="name" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="email" class="text-right">Email</Label>
              <Input id="email" v-model="email" type="email" class="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `,
  }),
}
