<script setup lang="ts">
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import ProductDetailHero from "../components/product-detail-hero.vue";
import OtherProductsSection from "../components/other-products-section.vue";
import { PRODUCTS } from "../constants/product";

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
    <OtherProductsSection :products="otherProducts" />
  </div>
</template>
