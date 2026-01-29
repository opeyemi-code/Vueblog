<script setup lang="ts">
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
defineProps<{
  category?: string;
  published: string;
  readTime: string;
  title: string;
  content: string;
  author: string;
  handleClick?: () => void;
}>();
</script>
<template>
  <article class="bg-white px-5 py-4 rounded-lg mb-4 xl:w-216 2xl:w-212">
    <header>
      <ul class="flex gap-4 text-[0.75rem] lg:gap-6">
        <li class="text-[#4F46E5]">{{ category }}</li>
        <li class="flex items-center gap-2">
          <FontAwesomeIcon
            :icon="faCircle"
            class="text-[5px]"
            aria-hidden="true"
          />
          {{ published }}
        </li>
        <li class="flex items-center gap-2">
          <FontAwesomeIcon
            :icon="faCircle"
            class="text-[5px]"
            aria-hidden="true"
          />
          {{ readTime }}
        </li>
      </ul>
    </header>
    <h2 class="my-3 text-[#111827] text-[1.125rem] font-semibold lg:text-xl">
      {{ title }}
    </h2>
    <p
      class="my-4 text-sm lg:text-[1rem] leading-5.5 line-clamp-3 lg:leading-6.5"
    >
      {{ content }}
    </p>
    <footer class="mt-4 flex justify-between items-center">
      <div>
        <div class="flex items-center gap-3">
          <img
            class="w-8 h-8 object-cover rounded-full"
            src="../assets/images/avater.jpg"
            :alt="author"
          />
          <p class="text-[0.75rem] leading-4 lg:text-sm">{{ author }}</p>
        </div>
      </div>
      <RouterLink
        @click="handleClick"
        to="/detail"
        class="text-[#3B82F6] text-sm lg:text-[1rem] hover:cursor-pointer"
      >
        Read more
        <FontAwesomeIcon :icon="['fas', 'arrow-right']" aria-hidden="true" />
      </RouterLink>
    </footer>
  </article>
</template>
