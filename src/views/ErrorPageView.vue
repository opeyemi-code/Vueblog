<script setup lang="ts">
import ErrorMessage from "@/components/ErrorMessage.vue";
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
      <ErrorMessage
        message="We couldn't load the blog posts at the moment. Please check your
      connection or try again."
      />
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
