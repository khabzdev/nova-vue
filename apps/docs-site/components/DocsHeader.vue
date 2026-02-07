<template>
  <header class="docs-header">
    <div class="header-inner">
      <NuxtLink to="/" class="header-brand">
        <div class="brand-logo">
          <Icon name="basil:asana-solid" class="w-6 h-6 text-primary" />
        </div>
        <span class="brand-text">Nova Vue</span>
        <Badge variant="info" size="sm" class="ml-2">docs</Badge>
      </NuxtLink>

      <nav class="header-nav">
        <NuxtLink to="/getting-started/introduction" class="nav-link">Guide</NuxtLink>
        <NuxtLink to="/components/button" class="nav-link">Components</NuxtLink>
        <ThemeToggle />
        <a href="https://github.com/khabzdev/nova-vue" target="_blank" class="nav-link nav-link-icon">
          <Icon name="simple-icons:github" class="w-5 h-5" />
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Badge } from '@nova-vue/ui';

</script>
