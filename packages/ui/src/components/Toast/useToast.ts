import { ref, computed } from 'vue'

export interface ToastData {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'success' | 'destructive' | 'warning' | 'info'
  action?: {
    label: string
    altText?: string
    onClick: () => void
  }
  duration?: number
}

const toasts = ref<ToastData[]>([])
let toastId = 0

export function useToast() {
  function toast(data: Omit<ToastData, 'id'>) {
    const id = `toast-${++toastId}`
    toasts.value.push({ ...data, id })
    return id
  }

  function dismiss(id: string) {
    toasts.value = toasts.value.filter((t) => t.id !== id)
  }

  function dismissAll() {
    toasts.value = []
  }

  return {
    toasts: computed(() => toasts.value),
    toast,
    dismiss,
    dismissAll,
  }
}
