<script setup lang="ts">
import { store } from "@/store/useStore";
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import Hero from "@/components/Hero.vue";
import dayjs from "dayjs";

await store.fetchPosts();
</script>

<template>
  <main
    v-if="store.loading"
    class="px-5.25 flex flex-col items-center lg:px-40"
  >
    <Hero
      title="Latest Blog Posts"
      description="Insights, stories, and updates "
    />
    <section class="mb-4">
      <Card
        v-for="post in store.posts"
        :key="post.id"
        :category="post.category"
        :published="dayjs(post.publishedAt).format('dddd, DD MMMM YYYY')"
        :readTime="
          store.calculateReadTime(post.content) > 1
            ? store.calculateReadTime(post.content) + ' minutes'
            : store.calculateReadTime(post.content) + ' minute'
        "
        :title="post.title"
        :content="store.trimContent(post.content)"
        author="Alex Johnson"
      />
      <div class="flex justify-center my-7">
        <Button
          @click="store.loadMorePosts()"
          text="Load more posts"
          class="bg-[#4F46E5] text-white px-6 py-3 rounded-lg leading-4 tracking-[0-5px] hover:cursor-pointer"
        />
      </div>
    </section>
  </main>
</template>
