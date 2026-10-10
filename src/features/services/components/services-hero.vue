<script setup lang="ts">
import { motion } from "motion-v";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";
import ServiceSolutionsSection from "./service-solutions-section.vue";
import { BREADCRUMB_ITEMS } from "../constants/breadcrumb";
</script>

<template>
  <section
    :class="[
      'box-content',
      'relative overflow-visible',
      'min-h-[900px]',
      'bg-[url(/features/services/bg-1.webp)] bg-cover bg-center bg-no-repeat',
      'px-20 pb-20 pt-[140px]',
      // < 640px
      'max-[640px]:px-5',
      'max-[640px]:pb-[50px] max-[640px]:pt-[100px]',
      // < 1024px
      'max-[1024px]:px-10',
      'max-[1024px]:pb-[60px] max-[1024px]:pt-[120px]',
    ]"
  >
    <div
      :class="[
        'absolute inset-x-0 top-0 z-[2]',
        'h-[35%]',
        'bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]',
      ]"
    />

    <div
      :class="[
        'absolute inset-0 z-[1]',
        'bg-[radial-gradient(circle,#050c148c_0%,#050c14e6_70%)]',
      ]"
    />

    <div class="relative z-[3]">
      <BreadcrumbNavigation :items="BREADCRUMB_ITEMS" />
    </div>

    <div
      :class="[
        'absolute top-[20%] z-[2] flex flex-col',
        'w-[90vw]',
        // < 640px
        'max-[640px]:top-[17%]',
        // < 1024px
        'max-[1024px]:items-start',
        // > 1280px
        'min-[1280px]:left-[7%] min-[1280px]:w-[85vw]',
      ]"
    >
      <motion.div
        class="max-w-full text-center"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 0.3 }"
      >
        <h1
          :class="[
            'font-medium leading-[150%] tracking-[-0.5px]',
            'text-[clamp(2rem,2.8vw,2.25rem)]',
            'mb-6',
            // < 640px
            'max-[640px]:text-xl',
            'max-[640px]:tracking-[1px]',
            // < 1024px
            'max-[1024px]:text-[40px]',
          ]"
        >
          Integrated IT Solutions for Business Growth
        </h1>
      </motion.div>

      <ServiceSolutionsSection />
    </div>
  </section>
</template>
