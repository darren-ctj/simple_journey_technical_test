<script setup lang="ts">
import { computed, ref } from "vue";
import { motion } from "motion-v";
import SolutionVideoStack from "./solution-video-stack.vue";
import { SOLUTIONS } from "../constants/solution";

const activeIndex = ref(0);
const activeSolution = computed(() => SOLUTIONS[activeIndex.value]);

function handleTabSelect(index: number) {
  activeIndex.value = index;
}

function handlePreviousClick() {
  activeIndex.value =
    (activeIndex.value - 1 + SOLUTIONS.length) % SOLUTIONS.length;
}

function handleNextClick() {
  activeIndex.value = (activeIndex.value + 1) % SOLUTIONS.length;
}
</script>

<template>
  <div>
    <section class="solution-section px-0 text-white max-[768px]:px-0">
      <!-- Tabs -->
      <motion.div
        class="mx-auto mb-16 flex max-w-[90vw] flex-wrap items-center justify-center gap-5 max-[768px]:mb-[1.3rem] max-[768px]:flex-nowrap max-[768px]:justify-start max-[768px]:gap-3 max-[768px]:overflow-x-auto max-[768px]:pb-2 max-[768px]:[scrollbar-width:none]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 1 }"
      >
        <button
          v-for="(solution, index) in SOLUTIONS"
          :key="solution.label"
          type="button"
          class="mt-4 cursor-pointer whitespace-nowrap rounded-full border-2 border-white bg-transparent px-[6rem] py-[1.4rem] text-[#cbd5e1] transition-all duration-300 hover:bg-[#2f6fed26] max-[768px]:min-w-[15rem] max-[768px]:flex-shrink-0 max-[768px]:px-[1.6rem] max-[768px]:py-[0.8rem] max-[768px]:text-sm"
          :class="{
            'border-primary text-primary': activeIndex === index,
          }"
          @click="handleTabSelect(index)"
        >
          {{ solution.label }}
        </button>
      </motion.div>

      <!-- Desktop carousel -->
      <motion.div
        class="relative mx-auto grid w-[1300px] max-w-full grid-cols-[1fr_1fr] items-center gap-[60px] rounded-lg border-[1.3px] border-[#cbd5e1] bg-[#0d131f] max-[900px]:grid-cols-1 max-[900px]:text-center max-[768px]:hidden"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 1.5 }"
      >
        <button
          type="button"
          aria-label="Previous"
          class="absolute -left-[25px] top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg border border-[#1e90ff66] bg-[linear-gradient(135deg,#06080a_0%,#1565c0_500%)] p-0 text-[32px] leading-none text-[#1e90ff] transition-all duration-300 hover:scale-110 hover:border-[#1e90ff99] hover:bg-[#1e88ff4d] hover:text-[#2196f3] active:scale-95"
          @click="handlePreviousClick"
        >
          ‹
        </button>

        <SolutionVideoStack :solutions="SOLUTIONS" :active-index="activeIndex" />

        <div class="text">
          <h2
            class="mb-5 font-medium leading-[150%] tracking-[-0.5px] text-[clamp(2rem,2.8vw,2.25rem)] max-[900px]:text-[28px]"
          >
            {{ activeSolution?.label }}
          </h2>
          <p class="max-w-[80%] text-base leading-[175%] tracking-[2%]">
            {{ activeSolution?.description }}
          </p>
        </div>

        <button
          type="button"
          aria-label="Next"
          class="absolute -right-[25px] top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg border border-[#1e90ff66] bg-[linear-gradient(135deg,#06080a_0%,#1565c0_500%)] p-0 text-[32px] leading-none text-[#1e90ff] transition-all duration-300 hover:scale-110 hover:border-[#1e90ff99] hover:bg-[#1e88ff4d] hover:text-[#2196f3] active:scale-95"
          @click="handleNextClick"
        >
          ›
        </button>
      </motion.div>

      <!-- Mobile carousel card -->
      <motion.div
        class="service-card content-mobile mb-10 hidden max-h-[65vh] min-h-[65vh] rounded-lg border-[0.2px] border-[#f7f3f3fb] max-[768px]:flex max-[768px]:h-auto max-[768px]:flex-col max-[768px]:gap-0 max-[768px]:p-[18px]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 1.5 }"
      >
        <div class="content-service flex-1">
          <h2
            class="mb-4 text-[20px] font-medium leading-[150%] tracking-[-0.5px]"
          >
            {{ activeSolution?.label }}
          </h2>
          <p class="text-[14px] leading-[175%] tracking-[2%] text-[#cbd5f5]">
            {{ activeSolution?.description }}
          </p>
        </div>

        <div class="image-service flex flex-1 justify-center">
          <SolutionVideoStack
            :solutions="SOLUTIONS"
            :active-index="activeIndex"
          />
        </div>

        <button
          type="button"
          aria-label="Previous"
          class="absolute -left-[25px] top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg border border-[#1e90ff66] bg-[linear-gradient(135deg,#06080a_0%,#1565c0_500%)] p-0 text-[32px] leading-none text-[#1e90ff] transition-all duration-300 hover:scale-110 hover:border-[#1e90ff99] hover:bg-[#1e88ff4d] hover:text-[#2196f3] active:scale-95"
          @click="handlePreviousClick"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Next"
          class="absolute -right-[25px] top-1/2 z-10 flex h-[50px] w-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg border border-[#1e90ff66] bg-[linear-gradient(135deg,#06080a_0%,#1565c0_500%)] p-0 text-[32px] leading-none text-[#1e90ff] transition-all duration-300 hover:scale-110 hover:border-[#1e90ff99] hover:bg-[#1e88ff4d] hover:text-[#2196f3] active:scale-95"
          @click="handleNextClick"
        >
          ›
        </button>
      </motion.div>
    </section>
  </div>
</template>
