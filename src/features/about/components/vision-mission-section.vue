<script setup lang="ts">
import { motion } from "motion-v";
import StatementHeading from "@/components/shared/statement-heading.vue";
import BrandLabel from "@/components/shared/brand-label.vue";
import { MISSION_STATEMENTS } from "../constants/about";
</script>

<template>
  <div class="bg-black">
    <section
      :class="[
        'container-wide text-white',
        'grid grid-cols-1 gap-15',
        'lg:grid-cols-[1.2fr_1fr] lg:gap-20',
        'min-[1280px]:gap-32',
        'py-30',
        // < 640px
        'max-sm:py-20',
        // < 1024px
        'max-lg:py-25',
        // < 1280px
        'max-[1920px]:py-25',
      ]"
    >
      <motion.div
        class="text-left"
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 1, delay: 0.3 }"
      >
        <StatementHeading
          align="left"
          brand="OUR VISION"
          statement="To be a trusted technology partner delivering innovative and globally competitive solutions for business advancement in Indonesia."
        />
      </motion.div>

      <motion.div
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 1, delay: 0.7 }"
      >
        <BrandLabel label="OUR MISSION" />

        <ul class="max-lg:mt-4 mt-7 list-disc">
          <li
            v-for="statement in MISSION_STATEMENTS"
            :key="statement"
            :class="[
              'relative mb-[18px] ml-4 text-[clamp(1rem,1.25vw,1.125rem)] leading-normal text-[#e5e5e5]',
              'before:absolute before:left-0 before:top-1 before:text-[18px] before:leading-none before:text-white before:content-[\'•\']',
              'max-sm:text-sm',
            ]"
          >
            {{ statement }}
          </li>
        </ul>
      </motion.div>
    </section>
  </div>
</template>
