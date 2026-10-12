<script setup lang="ts">
import { motion } from "motion-v";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";
import ContactButton from "@/components/ui/contact-button.vue";
import { BREADCRUMB_ITEMS } from "../constants/breadcrumb";
</script>

<template>
  <section
    :class="[
      'relative overflow-visible text-white',
      'bg-[url(/features/career/hero-bg.webp)] bg-cover bg-center',
      'min-h-[600px] px-20 pb-20 pt-[140px]',
      'max-lg:min-h-[520px] max-lg:px-10 max-lg:pb-15 max-lg:pt-[120px]',
      'max-sm:min-h-[480px] max-sm:px-8 max-sm:pb-10 max-sm:pt-[200px]',
    ]"
  >
    <div
      class="absolute inset-x-0 top-0 z-[2] h-[35%] bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]"
    />

    <div class="absolute inset-0 z-[1] bg-[#01070ecc]" />

    <div
      :class="[
        'absolute left-[7%] z-[999] top-[23%]',
        'max-sm:top-[18%]',
      ]"
    >
      <BreadcrumbNavigation :items="BREADCRUMB_ITEMS" />
    </div>

    <div
      :class="[
        'absolute top-[25%] z-[2] flex w-[90vw] flex-col',
        'max-lg:top-[22%]',
        'max-sm:left-[5%] max-sm:top-[32%] max-sm:items-center',
      ]"
    >
      <motion.div
        :class="[
          'mt-[3%] flex max-w-full flex-col items-center justify-center gap-8 text-center',
        ]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 0.3 }"
      >
        <div>
          <h1
            :class="[
              'text-center font-sans text-[clamp(2rem,2.8vw,2.25rem)] font-medium leading-[150%] tracking-[-0.5px]',
              'max-lg:text-[32px]',
              'max-sm:px-[10%] max-sm:text-[23px] max-sm:leading-[140%]',
            ]"
          >
            Build Your Future with Simple Journey
          </h1>

          <span
            :class="[
              'mt-2.5 block text-center font-sans text-[15px] leading-[175%] text-[#ffffffd9]',
              'max-sm:text-xs',
            ]"
          >
            Join our team and grow your career while contributing to meaningful
            technology solutions.
          </span>
        </div>

        <div class="w-[200px]">
          <a href="#available-positions" class="link-wrapper block">
            <ContactButton label="See Career" :show-icon="false" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
</template>