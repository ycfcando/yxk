import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        component: () =>
            import ('../views/index/index.vue')
    },
    {
        path: '/hangzhou'
    },
    {
        path: '/meet'
    },
    {
        path: '/community'
    },
    {
        path: '/mine',
        component: () =>
            import ('../views/hz.sy.mine/Home.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router