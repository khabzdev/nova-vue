import type { Meta, StoryObj } from '@storybook/vue3'
import { Splitter, SplitterPanel, SplitterResizeHandle } from '@lettuce/ui/splitter'

const meta = {
  title: 'Components/Splitter',
  component: Splitter,
  tags: ['autodocs'],
} satisfies Meta<typeof Splitter>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  args: {
    direction: 'horizontal',
  },
  render: (args) => ({
    components: { Splitter, SplitterPanel, SplitterResizeHandle },
    setup() {
      return { args }
    },
    template: `
      <Splitter v-bind="args" class="h-[300px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="25" :min-size="20" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Sidebar</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="75" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Content</span>
        </SplitterPanel>
      </Splitter>
    `,
  }),
}

export const Vertical: Story = {
  args: {
    direction: 'vertical',
  },
  render: (args) => ({
    components: { Splitter, SplitterPanel, SplitterResizeHandle },
    setup() {
      return { args }
    },
    template: `
      <Splitter v-bind="args" class="h-[400px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="30" :min-size="20" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Header</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="70" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Content</span>
        </SplitterPanel>
      </Splitter>
    `,
  }),
}

export const ThreePanels: Story = {
  args: {
    direction: 'horizontal',
  },
  render: (args) => ({
    components: { Splitter, SplitterPanel, SplitterResizeHandle },
    setup() {
      return { args }
    },
    template: `
      <Splitter v-bind="args" class="h-[300px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="20" :min-size="15" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Left</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="60" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Center</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="20" :min-size="15" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Right</span>
        </SplitterPanel>
      </Splitter>
    `,
  }),
}

export const NestedPanels: Story = {
  args: {
    direction: 'horizontal',
  },
  render: (args) => ({
    components: { Splitter, SplitterPanel, SplitterResizeHandle },
    setup() {
      return { args }
    },
    template: `
      <Splitter v-bind="args" class="h-[400px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="25" :min-size="20" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Sidebar</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="75">
          <Splitter direction="vertical" class="h-full">
            <SplitterPanel :default-size="30" class="flex items-center justify-center bg-muted/20">
              <span class="font-medium text-muted-foreground">Top</span>
            </SplitterPanel>
            <SplitterResizeHandle />
            <SplitterPanel :default-size="70" class="flex items-center justify-center">
              <span class="font-medium text-muted-foreground">Main Content</span>
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
      </Splitter>
    `,
  }),
}

export const Collapsible: Story = {
  args: {
    direction: 'horizontal',
  },
  render: (args) => ({
    components: { Splitter, SplitterPanel, SplitterResizeHandle },
    setup() {
      return { args }
    },
    template: `
      <Splitter v-bind="args" class="h-[300px] w-full rounded-lg border border-input">
        <SplitterPanel
          :default-size="25"
          :min-size="15"
          collapsible
          :collapsed-size="5"
          class="flex items-center justify-center bg-muted/30"
        >
          <span class="font-medium text-muted-foreground">Collapsible</span>
        </SplitterPanel>
        <SplitterResizeHandle />
        <SplitterPanel :default-size="75" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Content</span>
        </SplitterPanel>
      </Splitter>
    `,
  }),
}

export const WithoutHandle: Story = {
  args: {
    direction: 'horizontal',
  },
  render: (args) => ({
    components: { Splitter, SplitterPanel, SplitterResizeHandle },
    setup() {
      return { args }
    },
    template: `
      <Splitter v-bind="args" class="h-[300px] w-full rounded-lg border border-input">
        <SplitterPanel :default-size="50" class="flex items-center justify-center bg-muted/30">
          <span class="font-medium text-muted-foreground">Left</span>
        </SplitterPanel>
        <SplitterResizeHandle :with-handle="false" class="bg-border" />
        <SplitterPanel :default-size="50" class="flex items-center justify-center">
          <span class="font-medium text-muted-foreground">Right</span>
        </SplitterPanel>
      </Splitter>
    `,
  }),
}
