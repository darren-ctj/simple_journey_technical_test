<script setup lang="ts">
import { useRouter } from "vue-router";
import { motion } from "motion-v";
import StatementHeading from "@/components/shared/statement-heading.vue";
import ProductCard from "@/components/ui/product-card.vue";

const router = useRouter();

function handleViewMore() {
  router.push("/products");
}
</script>

<template>
  <section
    class="products-section relative bg-[url(/product_others_hero.webp)] bg-cover bg-center bg-no-repeat p-[40px_10rem] text-white max-[768px]:p-[20px_15px]!"
  >
    <div
      class="overlay absolute inset-0 z-[1] bg-[radial-gradient(circle,#050c148c_0%,#050c14e6_70%)]"
    ></div>

    <div
      class="header mb-6 flex items-center justify-between max-[768px]:mb-0 max-[768px]:flex-col max-[768px]:items-center max-[768px]:justify-start max-[768px]:gap-0"
    >
      <div class="title-width max-w-1/2 max-[768px]:max-w-full">
        <StatementHeading
          brand="OUR SOLUTIONS"
          statement="Delivering scalable digital solutions that support operational excellence"
        />
      </div>
      <div
        class="info-width relative z-[5] max-w-[23%] leading-[2] max-[768px]:mb-8 max-[768px]:mt-[-6rem] max-[768px]:max-w-full"
      >
        <motion.p
          :initial="{ opacity: 0 }"
          :whileInView="{ opacity: 1 }"
          :transition="{ duration: 1, delay: 1 }"
          :in-view-options="{ once: true, amount: 0.2 }"
          class="max-[768px]:w-full max-[768px]:text-xs max-[768px]:font-normal max-[768px]:leading-[175%] max-[768px]:tracking-normal"
        >
          Our products are developed to help organizations streamline processes,
          enhance efficiency, and adopt modern digital capabilities.
        </motion.p>
      </div>
    </div>

    <motion.div
      class="cards relative z-[5] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-12"
      :initial="{ opacity: 0 }"
      :whileInView="{ opacity: 1 }"
      :transition="{ duration: 1, delay: 1.5 }"
      :in-view-options="{ once: true, amount: 0.2 }"
    >
      <RouterLink to="/products/seamless-passenger" class="card-link">
        <ProductCard
          badge="Software"
          image="/features/home/solutions/seamless-passenger.png"
          title="Seamless Passenger"
        />
      </RouterLink>
      <RouterLink to="/products/passport-issuance" class="card-link">
        <ProductCard
          badge="Software"
          image="/features/home/solutions/passport-issuance.png"
          title="Passport Issuance"
        />
      </RouterLink>
    </motion.div>

    <motion.p
      class="view-more relative z-[3] mt-6 inline-block cursor-pointer text-[#4da3ff] no-underline"
      :initial="{ opacity: 0 }"
      :whileInView="{ opacity: 1 }"
      :transition="{ duration: 1, delay: 0.7 }"
      :in-view-options="{ once: true, amount: 0.2 }"
      @click="handleViewMore"
    >
      View More →
    </motion.p>
  </section>
</template>
