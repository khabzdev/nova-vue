<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@lattice/ui/button'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@lattice/ui/dialog'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '@lattice/ui/select'

const dialogOpen = ref(false)
const selectedFruit = ref('')
const selectedFramework = ref('')
const isDark = ref(false)

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
  <div class="min-h-screen bg-background p-8 transition-colors">
    <div class="mx-auto max-w-4xl space-y-12">
      <!-- Header -->
      <header class="flex items-start justify-between">
        <div class="space-y-2">
          <h1 class="text-4xl font-bold tracking-tight">Lattice UI</h1>
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

      <!-- Footer -->
      <footer class="border-t pt-8 text-center text-sm text-muted-foreground">
        <p>Built with Reka UI, Motion Vue, and Tailwind CSS v4</p>
      </footer>
    </div>
  </div>
</template>
