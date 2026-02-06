import type { Meta, StoryObj } from '@storybook/vue3'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@novavue/ui/tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Tabs, TabsContent, TabsList, TabsTrigger },
    template: `
      <Tabs default-value="account" class="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account" class="p-4">
          <p class="text-sm text-muted-foreground">
            Make changes to your account here. Click save when you're done.
          </p>
        </TabsContent>
        <TabsContent value="password" class="p-4">
          <p class="text-sm text-muted-foreground">
            Change your password here. After saving, you'll be logged out.
          </p>
        </TabsContent>
      </Tabs>
    `,
  }),
}
