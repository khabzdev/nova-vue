import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import {
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxGroup,
  ListboxGroupLabel,
  ListboxFilter,
} from '@nova-vue/ui/listbox'

const meta = {
  title: 'Components/Listbox',
  component: Listbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Listbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { Listbox, ListboxContent, ListboxItem },
    setup() {
      const selected = ref('')
      return { selected }
    },
    template: `
      <Listbox v-model="selected" class="w-[200px]">
        <ListboxContent>
          <ListboxItem value="apple">Apple</ListboxItem>
          <ListboxItem value="banana">Banana</ListboxItem>
          <ListboxItem value="orange">Orange</ListboxItem>
          <ListboxItem value="grape">Grape</ListboxItem>
          <ListboxItem value="mango">Mango</ListboxItem>
        </ListboxContent>
      </Listbox>
    `,
  }),
}

export const Multiple: Story = {
  render: () => ({
    components: { Listbox, ListboxContent, ListboxItem },
    setup() {
      const selected = ref<string[]>([])
      return { selected }
    },
    template: `
      <Listbox v-model="selected" multiple class="w-[200px]">
        <ListboxContent>
          <ListboxItem value="apple">Apple</ListboxItem>
          <ListboxItem value="banana">Banana</ListboxItem>
          <ListboxItem value="orange">Orange</ListboxItem>
          <ListboxItem value="grape">Grape</ListboxItem>
          <ListboxItem value="mango">Mango</ListboxItem>
        </ListboxContent>
      </Listbox>
    `,
  }),
}

export const WithGroups: Story = {
  render: () => ({
    components: { Listbox, ListboxContent, ListboxItem, ListboxGroup, ListboxGroupLabel },
    setup() {
      const selected = ref('')
      return { selected }
    },
    template: `
      <Listbox v-model="selected" class="w-[220px]">
        <ListboxContent>
          <ListboxGroup>
            <ListboxGroupLabel>Fruits</ListboxGroupLabel>
            <ListboxItem value="apple">Apple</ListboxItem>
            <ListboxItem value="banana">Banana</ListboxItem>
            <ListboxItem value="orange">Orange</ListboxItem>
          </ListboxGroup>
          <ListboxGroup>
            <ListboxGroupLabel>Vegetables</ListboxGroupLabel>
            <ListboxItem value="carrot">Carrot</ListboxItem>
            <ListboxItem value="broccoli">Broccoli</ListboxItem>
            <ListboxItem value="spinach">Spinach</ListboxItem>
          </ListboxGroup>
        </ListboxContent>
      </Listbox>
    `,
  }),
}

export const WithFilter: Story = {
  render: () => ({
    components: { Listbox, ListboxContent, ListboxItem, ListboxFilter },
    setup() {
      const selected = ref('')
      return { selected }
    },
    template: `
      <Listbox v-model="selected" class="w-[220px]">
        <ListboxFilter placeholder="Search fruits..." />
        <ListboxContent>
          <ListboxItem value="apple">Apple</ListboxItem>
          <ListboxItem value="banana">Banana</ListboxItem>
          <ListboxItem value="orange">Orange</ListboxItem>
          <ListboxItem value="grape">Grape</ListboxItem>
          <ListboxItem value="mango">Mango</ListboxItem>
          <ListboxItem value="strawberry">Strawberry</ListboxItem>
          <ListboxItem value="blueberry">Blueberry</ListboxItem>
        </ListboxContent>
      </Listbox>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { Listbox, ListboxContent, ListboxItem },
    setup() {
      const selected = ref('')
      return { selected }
    },
    template: `
      <Listbox v-model="selected" disabled class="w-[200px]">
        <ListboxContent>
          <ListboxItem value="apple">Apple</ListboxItem>
          <ListboxItem value="banana">Banana</ListboxItem>
          <ListboxItem value="orange">Orange</ListboxItem>
        </ListboxContent>
      </Listbox>
    `,
  }),
}
