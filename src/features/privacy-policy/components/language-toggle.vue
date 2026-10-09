<script setup lang="ts">
import { LANGUAGES } from "../constants/language";
import type { Language } from "../types/language";

const activeLanguage = defineModel<Language>({ required: true });

function handleLanguageSelect(value: Language) {
  activeLanguage.value = value;
}
</script>

<template>
  <div class="flex justify-start">
    <div
      class="inline-flex gap-1 rounded-[30px] border border-white/8 bg-white/3 p-1 backdrop-blur-[8px]"
    >
      <button
        v-for="language in LANGUAGES"
        :key="language.value"
        type="button"
        :class="[
          'cursor-pointer rounded-[20px] border-none px-5 py-2 text-sm font-semibold transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]',
          activeLanguage === language.value
            ? 'bg-primary text-white shadow-[0_4px_12px_#1e88ff4d]'
            : 'bg-transparent text-footer-link',
        ]"
        @click="handleLanguageSelect(language.value)"
      >
        {{ language.label }}
      </button>
    </div>
  </div>
</template>
