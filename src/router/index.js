import { createRouter, createWebHistory } from 'vue-router';
import Episode from '../pages/Episode.vue'
import Location from '../pages/Location.vue'
import Home from '../components/Home.vue'
import CardDetail from '../components/CardDetail.vue'

const routes = [
    {path: '/',name:'home',component : Home},
    {path: '/episodes',name:'episode',component : Episode},
    {path: '/location',name:'location',component : Location},
    {path: '/detail/:id',name:'cardDetail',component : CardDetail,props:true},


]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router;