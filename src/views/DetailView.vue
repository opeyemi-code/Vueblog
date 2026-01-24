<script setup lang="ts">
import Post from "@/components/Post.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <main class="pt-6 pb-12 2xl:w-212 2xl:mx-auto">
    <nav>
      <RouterLink to="/" class="ml-3 hover:cursor-pointer">
        <FontAwesomeIcon :icon="['fas', 'arrow-left']" />
        Back</RouterLink
      >
    </nav>
    <Post />
  </main>
</template>
