<template>
  <div class="p-4 h-screen w-full md:w-auto flex items-center justify-between">
    <ul class="flex items-center flex-shrink">
      <router-link to= "/" class = "pr-10">
        <img src = '/src/assets/CARVR2D.png' alt = "carvr logo" class="w-24 h-20">
      </router-link>
      <li class="cursor-pointer mr-12 duration-900 hover:text-black-400">
        <router-link :class=" {active: isActive('/')}" to="/" class="nav_text">
          Home
        </router-link>
      </li>
      <li class="cursor-pointer mr-12 duration-300 hover:text-black-400">
        <router-link :class=" {active: isActive('/about')}" to="/about" class="nav_text">
        About
        </router-link>
      </li>
      <li class="cursor-pointer mr-12 duration-300 hover:text-black-400 ">
        <router-link :class=" {active: isActive('/events')}" to="/events" class="nav_text">
        Events
        </router-link>
      </li>
      <li class="cursor-pointer mr-12 duration-300 hover:text-black-400">
        <router-link :class=" {active: isActive('/discover')}" to="/discover" class="nav_text">
        Discover
        </router-link>
      </li>
      <li class="cursor-pointer mr-12 duration-300 hover:text-black-400">
        <router-link :class=" {active: isActive('/contact')}" to="/contact"  class="nav_text">
        Contact
      </router-link>
      </li>
      <li class = "flex-shrink-0 ml-auto p-2">
        <router-link to="/">
          <img src='/src/assets/search.svg' alt="search" class="w-6 h-6"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    isActive(routePath) {
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
.active {

}
</style>