<script setup lang="ts">
import { ref, inject } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@novavue/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@novavue/ui/card'
import { Input } from '@novavue/ui/input'
import { Label } from '@novavue/ui/label'
import { Textarea } from '@novavue/ui/textarea'
import { Switch } from '@novavue/ui/switch'
import { Separator } from '@novavue/ui/separator'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@novavue/ui/select'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@novavue/ui/tabs'
import { useToast } from '@novavue/ui/toast'

const { toast } = useToast()

// Form state
const name = ref('John Doe')
const email = ref('john@example.com')
const bio = ref('Software developer passionate about building great user experiences.')
const language = ref('en')
const timezone = ref('utc')

// Notification settings
const emailNotifications = ref(true)
const pushNotifications = ref(false)
const marketingEmails = ref(false)

function saveProfile() {
  toast({
    title: 'Profile updated',
    description: 'Your profile has been saved successfully.',
  })
}

function saveNotifications() {
  toast({
    title: 'Notifications updated',
    description: 'Your notification preferences have been saved.',
  })
}
</script>

<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Settings</h1>
      <p class="text-muted-foreground">Manage your account settings and preferences.</p>
    </div>

    <!-- Settings Tabs -->
    <Tabs default-value="profile" class="space-y-6">
      <TabsList>
        <TabsTrigger value="profile">
          <Icon icon="hugeicons:user-01" class="mr-2 h-4 w-4" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Icon icon="hugeicons:notification-02" class="mr-2 h-4 w-4" />
          Notifications
        </TabsTrigger>
        <TabsTrigger value="appearance">
          <Icon icon="hugeicons:paint-brush-01" class="mr-2 h-4 w-4" />
          Appearance
        </TabsTrigger>
      </TabsList>

      <!-- Profile Tab -->
      <TabsContent value="profile">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>
              Update your personal information and public profile.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-2">
                <Label for="name">Name</Label>
                <Input id="name" v-model="name" placeholder="Your name" />
              </div>
              <div class="space-y-2">
                <Label for="email">Email</Label>
                <Input id="email" v-model="email" type="email" placeholder="Your email" />
              </div>
            </div>

            <div class="space-y-2">
              <Label for="bio">Bio</Label>
              <Textarea
                id="bio"
                v-model="bio"
                placeholder="Tell us about yourself"
                :rows="4"
              />
              <p class="text-sm text-muted-foreground">
                Brief description for your profile. URLs are hyperlinked.
              </p>
            </div>

            <Separator />

            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-2">
                <Label>Language</Label>
                <Select v-model="language">
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                    <SelectItem value="ja">Japanese</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div class="space-y-2">
                <Label>Timezone</Label>
                <Select v-model="timezone">
                  <SelectTrigger>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC</SelectItem>
                    <SelectItem value="est">Eastern Time</SelectItem>
                    <SelectItem value="pst">Pacific Time</SelectItem>
                    <SelectItem value="cet">Central European Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter class="flex justify-end">
            <Button @click="saveProfile">Save Changes</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <!-- Notifications Tab -->
      <TabsContent value="notifications">
        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>
              Configure how you receive notifications.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <Label>Email Notifications</Label>
                <p class="text-sm text-muted-foreground">
                  Receive notifications via email.
                </p>
              </div>
              <Switch v-model:checked="emailNotifications" />
            </div>

            <Separator />

            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <Label>Push Notifications</Label>
                <p class="text-sm text-muted-foreground">
                  Receive push notifications on your device.
                </p>
              </div>
              <Switch v-model:checked="pushNotifications" />
            </div>

            <Separator />

            <div class="flex items-center justify-between">
              <div class="space-y-0.5">
                <Label>Marketing Emails</Label>
                <p class="text-sm text-muted-foreground">
                  Receive emails about new features and offers.
                </p>
              </div>
              <Switch v-model:checked="marketingEmails" />
            </div>
          </CardContent>
          <CardFooter class="flex justify-end">
            <Button @click="saveNotifications">Save Preferences</Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <!-- Appearance Tab -->
      <TabsContent value="appearance">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize the look and feel of the application.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-6">
            <div class="space-y-4">
              <Label>Theme</Label>
              <div class="grid grid-cols-3 gap-4">
                <button
                  class="flex flex-col items-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
                >
                  <Icon icon="hugeicons:sun-01" class="h-6 w-6" />
                  <span class="text-sm">Light</span>
                </button>
                <button
                  class="flex flex-col items-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
                >
                  <Icon icon="hugeicons:moon-01" class="h-6 w-6" />
                  <span class="text-sm">Dark</span>
                </button>
                <button
                  class="flex flex-col items-center gap-2 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
                >
                  <Icon icon="hugeicons:computer" class="h-6 w-6" />
                  <span class="text-sm">System</span>
                </button>
              </div>
            </div>

            <Separator />

            <div class="space-y-4">
              <Label>Accent Color</Label>
              <div class="flex gap-2">
                <button
                  v-for="color in ['neutral', 'blue', 'green', 'violet', 'orange', 'rose']"
                  :key="color"
                  :class="[
                    'h-8 w-8 rounded-full border-2 border-transparent transition-all hover:scale-110',
                    color === 'neutral' && 'bg-neutral-800',
                    color === 'blue' && 'bg-blue-600',
                    color === 'green' && 'bg-green-600',
                    color === 'violet' && 'bg-violet-600',
                    color === 'orange' && 'bg-orange-600',
                    color === 'rose' && 'bg-rose-600',
                  ]"
                />
              </div>
              <p class="text-sm text-muted-foreground">
                Choose your preferred accent color. Import a color theme from @novavue/colors.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>
