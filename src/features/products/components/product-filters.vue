<script setup lang="ts">
import { ref } from "vue";

const searchQuery = defineModel<string>("search", { required: true });
const selectedCategory = defineModel<string>("category", { required: true });

defineProps<{
  categories: string[];
}>();

const isDropdownOpen = ref(false);

function handleDropdownToggle() {
  isDropdownOpen.value = !isDropdownOpen.value;
}

function handleCategorySelect(category: string) {
  selectedCategory.value = category;
  isDropdownOpen.value = false;
}
</script>

<template>
  <div
    class="mb-10 flex w-full max-w-full items-center justify-between max-[768px]:flex-col max-[768px]:items-center max-[768px]:gap-4"
  >
    <div class="w-full max-w-[420px]">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search products..."
        class="w-[80%] rounded-full border border-white bg-[linear-gradient(145deg,#141620e6,#0a0c14e6)] p-[14px_20px] text-[15px] text-white outline-none transition-all duration-300 placeholder:text-[#ffffff8c] hover:border-[#788cff66] focus:border-[#7b8cff] focus:shadow-[0_0_0_3px_#7b8cff40] max-[768px]:w-[88%]"
      />
    </div>

    <div class="relative w-[20%] max-w-full max-[768px]:w-full">
      <button
        type="button"
        class="flex w-full cursor-pointer items-center justify-between rounded-full border border-white bg-[linear-gradient(145deg,#141620e6,#0a0c14e6)] p-[14px_20px] text-white transition-all duration-300 hover:border-[#788cff66] max-[480px]:p-[12px_16px] max-[480px]:text-sm"
        :aria-expanded="isDropdownOpen"
        @click="handleDropdownToggle"
      >
        <span class="text-[15px]">{{ selectedCategory }}</span>
        <svg
          class="icon opacity-80 transition-transform duration-300"
          :class="{ 'rotate-180': isDropdownOpen }"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <Transition
        enter-active-class="transition-all duration-[250ms]"
        enter-from-class="opacity-0 -translate-y-2"
        leave-active-class="transition-all duration-[250ms]"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <ul
          v-if="isDropdownOpen"
          class="dropdown absolute left-0 top-[calc(100%+10px)] z-10 w-full rounded-[14px] border border-white/8 bg-[#0f111bf2] p-2 backdrop-blur-md"
        >
          <li
            v-for="category in categories"
            :key="category"
            class="cursor-pointer px-[18px] py-3 text-sm text-white/80 transition-colors duration-[250ms] hover:bg-[#7b8cff26]"
            :class="{
              'font-medium text-[#7b8cff]': selectedCategory === category,
            }"
            @click="handleCategorySelect(category)"
          >
            {{ category }}
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>
