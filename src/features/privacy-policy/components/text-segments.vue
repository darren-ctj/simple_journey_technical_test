<script setup lang="ts">
import type { TextSegment } from "../types/privacy-policy";

defineProps<{
  segments: TextSegment[];
}>();
</script>

<template>
  <span>
    <template v-for="(segment, index) in segments" :key="index">
      <a
        v-if="segment.type === 'link'"
        :href="segment.href"
        :target="segment.external ? '_blank' : undefined"
        :rel="segment.external ? 'noopener' : undefined"
        class="text-primary no-underline transition-[text-decoration] duration-200 hover:underline"
        >{{ segment.text }}</a
      >
      <strong v-else-if="segment.type === 'bold'">{{ segment.text }}</strong>
      <template v-else>{{ segment.text }}</template>
    </template>
  </span>
</template>
