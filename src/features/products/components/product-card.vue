<script setup lang="ts">
import type { Product } from "../types/product";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div
    class="product-card rounded-2xl border border-white/5 bg-white/5 shadow-[0_4px_30px_#0000001a] backdrop-blur-[6.5px]"
  >
    <div class="image-wrapper relative h-full overflow-hidden rounded-[12px]">
      <!-- Badge placement mirrors the original `.badge` offsets (top 3%, left 2%) -->
      <div class="absolute left-[2%] top-[3%] z-10 flex gap-2">
        <span
          v-for="badge in product.badges"
          :key="badge"
          class="rounded-[12px] bg-[#323232] px-3 py-1 text-xs text-white"
        >
          {{ badge }}
        </span>
      </div>

      <img
        :src="`/features/products${product.image}`"
        :alt="product.title"
        class="block h-full w-full rounded-[12px] object-contain"
      />
    </div>

    <h3 class="mt-2 text-base">{{ product.title }}</h3>
  </div>
</template>
