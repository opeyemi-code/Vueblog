<script setup lang="ts">
import Button from "@/components/Button.vue";
import Card from "@/components/Card.vue";
import Hero from "@/components/Hero.vue";
</script>

<template>
  <main class="px-5.25 flex flex-col items-center lg:px-40">
    <Hero
      title="Latest Blog Posts"
      description="Insights, stories, and updates "
    />
    <section class="mb-4">
      <Card
        category="Technology"
        published="January 15, 2026"
        readTime="5 min read"
        title="Building Scalable Web Applications with Modern JavaScript Frameworks"
        content="Discover the best practices for creating maintainable and scalable web
        applications using the latest JavaScript frameworks. Learn about
        performance optimization, code organization, and deployment strategies
        that will help you build better applications."
        author="Alex Johnson"
      />
      <Card
        category="Technology"
        published="January 15, 2026"
        readTime="5 min read"
        title="Building Scalable Web Applications with Modern JavaScript Frameworks"
        content="Discover the best practices for creating maintainable and scalable web
        applications using the latest JavaScript frameworks. Learn about
        performance optimization, code organization, and deployment strategies
        that will help you build better applications."
        author="Alex Johnson"
      />
      <Card
        category="Technology"
        published="January 15, 2026"
        readTime="5 min read"
        title="Building Scalable Web Applications with Modern JavaScript Frameworks"
        content="Discover the best practices for creating maintainable and scalable web
        applications using the latest JavaScript frameworks. Learn about
        performance optimization, code organization, and deployment strategies
        that will help you build better applications."
        author="Alex Johnson"
      />
      <Card
        category="Technology"
        published="January 15, 2026"
        readTime="5 min read"
        title="Building Scalable Web Applications with Modern JavaScript Frameworks"
        content="Discover the best practices for creating maintainable and scalable web
        applications using the latest JavaScript frameworks. Learn about
        performance optimization, code organization, and deployment strategies
        that will help you build better applications."
        author="Alex Johnson"
      />
      <div class="flex justify-center my-7">
        <Button
          text="Load more posts"
          class="bg-[#4F46E5] text-white px-6 py-3 rounded-lg leading-4 tracking-[0-5px] hover:cursor-pointer"
        />
      </div>
    </section>
  </main>
</template>
