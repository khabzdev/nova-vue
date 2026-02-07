<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Sheet</h1>
      <p>A panel that slides in from the edge of the screen, overlaying the main content.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Right (Default)" :code="rightCode">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline">Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit Profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <div class="grid gap-4 py-4">
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="name" class="text-right">Name</Label>
              <Input id="name" value="John Doe" class="col-span-3" />
            </div>
            <div class="grid grid-cols-4 items-center gap-4">
              <Label for="username" class="text-right">Username</Label>
              <Input id="username" value="@johndoe" class="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </ComponentPreview>

    <ComponentPreview title="Left" :code="leftCode">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline">Open Left Sheet</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Navigation</SheetTitle>
            <SheetDescription>
              Browse through the menu items.
            </SheetDescription>
          </SheetHeader>
          <div class="py-4 space-y-2">
            <Button variant="ghost" class="w-full justify-start">
              <Icon name="hugeicons:home-03" class="size-4 mr-2" />
              Home
            </Button>
            <Button variant="ghost" class="w-full justify-start">
              <Icon name="hugeicons:settings-02" class="size-4 mr-2" />
              Settings
            </Button>
            <Button variant="ghost" class="w-full justify-start">
              <Icon name="hugeicons:user-circle" class="size-4 mr-2" />
              Profile
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </ComponentPreview>

    <ComponentPreview title="Top" :code="topCode">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline">Open Top Sheet</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Notifications</SheetTitle>
            <SheetDescription>
              You have 3 unread messages.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </ComponentPreview>

    <ComponentPreview title="Bottom" :code="bottomCode">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline">Open Bottom Sheet</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Share</SheetTitle>
            <SheetDescription>
              Share this content with others.
            </SheetDescription>
          </SheetHeader>
          <div class="flex gap-4 py-4">
            <Button variant="outline" size="icon">
              <Icon name="hugeicons:mail-01" class="size-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Icon name="hugeicons:link-01" class="size-4" />
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </ComponentPreview>

    <h2>Usage</h2>

    <CodeBlock :code="usageCode" lang="vue" />

    <h2>Components</h2>

    <table class="props-table">
      <thead>
        <tr>
          <th>Component</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>Sheet</code></td>
          <td>Root component</td>
        </tr>
        <tr>
          <td><code>SheetTrigger</code></td>
          <td>Button that opens the sheet</td>
        </tr>
        <tr>
          <td><code>SheetContent</code></td>
          <td>Sliding panel content container</td>
        </tr>
        <tr>
          <td><code>SheetHeader</code></td>
          <td>Container for title and description</td>
        </tr>
        <tr>
          <td><code>SheetTitle</code></td>
          <td>Accessible title</td>
        </tr>
        <tr>
          <td><code>SheetDescription</code></td>
          <td>Accessible description</td>
        </tr>
        <tr>
          <td><code>SheetFooter</code></td>
          <td>Container for action buttons</td>
        </tr>
        <tr>
          <td><code>SheetClose</code></td>
          <td>Optional close trigger</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>SheetContent</h3>

    <table class="props-table">
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>side</code></td>
          <td><code>'right' | 'left' | 'top' | 'bottom'</code></td>
          <td><code>'right'</code></td>
          <td>Side from which the sheet slides in</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
import { Input } from '@nova-vue/ui/input'
import { Label } from '@nova-vue/ui/label'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@nova-vue/ui/sheet'

definePageMeta({
  layout: 'default'
})

const rightCode = `<Sheet>
  <SheetTrigger>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile here.
      </SheetDescription>
    </SheetHeader>
    <div class="grid gap-4 py-4">
      <!-- form fields -->
    </div>
    <SheetFooter>
      <SheetClose>
        <Button type="submit">Save changes</Button>
      </SheetClose>
    </SheetFooter>
  </SheetContent>
</Sheet>`

const leftCode = `<Sheet>
  <SheetTrigger>
    <Button variant="outline">Open Left Sheet</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Navigation</SheetTitle>
      <SheetDescription>Browse through the menu.</SheetDescription>
    </SheetHeader>
    <!-- navigation items -->
  </SheetContent>
</Sheet>`

const topCode = `<Sheet>
  <SheetTrigger>
    <Button variant="outline">Open Top Sheet</Button>
  </SheetTrigger>
  <SheetContent side="top">
    <SheetHeader>
      <SheetTitle>Notifications</SheetTitle>
      <SheetDescription>You have 3 unread messages.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`

const bottomCode = `<Sheet>
  <SheetTrigger>
    <Button variant="outline">Open Bottom Sheet</Button>
  </SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Share</SheetTitle>
      <SheetDescription>Share this content.</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>`

const usageCode = '<' + `script setup lang="ts">
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@nova-vue/ui/sheet'
<` + `/script>

<` + `template>
  <Sheet>
    <SheetTrigger>
      <Button>Open</Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Title</SheetTitle>
        <SheetDescription>Description</SheetDescription>
      </SheetHeader>
      <!-- content -->
      <SheetFooter>
        <SheetClose>
          <Button>Close</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>
</` + `template>`
</script>
