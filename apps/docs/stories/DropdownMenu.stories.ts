import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuRadioGroup,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@lettuce/ui/dropdown-menu'
import { Button } from '@lettuce/ui/button'

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
      DropdownMenuShortcut,
      Button,
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Log out
            <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `,
  }),
}

export const WithCheckboxItems: Story = {
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuCheckboxItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      Button,
    },
    setup() {
      const showStatusBar = ref(true)
      const showActivityBar = ref(false)
      const showPanel = ref(false)
      return { showStatusBar, showActivityBar, showPanel }
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">View Settings</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem v-model:checked="showStatusBar">
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model:checked="showActivityBar">
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model:checked="showPanel">
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `,
  }),
}

export const WithRadioItems: Story = {
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuRadioGroup,
      DropdownMenuRadioItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      Button,
    },
    setup() {
      const position = ref('bottom')
      return { position }
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Panel Position</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup v-model="position">
            <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    `,
  }),
}

export const WithSubMenu: Story = {
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuGroup,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuSub,
      DropdownMenuSubTrigger,
      DropdownMenuSubContent,
      Button,
    },
    template: `
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Email</DropdownMenuItem>
              <DropdownMenuItem>Message</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>More...</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Log out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `,
  }),
}
