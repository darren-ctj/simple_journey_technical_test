<script setup lang="ts">
import StatementHeading from "@/components/shared/statement-heading.vue";
import BenefitCard from "./benefit-card.vue";
import { BENEFITS } from "../constants/benefit";
</script>

<template>
  <section
    :class="[
      'box-content relative',
      'bg-[url(/features/services/bg-2.webp)]',
      'text-white',
      'p-[100px_9rem]',
      // < 640px
      'max-[640px]:p-[48px_24px]',
      // < 1024px
      'max-[1024px]:p-[100px_40px]',
      // < 1921px
      'min-[1921px]:p-[120px_80px]',
    ]"
  >
    <div :class="['absolute inset-0 z-[1]', 'bg-[#01070e99]']" />

    <div
      :class="[
        'relative z-[1] grid grid-cols-[1.2fr_1fr]',
        'gap-20',
        // < 1024px
        'max-[1024px]:grid-cols-1 max-[1024px]:gap-12',
        // ≥ 1280px
        'min-[1280px]:gap-32',
      ]"
    >
      <div class="max-w-[600px]">
        <StatementHeading
          align="left"
          brand="WHY THIS IS MATTERS"
          statement="The Business Impact Behind Every Technology Decision"
        />
      </div>

      <div
        :class="[
          'flex flex-col gap-8',
          // < 640px
          'max-[640px]:gap-6',
        ]"
      >
        <BenefitCard
          v-for="(benefit, index) in BENEFITS"
          :key="benefit.title"
          :benefit="benefit"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>
