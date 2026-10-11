<script setup lang="ts">
import ProductCard from "@/components/ui/product-card.vue";
import type { Product } from "../types/product";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <div
    :class="[
      'relative bg-[url(/product_others_hero.webp)]',
      'bg-cover bg-center bg-no-repeat',
    ]"
  >
    <div class="absolute inset-0 z-0 bg-[#050c1480]" />

    <section class="container-narrow relative max-md:py-5 py-10">
      <div
        :class="[
          'flex items-center justify-between mb-6 text-white',
          // < 768px
          'max-md:mb-2 max-md:flex-col max-md:items-start',
        ]"
      >
        <h1
          class="max-w-[30%] max-md:max-w-[50%] text-[32px] font-medium max-md:text-xl max-md:mb-2"
        >
          Other Products
        </h1>

        <div
          :class="[
            'max-w-[20%]',
            // < 768px
            'max-md:mt-[-2rem] max-md:max-w-full max-md:leading-[2]',
          ]"
        >
          <RouterLink
            to="/products"
            class="mt-6 inline-block cursor-pointer text-[#4da3ff] no-underline"
          >
            View More →
          </RouterLink>
        </div>
      </div>

      <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
        <RouterLink
          v-for="product in products"
          :key="product.slug"
          :to="`/products/${product.slug}`"
          class="block"
        >
          <ProductCard
            :badges="product.badges"
            :image="`/features/products/${product.image}`"
            :title="product.title"
          />
        </RouterLink>
      </div>
    </section>
  </div>
</template>
