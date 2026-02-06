import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioItem,
  MenubarRadioGroup,
  MenubarGroup,
  MenubarLabel,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from '@novavue/ui/menubar'

const meta = {
  title: 'Components/Menubar',
  component: Menubar,
  tags: ['autodocs'],
} satisfies Meta<typeof Menubar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      Menubar,
      MenubarMenu,
      MenubarTrigger,
      MenubarContent,
      MenubarItem,
      MenubarSeparator,
      MenubarShortcut,
    },
    template: `
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab
              <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Print
              <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Undo
              <MenubarShortcut>⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Redo
              <MenubarShortcut>⇧⌘Z</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Cut
              <MenubarShortcut>⌘X</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Copy
              <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Paste
              <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Always Show Bookmarks Bar</MenubarItem>
            <MenubarItem>Always Show Full URLs</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              Reload
              <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              Force Reload
              <MenubarShortcut>⇧⌘R</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Toggle Fullscreen</MenubarItem>
            <MenubarItem>Hide Sidebar</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    `,
  }),
}

export const WithCheckboxItems: Story = {
  render: () => ({
    components: {
      Menubar,
      MenubarMenu,
      MenubarTrigger,
      MenubarContent,
      MenubarCheckboxItem,
      MenubarLabel,
      MenubarSeparator,
    },
    setup() {
      const showBookmarksBar = ref(true)
      const showFullUrls = ref(false)
      return { showBookmarksBar, showFullUrls }
    },
    template: `
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>View</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Appearance</MenubarLabel>
            <MenubarSeparator />
            <MenubarCheckboxItem v-model:checked="showBookmarksBar">
              Always Show Bookmarks Bar
            </MenubarCheckboxItem>
            <MenubarCheckboxItem v-model:checked="showFullUrls">
              Always Show Full URLs
            </MenubarCheckboxItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    `,
  }),
}

export const WithRadioItems: Story = {
  render: () => ({
    components: {
      Menubar,
      MenubarMenu,
      MenubarTrigger,
      MenubarContent,
      MenubarRadioGroup,
      MenubarRadioItem,
      MenubarLabel,
      MenubarSeparator,
    },
    setup() {
      const profile = ref('benoit')
      return { profile }
    },
    template: `
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Profiles</MenubarTrigger>
          <MenubarContent>
            <MenubarLabel>Switch Account</MenubarLabel>
            <MenubarSeparator />
            <MenubarRadioGroup v-model="profile">
              <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
              <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
              <MenubarRadioItem value="luis">Luis</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    `,
  }),
}

export const WithSubMenu: Story = {
  render: () => ({
    components: {
      Menubar,
      MenubarMenu,
      MenubarTrigger,
      MenubarContent,
      MenubarItem,
      MenubarGroup,
      MenubarSeparator,
      MenubarShortcut,
      MenubarSub,
      MenubarSubTrigger,
      MenubarSubContent,
    },
    template: `
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab
              <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>
              New Window
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarSub>
              <MenubarSubTrigger>Share</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Email link</MenubarItem>
                <MenubarItem>Messages</MenubarItem>
                <MenubarItem>Notes</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarSeparator />
            <MenubarItem>
              Print
              <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    `,
  }),
}
