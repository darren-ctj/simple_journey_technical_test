<script setup lang="ts">
import ContactButton from "@/components/ui/contact-button.vue";
</script>

<template>
  <section
    class="hero relative box-content flex min-h-[220px] w-[60%] items-center rounded-2xl border border-white/5 bg-white/5 px-6 pb-6 shadow-[0_4px_30px_#0000001a] backdrop-blur-[6.5px] max-[768px]:w-[86%]"
  >
    <!-- Original sets an empty inline background-image on this card -->
    <div class="overlay absolute inset-0" />

    <div class="relative z-[9990] flex w-full flex-col">
      <div class="max-w-[500px]">
        <h1
          class="mb-3 font-semibold text-[clamp(2rem,2.8vw,2.25rem)] leading-normal"
        >
          Ready to Discuss This Solution?
        </h1>
        <p class="max-w-[300px] text-base leading-[1.6] opacity-85">
          Discuss your business technology needs with the SimpleJourney team.
        </p>

        <RouterLink to="/contact" class="link-wrapper block">
          <ContactButton label="Let's Get Started" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
