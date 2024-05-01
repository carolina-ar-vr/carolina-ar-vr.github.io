<template>
  <section class="p-1 h-full z-10 w-full items-center ">
    <div class="flex justify-between"> <!-- Adjusted to 'justify-start' to align items to the left -->
      <router-link to="/" class="pr-10 w-fit">
        <img src='../assets/CARVR2D.png' alt="carvr logo" class="w-24 h-20">
      </router-link>
      <div class="flex items-center h-20"> <!-- New wrapper for the remaining navbar items -->
        <ul class="flex">
          <li class="hidden md:block cursor-pointer mr-12">
            <router-link to="/" :class="{active: isActive('/')}" class="nav_text">
              Home
            </router-link>
          </li>
<!--                <li class="hidden md:block cursor-pointer mr-12">-->
<!--                  <router-link to="/about" :class=" {active: isActive('/about') }" class="nav_text">-->
<!--                  About-->
<!--                  </router-link>-->
<!--                </li>-->
          <!--      <li class="hidden md:block cursor-pointer mr-12">-->
          <!--        <router-link to="/discover" :class=" {active: isActive('/discover')}" class="nav_text">-->
          <!--        Discover-->
          <!--        </router-link>-->
          <!--      </li>-->
          <li class="hidden md:block cursor-pointer mr-12">
            <a href="https://github.com/carolina-ar-vr" class="nav_text">Projects</a>
          </li>
          <li class="hidden md:block cursor-pointer mr-12">
            <a href="https://linktr.ee/carvr" class="nav_text">Join</a>
          </li>
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
      window.scrollTo(0,0);
      return this.$route.path === routePath;
    }},
  data: () => {
    return {
      name: 'nav-bar'
    };
  },
}
</script>

<style scoped>
</style>