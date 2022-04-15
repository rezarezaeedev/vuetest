import { createRouter, createWebHistory }  from 'vue-router';
import TheHome from './components/TheHome.vue'
import EachPost from './components/EachPost.vue'

const routes = [
    {path:'/', component:TheHome},
    {path:'/post/:id', component:EachPost},
]

const router = createRouter({
                        history:createWebHistory(),
                        routes:routes
                    })



export default router
