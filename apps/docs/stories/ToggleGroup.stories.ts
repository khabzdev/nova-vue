import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { ToggleGroup, ToggleGroupItem } from '@lettuce/ui/toggle-group'
import { HugeiconsIcon } from '@hugeicons/vue'
import {
  TextBoldIcon,
  TextItalicIcon,
  TextUnderlineIcon,
  AlignLeftIcon,
  AlignCenter,
  AlignRightIcon,
  AlignJustify,
} from '@hugeicons/core-free-icons'

const meta = {
  title: 'Components/ToggleGroup',
  component: ToggleGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem, HugeiconsIcon },
    setup() {
      const value = ref('center')
      return { value, AlignLeftIcon, AlignCenter, AlignRightIcon }
    },
    template: `
      <ToggleGroup v-model="value" type="single">
        <ToggleGroupItem value="left" aria-label="Align left">
          <HugeiconsIcon :icon="AlignLeftIcon" :size="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <HugeiconsIcon :icon="AlignCenterIcon" :size="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <HugeiconsIcon :icon="AlignRightIcon" :size="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    `,
  }),
}

export const Outline: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem, HugeiconsIcon },
    setup() {
      const value = ref('center')
      return { value, AlignLeftIcon, AlignCenter, AlignRightIcon, AlignJustify }
    },
    template: `
      <ToggleGroup v-model="value" type="single" variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          <HugeiconsIcon :icon="AlignLeftIcon" :size="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <HugeiconsIcon :icon="AlignCenterIcon" :size="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <HugeiconsIcon :icon="AlignRightIcon" :size="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="justify" aria-label="Justify">
          <HugeiconsIcon :icon="AlignJustifyIcon" :size="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    `,
  }),
}

export const Multiple: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem, HugeiconsIcon },
    setup() {
      const value = ref(['bold'])
      return { value, TextBoldIcon, TextItalicIcon, TextUnderlineIcon }
    },
    template: `
      <ToggleGroup v-model="value" type="multiple">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <HugeiconsIcon :icon="TextBoldIcon" :size="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <HugeiconsIcon :icon="TextItalicIcon" :size="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <HugeiconsIcon :icon="TextUnderlineIcon" :size="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem, HugeiconsIcon },
    setup() {
      const sm = ref('center')
      const md = ref('center')
      const lg = ref('center')
      return { sm, md, lg, AlignLeftIcon, AlignCenter, AlignRightIcon }
    },
    template: `
      <div class="flex flex-col gap-4">
        <div>
          <p class="text-sm font-medium mb-2">Small</p>
          <ToggleGroup v-model="sm" type="single" size="sm" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <HugeiconsIcon :icon="AlignLeftIcon" :size="14" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <HugeiconsIcon :icon="AlignCenterIcon" :size="14" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <HugeiconsIcon :icon="AlignRightIcon" :size="14" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Default</p>
          <ToggleGroup v-model="md" type="single" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <HugeiconsIcon :icon="AlignLeftIcon" :size="16" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <HugeiconsIcon :icon="AlignCenterIcon" :size="16" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <HugeiconsIcon :icon="AlignRightIcon" :size="16" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div>
          <p class="text-sm font-medium mb-2">Large</p>
          <ToggleGroup v-model="lg" type="single" size="lg" variant="outline">
            <ToggleGroupItem value="left" aria-label="Align left">
              <HugeiconsIcon :icon="AlignLeftIcon" :size="18" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <HugeiconsIcon :icon="AlignCenterIcon" :size="18" />
            </ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Align right">
              <HugeiconsIcon :icon="AlignRightIcon" :size="18" />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { ToggleGroup, ToggleGroupItem, HugeiconsIcon },
    setup() {
      const value = ref('center')
      return { value, AlignLeftIcon, AlignCenter, AlignRightIcon }
    },
    template: `
      <ToggleGroup v-model="value" type="single" disabled variant="outline">
        <ToggleGroupItem value="left" aria-label="Align left">
          <HugeiconsIcon :icon="AlignLeftIcon" :size="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <HugeiconsIcon :icon="AlignCenterIcon" :size="16" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <HugeiconsIcon :icon="AlignRightIcon" :size="16" />
        </ToggleGroupItem>
      </ToggleGroup>
    `,
  }),
}
