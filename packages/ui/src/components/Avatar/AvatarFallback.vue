<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { AvatarFallback as RekaAvatarFallback, type AvatarFallbackProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends AvatarFallbackProps {
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  class: '',
})

const { class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn(
    'flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground font-medium',
    extraClasses.value
  )
)
</script>

<template>
  <RekaAvatarFallback :class="classes" v-bind="$attrs">
    <slot />
  </RekaAvatarFallback>
</template>
