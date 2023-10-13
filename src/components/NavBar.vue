<template>

  <header :class = "{ 'scrolled-nav' : scrollPosition }"> 
  <nav>
    <div class="brand">
      <img src="" class="src">
    </div>
    <ul class="navigation">
      <li><router-link to="/" >Home</router-link></li>

      <li><router-link to="/about">About</router-link></li>

      <li><router-link to="/events" >Events</router-link></li>

      <li><router-link to="/discover" >Discover</router-link></li>

      <li><router-link to="/contact" >Contact</router-link></li>
    </ul>
  </nav>
  </header>

<!--  <div>-->
<!--    <ul>-->
<!--      <li><router-link to="/" >Home</router-link></li>-->

<!--      <li><router-link to="/about">About</router-link></li>-->

<!--      <li><router-link to="/events" >Events</router-link></li>-->

<!--      <li><router-link to="/discover" >Discover</router-link></li>-->

<!--      <li><router-link to="/contact" >Contact</router-link></li>-->
<!--    </ul>-->
<!--  </div>-->
</template>

<script lang="ts">
import { Vue } from 'vue';
import {VueRouter} from 'vue-router';
import About from './directories/About.vue'
import Contact from './directories/Contact.vue';
import Discover from './directories/Discover.vue';
import Events from './directories/Events.vue';
import Home from './directories/Home.vue';


export default {
  data: () => {
    return {
      name: 'nav-bar'
    };
  },
}
</script>

<style scoped>
  h1 {
    color: #213547;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
  }
  li {
    margin-right: 15px;
  }
  a {
    color: white;
    text-decoration: none;
  }
</style>