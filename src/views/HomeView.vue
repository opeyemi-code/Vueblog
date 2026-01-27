<script setup lang="ts">
import { ref, onMounted, Suspense } from "vue";
import { store } from "@/store/useStore";
import PostLists from "@/components/PostLists.vue";
</script>

<template>
  <Suspense>
    <PostLists />
    <template #fallback>
      <main class="flex justify-center items-center">Loading posts...</main>
    </template>
  </Suspense>
</template>
