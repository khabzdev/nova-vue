<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@lettuce/ui/accordion'
import { Avatar, AvatarImage, AvatarFallback } from '@lettuce/ui/avatar'
import { Button } from '@lettuce/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@lettuce/ui/card'
import { Checkbox } from '@lettuce/ui/checkbox'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@lettuce/ui/dialog'
import { Input } from '@lettuce/ui/input'
import { InputGroup, InputGroupInput, InputGroupAddon } from '@lettuce/ui/input-group'
import { Label } from '@lettuce/ui/label'
import { Textarea } from '@lettuce/ui/textarea'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '@lettuce/ui/select'
import { Separator } from '@lettuce/ui/separator'
import { Slider } from '@lettuce/ui/slider'
import { Switch } from '@lettuce/ui/switch'
import { Toaster, useToast } from '@lettuce/ui/toast'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@lettuce/ui/tooltip'

const { toast } = useToast()

const dialogOpen = ref(false)
const selectedFruit = ref('')
const selectedFramework = ref('')
const isDark = ref(false)
const inputValue = ref('')
const emailValue = ref('')
const searchValue = ref('')
const termsChecked = ref<boolean | 'indeterminate'>(false)
const marketingChecked = ref<boolean | 'indeterminate'>(false)
const indeterminateChecked = ref<boolean | 'indeterminate'>('indeterminate')
const textareaValue = ref('')
const bioValue = ref('')
const switchChecked = ref(false)
const switchDisabled = ref(true)
const sliderValue = ref([50])
const rangeSliderValue = ref([25, 75])

