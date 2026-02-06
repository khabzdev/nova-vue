import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@nova-vue/ui/card'
import { Button } from '@nova-vue/ui/button'
import { Input } from '@nova-vue/ui/input'
import { Label } from '@nova-vue/ui/label'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle },
    template: `
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card content goes here.</p>
        </CardContent>
        <CardFooter>
          <p class="text-sm text-muted-foreground">Card footer</p>
        </CardFooter>
      </Card>
    `,
  }),
}

export const WithForm: Story = {
  render: () => ({
    components: { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Button, Input, Label },
    template: `
      <Card class="w-[350px]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>Deploy your new project in one-click.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div class="grid w-full items-center gap-4">
              <div class="flex flex-col space-y-1.5">
                <Label for="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter class="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button>Deploy</Button>
        </CardFooter>
      </Card>
    `,
  }),
}
