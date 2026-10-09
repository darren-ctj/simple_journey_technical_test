<script setup lang="ts">
import { computed, ref } from "vue";
import type { Product } from "../types/product";

const props = defineProps<{
  product: Product;
}>();

const activeIndex = ref(0);

/**
 * The original page renders four gallery slots per product. All slots use the
 * product's single image until dedicated gallery assets are provided.
 */
const galleryImages = computed(() =>
  Array.from({ length: 4 }, () => props.product.image),
);

function handleThumbnailSelect(index: number) {
  activeIndex.value = index;
}

function handlePagerPreviousClick() {
  activeIndex.value =
    (activeIndex.value - 1 + galleryImages.value.length) %
    galleryImages.value.length;
}

function handlePagerNextClick() {
  activeIndex.value = (activeIndex.value + 1) % galleryImages.value.length;
}
</script>

<template>
  <div class="card-link">
    <div
      class="main-product-scale product-card rounded-2xl border border-white/5 bg-white/5 shadow-[0_4px_30px_#0000001a] backdrop-blur-[6.5px]"
      :title="product.title"
    >
      <div class="image-wrapper relative overflow-hidden rounded-[12px]">
        <img
          :src="galleryImages[activeIndex]"
          :alt="product.title"
          class="block h-full w-full rounded-[12px] object-contain"
        />
      </div>
    </div>
  </div>

  <!-- Desktop thumbnails -->
  <div
    class="mobile-off mt-5 grid w-full grid-cols-4 gap-[1.4rem] max-[768px]:hidden"
  >
    <div
      v-for="(image, index) in galleryImages"
      :key="index"
      class="product-scale product-card cursor-pointer rounded-2xl border border-white/5 bg-white/5 shadow-[0_4px_30px_#0000001a] backdrop-blur-[6.5px] hover:scale-105"
      @click="handleThumbnailSelect(index)"
    >
      <div class="image-wrapper relative overflow-hidden rounded-[12px]">
        <img
          :src="image"
          :alt="`${product.title} view ${index + 1}`"
          class="block h-full w-full rounded-[12px] object-contain"
        />
      </div>
    </div>
  </div>

  <!-- Mobile pager -->
  <div
    class="mobile-on hidden w-full my-8 max-[768px]:flex max-[768px]:items-center max-[768px]:justify-between"
  >
    <div class="pager flex gap-[1.1rem]">
      <button
        type="button"
        aria-label="Previous image"
        class="pager-btn flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-[#38bdf8] bg-transparent transition-all duration-300 hover:scale-105 hover:bg-[#38bdf81a] hover:shadow-[0_0_18px_#38bdf899] active:scale-95"
        @click="handlePagerPreviousClick"
      >
        <svg viewBox="0 0 24 24" class="h-[22px] w-[22px] fill-none stroke-[#38bdf8] stroke-[2.5]">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next image"
        class="pager-btn flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border-2 border-[#38bdf8] bg-transparent transition-all duration-300 hover:scale-105 hover:bg-[#38bdf81a] hover:shadow-[0_0_18px_#38bdf899] active:scale-95"
        @click="handlePagerNextClick"
      >
        <svg viewBox="0 0 24 24" class="h-[22px] w-[22px] fill-none stroke-[#38bdf8] stroke-[2.5]">
          <path d="M9 6l6 6-6 6" />
        </svg>
      </button>
    </div>

    <div class="rounded-[10px] text-gray-500">
      {{ activeIndex + 1 }} / {{ galleryImages.length }}
    </div>
  </div>
</template>
