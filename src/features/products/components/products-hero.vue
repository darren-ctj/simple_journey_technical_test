<script setup lang="ts">
import { motion } from "motion-v";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";
import { BREADCRUMB_ITEMS } from "../constants/breadcrumb";
</script>

<template>
  <section
    class="hero relative min-h-screen overflow-hidden bg-[url(/features/products/hero-section-bg.webp)] bg-cover bg-center bg-no-repeat px-20 pb-20 pt-[140px] text-white max-[1024px]:px-10 max-[1024px]:pb-[60px] max-[1024px]:pt-[120px] max-[640px]:px-6 max-[640px]:pb-[50px] max-[640px]:pt-[100px]"
  >
    <div
      class="top-gradient absolute inset-x-0 top-0 z-[2] h-[35%] bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]"
    />

    <div class="overlay absolute inset-0 z-[1] bg-[#01070ecc]" />

    <div class="absolute left-[7%] top-[15%] z-[999]">
      <BreadcrumbNavigation :items="BREADCRUMB_ITEMS" />
    </div>

    <div
      class="hero-content absolute top-[20%] z-[2] flex w-[90vw] flex-col max-[1024px]:items-start min-[1280px]:left-[7%] min-[1280px]:w-[85vw]"
    >
      <motion.div
        class="left max-w-[70%] max-[640px]:max-w-[90%]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 0.3 }"
      >
        <h1
          class="font-medium leading-[150%] tracking-[-0.5px] text-[clamp(2rem,2.8vw,2.25rem)] max-[1024px]:text-[40px] max-[640px]:text-xl"
        >
          Technology Products Built for Enterprise Needs
        </h1>
      </motion.div>

      <motion.div
        class="right max-w-[40%] tracking-[1px] max-[640px]:max-w-full"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 0.7 }"
      >
        <p
          class="-mt-[0.7rem] text-base leading-[2] max-[640px]:mt-2 max-[640px]:text-xs"
        >
          Our products are designed to address real operational challenges
          across industries, ensuring reliability, scalability, and seamless
          integration with existing systems.
        </p>
      </motion.div>
    </div>
  </section>
</template>
