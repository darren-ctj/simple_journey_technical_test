import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../features/home/pages/home-page.vue";
import ServicesPage from "../features/services/pages/services-page.vue";
import ProductsPage from "../features/products/pages/products-page.vue";
import ProductDetailPage from "../features/products/pages/product-detail-page.vue";
import PrivacyPolicyPage from "../features/privacy-policy/pages/privacy-policy-page.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesPage,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsPage,
    },
    {
      path: "/products/:slug",
      name: "product-detail",
      component: ProductDetailPage,
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: PrivacyPolicyPage,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: "smooth" };

    return { top: 0 };
  },
});

export default router;
