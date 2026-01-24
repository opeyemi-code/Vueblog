<script setup lang="ts">
defineProps({
  text: String,
});
</script>
<template>
  <button type="button">
    {{ text }}
  </button>
</template>
