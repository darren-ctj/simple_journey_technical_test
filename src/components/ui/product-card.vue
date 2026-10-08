<script setup lang="ts">
defineProps<{
  badge: string;
  image: string;
  title: string;
}>();
</script>

<template>
  <div
    class="product-card box-content max-w-[40vw] rounded-[12px] border border-white bg-black p-4 text-white max-[768px]:max-h-[50vh] max-[768px]:w-full max-[768px]:max-w-[83vw] hover:scale-[1.02] hover:ease-in hover:transition-all hover:duration-300"
  >
    <div
      class="image-wrapper relative my-4 h-[30rem] overflow-hidden rounded-[16px] bg-white/10 shadow-[0_4px_30px_#0000001a] backdrop-blur-[1.4px] max-[768px]:max-h-[35vh]"
    >
      <span
        class="badge absolute left-[2%] top-[3%] rounded-[12px] bg-[#323232] px-3 py-1 text-xs text-white"
      >
        {{ badge }}
      </span>
      <img
        :src="image"
        :alt="title"
        class="block h-full w-full object-contain"
        style="border-radius: 12px"
      />
    </div>
    <h3 class="title mt-2 text-base">{{ title }}</h3>
  </div>
</template>
