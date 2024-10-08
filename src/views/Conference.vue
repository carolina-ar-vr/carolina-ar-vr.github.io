<template>
  <section class="align-middle">
    <div class="w-full h-screen flex flex-col md:flex-row">
      <div class="w-full flex items-center md:h-full md:w-1/2">
        <div class="grid place-items-center md:place-items-start w-full">
          <h1 class="glitch text-6xl title text-center md:text-7xl md:text-left md:left-auto md:translate-x-0 mt-40"
              data-text="REALITY FEST">REALITY FEST
          </h1>
          <h2 class="glitch text-5xl title text-center">
            ‘Catchphrase’
          </h2>
        </div>
      </div>
      <div class="w-full mt-10 px-4 flex items-center md:h-full md:w-1/2">
        <img src="../assets/RF_HL.png" alt="realityfest"
             class="rounded-2xl shadow-2xl">
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import FadeInImage from "../components/FadeInImage.vue";

  export default {
    components: {FadeInImage},
    data: () => {
      return {
        name: 'Conference'
      };
    },
  }
</script>

<style scoped>

</style>