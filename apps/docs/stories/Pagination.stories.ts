import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationFirst,
  PaginationLast,
  PaginationEllipsis,
} from '@lettuce/ui/pagination'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationPrevious,
      PaginationNext,
      PaginationEllipsis,
    },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `
      <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="1" show-edges>
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem v-if="item.type === 'page'" :value="item.value" />
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />
        </PaginationContent>
      </Pagination>
    `,
  }),
}

export const WithFirstAndLast: Story = {
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationPrevious,
      PaginationNext,
      PaginationFirst,
      PaginationLast,
      PaginationEllipsis,
    },
    setup() {
      const page = ref(5)
      return { page }
    },
    template: `
      <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="1" show-edges>
        <PaginationContent v-slot="{ items }">
          <PaginationFirst />
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem v-if="item.type === 'page'" :value="item.value" />
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />
          <PaginationLast />
        </PaginationContent>
      </Pagination>
    `,
  }),
}

export const WithMoreSiblings: Story = {
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationPrevious,
      PaginationNext,
      PaginationEllipsis,
    },
    setup() {
      const page = ref(5)
      return { page }
    },
    template: `
      <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="2" show-edges>
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem v-if="item.type === 'page'" :value="item.value" />
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />
        </PaginationContent>
      </Pagination>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: {
      Pagination,
      PaginationContent,
      PaginationItem,
      PaginationPrevious,
      PaginationNext,
      PaginationEllipsis,
    },
    setup() {
      const page = ref(1)
      return { page }
    },
    template: `
      <Pagination v-model:page="page" :total="100" :items-per-page="10" :sibling-count="1" show-edges disabled>
        <PaginationContent v-slot="{ items }">
          <PaginationPrevious />
          <template v-for="(item, index) in items" :key="index">
            <PaginationItem v-if="item.type === 'page'" :value="item.value" />
            <PaginationEllipsis v-else />
          </template>
          <PaginationNext />
        </PaginationContent>
      </Pagination>
    `,
  }),
}
