<script setup lang="ts">
import type { Solution } from "../types/services";

defineProps<{
  solutions: Solution[];
  activeIndex: number;
}>();
</script>

<template>
  <div class="image flex flex-1 justify-center">
    <video
      v-for="(solution, index) in solutions"
      :key="solution.video"
      v-show="index === activeIndex"
      :src="solution.video"
      autoplay
      loop
      playsinline
      class="block w-full rounded-[12px] object-contain"
    />
  </div>
</template>
