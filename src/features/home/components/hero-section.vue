<template>
  <section
    class="relative min-h-[90vh] overflow-hidden bg-[url('/hero.png')] bg-cover bg-center bg-no-repeat p-[140px_80px_80px] text-white max-[1024px]:p-[120px_40px_60px] max-[640px]:min-h-[80vh] max-[640px]:p-[100px_24px_50px]"
  >
    <video
      class="absolute inset-0 z-0 h-full w-full object-cover"
      autoplay
      loop
      muted
      playsinline
    >
      <source src="/features/home/hero-section-bg.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>

    <div class="absolute inset-0 z-[1] bg-[#050c14]/50" />

    <div class="relative z-[2] box-content max-w-[70vw] px-[15%]">
      <div
        class="absolute left-[3%] top-[37rem] flex w-[85vw] items-center justify-between gap-12 max-[1024px]:flex-col max-[1024px]:items-start max-[640px]:left-0 max-[640px]:top-[37vh] max-[640px]:w-[95vw] max-[640px]:gap-4"
      >
        <!-- Left -->
        <div
          class="max-w-1/2 translate-y-[1000px] opacity-0 animate-[hero-enter_1s_ease-out_forwards] max-[1024px]:max-w-[95%]"
        >
          <span
            class="text-[clamp(2.5rem,3.3vw,3rem)] font-medium leading-[150%] max-[1024px]:text-[4vh] max-[640px]:text-[30px]"
          >
            Accelerating Your Digital Transformation
          </span>
        </div>

        <!-- Right -->
        <div
          class="flex max-w-[380px] translate-y-[1000px] justify-end opacity-0 animate-[hero-enter_1s_0.2s_ease-out_forwards] max-[1024px]:max-w-full"
        >
          <span
            class="text-base leading-[1.7] max-[1024px]:font-normal max-[1024px]:leading-[175%] max-[1024px]:tracking-[2%] max-[640px]:text-sm"
          >
            Enterprise-grade solutions for scalable,<br />
            secure, and future-ready systems.
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
