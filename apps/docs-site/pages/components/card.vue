<template>
  <div class="docs-content">
    <div class="page-header">
      <h1>Card</h1>
      <p>Container for grouping related content with optional header and footer.</p>
    </div>

    <h2>Examples</h2>

    <ComponentPreview title="Default" :code="defaultCode">
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the main content of the card.</p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
    </ComponentPreview>

    <ComponentPreview title="Simple Card" :code="simpleCode">
      <Card class="w-full max-w-sm p-6">
        <p>A simple card with just content and padding.</p>
      </Card>
    </ComponentPreview>

    <ComponentPreview title="With Form" :code="formCode">
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Enter your credentials to continue.</CardDescription>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="space-y-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div class="space-y-2">
            <Label for="password">Password</Label>
            <Input id="password" type="password" placeholder="••••••••" />
          </div>
        </CardContent>
        <CardFooter class="flex justify-between">
          <Button variant="ghost">Cancel</Button>
          <Button>Sign in</Button>
        </CardFooter>
      </Card>
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
          <td><code>Card</code></td>
          <td>Root container component</td>
        </tr>
        <tr>
          <td><code>CardHeader</code></td>
          <td>Header section with padding</td>
        </tr>
        <tr>
          <td><code>CardTitle</code></td>
          <td>Title text element</td>
        </tr>
        <tr>
          <td><code>CardDescription</code></td>
          <td>Subtitle/description text</td>
        </tr>
        <tr>
          <td><code>CardContent</code></td>
          <td>Main content area</td>
        </tr>
        <tr>
          <td><code>CardFooter</code></td>
          <td>Footer section for actions</td>
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

definePageMeta({
  layout: 'default'
})

const defaultCode = `<Card class="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the main content of the card.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`

const simpleCode = `<Card class="w-full max-w-sm p-6">
  <p>A simple card with just content and padding.</p>
</Card>`

const formCode = `<Card class="w-full max-w-sm">
  <CardHeader>
    <CardTitle>Login</CardTitle>
    <CardDescription>Enter your credentials to continue.</CardDescription>
  </CardHeader>
  <CardContent class="space-y-4">
    <div class="space-y-2">
      <Label for="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
    <div class="space-y-2">
      <Label for="password">Password</Label>
      <Input id="password" type="password" placeholder="••••••••" />
    </div>
  </CardContent>
  <CardFooter class="flex justify-between">
    <Button variant="ghost">Cancel</Button>
    <Button>Sign in</Button>
  </CardFooter>
</Card>`

const usageCode = '<' + `script setup lang="ts">
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@nova-vue/ui/card'
<` + `/script>

<` + `template>
  <Card>
    <CardHeader>
      <CardTitle>Title</CardTitle>
    </CardHeader>
    <CardContent>Content</CardContent>
  </Card>
</` + `template>`
</script>
