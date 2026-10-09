<script setup lang="ts">
import { motion } from "motion-v";
import type { Benefit } from "../types/services";

defineProps<{
  benefit: Benefit;
  index: number;
}>();
</script>

<template>
  <motion.article
    class="feature-card flex max-w-[620px] gap-8 rounded-[14px] border-2 border-[#ffffff1a] bg-[linear-gradient(145deg,#0c0f14,#141824)] p-6 text-white shadow-[0_10px_30px_#00000059] max-[768px]:flex-col min-[1280px]:min-w-[700px] min-[1280px]:max-w-full"
    :initial="{ opacity: 0, y: 60, scale: 0.95 }"
    :whileInView="{ opacity: 1, y: 0, scale: 1 }"
    :viewport="{ once: true, amount: 0.3 }"
    :transition="{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }"
  >
    <div class="feature-header flex shrink-0 gap-4">
      <div
        class="feature-number flex h-11 w-11 items-center justify-center rounded-[10px] border border-[#ffffff40]"
      >
        <img :src="benefit.icon" alt="" class="max-w-full object-contain" />
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <h3 class="feature-title m-0 text-lg font-semibold">
        {{ benefit.title }}
      </h3>
      <p class="feature-description m-0 text-sm leading-[1.6] text-[#ffffffbf]">
        {{ benefit.description }}
      </p>
    </div>
  </motion.article>
</template>
