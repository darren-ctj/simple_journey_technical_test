<script setup lang="ts">
import type { BreadcrumbItem } from "@/types/breadcrumb";

defineProps<{
  items: BreadcrumbItem[];
}>();
</script>

<template>
  <nav class="mb-10 flex items-center gap-2 text-sm text-[#d6e3ff]">
    <template v-for="(item, index) in items" :key="item.to">
      <img
        v-if="index > 0"
        src="/icons/diamond-white.png"
        alt=""
        aria-hidden="true"
        class="h-2.5 w-auto"
      />

      <RouterLink
        :to="item.to"
        class="block underline [text-underline-offset:3px]"
        :class="
          index === items.length - 1
            ? 'text-footer-link decoration-primary'
            : 'text-inherit'
        "
      >
        <p class="m-0">{{ item.label }}</p>
      </RouterLink>
    </template>
  </nav>
</template>
