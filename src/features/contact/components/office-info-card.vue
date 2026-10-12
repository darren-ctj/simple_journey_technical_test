<script setup lang="ts">
defineProps<{
  icon: string;
  label: string;
  value: string;
}>();
</script>

<template>
  <article
    :class="[
      'flex gap-8 rounded-[14px] p-6 text-white',
      'max-md:p-3.5 max-md:gap-4',
    ]"
  >
    <div class="flex items-center gap-4">
      <div
        :class="[
          'flex size-11 shrink-0 items-center justify-center rounded-[10px] border border-[#ffffff40]',
          'max-md:size-9',
        ]"
      >
        <img
          fetchpriority="high"
          :src="icon"
          :alt="label"
          class="size-5 object-contain"
        />
      </div>
    </div>

    <div class="flex flex-col gap-[0.1rem]">
      <p
        :class="[
          'm-0 text-sm leading-[1.6] text-[#ffffffbf]',
          'max-md:text-xs',
        ]"
      >
        {{ label }}
      </p>

      <h3
        :class="[
          'm-0 max-w-[60%] text-lg font-semibold leading-[1.5] tracking-[1px]',
          'max-md:max-w-full max-md:text-sm max-md:font-medium',
        ]"
      >
        {{ value }}
      </h3>
    </div>
  </article>
</template>
