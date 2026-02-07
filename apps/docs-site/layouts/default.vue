<template>
  <div class="docs-layout">
    <DocsHeader />
    <div class="docs-container">
      <DocsSidebar />
      <main class="docs-main">
        <slot />
      </main>
    </div>
    <Toaster />
  </div>
</template>

<script setup lang="ts">
import { Toaster } from '@nova-vue/ui/toast'
</script>
