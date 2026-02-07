<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Drawer</h1>
      <p>A mobile-friendly bottom sheet with drag handle for touch interactions.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Drawer>
        <DrawerTrigger>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div class="p-4">
            <div class="flex items-center justify-center gap-4 py-4">
              <Button variant="outline" size="icon" @click="goal = Math.max(200, goal - 10)">
                <Icon name="hugeicons:minus-sign" class="size-4" />
              </Button>
              <div class="text-center">
                <div class="text-7xl font-bold tracking-tighter">{{ goal }}</div>
                <div class="text-muted-foreground text-sm">Calories/day</div>
              </div>
              <Button variant="outline" size="icon" @click="goal += 10">
                <Icon name="hugeicons:add-01" class="size-4" />
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ComponentPreview>

    <ComponentPreview title="Without Handle" :code="noHandleCode">
      <Drawer>
        <DrawerTrigger>
          <Button variant="outline">Open Drawer (No Handle)</Button>
        </DrawerTrigger>
        <DrawerContent :show-handle="false" show-close>
          <DrawerHeader>
            <DrawerTitle>Confirm Action</DrawerTitle>
            <DrawerDescription>
              Are you sure you want to proceed with this action?
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button variant="destructive">Confirm</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </ComponentPreview>

    <ComponentPreview title="With Form" :code="formCode">
      <Drawer>
        <DrawerTrigger>
          <Button variant="outline">Open Form Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Add New Item</DrawerTitle>
            <DrawerDescription>
              Fill in the details to add a new item.
            </DrawerDescription>
          </DrawerHeader>
          <div class="p-4 space-y-4">
            <div class="space-y-2">
              <Label for="title">Title</Label>
              <Input id="title" placeholder="Enter title" />
            </div>
            <div class="space-y-2">
              <Label for="description">Description</Label>
              <Textarea id="description" placeholder="Enter description" />
            </div>
          </div>
          <DrawerFooter>
            <Button>Save</Button>
            <DrawerClose>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
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
          <td><code>Drawer</code></td>
          <td>Root component</td>
        </tr>
        <tr>
          <td><code>DrawerTrigger</code></td>
          <td>Button that opens the drawer</td>
        </tr>
        <tr>
          <td><code>DrawerContent</code></td>
          <td>Sliding bottom panel</td>
        </tr>
        <tr>
          <td><code>DrawerHeader</code></td>
          <td>Container for title and description</td>
        </tr>
        <tr>
          <td><code>DrawerTitle</code></td>
          <td>Accessible title</td>
        </tr>
        <tr>
          <td><code>DrawerDescription</code></td>
          <td>Accessible description</td>
        </tr>
        <tr>
          <td><code>DrawerFooter</code></td>
          <td>Container for action buttons</td>
        </tr>
        <tr>
          <td><code>DrawerClose</code></td>
          <td>Optional close trigger</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>DrawerContent</h3>

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
          <td><code>showHandle</code></td>
          <td><code>boolean</code></td>
          <td><code>true</code></td>
          <td>Show drag handle indicator</td>
        </tr>
        <tr>
          <td><code>showClose</code></td>
          <td><code>boolean</code></td>
          <td><code>false</code></td>
          <td>Show close button in corner</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@nova-vue/ui/button'
import { Input } from '@nova-vue/ui/input'
import { Label } from '@nova-vue/ui/label'
import { Textarea } from '@nova-vue/ui/textarea'
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@nova-vue/ui/drawer'

definePageMeta({
  layout: 'default'
})

const goal = ref(350)

const defaultCode = `<Drawer>
  <DrawerTrigger>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Move Goal</DrawerTitle>
      <DrawerDescription>Set your daily activity goal.</DrawerDescription>
    </DrawerHeader>
    <div class="p-4">
      <!-- content -->
    </div>
    <DrawerFooter>
      <Button>Submit</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`

const noHandleCode = `<Drawer>
  <DrawerTrigger>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent :show-handle="false" show-close>
    <DrawerHeader>
      <DrawerTitle>Confirm</DrawerTitle>
      <DrawerDescription>Are you sure?</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button variant="destructive">Confirm</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`

const formCode = `<Drawer>
  <DrawerTrigger>
    <Button variant="outline">Open Form Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Add New Item</DrawerTitle>
      <DrawerDescription>Fill in the details.</DrawerDescription>
    </DrawerHeader>
    <div class="p-4 space-y-4">
      <div class="space-y-2">
        <Label for="title">Title</Label>
        <Input id="title" placeholder="Enter title" />
      </div>
    </div>
    <DrawerFooter>
      <Button>Save</Button>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`

const usageCode = '<' + `script setup lang="ts">
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@nova-vue/ui/drawer'
<` + `/script>

<` + `template>
  <Drawer>
    <DrawerTrigger>
      <Button>Open</Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Title</DrawerTitle>
        <DrawerDescription>Description</DrawerDescription>
      </DrawerHeader>
      <!-- content -->
      <DrawerFooter>
        <Button>Save</Button>
        <DrawerClose>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</` + `template>`
</script>
