<template>
  <div class="p-4 h-screen w-full md:w-auto flex items-center justify-between">
    <ul class="flex items-center flex-shrink">
      <router-link to= "/" class = "pr-10">
        <img src = '/src/assets/CARVR2D.png' alt = "carvr logo" class="w-24 h-20">
      </router-link>
      <li class="invisible w-0 md:visible md:w-fit cursor-pointer mr-12">
        <router-link to="/" :class="{active: isActive('/')}" class="nav_text">
          Home
        </router-link>
      </li>
      <li class="invisible w-0 md:visible md:w-fit cursor-pointer mr-12">
        <router-link to="/about" :class=" {active: isActive('/about') }" class="nav_text">
        About
        </router-link>
      </li>
      <li class="invisible w-0 md:visible md:w-fit cursor-pointer mr-12">
        <router-link to="/discover" :class=" {active: isActive('/discover')}" class="nav_text">
        Discover
        </router-link>
      </li>
      <li class="invisible w-0 md:visible md:w-fit cursor-pointer mr-12">
        <a href="https://linktr.ee/carvr" class = "nav_text">Join</a>
      </li>
      <li class = "flex-shrink-0 ml-auto p-2 md:hidden">
        <router-link to="/">
          <img src='/src/assets/mobilemenu.svg' alt="search" class=""/>
        </router-link>
      </li>
    </ul>
  </div>
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