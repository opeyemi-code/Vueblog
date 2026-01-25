<script setup lang="ts">
defineProps({
  title: String,
  description: String,
});
</script>
<template>
  <div class="my-3 flex flex-col items-center gap-1 py-5">
    <h2
      class="text-[#111827] text-[28px] font-bold leading-8 tracking-[-0.5px] lg:text-[2.25rem] lg:leading-10"
    >
      {{ title }}
    </h2>
    <p class="text-sm leading-5 tracking-[-0.5px] lg:text-lg lg:leading-7">
      {{ description }}
    </p>
  </div>
</template>
