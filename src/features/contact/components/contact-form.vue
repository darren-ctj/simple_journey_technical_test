<script setup lang="ts">
import { ref } from "vue";
import { motion } from "motion-v";

const name = ref("");
const email = ref("");
const phone = ref("");
const message = ref("");

const isSubmitted = ref(false);

const inputClasses = [
  "w-full border-b border-[#ffffff66] bg-transparent p-2.5 text-[15px] text-white outline-none",
  "placeholder:text-muted-slate",
  "focus:border-white",
];

function handleFormSubmit() {
  isSubmitted.value = true;
}

function handleCloseModal() {
  isSubmitted.value = false;
}
</script>

<template>
  <section
    :class="[
      'min-h-svh overflow-y-auto pl-[60px] [overflow-scrolling:touch]',
      'max-md:min-h-0 max-md:p-[55px_0]',
    ]"
  >
    <form
      :class="[
        'mx-auto max-w-[600px] rounded-2xl border border-[#ffffffed] bg-[#ffffff05] p-10',
        'shadow-[0_4px_30px_#0000001a] backdrop-blur-[9.7px]',
        'max-md:p-5',
      ]"
      @submit.prevent="handleFormSubmit"
    >
      <div class="mb-[30px] w-full">
        <input
          v-model="name"
          type="text"
          placeholder="Name"
          required
          :class="inputClasses"
        />
      </div>

      <div
        :class="[
          'grid grid-cols-2 gap-10',
          'max-md:grid-cols-1 max-md:gap-0',
        ]"
      >
        <div class="mb-[30px]">
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            required
            :class="inputClasses"
          />
        </div>

        <div class="mb-[30px]">
          <input
            v-model="phone"
            type="tel"
            placeholder="Phone"
            minlength="8"
            maxlength="15"
            pattern="[0-9]+"
            required
            :class="inputClasses"
          />
        </div>
      </div>

      <div class="mb-[30px] w-full">
        <textarea
          v-model="message"
          placeholder="Message"
          rows="3"
          required
          :class="inputClasses"
        />
      </div>

      <button
        type="submit"
        :class="[
          'mt-[30px] w-full cursor-pointer rounded-full border-none',
          'bg-gradient-primary py-4 text-base text-white',
          'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_#1e88ff66]',
        ]"
      >
        Submit
      </button>
    </form>

    <Teleport to="body">
      <Transition
        enter-active-class="transition-opacity duration-300"
        enter-from-class="opacity-0"
        leave-active-class="transition-opacity duration-300"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isSubmitted"
          class="fixed inset-0 z-[9999] flex h-screen w-screen items-center justify-center"
        >
          <motion.div
            :class="[
              'relative w-[65%] max-w-[400px] rounded-2xl border border-[#ffffff33] px-8 py-10 text-center',
              'bg-[linear-gradient(135deg,#06080a_0%,#1565c0_500%)] shadow-[0_8px_32px_#1f268780]',
              'max-md:max-w-[340px] max-md:px-6 max-md:py-8',
            ]"
            :initial="{ opacity: 0, scale: 0.9 }"
            :animate="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }"
          >
            <button
              type="button"
              aria-label="Close modal"
              class="absolute right-3 top-3 cursor-pointer border-none bg-transparent text-2xl text-white transition-transform duration-200 hover:rotate-90"
              @click="handleCloseModal"
            >
              ×
            </button>

            <motion.div
              class="mb-4 text-5xl"
              :animate="{ y: [0, -10, 0] }"
              :transition="{ duration: 2, repeat: Infinity, ease: 'easeInOut' }"
            >
              ✅
            </motion.div>

            <h2
              class="mb-3 bg-gradient-to-br from-[#1e88ff] to-[#2196f3] bg-clip-text text-2xl font-bold text-transparent max-md:text-xl"
            >
              Message Sent!
            </h2>

            <p
              class="mb-7 text-[15px] leading-[1.6] text-muted-slate max-md:text-sm"
            >
              Thank you for reaching out. Our team will get back to you shortly.
            </p>

            <button
              type="button"
              :class="[
                'cursor-pointer rounded-full border-none py-3 px-10 text-[15px] font-medium text-white',
                'bg-[linear-gradient(135deg,#1e88ff_0%,#1565c0_100%)] shadow-[0_4px_15px_#1e88ff33]',
                'transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_#1e88ff66]',
                'max-md:px-6 max-md:py-2.5 max-md:text-sm',
              ]"
              @click="handleCloseModal"
            >
              Got It
            </button>
          </motion.div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>