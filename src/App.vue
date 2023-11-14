<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <!-- Navigation Bar-->
  <div className="w-full px-1 fixed top-0 left-0 p-4 bg-carvr">
    <div className="p-1 w-full">
      <nav-bar className = "top-0 -ml-32 w-full"></nav-bar>
    </div>
  </div>

  <!-- Hero -->
  <div className = "w-full px-6 flex justify-center items-center">
    <div className="xl:max-w-[1280px] w-full">
      <hero></hero>
    </div>
  </div>
</template>

<style scoped>
hero {
  color: black;
}
</style>
