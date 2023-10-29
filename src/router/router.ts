import {createRouter, createWebHistory} from "vue-router";
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import Contact from '../views/Contact.vue';
import Discover from '../views/Discover.vue';
import Events from '../views/Events.vue';


// The router object to hold the router history and the different routes
const router = createRouter({
    history: createWebHistory(),
    routes: [
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
        }    ],
});
export default router;