import { onBeforeUnmount, onMounted, ref } from "vue";

/**
 * Tracks whether the page has been scrolled past the given threshold.
 * Mirrors the navbar's `scrolled` state from the original site.
 */
export function useScrolled(threshold = 50) {
  const isScrolled = ref(false);

  function handleScroll() {
    isScrolled.value = window.scrollY > threshold;
  }

  onMounted(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { isScrolled };
}
