<template>
  <div class="code-block">
    <div class="code-header" v-if="filename || lang">
      <span class="code-lang">{{ filename || lang }}</span>
      <button class="copy-btn" @click="copyCode" :title="copied ? 'Copied!' : 'Copy code'">
        <Icon :name="copied ? 'hugeicons:checkmark-circle-01' : 'hugeicons:copy-01'" class="size-4" />
      </button>
    </div>
    <div class="code-content" v-html="highlightedCode"></div>
  </div>
</template>

<script setup lang="ts">
import { codeToHtml } from 'shiki'

const props = defineProps<{
  code: string
  lang?: string
  filename?: string
}>()

const colorMode = useColorMode()
const copied = ref(false)
const highlightedCode = ref('')

const copyCode = async () => {
  await navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2000)
}

const highlight = async () => {
  const theme = colorMode.value === 'dark' ? 'github-dark' : 'github-light'
  highlightedCode.value = await codeToHtml(props.code, {
    lang: props.lang || 'vue',
    theme
  })
}

onMounted(highlight)
watch(() => props.code, highlight)
watch(() => colorMode.value, highlight)
</script>

<style>
.code-block {
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  background: var(--muted);
  border: 1px solid var(--border);
  box-shadow: 0 1px 2px oklch(0 0 0 / 0.04);
}

.code-block::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 11px;
  pointer-events: none;
  box-shadow: inset 0 1px 0 0 oklch(from var(--foreground) l c h / 0.03);
}

.code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: var(--muted);
  border-bottom: 1px solid var(--border);
}

.code-lang {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted-foreground);
}

.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 6px;
  background: transparent;
  border: none;
  color: var(--muted-foreground);
  cursor: pointer;
  transition: all 0.15s;
}

.copy-btn:hover {
  background: var(--accent);
  color: var(--foreground);
}

.code-content {
  overflow-x: auto;
  background: var(--muted);
}

.code-content pre {
  margin: 0;
  padding: 18px 20px;
  background: transparent !important;
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.7;
}

.code-content code {
  background: transparent !important;
  padding: 0;
  font-family: inherit;
}
</style>
