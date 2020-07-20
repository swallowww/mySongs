import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Home from '../pages/home.vue'

const router = new VueRouter({
    routes: [{
        path: '/',
        component: Home,
        meta: {
            title: "北冥有燕-原创音乐存档"
        },
    }]
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

export default router;