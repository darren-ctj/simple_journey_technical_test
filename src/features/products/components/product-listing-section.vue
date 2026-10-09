<script setup lang="ts">
import { computed, ref } from "vue";
import { motion } from "motion-v";
import ProductFilters from "./product-filters.vue";
import ProductCard from "./product-card.vue";
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
  <section class="section min-h-[350vh] px-[100px] py-[50px] max-[768px]:px-5">
    <motion.div
      class="product-style absolute top-[48%] z-[9800] w-[90%] max-[768px]:top-[350px] min-[1280px]:left-[7%] min-[1280px]:w-[85vw]"
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
        class="cards grid w-[90%] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 max-[768px]:w-full min-[1280px]:w-full min-[1280px]:gap-12"
      >
        <RouterLink
          v-for="product in filteredProducts"
          :key="product.slug"
          :to="`/products/${product.slug}`"
          class="card-link block"
        >
          <ProductCard :product="product" />
        </RouterLink>
      </div>
    </motion.div>
  </section>
</template>
