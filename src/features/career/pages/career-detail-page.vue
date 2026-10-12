<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { motion } from "motion-v";
import {
  APPLY_FORM_URL,
  CAREER_POSITION_DETAILS,
} from "../constants/career-detail";
import { CAREER_POSITIONS } from "../constants/career";
import { BREADCRUMB_ITEMS } from "../constants/breadcrumb.ts";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";

const route = useRoute();

const position = computed(() =>
  CAREER_POSITIONS.find((item) => item.slug === route.params.slug),
);

const positionTitle = computed(
  () => position.value?.title ?? `Shift Engineer - ${route.params.slug}`,
);

const positionDetail = computed(
  () => CAREER_POSITION_DETAILS[String(route.params.slug)],
);

const breadcrumbItems = computed(() => [
  ...BREADCRUMB_ITEMS,
  { label: String(route.params.slug), to: `/career/${route.params.slug}` },
]);

const sidebarMetaItems = computed(() => [
  {
    label: position.value?.employmentType ?? "Full Time",
    iconPath: "/icons/full-time.svg",
  },
  {
    label: position.value?.location ?? "Onsite - Tangerang",
    iconPath: "/icons/onsite.svg",
  },
]);
</script>

<template>
  <div class="relative">
    <img
      src="/features/career/hero-section-bg.webp"
      alt=""
      aria-hidden="true"
      fetchpriority="high"
      class="absolute left-0 top-0 z-0 h-screen w-screen object-cover object-center"
    />

    <div
      class="absolute left-0 top-0 z-[1] h-screen w-screen bg-gradient-to-b from-[#01070e4d] via-[#01070ebf] via-65% to-[#01070e]"
    />

    <div
      class="absolute left-0 top-0 z-[2] h-[35vh] w-screen bg-gradient-to-b from-[#010304] via-[#01030433] via-60% to-[#01030400]"
    />

    <main
      :class="[
        'container-wide relative z-[3] text-white',
        'max-lg:pt-30',
        'pt-35',
      ]"
    >
      <BreadcrumbNavigation :items="breadcrumbItems" />

      <motion.div
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1 }"
      >
        <h1
          :class="[
            'mb-2.5 font-sans text-[clamp(2rem,3vw,2.5rem)] font-medium tracking-[-0.5px]',
            'max-sm:mb-4 max-sm:text-[23px] max-sm:leading-[140%]',
          ]"
        >
          {{ positionTitle }}
        </h1>

        <span
          :class="[
            'inline-block rounded-full border border-[#ffffff26] bg-[#ffffff14] px-4 py-1.5 text-[0.85rem] font-medium text-[#ffffffd9]',
            'max-sm:px-3 max-sm:py-1 max-sm:text-[11px]',
          ]"
        >
          1 Position
        </span>
      </motion.div>

      <div
        :class="[
          'flex items-start justify-between',
          'max-sm:gap-10 max-sm:pb-[60px] max-sm:mt-8',
          'max-lg:flex-col max-lg:gap-12 max-lg:pb-20 max-lg:mt-14',
          'gap-20 pb-30 mt-16',
        ]"
      >
        <motion.section
          class="flex-[3] max-sm:space-y-8 space-y-11"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.2 }"
        >
          <div>
            <h2
              class="mb-4 text-[1.4rem] font-medium max-sm:mb-1.5 max-sm:text-[17px]"
            >
              Description
            </h2>

            <p
              class="m-0 text-[15px] leading-[1.8] text-[#fffc] max-sm:text-xs max-sm:leading-[175%]"
            >
              {{ positionDetail.description }}
            </p>
          </div>

          <div>
            <h2
              class="mb-4 text-[1.4rem] font-medium max-sm:mb-1.5 max-sm:text-[17px]"
            >
              Responsibilities
            </h2>

            <ol
              class="m-0 flex list-decimal flex-col gap-3 pl-5 max-sm:gap-1.5 max-sm:pl-4"
            >
              <li
                v-for="item in positionDetail.responsibilities"
                :key="item"
                class="text-[14.5px] leading-[1.75] text-[#fffc] max-sm:text-xs max-sm:leading-[175%]"
              >
                {{ item }}
              </li>
            </ol>
          </div>

          <div>
            <h2
              class="mb-4 text-[1.4rem] font-medium max-sm:mb-1.5 max-sm:text-[17px]"
            >
              Qualifications
            </h2>

            <ol
              class="m-0 flex list-decimal flex-col gap-3 pl-5 max-sm:gap-1.5 max-sm:pl-4"
            >
              <li
                v-for="item in positionDetail.qualifications"
                :key="item"
                class="text-[14.5px] leading-[1.75] text-[#fffc] max-sm:text-xs max-sm:leading-[175%]"
              >
                {{ item }}
              </li>
            </ol>
          </div>

          <div
            v-if="
              positionDetail.preferred && positionDetail.preferred.length > 0
            "
          >
            <h2
              class="mb-4 text-[1.4rem] font-medium max-sm:mb-1.5 max-sm:text-[17px]"
            >
              Preferred
            </h2>

            <div class="my-5">
              <ol
                class="m-0 flex list-decimal flex-col gap-3 pl-5 max-sm:gap-1.5 max-sm:pl-4"
              >
                <li
                  v-for="item in positionDetail.preferred"
                  :key="item"
                  class="text-[14.5px] leading-[1.75] text-[#fffc] max-sm:text-xs max-sm:leading-[175%]"
                >
                  {{ item }}
                </li>
              </ol>
            </div>
          </div>
        </motion.section>

        <motion.aside
          class="flex-1 max-lg:w-full w-fit"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.4 }"
        >
          <div
            :class="[
              'flex flex-col gap-6 rounded-[20px] border border-[#ffffff33]',
              'bg-[#ffffff1f] px-8 py-10 shadow-[0_12px_40px_#00000066] backdrop-blur-lg',
              'max-sm:gap-[1.2rem] max-sm:rounded-2xl max-sm:px-5 max-sm:py-6',
            ]"
          >
            <div
              v-for="item in sidebarMetaItems"
              :key="item.label"
              class="flex items-center gap-3 text-lg font-medium max-sm:text-[13px]"
            >
              <img
                fetchpriority="high"
                :src="item.iconPath"
                alt=""
                aria-hidden="true"
                class="size-5 shrink-0 object-contain"
              />

              <span>{{ item.label }}</span>
            </div>

            <a
              :href="APPLY_FORM_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-2 flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-[#1e88ff] to-[#1466a8] px-6 py-3.5 text-lg font-medium text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_#1e88ff33] max-sm:px-5 max-sm:py-3 max-sm:text-sm"
            >
              <span>Apply Now</span>

              <img
                class="size-4 object-contain"
                src="/icons/right-arrow.webp"
                alt=""
                aria-hidden="true"
              />
            </a>
          </div>
        </motion.aside>
      </div>
    </main>
  </div>
</template>
