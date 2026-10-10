<script setup lang="ts">
import ContactButton from "@/components/ui/contact-button.vue";
</script>

<template>
  <section
    class="relative box-content flex flex-col rounded-2xl border border-white/5 bg-white/5 px-8 pt-7 pb-9 shadow-[0_4px_30px_#0000001a] backdrop-blur-[6.5px]"
  >
    <h1
      class="mb-3 font-semibold text-[clamp(2rem,2.8vw,2.25rem)] leading-normal"
    >
      Ready to Discuss This Solution?
    </h1>

    <p class="max-w-[300px] text-base leading-[1.6] opacity-85 mb-5">
      Discuss your business technology needs with the SimpleJourney team.
    </p>

    <RouterLink to="/contact" class="block">
      <ContactButton label="Let's Get Started" />
    </RouterLink>
  </section>
</template>
