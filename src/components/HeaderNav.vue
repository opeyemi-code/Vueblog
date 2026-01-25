<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="flex gap-2 items-center">
    <div class="block lg:hidden p-2">
      <div
        class="after:content-[''] after:w-5 after:h-px after:bg-[#4B5563] after:block mt-2"
      ></div>
      <div
        class="after:content-[''] after:w-5 after:h-px after:bg-[#4B5563] after:block after:mt-2"
      ></div>
      <div
        class="after:content-[''] after:w-5 after:h-px after:bg-[#4B5563] after:block after:mt-2"
      ></div>
    </div>
    <ul class="hidden items-center gap-2 lg:flex">
      <li>
        <RouterLink
          class="px-4 py-2 rounded-lg text-sm font-medium hover:cursor-pointer lg:text-[1rem]"
          to="/"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="px-4 py-2 rounded-lg text-sm font-medium hover:cursor-pointer text-[1rem]"
          to="/about"
          >About</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>
