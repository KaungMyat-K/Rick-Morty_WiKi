import { createRouter, createWebHistory } from 'vue-router';
import Episode from '../pages/Episode.vue'
import Location from '../pages/Location.vue'
import Home from '../components/Home.vue'

const routes = [
    {path: '/episodes',name:'episode',component : Episode},
    {path: '/location',name:'location',component : Location},
    {path: '/',name:'home',component : Home},

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;