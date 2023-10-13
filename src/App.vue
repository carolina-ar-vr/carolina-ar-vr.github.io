<script setup lang="ts">
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
</script>

<template>
  <!-- Navigation Bar-->
  <div class = "navi-bar">
    <nav-bar>
    </nav-bar>
  </div>

  <!-- Hero -->
  <div class = "hero">
    <hero>
    </hero>
  </div>

  <!--    <a href="https://vitejs.dev" target="_blank">-->
  <!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
  <!--    </a>-->
  <!--    <a href="https://vuejs.org/" target="_blank">-->
  <!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
  <!--    </a>-->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
