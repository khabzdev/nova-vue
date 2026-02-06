import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Slider } from '@novavue/ui/slider'

const meta = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Slider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'default',
    defaultValue: [50],
    max: 100,
    step: 1,
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args }
    },
    template: '<Slider v-bind="args" class="w-60" />',
  }),
}

export const Variants: Story = {
  render: () => ({
    components: { Slider },
    template: `
      <div class="flex flex-col gap-6 w-60">
        <div class="space-y-2">
          <span class="text-sm text-muted-foreground">Default</span>
          <Slider variant="default" :default-value="[50]" :max="100" :step="1" />
        </div>
        <div class="space-y-2">
          <span class="text-sm text-muted-foreground">Success</span>
          <Slider variant="success" :default-value="[75]" :max="100" :step="1" />
        </div>
        <div class="space-y-2">
          <span class="text-sm text-muted-foreground">Destructive</span>
          <Slider variant="destructive" :default-value="[25]" :max="100" :step="1" />
        </div>
      </div>
    `,
  }),
}

export const Range: Story = {
  render: () => ({
    components: { Slider },
    setup() {
      const value = ref([25, 75])
      return { value }
    },
    template: `
      <div class="space-y-2 w-60">
        <span class="text-sm text-muted-foreground">Range: {{ value[0] }} - {{ value[1] }}</span>
        <Slider v-model="value" :max="100" :step="1" />
      </div>
    `,
  }),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: [50],
    max: 100,
  },
  render: (args) => ({
    components: { Slider },
    setup() {
      return { args }
    },
    template: '<Slider v-bind="args" class="w-60" />',
  }),
}
