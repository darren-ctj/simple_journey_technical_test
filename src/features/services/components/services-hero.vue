<script setup lang="ts">
import { motion } from "motion-v";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";
import ServiceSolutionsSection from "./service-solutions-section.vue";
import { BREADCRUMB_ITEMS } from "../constants/breadcrumb";
</script>

<template>
  <div class="relative overflow-hidden">
    <img
      src="/features/services/bg-1.webp"
      alt=""
      aria-hidden="true"
      fetchpriority="high"
      class="absolute inset-0 z-0 h-full w-full object-cover object-center"
    />

    <div
      class="absolute inset-0 z-[1] bg-[radial-gradient(circle,#050c148c_0%,#050c14e6_70%)]"
    />

    <div
      class="absolute inset-x-0 top-0 z-[2] h-[35%] bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]"
    />

    <section
      :class="[
        'container-wide relative z-[3]',
        'pb-20 pt-35',
        // < 1024px
        'max-lg:pb-15 max-lg:pt-30',
        // < 640px
        'max-sm:pb-12 max-sm:pt-25',
      ]"
    >
      <BreadcrumbNavigation :items="BREADCRUMB_ITEMS" />

      <div class="flex flex-col">
        <motion.div
          class="max-w-full text-center"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.3 }"
        >
          <h1
            :class="[
              'mb-6 font-medium leading-normal tracking-[-0.5px]',
              'text-[clamp(2rem,2.8vw,2.25rem)]',
              // < 1024px
              'max-lg:text-4xl',
              // < 640px
              'max-sm:text-xl max-sm:tracking-wide',
            ]"
          >
            Integrated IT Solutions for Business Growth
          </h1>
        </motion.div>

        <ServiceSolutionsSection />
      </div>
    </section>
  </div>
</template>
