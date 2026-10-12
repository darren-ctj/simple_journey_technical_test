<script setup lang="ts">
import { motion } from "motion-v";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";
import type { BreadcrumbItem } from "@/types/breadcrumb";

defineProps<{
  jobTitle: string;
  breadcrumbItems: BreadcrumbItem[];
}>();
</script>

<template>
  <section
    :class="[
      'relative overflow-visible text-white',
      'bg-[url(/features/career/hero-bg.webp)] bg-cover bg-center',
      'h-[500px] px-36 pt-[140px]',
      'max-lg:h-[440px] max-lg:px-8 max-lg:pt-[120px]',
      'max-sm:h-[360px] max-sm:px-8 max-sm:pt-[140px]',
    ]"
  >
    <div
      class="absolute inset-x-0 top-0 z-[2] h-[35%] bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]"
    />

    <div
      class="absolute inset-0 z-[1] bg-gradient-to-b from-[#01070e4d] via-[#01070ebf] via-65% to-[#01070e]"
    />

    <div class="relative z-3 mb-8 max-sm:mb-4">
      <BreadcrumbNavigation :items="breadcrumbItems" />
    </div>

    <motion.div
      class="relative z-3"
      :initial="{ opacity: 0 }"
      :animate="{ opacity: 1 }"
      :transition="{ duration: 1 }"
    >
      <h1
        :class="[
          'mb-4 font-sans text-[clamp(2rem,3vw,2.5rem)] font-medium tracking-[-0.5px]',
          'max-sm:mb-4 max-sm:text-[23px] max-sm:leading-[140%]',
        ]"
      >
        {{ jobTitle }}
      </h1>

      <span
        :class="[
          'inline-block rounded-full border border-[#ffffff26] bg-[#ffffff14] px-4 py-1.5 text-[0.85rem] font-medium text-[#ffffffd9]',
          'max-sm:px-3 max-sm:py-1 max-sm:text-[11px]',
        ]"
      >
        1 Position
      </span>
    </motion.div>
  </section>
</template>