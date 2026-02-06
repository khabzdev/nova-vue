<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import { Button } from '@novavue/ui/button'
import { Separator } from '@novavue/ui/separator'
import { Tooltip, TooltipTrigger, TooltipContent } from '@novavue/ui/tooltip'

defineProps<{
  collapsed: boolean
}>()

const route = useRoute()

const navigation = [
  { name: 'Dashboard', path: '/', icon: 'hugeicons:home-01' },
  { name: 'Analytics', path: '/analytics', icon: 'hugeicons:analytics-01' },
  { name: 'Projects', path: '/projects', icon: 'hugeicons:folder-01' },
  { name: 'Team', path: '/team', icon: 'hugeicons:user-group' },
  { name: 'Messages', path: '/messages', icon: 'hugeicons:mail-01' },
  { name: 'Calendar', path: '/calendar', icon: 'hugeicons:calendar-01' },
]

const bottomNavigation = [
  { name: 'Settings', path: '/settings', icon: 'hugeicons:settings-01' },
  { name: 'Help', path: '/help', icon: 'hugeicons:help-circle' },
]

function isActive(path: string) {
  return route.path === path
}
</script>

<template>
  <aside
    :class="[
      'flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300',
      collapsed ? 'w-16' : 'w-64',
    ]"
  >
    <!-- Logo -->
    <div class="flex h-16 items-center gap-2 border-b border-sidebar-border px-4">
      <div class="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Icon icon="hugeicons:leaf-01" class="h-5 w-5" />
      </div>
      <span v-if="!collapsed" class="font-semibold text-sidebar-foreground">
        Nova
      </span>
    </div>

    <!-- Main Navigation -->
    <nav class="flex-1 space-y-1 p-2">
      <template v-for="item in navigation" :key="item.path">
        <Tooltip v-if="collapsed">
          <TooltipTrigger as-child>
            <RouterLink
              :to="item.path"
              :class="[
                'flex items-center justify-center rounded-md p-2 transition-colors',
                isActive(item.path)
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              ]"
            >
              <Icon :icon="item.icon" class="h-5 w-5 shrink-0" />
            </RouterLink>
          </TooltipTrigger>
          <TooltipContent side="right">
            {{ item.name }}
          </TooltipContent>
        </Tooltip>

        <RouterLink
          v-else
          :to="item.path"
          :class="[
            'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
            isActive(item.path)
              ? 'bg-sidebar-accent text-sidebar-accent-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
          ]"
        >
          <Icon :icon="item.icon" class="h-5 w-5 shrink-0" />
          <span>{{ item.name }}</span>
        </RouterLink>
      </template>
    </nav>

    <Separator class="bg-sidebar-border" />

    <!-- Bottom Navigation -->
    <nav class="space-y-1 p-2">
      <template v-for="item in bottomNavigation" :key="item.path">
        <Tooltip v-if="collapsed">
          <TooltipTrigger as-child>
            <RouterLink
              :to="item.path"
              :class="[
                'flex items-center justify-center rounded-md p-2 transition-colors',
                isActive(item.path)
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              ]"
            >
              <Icon :icon="item.icon" class="h-5 w-5 shrink-0" />
            </RouterLink>
          </TooltipTrigger>
          <TooltipContent side="right">
            {{ item.name }}
          </TooltipContent>
        </Tooltip>

        <RouterLink
          v-else
          :to="item.path"
          :class="[
            'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
            isActive(item.path)
              ? 'bg-sidebar-accent text-sidebar-accent-foreground'
              : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
          ]"
        >
          <Icon :icon="item.icon" class="h-5 w-5 shrink-0" />
          <span>{{ item.name }}</span>
        </RouterLink>
      </template>
    </nav>

    <!-- User -->
    <div class="border-t border-sidebar-border p-2">
      <Tooltip v-if="collapsed">
        <TooltipTrigger as-child>
          <button
            class="flex w-full items-center justify-center rounded-md p-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent"
          >
            <div class="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
              JD
            </div>
          </button>
        </TooltipTrigger>
        <TooltipContent side="right">
          John Doe
        </TooltipContent>
      </Tooltip>

      <button
        v-else
        class="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sidebar-foreground transition-colors hover:bg-sidebar-accent"
      >
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
          JD
        </div>
        <div class="flex-1 text-left">
          <p class="text-sm font-medium">John Doe</p>
          <p class="text-xs text-muted-foreground">john@example.com</p>
        </div>
        <Icon icon="hugeicons:more-vertical" class="h-4 w-4 text-muted-foreground" />
      </button>
    </div>
  </aside>
</template>
