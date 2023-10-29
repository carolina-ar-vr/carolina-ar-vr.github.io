import Vue from 'vue';
import VueRouter, {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';
import {createApp} from 'vue';
import './style.css';

import router from './router/router.ts';

// Initialization of app object
const app = createApp(App);

// To utilize the routes for the app
app.use(router);

// To mount the object upon
app.mount('#app');

