<script setup lang="ts">
import StatementHeading from "@/components/shared/statement-heading.vue";
import BenefitCard from "./benefit-card.vue";
import { BENEFITS } from "../constants/benefit";
</script>

<template>
  <div class="relative bg-[url(/features/services/bg-2.webp)]">
    <div class="absolute inset-0 z-[1] bg-[#01070e99]" />

    <section
      :class="[
        'container-wide relative z-[1] grid grid-cols-[1.2fr_1fr]',
        'gap-20 py-25 text-white',
        // < 1280px
        'max-xl:gap-20',
        // < 1024px
        'max-lg:grid-cols-1 max-lg:gap-12',
        // < 640px
        'max-sm:gap-6 max-sm:py-12',
      ]"
    >
      <div class="max-w-[600px]">
        <StatementHeading
          align="left"
          brand="WHY THIS IS MATTERS"
          statement="The Business Impact Behind Every Technology Decision"
        />
      </div>

      <div class="flex flex-col gap-8 max-sm:gap-6">
        <BenefitCard
          v-for="(benefit, index) in BENEFITS"
          :key="benefit.title"
          :benefit="benefit"
          :index="index"
        />
      </div>
    </section>
  </div>
</template>
