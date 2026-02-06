<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@lettuce/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@lettuce/ui/card'
import { Badge } from '@lettuce/ui/badge'
import { Avatar, AvatarFallback } from '@lettuce/ui/avatar'
import { useToast } from '@lettuce/ui/toast'

const { toast } = useToast()

const stats = [
  { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', trend: 'up', icon: 'hugeicons:dollar-01' },
  { label: 'Subscriptions', value: '+2,350', change: '+180.1%', trend: 'up', icon: 'hugeicons:user-add-01' },
  { label: 'Sales', value: '+12,234', change: '+19%', trend: 'up', icon: 'hugeicons:shopping-cart-01' },
  { label: 'Active Now', value: '+573', change: '+201', trend: 'up', icon: 'hugeicons:activity-01' },
]

const recentSales = [
  { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: '+$1,999.00' },
  { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: '+$39.00' },
  { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: '+$299.00' },
  { name: 'William Kim', email: 'will@email.com', amount: '+$99.00' },
  { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: '+$39.00' },
]

function showToast() {
  toast({
    title: 'Welcome!',
    description: 'This is your Vue 3 starter template with Lettuce UI.',
  })
}
</script>

<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p class="text-muted-foreground">Welcome back! Here's an overview of your account.</p>
      </div>
      <Button @click="showToast">
        <Icon icon="hugeicons:download-01" class="mr-2 h-4 w-4" />
        Download Report
      </Button>
    </div>

    <!-- Stats Grid -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card v-for="stat in stats" :key="stat.label">
        <CardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle class="text-sm font-medium">{{ stat.label }}</CardTitle>
          <Icon :icon="stat.icon" class="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div class="text-2xl font-bold">{{ stat.value }}</div>
          <p class="text-xs text-muted-foreground">
            <span :class="stat.trend === 'up' ? 'text-success-foreground' : 'text-destructive-foreground'">
              {{ stat.change }}
            </span>
            from last month
          </p>
        </CardContent>
      </Card>
    </div>

    <!-- Main Content Grid -->
    <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <!-- Overview Card -->
      <Card class="col-span-4">
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent class="pl-2">
          <div class="flex h-[350px] items-center justify-center rounded-lg border border-dashed border-border">
            <div class="text-center">
              <Icon icon="hugeicons:chart-line-data-01" class="mx-auto h-12 w-12 text-muted-foreground" />
              <p class="mt-2 text-sm text-muted-foreground">Chart placeholder</p>
              <p class="text-xs text-muted-foreground">Integrate your preferred chart library</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <!-- Recent Sales Card -->
      <Card class="col-span-3">
        <CardHeader>
          <CardTitle>Recent Sales</CardTitle>
          <CardDescription>You made 265 sales this month.</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="space-y-8">
            <div v-for="sale in recentSales" :key="sale.email" class="flex items-center">
              <Avatar class="h-9 w-9">
                <AvatarFallback>{{ sale.name.split(' ').map(n => n[0]).join('') }}</AvatarFallback>
              </Avatar>
              <div class="ml-4 space-y-1">
                <p class="text-sm font-medium leading-none">{{ sale.name }}</p>
                <p class="text-sm text-muted-foreground">{{ sale.email }}</p>
              </div>
              <div class="ml-auto font-medium">{{ sale.amount }}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>

    <!-- Quick Actions -->
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <CardDescription>Common tasks and shortcuts</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Button variant="outline" class="h-auto flex-col gap-2 py-4">
            <Icon icon="hugeicons:add-01" class="h-6 w-6" />
            <span>New Project</span>
          </Button>
          <Button variant="outline" class="h-auto flex-col gap-2 py-4">
            <Icon icon="hugeicons:user-add-01" class="h-6 w-6" />
            <span>Invite Team</span>
          </Button>
          <Button variant="outline" class="h-auto flex-col gap-2 py-4">
            <Icon icon="hugeicons:file-upload" class="h-6 w-6" />
            <span>Upload Files</span>
          </Button>
          <Button variant="outline" class="h-auto flex-col gap-2 py-4">
            <Icon icon="hugeicons:settings-01" class="h-6 w-6" />
            <span>Settings</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
