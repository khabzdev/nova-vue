<template>
  <div class="component-preview">
    <div class="preview-header">
      <span class="preview-title">{{ title }}</span>
      <button class="preview-toggle" @click="showCode = !showCode">
        <Icon :name="showCode ? 'hugeicons:eye' : 'hugeicons:source-code'" class="w-4 h-4" />
        {{ showCode ? 'Preview' : 'Code' }}
      </button>
    </div>
    <div v-show="!showCode" class="preview-canvas">
      <slot />
    </div>
    <div v-show="showCode" class="preview-code">
      <CodeBlock :code="code ?? ''" lang="vue" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
  code?: string
}>()

const showCode = ref(false)
</script>
