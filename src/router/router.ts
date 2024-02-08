import {createRouter, createWebHistory} from "vue-router";
import About from '../views/About.vue';
import Home from '../views/Home.vue';
import Join from '../views/Join.vue';
import Discover from '../views/Discover.vue';


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
            path: '/join',
            name: 'Join',
            component: Join
        },
        {
            path: '/discover',
            name: 'Discover',
            component: Discover
        },
    ],
});
export default router;