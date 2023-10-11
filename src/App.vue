<script setup lang="ts">
import NavBar from './components/NavBar.vue'
</script>

<template>
  <!-- Navigation Bar -->
  <div class = "navi-bar">
    <nav-bar>
      <a v-bind:  >
    </nav-bar>
  </div>

  <!-- HERO -->
  <div class = "hero">

  </div>

  <!--    <a href="https://vitejs.dev" target="_blank">-->
  <!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
  <!--    </a>-->
  <!--    <a href="https://vuejs.org/" target="_blank">-->
  <!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
  <!--    </a>-->
</template>

<style scoped>
.navi-bar {
  width: 1512px;
  height: 96px;
  flex-shrink: 0;
  border-radius: 6px 6px 0px 0px;
  background: rgba(255, 255, 255, 0.20);
  box-shadow: 0px 4px 14px 0px rgba(21, 38, 92, 0.40);
}
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
