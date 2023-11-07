<template>

  <div className="w-full flex-1 py-6 px-6 items-center absolute inset-x-0 top-0 max-h-[96px] nav_background">
    <a href="/" className = "">
       <img src = '/src/assets/CARVR2D.png' alt = "carvr logo" className="w-24 h-20 left-0 bg-white">
    </a>
    <ul className="flex px-20 items-center bg-amber-100">
      <li className="cursor-pointer mr-12 duration-300 hover:text-black-400">
        <router-link to="/" class="nav_text text-white">
          Home
        </router-link>
      </li>
      <li className="cursor-pointer mr-12 duration-300 hover:text-black-400">
        <router-link to="/about" class="nav_text text-white">
        About
        </router-link>
      </li>
      <li className="cursor-pointer mr-12 duration-300 hover:text-black-400">
        <router-link to="/events" class="nav_text text-white">
        Events
        </router-link>
      </li>
      <li className="cursor-pointer mr-12 duration-300 hover:text-black-400">
        <router-link to="/discover" class="nav_text text-white">
        Discover
        </router-link>
      </li>
      <li className="cursor-pointer mr-12 duration-300 hover:text-black-400">
        <router-link to="/contact"  class="nav_text text-white">
        Contact
      </router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  data: () => {
    return {
      name: 'nav-bar'
    };
  },
}
</script>

<style scoped>
</style>