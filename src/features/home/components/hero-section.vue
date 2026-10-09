<script setup lang="ts">
import { motion } from "motion-v";
</script>

<template>
  <section
    :class="[
      'relative',
      'box-content overflow-hidden text-white',
      'min-h-[90vh] p-[8.75rem_5rem_5rem]',
      // <= 1024px
      'max-[1024px]:p-[7.5rem_2.5rem_3.75rem]',
      // <= 640px
      'max-[640px]:min-h-[80vh]',
      'max-[640px]:p-[6.25rem_1.5rem_3.125rem]',
    ]"
  >
    <video
      class="absolute inset-0 z-0 h-full w-full object-cover"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/features/home/hero-section-bg.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 z-[1] bg-panel/50" />

    <div class="relative z-[2] max-w-[70vw] px-[15%]">
      <div
        class="absolute left-[3%] top-[37rem] flex w-[85vw] items-center justify-between gap-12"
        :class="[
          // <= 1024px
          'max-[1024px]:flex-col',
          'max-[1024px]:items-start',
          // <= 640px
          'max-[640px]:left-0',
          'max-[640px]:top-[37vh]',
          'max-[640px]:w-[95vw]',
          'max-[640px]:gap-4',
        ]"
      >
        <!-- Left: Heading -->
        <motion.div
          class="max-w-1/2 max-[1024px]:max-w-[95%]"
          :initial="{ y: 1000, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :transition="{
            duration: 1,
            ease: 'easeOut',
          }"
        >
          <span
            class="text-[clamp(2.5rem,3.3vw,3rem)] font-medium leading-[150%]"
            :class="[
              // <= 1024px
              'max-[1024px]:text-[4vh]',
              // <= 640px
              'max-[640px]:text-[30px]',
            ]"
          >
            Accelerating Your Digital Transformation
          </span>
        </motion.div>

        <!-- Right: Description -->
        <motion.div
          class="flex max-w-[380px] justify-end max-[1024px]:max-w-full"
          :initial="{ y: 1000, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :transition="{
            duration: 1,
            delay: 0.2,
            ease: 'easeOut',
          }"
        >
          <span
            class="text-base leading-[1.7]"
            :class="[
              // <= 1024px
              'max-[1024px]:font-normal',
              'max-[1024px]:leading-[175%]',
              'max-[1024px]:tracking-[2%]',
              // <= 640px
              'max-[640px]:text-sm',
            ]"
          >
            Enterprise-grade solutions for scalable,<br />
            secure, and future-ready systems.
          </span>
        </motion.div>
      </div>
    </div>
  </section>
</template>
