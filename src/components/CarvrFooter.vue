<script lang="ts">
export default {
  data: () => {
    return {
      name: 'carvr-footer'
    };
  },
}
</script>

<template>
  <section class="footer_background mt-20">
    <div class="flex flex-col items-center justify-center w-full md:flex-row p-4">
      <div class="flex flex-col justify-center items-center md:justify-end md:flex-row md:space-x-16 w-3/4">
        <router-link to="/" class="flex items-center w-1/2 h-1/2 md:w-1/4 md:h-1/4">
          <img src='../assets/CARVR2D.png' alt="carvr logo">
        </router-link>
        <a href="https://www.icxr.org/" class="w-2/3 h-1/2 md:w-1/3 md:h-1/3 flex justify-center">
          <img src="../assets/ICXR-Member-Transparent-White.png" class="" alt="ICXR membership" >
        </a>
      </div>

      <div class="hidden md:block w-px bg-gray-300 self-stretch ml-32"></div>
      <div class="block md:hidden h-px w-full bg-gray-300/20 my-4"></div>

      <div class="flex flex-col justify-center w-3/4 text-lg">
        <div class="flex flex-col justify-center items-center">
          <h2 class="font-bold text-gray-200/50">Connect with us!</h2>
          <ul class="[&>li]:flex [&>li]:justify-center w-full space-y-2">
            <li class="">
              <a href="https://www.instagram.com/uncarvr/" class="nav_text">
                Instagram
              </a>
            </li>
            <li class="">
              <a href="https://www.linkedin.com/company/uncarvr/" class="nav_text">
                LinkedIn
              </a>
            </li>
            <li class="">
              <a href="https://heellife.unc.edu/organization/carvr" class="nav_text">
                HeelLife
              </a>
            </li>
            <li class="">
              <a href="https://discord.gg/cYseCtevW9" class="nav_text">
                Discord
              </a>
            </li>
            <li class="">
              <a href="https://linktr.ee/carvr" class="nav_text">
                LinkTree
              </a>
            </li>
        </ul>
        </div>
      </div>
    </div>
  </section>

</template>

<style>

</style>