import type { Meta, StoryObj } from '@storybook/vue3'
import { Alert, AlertDescription, AlertTitle } from '@lettuce/ui'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive'],
    },
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Alert, AlertDescription, AlertTitle },
    template: `
      <Alert>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    `,
  }),
}

export const Destructive: Story = {
  render: () => ({
    components: { Alert, AlertDescription, AlertTitle },
    template: `
      <Alert variant="destructive">
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    `,
  }),
}
