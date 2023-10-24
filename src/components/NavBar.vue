<template>

  <div className="w-full flex py-6 px-6 items-center absolute inset-x-0 top-0 max-h-[96px] nav_background">
    <ul className="flex px-20 items-center">
      <li>
        <img src = '/src/assets/CARVR2D.png' alt = "carvr logo" className="w-24 h-20">
      </li>
      <li>
        <router-link to="/" className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
          Home
        </router-link>
      </li>
      <li><router-link to="/about" className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
        About
      </router-link></li>

      <li><router-link to="/events" className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
        Events
      </router-link></li>

      <li><router-link to="/discover" className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
        Discover
      </router-link></li>
      <li><router-link to="/contact" className="cursor-pointer mr-12 text-white nav_text hover:scale-125 duration-300 hover:text-black-400">
        Contact
      </router-link></li>
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