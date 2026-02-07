<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { cn } from '@/utils/cn'
import { inputVariants, type InputVariants } from './variants'

const props = defineProps({
  size: {
    type: String as () => InputVariants['size'],
    default: 'default',
  },
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  class: {
    type: String,
    default: '',
  },
})

const emit = defineEmits<{
  'update:modelValue': [value: string | number]
}>()

const { size, class: extraClasses } = toRefs(props)

const inputClasses = computed(() =>
  cn(inputVariants({ size: size.value }), extraClasses.value)
)

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <input
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :readonly="readonly"
    :class="inputClasses"
    v-bind="$attrs"
    @input="onInput"
  />
</template>
