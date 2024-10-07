<template>
  <section class="h-full z-10 w-full items-center ">
    <div class="flex justify-between">
      <!-- Adjusted to 'justify-start' to align items to the left -->
      <router-link to="/" class="w-fit">
        <img src='../assets/CARVR2D.png' alt="carvr logo" class="w-24 h-20">
      </router-link>
      <div class="flex items-center h-20"> <!-- New wrapper for the remaining navbar items -->
        <ul class="hidden md:flex">
          <li class="mr-12">
            <router-link to="/" :class="{active: isActive('/')}" class="nav_text">
              Home
            </router-link>
          </li>
          <li class="mr-12">
            <a href="https://discord.gg/cYseCtevW9" class="nav_text">Join</a>
          </li>
          <li class="mr-12">
            <a href="https://github.com/carolina-ar-vr" class="nav_text">Projects</a>
          </li>
<!--          <li class="mr-12">-->
<!--            <router-link to="/realityfest" :class="{active: isActive('/realityfest')}" class="nav_text">-->
<!--              Reality Fest-->
<!--            </router-link>-->
<!--          </li>-->
        </ul>
        <li class="flex-shrink-0 ml-auto p-2 md:hidden">
          <router-link to="/">
            <img src='/src/assets/mobilemenu.svg' alt="menu" class=""/>
          </router-link>
        </li>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  methods: {
    isActive(routePath: any) {
      window.scrollTo(0, 0);
      return this.$route.path === routePath;
    }
  },
  data: () => {
    return {
      name: 'nav-bar'
    };
  },
}
</script>

<style scoped>
</style>