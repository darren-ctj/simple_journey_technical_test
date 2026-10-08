<script setup lang="ts">
import { SOCIAL_LINKS } from "@/constants/link";
</script>

<template>
  <footer
    class="bg-footer max-[768px]:p-5 p-[40px_80px_24px] min-[1280px]:p-[40px_9rem_24px]"
  >
    <div>
      <div>
        <div class="logo flex items-center gap-2.5 text-xl font-semibold">
          <img
            src="/brand/logo.svg"
            alt="Simple Journey"
            class="h-20 w-20 max-[768px]:h-[50px] max-[768px]:w-[50px]"
          />
          <span
            class="text-[3rem] text-footer-accent max-[768px]:text-[35px] max-[768px]:font-semibold max-[768px]:leading-[175%] max-[768px]:tracking-[-2%]"
          >
            Simple Journey
          </span>
        </div>
        <div
          class="set-flex mt-4 flex w-full justify-between max-[768px]:flex-col max-[768px]:gap-4"
        >
          <p
            class="address mt-3 max-w-[500px] text-white text-base leading-[1.6] opacity-75 max-[768px]:text-sm max-[768px]:font-normal max-[768px]:leading-[175%] max-[768px]:tracking-[2%]"
          >
            Ruko Cendana, Jl. Benteng Betawi No.37, RT.004/RW.015, Tanah Tinggi,
            Kec. Tangerang, Kota Tangerang, Banten 15119
          </p>
        </div>
      </div>
    </div>

    <div class="divider my-8 mb-4 h-px bg-divider" />

    <div
      class="bottom flex items-start justify-between max-[768px]:flex-col max-[768px]:gap-3 max-[768px]:text-center"
    >
      <span class="text-sm text-white">
        © 2026 PT Simple Journey. All Rights Reserved. |
        <RouterLink
          to="/privacy-policy"
          class="ml-2 text-footer-link no-underline transition-colors duration-200 hover:text-primary"
        >
          Privacy Policy
        </RouterLink>
      </span>

      <div class="flex gap-4">
        <a
          v-for="social in SOCIAL_LINKS"
          :key="social.name"
          :href="social.href"
          target="_blank"
          rel="noopener"
        >
          <img
            :src="social.icon"
            :alt="social.name"
            class="h-4 w-4 opacity-85 brightness-0 invert transition-opacity duration-200 hover:opacity-100"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
