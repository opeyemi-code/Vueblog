<script setup lang="ts">
defineProps<{
  text: string;
  handleClick?: () => void;
}>();
</script>

<template>
  <button type="button" @click="handleClick">
    <slot></slot>
    {{ text }}
  </button>
</template>
