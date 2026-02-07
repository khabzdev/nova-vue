<template>
  <header class="docs-header">
    <div class="header-inner">
      <NuxtLink to="/" class="header-brand">
        <div class="brand-logo">
          <svg viewBox="0 0 32 32" fill="none" class="w-6 h-6">
            <rect x="2" y="2" width="28" height="28" rx="8" fill="currentColor" class="text-primary" />
            <path d="M16 8L20 14H12L16 8Z" fill="currentColor" class="text-primary-foreground" fill-opacity="0.9" />
            <path d="M12 18L16 24L20 18H12Z" fill="currentColor" class="text-primary-foreground" fill-opacity="0.6" />
          </svg>
        </div>
        <span class="brand-text">Nova Vue</span>
        <span class="brand-badge">docs</span>
      </NuxtLink>

      <nav class="header-nav">
        <NuxtLink to="/getting-started/introduction" class="nav-link">Guide</NuxtLink>
        <NuxtLink to="/components/button" class="nav-link">Components</NuxtLink>
        <ColorPicker />
        <ThemeToggle />
        <a href="https://github.com/khabzdev/nova-vue" target="_blank" class="nav-link nav-link-icon">
          <Icon name="simple-icons:github" class="w-5 h-5" />
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>
