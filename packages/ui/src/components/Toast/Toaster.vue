<script setup lang="ts">
import { useToast } from './useToast'
import ToastProvider from './ToastProvider.vue'
import ToastViewport from './ToastViewport.vue'
import Toast from './Toast.vue'
import ToastTitle from './ToastTitle.vue'
import ToastDescription from './ToastDescription.vue'
import ToastAction from './ToastAction.vue'
import ToastClose from './ToastClose.vue'

interface Props {
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right'
}

withDefaults(defineProps<Props>(), {
  position: 'bottom-right',
})

const { toasts, dismiss } = useToast()
</script>

<template>
  <ToastProvider>
    <Toast
      v-for="toast in toasts"
      :key="toast.id"
      :variant="toast.variant"
      :duration="toast.duration"
      @update:open="(open) => !open && dismiss(toast.id)"
    >
      <div class="grid gap-1">
        <ToastTitle v-if="toast.title">{{ toast.title }}</ToastTitle>
        <ToastDescription v-if="toast.description">{{ toast.description }}</ToastDescription>
      </div>
      <ToastAction
        v-if="toast.action"
        :alt-text="toast.action.altText || toast.action.label"
        @click="toast.action.onClick"
      >
        {{ toast.action.label }}
      </ToastAction>
      <ToastClose />
    </Toast>
    <ToastViewport :position="position" />
  </ToastProvider>
</template>
