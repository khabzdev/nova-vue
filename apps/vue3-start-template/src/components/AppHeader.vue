<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Button } from '@lettuce/ui/button'
import { Input } from '@lettuce/ui/input'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from '@lettuce/ui/dropdown-menu'
import { Avatar, AvatarFallback } from '@lettuce/ui/avatar'

defineProps<{
  isDark: boolean
  sidebarCollapsed: boolean
}>()

const emit = defineEmits<{
  toggleDark: []
  toggleSidebar: []
}>()
</script>

<template>
  <header class="flex h-16 items-center justify-between border-b border-border bg-background px-4">
    <!-- Left side -->
    <div class="flex items-center gap-4">
      <Button variant="ghost" size="icon" @click="emit('toggleSidebar')">
        <Icon :icon="sidebarCollapsed ? 'hugeicons:menu-01' : 'hugeicons:cancel-01'" class="h-5 w-5" />
      </Button>

      <!-- Breadcrumb / Search -->
      <div class="hidden md:block">
        <div class="relative">
          <Icon icon="hugeicons:search-01" class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            class="w-64 pl-9"
          />
        </div>
      </div>
    </div>

    <!-- Right side -->
    <div class="flex items-center gap-2">
      <!-- Mobile search -->
      <Button variant="ghost" size="icon" class="md:hidden">
        <Icon icon="hugeicons:search-01" class="h-5 w-5" />
      </Button>

      <!-- Notifications -->
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon" class="relative">
            <Icon icon="hugeicons:notification-02" class="h-5 w-5" />
            <span class="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-destructive" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-80">
          <DropdownMenuLabel>Notifications</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <div class="p-4 text-center text-sm text-muted-foreground">
            No new notifications
          </div>
        </DropdownMenuContent>
      </DropdownMenu>

      <!-- Theme toggle -->
      <Button variant="ghost" size="icon" @click="emit('toggleDark')">
        <Icon v-if="isDark" icon="hugeicons:sun-01" class="h-5 w-5" />
        <Icon v-else icon="hugeicons:moon-01" class="h-5 w-5" />
      </Button>

      <!-- User menu -->
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" size="icon" class="rounded-full">
            <Avatar class="h-8 w-8">
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" class="w-56">
          <DropdownMenuLabel>
            <div class="flex flex-col">
              <span>John Doe</span>
              <span class="text-xs font-normal text-muted-foreground">john@example.com</span>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Icon icon="hugeicons:user-01" class="mr-2 h-4 w-4" />
            Profile
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon icon="hugeicons:settings-01" class="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem class="text-destructive">
            <Icon icon="hugeicons:logout-01" class="mr-2 h-4 w-4" />
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
</template>
