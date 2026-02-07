<template>
  <aside class="docs-sidebar">
    <nav class="sidebar-nav">
      <div class="nav-section">
        <h3 class="nav-section-title">Getting Started</h3>
        <ul class="nav-list">
          <li>
            <NuxtLink to="/getting-started/introduction" class="nav-item">
              <Icon name="hugeicons:book-02" class="nav-item-icon" />
              Introduction
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/getting-started/installation" class="nav-item">
              <Icon name="hugeicons:package" class="nav-item-icon" />
              Installation
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="nav-section">
        <h3 class="nav-section-title">Components</h3>
        <ul class="nav-list">
          <li>
            <NuxtLink to="/components/button" class="nav-item">
              <Icon name="hugeicons:cursor-click-01" class="nav-item-icon" />
              Button
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/components/input" class="nav-item">
              <Icon name="hugeicons:text-field" class="nav-item-icon" />
              Input
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
</script>
