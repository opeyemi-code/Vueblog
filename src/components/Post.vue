<script setup lang="ts">
import { faCalendar, faClock, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
defineProps<{
  id: string;
  category?: string;
  featuredImage?: string;
  published: string;
  readTime: string;
  title: string;
  content: string;
  author: string;
  tags?: string;
}>();
</script>

<template>
  <article class="bg-white my-4 px-3 py-3 tracking-[-0.5px]">
    <header class="border-b border-gray-100 pb-4 mb-3">
      <h2
        class="my-4 leading-7.5 text-slate-900 font-bold lg:text-4xl lg:leading-11"
      >
        {{ title }}
      </h2>
      <ul class="flex gap-2 text-[12px] my-2 lg:text-sm lg:leading-5">
        <li class="flex items-center gap-1">
          <FontAwesomeIcon :icon="faUser" />
          {{ author }}
        </li>
        <li class="flex items-center gap-2">
          <FontAwesomeIcon :icon="faCalendar" />
          <span dateTime="2026-01-15">{{ published }}</span>
        </li>
        <li class="flex items-center gap-2">
          <FontAwesomeIcon :icon="faClock" />
          <span>{{ readTime }}</span>
        </li>
      </ul>
    </header>
    <main class="text-[1rem] leading-6 lg:leading-6.5">
      <img
        class="my-5 block mx-auto w-full h-auto object-cover lg:w-[75%]"
        src="../assets/images/img(1).png"
        alt=""
      />
      <section>
        <p>{{ content }}</p>
      </section>
      <div
        class="mt-5 border-t border-b border-gray-200 flex items-center gap-1 text-sm py-5 leading-5"
      >
        <p class="mr-2 text-[#374151] font-medium">Tags:</p>
        <ul class="flex gap-2 text-[#2563EB] lg:gap-4">
          <li v-if="tags" v-for="tag in tags.split(',')">{{ tag }}</li>
          <li v-else>None</li>
        </ul>
      </div>
    </main>
    <footer class="flex items-center gap-2 py-4">
      <img
        class="w-8 h-auto lg:w-16"
        :src="featuredImage"
        alt="Sarah Johnson"
      />
      <div class="flex flex-col gap-1">
        <h4 class="text-lg text-slate-900 font-semibold leading-7">
          Sarah Johnson
        </h4>
        <p class="text-sm leading-5.5">
          Senior Frontend Developer with 8+ years of experience building
          scalable web applications. Passionate about clean code, user
          experience, and sharing knowledge with the developer community.
        </p>
      </div>
    </footer>
  </article>
</template>
