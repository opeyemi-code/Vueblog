<script setup lang="ts">
import BackButton from "@/components/BackButton.vue";
import Post from "@/components/Post.vue";
import { store } from "@/store/useStore";
import dayjs from "dayjs";
</script>

<template>
  <main class="pt-6 pb-12 2xl:w-212 2xl:mx-auto">
    <BackButton />
    <div v-if="store.selectedPost">
      <Post
        v-if="store.selectedPost"
        :id="store.selectedPost!.id"
        :category="store.selectedPost.category"
        :featuredImage="store.selectedPost.featuredImage"
        :published="
          dayjs(store.selectedPost!.publishedAt).format('dddd, DD MMMM YYYY')
        "
        :readTime="
          store.calculateReadTime(store.selectedPost.content) > 1
            ? store.calculateReadTime(store.selectedPost.content) + ' minutes'
            : store.calculateReadTime(store.selectedPost.content) + ' minute'
        "
        :title="store.selectedPost.title"
        :content="store.selectedPost.content"
        author="Alex Johnson"
        :tags="store.selectedPost.tags"
      />
    </div>
    <!--  -->
    <div v-else class="flex items-center h-full mt-10 w-[80%] mx-auto">
      <p>Oops! something went wrong. Please go back and click on a post.</p>
    </div>
  </main>
</template>
