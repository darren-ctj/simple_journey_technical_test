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
    <section class="px-0 text-white">
      <motion.div
        :class="[
          'mx-auto flex flex-wrap items-center justify-center',
          'mb-16 max-w-[90vw] gap-5',
          'max-[768px]:mb-[1.3rem]',
          'max-[768px]:flex-nowrap max-[768px]:justify-start',
          'max-[768px]:gap-3 max-[768px]:overflow-x-auto',
          'max-[768px]:pb-2 max-[768px]:[scrollbar-width:none]',
        ]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 1 }"
      >
        <button
          v-for="(solution, index) in SOLUTIONS"
          :key="solution.label"
          type="button"
          :class="[
            'text-sm',
            'mt-4 cursor-pointer whitespace-nowrap rounded-full border-2',
            'bg-transparent',
            'px-[6rem] py-[1.4rem]',
            'transition-all duration-300 hover:bg-[#2f6fed26]',
            'max-[768px]:min-w-[15rem] max-[768px]:shrink-0',
            'max-[768px]:px-[1.6rem] max-[768px]:py-[0.8rem]',
            activeIndex === index
              ? 'border-primary text-primary'
              : 'border-white text-[#cbd5e1]',
          ]"
          @click="handleTabSelect(index)"
        >
          {{ solution.label }}
        </button>
      </motion.div>

      <!-- Desktop -->
      <motion.div
        :class="[
          'relative mx-auto grid grid-cols-[1fr_1fr] items-center',
          'w-full max-w-[1300px] gap-[60px] rounded-lg',
          'border-[1.3px] border-[#cbd5e1] bg-[#0d131f]',
          'max-[900px]:hidden',
        ]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 1.5 }"
      >
        <button
          type="button"
          aria-label="Previous"
          :class="[
            'absolute top-1/2 z-10 flex -translate-y-1/2',
            'h-[50px] w-[50px] cursor-pointer items-center justify-center',
            '-left-[25px]',
            'rounded-lg border border-[#1e90ff66]',
            'bg-[linear-gradient(135deg,#06080a_0%,#1565c0_500%)]',
            'p-0 text-[32px] leading-none text-[#1e90ff]',
            'transition-all duration-300',
            'hover:scale-110 hover:border-[#1e90ff99]',
            'hover:bg-[#1e88ff4d] hover:text-[#2196f3]',
            'active:scale-95',
          ]"
          @click="handlePreviousClick"
        >
          ‹
        </button>

        <SolutionVideoStack
          :solutions="SOLUTIONS"
          :active-index="activeIndex"
        />

        <div>
          <h2
            :class="[
              'mb-5 text-[clamp(2rem,2.8vw,2.25rem)]',
              'font-medium leading-[150%] tracking-[-0.5px]',
              // Tablet
              'max-[900px]:text-[28px]',
            ]"
          >
            {{ activeSolution?.label }}
          </h2>

          <p :class="['max-w-[80%]', 'text-base leading-[175%] tracking-[2%]']">
            {{ activeSolution?.description }}
          </p>
        </div>

        <button
          type="button"
          aria-label="Next"
          :class="[
            'absolute top-1/2 z-10 flex -translate-y-1/2',
            'h-[50px] w-[50px] cursor-pointer items-center justify-center',
            '-right-[25px]',
            'rounded-lg border border-[#1e90ff66]',
            'bg-[linear-gradient(135deg,#06080a_0%,#1565c0_500%)]',
            'p-0 text-[32px] leading-none text-[#1e90ff]',
            'transition-all duration-300',
            'hover:scale-110 hover:border-[#1e90ff99]',
            'hover:bg-[#1e88ff4d] hover:text-[#2196f3]',
            'active:scale-95',
          ]"
          @click="handleNextClick"
        >
          ›
        </button>
      </motion.div>

      <!-- Mobile -->
      <motion.div
        :class="[
          'hidden flex-col rounded-lg',
          'mb-10 h-[65vh]',
          'border-[0.2px] border-[#f7f3f3fb]',
          'max-[900px]:flex max-[900px]:h-auto',
          'max-[900px]:gap-0 max-[900px]:p-[18px]',
        ]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 1.5 }"
      >
        <div class="flex-1">
          <h2
            :class="[
              'my-4 text-[20px] font-medium',
              'leading-[150%] tracking-[-0.5px]',
            ]"
          >
            {{ activeSolution?.label }}
          </h2>

          <p
            :class="[
              'text-[14px] leading-[175%]',
              'tracking-[2%] text-[#cbd5f5]',
              'mb-3.5',
            ]"
          >
            {{ activeSolution?.description }}
          </p>
        </div>

        <div class="flex flex-1 justify-center">
          <SolutionVideoStack
            :solutions="SOLUTIONS"
            :active-index="activeIndex"
          />
        </div>

        <button
          type="button"
          aria-label="Previous"
          :class="[
            'absolute top-1/2 z-10 flex -translate-y-1/2',
            'h-[50px] w-[50px] cursor-pointer items-center justify-center',
            '-left-[25px]',
            'rounded-lg border border-[#1e90ff66]',
            'bg-[linear-gradient(135deg,#06080a_0%,#1565c0_500%)]',
            'p-0 text-[32px] leading-none text-[#1e90ff]',
            'transition-all duration-300',
            'hover:scale-110 hover:border-[#1e90ff99]',
            'hover:bg-[#1e88ff4d] hover:text-[#2196f3]',
            'active:scale-95',
          ]"
          @click="handlePreviousClick"
        >
          ‹
        </button>

        <button
          type="button"
          aria-label="Next"
          :class="[
            'absolute top-1/2 z-10 flex -translate-y-1/2',
            'h-[50px] w-[50px] cursor-pointer items-center justify-center',
            '-right-[25px]',
            'rounded-lg border border-[#1e90ff66]',
            'bg-[linear-gradient(135deg,#06080a_0%,#1565c0_500%)]',
            'p-0 text-[32px] leading-none text-[#1e90ff]',
            'transition-all duration-300',
            'hover:scale-110 hover:border-[#1e90ff99]',
            'hover:bg-[#1e88ff4d] hover:text-[#2196f3]',
            'active:scale-95',
          ]"
          @click="handleNextClick"
        >
          ›
        </button>
      </motion.div>
    </section>
  </div>
</template>
