export type Post = {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  featuredImage?: string;
  category?: string;
  tags?: string | undefined;
  publishedAt?: string;
  author?: string;
};

export type Store = {
  posts: Post[];
  error: string;
  loading: boolean;
  fetchPosts: () => Promise<void>;
  calculateReadTime: (content: string) => number;
  postsLimit: number;
  loadMorePosts: () => void;
  selectedPost: Post | null;
  selectedCardPost: (post: Post) => void;
  isToggle: boolean;
  toggleNav: () => void;
};