function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<template>
  <TooltipProvider>
    <div class="min-h-screen bg-background p-8 transition-colors">
    <div class="mx-auto max-w-4xl space-y-12">
      <!-- Header -->
      <header class="flex items-start justify-between">
        <div class="space-y-2">
          <h1 class="text-4xl font-bold tracking-tight">Lettuce UI</h1>
          <p class="text-muted-foreground">
            A Vue 3 component library built with Reka UI and Motion Vue
          </p>
        </div>
        <Button variant="outline" size="icon" @click="toggleDarkMode">
          <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="4"/>
            <path d="M12 2v2"/>
            <path d="M12 20v2"/>
            <path d="m4.93 4.93 1.41 1.41"/>
            <path d="m17.66 17.66 1.41 1.41"/>
            <path d="M2 12h2"/>
            <path d="M20 12h2"/>
            <path d="m6.34 17.66-1.41 1.41"/>
            <path d="m19.07 4.93-1.41 1.41"/>
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
          </svg>
        </Button>
      </header>

      <!-- Button Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Button</h2>
        <p class="text-sm text-muted-foreground">
          Buttons with multiple variants and sizes, with smooth hover and press animations.
        </p>

        <div class="space-y-6">
          <!-- Variants -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Variants</h3>
            <div class="flex flex-wrap items-center gap-3">
              <Button>Default</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="destructive-outline">Destructive Outline</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <!-- Sizes -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Sizes</h3>
            <div class="flex flex-wrap items-center gap-3">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>

          <!-- Icon Buttons -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Icon Buttons</h3>
            <div class="flex flex-wrap items-center gap-3">
              <Button size="icon-xs" variant="outline" aria-label="Arrow right">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
              <Button size="icon-sm" variant="outline" aria-label="Arrow right">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
              <Button size="icon" variant="outline" aria-label="Arrow right">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
              <Button size="icon-lg" variant="outline" aria-label="Arrow right">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
              <Button size="icon-xl" variant="outline" aria-label="Arrow right">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </Button>
            </div>
          </div>

          <!-- Disabled States -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Disabled States</h3>
            <div class="flex flex-wrap items-center gap-3">
              <Button disabled>Disabled</Button>
              <Button variant="secondary" disabled>Disabled Secondary</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
              <Button variant="destructive" disabled>Disabled Destructive</Button>
            </div>
          </div>
        </div>
      </section>

      <!-- Input Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Input</h2>
        <p class="text-sm text-muted-foreground">
          Text inputs with COSS styling, supporting multiple sizes and states.
        </p>

        <div class="space-y-6">
          <!-- Default -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Default</h3>
            <div class="flex flex-col gap-3 max-w-sm">
              <Input v-model="inputValue" placeholder="Enter your name..." />
              <Input v-model="emailValue" type="email" placeholder="Email address" />
              <Input v-model="searchValue" type="search" placeholder="Search..." />
            </div>
          </div>

          <!-- Sizes -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Sizes</h3>
            <div class="flex flex-col gap-3 max-w-sm">
              <Input size="xs" placeholder="Extra small input" />
              <Input size="sm" placeholder="Small input" />
              <Input size="default" placeholder="Default input" />
              <Input size="lg" placeholder="Large input" />
              <Input size="xl" placeholder="Extra large input" />
            </div>
          </div>

          <!-- States -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">States</h3>
            <div class="flex flex-col gap-3 max-w-sm">
              <Input placeholder="Normal input" />
              <Input placeholder="Disabled input" disabled />
              <Input placeholder="Read-only input" readonly value="Read-only value" />
              <Input placeholder="Invalid input" aria-invalid="true" />
            </div>
          </div>

          <!-- With Labels -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Form Example</h3>
            <div class="flex flex-col gap-4 max-w-sm">
              <div class="space-y-2">
                <Label for="username">Username</Label>
                <Input id="username" placeholder="johndoe" />
              </div>
              <div class="space-y-2">
                <Label for="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" />
              </div>
              <div class="space-y-2">
                <Label for="disabled-input">Disabled Field</Label>
                <Input id="disabled-input" placeholder="Disabled" disabled class="peer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- InputGroup Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">InputGroup</h2>
        <p class="text-sm text-muted-foreground">
          Combine inputs with addons like icons, text, or buttons.
        </p>

        <div class="space-y-6">
          <!-- With Text Addons -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Text Addons</h3>
            <div class="flex flex-col gap-4 max-w-sm">
              <div class="space-y-2">
                <Label>Website</Label>
                <InputGroup>
                  <InputGroupAddon>https://</InputGroupAddon>
                  <InputGroupInput placeholder="example.com" />
                </InputGroup>
              </div>

              <div class="space-y-2">
                <Label>Price</Label>
                <InputGroup>
                  <InputGroupAddon>$</InputGroupAddon>
                  <InputGroupInput type="number" placeholder="0.00" />
                  <InputGroupAddon>USD</InputGroupAddon>
                </InputGroup>
              </div>
            </div>
          </div>

          <!-- With Icons -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">With Icons</h3>
            <div class="flex flex-col gap-4 max-w-sm">
              <div class="space-y-2">
                <Label>Email</Label>
                <InputGroup>
                  <InputGroupAddon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </InputGroupAddon>
                  <InputGroupInput type="email" placeholder="you@example.com" />
                </InputGroup>
              </div>

              <div class="space-y-2">
                <Label>Search</Label>
                <InputGroup>
                  <InputGroupAddon>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </InputGroupAddon>
                  <InputGroupInput type="search" placeholder="Search..." />
                </InputGroup>
              </div>
            </div>
          </div>

          <!-- Sizes -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Sizes</h3>
            <div class="flex flex-col gap-4 max-w-sm">
              <InputGroup>
                <InputGroupAddon size="sm">@</InputGroupAddon>
                <InputGroupInput size="sm" placeholder="Small" />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon>@</InputGroupAddon>
                <InputGroupInput placeholder="Default" />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon size="lg">@</InputGroupAddon>
                <InputGroupInput size="lg" placeholder="Large" />
              </InputGroup>
            </div>
          </div>

          <!-- Disabled -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Disabled</h3>
            <div class="max-w-sm">
              <InputGroup disabled>
                <InputGroupAddon>$</InputGroupAddon>
                <InputGroupInput placeholder="Disabled" disabled />
                <InputGroupAddon>USD</InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>
      </section>

      <!-- Textarea Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Textarea</h2>
        <p class="text-sm text-muted-foreground">
          Multi-line text input with COSS styling.
        </p>

        <div class="space-y-6">
          <!-- Default -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Default</h3>
            <div class="flex flex-col gap-3 max-w-md">
              <Textarea v-model="textareaValue" placeholder="Write your message here..." />
            </div>
          </div>

          <!-- Sizes -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Sizes</h3>
            <div class="flex flex-col gap-3 max-w-md">
              <Textarea size="sm" placeholder="Small textarea" :rows="2" />
              <Textarea size="default" placeholder="Default textarea" />
              <Textarea size="lg" placeholder="Large textarea" />
            </div>
          </div>

          <!-- States -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">States</h3>
            <div class="flex flex-col gap-3 max-w-md">
              <Textarea placeholder="Normal textarea" />
              <Textarea placeholder="Disabled textarea" disabled />
              <Textarea placeholder="Read-only textarea" readonly value="This is read-only content." />
              <Textarea placeholder="Invalid textarea" aria-invalid="true" />
            </div>
          </div>

          <!-- With Label -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">With Label</h3>
            <div class="max-w-md space-y-2">
              <Label>Bio</Label>
              <Textarea v-model="bioValue" placeholder="Tell us about yourself..." :rows="4" />
              <p class="text-xs text-muted-foreground">{{ 500 - bioValue.length }} characters remaining</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Accordion Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Accordion</h2>
        <p class="text-sm text-muted-foreground">
          Collapsible content panels for organizing information.
        </p>

        <div class="space-y-6">
          <!-- Single -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Single (default)</h3>
            <Accordion type="single" collapsible class="w-full max-w-md">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern and supports keyboard navigation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that match the Lettuce UI design system.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. The accordion smoothly animates when expanding and collapsing using CSS transitions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <!-- Multiple -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Multiple</h3>
            <Accordion type="multiple" class="w-full max-w-md">
              <AccordionItem value="faq-1">
                <AccordionTrigger>What is Lettuce UI?</AccordionTrigger>
                <AccordionContent>
                  Lettuce UI is a Vue 3 component library built with Reka UI primitives and Motion Vue animations, following COSS UI styling conventions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>Can I customize the components?</AccordionTrigger>
                <AccordionContent>
                  Yes. All components accept a class prop for custom styling, and the design tokens can be overridden via CSS custom properties.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
                <AccordionContent>
                  Yes. Dark mode is class-based using the .dark class on the parent element, with automatic styling adjustments.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <!-- Dialog Section -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Dialog</h2>
        <p class="text-sm text-muted-foreground">
          Modal dialogs with smooth spring animations and backdrop blur.
        </p>

        <div class="flex flex-wrap gap-4">
          <Dialog v-model:open="dialogOpen">
            <DialogTrigger>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete your
                  account and remove your data from our servers.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <DialogClose>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button variant="destructive" @click="dialogOpen = false">
                  Delete Account
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger>
              <Button>Edit Profile</Button>
            </DialogTrigger>
            <DialogContent class="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div class="grid gap-4 py-4">
                <div class="grid grid-cols-4 items-center gap-4">
                  <label class="text-right text-sm font-medium">Name</label>
                  <input
                    class="col-span-3 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="grid grid-cols-4 items-center gap-4">
                  <label class="text-right text-sm font-medium">Email</label>
                  <input
                    class="col-span-3 h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
              <DialogClose />
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <!-- Select Section -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Select</h2>
        <p class="text-sm text-muted-foreground">
          Accessible select dropdowns with smooth popover animations.
        </p>

        <div class="flex flex-wrap items-start gap-8">
          <div class="space-y-2">
            <label class="text-sm font-medium">Simple Select</label>
            <Select v-model="selectedFruit">
              <SelectTrigger class="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectContent>
            </Select>
            <p class="text-xs text-muted-foreground">
              Selected: {{ selectedFruit || 'None' }}
            </p>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium">Grouped Select</label>
            <Select v-model="selectedFramework">
              <SelectTrigger class="w-[200px]">
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Frontend</SelectLabel>
                  <SelectItem value="vue">Vue</SelectItem>
                  <SelectItem value="react">React</SelectItem>
                  <SelectItem value="svelte">Svelte</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Backend</SelectLabel>
                  <SelectItem value="express">Express</SelectItem>
                  <SelectItem value="fastify">Fastify</SelectItem>
                  <SelectItem value="hono">Hono</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <p class="text-xs text-muted-foreground">
              Selected: {{ selectedFramework || 'None' }}
            </p>
          </div>

          <div class="space-y-2">
            <label class="text-sm font-medium">With Disabled Items</label>
            <Select>
              <SelectTrigger class="w-[180px]">
                <SelectValue placeholder="Select plan" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="pro">Pro</SelectItem>
                <SelectItem value="enterprise" disabled>
                  Enterprise (Coming Soon)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <!-- Card Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Card</h2>
        <p class="text-sm text-muted-foreground">
          Container component for grouping related content.
        </p>

        <div class="grid gap-6 md:grid-cols-2">
          <!-- Default Card -->
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description with additional context.</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">
                This is the main content area of the card. You can put any content here.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>

          <!-- Outline Card -->
          <Card variant="outline">
            <CardHeader>
              <CardTitle>Outline Variant</CardTitle>
              <CardDescription>A card with outline styling.</CardDescription>
            </CardHeader>
            <CardContent>
              <p class="text-sm text-muted-foreground">
                Use the outline variant for less prominent cards.
              </p>
            </CardContent>
            <CardFooter class="gap-2">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Save</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      <!-- Checkbox Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Checkbox</h2>
        <p class="text-sm text-muted-foreground">
          Checkboxes for binary choices with optional indeterminate state.
        </p>

        <div class="space-y-6">
          <!-- Basic -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Basic</h3>
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <Checkbox id="terms" v-model:checked="termsChecked" />
                <Label for="terms">Accept terms and conditions</Label>
              </div>
              <div class="flex items-center gap-2">
                <Checkbox id="marketing" v-model:checked="marketingChecked" />
                <Label for="marketing">Receive marketing emails</Label>
              </div>
            </div>
          </div>

          <!-- States -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">States</h3>
            <div class="flex flex-col gap-4">
              <div class="flex items-center gap-2">
                <Checkbox id="indeterminate" v-model:checked="indeterminateChecked" />
                <Label for="indeterminate">Indeterminate state</Label>
              </div>
              <div class="flex items-center gap-2">
                <Checkbox id="disabled" disabled />
                <Label for="disabled" class="opacity-64">Disabled checkbox</Label>
              </div>
              <div class="flex items-center gap-2">
                <Checkbox id="disabled-checked" disabled :checked="true" />
                <Label for="disabled-checked" class="opacity-64">Disabled checked</Label>
              </div>
            </div>
          </div>

          <!-- Destructive -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Destructive Variant</h3>
            <div class="flex items-center gap-2">
              <Checkbox id="delete" variant="destructive" :checked="true" />
              <Label for="delete">I understand this action is irreversible</Label>
            </div>
          </div>
        </div>
      </section>

      <!-- Avatar Section -->
      <section class="space-y-6">
        <h2 class="text-2xl font-semibold">Avatar</h2>
        <p class="text-sm text-muted-foreground">
          User avatars with image and fallback support.
        </p>

        <div class="space-y-6">
          <!-- Sizes -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Sizes</h3>
            <div class="flex items-end gap-4">
              <Avatar size="xs">
                <AvatarImage src="https://github.com/vuejs.png" alt="Vue.js" />
                <AvatarFallback>VU</AvatarFallback>
              </Avatar>
              <Avatar size="sm">
                <AvatarImage src="https://github.com/vuejs.png" alt="Vue.js" />
                <AvatarFallback>VU</AvatarFallback>
              </Avatar>
              <Avatar size="default">
                <AvatarImage src="https://github.com/vuejs.png" alt="Vue.js" />
                <AvatarFallback>VU</AvatarFallback>
              </Avatar>
              <Avatar size="lg">
                <AvatarImage src="https://github.com/vuejs.png" alt="Vue.js" />
                <AvatarFallback>VU</AvatarFallback>
              </Avatar>
              <Avatar size="xl">
                <AvatarImage src="https://github.com/vuejs.png" alt="Vue.js" />
                <AvatarFallback>VU</AvatarFallback>
              </Avatar>
              <Avatar size="2xl">
                <AvatarImage src="https://github.com/vuejs.png" alt="Vue.js" />
                <AvatarFallback>VU</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <!-- Fallback -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">With Fallback</h3>
            <div class="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://invalid-url.com/broken.png" alt="Broken" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>AB</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>

          <!-- Avatar Group -->
          <div>
            <h3 class="text-sm font-medium text-muted-foreground mb-3">Avatar Group</h3>
            <div class="flex -space-x-3">
              <Avatar class="border-2 border-background">
                <AvatarImage src="https://github.com/vuejs.png" alt="Vue" />
                <AvatarFallback>VU</AvatarFallback>
              </Avatar>
              <Avatar class="border-2 border-background">
                <AvatarImage src="https://github.com/vitejs.png" alt="Vite" />
                <AvatarFallback>VI</AvatarFallback>
              </Avatar>
              <Avatar class="border-2 border-background">
                <AvatarFallback>+3</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </section>

      <!-- Separator -->
      <section id="separator">
        <h2 class="text-2xl font-bold mb-4">Separator</h2>
        <p class="text-muted-foreground mb-6">A visual divider between content sections.</p>

        <div class="grid gap-6">
          <div class="space-y-3">
            <h3 class="text-lg font-semibold">Horizontal</h3>
            <div class="space-y-3">
              <p>Content above separator</p>
              <Separator />
              <p>Content below separator</p>
            </div>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold">Vertical</h3>
            <div class="flex items-center h-5 gap-4">
              <span>Home</span>
              <Separator orientation="vertical" />
              <span>Products</span>
              <Separator orientation="vertical" />
              <span>About</span>
              <Separator orientation="vertical" />
              <span>Contact</span>
            </div>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold">With Text</h3>
            <div class="flex items-center gap-4">
              <Separator class="flex-1" />
              <span class="text-muted-foreground text-sm">OR</span>
              <Separator class="flex-1" />
            </div>
          </div>
        </div>
      </section>

      <!-- Tooltip -->
      <section id="tooltip">
        <h2 class="text-2xl font-bold mb-4">Tooltip</h2>
        <p class="text-muted-foreground mb-6">A popup that displays information on hover or focus.</p>

        <div class="flex flex-wrap gap-4">
          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Hover me</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a tooltip</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Top tooltip</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Appears on top</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Right tooltip</Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>Appears on right</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger as-child>
              <Button variant="outline">Left tooltip</Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Appears on left</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip :delay-duration="0">
            <TooltipTrigger as-child>
              <Button variant="secondary">No delay</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Instant tooltip!</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </section>

      <!-- Toast -->
      <section id="toast">
        <h2 class="text-2xl font-bold mb-4">Toast</h2>
        <p class="text-muted-foreground mb-6">Notifications that appear temporarily to inform users.</p>

        <div class="flex flex-wrap gap-4">
          <Button
            @click="toast({ title: 'Default Toast', description: 'This is a default notification.' })"
          >
            Default Toast
          </Button>

          <Button
            variant="outline"
            @click="toast({ title: 'Success!', description: 'Your changes have been saved.', variant: 'success' })"
          >
            Success Toast
          </Button>

          <Button
            variant="destructive"
            @click="toast({ title: 'Error', description: 'Something went wrong.', variant: 'destructive' })"
          >
            Destructive Toast
          </Button>

          <Button
            variant="secondary"
            @click="toast({ title: 'Warning', description: 'Please review your input.', variant: 'warning' })"
          >
            Warning Toast
          </Button>

          <Button
            variant="outline"
            @click="toast({ title: 'Info', description: 'Here is some information.', variant: 'info' })"
          >
            Info Toast
          </Button>

          <Button
            variant="ghost"
            @click="toast({
              title: 'With Action',
              description: 'Click the action button.',
              action: { label: 'Undo', onClick: () => console.log('Undo clicked') }
            })"
          >
            Toast with Action
          </Button>
        </div>
      </section>

      <!-- Switch -->
      <section id="switch">
        <h2 class="text-2xl font-bold mb-4">Switch</h2>
        <p class="text-muted-foreground mb-6">A toggle control for on/off states.</p>

        <div class="space-y-6">
          <div class="space-y-3">
            <h3 class="text-lg font-semibold">Variants</h3>
            <div class="flex flex-wrap items-center gap-6">
              <div class="flex items-center gap-2">
                <Switch v-model:checked="switchChecked" />
                <Label>Default</Label>
              </div>
              <div class="flex items-center gap-2">
                <Switch variant="destructive" checked />
                <Label>Destructive</Label>
              </div>
              <div class="flex items-center gap-2">
                <Switch variant="success" checked />
                <Label>Success</Label>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold">Sizes</h3>
            <div class="flex flex-wrap items-center gap-6">
              <div class="flex items-center gap-2">
                <Switch size="sm" checked />
                <Label>Small</Label>
              </div>
              <div class="flex items-center gap-2">
                <Switch size="default" checked />
                <Label>Default</Label>
              </div>
              <div class="flex items-center gap-2">
                <Switch size="lg" checked />
                <Label>Large</Label>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold">States</h3>
            <div class="flex flex-wrap items-center gap-6">
              <div class="flex items-center gap-2">
                <Switch v-model:checked="switchDisabled" disabled />
                <Label class="opacity-50">Disabled</Label>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Slider -->
      <section id="slider">
        <h2 class="text-2xl font-bold mb-4">Slider</h2>
        <p class="text-muted-foreground mb-6">An input for selecting values from a range.</p>

        <div class="space-y-6">
          <div class="space-y-3">
            <h3 class="text-lg font-semibold">Default</h3>
            <div class="max-w-md space-y-2">
              <Slider v-model="sliderValue" />
              <p class="text-sm text-muted-foreground">Value: {{ sliderValue[0] }}</p>
            </div>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold">Range Slider</h3>
            <div class="max-w-md space-y-2">
              <Slider v-model="rangeSliderValue" :min-steps-between-thumbs="5" />
              <p class="text-sm text-muted-foreground">Range: {{ rangeSliderValue[0] }} - {{ rangeSliderValue[1] }}</p>
            </div>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold">Variants</h3>
            <div class="max-w-md space-y-4">
              <div class="space-y-2">
                <Label>Default</Label>
                <Slider :default-value="[60]" />
              </div>
              <div class="space-y-2">
                <Label>Destructive</Label>
                <Slider variant="destructive" :default-value="[40]" />
              </div>
              <div class="space-y-2">
                <Label>Success</Label>
                <Slider variant="success" :default-value="[80]" />
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold">Sizes</h3>
            <div class="max-w-md space-y-4">
              <div class="space-y-2">
                <Label>Small thumb</Label>
                <Slider size="sm" :default-value="[30]" />
              </div>
              <div class="space-y-2">
                <Label>Default thumb</Label>
                <Slider size="default" :default-value="[50]" />
              </div>
              <div class="space-y-2">
                <Label>Large thumb</Label>
                <Slider size="lg" :default-value="[70]" />
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <h3 class="text-lg font-semibold">With Steps</h3>
            <div class="max-w-md space-y-2">
              <Slider :default-value="[50]" :step="10" />
              <p class="text-sm text-muted-foreground">Step: 10</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="border-t pt-8 text-center text-sm text-muted-foreground">
        <p>Built with Reka UI, Motion Vue, and Tailwind CSS v4</p>
      </footer>
    </div>
  </div>
  <Toaster />
  </TooltipProvider>
</template>
