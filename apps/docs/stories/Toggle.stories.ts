import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Toggle } from '@novavue/ui/toggle'
import { Icon } from '@iconify/vue'

const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'outline'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => ({
    components: { Toggle, Icon },
    setup() {
      const pressed = ref(false)
      return { args, pressed }
    },
    template: `
      <Toggle v-bind="args" v-model="pressed" aria-label="Toggle bold">
        <Icon icon="hugeicons:text-bold" width="16" height="16" />
      </Toggle>
    `,
  }),
}

export const WithText: Story = {
  render: () => ({
    components: { Toggle, Icon },
    setup() {
      const pressed = ref(false)
      return { pressed }
    },
    template: `
      <Toggle v-model="pressed" aria-label="Toggle italic">
        <Icon icon="hugeicons:text-italic" width="16" height="16" />
        Italic
      </Toggle>
    `,
  }),
}

export const Outline: Story = {
  render: () => ({
    components: { Toggle, Icon },
    setup() {
      const pressed = ref(false)
      return { pressed }
    },
    template: `
      <Toggle v-model="pressed" variant="outline" aria-label="Toggle underline">
        <Icon icon="hugeicons:text-underline" width="16" height="16" />
      </Toggle>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Toggle, Icon },
    setup() {
      const sm = ref(false)
      const md = ref(true)
      const lg = ref(false)
      return { sm, md, lg }
    },
    template: `
      <div class="flex items-center gap-4">
        <Toggle v-model="sm" size="sm" aria-label="Toggle small">
          <Icon icon="hugeicons:text-bold" width="14" height="14" />
        </Toggle>
        <Toggle v-model="md" aria-label="Toggle default">
          <Icon icon="hugeicons:text-bold" width="16" height="16" />
        </Toggle>
        <Toggle v-model="lg" size="lg" aria-label="Toggle large">
          <Icon icon="hugeicons:text-bold" width="18" height="18" />
        </Toggle>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Toggle, Icon },
    template: `
      <div class="flex items-center gap-4">
        <Toggle disabled aria-label="Disabled toggle">
          <Icon icon="hugeicons:text-bold" width="16" height="16" />
        </Toggle>
        <Toggle disabled default-value aria-label="Disabled pressed toggle">
          <Icon icon="hugeicons:text-bold" width="16" height="16" />
        </Toggle>
      </div>
    `,
  }),
}
