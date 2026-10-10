<script setup lang="ts">
import { computed } from "vue";
import { motion } from "motion-v";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";
import type { BreadcrumbItem } from "@/types/breadcrumb";
import type { Product } from "../types/product";
import ProductGallery from "../components/product-gallery.vue";
import ProductSpecsAccordion from "../components/product-specs-accordion.vue";
import ProductCtaCard from "../components/product-cta-card.vue";
import { PRODUCT_DETAILS } from "../constants/product-detail";

const props = defineProps<{
  product: Product;
  breadcrumbItems: BreadcrumbItem[];
}>();

const detailSections = computed(() =>
  props.product ? PRODUCT_DETAILS[props.product.slug] : undefined,
);
</script>

<template>
  <section
    class="box-content relative min-h-screen overflow-hidden bg-[url(/product_hero.webp)] bg-cover bg-center bg-no-repeat px-20 pb-20 pt-[140px] text-white max-[1024px]:px-10 max-[1024px]:pb-[60px] max-[1024px]:pt-[120px] max-[640px]:px-6 max-[640px]:pb-[50px] max-[640px]:pt-[100px]"
  >
    <div
      class="absolute inset-x-0 top-0 z-[2] h-[35%] bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]"
    />

    <div class="absolute inset-0 z-[1] bg-[#01070ecc]" />

    <div class="relative z-[3]">
      <BreadcrumbNavigation :items="breadcrumbItems" />
    </div>

    <div class="relative z-[3] flex flex-col max-[1024px]:items-start">
      <motion.div
        class="max-w-[70%] max-[640px]:max-w-[90%]"
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

      <div
        class="flex w-full justify-between gap-24 max-[768px]:flex-col min-h-[100vh]"
      >
        <div class="w-1/2 max-[768px]:w-full">
          <ProductGallery :product="product" />
          <ProductSpecsAccordion
            v-if="detailSections"
            :sections="detailSections"
          />
        </div>

        <div class="w-1/2 max-[768px]:w-full">
          <ProductCtaCard />
        </div>
      </div>
    </div>
  </section>
</template>
