<script setup lang="ts">
import { motion } from "motion-v";
import BrandLabel from "@/components/shared/brand-label.vue";
import { CAREER_POSITIONS } from "../constants/career";
</script>

<template>
  <section
    :class="[
      'container-narrow relative scroll-mt-[6.25rem] bg-[#01070e] text-white',
      'pb-25 pt-15',
      'max-[900px]:pb-[60px] max-[900px]:pt-[30px]',
    ]"
    id="available-positions"
  >
    <div
      :class="[
        'mb-14 flex flex-col items-center text-center',
        'max-[900px]:mb-8',
      ]"
    >
      <motion.div
        class="mb-2 inline-flex"
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 1 }"
      >
        <BrandLabel
          label="AVAILABLE POSITIONS"
          class="[&_span]:tracking-[0.5px] [&_span]:font-medium"
        />
      </motion.div>

      <motion.h1
        :class="[
          'm-0 text-[clamp(2rem,2.8vw,2.25rem)] font-medium leading-[140%] tracking-[-0.5px]',
          'max-[900px]:text-xl max-[900px]:leading-[1.6]',
        ]"
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 1 }"
      >
        Find Your Opportunity
      </motion.h1>

      <motion.p
        :class="[
          'mt-3 max-w-[600px] text-[15px] text-[#ffffffb3]',
          'max-[900px]:mt-2 max-[900px]:text-xs max-[900px]:leading-[175%]',
        ]"
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 1 }"
      >
        Explore our current openings and find a role that matches your skills
        and aspirations.
      </motion.p>
    </div>

    <div class="mx-auto flex flex-col gap-[1.2rem]">
      <motion.div
        v-for="(position, index) in CAREER_POSITIONS"
        :key="position.slug"
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :viewport="{ once: true, amount: 0.2 }"
        :transition="{ duration: 0.7, delay: index * 0.1 }"
      >
        <RouterLink
          :to="`/career/${position.slug}`"
          :class="[
            'group flex items-center justify-between no-underline text-white',
            'rounded-[14px] border border-[#ffffff26] bg-[#ffffff0d] px-[2.2rem] py-6',
            'shadow-[0_4px_24px_#00000033] backdrop-blur-md',
            'transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]',
            'hover:-translate-y-[3px] hover:border-[#1e88ff73] hover:bg-[#1e88ff1a] hover:shadow-[0_8px_32px_#1e88ff40]',
            'max-[900px]:gap-4 max-[900px]:px-[1.2rem] max-[900px]:py-[1.1rem]',
          ]"
        >
          <div
            :class="[
              'flex items-center gap-12',
              'max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-2',
            ]"
          >
            <h3
              :class="[
                'm-0 min-w-[180px] text-[1.35rem] font-semibold',
                'max-[900px]:min-w-0 max-[900px]:text-base',
              ]"
            >
              {{ position.title }}
            </h3>

            <div
              :class="[
                'flex items-center gap-8',
                'max-[900px]:flex-wrap max-[900px]:gap-4',
              ]"
            >
              <span
                :class="[
                  'flex items-center gap-2 text-[0.95rem]',
                  'max-[900px]:text-xs',
                ]"
              >
                <img
                  fetchpriority="high"
                  loading="lazy"
                  src="/icons/full-time.svg"
                  alt=""
                  aria-hidden="true"
                  class="size-4 shrink-0 object-contain max-[900px]:size-3.5"
                />
                {{ position.employmentType }}
              </span>

              <span
                :class="[
                  'flex items-center gap-2 text-[0.95rem]',
                  'max-[900px]:text-xs',
                ]"
              >
                <img
                  fetchpriority="high"
                  loading="lazy"
                  src="/icons/onsite.svg"
                  alt=""
                  aria-hidden="true"
                  class="size-4 shrink-0 object-contain max-[900px]:size-3.5"
                />

                {{ position.location }}
              </span>
            </div>
          </div>

          <div
            :class="[
              'flex size-11 shrink-0 items-center justify-center rounded-[10px] bg-primary',
              'transition-all duration-300 group-hover:bg-[#2f94ff] group-hover:shadow-[0_4px_15px_#1e88ff80]',
              'max-[900px]:size-[38px]',
            ]"
          >
            <img
              fetchpriority="high"
              loading="lazy"
              class="size-6 object-contain max-[900px]:size-[18px] group-hover:animate-icon-swipe"
              src="/icons/right-arrow.webp"
              alt=""
              aria-hidden="true"
            />
          </div>
        </RouterLink>
      </motion.div>
    </div>
  </section>
</template>
