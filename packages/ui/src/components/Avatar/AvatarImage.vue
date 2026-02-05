<script setup lang="ts">
import { computed } from 'vue'
import { AvatarImage as RekaAvatarImage } from 'reka-ui'
import { cn } from '@/utils/cn'

interface Props {
  class?: string
  src: string
  alt?: string
}

const props = defineProps<Props>()

const classes = computed(() =>
  cn('aspect-square h-full w-full object-cover', props.class)
)
</script>

<template>
  <RekaAvatarImage :src="props.src" :class="classes" v-bind="$attrs">
    <slot />
  </RekaAvatarImage>
</template>
