<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import ContactButton from "../ui/contact-button.vue";
import { useScrolled } from "@/composables/use-scrolled";
import { MENU_ITEMS } from "@/constants/menu.ts";

const route = useRoute();
const { isScrolled } = useScrolled();

const isMobileMenuOpen = ref(false);

function isMenuLinkActive(to: string): boolean {
  return to === "/" ? route.path === "/" : route.path.startsWith(to);
}

function handleMenuToggle() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function handleNavigationClick() {
  isMobileMenuOpen.value = false;
}
</script>

<template>
  <nav
    :class="[
      // Base
      'fixed left-[4%] top-[2%] z-[9998] flex w-[90vw] items-center justify-between transition-all duration-300',
      // Mobile: < 380px
      'max-[380px]:left-[1svh]',
      'max-[380px]:w-[96vw]',
      // Mobile: < 820px
      'max-[819px]:left-[1.1svh]',
      'max-[819px]:top-4',
      'max-[819px]:w-[85vw]',
      'max-[819px]:rounded-[90px]',
      'max-[819px]:border',
      'max-[819px]:border-navigation-border',
      'max-[819px]:bg-[#ffffff0d]',
      'max-[819px]:px-[1.2rem]',
      'max-[819px]:py-[0.6rem]',
      'max-[819px]:shadow-[0_4px_30px_#0000001a]',
      // Tablet: > 820px and < 1000px
      'min-[820px]:max-[1000px]:w-[100vw]',
      // Desktop: >= 1280px
      'min-[1280px]:left-[7%]',
      'min-[1280px]:top-[3%]',
      'min-[1280px]:w-[85vw]',
      'min-[1280px]:rounded-[90px]',
      'min-[1280px]:border',
      'min-[1280px]:border-navigation-border',
      'min-[1280px]:shadow-[0_4px_30px_#0000001a]',
      // Scrolled state
      isScrolled && [
        'overflow-hidden',
        '!bg-nav-surface/90',
        '!shadow-[0_8px_32px_#0000004d]',
      ],
    ]"
  >
    <div
      class="flex items-center gap-2.5 min-[1280px]:px-[1.2rem] min-[1280px]:py-[1.22rem]"
    >
      <img
        src="/brand/logo-with-text.png"
        alt="Simple Journey Indonesia Logo"
        class="h-[50px] w-auto"
      />
    </div>

    <div
      class="flex items-center gap-4 max-[819px]:gap-1.5 min-[1280px]:px-10 min-[1280px]:py-4"
    >
      <!-- Desktop menu -->
      <ul
        class="m-0 hidden list-none items-center justify-center gap-8 p-0 min-[1000px]:flex min-[1280px]:gap-16"
      >
        <li v-for="item in MENU_ITEMS" :key="item.to">
          <RouterLink
            :to="item.to"
            class="group relative text-base text-navigation-foreground no-underline transition-colors duration-300 hover:text-primary"
            :class="{ 'font-semibold text-primary': isMenuLinkActive(item.to) }"
          >
            {{ item.label }}

            <span
              class="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-primary transition-[width] duration-300 group-hover:w-full"
              :class="{ 'w-full': isMenuLinkActive(item.to) }"
            />
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/contact" class="block">
            <ContactButton />
          </RouterLink>
        </li>
      </ul>

      <!-- Call to action -->
      <RouterLink to="/contact" class="block min-[1000px]:hidden">
        <ContactButton />
      </RouterLink>

      <!-- Hamburger icon -->
      <button
        type="button"
        aria-label="Toggle menu"
        :aria-expanded="isMobileMenuOpen"
        class="flex cursor-pointer flex-col gap-1 border-none bg-transparent px-1.5 py-0.25 min-[1000px]:hidden"
        @click="handleMenuToggle"
      >
        <span
          class="h-px w-5 bg-white transition-all duration-400"
          :class="isMobileMenuOpen ? 'translate-y-[5px] rotate-45' : ''"
        />
        <span
          class="h-px w-5 bg-white transition-all duration-400"
          :class="{ 'opacity-0': isMobileMenuOpen }"
        />
        <span
          class="h-px w-5 bg-white transition-all duration-400"
          :class="{ 'opacity-0': isMobileMenuOpen }"
        />
        <span
          class="h-px w-5 bg-white transition-all duration-400"
          :class="isMobileMenuOpen ? '-translate-y-[5px] -rotate-45' : ''"
        />
      </button>
    </div>
  </nav>

  <!-- Mobile menu -->
  <Transition
    enter-active-class="transition-all duration-600 ease-out"
    enter-from-class="translate-x-full opacity-0"
    enter-to-class="translate-x-0 opacity-100"
    leave-active-class="transition-all duration-600 ease-in"
    leave-from-class="translate-x-0 opacity-100"
    leave-to-class="translate-x-full opacity-0"
  >
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-[9998] flex h-full w-screen justify-center pt-20 bg-nav-surface/80 backdrop-blur-md min-[820px]:hidden"
    >
      <button
        type="button"
        aria-label="Close menu"
        class="absolute right-[5%] top-[3%] flex cursor-pointer flex-col gap-1 border-none bg-transparent p-1"
        @click="handleMenuToggle"
      >
        <span
          class="h-px w-5 translate-x-[6px] translate-y-[9px] rotate-45 bg-white"
        />
        <span class="h-px w-5 opacity-0" />
        <span class="h-px w-5 opacity-0" />
        <span
          class="h-px w-5 translate-x-[6px] -translate-y-[6px] -rotate-45 bg-white"
        />
      </button>

      <div class="flex flex-col items-center gap-[2.3rem]">
        <RouterLink
          v-for="item in MENU_ITEMS"
          :key="`mobile-${item.to}`"
          :to="item.to"
          :class="[
            'rounded-lg px-3 py-2 text-base no-underline transition-all duration-300 hover:bg-primary/10',
            isMenuLinkActive(item.to)
              ? 'font-semibold text-primary'
              : 'text-white',
          ]"
          @click="handleNavigationClick"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </Transition>
</template>
