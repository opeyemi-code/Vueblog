<script setup lang="ts">
import BackButton from "@/components/BackButton.vue";
import Hero from "@/components/Hero.vue";
import {
  faArrowDown,
  faCircleCheck,
  faCircleInfo,
  faDatabase,
  faFileLines,
  faHouse,
  faMobile,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <main class="px-7.5 pt-6 tracking-[-0.5px] lg:w-216 2xl:w-212 lg:mx-auto">
    <BackButton />
    <Hero
      title="About VueBlog"
      description="A simple blog application built with Vue"
    />
    <div class="bg-white my-6 px-5 py-4 rounded-lg">
      <h2
        class="my-3 text-slate-900 font-semibold text-xl leading-7 flex items-center gap-2 lg:text-2xl lg:leading-8"
      >
        <FontAwesomeIcon
          :icon="faCircleInfo"
          class="text-blue-600 bg-[#DBEAFE] px-2 py-3 rounded-lg"
          aria-hidden="true"
        />
        What is VueBlog?
      </h2>
      <p class="ml text-sm lg:text-lg lg:leading-7.5">
        VueBlog is a simple blog web application that allows users to explore
        blog posts, read summaries, and view full articles seamlessly. Built
        with modern web technologies, it provides a clean and intuitive reading
        experience.
      </p>
    </div>
    <!-- Purpose -->
    <div class="my-4 px-5 py-4 rounded-lg bg-white">
      <h2
        class="text-slate-900 my-3 font-semibold text-xl leading-7 lg:text-2xl lg:leading-8"
      >
        Purpose of the Project
      </h2>
      <ul class="my-3 leading-6">
        <li class="text-[1rem] my-4">
          <FontAwesomeIcon
            :icon="faCircleCheck"
            class="text-blue-600 mr-1"
            aria-hidden="true"
          />
          Demonstrate Vue Router usage for seamless navigation
        </li>
        <li class="text-[1rem] my-4">
          <FontAwesomeIcon
            :icon="faCircleCheck"
            class="text-blue-600 mr-1"
            aria-hidden="true"
          />
          Practice API data fetching techniques
        </li>
        <li class="text-[1rem] my-4">
          <FontAwesomeIcon
            :icon="faCircleCheck"
            class="text-blue-600 mr-1"
            aria-hidden="true"
          />
          Implement error handling and suspense states
        </li>
        <li class="text-[1rem] my-4">
          <FontAwesomeIcon
            :icon="faCircleCheck"
            class="text-blue-600 mr-1"
            aria-hidden="true"
          />
          Implement error handling and suspense states
        </li>
      </ul>
    </div>
    <!-- Features -->
    <div class="my-6 px-5 py-4 rounded-lg bg-white">
      <h2
        class="text-slate-900 my-3 font-semibold text-xl leading-7 lg:text-2xl lg:leading-8"
      >
        Features Overview
      </h2>
      <ul class="my-3 leading-6 lg:grid grid-cols-2 gap-4">
        <li
          class="my-4 flex gap-1 bg-[#EFF6FF] py-3 px-2 rounded-lg leading-5 lg:my-0"
        >
          <FontAwesomeIcon
            :icon="faDatabase"
            class="text-blue-600 mr-1 text-xl mt-1"
            aria-hidden="true"
          />
          <div>
            <h4 class="text-sm text-slate-900 font-semibold lg:text-sm">
              External API Integration
            </h4>
            <p class="text-[0.75rem] lg:text-sm">
              Fetch blog posts from an external API
            </p>
          </div>
        </li>
        <li
          class="my-4 flex gap-1 bg-[#EFF6FF] py-3 px-2 rounded-lg leading-5 lg:my-0"
        >
          <FontAwesomeIcon
            :icon="faHouse"
            class="text-[#A855F7] text-xl mt-1 mr-1"
            aria-hidden="true"
          />
          <div>
            <h4 class="text-sm text-slate-900 font-semibold lg:text-sm">
              Home Page
            </h4>
            <p class="text-[0.75rem] lg:text-sm">
              Browse post summaries with ease
            </p>
          </div>
        </li>
        <li
          class="my-4 flex gap-1 bg-[#EFF6FF] py-3 px-2 rounded-lg leading-5 lg:my-0"
        >
          <FontAwesomeIcon
            :icon="faFileLines"
            class="text-[#10B981] text-xl mt-1 mr-1"
            aria-hidden="true"
          />
          <div>
            <h4 class="text-sm text-slate-900 font-semibold lg:text-sm">
              Detailed Blog Posts
            </h4>
            <p class="text-[0.75rem] lg:text-sm">
              View full articles with rich content
            </p>
          </div>
        </li>
        <li
          class="my-4 flex gap-1 bg-[#EFF6FF] py-3 px-2 rounded-lg leading-5 lg:my-0"
        >
          <FontAwesomeIcon
            :icon="faArrowDown"
            class="text-[#F97316] text-xl mt-1 mr-1"
            aria-hidden="true"
          />
          <div>
            <h4 class="text-sm text-slate-900 font-semibold lg:text-sm">
              Load More Posts
            </h4>
            <p class="text-[0.75rem] lg:text-sm">
              Infinite scrolling functionality
            </p>
          </div>
        </li>
        <li
          class="my-4 flex gap-1 bg-[#EFF6FF] py-3 px-2 rounded-lg leading-5 lg:my-0"
        >
          <FontAwesomeIcon
            :icon="faTriangleExclamation"
            class="text-[#EF4444] text-xl mt-1 mr-1"
            aria-hidden="true"
          />
          <div>
            <h4 class="text-sm text-slate-900 font-semibold lg:text-sm">
              Error Handling
            </h4>
            <p class="text-[0.75rem] lg:text-sm">
              Graceful error states and fallbacks
            </p>
          </div>
        </li>
        <li
          class="my-4 flex gap-1 bg-[#EFF6FF] py-3 px-2 rounded-lg leading-5 lg:my-0"
        >
          <FontAwesomeIcon
            :icon="faMobile"
            class="text-[#6366F1] text-xl mt-1 mr-1"
            aria-hidden="true"
          />
          <div>
            <h4 class="text-sm text-slate-900 font-semibold lg:text-sm">
              Responsive
            </h4>
            <p class="text-[0.75rem] lg:text-sm">
              Works seamlessly on all devices
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- Tools -->
    <div class="my-6 px-5 py-4 rounded-lg bg-white h-70">
      <h2
        class="text-slate-900 my-3 font-semibold text-xl leading-7 lg:text-2xl lg:leading-8"
      >
        Technologies Used
      </h2>
    </div>
  </main>
</template>
