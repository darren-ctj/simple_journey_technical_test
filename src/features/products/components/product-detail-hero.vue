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
  <div
    class="relative min-h-screen overflow-hidden bg-[url(/product_hero.webp)] bg-cover bg-center bg-no-repeat"
  >
    <div class="absolute inset-0 z-[1] bg-[#01070ecc]" />

    <div
      :class="[
        'absolute inset-x-0 top-0 z-[2] h-[35%]',
        'bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]',
      ]"
    />

    <section
      :class="[
        'container-wide relative z-[3]',
        'flex flex-col',
        'pb-20 pt-[140px] text-white',
        // < 1024px
        'max-lg:items-start max-lg:pb-[60px] max-lg:pt-[120px]',
        // < 640px
        'max-sm:pb-[50px] max-sm:pt-[100px]',
      ]"
    >
      <BreadcrumbNavigation :items="breadcrumbItems" />

      <motion.div
        :class="[
          'max-w-[70%]',
          // < 640px
          'max-sm:max-w-[90%]',
        ]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 0.3 }"
      >
        <h1
          :class="[
            'mb-2 font-medium leading-[150%] tracking-[-0.5px]',
            'text-[clamp(2rem,2.8vw,2.25rem)]',
            // < 1024px
            'max-lg:text-[40px]',
            // < 640px
            'max-sm:text-xl',
          ]"
        >
          {{ product.title }}
        </h1>

        <div class="mb-6 flex gap-2">
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
        :class="[
          'flex min-h-[100vh] w-full justify-between gap-24',
          // < 768px
          'max-md:flex-col',
        ]"
      >
        <div
          :class="[
            'w-1/2',
            // < 768px
            'max-md:w-full',
          ]"
        >
          <ProductGallery :product="product" />

          <ProductSpecsAccordion
            v-if="detailSections"
            :sections="detailSections"
          />
        </div>

        <div
          :class="[
            'w-1/2',
            // < 768px
            'max-md:w-full',
          ]"
        >
          <ProductCtaCard />
        </div>
      </div>
    </section>
  </div>
</template>
