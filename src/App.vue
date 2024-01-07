<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <div class="w-full px-1 fixed top-0 nav_background">
    <div class="w-full">
      <nav-bar className = "top w-full"></nav-bar>
    </div>
  </div>

  <div class = "mt-20 w-full justify-center flex">
    <div class="w-full">
      <hero className = "w-full h-full"></hero>
    </div>
  </div>
</template>

<style>
</style>
