<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <div class="w-full px-1 top-0 z-10 fixed flex content-center justify-center pt-4">
    <div class="w-7/12 nav flex content-center justify-center shadow-2xl">
      <nav-bar className = "top w-screen"></nav-bar>
    </div>
  </div>


  <div class = " w-full justify-center flex">
    <div class="w-full h-screen">
      <hero className = "w-screen h-screen"></hero>
    </div>
  </div>
</template>

<style>
  .nav {
    border-radius: 15px;
    background-color: rgba(126, 189, 229, 0.70);
  }
</style>
