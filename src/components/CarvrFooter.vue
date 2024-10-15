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
  <section class="bg-transparent md:bg-carvr-footer">
    <div class="px-16 purpleGradient h-full w-full">
      <div class="flex items-center justify-center">
        <div class="flex flex-row h-12 items-center">
          <ul class="flex justify-between space-x-4 sm:space-x-6 md:space-x-10">
            <li>
              <a href="https://discord.gg/cYseCtevW9" class="nav_text">
                Discord
              </a>
            </li>
            <li>
              <a href="https://github.com/carolina-ar-vr" class="nav_text">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/uncarvr/" class="nav_text">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/uncarvr/" class="nav_text">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://heellife.unc.edu/organization/carvr" class="nav_text">
                HeelLife
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