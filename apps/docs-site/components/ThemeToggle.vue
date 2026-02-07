<template>
  <button
    class="theme-toggle"
    @click="toggleTheme"
    :title="colorMode.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <Icon
      :name="colorMode.value === 'dark' ? 'hugeicons:sun-03' : 'hugeicons:moon-02'"
      class="w-5 h-5"
    />
  </button>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const toggleTheme = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style>
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  background: transparent;
  border: none;
  color: var(--muted-foreground);
  cursor: pointer;
  transition: all 0.15s;
}

.theme-toggle:hover {
  color: var(--foreground);
  background: var(--accent);
}
</style>
