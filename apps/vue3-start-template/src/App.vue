<script setup lang="ts">
import { ref, onMounted, provide } from 'vue'
import AppSidebar from './components/AppSidebar.vue'
import AppHeader from './components/AppHeader.vue'
import { Toaster } from '@novavue/ui/toast'
import { TooltipProvider } from '@novavue/ui/tooltip'

const isDark = ref(false)
const sidebarCollapsed = ref(false)

function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}

function toggleSidebar() {
  sidebarCollapsed.value = !sidebarCollapsed.value
}

onMounted(() => {
  isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', isDark.value)
})

// Provide dark mode state to children
provide('isDark', isDark)
provide('toggleDarkMode', toggleDarkMode)
</script>

<template>
  <TooltipProvider>
    <div class="flex min-h-screen bg-background">
      <!-- Sidebar -->
      <AppSidebar :collapsed="sidebarCollapsed" />

      <!-- Main Content -->
      <div class="flex flex-1 flex-col">
        <!-- Header -->
        <AppHeader
          :is-dark="isDark"
          :sidebar-collapsed="sidebarCollapsed"
          @toggle-dark="toggleDarkMode"
          @toggle-sidebar="toggleSidebar"
        />

        <!-- Page Content -->
        <main class="flex-1 p-6">
          <RouterView />
        </main>
      </div>

      <!-- Toast notifications -->
      <Toaster />
    </div>
  </TooltipProvider>
</template>
