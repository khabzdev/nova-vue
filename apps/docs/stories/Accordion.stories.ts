import type { Meta, StoryObj } from '@storybook/vue3'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@novavue/ui/accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    collapsible: { control: 'boolean' },
  },
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    type: 'single',
    collapsible: true,
  },
  render: (args) => ({
    components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
    setup() {
      return { args }
    },
    template: `
      <Accordion v-bind="args" class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match your design system.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It's animated by default with smooth transitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
}

export const Multiple: Story = {
  args: {
    type: 'multiple',
  },
  render: (args) => ({
    components: { Accordion, AccordionItem, AccordionTrigger, AccordionContent },
    setup() {
      return { args }
    },
    template: `
      <Accordion v-bind="args" class="w-full max-w-md">
        <AccordionItem value="item-1">
          <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
          <AccordionContent>
            Yes! With type="multiple" you can expand multiple items at once.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How does it work?</AccordionTrigger>
          <AccordionContent>
            Each item maintains its own open/closed state independently.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What about accessibility?</AccordionTrigger>
          <AccordionContent>
            Full keyboard navigation and ARIA support is included.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    `,
  }),
}
