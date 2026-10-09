<script setup lang="ts">
import { ref } from "vue";
import StatementHeading from "@/components/shared/statement-heading.vue";
import WhyChooseUs from "./why-choose-us.vue";
import { useSlideDeck } from "@/composables/use-slide-deck.ts";

const sectionRef = ref<HTMLElement | null>(null);
const { currentIndex, handleWheel } = useSlideDeck(sectionRef, 2);
</script>

<template>
  <div>
    <section
      ref="sectionRef"
      class="relative h-screen max-h-screen overflow-hidden bg-[url(/features/home/about-section-bg.webp)] bg-cover bg-center bg-no-repeat text-white"
      @wheel="handleWheel"
    >
      <div
        class="absolute inset-0 z-[1] bg-[radial-gradient(circle,#090f1633_0%,#050c1433_70%)]"
      />

      <div class="relative z-[2] h-full">
        <!-- Slide 1 -->
        <div
          class="slide pointer-events-none absolute inset-0 translate-y-[30px] opacity-0 transition-all duration-700"
          :class="{
            'pointer-events-auto translate-y-0 opacity-100': currentIndex === 0,
          }"
        >
          <div
            class="flex h-full w-full items-center justify-center text-center"
          >
            <StatementHeading
              :brand-delay="0.5"
              statement="PT Simple Journey is an IT consulting company and a provider of Infrastructure Solutions, Digital Solutions, Cross-Industry Solutions, and IT Operation Services."
            />
          </div>
        </div>

        <!-- Slide 2 -->
        <div
          class="slide pointer-events-none absolute inset-0 translate-y-[30px] opacity-0 transition-all duration-700"
          :class="{
            'pointer-events-auto translate-y-0 opacity-100': currentIndex === 1,
          }"
        >
          <div class="flex h-full w-full items-center justify-center">
            <WhyChooseUs :execution="currentIndex === 1" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
