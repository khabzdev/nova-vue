<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Dialog</h1>
      <p>Modal overlay for important content requiring user attention.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Dialog>
        <DialogTrigger as-child>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose as-child>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive">Delete</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ComponentPreview>

    <ComponentPreview title="With Form" :code="formCode">
      <Dialog>
        <DialogTrigger as-child>
          <Button variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent class="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here.
            </DialogDescription>
          </DialogHeader>
          <div class="space-y-4 py-4">
            <div class="space-y-2">
              <Label for="name">Name</Label>
              <Input id="name" placeholder="John Doe" />
            </div>
            <div class="space-y-2">
              <Label for="username">Username</Label>
              <Input id="username" placeholder="@johndoe" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
          <td><code>Dialog</code></td>
          <td>Root component that manages open state</td>
        </tr>
        <tr>
          <td><code>DialogTrigger</code></td>
          <td>Button that opens the dialog</td>
        </tr>
        <tr>
          <td><code>DialogContent</code></td>
          <td>Modal content container</td>
        </tr>
        <tr>
          <td><code>DialogHeader</code></td>
          <td>Header section</td>
        </tr>
        <tr>
          <td><code>DialogTitle</code></td>
          <td>Dialog title</td>
        </tr>
        <tr>
          <td><code>DialogDescription</code></td>
          <td>Dialog description text</td>
        </tr>
        <tr>
          <td><code>DialogFooter</code></td>
          <td>Footer section for actions</td>
        </tr>
        <tr>
          <td><code>DialogClose</code></td>
          <td>Button that closes the dialog</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@nova-vue/ui/dialog'
import { Input } from '@nova-vue/ui/input'
import { Label } from '@nova-vue/ui/label'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<Dialog>
  <DialogTrigger as-child>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <DialogClose as-child>
        <Button variant="outline">Cancel</Button>
      </DialogClose>
      <Button variant="destructive">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`

const formCode = `<Dialog>
  <DialogTrigger as-child>
    <Button variant="outline">Edit Profile</Button>
  </DialogTrigger>
  <DialogContent class="sm:max-w-md">
    <DialogHeader>
      <DialogTitle>Edit Profile</DialogTitle>
      <DialogDescription>
        Make changes to your profile here.
      </DialogDescription>
    </DialogHeader>
    <div class="space-y-4 py-4">
      <div class="space-y-2">
        <Label for="name">Name</Label>
        <Input id="name" placeholder="John Doe" />
      </div>
    </div>
    <DialogFooter>
      <Button type="submit">Save changes</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`

const usageCode = '<' + `script setup lang="ts">
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@nova-vue/ui/dialog'
<` + `/script>

<` + `template>
  <Dialog>
    <DialogTrigger as-child>
      <Button>Open</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Title</DialogTitle>
      </DialogHeader>
    </DialogContent>
  </Dialog>
</` + `template>`
</script>
