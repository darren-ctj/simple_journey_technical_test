<script setup lang="ts">
import { ref } from "vue";
import { useScroll, useTransform, motion } from "motion-v";
import StatementHeading from "@/components/shared/statement-heading.vue";
import { SERVICES } from "../constants/service";

const wrapperRef = ref<HTMLElement | null>(null);

const { scrollYProgress } = useScroll({
  target: wrapperRef,
  offset: ["start start", "end end"],
});

const cardAnimations = SERVICES.map((_, index) => {
  const upStart = index * 0.25;
  const upEnd = upStart + 0.05;
  const downStart = upStart + 0.2;
  const downEnd = upStart + 0.3;

  const opacity =
    index === SERVICES.length - 1
      ? useTransform(scrollYProgress, [upStart, upEnd], [0, 1])
      : useTransform(
          scrollYProgress,
          [upStart, upEnd, downStart, downEnd],
          [0, 1, 1, 0],
        );

  const y =
    index === SERVICES.length - 1
      ? useTransform(scrollYProgress, () => 0)
      : useTransform(scrollYProgress, [downStart, downEnd], [0, -50]);

  const pointerEvents = useTransform(opacity, (value) =>
    value >= 0.5 ? "auto" : "none",
  );

  return { opacity, y, pointerEvents };
});
</script>

<template>
  <div ref="wrapperRef" class="services-wrapper relative">
    <section
      class="services-section sticky top-0 min-h-screen w-full bg-black px-0 py-20 font-[Inter,sans-serif] text-[#e5e7eb] max-[768px]:min-h-0 max-[768px]:py-5"
    >
      <div class="container mx-auto max-w-[95vw] min-[1280px]:max-w-[85vw]">
        <header
          class="header mb-[60px] max-w-[500px] max-[768px]:mb-[-60px] max-[768px]:max-w-[80%]"
        >
          <StatementHeading
            align="left"
            brand="OUR SERVICES"
            statement="Comprehensive IT Solutions for Your Business"
          />
        </header>

        <motion.div
          class="container-card relative h-[60vh] overflow-hidden max-[768px]:h-auto max-[768px]:min-h-[50vh]"
          :initial="{ opacity: 0 }"
          :whileInView="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 0.7 }"
          :in-view-options="{ once: true, amount: 0.2 }"
        >
          <div class="cards-wrapper relative h-full max-[768px]:h-[35rem]">
            <motion.article
              v-for="(service, index) in SERVICES"
              :key="service.title"
              class="service-card absolute left-0 right-0 top-0 flex h-[30rem] items-center gap-10 rounded-[10px] border-[0.5px] border-[#f7f3f3ee] bg-black p-10 max-[768px]:bottom-0 max-[768px]:h-auto max-[768px]:flex-col max-[768px]:gap-0 max-[768px]:p-[20px_30px]"
              :style="cardAnimations[index]"
            >
              <template v-if="service.imageFirst">
                <div class="image flex flex-1 justify-center">
                  <video
                    :src="`/features/home/services${service.video}`"
                    autoplay
                    loop
                    playsinline
                    class="h-[95%] w-full max-w-[70%] rounded-[12px] object-cover max-[768px]:max-w-full"
                  ></video>
                </div>
                <div class="content flex-1">
                  <h2
                    class="mb-5 text-[clamp(2rem,2.8vw,2.25rem)] font-medium leading-[150%] tracking-[-0.5px] max-[768px]:text-xl"
                  >
                    {{ service.title }}
                  </h2>
                  <p
                    class="text-base font-normal leading-[175%] tracking-[0.02em] max-[768px]:text-sm"
                  >
                    {{ service.description }}
                  </p>
                </div>
              </template>

              <template v-else>
                <div class="content flex-1">
                  <h2
                    class="mb-5 text-[clamp(2rem,2.8vw,2.25rem)] font-medium leading-[150%] tracking-[-0.5px] max-[768px]:text-xl"
                  >
                    {{ service.title }}
                  </h2>
                  <p
                    class="text-base font-normal leading-[175%] tracking-[0.02em] max-[768px]:text-sm"
                  >
                    {{ service.description }}
                  </p>
                </div>
                <div class="image flex flex-1 justify-center">
                  <video
                    :src="`/features/home/services${service.video}`"
                    autoplay
                    loop
                    playsinline
                    class="h-[95%] w-full max-w-[70%] rounded-[12px] object-cover max-[768px]:max-w-full"
                  ></video>
                </div>
              </template>
            </motion.article>
          </div>
        </motion.div>
      </div>
    </section>
    <!-- Scroll distance held while the section is pinned (original: end "+=200%"). -->
    <div class="h-[200vh]" aria-hidden="true"></div>
  </div>
</template>
