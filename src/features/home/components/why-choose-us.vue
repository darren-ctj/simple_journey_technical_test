```vue
<script setup lang="ts">
import { motion } from "motion-v";
import StatementHeading from "@/components/shared/statement-heading.vue";
import FeatureCard from "@/components/shared/feature-card.vue";
import {
  LEFT_FEATURES,
  RIGHT_FEATURES,
  STATEMENT,
} from "@/features/home/constants/feature";

const props = withDefaults(defineProps<{ execution?: boolean }>(), {
  execution: false,
});

const mobileCardOffsets: Record<string, number> = {
  "01": 0,
  "02": -110,
  "03": -140,
  "04": -250,
};

const classes = {
  section: [
    "relative flex items-center justify-center",
    "min-h-[70vh] overflow-hidden p-10 text-white",
    "max-[768px]:max-w-[100vw] max-[768px]:p-0",
    "min-[1280px]:p-[100px_9rem]",
  ],
  background: [
    "absolute inset-0 z-0",
    "bg-[radial-gradient(circle,#090f1633_0%,#050c1433_70%)]",
  ],
  desktopGrid: [
    "relative z-[1] grid",
    "grid-cols-[1fr_1.2fr_1fr] items-center gap-10",
    "max-[1024px]:grid-cols-1 max-[1024px]:text-center",
    "min-[1280px]:gap-32",
  ],
  desktopFeatureColumn: [
    "flex flex-col gap-36",
    "max-[1024px]:items-center",
    "max-[768px]:hidden",
  ],
  desktopHeading: ["block max-w-[560px] text-center", "max-[768px]:hidden"],
  mobileContainer: [
    "hidden",
    "max-[768px]:mb-[-3rem] max-[768px]:mt-[15rem]",
    "max-[768px]:flex max-[768px]:flex-col",
    "max-[768px]:items-center max-[768px]:justify-center",
    "max-[768px]:gap-0 max-[768px]:p-[20px_10px]",
  ],
  mobileHeading: ["mb-[-4vh] block max-w-full pt-20 text-center"],
  mobileFeatureList: ["mt-[-3.5rem] hidden flex-col gap-4", "max-[768px]:flex"],
  animatedCard: ["will-change-transform"],
};

function cardAnimation(offset = 0) {
  const hidden = { opacity: 0, scale: 0.5, y: offset };
  const shown = { opacity: 1, scale: 1, y: offset };

  return {
    initial: hidden,
    animate: props.execution ? shown : hidden,
    transition: { duration: 0.6, ease: "easeOut" as const },
  };
}

const headingAnimation = {
  initial: { opacity: 0, y: 30 },
  transition: { duration: 0.5, ease: "easeOut" as const },
};

function headingTarget() {
  return props.execution ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 };
}
</script>

<template>
  <section :class="classes.section">
    <div :class="classes.background" />

    <!-- Desktop layout -->
    <div :class="classes.desktopGrid">
      <div :class="classes.desktopFeatureColumn">
        <motion.div
          v-for="feature in LEFT_FEATURES"
          :key="feature.number"
          :class="classes.animatedCard"
          v-bind="cardAnimation()"
        >
          <FeatureCard v-bind="feature" />
        </motion.div>
      </div>

      <motion.div
        :class="classes.desktopHeading"
        :initial="headingAnimation.initial"
        :animate="headingTarget()"
        :transition="headingAnimation.transition"
      >
        <StatementHeading brand="WHY CHOOSE US" :statement="STATEMENT" />
      </motion.div>

      <div :class="classes.desktopFeatureColumn">
        <motion.div
          v-for="feature in RIGHT_FEATURES"
          :key="feature.number"
          :class="classes.animatedCard"
          v-bind="cardAnimation()"
        >
          <FeatureCard v-bind="feature" />
        </motion.div>
      </div>
    </div>

    <!-- Mobile layout -->
    <div :class="classes.mobileContainer">
      <motion.div
        :class="classes.mobileHeading"
        :initial="headingAnimation.initial"
        :animate="headingTarget()"
        :transition="headingAnimation.transition"
      >
        <StatementHeading brand="WHY CHOOSE US" :statement="STATEMENT" />
      </motion.div>

      <div :class="classes.mobileFeatureList">
        <motion.div
          v-for="feature in LEFT_FEATURES"
          :key="`mobile-${feature.number}`"
          :class="classes.animatedCard"
          v-bind="cardAnimation(mobileCardOffsets[feature.number])"
        >
          <FeatureCard v-bind="feature" />
        </motion.div>
      </div>

      <div :class="classes.mobileFeatureList">
        <motion.div
          v-for="feature in RIGHT_FEATURES"
          :key="`mobile-${feature.number}`"
          :class="classes.animatedCard"
          v-bind="cardAnimation(mobileCardOffsets[feature.number])"
        >
          <FeatureCard v-bind="feature" />
        </motion.div>
      </div>
    </div>
  </section>
</template>
```
