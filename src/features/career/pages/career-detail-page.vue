<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { motion } from "motion-v";
import CareerDetailHero from "../components/career-detail-hero.vue";
import {
  APPLY_FORM_URL,
  CAREER_POSITION_DETAILS,
  DEFAULT_POSITION_DETAIL,
} from "../constants/career-detail";
import { CAREER_POSITIONS } from "../constants/career";

const route = useRoute();

const position = computed(() =>
  CAREER_POSITIONS.find((item) => item.slug === route.params.slug),
);

const positionTitle = computed(
  () => position.value?.title ?? `Shift Engineer - ${route.params.slug}`,
);

const positionDetail = computed(
  () =>
    CAREER_POSITION_DETAILS[String(route.params.slug)] ??
    DEFAULT_POSITION_DETAIL,
);

const breadcrumbItems = [
  { label: "Home", to: "/" },
  { label: "Career", to: "/career" },
  { label: String(route.params.slug), to: `/career/${route.params.slug}` },
];

const sidebarMetaItems = computed(() => [
  {
    label: position.value?.employmentType ?? "Full Time",
    iconPath: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 6v6l4 2",
  },
  {
    label: position.value?.location ?? "Onsite - Tangerang",
    iconPath:
      "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
  },
]);

const listClasses = [
  "m-0 flex list-decimal flex-col gap-3 pl-5",
  "max-sm:gap-1.5 max-sm:pl-4",
];

const listItemClasses = [
  "text-[14.5px] leading-[1.75] text-[#fffc]",
  "max-sm:text-xs max-sm:leading-[175%]",
];

const headingClasses = [
  "mb-4 font-sans text-[1.4rem] font-medium",
  "max-sm:mb-1.5 max-sm:text-[17px]",
];

const sectionClasses = "mb-14 max-sm:mb-9";
</script>

<template>
  <div class="relative min-h-screen overflow-x-hidden bg-[#01070e] text-white">
    <CareerDetailHero
      :job-title="positionTitle"
      :breadcrumb-items="breadcrumbItems"
    />

    <main
      :class="[
        'relative z-[5] mx-auto -mt-[220px] flex items-start justify-between gap-20 px-36 pb-30',
        'max-lg:-mt-40 max-lg:flex-col max-lg:gap-12 max-lg:px-8 max-lg:pb-20',
        'max-sm:-mt-[150px] max-sm:gap-10 max-sm:pb-[60px]',
      ]"
    >
      <motion.section
        class="flex-[3]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 0.2 }"
      >
        <div :class="sectionClasses">
          <h2 :class="headingClasses">Description</h2>

          <p
            :class="[
              'm-0 text-[15px] leading-[1.8] text-[#fffc]',
              'max-sm:text-xs max-sm:leading-[175%]',
            ]"
          >
            {{ positionDetail.description }}
          </p>
        </div>

        <div :class="sectionClasses">
          <h2 :class="headingClasses">Responsibilities</h2>

          <ol :class="listClasses">
            <li
              v-for="item in positionDetail.responsibilities"
              :key="item"
              :class="listItemClasses"
            >
              {{ item }}
            </li>
          </ol>
        </div>

        <div :class="sectionClasses">
          <h2 :class="headingClasses">Qualifications</h2>

          <ol :class="listClasses">
            <li
              v-for="item in positionDetail.qualifications"
              :key="item"
              :class="listItemClasses"
            >
              {{ item }}
            </li>
          </ol>
        </div>

        <div v-if="positionDetail.preferred.length > 0" :class="sectionClasses">
          <h2 :class="headingClasses">Preferred</h2>

          <div class="my-5">
            <ol :class="listClasses">
              <li
                v-for="item in positionDetail.preferred"
                :key="item"
                :class="listItemClasses"
              >
                {{ item }}
              </li>
            </ol>
          </div>
        </div>
      </motion.section>

      <motion.aside
        :class="[
          'flex-1 max-lg:static max-lg:w-full',
          'lg:sticky lg:top-[120px]',
        ]"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 1, delay: 0.4 }"
      >
        <div
          :class="[
            'flex flex-col gap-6 rounded-[20px] border border-[#ffffff33] bg-[#ffffff1f] px-8 py-10',
            'shadow-[0_12px_40px_#00000066] backdrop-blur-lg',
            'max-sm:gap-[1.2rem] max-sm:rounded-2xl max-sm:px-5 max-sm:py-6',
          ]"
        >
          <div
            v-for="item in sidebarMetaItems"
            :key="item.label"
            class="flex items-center gap-3 text-lg font-medium max-sm:text-[13px]"
          >
            <svg
              class="size-5 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path :d="item.iconPath" />
            </svg>

            <span>{{ item.label }}</span>
          </div>

          <a
            :href="APPLY_FORM_URL"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'mt-2 flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-b from-[#1e88ff] to-[#1466a8] px-6 py-3.5 text-lg font-medium text-white no-underline',
              'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_#1e88ff33]',
              'max-sm:px-5 max-sm:py-3 max-sm:text-sm',
            ]"
          >
            <span>Apply Now</span>

            <img
              fetchpriority="high"
              class="size-4 object-contain"
              src="/icons/right-arrow.webp"
              alt="arrow"
            />
          </a>
        </div>
      </motion.aside>
    </main>
  </div>
</template>