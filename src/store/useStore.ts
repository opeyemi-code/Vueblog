import { reactive } from "vue";
import type { Post, Store } from "@/types/models";

export const store = reactive<Store>({
  posts: [],
  error: "",
  loading: false,
  postsLimit: 10,
  selectedPost: null,
  isToggle: false,

  toggleNav() {
    const hamburger = document.querySelectorAll(".hamburger");
    const main = document.querySelector("main");
    hamburger.forEach((elem) => elem.classList.toggle("custom-line"));
    main!.classList.toggle("main-padding-top");
    store.isToggle = !store.isToggle;
  },

  async fetchPosts() {
    try {
      const res = await fetch(
        `https://api.oluwasetemi.dev/posts?&limit=${store.postsLimit}`,
      );
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      store.posts = data.data;
      store.loading = true;
    } catch (err) {
      if (err instanceof Error) store.error = err.message;
      store.loading = false;
      console.log(store.error);
      console.log(store.loading);
    }
  },

  async reloadPost() {
    await store.fetchPosts();
  },

  loadMorePosts() {
    store.postsLimit += 10;
    store.fetchPosts();
  },

  // Calculate Read Time
  calculateReadTime(content: string) {
    const wordPerMinute = 250;
    const wordsLength = content.trim().split(/\s+/).length;
    const readTime = Math.ceil(wordsLength / wordPerMinute);
    return readTime;
  },

  //Read more on selected card
  selectedCardPost(post: Post) {
    store.selectedPost = post;
  },
});
