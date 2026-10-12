<script setup lang="ts">
import { motion } from "motion-v";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";
import ContactButton from "@/components/ui/contact-button.vue";
import { BREADCRUMB_ITEMS } from "../constants/breadcrumb";
</script>

<template>
  <div class="relative min-h-screen">
    <img
      src="/features/career/hero-section-bg.webp"
      alt=""
      aria-hidden="true"
      fetchpriority="high"
      class="absolute left-0 top-0 z-0 h-full w-full object-cover object-center"
    />

    <div class="absolute left-0 top-0 z-[1] h-full w-full bg-[#01070ecc]" />

    <div
      class="absolute left-0 top-0 z-[2] h-[35%] w-full bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]"
    />

    <section
      :class="[
        'container-wide relative z-[3] text-white',
        'max-sm:pb-10 max-sm:pt-30',
        'max-lg:pb-15 max-lg:pt-30',
        'pb-20 pt-[140px]',
      ]"
    >
      <BreadcrumbNavigation :items="BREADCRUMB_ITEMS" />

      <div class="flex flex-col max-sm:items-center">
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
              Join our team and grow your career while contributing to
              meaningful technology solutions.
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
  </div>
</template>
