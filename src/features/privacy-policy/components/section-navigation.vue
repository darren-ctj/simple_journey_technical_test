<script setup lang="ts">
import type { PrivacyPolicySection } from "../types/privacy-policy";

defineProps<{
  heading: string;
  sections: PrivacyPolicySection[];
}>();
</script>

<template>
  <aside class="sticky top-[120px] h-fit max-[1024px]:hidden">
    <div
      class="rounded-2xl border border-white/5 bg-nav-surface/40 p-6 backdrop-blur-[20px]"
    >
      <h3
        class="mb-4 mt-0 text-base font-semibold uppercase tracking-[1px] text-primary"
      >
        {{ heading }}
      </h3>

      <ul class="m-0 flex list-none flex-col gap-3 p-0">
        <li v-for="section in sections" :key="section.id">
          <a
            :href="`#${section.id}`"
            class="block text-sm leading-[1.4] text-footer-link no-underline transition-colors duration-200 hover:text-primary"
          >
            {{ section.sidebarLabel }}
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
