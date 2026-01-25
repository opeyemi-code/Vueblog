<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>
<template>
  <nav>
    <RouterLink to="/" class="ml-3 hover:cursor-pointer hover:text-blue-600">
      <FontAwesomeIcon :icon="['fas', 'arrow-left']" />
      Back</RouterLink
    >
  </nav>
</template>
