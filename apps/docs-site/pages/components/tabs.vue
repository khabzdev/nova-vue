<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Tabs</h1>
      <p>Organize content into tabbed sections.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Tabs default-value="account" class="w-full max-w-md">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="account" class="p-4">
          <p>Manage your account settings and preferences.</p>
        </TabsContent>
        <TabsContent value="password" class="p-4">
          <p>Change your password and security settings.</p>
        </TabsContent>
        <TabsContent value="settings" class="p-4">
          <p>Configure application settings.</p>
        </TabsContent>
      </Tabs>
    </ComponentPreview>

    <ComponentPreview title="With Cards" :code="cardsCode">
      <Tabs default-value="account" class="w-full max-w-lg">
        <TabsList class="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>Update your account information.</CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
              <div class="space-y-2">
                <Label for="name">Name</Label>
                <Input id="name" value="John Doe" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>Change your password here.</CardDescription>
            </CardHeader>
            <CardContent class="space-y-4">
              <div class="space-y-2">
                <Label for="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div class="space-y-2">
                <Label for="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Update password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
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
          <td><code>Tabs</code></td>
          <td>Root component that manages tab state</td>
        </tr>
        <tr>
          <td><code>TabsList</code></td>
          <td>Container for tab triggers</td>
        </tr>
        <tr>
          <td><code>TabsTrigger</code></td>
          <td>Button to activate a tab</td>
        </tr>
        <tr>
          <td><code>TabsContent</code></td>
          <td>Content panel for each tab</td>
        </tr>
      </tbody>
    </table>

    <h2>Props</h2>

    <h3>Tabs</h3>
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
          <td><code>defaultValue</code></td>
          <td><code>string</code></td>
          <td>-</td>
          <td>Default active tab value</td>
        </tr>
        <tr>
          <td><code>modelValue</code></td>
          <td><code>string</code></td>
          <td>-</td>
          <td>Controlled active tab (v-model)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@nova-vue/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@nova-vue/ui/card'
import { Input } from '@nova-vue/ui/input'
import { Label } from '@nova-vue/ui/label'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@nova-vue/ui/tabs'

definePageMeta({
  layout: 'default'
})

const defaultCode = `<Tabs default-value="account" class="w-full max-w-md">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
    <TabsTrigger value="settings">Settings</TabsTrigger>
  </TabsList>
  <TabsContent value="account" class="p-4">
    <p>Manage your account settings.</p>
  </TabsContent>
  <TabsContent value="password" class="p-4">
    <p>Change your password.</p>
  </TabsContent>
</Tabs>`

const cardsCode = `<Tabs default-value="account">
  <TabsList class="grid w-full grid-cols-2">
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">
    <Card>
      <CardHeader>
        <CardTitle>Account</CardTitle>
      </CardHeader>
      <CardContent>...</CardContent>
    </Card>
  </TabsContent>
</Tabs>`

const usageCode = '<' + `script setup lang="ts">
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@nova-vue/ui/tabs'
<` + `/script>

<` + `template>
  <Tabs default-value="tab1">
    <TabsList>
      <TabsTrigger value="tab1">Tab 1</TabsTrigger>
      <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    </TabsList>
    <TabsContent value="tab1">Content 1</TabsContent>
    <TabsContent value="tab2">Content 2</TabsContent>
  </Tabs>
</` + `template>`
</script>
