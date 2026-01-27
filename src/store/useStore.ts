import { reactive } from "vue";

type Post = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  category?: string;
  tags?: string;
  publishedAt?: number;
  author?: string;
};

type Store = {
  posts: Post[];
  error: string;
  loading: boolean;
  fetchPosts: () => Promise<void>;
  calculateReadTime: (content: string) => number;
  trimContent: (content: string) => string;
  postsLimit: number;
  loadMorePosts: () => void;
};

export const store = reactive<Store>({
  posts: [],
  error: "",
  loading: true,
  postsLimit: 10,

  async fetchPosts() {
    try {
      const res = await fetch(
        `https://api.oluwasetemi.dev/posts?&limit=${store.postsLimit}`,
      );
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data = await res.json();
      store.posts = data.data;
      console.log(store.posts);
    } catch (err) {
      if (err instanceof Error) store.error = err.message;
    }
  },

  loadMorePosts() {
    store.postsLimit += 10;
    store.fetchPosts();
  },

  // Calculate Read Time
  calculateReadTime(content) {
    const wordPerMinute = 250;
    const wordsLength = content.trim().split(/\s+/).length;
    const readTime = Math.ceil(wordsLength / wordPerMinute);
    return readTime;
  },

  //trim content for card display
  trimContent(content) {
    const wordsArr = content.trim().split(/\s+/);
    const wordsLength = wordsArr.length;
    let trimedContent = "";

    if (wordsLength > 30) {
      trimedContent = wordsArr.slice(0, 30).join(" ");
      trimedContent += "...";
    } else {
      trimedContent = content;
    }
    return trimedContent;
  },
});
