import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: () =>
        import ('../views/hz.sy.mine/Home.vue')
}, ]

const router = new VueRouter({
    routes
})

export default router