<script setup lang="ts">
import {
  faArrowRotateRight,
  faHouse,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
</script>

<template>
  <main class="px-10 text-center flex flex-col items-center justify-center">
    <div>
      <FontAwesomeIcon
        :icon="faTriangleExclamation"
        class="text-[#EF4444] bg-[#FEF2F2] px-6 py-6 rounded-full text-xl my-5"
        aria-hidden="true"
      />
      <h2 class="text-slate-900 text-2xl leading-8 font-bold my-3">
        Oops! Something went wrong
      </h2>
      <p class="text-[1rem] leading-6.5 w-90 text-center">
        We couldn't load the blog posts at the moment. Please check your
        connection or try again.
      </p>
      <div class="w-full my-5">
        <button
          type="button"
          class="text-white block bg-blue-600 w-full p-3 rounded-lg my-5"
        >
          <FontAwesomeIcon :icon="faArrowRotateRight" aria-hidden="true" />
          Retry
        </button>
        <RouterLink
          to="/"
          class="block bg-[#F3F4F6] p-3 rounded-lg w-full my-5"
        >
          <FontAwesomeIcon :icon="faHouse" aria-hidden="true" />
          Go back Home
        </RouterLink>
      </div>
      <p class="text-sm leading-3.5 my-8">
        If the problem persists, please try again later.
      </p>
    </div>
  </main>
</template>
