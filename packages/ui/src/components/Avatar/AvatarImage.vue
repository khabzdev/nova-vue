<script setup lang="ts">
import { computed, toRefs } from 'vue'
import { AvatarImage as RekaAvatarImage, type AvatarImageProps } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props extends /* @vue-ignore */ AvatarImageProps {
  class?: string
}

const props = defineProps<Props>()

const { class: extraClasses } = toRefs(props)

const classes = computed(() =>
  cn('aspect-square h-full w-full object-cover', extraClasses?.value)
)
</script>

<template>
  <RekaAvatarImage :src="src" :class="classes">
    <slot />
  </RekaAvatarImage>
</template>
