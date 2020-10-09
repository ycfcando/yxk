import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('../views/index/index.vue')
  },
  {
    path: '/hangzhou'
  },
  {
    path:'/meet',
    component:()=>import('../views/meet.jx/Meetjx.vue'),
  },
  {
    path:'/meetjx',
    component:()=>import('../views/meet.jx/Meetjxs.vue')
  },
  {
    path: '/community'
  },
  {
    path: '/mine'
  }
]

const router = new VueRouter({
  routes
})

export default router
