<script setup lang="ts">
import { motion } from "motion-v";
import ContactButton from "@/components/ui/contact-button.vue";
</script>

<template>
  <div>
    <section
      :class="[
        'box-content',
        'relative z-[1] flex',
        'max-[768px]:p-5',
        'max-[768px]:flex-col',
        'max-[768px]:items-start',
        'max-[768px]:gap-4',
        'p-[3.5rem_10rem]',
        'items-center justify-between',
      ]"
    >
      <div class="max-w-[700px] max-[768px]:max-w-[100vw]">
        <motion.h1
          :class="[
            'text-[28px] font-bold leading-[150%] mb-4.5',
            'max-[768px]:text-xl',
            'max-[768px]:font-medium',
            'max-[768px]:tracking-[-0.5px]',
            'max-[768px]:mb-3.5',
          ]"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{
            duration: 1,
            delay: 0.3,
          }"
          :in-view-options="{
            once: true,
            amount: 0.2,
          }"
        >
          Start Your IT Modernization Journey
        </motion.h1>

        <motion.p
          :class="[
            'max-w-[500px] text-sm leading-[175%] tracking-[2%]',
            'max-[768px]:max-w-[100vw]',
            'max-[768px]:text-xs',
            'max-[768px]:tracking-normal',
          ]"
          :initial="{ opacity: 0 }"
          :whileInView="{ opacity: 1 }"
          :transition="{
            duration: 1,
            delay: 0.7,
          }"
          :in-view-options="{
            once: true,
            amount: 0.2,
          }"
        >
          We provide strategic guidance and end-to-end solutions tailored to
          your business needs.
        </motion.p>
      </div>

      <motion.div
        :initial="{ opacity: 0 }"
        :whileInView="{ opacity: 1 }"
        :transition="{
          duration: 1,
          delay: 1,
        }"
        :in-view-options="{
          once: true,
          amount: 0.2,
        }"
      >
        <RouterLink to="/contact" class="link-wrapper">
          <ContactButton label="Let's Get Started" />
        </RouterLink>
      </motion.div>
    </section>

    <section
      class="box-content relative flex min-h-[420px] max-w-full items-center overflow-hidden bg-[url(/features/home/cta-section-bg.webp)] bg-cover bg-center bg-no-repeat p-[3rem_4rem]"
    >
      <div
        class="overlay absolute inset-0 bg-[linear-gradient(90deg,#000000bf_0%,#0000008c_40%,#00000040_100%)]"
      />
    </section>
  </div>
</template>
