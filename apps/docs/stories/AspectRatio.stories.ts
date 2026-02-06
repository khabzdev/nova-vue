import type { Meta, StoryObj } from '@storybook/vue3'
import { AspectRatio } from '@nova-vue/ui/aspect-ratio'

const meta = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  argTypes: {
    ratio: {
      control: 'number',
      description: 'The desired aspect ratio (width / height)',
    },
  },
  args: {
    ratio: 16 / 9,
  },
} satisfies Meta<typeof AspectRatio>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => ({
    components: { AspectRatio },
    setup() {
      return { args }
    },
    template: `
      <div class="w-[450px]">
        <AspectRatio v-bind="args" class="rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </div>
    `,
  }),
}

export const Square: Story = {
  args: {
    ratio: 1,
  },
  render: (args) => ({
    components: { AspectRatio },
    setup() {
      return { args }
    },
    template: `
      <div class="w-[300px]">
        <AspectRatio v-bind="args" class="rounded-lg bg-muted">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </div>
    `,
  }),
}

export const Portrait: Story = {
  args: {
    ratio: 3 / 4,
  },
  render: (args) => ({
    components: { AspectRatio },
    setup() {
      return { args }
    },
    template: `
      <div class="w-[300px]">
        <AspectRatio v-bind="args" class="rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            class="h-full w-full rounded-lg object-cover"
          />
        </AspectRatio>
      </div>
    `,
  }),
}

export const Video: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => ({
    components: { AspectRatio },
    setup() {
      return { args }
    },
    template: `
      <div class="w-[600px]">
        <AspectRatio v-bind="args" class="rounded-lg bg-muted">
          <iframe
            class="h-full w-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </AspectRatio>
      </div>
    `,
  }),
}

export const WithPlaceholder: Story = {
  args: {
    ratio: 16 / 9,
  },
  render: (args) => ({
    components: { AspectRatio },
    setup() {
      return { args }
    },
    template: `
      <div class="w-[450px]">
        <AspectRatio v-bind="args" class="flex items-center justify-center rounded-lg bg-muted">
          <span class="text-sm text-muted-foreground">16:9 Aspect Ratio</span>
        </AspectRatio>
      </div>
    `,
  }),
}
