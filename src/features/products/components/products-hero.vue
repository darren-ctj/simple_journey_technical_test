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
  <section
    :class="[
      'box-content',
      'relative overflow-hidden',
      'min-h-[100vh]',
      'px-20 pb-20 pt-[140px] text-white',
      // < 640px
      'max-[640px]:px-6',
      'max-[640px]:pb-[50px] max-[640px]:pt-[100px]',
      // < 1024px
      'max-[1024px]:px-10',
      'max-[1024px]:pb-[60px] max-[1024px]:pt-[120px]',
    ]"
  >
    <div
      class="absolute left-0 top-0 w-screen h-screen z-0 bg-[url(/features/products/hero-section-bg.webp)] bg-cover bg-center bg-no-repeat"
    />

    <div :class="['absolute inset-0 z-[1]', 'bg-[#01070ecc]']" />

    <div
      :class="[
        'absolute inset-x-0 top-0 z-[2]',
        'h-[35%]',
        'bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]',
      ]"
    />

    <div class="relative z-[3]">
      <BreadcrumbNavigation :items="BREADCRUMB_ITEMS" />
    </div>

    <div class="relative z-[3]">
      <motion.div
        class="max-[640px]:mb-3 mb-4 max-[640px]:max-w-[90%] max-w-[70%]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 0.3 }"
      >
        <h1
          :class="[
            'font-medium leading-[150%] tracking-[-0.5px]',
            'text-[clamp(2rem,2.8vw,2.25rem)]',
            // < 640px
            'max-[640px]:text-xl',
            // < 1024px
            'max-[1024px]:text-[40px]',
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
            'text-base',
            'max-w-[45%]',
            'mb-8',
            // < 640px
            'max-[640px]:text-xs',
            'max-[640px]:max-w-full',
            'max-[640px]:mb-5',
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
          class="grid w-[90%] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-[768px]:w-full min-[1280px]:w-full min-[1280px]:gap-12"
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
    </div>
  </section>
</template>
