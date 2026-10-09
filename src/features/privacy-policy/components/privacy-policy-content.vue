<script setup lang="ts">
import { motion } from "motion-v";
import TextSegments from "./text-segments.vue";
import type { PrivacyPolicySection } from "../types/privacy-policy";
import {
  HEADING_CLASS,
  PARAGRAPH_CLASS,
  LIST_CLASS,
  LIST_ITEM_CLASS,
  CONTACT_PARAGRAPH_CLASS,
} from "../constants/classes";

defineProps<{
  sections: PrivacyPolicySection[];
}>();
</script>

<template>
  <div>
    <article
      class="rounded-[20px] border border-white/4 bg-nav-surface/20 max-[640px]:p-5max-[1024px]:p-[30px] p-10 backdrop-blur-[20px] shadow-[0_20px_40px_#0003]"
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
          class="mb-10 last:mb-0 scroll-mt-[8rem]"
        >
          <h2 :class="HEADING_CLASS">{{ section.heading }}</h2>

          <template
            v-for="(block, blockIndex) in section.blocks"
            :key="blockIndex"
          >
            <p v-if="block.kind === 'paragraph'" :class="PARAGRAPH_CLASS">
              <TextSegments :segments="block.segments" />
            </p>

            <ul v-else-if="block.kind === 'list'" :class="LIST_CLASS">
              <li
                v-for="(item, itemIndex) in block.items"
                :key="itemIndex"
                :class="LIST_ITEM_CLASS"
              >
                <TextSegments :segments="item" />
              </li>
            </ul>

            <div
              v-else
              class="mt-5 rounded-xl border border-primary/15 bg-primary/4 p-6"
            >
              <p
                v-for="(paragraph, paragraphIndex) in block.paragraphs"
                :key="paragraphIndex"
                :class="CONTACT_PARAGRAPH_CLASS"
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
