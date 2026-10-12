<script setup lang="ts">
import { motion } from "motion-v";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";
import ContactButton from "@/components/ui/contact-button.vue";
import { BREADCRUMB_ITEMS } from "../constants/breadcrumb";
</script>

<template>
  <section class="relative min-h-screen">
    <img
      src="/features/about/hero-section-bg.webp"
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
        // < 640px
        ' max-sm:pb-[50px] max-sm:pt-[100px]',
        // < 1024px
        'max-lg:pb-15 max-lg:pt-[120px]',
        //
        'pb-20 pt-[140px]',
      ]"
    >
      <BreadcrumbNavigation :items="BREADCRUMB_ITEMS" />

      <div class="flex flex-col max-lg:items-start">
        <motion.div
          class="max-w-[50%] max-lg:max-w-full max-sm:max-w-[90%] max-sm:mb-3 mb-6"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.3 }"
        >
          <h1
            :class="[
              'font-medium leading-[150%] tracking-[-0.5px]',
              'text-[clamp(2rem,2.8vw,2.25rem)]',
              'max-lg:text-xl max-sm:text-xl',
            ]"
          >
            Your trusted partner in digital transformation and technology
            solutions.
          </h1>
        </motion.div>

        <motion.div
          class="max-w-[40%] max-lg:max-w-full max-sm:max-w-full"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.7 }"
        >
          <p
            :class="[
              'font-sans text-base leading-[175%] tracking-[2%]',
              'max-sm:-my-0.5 max-sm:text-xs max-sm:tracking-normal',
            ]"
          >
            PT Simple Journey is an IT consulting company and a provider of
            Infrastructure Solutions, Digital Solutions, Cross-Industry
            Solutions, and IT Operation Services. We deliver IT solutions to
            businesses on a global scale by providing IT experts with flexible
            arrangements to help our clients adapt to the digital world.
          </p>
        </motion.div>

        <motion.div
          class="mt-4 hidden max-sm:block"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 1 }"
        >
          <RouterLink to="/contact" class="link-wrapper block">
            <ContactButton label="Let's Get Started" />
          </RouterLink>
        </motion.div>
      </div>
    </section>
  </section>
</template>
