<script setup lang="ts">
interface StatementHeadingProps {
  brand?: string;
  statement: string;
  align?: "center" | "left";
}

withDefaults(defineProps<StatementHeadingProps>(), {
  brand: "SIMPLE JOURNEY",
  align: "center",
});
</script>

<template>
  <section
    :class="[
      'relative z-[100] min-h-[200px]',
      align === 'left' ? 'text-left' : 'text-center',
    ]"
  >
    <div class="relative z-20 max-w-[1100px]">
      <div
        class="inline-flex items-center gap-[10px] animate-fade-in [animation-delay:300ms] opacity-0"
      >
        <img
          src="/icons/diamond.png"
          alt="brand icon"
          class="size-[14px] object-contain"
        />

        <span class="text-base text-[#4da3ff]">
          {{ brand }}
        </span>
      </div>

      <h1
        class="mt-0 font-sans text-[clamp(2rem,2.8vw,2.25rem)] font-medium leading-[150%] tracking-[-0.5px] animate-[fade-in_1s_ease_forwards] [animation-delay:1s] opacity-0 max-[1024px]:text-[24px] max-[640px]:text-[20px] max-[640px]:leading-[1.6]"
      >
        {{ statement }}
      </h1>
    </div>
  </section>
</template>
