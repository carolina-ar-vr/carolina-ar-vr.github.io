import {createApp} from 'vue';

import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';
import Home from './components/directories/Home.vue';
import Contact from './components/directories/Contact.vue';
import Discover from './components/directories/Discover.vue';
import Events from './components/directories/Events.vue';
import About from './components/directories/About.vue';



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

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
export default router;
createApp(App).mount('#app')
