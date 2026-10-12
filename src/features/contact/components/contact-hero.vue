<script setup lang="ts">
import { motion } from "motion-v";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";
import BrandLabel from "@/components/shared/brand-label.vue";
import OfficeInfoCard from "./office-info-card.vue";
import ContactForm from "./contact-form.vue";
import { BREADCRUMB_ITEMS, OFFICE_INFO_CARDS } from "../constants/contact";
</script>

<template>
  <section
    :class="[
      'relative min-h-[94vh] overflow-hidden text-white',
      'px-20 pb-20 pt-[140px]',
      'max-lg:px-10 max-lg:pb-[60px] max-lg:pt-[120px]',
      'max-sm:px-6 max-sm:pb-[50px] max-sm:pt-[100px]',
    ]"
  >
    <video
      class="absolute inset-0 z-0 h-full w-full object-cover max-md:object-fill"
      autoplay
      loop
      playsinline
    >
      <source src="/features/contact/hero-bg.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>

    <div
      class="absolute inset-x-0 top-0 z-[2] h-[35%] bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]"
    />

    <div
      :class="[
        'absolute inset-0 z-[1] bg-[#01070ecc]',
        'max-sm:bg-[#01070e4d]',
      ]"
    />

    <div
      :class="[
        'absolute left-[7%] top-[16%] z-[999]',
        'max-sm:left-[6%] max-sm:top-[138px]',
      ]"
    >
      <BreadcrumbNavigation :items="BREADCRUMB_ITEMS" />
    </div>

    <div
      :class="[
        'absolute top-[20%] z-[2] flex w-[90vw] flex-col',
        'xl:left-[7%] xl:w-[85vw]',
        'max-sm:relative max-sm:left-[-1%] max-sm:top-[90px] max-sm:w-full',
      ]"
    >
      <motion.div
        class="max-w-[30%] max-lg:max-w-full max-sm:max-w-[90%]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 0.3 }"
      >
        <h1
          :class="[
            'font-medium leading-[150%] tracking-[-0.5px]',
            'text-[clamp(2rem,2.8vw,2.25rem)]',
            'max-lg:text-[40px] max-sm:text-xl',
          ]"
        >
          Let’s Discuss Your Digital Transformation Needs
        </h1>
      </motion.div>

      <motion.div
        class="max-w-[35%] max-lg:max-w-full max-sm:max-w-full"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 0.7 }"
      >
        <p
          :class="[
            'text-base font-normal leading-[2] tracking-[1px]',
            'max-sm:mt-[-0.2rem] max-sm:text-xs',
          ]"
        >
          Connect with our team to explore tailored technology solutions that
          align with your business objectives.
        </p>
      </motion.div>

      <motion.div
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 1 }"
      >
        <section class="ml-3.5 mt-12 text-left">
          <BrandLabel label="OUR OFFICE" class="tracking-[2px]" />
        </section>

        <div
          :class="[
            'flex w-full',
            'max-sm:flex-col',
          ]"
        >
          <div class="flex flex-1 flex-col gap-4">
            <OfficeInfoCard
              v-for="card in OFFICE_INFO_CARDS"
              :key="card.label"
              :icon="card.icon"
              :label="card.label"
              :value="card.value"
            />
          </div>

          <div class="flex-1">
            <ContactForm />
          </div>
        </div>
      </motion.div>
    </div>
  </section>
</template>