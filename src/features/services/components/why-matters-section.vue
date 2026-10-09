<script setup lang="ts">
import StatementHeading from "@/components/shared/statement-heading.vue";
import BenefitCard from "./benefit-card.vue";
import { BENEFITS } from "../constants/benefit";
</script>

<template>
  <section
    class="vision-mission relative bg-[url(/features/services/bg-2.webp)] bg-cover bg-center bg-no-repeat p-[100px_9rem] text-white max-[1024px]:p-[100px_40px] max-[640px]:p-6 min-[1921px]:p-[120px_80px]"
  >
    <!-- Placeholder background: replace with /service_features.webp asset when available -->
    <div class="overlay absolute inset-0 z-[1] bg-[#01070e99]" />

    <div
      class="relative z-[1] grid grid-cols-[1.2fr_1fr] items-center gap-20 max-[1024px]:grid-cols-1 max-[1024px]:gap-15 min-[1280px]:gap-32"
    >
      <div class="vision max-w-[600px]">
        <StatementHeading
          align="left"
          brand="WHY THIS IS MATTERS"
          statement="The Business Impact Behind Every Technology Decision"
        />
      </div>

      <div
        class="mission-container flex flex-col gap-8 max-[640px]:-mt-28 max-[640px]:gap-6"
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
