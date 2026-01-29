<script setup lang="ts">
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ErrorMessage from "./ErrorMessage.vue";
import ButtonWithIcon from "./ButtonWithIcon.vue";
import { store } from "@/store/useStore";
</script>

<template>
  <div>
    <ErrorMessage
      message="We couldn't load the blog posts at the moment. Please check your
      connection or try again."
    />
    <ButtonWithIcon
      text="Retry"
      class="text-white block bg-blue-600 w-full p-3 rounded-lg my-5"
      :handleClick="store.reloadPosts()"
    >
      <fontAwesomeIcon :icon="faArrowRotateRight" />
    </ButtonWithIcon>
  </div>
</template>
