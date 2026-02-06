import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem } from '@nova-vue/ui/radio-group'
import { Label } from '@nova-vue/ui/label'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const value = ref('option-one')
      return { value }
    },
    template: `
      <RadioGroup v-model="value">
        <div class="flex items-center gap-2">
          <RadioGroupItem id="option-one" value="option-one" />
          <Label for="option-one">Option One</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="option-two" value="option-two" />
          <Label for="option-two">Option Two</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="option-three" value="option-three" />
          <Label for="option-three">Option Three</Label>
        </div>
      </RadioGroup>
    `,
  }),
}

export const Sizes: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const sm = ref('sm-1')
      const md = ref('md-1')
      const lg = ref('lg-1')
      return { sm, md, lg }
    },
    template: `
      <div class="flex flex-col gap-6">
        <div>
          <p class="text-sm font-medium mb-2">Small</p>
          <RadioGroup v-model="sm">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="sm-1" value="sm-1" size="sm" />
              <Label for="sm-1" class="text-sm">Option One</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="sm-2" value="sm-2" size="sm" />
              <Label for="sm-2" class="text-sm">Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">Default</p>
          <RadioGroup v-model="md">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="md-1" value="md-1" />
              <Label for="md-1">Option One</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="md-2" value="md-2" />
              <Label for="md-2">Option Two</Label>
            </div>
          </RadioGroup>
        </div>

        <div>
          <p class="text-sm font-medium mb-2">Large</p>
          <RadioGroup v-model="lg">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="lg-1" value="lg-1" size="lg" />
              <Label for="lg-1">Option One</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="lg-2" value="lg-2" size="lg" />
              <Label for="lg-2">Option Two</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    `,
  }),
}

export const Horizontal: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const value = ref('comfortable')
      return { value }
    },
    template: `
      <RadioGroup v-model="value" orientation="horizontal" class="flex flex-row gap-4">
        <div class="flex items-center gap-2">
          <RadioGroupItem id="default" value="default" />
          <Label for="default">Default</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="comfortable" value="comfortable" />
          <Label for="comfortable">Comfortable</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="compact" value="compact" />
          <Label for="compact">Compact</Label>
        </div>
      </RadioGroup>
    `,
  }),
}

export const Disabled: Story = {
  render: () => ({
    components: { RadioGroup, RadioGroupItem, Label },
    setup() {
      const value = ref('option-one')
      return { value }
    },
    template: `
      <RadioGroup v-model="value" disabled>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="disabled-1" value="option-one" />
          <Label for="disabled-1" class="opacity-64">Option One</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="disabled-2" value="option-two" />
          <Label for="disabled-2" class="opacity-64">Option Two</Label>
        </div>
      </RadioGroup>
    `,
  }),
}
