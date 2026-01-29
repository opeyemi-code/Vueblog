<script setup lang="ts">
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
defineProps({
  message: String,
});
</script>
<template>
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
      {{ message }}
    </p>
  </div>
</template>
