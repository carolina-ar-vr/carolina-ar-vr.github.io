import App from './App.vue';
import {createApp} from 'vue';
import './style.css';
import images from './images.ts'

import router from './router/router.ts';

// Initialization of app object
const app = createApp(App);

// To utilize the routes for the app
app.use(router);
app.provide('images', images);

// To mount the object upon
app.mount('#app');

