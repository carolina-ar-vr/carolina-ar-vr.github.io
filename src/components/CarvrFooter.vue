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
  <section class = "bg-carvr-footer">
    <div class = "px-16 purpleGradient h-full w-full">
      <div class = "flex items-center justify-center">
          <div class = "flex flex-row h-20 items-center">
              <ul class = "flex justify-between space-x-2 sm:space-x-4 md:space-x-10">
                  <li>
                    <a href="https://discord.gg/cYseCtevW9" class = "nav_text transition-none footer">
                    Discord
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/carolina-ar-vr" class = "nav_text transition-none footer">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/uncarvr/" class = "nav_text transition-none footer">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/uncarvr/" class = "nav_text transition-none footer">
                      LinkedIn
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