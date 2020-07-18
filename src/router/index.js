import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/home.vue'

const router = new VueRouter({
    routes: [
        { path: '/', component: Home }
    ]
})

export default router;