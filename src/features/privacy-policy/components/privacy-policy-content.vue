<script setup lang="ts">
import { motion } from "motion-v";
import TextSegments from "./text-segments.vue";
import type { PrivacyPolicySection } from "../types/privacy-policy";

defineProps<{
  sections: PrivacyPolicySection[];
}>();

/**
 * Shared class sets that mirror the repeated descendant rules of
 * the original `.content-section` styles.
 */
const headingClass =
  "mb-4 mt-0 border-b border-white/5 pb-2 text-[22px] font-semibold text-white max-[640px]:text-lg";
const paragraphClass =
  "mb-4 mt-0 text-base leading-[1.7] text-navigation-foreground opacity-85 max-[640px]:text-sm";
const listClass = "mb-4 mt-0 list-none pl-5";
const listItemClass =
  "mb-2.5 text-[15px] leading-[1.7] text-navigation-foreground opacity-85 max-[640px]:text-sm";
const contactParagraphClass =
  "mb-2.5 mt-0 text-[15px] leading-[1.7] text-navigation-foreground opacity-85 last:mb-0";
</script>

<template>
  <div class="content-body">
    <article
      class="rounded-[20px] border border-white/4 bg-nav-surface/20 p-10 shadow-[0_20px_40px_#0003] backdrop-blur-[20px] max-[1024px]:p-[30px] max-[640px]:p-5"
    >
      <motion.div
        :initial="{ opacity: 0, y: 10 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }"
      >
        <section
          v-for="section in sections"
          :id="section.id"
          :key="section.id"
          class="content-section mb-10 last:mb-0"
        >
          <h2 :class="headingClass">{{ section.heading }}</h2>

          <template
            v-for="(block, blockIndex) in section.blocks"
            :key="blockIndex"
          >
            <p v-if="block.kind === 'paragraph'" :class="paragraphClass">
              <TextSegments :segments="block.segments" />
            </p>

            <ul v-else-if="block.kind === 'list'" :class="listClass">
              <li
                v-for="(item, itemIndex) in block.items"
                :key="itemIndex"
                :class="listItemClass"
              >
                <TextSegments :segments="item" />
              </li>
            </ul>

            <div
              v-else
              class="mt-5 rounded-xl border border-[#1e88ff26] bg-[#1e88ff0a] p-6"
            >
              <p
                v-for="(paragraph, paragraphIndex) in block.paragraphs"
                :key="paragraphIndex"
                :class="contactParagraphClass"
              >
                <TextSegments :segments="paragraph" />
              </p>
            </div>
          </template>
        </section>
      </motion.div>
    </article>
  </div>
</template>
