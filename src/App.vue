<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <div class="w-full top-0 z-10 fixed flex content-center justify-center pt-2">
    <div class="sm:w-5/6 md:w-7/12 nav flex content-center justify-center shadow-2xl">
      <nav-bar class="top w-screen"></nav-bar>
    </div>
  </div>


  <div class="w-full justify-center flex">
    <div class="w-full h-full">
      <hero class=""></hero>
    </div>
  </div>
</template>

<style>
.nav {
  border-radius: 15px;
  background-color: rgba(126, 189, 229, 0.70);
}
</style>
