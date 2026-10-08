<script setup lang="ts">
import { motion } from "motion-v";
import StatementHeading from "../../../components/shared/statement-heading.vue";
import FeatureCard from "../../../components/shared/feature-card.vue";

interface Feature {
  number: string;
  title: string;
  description: string;
}

const props = withDefaults(defineProps<{ execution?: boolean }>(), {
  execution: false,
});

const leftFeatures: Feature[] = [
  {
    number: "01",
    title: "Experienced & Proven Team",
    description:
      "Our team brings deep expertise in delivering complex digital solutions for diverse industries.",
  },
  {
    number: "03",
    title: "Reliable & Scalable Technology",
    description:
      "We utilize technology architectures that support long-term growth and modernization.",
  },
];

const rightFeatures: Feature[] = [
  {
    number: "02",
    title: "Tailored to Your Business",
    description:
      "We design solutions based on your operational challenges and industry context.",
  },
  {
    number: "04",
    title: "Integrated End to End Support",
    description:
      "Supporting clients from consultation and implementation to maintenance.",
  },
];

/** Original mobile capture offsets each stacked card a little further up. */
const mobileCardOffsets: Record<string, number> = {
  "01": 0,
  "02": -110,
  "03": -140,
  "04": -250,
};

const statement = "Expertise, Speed, and Targeted Solutions";

function cardAnimation(offset = 0) {
  const hidden = { opacity: 0, scale: 0.5, y: offset };
  const shown = { opacity: 1, scale: 1, y: offset };
  return {
    initial: hidden,
    animate: props.execution ? shown : hidden,
    transition: { duration: 0.6, ease: "easeOut" as const },
  };
}
</script>

<template>
  <section
    class="why-choose relative flex min-h-[70vh] items-center justify-center overflow-hidden p-10 text-white max-[768px]:max-w-[100vw] max-[768px]:p-0 min-[1280px]:p-[100px_9rem]"
  >
    <div
      class="absolute inset-0 z-0 bg-[radial-gradient(circle,#090f1633_0%,#050c1433_70%)]"
    />

    <div
      class="grid relative z-[1] grid grid-cols-[1fr_1.2fr_1fr] items-center gap-10 max-[1024px]:grid-cols-1 max-[1024px]:text-center min-[1280px]:gap-32"
    >
      <div
        class="column left flex flex-col gap-36 max-[1024px]:items-center max-[768px]:hidden"
      >
        <motion.div
          v-for="feature in leftFeatures"
          :key="feature.number"
          class="feature-card-item will-change-transform"
          v-bind="cardAnimation()"
        >
          <FeatureCard v-bind="feature" />
        </motion.div>
      </div>

      <motion.div
        class="center block max-w-[560px] text-center max-[768px]:hidden"
        :initial="{ opacity: 0, y: 30 }"
        :animate="execution ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
        :transition="{ duration: 0.5, ease: 'easeOut' }"
      >
        <StatementHeading brand="WHY CHOOSE US" :statement="statement" />
      </motion.div>

      <div
        class="column right flex flex-col gap-36 max-[1024px]:items-center max-[768px]:hidden"
      >
        <motion.div
          v-for="feature in rightFeatures"
          :key="feature.number"
          class="feature-card-item will-change-transform"
          v-bind="cardAnimation()"
        >
          <FeatureCard v-bind="feature" />
        </motion.div>
      </div>
    </div>

    <div
      class="mobile-display hidden max-[768px]:mb-[-3rem] max-[768px]:mt-[15rem] max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-center max-[768px]:gap-0 max-[768px]:p-[20px_10px]"
    >
      <motion.div
        class="center-mobile mb-[-4vh] block max-w-full pt-20 text-center"
        :initial="{ opacity: 0, y: 30 }"
        :animate="execution ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }"
        :transition="{ duration: 0.5, ease: 'easeOut' }"
      >
        <StatementHeading brand="WHY CHOOSE US" :statement="statement" />
      </motion.div>

      <div
        class="column-mobile left mt-[-3.5rem] hidden flex-col gap-4 max-[768px]:flex"
      >
        <motion.div
          v-for="feature in leftFeatures"
          :key="`mobile-${feature.number}`"
          class="feature-card-item-mobile will-change-transform"
          v-bind="cardAnimation(mobileCardOffsets[feature.number])"
        >
          <FeatureCard v-bind="feature" />
        </motion.div>
      </div>
      <div
        class="column-mobile right mt-[-3.5rem] hidden flex-col gap-4 max-[768px]:flex"
      >
        <motion.div
          v-for="feature in rightFeatures"
          :key="`mobile-${feature.number}`"
          class="feature-card-item-mobile will-change-transform"
          v-bind="cardAnimation(mobileCardOffsets[feature.number])"
        >
          <FeatureCard v-bind="feature" />
        </motion.div>
      </div>
    </div>
  </section>
</template>
