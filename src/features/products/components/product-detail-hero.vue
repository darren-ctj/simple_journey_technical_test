<script setup lang="ts">
import { motion } from "motion-v";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";
import type { BreadcrumbItem } from "@/types/breadcrumb";
import type { Product } from "../types/product";

defineProps<{
  product: Product;
  breadcrumbItems: BreadcrumbItem[];
}>();
</script>

<template>
  <section
    class="hero relative min-h-screen overflow-hidden bg-[url(/product_hero.webp)] bg-cover bg-center bg-no-repeat px-20 pb-20 pt-[140px] text-white max-[1024px]:px-10 max-[1024px]:pb-[60px] max-[1024px]:pt-[120px] max-[640px]:px-6 max-[640px]:pb-[50px] max-[640px]:pt-[100px]"
  >
    <div
      class="top-gradient absolute inset-x-0 top-0 z-[2] h-[35%] bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]"
    />

    <div class="overlay absolute inset-0 z-[1] bg-[#01070ecc]" />

    <div class="absolute left-[7%] top-[15%] z-[999]">
      <BreadcrumbNavigation :items="breadcrumbItems" />
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
          {{ product.title }}
        </h1>

        <div class="flex gap-2">
          <span
            v-for="badge in product.badges"
            :key="badge"
            class="rounded-[12px] bg-[#323232] px-3 py-1 text-xs text-white"
          >
            {{ badge }}
          </span>
        </div>
      </motion.div>
    </div>
  </section>
</template>
