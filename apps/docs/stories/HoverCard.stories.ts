import type { Meta, StoryObj } from '@storybook/vue3'
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@nova-vue/ui/hover-card'
import { Avatar, AvatarImage, AvatarFallback } from '@nova-vue/ui/avatar'
import { Button } from '@nova-vue/ui/button'

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      HoverCard,
      HoverCardTrigger,
      HoverCardContent,
    },
    template: `
      <HoverCard>
        <HoverCardTrigger as-child>
          <a href="#" class="font-medium underline underline-offset-4">@vue</a>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between gap-4">
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@vue</h4>
              <p class="text-sm">
                The Progressive JavaScript Framework. Built by the community for the community.
              </p>
              <div class="flex items-center pt-2">
                <span class="text-xs text-muted-foreground">
                  Joined December 2016
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    `,
  }),
}

export const WithAvatar: Story = {
  render: () => ({
    components: {
      HoverCard,
      HoverCardTrigger,
      HoverCardContent,
      Avatar,
      AvatarImage,
      AvatarFallback,
    },
    template: `
      <HoverCard>
        <HoverCardTrigger as-child>
          <a href="#" class="font-medium underline underline-offset-4">@vue</a>
        </HoverCardTrigger>
        <HoverCardContent class="w-80">
          <div class="flex justify-between gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/vuejs.png" />
              <AvatarFallback>VU</AvatarFallback>
            </Avatar>
            <div class="space-y-1">
              <h4 class="text-sm font-semibold">@vue</h4>
              <p class="text-sm">
                The Progressive JavaScript Framework. Built by the community for the community.
              </p>
              <div class="flex items-center pt-2">
                <span class="text-xs text-muted-foreground">
                  Joined December 2016
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
    `,
  }),
}

export const WithButton: Story = {
  render: () => ({
    components: {
      HoverCard,
      HoverCardTrigger,
      HoverCardContent,
      Button,
    },
    template: `
      <HoverCard>
        <HoverCardTrigger as-child>
          <Button variant="link">Hover me</Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <div class="space-y-2">
            <h4 class="text-sm font-semibold">Documentation</h4>
            <p class="text-sm text-muted-foreground">
              View the full documentation at docs.example.com
            </p>
          </div>
        </HoverCardContent>
      </HoverCard>
    `,
  }),
}
