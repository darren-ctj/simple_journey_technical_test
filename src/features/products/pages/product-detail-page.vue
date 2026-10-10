<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ProductDetailHero from "../components/product-detail-hero.vue";
import ProductGallery from "../components/product-gallery.vue";
import ProductSpecsAccordion from "../components/product-specs-accordion.vue";
import ProductCtaCard from "../components/product-cta-card.vue";
import OtherProductsSection from "../components/other-products-section.vue";
import { PRODUCTS } from "../constants/product";
import { PRODUCT_DETAILS } from "../constants/product-detail";

const route = useRoute();
const router = useRouter();

const product = computed(() => {
  const slug = Array.isArray(route.params.slug)
    ? route.params.slug[0]
    : route.params.slug;

  return PRODUCTS.find((item) => item.slug === slug);
});

const breadcrumbItems = computed(() => [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: product.value?.title ?? "", to: route.path },
]);

const detailSections = computed(() =>
  product.value ? PRODUCT_DETAILS[product.value.slug] : undefined,
);

const otherProducts = computed(() =>
  PRODUCTS.filter((item) => item.slug !== product.value?.slug).slice(0, 2),
);

watch(
  product,
  (value) => {
    if (!value) router.replace({ path: "/products" });
  },
  { immediate: true },
);
</script>

<template>
  <div v-if="product">
    <ProductDetailHero :product="product" :breadcrumb-items="breadcrumbItems" />

    <section class="section min-h-[100vh] p-[50px_100px]">
      <div
        class="product-style absolute left-[4.5%] top-[40%] z-[6666] w-[90%] max-[768px]:left-[5%] max-[768px]:top-[45%] min-[1280px]:left-[7%] min-[1280px]:w-[96%]"
      >
        <div
          class="cards flex w-full justify-between gap-24 max-[768px]:flex-col"
        >
          <div class="card-left w-1/2 max-[768px]:w-full">
            <ProductGallery :product="product" />

            <ProductSpecsAccordion
              v-if="detailSections"
              :sections="detailSections"
            />
          </div>

          <div class="card-right w-[43%] max-[768px]:w-full">
            <ProductCtaCard />
          </div>
        </div>
      </div>
    </section>

    <OtherProductsSection :products="otherProducts" />
  </div>
</template>
