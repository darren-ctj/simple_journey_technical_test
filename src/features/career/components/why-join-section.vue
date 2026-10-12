<script setup lang="ts">
import { motion } from "motion-v";
import StatementHeading from "@/components/shared/statement-heading.vue";
</script>

<template>
  <section class="container-narrow relative text-white max-md:py-[30px] py-10">
    <div
      :class="[
        'mb-6 flex items-center justify-between',
        'max-md:flex-col max-md:items-start max-md:gap-0 max-md:mb-0',
      ]"
    >
      <div class="max-w-[20%] max-md:max-w-full">
        <StatementHeading
          align="left"
          brand="WHY JOIN US"
          statement="Build Your Career. Make an Impact"
        />
      </div>

      <motion.div
        class="max-w-[50%] leading-[2] max-md:mt-0.5 max-md:mb-8 max-md:max-w-full"
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 1, delay: 1 }"
      >
        <p
          :class="[
            'text-inherit',
            'max-md:text-xs max-md:leading-[175%] max-md:tracking-normal max-md:text-[#ffffffd9]',
          ]"
        >
          At SimpleJourney, we believe that great work starts with people who
          are given the opportunity to learn, grow, and take on meaningful
          challenges. We foster a collaborative environment where every
          individual can develop their skills while contributing to real-world
          technology solutions.
        </p>
      </motion.div>
    </div>

    <div
      :class="[
        'relative z-[5] mt-1.5 flex items-stretch gap-1.5',
        'max-md:flex-col',
      ]"
    >
      <motion.div
        class="flex-[2] overflow-hidden rounded-[20px] shadow-[0_12px_30px_#00000059]"
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 1 }"
      >
        <img
          fetchpriority="high"
          loading="lazy"
          src="/features/career/why-join-us-1.webp"
          alt="Team Collaboration"
          :class="[
            'block h-[35rem] w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.02]',
            'max-md:h-[240px]',
          ]"
        />
      </motion.div>

      <motion.div
        class="flex-1 overflow-hidden rounded-[20px] shadow-[0_12px_30px_#00000059] max-md:hidden"
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 1 }"
      >
        <img
          fetchpriority="high"
          loading="lazy"
          src="/features/career/why-join-us-2.webp"
          alt="Career Focus"
          class="block h-[35rem] w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:scale-[1.02]"
        />
      </motion.div>
    </div>
  </section>
</template>
