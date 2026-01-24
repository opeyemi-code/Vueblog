<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
defineProps({
  category: String,
  published: String,
  readTime: String,
  title: String,
  content: String,
  author: String,
});
</script>
<template>
  <article class="bg-white px-5 py-4 rounded-lg mb-4 xl:w-216 2xl:w-212">
    <header>
      <ul class="flex gap-4 text-[0.75rem]">
        <li>{{ category }}</li>
        <li>{{ published }}</li>
        <li>{{ readTime }}</li>
      </ul>
      <h2 class="my-3 text-[#111827] text-[1.125rem] font-semibold lg:text-xl">
        {{ title }}
      </h2>
      <p class="my-4 text-sm lg:text-[1rem] leading-5.5 lg:leading-6.5">
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
        <button
          class="text-[#3B82F6] text-sm lg:text-[1rem] hover:cursor-pointer"
        >
          Read more
          <FontAwesomeIcon :icon="['fas', 'arrow-right']" />
        </button>
      </footer>
    </header>
  </article>
</template>
