<script setup lang="ts">
import { computed, ref } from "vue";
import BreadcrumbNavigation from "@/components/shared/breadcrumb-navigation.vue";
import LanguageToggle from "../components/language-toggle.vue";
import SectionNavigation from "../components/section-navigation.vue";
import PrivacyPolicyContent from "../components/privacy-policy-content.vue";
import { BREADCRUMB_ITEMS } from "../constants/breadcrumb";
import { PRIVACY_POLICY_TRANSLATIONS } from "../constants/privacy-policy-content";
import type { Language } from "../types/language";

const activeLanguage = ref<Language>("en");

const translation = computed(
  () => PRIVACY_POLICY_TRANSLATIONS[activeLanguage.value],
);
</script>

<template>
  <div
    class="relative w-[100vw] min-h-screen overflow-x-hidden bg-page text-white"
  >
    <video
      class="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
      autoplay
      loop
      playsinline
    >
      <source src="/features/privacy-policy/bg.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>

    <div class="pointer-events-none absolute inset-0 z-[1] bg-[#01070ed9]" />

    <div
      class="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[300px] bg-gradient-to-b from-[#1e88ff14] to-[#01030400]"
    />

    <div
      class="box-content relative z-[2] max-[640px]:w-[calc(100vw-40px)] w-[70vw] max-[640px]:px-5 max-[640px]:pt-[100px] px-[15%] pt-[140px] pb-20"
    >
      <BreadcrumbNavigation :items="BREADCRUMB_ITEMS" />

      <header class="mb-12 text-left max-[640px]:mb-8">
        <h1
          class="mb-3 bg-gradient-to-br from-white from-30% to-[#a5c7ff] bg-clip-text text-[clamp(2.5rem,4vw,3.5rem)] font-bold tracking-[-1px] text-transparent"
        >
          {{ translation.title }}
        </h1>
        <p class="mb-6 mt-0 text-sm text-footer-link">
          {{ translation.lastUpdated }}
        </p>
        <LanguageToggle v-model="activeLanguage" />
      </header>

      <div
        class="grid grid-cols-[280px_1fr] gap-12 max-[1024px]:grid-cols-1 max-[1024px]:gap-0"
      >
        <SectionNavigation
          :heading="translation.sidebarHeading"
          :sections="translation.sections"
        />
        <PrivacyPolicyContent :sections="translation.sections" />
      </div>
    </div>
  </div>
</template>
