import {createApp} from 'vue';

// import {createRouter, createWebHistory} from 'vue-router';
import './style.css';
import App from './App.vue';
import About from './router/About.vue';
import Home from './router/Home.vue';
import Contact from './router/Contact.vue';
import Discover from './router/Discover.vue';
import Events from './router/Events.vue';


import './style.css';

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



createApp(App).mount('#app')


// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// })
// export default router;
