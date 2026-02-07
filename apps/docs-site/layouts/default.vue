<template>
  <div class="docs-layout">
    <DocsHeader />
    <div class="docs-container">
      <DocsSidebar />
      <main class="docs-main">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
