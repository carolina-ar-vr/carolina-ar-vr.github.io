<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <!-- Navigation Bar-->
  <div className="w-full px-6 flex justify-center items-center">
    <div className="xl:max-w-[1280px] w-full">
      <nav-bar></nav-bar>
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
