<script setup lang="ts">
import { motion } from "motion-v";
import BrandLabel from "@/components/shared/brand-label.vue";
import { WHY_CHOOSE_US_ITEMS } from "../constants/about";
</script>

<template>
  <section class="container-wide pt-2.5 pb-7.5 text-gray-200">
    <div class="mx-auto max-w-[90vw] min-[1280px]:max-w-[85vw]">
      <motion.div
        class="mb-[60px] max-w-[50%] max-md:max-w-full"
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 1, delay: 0.3 }"
      >
        <BrandLabel label="WHY CHOOSE US" class="mb-3 tracking-[2px]" />

        <p
          :class="[
            'text-[2.3rem] font-medium leading-[1.8]',
            'max-lg:text-2xl',
            'max-sm:text-xl max-sm:leading-[1.6] max-sm:tracking-[-0.5px]',
          ]"
        >
          We help organizations navigate technology challenges and optimize
          their digital operations.
        </p>
      </motion.div>
    </div>

    <div class="text-white">
      <div
        :class="[
          'mx-auto flex max-w-[90vw] items-center justify-evenly gap-[60px] px-5',
          'max-md:flex-col',
        ]"
      >
        <motion.div
          class="max-md:mx-auto"
          :initial="{ opacity: 0 }"
          :whileInView="{ opacity: 1 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 1, delay: 0.7 }"
        >
          <video autoplay loop playsinline class="block rounded-xl">
            <source
              src="/features/about/why-choose-us.webm"
              type="video/webm"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>

        <motion.div
          :class="[
            'grid max-w-[50%] grid-cols-2 gap-10',
            'max-md:max-w-full',
            'max-[900px]:grid-cols-1',
          ]"
          :initial="{ opacity: 0 }"
          :whileInView="{ opacity: 1 }"
          :viewport="{ once: true, amount: 0.2 }"
          :transition="{ duration: 1, delay: 0.3 }"
        >
          <div v-for="item in WHY_CHOOSE_US_ITEMS" :key="item.number">
            <span class="text-[1.5rem] font-bold text-blue-500 max-md:text-2xl">
              {{ item.number }}
            </span>

            <h3 class="my-2 text-[1.5rem] font-semibold max-md:text-lg">
              {{ item.title }}
            </h3>

            <p class="text-sm leading-[1.6] text-slate-300">
              {{ item.description }}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
</template>
