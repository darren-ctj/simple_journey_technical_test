<script setup lang="ts">
import ProductCard from "./product-card.vue";
import type { Product } from "../types/product";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <section
    class="products-section relative z-[999] bg-[url(/product_others_hero.webp)] bg-cover bg-center bg-no-repeat p-10 text-white max-[768px]:p-5 min-[1280px]:px-[10rem]"
  >
    <!-- Placeholder background: replace with /product_others_hero.webp asset when available -->
    <div class="overlay absolute inset-0 z-0 bg-[#050c1480]" />

    <div class="header relative mb-6 flex items-center justify-between max-[768px]:mb-[5px] max-[768px]:flex-col max-[768px]:items-start">
      <div class="left max-w-[30%] max-[768px]:max-w-[50%]">
        <h1 class="text-[32px] font-medium max-[768px]:text-xl">
          Other Products
        </h1>
      </div>

      <div class="right max-w-[20%] max-[768px]:mt-[-2rem] max-[768px]:max-w-full max-[768px]:leading-[2]">
        <RouterLink
          to="/products"
          class="view-more mt-6 inline-block cursor-pointer text-[#4da3ff] no-underline"
        >
          View More →
        </RouterLink>
      </div>
    </div>

    <div
      class="cards grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6"
    >
      <RouterLink
        v-for="product in products"
        :key="product.slug"
        :to="`/products/${product.slug}`"
        class="card-link block"
      >
        <ProductCard :product="product" />
      </RouterLink>
    </div>
  </section>
</template>
