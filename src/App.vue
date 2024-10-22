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
  <div class="w-full top-0 z-10 fixed flex content-center justify-center pt-2">
    <div v-if="showHeader == true"
         class="sm:w-5/6 md:w-7/12 nav flex content-center justify-center shadow-2xl w-screen">
      <nav-bar class="top w-full"></nav-bar>
    </div>
    <div v-else class="flex w-screen">
      <nav-bar-conference class="top w-full"></nav-bar-conference>
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
