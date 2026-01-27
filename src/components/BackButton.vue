<script setup lang="ts">
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { useRouter } from "vue-router";

const router = useRouter();

const goBack = () => {
  router.back();
};
</script>

<template>
  <nav>
    <button
      @click="goBack"
      class="ml-3 hover:cursor-pointer hover:text-blue-600 flex items-center gap-2"
    >
      <FontAwesomeIcon :icon="['fas', 'arrow-left']" />
      Back
    </button>
  </nav>
</template>
