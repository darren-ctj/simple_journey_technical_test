<script setup lang="ts">
import { computed, ref } from "vue";
import { motion } from "motion-v";
import ProductFilters from "./product-filters.vue";
import ProductCard from "@/components/ui/product-card.vue";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";
import { BREADCRUMB_ITEMS } from "../constants/breadcrumb";
import {
  ALL_CATEGORIES,
  CATEGORY_OPTIONS,
  PRODUCTS,
} from "../constants/product";

const searchQuery = ref("");

const selectedCategory = ref(ALL_CATEGORIES);

const filteredProducts = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  return PRODUCTS.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(query);

    const matchesCategory =
      selectedCategory.value === ALL_CATEGORIES ||
      product.badges.includes(selectedCategory.value);

    return matchesSearch && matchesCategory;
  });
});
</script>

<template>
  <div class="relative min-h-screen">
    <img
      src="/features/products/hero-section-bg.webp"
      alt=""
      aria-hidden="true"
      fetchpriority="high"
      class="absolute left-0 top-0 z-0 h-screen w-screen object-cover object-center"
    />

    <div class="absolute left-0 top-0 z-[1] h-screen w-screen bg-[#01070ecc]" />

    <div
      class="absolute left-0 top-0 z-[2] h-[35vh] w-screen bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]"
    />

    <section
      :class="[
        'container-wide relative z-[3]',
        'min-h-screen',
        'pb-20 pt-[140px] text-white',
        // < 640px
        'max-sm:pb-[50px] max-sm:pt-[100px]',
        // < 1024px
        'max-lg:pb-[60px] max-lg:pt-[120px]',
      ]"
    >
      <BreadcrumbNavigation :items="BREADCRUMB_ITEMS" />

      <motion.div
        class="mb-4 max-w-[70%] max-sm:mb-3 max-sm:max-w-[90%]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 0.3 }"
      >
        <h1
          :class="[
            'font-medium leading-[150%] tracking-[-0.5px]',
            'text-[clamp(2rem,2.8vw,2.25rem)]',
            // < 640px
            'max-sm:text-xl',
            // < 1024px
            'max-lg:text-[40px]',
          ]"
        >
          Technology Products Built for Enterprise Needs
        </h1>
      </motion.div>

      <motion.div
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 0.7 }"
      >
        <p
          :class="[
            // < 640px
            'max-sm:mb-8 max-sm:max-w-full max-sm:text-xs',

            'mb-18 max-w-[45%] text-base',
          ]"
        >
          Our products are designed to address real operational challenges
          across industries, ensuring reliability, scalability, and seamless
          integration with existing systems.
        </p>
      </motion.div>

      <motion.div
        :initial="{ opacity: 0, y: 30 }"
        :whileInView="{ opacity: 1, y: 0 }"
        :viewport="{ once: true, amount: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <ProductFilters
          v-model:search="searchQuery"
          v-model:category="selectedCategory"
          :categories="CATEGORY_OPTIONS"
        />

        <div
          class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-md:w-full xl:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] xl:gap-12"
        >
          <RouterLink
            v-for="product in filteredProducts"
            :key="product.slug"
            :to="`/products/${product.slug}`"
            class="block"
          >
            <ProductCard
              :badges="product.badges"
              :image="`features/products/${product.image}`"
              :title="product.title"
            />
          </RouterLink>
        </div>
      </motion.div>
    </section>
  </div>
</template>
