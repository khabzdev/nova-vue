<template>
  <div class="color-picker">
    <button
      class="color-picker-trigger"
      @click.stop="isOpen = !isOpen"
      title="Change color theme"
    >
      <span class="color-swatch" :style="{ background: currentColor }"></span>
    </button>
    
    <Transition name="picker">
      <div v-if="isOpen" class="color-picker-menu" @click.stop>
        <div class="color-picker-header">Color Theme</div>
        <div class="color-grid">
          <button
            v-for="theme in themes"
            :key="theme.name"
            class="color-option"
            :class="{ active: currentTheme === theme.name }"
            @click="setTheme(theme.name)"
            :title="theme.label"
          >
            <span class="color-swatch" :style="{ background: theme.color }"></span>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const themes = [
  { name: 'default', label: 'Default', color: '#737373' },
  { name: 'blue', label: 'Blue', color: '#3b82f6' },
  { name: 'violet', label: 'Violet', color: '#8b5cf6' },
  { name: 'rose', label: 'Rose', color: '#f43f5e' },
  { name: 'green', label: 'Green', color: '#22c55e' },
  { name: 'orange', label: 'Orange', color: '#f97316' },
  { name: 'yellow', label: 'Yellow', color: '#eab308' },
  { name: 'red', label: 'Red', color: '#ef4444' },
]

const isOpen = ref(false)
const currentTheme = useState('colorTheme', () => 'default')

const currentColor = computed(() => {
  return themes.find(t => t.name === currentTheme.value)?.color || '#737373'
})

// Dynamic head for theme CSS
useHead({
  link: computed(() => [
    {
      rel: 'stylesheet',
      href: `https://unpkg.com/@nova-vue/colors@latest/${currentTheme.value}.css`,
      id: 'nova-color-theme'
    }
  ])
})

const setTheme = (theme: string) => {
  currentTheme.value = theme
  if (import.meta.client) {
    localStorage.setItem('nova-color-theme', theme)
  }
  isOpen.value = false
}

// Close on click outside
const closeOnClickOutside = (e: MouseEvent) => {
  if (isOpen.value) {
    isOpen.value = false
  }
}

onMounted(() => {
  const saved = localStorage.getItem('nova-color-theme')
  if (saved && themes.some(t => t.name === saved)) {
    currentTheme.value = saved
  }
  
  document.addEventListener('click', closeOnClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', closeOnClickOutside)
})
</script>

<style>
.color-picker {
  position: relative;
}

.color-picker-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.15s;
}

.color-picker-trigger:hover {
  background: var(--accent);
}

.color-swatch {
  display: block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid var(--border);
}

.color-picker-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  z-index: 100;
  padding: 12px;
  background: var(--popover);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: 0 4px 20px oklch(0 0 0 / 0.15);
  min-width: 160px;
}

.color-picker-header {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--muted-foreground);
  margin-bottom: 10px;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
}

.color-option {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 8px;
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.15s;
}

.color-option:hover {
  background: var(--accent);
}

.color-option.active {
  background: var(--accent);
}

.color-option .color-swatch {
  width: 24px;
  height: 24px;
}

/* Transitions */
.picker-enter-active,
.picker-leave-active {
  transition: all 0.15s ease;
}

.picker-enter-from,
.picker-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
