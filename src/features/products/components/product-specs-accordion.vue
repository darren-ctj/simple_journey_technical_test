<script setup lang="ts">
import { reactive } from "vue";
import type { ProductDetailSection } from "../constants/product-detail";

defineProps<{
  sections: ProductDetailSection[];
}>();

/** Sections are expanded by default (the original renders "−" icons). */
const expandedState = reactive<Record<string, boolean>>({});

function isSectionExpanded(id: string): boolean {
  return expandedState[id] ?? true;
}

function handleSectionToggle(id: string) {
  expandedState[id] = !isSectionExpanded(id);
}
</script>

<template>
  <div class="container mx-auto w-full text-white">
    <div
      v-for="section in sections"
      :key="section.id"
      class="border-b border-[#2a2a2a]"
    >
      <div
        class="flex cursor-pointer items-center justify-between py-4"
        @click="handleSectionToggle(section.id)"
      >
        <h3 class="m-0 text-lg font-bold">{{ section.title }}</h3>
        <span class="text-xl">{{ isSectionExpanded(section.id) ? "−" : "+" }}</span>
      </div>

      <Transition
        enter-active-class="transition-all duration-300"
        enter-from-class="max-h-0 opacity-0"
        leave-active-class="transition-all duration-300"
        leave-to-class="max-h-0 opacity-0"
      >
        <div
          v-if="isSectionExpanded(section.id)"
          class="max-h-[2000px] overflow-hidden pb-4 text-[#cfcfcf]"
        >
          <div v-if="section.paragraph">
            <p>{{ section.paragraph }}</p>
          </div>

          <ul v-if="section.items" class="m-0 list-none pl-[18px]">
            <li v-for="item in section.items" :key="item" class="my-[6px]">
              {{ item }}
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  </div>
</template>
