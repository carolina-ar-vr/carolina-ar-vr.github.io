<template>
  <div>
    <h1>TEST</h1>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue';
import {VueRouter} from 'vue-router';
import About from './directories/About.vue'
import Contact from './directories/Contact.vue';
import Discover from './directories/Discover.vue';
import Events from './directories/Events.vue';
import Home from './directories/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/discover',
    name: 'Discover',
    component: Discover
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  }
]


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
</style>