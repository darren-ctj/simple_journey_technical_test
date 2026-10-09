<script setup lang="ts">
import { motion } from "motion-v";
import ContactButton from "@/components/ui/contact-button.vue";
</script>

<template>
  <section
    class="relative box-content flex min-h-[220px] max-w-full items-center overflow-hidden bg-[url(/features/products/cta-section-bg.webp)] bg-cover bg-center bg-no-repeat p-12 text-white max-[768px]:p-5"
  >
    <!-- Placeholder background: replace with /collaborate.jpg asset when available -->
    <div
      class="overlay absolute inset-0 bg-[linear-gradient(90deg,#000000bf_0%,#0000008c_40%,#00000040_100%)]"
    />

    <div
      class="relative z-[999] flex flex-col items-center p-10 max-[768px]:p-0"
    >
      <div class="max-w-[700px] text-left max-[768px]:max-w-full">
        <motion.h1
          class="mb-3 font-medium text-[clamp(2rem,2.8vw,2.25rem)] max-[768px]:text-xl"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.3 }"
        >
          Ready to Collaborate With Us?
        </motion.h1>

        <motion.p
          class="max-w-[600px] text-base leading-[175%] tracking-[2%] max-[768px]:max-w-[80%] max-[768px]:text-sm"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.7 }"
        >
          Discuss your business technology needs with the SimpleJourney team.
        </motion.p>

        <motion.div
          class="max-w-[200px]"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 1 }"
        >
          <RouterLink to="/contact" class="link-wrapper block">
            <ContactButton label="Let's Get Started" />
          </RouterLink>
        </motion.div>
      </div>
    </div>
  </section>
</template>
