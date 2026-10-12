import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../features/home/pages/home-page.vue";

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
      component: () => import("../features/services/pages/services-page.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../features/products/pages/products-page.vue"),
    },
    {
      path: "/products/:slug",
      name: "product-detail",
      component: () =>
        import("../features/products/pages/product-detail-page.vue"),
    },
    {
      path: "/privacy-policy",
      name: "privacy-policy",
      component: () =>
        import("../features/privacy-policy/pages/privacy-policy-page.vue"),
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
