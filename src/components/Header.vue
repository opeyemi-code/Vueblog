<script setup lang="ts">
import HeaderNav from "./HeaderNav.vue";
</script>

<template>
  <header
    class="px-7.5 py-3.5 bg-white border-t border-gray-100 relative lg:px-40"
  >
    <div class="flex justify-between items-center h-12">
      <h1 class="text-[#111827] font-bold text-xl">VueBlog</h1>
      <HeaderNav />
    </div>
  </header>
</template>
