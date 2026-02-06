import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { Toggle } from '@lettuce/ui/toggle'
import { HugeiconsIcon } from '@hugeicons/vue'
import { TextBoldIcon, TextItalicIcon, TextUnderlineIcon } from '@hugeicons/core-free-icons'

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
    components: { Toggle, HugeiconsIcon },
    setup() {
      const pressed = ref(false)
      return { args, pressed, TextBoldIcon }
    },
    template: `
      <Toggle v-bind="args" v-model="pressed" aria-label="Toggle bold">
        <HugeiconsIcon :icon="TextBoldIcon" :size="16" />
      </Toggle>
    `,
  }),
}

export const WithText: Story = {
  render: () => ({
    components: { Toggle, HugeiconsIcon },
    setup() {
      const pressed = ref(false)
      return { pressed, TextItalicIcon }
    },
    template: `
      <Toggle v-model="pressed" aria-label="Toggle italic">
        <HugeiconsIcon :icon="TextItalicIcon" :size="16" />
        Italic
      </Toggle>
    `,
  }),
}

export const Outline: Story = {
  render: () => ({
    components: { Toggle, HugeiconsIcon },
    setup() {
      const pressed = ref(false)
      return { pressed, TextUnderlineIcon }
    },
    template: `
      <Toggle v-model="pressed" variant="outline" aria-label="Toggle underline">
        <HugeiconsIcon :icon="TextUnderlineIcon" :size="16" />
      </Toggle>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { Toggle, HugeiconsIcon },
    setup() {
      const sm = ref(false)
      const md = ref(true)
      const lg = ref(false)
      return { sm, md, lg, TextBoldIcon }
    },
    template: `
      <div class="flex items-center gap-4">
        <Toggle v-model="sm" size="sm" aria-label="Toggle small">
          <HugeiconsIcon :icon="TextBoldIcon" :size="14" />
        </Toggle>
        <Toggle v-model="md" aria-label="Toggle default">
          <HugeiconsIcon :icon="TextBoldIcon" :size="16" />
        </Toggle>
        <Toggle v-model="lg" size="lg" aria-label="Toggle large">
          <HugeiconsIcon :icon="TextBoldIcon" :size="18" />
        </Toggle>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Toggle, HugeiconsIcon },
    setup() {
      return { TextBoldIcon }
    },
    template: `
      <div class="flex items-center gap-4">
        <Toggle disabled aria-label="Disabled toggle">
          <HugeiconsIcon :icon="TextBoldIcon" :size="16" />
        </Toggle>
        <Toggle disabled default-value aria-label="Disabled pressed toggle">
          <HugeiconsIcon :icon="TextBoldIcon" :size="16" />
        </Toggle>
      </div>
    `,
  }),
}
