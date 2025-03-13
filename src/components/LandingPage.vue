<script lang="ts">
import FadeInImage from "./FadeInImage.vue";

export default {
  components: {FadeInImage},
  data: () => {
    return {
      name: 'landing-page'
    };
  },
}
</script>

<template>
  <section class="landing-page">
    <div class="w-full min-h-screen flex flex-row align-middle">
      <div class="w-full flex items-center md:w-1/2">
        <div class="justify-center flex-col relative pb-14 md:pl-14">
          <div class="grid place-items-center md:place-items-start">
            <h1 class="glitch text-6xl title text-center md:text-7xl md:text-left md:left-auto md:translate-x-0"
                data-text="CAROLINA">CAROLINA</h1>
            <br>
            <h1 class="glitch text-6xl title text-center md:text-7xl md:text-left md:left-auto md:translate-x-0"
                data-text="AR/VR">AR/VR</h1>
          </div>
          <div class="pt-10 pb-14 px-10 text text-center md:text-left md:px-0">
            UNC-Chapel Hill’s extended reality student organization!
          </div>
          <div class="flex justify-center md:justify-start">
            <a href="https://discord.gg/cYseCtevW9">
              <button class="button text-xl h-16 w-64">
                JOIN
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
          class="hidden lg:flex lg:items-center lg:justify-center lg:w-1/2 lg:block overflow-hidden">
        <fade-in-image alt="carvr logo"></fade-in-image>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>