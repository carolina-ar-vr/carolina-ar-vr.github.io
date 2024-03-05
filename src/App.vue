<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <div class="w-full px-1 shadow-2xl bg-carvr top-0 z-10 ">
    <div class="w-full">
      <nav-bar className = "top w-screen"></nav-bar>
    </div>
  </div>

  <div class = "mt-20 w-full justify-center flex z-20">
    <div class="w-full h-screen">
      <hero className = "w-screen h-screen"></hero>
    </div>
  </div>
</template>

<style>
</style>
