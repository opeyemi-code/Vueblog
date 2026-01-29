<script setup lang="ts">
import { store } from "@/store/useStore";
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="flex items-center">
    <button
      type="button"
      class="sm:hidden flex flex-col justify-center gap-1 p-2 hover:cursor-pointer"
      @click="store.toggleNav()"
    >
      <span class="hamburger block w-5 h-0.5 bg-[#4B5563]"></span>
      <span class="hamburger block w-5 h-0.5 bg-[#4B5563]"></span>
      <span class="hamburger block w-5 h-0.5 bg-[#4B5563]"></span>
    </button>
    <ul
      :class="[
        store.isToggle ? 'flex' : 'hidden',
        'absolute top-full left-0 w-full flex-col items-center gap-6 bg-white py-4 border-t border-gray-100 sm:static sm:flex sm:flex-row sm:gap-2 sm:border-0 sm:py-0',
      ]"
    >
      <li>
        <RouterLink
          @click="store.toggleNav()"
          class="px-4 py-2 rounded-lg text-sm font-medium hover:cursor-pointer lg:text-[1rem]"
          to="/"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink
          @click="store.toggleNav()"
          class="px-4 py-2 rounded-lg text-sm font-medium hover:cursor-pointer text-[1rem]"
          to="/about"
          >About</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>
