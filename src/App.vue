<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import NavBarConference from "./components/NavBarConference.vue";

// Access the current route
const route = useRoute();

// Define the routes where the Header should be hidden
const hideHeaderOnRoutes = ['/realityfest'];

// Determine whether to show the header
const showHeader = computed(() => {
  return !hideHeaderOnRoutes.includes(route.path);
});

</script>

<template>
  <div class="w-full z-10 fixed md:relative flex content-center justify-center">
    <div v-if="showHeader == true"
         class="w-full nav flex content-center justify-center shadow-2xl">
      <nav-bar class="top w-full nav_background"></nav-bar>
    </div>
    <div v-else class="flex w-screen">
      <nav-bar-conference class="top w-full"></nav-bar-conference>
    </div>
  </div>
  <div class="w-full h-full justify-center flex">
    <hero class="hero_background"></hero>
  </div>

</template>

<style>

</style>
